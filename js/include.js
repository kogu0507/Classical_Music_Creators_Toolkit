// include.js

/**
 * 指定されたテンプレートを指定された要素に挿入する関数
 * @param {string} templateId - 挿入先の要素の ID
 * @param {string} templateUrl - テンプレートの URL
 */
function includeTemplate(templateId, templateUrl) {
    // テンプレートを挿入する要素を取得
    const templateElement = document.getElementById(templateId);

    // 指定された ID を持つ要素が存在しない場合は処理を中断
    if (!templateElement) {
        console.warn(`Element with ID ${templateId} not found.`);
        return;
    }

    // テンプレートを取得して挿入
    fetch(templateUrl)
        .then(response => {
            // レスポンスが成功でない場合、エラーを投げる
            if (!response.ok) {
                throw new Error(`Failed to load ${templateUrl}: ${response.statusText}`);
            }
            // レスポンスの Content-Type が 'text/html' であることを確認
            if (!response.headers.get('Content-Type').includes('text/html')) {
                throw new Error('Fetched content is not HTML');
            }
            // レスポンスのテキストを取得
            return response.text();
        })
        .then(data => {
            // テンプレートの HTML を指定された要素に挿入
            templateElement.innerHTML = data;
        })
        .catch(error => {
            // エラーが発生した場合のエラーログ
            console.error('Error loading template:', error.message);
            // ユーザーに見せるためのフォールバックコンテンツを表示
            templateElement.innerHTML = '<p>コンテンツの読み込みに失敗しました。</p>';
        });
}

// DOM の読み込みが完了した時にヘッダーとフッターを読み込む
document.addEventListener('DOMContentLoaded', () => {
    // ヘッダーを読み込む
    includeTemplate('header-placeholder', '../components/header.html');
    // フッターを読み込む
    includeTemplate('footer-placeholder', '../components/footer.html');
});
