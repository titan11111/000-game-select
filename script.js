
// BGMを無効化し、効果音のみ再生する設定
// 以前はここで選択画面のBGMを再生していましたが、現在は無効化しています。


// ゲームデータ（新しいゲームを追加）
const gameData = [
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

// カテゴリー情報
const categories = {
    all: { name: 'すべて', icon: '🎮' },
    action: { name: 'アクション', icon: '⚡' },
    adventure: { name: 'アドベンチャー', icon: '🗺️' },
    battle: { name: 'バトル', icon: '⚔️' },
    quiz: { name: 'クイズ', icon: '❓' },
    learning: { name: '学習', icon: '📚' }
};

// ユーザーデータ（メモリに保存）
let userData = {
    favorites: [],
    playHistory: [],
    playCount: {},
    achievements: [],
    totalPlays: 0,
    level: 1,
    exploredCategories: new Set()
};

// 実績データ
const achievements = [
    { id: 'first_game', title: '🎮 はじめの一歩', desc: '最初のゲームをプレイしました！', condition: (data) => data.totalPlays >= 1 },
    { id: 'game_lover', title: '💖 ゲーム好き', desc: '5つのゲームをプレイしました！', condition: (data) => data.totalPlays >= 5 },
    { id: 'explorer', title: '🗺️ 冒険者', desc: '3つ以上のジャンルを探検しました！', condition: (data) => data.exploredCategories.size >= 3 },
    { id: 'collector', title: '⭐ コレクター', desc: '5つのお気に入りを集めました！', condition: (data) => data.favorites.length >= 5 },
    { id: 'master', title: '👑 ゲームマスター', desc: '15個のゲームをプレイしました！', condition: (data) => data.totalPlays >= 15 },
    { id: 'new_game_hunter', title: '🆕 新ゲームハンター', desc: '新作ゲームをプレイしました！', condition: (data) => data.playHistory.some(url => gameData.find(g => g.url === url && g.isNew)) }
];

// ゲームを開く関数（改良版）
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
    
    // 統計を更新
    updateUserData(gameUrl);
    
    // 実績チェック
    checkAchievements();
    
    // 少し遅延してからページを開く
    setTimeout(() => {
        window.open(gameUrl, '_blank');
    }, 200);
}

// ユーザーデータ更新
function updateUserData(gameUrl) {
    // プレイ履歴に追加
    userData.playHistory.unshift(gameUrl);
    if (userData.playHistory.length > 10) {
        userData.playHistory = userData.playHistory.slice(0, 10);
    }
    
    // プレイ回数更新
    userData.totalPlays++;
    if (!userData.playCount[gameUrl]) {
        userData.playCount[gameUrl] = 0;
    }
    userData.playCount[gameUrl]++;
    
    // カテゴリー探検記録
    const game = gameData.find(g => g.url === gameUrl);
    if (game) {
        game.category.split(' ').forEach(cat => {
            userData.exploredCategories.add(cat);
        });
    }
    
    // レベル計算
    userData.level = Math.floor(userData.totalPlays / 5) + 1;
    
    // 統計表示を更新
    updateStatsDisplay();
    updateRecentGames();
    
    // データ保存
    saveUserData();
}

// お気に入り機能
function toggleFavorite(gameUrl, event) {
    event.stopPropagation();
    playClickSound();
    
    const index = userData.favorites.indexOf(gameUrl);
    const button = event.target;
    
    if (index === -1) {
        // お気に入りに追加
        userData.favorites.push(gameUrl);
        button.classList.add('active');
        button.textContent = '❤️';
        
        // エフェクト
        button.style.animation = 'heartbeat 0.6s ease';
        setTimeout(() => button.style.animation = '', 600);
        
        // 実績チェック
        checkAchievements();
    } else {
        // お気に入りから削除
        userData.favorites.splice(index, 1);
        button.classList.remove('active');
        button.textContent = '🤍';
    }
    
    saveUserData();
    updateStatsDisplay();
}

// 実績チェック
function checkAchievements() {
    achievements.forEach(achievement => {
        if (!userData.achievements.includes(achievement.id) && achievement.condition(userData)) {
            userData.achievements.push(achievement.id);
            showAchievement(achievement.title, achievement.desc);
        }
    });
}

