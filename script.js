// ゲームデータ
const gameData = [
    { title: 'テトリス：落ち物パズル', category: 'action', keywords: 'テトリス パズル ブロック', url: 'https://titan11111.github.io/50-tetoris/', icon: '🧩', isNew: true },
    { title: 'ルーレット：運命の回転', category: 'quiz', keywords: 'ルーレット 運 試し', url: 'https://titan11111.github.io/51-rulet/', icon: '🎰', isNew: true },
    { title: 'クエスト：冒険の始まり', category: 'adventure', keywords: 'クエスト 冒険 RPG', url: 'https://titan11111.github.io/50-quest/', icon: '🗡️', isNew: true },
    { title: 'マイクラ：ブロックの世界', category: 'adventure', keywords: 'マイクラ Minecraft ブロック', url: 'https://titan11111.github.io/49-maikura/', icon: '⛏️', isNew: true },
    { title: 'アクションヒーロー2：激闘の再来', category: 'action', keywords: 'アクション 戦闘 反射神経', url: 'https://titan11111.github.io/48-action2/', icon: '⚡', isNew: true },
    { title: '電車冒険：線路の旅', category: 'adventure', keywords: '電車 列車 乗り物', url: 'https://titan11111.github.io/47-dennsya/', icon: '🚆', isNew: true },
    { title: 'ミタ：未知の冒険', category: 'adventure', keywords: 'ミタ 冒険', url: 'https://titan11111.github.io/46-mita/', icon: '👀', isNew: true },
    { title: '魔塔：闇の塔の試練', category: 'adventure', keywords: '魔塔 塔 ダンジョン', url: 'https://titan11111.github.io/45-matou/', icon: '🗼', isNew: true },
    { title: 'ねくび2：夢幻の冒険', category: 'adventure', keywords: 'ねくび 眠り 夢', url: 'https://titan11111.github.io/44-nekubi2/', icon: '😴', isNew: true },
    { title: '格闘チャンピオン2：最強の挑戦者', category: 'battle action', keywords: '格闘 バトル 対戦', url: 'https://titan11111.github.io/43-kakuge2/', icon: '🥊', isNew: true },
    { title: 'シューティング4：天空の激戦', category: 'action', keywords: 'シューティング 宇宙 弾幕', url: 'https://titan11111.github.io/42-syutinngu/', icon: '🚀', isNew: true },
    { title: 'ホラー脱出2：闇夜の再来', category: 'adventure', keywords: 'ホラー 怖い 脱出', url: 'https://titan11111.github.io/41-horaa2/', icon: '👻', isNew: true },
    { title: '格闘チャンピオン', category: 'battle action', keywords: '格闘 バトル 対戦', url: 'https://titan11111.github.io/40-kakuge/', icon: '🥊', isNew: true },
    { title: 'ホラー脱出', category: 'adventure', keywords: 'ホラー 怖い 脱出', url: 'https://titan11111.github.io/39-horaa/', icon: '👻', isNew: true },
    { title: 'シューティング3：星海の大決戦', category: 'action', keywords: 'シューティング 宇宙 弾幕', url: 'https://titan11111.github.io/38-shoot3/', icon: '🚀', isNew: true },
    { title: '冒険RPG：伝説の始まり', category: 'adventure', keywords: 'RPG ファンタジー 冒険', url: 'https://titan11111.github.io/37-RPG/', icon: '🧙‍♂️', isNew: true },
    { title: '学園アドベンチャー：ひみつの放課後', category: 'adventure', keywords: '学園 学校', url: 'https://titan11111.github.io/35-gakuen/', icon: '🏫', isNew: true },
    { title: 'デモンキャッスル：魔城の試練', category: 'adventure', keywords: 'デモン キャッスル 魔物', url: 'https://titan11111.github.io/34-demon_castle/', icon: '🏰', isNew: true },
    { title: 'ねくび：夢みる旅人', category: 'adventure', keywords: 'ねくび 眠り 夢', url: 'https://titan11111.github.io/33--nekubi/', icon: '😴', isNew: true },
    { title: 'シューティング2：炎の逆襲', category: 'action', keywords: 'シューティング 射撃 連射', url: 'https://titan11111.github.io/32-shoot2/', icon: '🎯', isNew: true },
    { title: 'シューティング1：初めての戦場', category: 'action', keywords: 'シューティング 射撃', url: 'https://titan11111.github.io/31-shoot/', icon: '🔫', isNew: true },
    { title: '世界樹探検：伝説の樹を求めて', category: 'adventure', keywords: '神秘 ファンタジー 冒険 世界樹 探検', url: 'https://titan11111.github.io/30-yugudora/', icon: '🌳', isNew: true },
    { title: 'クイズ4：超難問チャレンジ', category: 'quiz', keywords: 'クイズ 問題 頭脳', url: 'https://titan11111.github.io/titan11111-quiz4/', icon: '🧠', isNew: true },
    { title: 'クイズ3：ひらめき勝負', category: 'quiz', keywords: 'クイズ 問題 頭脳', url: 'https://titan11111.github.io/28-quiz3/', icon: '🧠' },
    { title: '迷いの森：ささやく木々の誘い', category: 'adventure', keywords: '森 迷い 神秘 探索', url: 'https://titan11111.github.io/27-mayoimori/', icon: '🌲' },
    { title: '坊主めくり：運試しバトル', category: 'quiz', keywords: '坊主 めくり カード 伝統', url: 'https://titan11111.github.io/26-bouzu/', icon: '🎴' },
    { title: '平和な世界：癒しのオアシス', category: 'adventure', keywords: '平和 世界 癒し', url: 'https://titan11111.github.io/25-heiwa/', icon: '🕊️' },
    { title: 'ねこねこねこ：にゃんこパレード', category: 'action', keywords: 'ねこ 猫 たくさん', url: 'https://titan11111.github.io/24-nekonekoneko/', icon: '😸' },
    { title: '給食当番リズム：キッチンビート', category: 'action', keywords: '給食 リズム 学校', url: 'https://titan11111.github.io/23-kyuusyoku/', icon: '🍽️' },
    { title: 'おさんぽ日和：てくてく冒険', category: 'adventure', keywords: '散歩 探索 のんびり', url: 'https://titan11111.github.io/21-sanpo/', icon: '🚶' },
    { title: '対称パズル：ミラーの魔法', category: 'adventure', keywords: '対称 パズル 美しい', url: 'https://titan11111.github.io/20-taisyou/', icon: '✨' },
    { title: 'らっか：スカイドロップ', category: 'action', keywords: '落下 アクション スピード 反射神経', url: 'https://titan11111.github.io/19-rakka/', icon: '🪂', isNew: true },
    { title: 'サイバー英語：ネオンの学習', category: 'quiz learning', keywords: '英語 学習 サイバー 中学', url: 'https://titan11111.github.io/18-eigo2/', icon: '🌐' },
    { title: '電脳アクション：デジタルウォーズ', category: 'action', keywords: '電脳 サイバー アクション SF', url: 'https://titan11111.github.io/17-action/', icon: '🚀' },
    { title: 'ロボットランナー：メカダッシュ', category: 'action', keywords: 'ロボット ランナー 走る', url: 'https://titan11111.github.io/16-nigeru/', icon: '🤖' },
    { title: 'セルフトーク：ココロと対話', category: 'adventure', keywords: 'セルフトーク 対話 心', url: 'https://titan11111.github.io/15-selftalk/', icon: '💭' },
    { title: 'ドキドキ診断：ハートチェック', category: 'quiz', keywords: '診断 ドキドキ 心理', url: 'https://titan11111.github.io/14-dokidoki/', icon: '💖' },
    { title: '歴史ストーリー：時空の旅', category: 'quiz learning', keywords: '歴史 勉強 ストーリー', url: 'https://titan11111.github.io/13-histry/', icon: '📚' },
    { title: '商売体験：マーケットマスター', category: 'adventure', keywords: '商売 売買 体験 シミュレーション', url: 'https://titan11111.github.io/12-buysell_game/', icon: '💰' },
    { title: '買い物ゲーム：ショップチャレンジ', category: 'adventure', keywords: '買い物 ショッピング お金', url: 'https://titan11111.github.io/11-kaimono_game/', icon: '🛒' },
    { title: '選択クイズ：正解を選べ', category: 'quiz', keywords: '選択 クイズ 問題', url: 'https://titan11111.github.io/10-senntaku_game/', icon: '❓' },
    { title: 'バトルゲーム2：ファイナルデュエル', category: 'battle', keywords: 'バトル 戦闘 戦い 2', url: 'https://titan11111.github.io/9-battle2-game/', icon: '⚔️', isNew: true },
    { title: '酸アルバトル：科学バトル', category: 'battle learning', keywords: '酸 アルカリ 化学 バトル', url: 'https://titan11111.github.io/8-sannaru_game/', icon: '⚗️' },
    { title: '色育成：カラーワールド', category: 'adventure', keywords: '色 育成 カラー', url: 'https://titan11111.github.io/7-iro_game/', icon: '🌈' },
    { title: '英語ゲーム：ワードクエスト', category: 'quiz learning', keywords: '英語 学習', url: 'https://titan11111.github.io/6-eigo-game/', icon: '📘' },
    { title: '迷路クイズ：ラビリンスチャレンジ', category: 'adventure quiz', keywords: '迷路 クイズ RPG 冒険', url: 'https://titan11111.github.io/5-meiro_game/', icon: '🗺️' },
    { title: 'バトルゲーム：ソードアリーナ', category: 'battle', keywords: 'バトル 戦闘 戦い', url: 'https://titan11111.github.io/4-battle-game/', icon: '⚔️' },
    { title: 'あみだくじ：ラッキーパス', category: 'adventure', keywords: 'あみだ くじ 運 選択', url: 'https://titan11111.github.io/3-amida-game/', icon: '🎯' },
    { title: '化合物クイズ：サイエンスピース', category: 'quiz learning', keywords: '化合物 科学 理科 クイズ', url: 'https://titan11111.github.io/2-kagoubutu_game/', icon: '🧪' },
    { title: 'ねこキャッチ：すばやく捕まえよう', category: 'action', keywords: 'ねこ 猫 キャッチ 動物', url: 'https://titan11111.github.io/1-neko_catch_game/', icon: '🐱' }
];

