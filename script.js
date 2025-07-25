// ゲームデータ
const gameData = [
    { title: 'ねこキャッチゲーム', category: 'action', keywords: 'ねこ 猫 キャッチ 動物' },
    { title: '化合物クイズゲーム', category: 'quiz learning', keywords: '化合物 科学 理科 クイズ' },
    { title: 'あみだくじゲーム', category: 'adventure', keywords: 'あみだ くじ 運 選択' },
    { title: 'バトルゲーム（基本）', category: 'battle', keywords: 'バトル 戦闘 戦い' },
    { title: '迷路クイズRPG', category: 'adventure quiz', keywords: '迷路 RPG クイズ 冒険' },
    { title: '英単語クイズゲーム', category: 'quiz learning', keywords: '英語 英単語 学習 勉強' },
    { title: '色育成ゲーム', category: 'adventure', keywords: '色 育成 カラー' },
    { title: '酸アルバトルゲーム', category: 'battle learning', keywords: '酸 アルカリ 化学 バトル' },
    { title: 'バトルゲーム2（進化版）', category: 'battle', keywords: 'バトル 戦闘 進化' },
    { title: '選択クイズゲーム', category: 'quiz', keywords: '選択 クイズ 問題' },
    { title: '買い物ゲーム', category: 'adventure', keywords: '買い物 ショッピング お金' },
    { title: '売買シミュレーションゲーム', category: 'adventure', keywords: '売買 商売 シミュレーション' },
    { title: '歴史ストーリークイズ', category: 'quiz learning', keywords: '歴史 勉強 ストーリー' },
    { title: 'ドキドキ診断ゲーム', category: 'quiz', keywords: '診断 ドキドキ 心理' },
    { title: 'セルフトークゲーム', category: 'adventure', keywords: 'セルフトーク 対話 心' },
    { title: 'ロボットランナー', category: 'action', keywords: 'ロボット ランナー 走る' },
    { title: 'サイバーアクション', category: 'action', keywords: 'サイバー アクション SF' },
    { title: 'サイバー英語学習', category: 'quiz learning', keywords: '英語 学習 サイバー 中学' },
    { title: '落下ゲーム', category: 'action', keywords: '落下 キャッチ 反射神経' },
    { title: '対称ゲーム', category: 'adventure', keywords: '対称 パズル 美しい' },
    { title: 'おさんぽ日和', category: 'adventure', keywords: '散歩 探索 のんびり' },
    { title: '呪符覚醒', category: 'battle', keywords: '呪符 魔法 神秘' },
    { title: '給食当番リズム', category: 'action', keywords: '給食 リズム 学校' },
    { title: 'ねこねこねこ', category: 'action', keywords: 'ねこ 猫 たくさん' },
    { title: '平和な世界', category: 'adventure', keywords: '平和 世界 癒し' },
    { title: '坊主めくり', category: 'quiz', keywords: '坊主 めくり カード 伝統' },
    { title: '迷いの森', category: 'adventure', keywords: '森 迷い 神秘 探索' },
    { title: 'クイズ３', category: 'quiz', keywords: 'クイズ 問題 頭脳' }
];

// ゲームを開く関数
function playGame(gameUrl) {
    playClickSound();
    
    const clickedButton = event.target.closest('.game-button');
    if (clickedButton) {
        clickedButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            clickedButton.style.transform = '';
        }, 150);
    }
    
    setTimeout(() => {
        window.open(gameUrl, '_blank');
    }, 200);
    
    // 統計を更新
    updateStats(gameUrl);
}

// クリック音を再生する関数
function playClickSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
       
       gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
       gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
       
       oscillator.start(audioContext.currentTime);
       oscillator.stop(audioContext.currentTime + 0.1);
   } catch (error) {
       console.log('クリック音を再生できませんでした:', error);
   }
}

