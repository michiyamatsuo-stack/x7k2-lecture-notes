async function renderWorks() {
  const grid = document.getElementById("works-grid");

  let works = [];
  try {
    const res = await fetch("data/works.json");
    works = await res.json();
  } catch (err) {
    grid.innerHTML = '<p class="empty-message">作品データの読み込みに失敗しました。</p>';
    console.error(err);
    return;
  }

  if (!Array.isArray(works) || works.length === 0) {
    grid.innerHTML = '<p class="empty-message">まだ作品が登録されていません。</p>';
    return;
  }

  const typeLabel = { article: "記事", video: "動画" };

  grid.innerHTML = works
    .map((work) => {
      const badge = typeLabel[work.type] || "";
      return `
        <a class="work-card" href="${work.page}">
          <img class="work-card__thumb" src="${work.thumbnail}" alt="${work.title}のサムネール" loading="lazy">
          <div class="work-card__body">
            ${badge ? `<span class="work-card__badge">${badge}</span>` : ""}
            <span class="work-card__title">${work.title}</span>
            <span class="work-card__student">${work.student}</span>
          </div>
        </a>
      `;
    })
    .join("");
}

renderWorks();