// 実績表示
function showAchievement(title, desc) {
    const achievementDiv = document.createElement('div');
    achievementDiv.className = 'achievement';
    achievementDiv.innerHTML = `
        <div class="achievement-title">${title}</div>
        <div class="achievement-desc">${desc}</div>
    `;
    
    document.getElementById('achievements').appendChild(achievementDiv);
    
    // 効果音
    playAchievementSound();
    
    // 5秒後に削除
    setTimeout(() => {
        achievementDiv.style.animation = 'slideOutAchievement 0.5s ease forwards';
        setTimeout(() => achievementDiv.remove(), 500);
    }, 5000);
}

// 実績音
function playAchievementSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // より豪華な実績音
        const frequencies = [523, 659, 784, 1047]; // C5, E5, G5, C6
        
        frequencies.forEach((freq, index) => {
            setTimeout(() => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3);
                
                oscillator.type = 'triangle';
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.3);
            }, index * 100);
        });
    } catch (error) {
        console.log('実績音を再生できませんでした:', error);
    }
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

// ゲームボタンを動的に生成する関数（改良版）
function createGameButtons() {
    const gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.innerHTML = '';
    
    let sortedGames = [...gameData];
    const sortValue = document.getElementById('sortSelect')?.value || 'default';
    
    // ソート処理
    switch(sortValue) {
        case 'popular':
            sortedGames.sort((a, b) => (userData.playCount[b.url] || 0) - (userData.playCount[a.url] || 0));
            break;
        case 'recent':
            sortedGames.sort((a, b) => {
                const aIndex = userData.playHistory.indexOf(a.url);
                const bIndex = userData.playHistory.indexOf(b.url);
                if (aIndex === -1 && bIndex === -1) return 0;
                if (aIndex === -1) return 1;
                if (bIndex === -1) return -1;
                return aIndex - bIndex;
            });
            break;
        case 'favorites':
            sortedGames.sort((a, b) => {
                const aFav = userData.favorites.includes(a.url);
                const bFav = userData.favorites.includes(b.url);
                if (aFav && !bFav) return -1;
                if (!aFav && bFav) return 1;
                return 0;
            });
            break;
        case 'alphabetical':
            sortedGames.sort((a, b) => a.title.localeCompare(b.title, 'ja'));
            break;
    }
    
    sortedGames.forEach((game, index) => {
        const button = document.createElement('button');
        button.className = 'game-button';
        button.setAttribute('data-url', game.url);
        button.setAttribute('data-category', game.category);
        button.setAttribute('data-keywords', game.keywords);
        button.setAttribute('tabindex', '0');
        
        // 人気度計算
        const playCount = userData.playCount[game.url] || 0;
        const isPopular = playCount >= 3;
        const isFavorite = userData.favorites.includes(game.url);
        
        // ボタンの内容を設定
        button.innerHTML = `
            <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite('${game.url}', event)">
                ${isFavorite ? '❤️' : '🤍'}
            </button>
            
            ${game.isNew ? '<span class="new-badge">NEW</span>' : ''}
            ${isPopular ? '<span class="popular-badge">🔥 人気</span>' : ''}
            
            <span class="game-icon">${game.icon}</span>
            <span class="game-title">${game.title}</span>
            <span class="game-desc">${generateDescription(game)}</span>
            
            <div class="rating-stars">
                ${generateStars(calculateRating(game))}
            </div>
            
            ${playCount > 0 ? `<div class="play-count">プレイ回数: ${playCount}</div>` : ''}
        `;
        
        // クリックイベントを追加
        button.addEventListener('click', (e) => {
            if (!e.target.classList.contains('favorite-btn')) {
                playGame(game.url);
            }
        });
        
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

// 星評価生成
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="star ${i <= rating ? 'filled' : ''}">⭐</span>`;
    }
    return stars;
}

// 評価計算
function calculateRating(game) {
    const playCount = userData.playCount[game.url] || 0;
    const isFavorite = userData.favorites.includes(game.url);
    const isNew = game.isNew;
    
    let rating = 3; // 基本評価
    
    if (playCount >= 5) rating = 5;
    else if (playCount >= 3) rating = 4;
    else if (playCount >= 1) rating = 3;
    
    if (isFavorite) rating = Math.max(rating, 4);
    if (isNew) rating = Math.max(rating, 4);
    
    return rating;
}

// ゲームの説明文を生成する関数（改良版）
function generateDescription(game) {
    const descriptions = {
        '格闘チャンピオン': '拳で頂点を目指せ',
        'ホラー脱出': '恐怖の館から脱出せよ',
        'シューティング3：星海の大決戦': '宇宙を駆け敵艦を撃破',
        '冒険RPG：伝説の始まり': '勇者となって世界を救おう',
        '学園アドベンチャー：ひみつの放課後': '学校の謎を解き明かそう',
        'デモンキャッスル：魔城の試練': '魔物あふれる城を攻略',
        'ねくび：夢みる旅人': '眠りの世界で冒険',
        'シューティング2：炎の逆襲': '迫力満点の続編',
        'シューティング1：初めての戦場': '狙って撃つ基本編',
        '世界樹探検：伝説の樹を求めて': '神秘の世界樹を冒険',
        'クイズ4：超難問チャレンジ': '頭をフル回転させよう',
        'クイズ3：ひらめき勝負': '知恵を試す第3弾',
        '迷いの森：ささやく木々の誘い': '不思議な森を探索',
        '坊主めくり：運試しバトル': '伝統の勝負で盛り上がろう',
        '平和な世界：癒しのオアシス': 'のんびり心を休めよう',
        'ねこねこねこ：にゃんこパレード': '猫だらけで癒される',
        '給食当番リズム：キッチンビート': 'リズムに乗って配膳',
        'おさんぽ日和：てくてく冒険': 'のんびり散歩で癒し',
        '対称パズル：ミラーの魔法': '美しい左右対称を作ろう',
        'らっか：スカイドロップ': 'タイミングよく落下',
        'サイバー英語：ネオンの学習': 'サイバー世界で英語',
        '電脳アクション：デジタルウォーズ': '電脳世界で戦い抜け',
        'ロボットランナー：メカダッシュ': '走るロボを操作',
        'セルフトーク：ココロと対話': '自分との会話で心を知る',
        'ドキドキ診断：ハートチェック': '質問で性格診断',
        '歴史ストーリー：時空の旅': '物語で歴史を学ぼう',
        '商売体験：マーケットマスター': '売買で商売を体験',
        '買い物ゲーム：ショップチャレンジ': '賢くお買い物しよう',
        '選択クイズ：正解を選べ': 'ひらめきで答えを選択',
        'バトルゲーム2：ファイナルデュエル': '熱い戦いの続編',
        '酸アルバトル：科学バトル': '酸とアルカリの対決',
        '色育成：カラーワールド': '色を育てて楽しもう',
        '英語ゲーム：ワードクエスト': '遊びながら英語学習',
        '迷路クイズ：ラビリンスチャレンジ': '迷路でクイズに挑戦',
        'バトルゲーム：ソードアリーナ': '敵と戦う王道バトル',
        'あみだくじ：ラッキーパス': '運試しに挑戦',
        '化合物クイズ：サイエンスピース': '化学式を当てよう',
        'ねこキャッチ：すばやく捕まえよう': '素早く猫を捕まえる'
    };

    return descriptions[game.title] || '楽しいゲームを体験しよう！';
}

// フィルタリング用の関数をグローバルに公開
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
                const gameUrl = firstVisibleButton.getAttribute('data-url');
                playGame(gameUrl);
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

// ソート機能
function setupSortFunction() {
    const sortSelect = document.getElementById('sortSelect');
    sortSelect.addEventListener('change', function() {
        playClickSound();
        createGameButtons();
        filterGames();
    });
}

// ゲームのフィルタリング（改良版）
function filterGames() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const activeCategory = document.querySelector('.category-btn.active').dataset.category;
    const gameButtons = document.querySelectorAll('.game-button');
    const noResults = document.getElementById('noResults');
    
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
    
    // ゲーム数の表示を改良
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

// 統計表示更新
function updateStatsDisplay() {
    document.getElementById('totalPlaysCount').textContent = userData.totalPlays;
    document.getElementById('favoritesCount').textContent = userData.favorites.length;
    document.getElementById('exploredCategories').textContent = userData.exploredCategories.size;
    
    // レベル表示
    const levelNames = ['初心者', '新米冒険者', '冒険者', '熟練者', 'エキスパート', 'マスター', 'レジェンド'];
    const levelIndex = Math.min(userData.level - 1, levelNames.length - 1);
    document.getElementById('playerLevel').textContent = `${levelNames[levelIndex]} (Lv.${userData.level})`;
}

// 最近プレイしたゲーム表示
function updateRecentGames() {
    const recentSection = document.getElementById('recentSection');
    const recentGames = document.getElementById('recentGames');
    
    if (userData.playHistory.length === 0) {
        recentSection.style.display = 'none';
        return;
    }
    
    recentSection.style.display = 'block';
    recentGames.innerHTML = '';
    
    userData.playHistory.slice(0, 5).forEach(gameUrl => {
        const game = gameData.find(g => g.url === gameUrl);
        if (game) {
            const recentGame = document.createElement('div');
            recentGame.className = 'recent-game';
            recentGame.innerHTML = `${game.icon} ${game.title}`;
            recentGame.addEventListener('click', () => playGame(gameUrl));
            recentGames.appendChild(recentGame);
        }
    });
}

// 統計パネルの表示切り替え
function setupStatsToggle() {
    const statsToggle = document.getElementById('statsToggle');
    const statsPanel = document.getElementById('statsPanel');
    
    statsToggle.addEventListener('click', function() {
        playClickSound();
        if (statsPanel.classList.contains('show')) {
            statsPanel.classList.remove('show');
            this.textContent = '📊 統計表示';
        } else {
            statsPanel.classList.add('show');
            this.textContent = '📊 統計非表示';
            updateStatsDisplay();
        }
    });
}

// データ保存（メモリのみ）
function saveUserData() {
    try {
        // Set を Array に変換して保存
        const dataToSave = {
            ...userData,
            exploredCategories: Array.from(userData.exploredCategories)
        };
        sessionStorage.setItem('gamePortalUserData', JSON.stringify(dataToSave));
    } catch (error) {
        console.log('データを保存できませんでした:', error);
    }
}

// データ読み込み
function loadUserData() {
    try {
        const saved = sessionStorage.getItem('gamePortalUserData');
        if (saved) {
            const parsedData = JSON.parse(saved);
            userData = {
                ...userData,
                ...parsedData,
                exploredCategories: new Set(parsedData.exploredCategories || [])
            };
        }
    } catch (error) {
        console.log('データを読み込めませんでした:', error);
    }
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
    const newGames = gameData.filter(game => game.isNew);
    
    newGames.forEach(game => {
        const button = document.querySelector(`[data-url="${game.url}"]`);
        if (button) {
            button.classList.add('highlight');
            
            // 特別な効果音
            setTimeout(() => playClickSound(), Math.random() * 2000);
            
            // 10秒後にハイライトを削除
            setTimeout(() => {
                button.classList.remove('highlight');
            }, 10000);
        }
    });
}

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

// おすすめゲーム機能（改良版）
function showRecommendations() {
    // 最もプレイしたカテゴリを分析
    const categoryCount = {};
    userData.playHistory.forEach(url => {
        const game = gameData.find(g => g.url === url);
        if (game) {
            game.category.split(' ').forEach(cat => {
                categoryCount[cat] = (categoryCount[cat] || 0) + 1;
            });
        }
    });
    
    // おすすめメッセージを表示
    if (userData.totalPlays >= 3) {
        const favoriteCategory = Object.keys(categoryCount).reduce((a, b) => 
            categoryCount[a] > categoryCount[b] ? a : b, 'action');
        
        const categoryName = categories[favoriteCategory]?.name || 'アクション';
        
        console.log(`🎯 おすすめ: ${categoryName}ゲームがお好みのようですね！`);
        
        // 未プレイの同カテゴリゲームを推薦
        const unplayedSameCategory = gameData.filter(game => 
            game.category.includes(favoriteCategory) && 
            !userData.playHistory.includes(game.url)
        );
        
        if (unplayedSameCategory.length > 0) {
            const recommended = unplayedSameCategory[0];
            console.log(`🌟 「${recommended.title}」はいかがですか？`);
        }
    }
}

// 定期的な励ましメッセージ
function showEncouragingMessages() {
    const messages = [
        '🎮 新しいゲームに挑戦してみませんか？',
        '⭐ お気に入りのゲームを見つけましたか？',
        '🏆 実績解除まであと少し！',
        '🌟 今日も楽しくゲームしましょう！',
        '🎯 まだ遊んでいないジャンルがありますよ！'
    ];
    
    // 5分おきにメッセージ表示（デモ用は30秒）
    if (userData.totalPlays > 0) {
        setTimeout(() => {
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            showTemporaryMessage(randomMessage);
            
            // 次のメッセージをスケジュール
            setTimeout(showEncouragingMessages, 300000); // 5分後
        }, 30000); // 30秒後
    }
}

// 一時的なメッセージ表示
function showTemporaryMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(45deg, #4CAF50, #45a049);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        font-size: 1rem;
        font-weight: 500;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
        animation: slideUpMessage 0.5s ease;
        max-width: 90%;
        text-align: center;
    `;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    // 4秒後に削除
    setTimeout(() => {
        messageDiv.style.animation = 'slideDownMessage 0.5s ease forwards';
        setTimeout(() => messageDiv.remove(), 500);
    }, 4000);
}

// ページが読み込まれた時の処理
document.addEventListener('DOMContentLoaded', function() {
    // データ読み込み
    loadUserData();
    
    // 基本機能の初期化
    createGameButtons();
    setupSearch();
    setupCategoryFilter();
    setupSortFunction();
    setupStatsToggle();
    
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
    
    // 統計表示の更新
    updateStatsDisplay();
    updateRecentGames();
    
    // ゲーム総数を表示
    document.getElementById('totalGames').textContent = gameData.length;
    filterGames(); // 初期表示時にフィルタリングを適用
    
    // おすすめゲームの表示
    showRecommendations();
    
    // 励ましメッセージの開始
    showEncouragingMessages();
    
    // ウェルカムメッセージ
    if (userData.totalPlays === 0) {
        setTimeout(() => {
            showTemporaryMessage('🎮 ゲームポータルへようこそ！好きなゲームを選んで遊んでみてね！');
        }, 2000);
    } else {
        setTimeout(() => {
            showTemporaryMessage(`🌟 おかえりなさい！これまで${userData.totalPlays}回ゲームを楽しんでいますね！`);
        }, 2000);
    }
});

// グローバル関数として公開
window.showAchievement = showAchievement;
window.playClickSound = playClickSound;

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

// 追加のCSSアニメーション（動的に追加）
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes slideUpMessage {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }

    @keyframes slideDownMessage {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
    }

    @keyframes slideOutAchievement {
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    /* 新ゲームの特別なアニメーション */
    .game-button[data-url*="rakka"] .game-icon {
        animation: float 2s ease-in-out infinite, fallDown 3s ease-in-out infinite;
    }

    .game-button[data-url*="yugudora"] .game-icon {
        animation: float 2s ease-in-out infinite, mysticalGlow 4s ease-in-out infinite;
    }

    @keyframes fallDown {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        25% { transform: translateY(-8px) rotate(-5deg); }
        50% { transform: translateY(0px) rotate(0deg); }
        75% { transform: translateY(8px) rotate(5deg); }
    }

    @keyframes mysticalGlow {
        0%, 100% { filter: hue-rotate(0deg) brightness(1); }
        25% { filter: hue-rotate(90deg) brightness(1.2); }
        50% { filter: hue-rotate(180deg) brightness(1); }
        75% { filter: hue-rotate(270deg) brightness(1.2); }
    }
`;
document.head.appendChild(additionalStyles);

// Emoji to SVG conversion
document.addEventListener('DOMContentLoaded', () => {
    if (window.twemoji) {
        const parseOptions = { folder: 'svg', ext: '.svg', className: 'emoji' };
        twemoji.parse(document.body, parseOptions);

        const observer = new MutationObserver(mutations => {
            mutations.forEach(m => {
                m.addedNodes.forEach(node => {
                    if (node.nodeType === 1) {
                        twemoji.parse(node, parseOptions);
                    } else if (node.nodeType === 3 && node.parentNode) {
                        twemoji.parse(node.parentNode, parseOptions);
                    }
                });
                if (m.type === 'characterData' && m.target.parentNode) {
                    twemoji.parse(m.target.parentNode, parseOptions);
                }
            });
        });
        observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    }
});