// 検索機能
function setupSearch() {
   const searchInput = document.getElementById('searchInput');
   const searchClear = document.getElementById('searchClear');
   const gameButtons = document.querySelectorAll('.game-button');
   const noResults = document.getElementById('noResults');
   const gameCount = document.getElementById('gameCount');
   
   searchInput.addEventListener('input', function() {
       const searchTerm = this.value.toLowerCase().trim();
       
       // クリアボタンの表示/非表示
       if (searchTerm) {
           searchClear.style.display = 'flex';
       } else {
           searchClear.style.display = 'none';
       }
       
       filterGames();
   });
   
   // クリアボタンの動作
   searchClear.addEventListener('click', function() {
       searchInput.value = '';
       searchClear.style.display = 'none';
       filterGames();
       searchInput.focus();
   });
}

// カテゴリフィルター機能
function setupCategoryFilter() {
   const categoryButtons = document.querySelectorAll('.category-btn');
   
   categoryButtons.forEach(btn => {
       btn.addEventListener('click', function() {
           // アクティブクラスの切り替え
           categoryButtons.forEach(b => b.classList.remove('active'));
           this.classList.add('active');
           
           filterGames();
       });
   });
}

// ゲームのフィルタリング
function filterGames() {
   const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
   const activeCategory = document.querySelector('.category-btn.active').dataset.category;
   const gameButtons = document.querySelectorAll('.game-button');
   const noResults = document.getElementById('noResults');
   const gameCount = document.getElementById('gameCount');
   
   let visibleCount = 0;
   
   gameButtons.forEach((button, index) => {
       const gameTitle = gameData[index].title.toLowerCase();
       const gameKeywords = gameData[index].keywords.toLowerCase();
       const gameCategory = gameData[index].category;
       
       // 検索条件
       const matchesSearch = !searchTerm || 
           gameTitle.includes(searchTerm) || 
           gameKeywords.includes(searchTerm);
       
       // カテゴリ条件
       const matchesCategory = activeCategory === 'all' || 
           gameCategory.includes(activeCategory);
       
       if (matchesSearch && matchesCategory) {
           button.classList.remove('hidden');
           visibleCount++;
       } else {
           button.classList.add('hidden');
       }
   });
   
   // 結果の表示
   if (visibleCount === 0) {
       noResults.style.display = 'block';
       gameCount.textContent = '0';
   } else {
       noResults.style.display = 'none';
       gameCount.textContent = visibleCount;
   }
   
   // アニメーション効果
   animateVisibleButtons();
}

// 表示されているボタンにアニメーション
function animateVisibleButtons() {
   const visibleButtons = document.querySelectorAll('.game-button:not(.hidden)');
   
   visibleButtons.forEach((button, index) => {
       button.style.animationDelay = `${index * 0.1}s`;
       button.classList.add('fadeInUp');
   });
}

// ページが読み込まれた時の処理
document.addEventListener('DOMContentLoaded', function() {
   setupSearch();
   setupCategoryFilter();
   setupKeyboardNavigation();
   animateButtons();
   highlightNewGames();
   adjustForMobile();
});

// キーボードナビゲーション
function setupKeyboardNavigation() {
   const gameButtons = document.querySelectorAll('.game-button');
   
   gameButtons.forEach((button, index) => {
       button.addEventListener('keydown', function(event) {
           if (event.key === 'Enter' || event.key === ' ') {
               event.preventDefault();
               button.click();
           }
           
           // 矢印キーでの移動
           if (event.key === 'ArrowRight' && index < gameButtons.length - 1) {
               gameButtons[index + 1].focus();
           }
           if (event.key === 'ArrowLeft' && index > 0) {
               gameButtons[index - 1].focus();
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
   
   // 検索ボックスでのEnterキー
   document.getElementById('searchInput').addEventListener('keydown', function(event) {
       if (event.key === 'Enter') {
           const firstVisibleButton = document.querySelector('.game-button:not(.hidden)');
           if (firstVisibleButton) {
               firstVisibleButton.click();
           }
       }
   });
}

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
       }, index * 50);
   });
}