// グローバル変数
let currentPage = 1;
let itemsPerPage = 12;
let filteredGames = [...gameData];
let currentCategory = 'all';

// DOM要素の取得
const gamesList = document.getElementById('gamesList');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageNumbers = document.getElementById('pageNumbers');
const gameCount = document.getElementById('gameCount');
const totalGames = document.getElementById('totalGames');
const newGames = document.getElementById('newGames');
const categories = document.getElementById('categories');
const loading = document.getElementById('loading');

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    // ローディング画面を表示
    setTimeout(() => {
        loading.classList.add('hidden');
        initializeApp();
    }, 1500);
});

// アプリの初期化
function initializeApp() {
    updateStats();
    renderGames();
    setupEventListeners();
    updatePagination();
}

// 統計情報の更新
function updateStats() {
    totalGames.textContent = gameData.length;
    newGames.textContent = gameData.filter(game => game.isNew).length;
    
    // カテゴリー数を計算
    const uniqueCategories = new Set();
    gameData.forEach(game => {
        game.category.split(' ').forEach(cat => uniqueCategories.add(cat));
    });
    categories.textContent = uniqueCategories.size;
    
    // カウントアップアニメーション
    animateCountUp(totalGames, parseInt(totalGames.textContent));
    animateCountUp(newGames, parseInt(newGames.textContent));
    animateCountUp(categories, parseInt(categories.textContent));
}

