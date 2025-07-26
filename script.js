// ゲームデータ（指定された2つのゲームを削除）
const gameData = [
    { title: 'ねこキャッチ', category: 'action', keywords: 'ねこ 猫 キャッチ 動物', url: 'https://titan11111.github.io/1-neko_catch_game/', icon: '🐱' },
    { title: '化合物クイズ', category: 'quiz learning', keywords: '化合物 科学 理科 クイズ', url: 'https://titan11111.github.io/2-kagoubutu_game/', icon: '🧪' },
    { title: 'あみだくじ', category: 'adventure', keywords: 'あみだ くじ 運 選択', url: 'https://titan11111.github.io/3-amida-game/', icon: '🎯' },
    { title: 'バトルゲーム', category: 'battle', keywords: 'バトル 戦闘 戦い', url: 'https://titan11111.github.io/4-battle-game/', icon: '⚔️' },
    { title: '迷路クイズRPG', category: 'adventure quiz', keywords: '迷路 RPG クイズ 冒険', url: 'https://titan11111.github.io/5-meiro_game/', icon: '🗺️' },
    { title: '色育成', category: 'adventure', keywords: '色 育成 カラー', url: 'https://titan11111.github.io/7-iro_game/', icon: '🌈' },
    { title: '酸アルバトル', category: 'battle learning', keywords: '酸 アルカリ 化学 バトル', url: 'https://titan11111.github.io/8-sannaru_game/', icon: '⚗️' },
    { title: '選択クイズ', category: 'quiz', keywords: '選択 クイズ 問題', url: 'https://titan11111.github.io/10-senntaku_game/', icon: '❓' },
    { title: '買い物ゲーム', category: 'adventure', keywords: '買い物 ショッピング お金', url: 'https://titan11111.github.io/11-kaimono_game/', icon: '🛒' },
    { title: '売買シミュレーション', category: 'adventure', keywords: '売買 商売 シミュレーション', url: 'https://titan11111.github.io/12-buysell_game/', icon: '💰' },
    { title: '歴史ストーリー', category: 'quiz learning', keywords: '歴史 勉強 ストーリー', url: 'https://titan11111.github.io/13-histry/', icon: '📚' },
    { title: 'ドキドキ診断', category: 'quiz', keywords: '診断 ドキドキ 心理', url: 'https://titan11111.github.io/14-dokidoki/', icon: '💖' },
    { title: 'セルフトーク', category: 'adventure', keywords: 'セルフトーク 対話 心', url: 'https://titan11111.github.io/15-selftalk/', icon: '💭' },
    { title: 'ロボットランナー', category: 'action', keywords: 'ロボット ランナー 走る', url: 'https://titan11111.github.io/16-nigeru/', icon: '🤖' },
    { title: 'サイバーアクション', category: 'action', keywords: 'サイバー アクション SF', url: 'https://titan11111.github.io/17-action/', icon: '🚀' },
    { title: 'サイバー英語', category: 'quiz learning', keywords: '英語 学習 サイバー 中学', url: 'https://titan11111.github.io/18-eigo2/', icon: '🌐' },
    { title: '対称ゲーム', category: 'adventure', keywords: '対称 パズル 美しい', url: 'https://titan11111.github.io/20-taisyou/', icon: '✨' },
    { title: 'おさんぽ日和', category: 'adventure', keywords: '散歩 探索 のんびり', url: 'https://titan11111.github.io/21-sanpo/', icon: '🚶' },
    { title: '給食当番リズム', category: 'action', keywords: '給食 リズム 学校', url: 'https://titan11111.github.io/23-kyuusyoku/', icon: '🍽️' },
    { title: 'ねこねこねこ', category: 'action', keywords: 'ねこ 猫 たくさん', url: 'https://titan11111.github.io/24-nekonekoneko/', icon: '😸' },
    { title: '平和な世界', category: 'adventure', keywords: '平和 世界 癒し', url: 'https://titan11111.github.io/25-heiwa/', icon: '🕊️' },
    { title: '坊主めくり', category: 'quiz', keywords: '坊主 めくり カード 伝統', url: 'https://titan11111.github.io/26-bouzu/', icon: '🎴' },
    { title: '迷いの森', category: 'adventure', keywords: '森 迷い 神秘 探索', url: 'https://titan11111.github.io/27-mayoimori/', icon: '🌲' },
    { title: 'クイズ３', category: 'quiz', keywords: 'クイズ 問題 頭脳', url: 'https://titan11111.github.io/28-quiz3/', icon: '🧠' }
];

