// ショートカットキーの定数を設定
const SHORTCUTS = {
    1: 'toggleMenu',  // メニュー開閉
    2: 'shordcut2',   // 未定
    3: 'undefined',   // 未定
    4: 'undefined',   // 未定
    5: 'undefined',   // 未定
    6: 'undefined',   // 未定
    7: 'undefined',   // 未定
    8: 'undefined',   // 未定
    9: 'undefined',   // 未定
    0: 'undefined'    // 未定
};

// ボタン、メニュー、オーバーレイを取得
const menuButton = document.getElementById('menuToggle');
const slideMenu = document.getElementById('slideMenu');
const overlay = document.getElementById('overlay');

// ボタンがクリックされたときの動作
menuButton.addEventListener('click', function () {
    slideMenu.classList.toggle('active'); // メニューの表示/非表示を切り替え
    overlay.classList.toggle('active'); // オーバーレイの透明度を変化させて表示/非表示を切り替え
    menuButton.classList.toggle('active'); // ボタンの状態を切り替え（ハンバーガー→✖、その逆）
});

// オーバーレイがクリックされたときの動作
overlay.addEventListener('click', function () {
    slideMenu.classList.remove('active'); // メニューを非表示
    overlay.classList.remove('active'); // オーバーレイを非表示
    menuButton.classList.remove('active'); // ボタンの状態を元に戻す
});

// キーボードショートカットの処理
document.addEventListener('keydown', function (event) {
    const action = SHORTCUTS[event.key];
    
    if (action === 'toggleMenu') {
        // メニューのトグル処理を呼び出す
        menuButton.click();
        menuButton.focus();
    } else if (action === 'shordcut2') {
        alert(`ショートカット2だぴょん`);
    } else if (action === 'undefined') {
        alert(`キーボードの${event.key}が押されました。ショートカットは未定です`);
    }
});