// 新しいゲームのハイライト
function highlightNewGames() {
   // 最後の5つのゲームを新しいゲームとしてハイライト
   const gameButtons = document.querySelectorAll('.game-button');
   const newGameIndices = [23, 24, 25, 26, 27]; // ねこねこねこ、平和な世界、坊主めくり、迷いの森、クイズ３
   
   newGameIndices.forEach(index => {
       if (gameButtons[index]) {
           gameButtons[index].classList.add('highlight');
           
           // 3秒後にハイライトを削除
           setTimeout(() => {
               gameButtons[index].classList.remove('highlight');
           }, 3000);
       }
   });
}

// 統計機能
let gameStats = {
   totalClicks: 0,
   gameClicks: {},
   favoriteGame: null
};

function updateStats(gameUrl) {
   gameStats.totalClicks++;
   
   if (!gameStats.gameClicks[gameUrl]) {
       gameStats.gameClicks[gameUrl] = 0;
   }
   gameStats.gameClicks[gameUrl]++;
   
   // 最も人気のゲームを更新
   let maxClicks = 0;
   for (let url in gameStats.gameClicks) {
       if (gameStats.gameClicks[url] > maxClicks) {
           maxClicks = gameStats.gameClicks[url];
           gameStats.favoriteGame = url;
       }
   }
   
   // ローカルストレージに保存を試行
   try {
       const statsData = JSON.stringify(gameStats);
       // セッションストレージを使用（一時的な保存）
       if (typeof sessionStorage !== 'undefined') {
           sessionStorage.setItem('gameStats', statsData);
       }
   } catch (error) {
       console.log('統計を保存できませんでした:', error);
   }
}

// 統計を読み込む
function loadStats() {
   try {
       if (typeof sessionStorage !== 'undefined') {
           const saved = sessionStorage.getItem('gameStats');
           if (saved) {
               gameStats = JSON.parse(saved);
           }
       }
   } catch (error) {
       console.log('統計を読み込めませんでした:', error);
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

// タッチデバイス向けのハプティックフィードバック
function addHapticFeedback() {
   if ('vibrate' in navigator) {
       const gameButtons = document.querySelectorAll('.game-button');
       gameButtons.forEach(button => {
           button.addEventListener('touchstart', () => {
               navigator.vibrate(50); // 50ms の振動
           });
       });
   }
}

// パフォーマンス最適化
function optimizePerformance() {
   // スクロール時のアニメーション最適化
   let ticking = false;
   
   function updateAnimations() {
       const gameButtons = document.querySelectorAll('.game-button');
       const scrollTop = window.pageYOffset;
       const windowHeight = window.innerHeight;
       
       gameButtons.forEach(button => {
           const rect = button.getBoundingClientRect();
           const inView = rect.top < windowHeight && rect.bottom > 0;
           
           if (inView && !button.classList.contains('in-view')) {
               button.classList.add('in-view');
           }
       });
       
       ticking = false;
   }
   
   function requestTick() {
       if (!ticking) {
           requestAnimationFrame(updateAnimations);
           ticking = true;
       }
   }
   
   window.addEventListener('scroll', requestTick);
}

// ウィンドウサイズ変更時の調整
window.addEventListener('resize', debounce(adjustForMobile, 250));

// デバウンス関数
function debounce(func, wait) {
   let timeout;
   return function executedFunction(...args) {
       const later = () => {
           clearTimeout(timeout);
           func(...args);
       };
       clearTimeout(timeout);
       timeout = setTimeout(later, wait);
   };
}

// エラーハンドリング
window.addEventListener('error', function(event) {
   console.log('エラーが発生しました:', event.error);
});

// 初期化処理
document.addEventListener('DOMContentLoaded', function() {
   loadStats();
   addHapticFeedback();
   optimizePerformance();
   
   // ゲーム総数を表示
   document.getElementById('totalGames').textContent = gameData.length;
});

// PWA対応の準備
if ('serviceWorker' in navigator) {
   window.addEventListener('load', function() {
       // サービスワーカーの登録は実際のPWA化時に行う
       console.log('PWA対応準備完了');
   });
}
