// ゲームを開く関数
function playGame(gameUrl) {
    // ボタンを押した時の効果音を再生（任意）
    playClickSound();
    
    // ボタンに押された感じのアニメーション
    const clickedButton = event.target.closest('.game-button');
    if (clickedButton) {
        clickedButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            clickedButton.style.transform = '';
        }, 150);
    }
    
    // 少し遅延してからゲームページを開く
    setTimeout(() => {
        window.open(gameUrl, '_blank');
    }, 200);
}

// クリック音を再生する関数（オプション）
function playClickSound() {
    // Web Audio APIを使った簡単なクリック音
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
        // 音が出せない場合はエラーを無視
        console.log('クリック音を再生できませんでした:', error);
    }
}

// ページが読み込まれた時の処理
document.addEventListener('DOMContentLoaded', function() {
    // ボタンにキーボードサポートを追加
    const gameButtons = document.querySelectorAll('.game-button');
    
    gameButtons.forEach((button, index) => {
        // Enterキーでも動作するように
        button.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                button.click();
            }
        });
        
        // フォーカス時の見た目を改善
        button.addEventListener('focus', function() {
            button.style.outline = '3px solid #4CAF50';
            button.style.outlineOffset = '2px';
        });
        
        button.addEventListener('blur', function() {
            button.style.outline = 'none';
        });
    });
    
    // ページ読み込み時のアニメーション
    animateButtons();
});

// ボタンのアニメーション関数
function animateButtons() {
    const buttons = document.querySelectorAll('.game-button');
    
    buttons.forEach((button, index) => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            button.style.transition = 'all 0.6s ease';
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// タッチデバイス向けのタッチフィードバック
document.addEventListener('touchstart', function() {
    // タッチ開始時の処理
}, { passive: true });

// エラーハンドリング
window.addEventListener('error', function(event) {
    console.log('エラーが発生しました:', event.error);
});

// ゲーム統計（任意 - 将来の拡張用）
let gameStats = {
    totalClicks: 0,
    favoriteGame: null
};

// 統計を更新する関数
function updateStats(gameUrl) {
    gameStats.totalClicks++;
    
    // ローカルストレージに保存（ブラウザが対応している場合）
    try {
        localStorage.setItem('gameStats', JSON.stringify(gameStats));
    } catch (error) {
        // ローカルストレージが使えない場合は無視
        console.log('統計を保存できませんでした:', error);
    }
}

// レスポンシブデザインの調整
function adjustForMobile() {
    const isMobile = window.innerWidth <= 768;
    const buttons = document.querySelectorAll('.game-button');
    
    if (isMobile) {
        buttons.forEach(button => {
            button.style.minHeight = '100px';
        });
    }
}

// ウィンドウサイズ変更時の調整
window.addEventListener('resize', adjustForMobile);

// 初期化
document.addEventListener('DOMContentLoaded', adjustForMobile);