// カウントアップアニメーション
function animateCountUp(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 30);
}

// イベントリスナーの設定
function setupEventListeners() {
    // 検索機能
    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    
    // フィルター機能
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => handleFilter(btn));
    });
    
    // ページネーション
    prevBtn.addEventListener('click', () => changePage(currentPage - 1));
    nextBtn.addEventListener('click', () => changePage(currentPage + 1));
}

// 検索処理
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredGames = gameData.filter(game => 
            currentCategory === 'all' || game.category.includes(currentCategory)
        );
    } else {
        filteredGames = gameData.filter(game => {
            const matchesCategory = currentCategory === 'all' || game.category.includes(currentCategory);
            const matchesSearch = 
                game.title.toLowerCase().includes(searchTerm) ||
                game.keywords.toLowerCase().includes(searchTerm) ||
                game.category.toLowerCase().includes(searchTerm);
            return matchesCategory && matchesSearch;
        });
    }
    
    currentPage = 1;
    renderGames();
    updatePagination();
    
    // 検索結果をハイライト
    if (searchTerm) {
        setTimeout(() => {
            const cards = document.querySelectorAll('.game-card');
            cards.forEach(card => {
                // WAAPIで一時的に揺らす（元のCSSアニメーションを壊さない）
                card.animate(
                    [
                        { transform: 'translateY(0)' },
                        { transform: 'translateY(-8px)' },
                        { transform: 'translateY(0)' }
                    ],
                    { duration: 600, easing: 'ease-in-out' }
                );
            });
        }, 100);
    }
    }

