// 日本語の日付文字列をDateオブジェクトに変換する関数
function parseJapaneseDate(dateStr) {
  // "2024年3月15日" のような形式を "2024-03-15" に変換
  const [year, month, day] = dateStr.match(/(\d+)年(\d+)月(\d+)日/).slice(1);
  return new Date(year, month - 1, day); // 月は0から始まるため-1
}

// 投稿を日付順にソートする関数
function sortPostsByDate() {
  const postGrid = document.querySelector('.post-grid');
  if (!postGrid) return;

  const posts = Array.from(postGrid.children);
  
  posts.sort((a, b) => {
    const dateA = parseJapaneseDate(a.querySelector('.post-date').textContent);
    const dateB = parseJapaneseDate(b.querySelector('.post-date').textContent);
    return dateB - dateA; // 降順（新しい順）
  });

  // ソートされた投稿を再配置
  posts.forEach(post => postGrid.appendChild(post));
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', () => {
  console.log("学習ブログへようこそ");
  sortPostsByDate();
});