// カテゴリー情報
const categories = {
    all: { name: 'すべて', icon: '🎮' },
    action: { name: 'アクション', icon: '⚡' },
    adventure: { name: 'アドベンチャー', icon: '🗺️' },
    battle: { name: 'バトル', icon: '⚔️' },
    quiz: { name: 'クイズ', icon: '❓' },
    learning: { name: '学習', icon: '📚' }
};

// ゲームを開く関数（修正版）
function playGame(gameUrl) {
    playClickSound();
    
    // ボタンのアニメーション効果
    const clickedButton = document.querySelector(`[data-url="${gameUrl}"]`);
    if (clickedButton) {
        clickedButton.style.transform = 'scale(0.95)';
        clickedButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        
        setTimeout(() => {
            clickedButton.style.transform = '';
            clickedButton.style.boxShadow = '';
        }, 150);
    }
    
    // 少し遅延してからページを開く
    setTimeout(() => {
        window.open(gameUrl, '_blank');
    }, 200);
    
    // 統計を更新
    updateStats(gameUrl);
}

// クリック音を再生する関数（改良版）
function playClickSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // より心地よい音に調整
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 0.15);
        
        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.15);
        
        oscillator.type = 'triangle'; // より柔らかい音
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.15);
    } catch (error) {
        console.log('クリック音を再生できませんでした:', error);
    }
}

// ゲームボタンを動的に生成する関数
function createGameButtons() {
    const gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.innerHTML = '';
    
    gameData.forEach((game, index) => {
        const button = document.createElement('button');
        button.className = 'game-button';
        button.setAttribute('data-url', game.url);
        button.setAttribute('data-category', game.category);
        button.setAttribute('data-keywords', game.keywords);
        button.setAttribute('tabindex', '0');
        
        // ボタンの内容を設定
        button.innerHTML = `
            <span class="game-icon">${game.icon}</span>
            <span class="game-title">${game.title}</span>
            <span class="game-desc">${generateDescription(game)}</span>
        `;
        
        // クリックイベントを追加
        button.addEventListener('click', () => playGame(game.url));
        
        // キーボードサポート
        button.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                playGame(game.url);
            }
        });
        
        gamesGrid.appendChild(button);
    });
}

// ゲームの説明文を生成する関数
function generateDescription(game) {
    const descriptions = {
        'ねこキャッチ': 'かわいい猫をキャッチしよう！',
        '化合物クイズ': '科学の力で問題を解こう',
        'あみだくじ': '運試しのドキドキゲーム',
        'バトルゲーム': '敵と戦って勝利を目指そう',
        '迷路クイズRPG': '謎を解いて迷路を攻略',
        '色育成': '美しい色の世界を育てよう',
        '酸アルバトル': '化学バトルで勝利しよう',
        '選択クイズ': '正しい答えを選ぼう',
        '買い物ゲーム': 'お得な買い物を楽しもう',
        '売買シミュレーション': '商売の腕前を試そう',
        '歴史ストーリー': '歴史を学びながら冒険',
        'ドキドキ診断': '心の奥を探ってみよう',
        'セルフトーク': '自分との対話を楽しもう',
        'ロボットランナー': 'ロボットと一緒に走ろう',
        'サイバーアクション': 'サイバー世界の冒険',
        'サイバー英語': '未来的な英語学習',
        '対称ゲーム': '美しい対称を作り上げよう',
        'おさんぽ日和': 'のんびり散歩を楽しもう',
        '給食当番リズム': '給食タイムのリズムゲーム',
        'ねこねこねこ': '猫だらけの楽しい世界',
        '平和な世界': '癒しの平和な空間',
        '坊主めくり': '伝統的なカードゲーム',
        '迷いの森': '神秘的な森を探索しよう',
        'クイズ３': '頭脳を鍛えるクイズ'
    };
    
    return descriptions[game.title] || '楽しいゲームを体験しよう！';
}