// フィルター処理
function handleFilter(clickedBtn) {
    // ボタンのアクティブ状態を更新
    filterBtns.forEach(btn => btn.classList.remove('active'));
    clickedBtn.classList.add('active');
    
    currentCategory = clickedBtn.dataset.category;
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    // フィルターと検索を組み合わせ
    if (currentCategory === 'all') {
        filteredGames = gameData.filter(game => 
            searchTerm === '' || 
            game.title.toLowerCase().includes(searchTerm) ||
            game.keywords.toLowerCase().includes(searchTerm) ||
            game.category.toLowerCase().includes(searchTerm)
        );
    } else {
        filteredGames = gameData.filter(game => {
            const matchesCategory = game.category.includes(currentCategory);
            const matchesSearch = searchTerm === '' ||
                game.title.toLowerCase().includes(searchTerm) ||
                game.keywords.toLowerCase().includes(searchTerm) ||
                game.category.toLowerCase().includes(searchTerm);
            return matchesCategory && matchesSearch;
        });
    }
    
    currentPage = 1;
    renderGames();
    updatePagination();
}

// ゲーム一覧の描画
function renderGames() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentGames = filteredGames.slice(startIndex, endIndex);
    
    gamesList.innerHTML = '';
    gameCount.textContent = `(${filteredGames.length})`;
    
    if (currentGames.length === 0) {
        gamesList.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">😅</div>
                <h3 style="color: #00ffff; margin-bottom: 1rem;">ゲームが見つかりません</h3>
                <p style="color: #cccccc;">別のキーワードで検索してみてください</p>
            </div>
        `;
        return;
    }
    
    currentGames.forEach((game, index) => {
        const gameCard = createGameCard(game);
        gameCard.style.animationDelay = `${index * 0.1}s`;
        gamesList.appendChild(gameCard);
    });
}

// ゲームカードの作成
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
        card.innerHTML = `
        <div class="game-header">
            <div class="game-icon">${game.icon}</div>
            <div class="game-title">${game.title}</div>
            ${game.isNew ? '<div class="new-badge">NEW!</div>' : ''}
        </div>
        <div class="game-keywords">${game.keywords}</div>
        <button class="play-btn" onclick="playGame('${game.url}')">
            🎮 遊ぶ
        </button>
    `;
    
    return card;
}

// ゲームを開く
function playGame(url) {
    // 効果音風のフィードバック
    const btn = event.target;
    btn.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        btn.style.transform = '';
        window.open(url, '_blank');
    }, 150);
}

// ページネーションの更新
function updatePagination() {
    const totalPages = Math.ceil(filteredGames.length / itemsPerPage);
    
    // 前へ・次へボタンの状態更新
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
    
    // ページ番号の表示
    pageNumbers.innerHTML = '';
    
    if (totalPages <= 1) return;
    
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // 調整
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('div');
        pageBtn.className = `page-number ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => changePage(i));
        pageNumbers.appendChild(pageBtn);
    }
}

// ページ変更
function changePage(page) {
    const totalPages = Math.ceil(filteredGames.length / itemsPerPage);
    
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderGames();
    updatePagination();
    
    // ページトップにスムーススクロール
    document.querySelector('.games-section').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// CSS アニメーション追加
const additionalStyles = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .game-card {
        animation: slideInUp 0.6s ease-out forwards;
        opacity: 0;
    }
`;

// 動的スタイル追加
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
