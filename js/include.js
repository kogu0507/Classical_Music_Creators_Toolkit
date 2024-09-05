// include.js

// ヘッダーとフッターを読み込む関数
function includeTemplate(templateId, templateUrl) {
    // テンプレートを挿入する要素を取得
    const templateElement = document.getElementById(templateId);

    // テンプレートが存在しない場合は処理を中断
    if (!templateElement) return;

    // テンプレートを取得して挿入
    fetch(templateUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${templateUrl}`);
            }
            return response.text();
        })
        .then(data => {
            templateElement.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading template:', error);
        });
}

// DOMが読み込まれたらヘッダーとフッターを読み込む
document.addEventListener('DOMContentLoaded', () => {
    includeTemplate('header-placeholder', 'header.html'); // ヘッダーを読み込む
    includeTemplate('footer-placeholder', 'footer.html'); // フッターを読み込む
});