// フィルタリング用の関数をグローバルに公開（index.htmlから呼び出せるように）
window.filterGames = filterGames;

// 検索機能（改良版）
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    
    // リアルタイム検索
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        // クリアボタンの表示/非表示
        searchClear.style.display = searchTerm ? 'flex' : 'none';
        
        // 検索実行
        filterGames();
        
        // 検索履歴の保存（セッションストレージ）
        try {
            if (searchTerm) {
                let searchHistory = JSON.parse(sessionStorage.getItem('searchHistory') || '[]');
                if (!searchHistory.includes(searchTerm)) {
                    searchHistory.unshift(searchTerm);
                    searchHistory = searchHistory.slice(0, 5); // 最新5件まで
                    sessionStorage.setItem('searchHistory', JSON.stringify(searchHistory));
                }
            }
        } catch (error) {
            console.log('検索履歴を保存できませんでした:', error);
        }
    });
    
    // クリアボタンの動作
    searchClear.addEventListener('click', function() {
        searchInput.value = '';
        searchClear.style.display = 'none';
        filterGames();
        searchInput.focus();
        playClickSound();
    });
    
    // Enterキーで最初のゲームを開く
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const firstVisibleButton = document.querySelector('.game-button:not(.hidden)');
            if (firstVisibleButton) {
                firstVisibleButton.click();
            }
        }
    });
}

// カテゴリフィルター機能（改良版）
function setupCategoryFilter() {
    const categoryContainer = document.querySelector('.category-filter');
    categoryContainer.innerHTML = '';
    
    // カテゴリボタンを動的に生成
    Object.keys(categories).forEach(categoryKey => {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.setAttribute('data-category', categoryKey);
        btn.innerHTML = `${categories[categoryKey].icon} ${categories[categoryKey].name}`;
        
        if (categoryKey === 'all') {
            btn.classList.add('active');
        }
        
        btn.addEventListener('click', function() {
            // アクティブクラスの切り替え
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            filterGames();
            playClickSound();
        });
        
        categoryContainer.appendChild(btn);
    });
}

// ゲームのフィルタリング（改良版：カテゴリ別ハイライト機能追加）
function filterGames() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const activeCategory = document.querySelector('.category-btn.active').dataset.category;
    const gameButtons = document.querySelectorAll('.game-button');
    const noResults = document.getElementById('noResults');
    const gameCount = document.getElementById('gameCount');
    
    let visibleCount = 0;
    
    gameButtons.forEach((button) => {
        const gameUrl = button.getAttribute('data-url');
        const gameDataItem = gameData.find(game => game.url === gameUrl);

        if (!gameDataItem) {
            button.classList.add('hidden');
            return;
        }

        const gameTitle = gameDataItem.title.toLowerCase();
        const gameKeywords = gameDataItem.keywords.toLowerCase();
        const gameCategory = gameDataItem.category;
        
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
            
            // カテゴリが選択されている時のハイライト効果
            if (activeCategory !== 'all') {
                button.classList.add('category-highlighted');
            } else {
                button.classList.remove('category-highlighted');
            }
        } else {
            button.classList.add('hidden');
            button.classList.remove('category-highlighted');
        }
    });
    
    // 結果の表示
    if (visibleCount === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
    
    // ゲーム数の表示を改良（カテゴリ名も表示）
    const gameCountElement = document.getElementById('gameCount');
    if (activeCategory === 'all') {
        gameCountElement.innerHTML = `<span id="gameCountNumber">${visibleCount}</span> 個のゲームが見つかりました`;
    } else {
        const categoryName = categories[activeCategory].name;
        const categoryIcon = categories[activeCategory].icon;
        gameCountElement.innerHTML = `${categoryIcon} <strong>${categoryName}</strong>ゲーム: <span id="gameCountNumber">${visibleCount}</span> 個見つかりました`;
    }
    
    // アニメーション効果
    animateVisibleButtons();
}

// 表示されているボタンにアニメーション
function animateVisibleButtons() {
    const visibleButtons = document.querySelectorAll('.game-button:not(.hidden)');
    
    visibleButtons.forEach((button, index) => {
        button.style.animationDelay = `${index * 0.05}s`;
        button.style.animation = 'none';
        setTimeout(() => {
            button.style.animation = 'fadeInUp 0.4s ease forwards';
        }, 10);
    });
}

// 新しいゲームのハイライト（改良版）
function highlightNewGames() {
    const newGameTitles = ['給食当番リズム', 'ねこねこねこ', '平和な世界', '坊主めくり', '迷いの森', 'クイズ３'];
    
    newGameTitles.forEach(title => {
        const gameItem = gameData.find(game => game.title === title);
        if (gameItem) {
            const button = document.querySelector(`[data-url="${gameItem.url}"]`);
            if (button) {
                button.classList.add('highlight');
                
                // NEW バッジを追加
                const newBadge = document.createElement('span');
                newBadge.className = 'new-badge';
                newBadge.textContent = 'NEW';
                button.appendChild(newBadge);
                
                // 5秒後にハイライトを削除
                setTimeout(() => {
                    button.classList.remove('highlight');
                    if (newBadge.parentNode) {
                        newBadge.remove();
                    }
                }, 5000);
            }
        }
    });
}

// 統計機能（改良版）
let gameStats = {
    totalClicks: 0,
    gameClicks: {},
    favoriteGame: null,
    lastPlayed: null
};

function updateStats(gameUrl) {
    gameStats.totalClicks++;
    gameStats.lastPlayed = gameUrl;
    
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
    
    // セッションストレージに保存
    try {
        sessionStorage.setItem('gameStats', JSON.stringify(gameStats));
    } catch (error) {
        console.log('統計を保存できませんでした:', error);
    }
}

// 統計を読み込む
function loadStats() {
    try {
        const saved = sessionStorage.getItem('gameStats');
        if (saved) {
            gameStats = { ...gameStats, ...JSON.parse(saved) };
        }
    } catch (error) {
        console.log('統計を読み込めませんでした:', error);
    }
}

// おすすめゲーム機能
function showRecommendations() {
    if (gameStats.favoriteGame) {
        const favoriteGame = gameData.find(game => game.url === gameStats.favoriteGame);
        if (favoriteGame) {
            // 同じカテゴリのゲームを推薦
            const similarGames = gameData.filter(game => 
                game.category === favoriteGame.category && 
                game.url !== favoriteGame.url
            );
            
            if (similarGames.length > 0) {
                console.log('おすすめゲーム:', similarGames[0].title);
            }
        }
    }
}

// ページが読み込まれた時の処理
document.addEventListener('DOMContentLoaded', function() {
    // 基本機能の初期化
    createGameButtons();
    setupSearch();
    setupCategoryFilter();
    loadStats();
    
    // UIの改良機能
    setupKeyboardNavigation();
    addHapticFeedback();
    setupLazyLoading();
    addSwipeGestures();
    
    // アニメーション
    animateButtons();
    highlightNewGames();
    
    // レスポンシブ対応
    adjustForMobile();
    
    // ゲーム総数を表示
    document.getElementById('totalGames').textContent = gameData.length;
    filterGames(); // 初期表示時にフィルタリングを適用
    
    // おすすめゲームの表示
    showRecommendations();
});

// キーボードナビゲーション（改良版）
function setupKeyboardNavigation() {
    let focusedIndex = -1;
    
    document.addEventListener('keydown', function(event) {
        const gameButtons = Array.from(document.querySelectorAll('.game-button:not(.hidden)'));
        
        if (gameButtons.length === 0) return;
        
        switch(event.key) {
            case 'Tab':
                // デフォルトのTab動作を維持
                break;
                
            case 'ArrowRight':
            case 'ArrowDown':
                event.preventDefault();
                focusedIndex = Math.min(focusedIndex + 1, gameButtons.length - 1);
                gameButtons[focusedIndex].focus();
                break;
                
            case 'ArrowLeft':
            case 'ArrowUp':
                event.preventDefault();
                focusedIndex = Math.max(focusedIndex - 1, 0);
                gameButtons[focusedIndex].focus();
                break;
                
            case 'Home':
                event.preventDefault();
                focusedIndex = 0;
                gameButtons[focusedIndex].focus();
                break;
                
            case 'End':
                event.preventDefault();
                focusedIndex = gameButtons.length - 1;
                gameButtons[focusedIndex].focus();
                break;
        }
    });
}

// ハプティックフィードバック（改良版）
function addHapticFeedback() {
    if ('vibrate' in navigator) {
        const gameButtons = document.querySelectorAll('.game-button');
        gameButtons.forEach(button => {
            button.addEventListener('touchstart', () => {
                navigator.vibrate(30); // 軽い振動
            });
            
            button.addEventListener('click', () => {
                navigator.vibrate([50, 20, 50]); // パターン振動
            });
        });
    }
}

// 遅延読み込み機能
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('loaded');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.game-button').forEach(button => {
            observer.observe(button);
        });
    }
}

// スワイプジェスチャー機能
function addSwipeGestures() {
    let startX = 0;
    let startY = 0;
    
    document.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', function(e) {
        if (!startX || !startY) return;
        
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        
        const diffX = startX - endX;
        const diffY = startY - endY;
        
        // 水平スワイプでカテゴリ切り替え
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            const categoryButtons = Array.from(document.querySelectorAll('.category-btn'));
            const activeIndex = categoryButtons.findIndex(btn => btn.classList.contains('active'));
            
            if (diffX > 0 && activeIndex < categoryButtons.length - 1) {
                // 左スワイプ - 次のカテゴリ
                categoryButtons[activeIndex + 1].click();
            } else if (diffX < 0 && activeIndex > 0) {
                // 右スワイプ - 前のカテゴリ
                categoryButtons[activeIndex - 1].click();
            }
        }
        
        startX = 0;
        startY = 0;
    });
}

// レスポンシブデザインの調整（改良版）
function adjustForMobile() {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1024 && window.innerWidth > 768;
    
    const root = document.documentElement;
    
    if (isMobile) {
        root.style.setProperty('--button-size', '100px');
        root.style.setProperty('--icon-size', '2rem');
        root.style.setProperty('--font-size', '0.9rem');
    } else if (isTablet) {
        root.style.setProperty('--button-size', '110px');
        root.style.setProperty('--icon-size', '2.2rem');
        root.style.setProperty('--font-size', '1rem');
    } else {
        root.style.setProperty('--button-size', '120px');
        root.style.setProperty('--icon-size', '2.5rem');
        root.style.setProperty('--font-size', '1.1rem');
    }
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

// ボタンのアニメーション関数（改良版）
function animateButtons() {
    const buttons = document.querySelectorAll('.game-button');
    
    buttons.forEach((button, index) => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(20px) scale(0.9)';
        
        setTimeout(() => {
            button.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            button.style.opacity = '1';
            button.style.transform = 'translateY(0) scale(1)';
        }, index * 30);
    });
}

// エラーハンドリング
window.addEventListener('error', function(event) {
    console.log('エラーが発生しました:', event.error);
});

// パフォーマンス監視
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('ページ読み込み時間:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}
