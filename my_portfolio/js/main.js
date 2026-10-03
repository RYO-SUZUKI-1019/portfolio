const backToTop = document.getElementById("back-to-top");

backToTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ==============================
// Works フィルター
// ==============================

const filterButtons = document.querySelectorAll(".filter-btn");
const worksItems = document.querySelectorAll(".works-item");
filterButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        // ページ移動を止める
        event.preventDefault();
        // クリックしたボタンのカテゴリーを取得
        const filter = this.dataset.filter;
        // activeを全部外す
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });
        // クリックしたボタンだけactive
        this.classList.add("active");
        // 作品をチェック
        worksItems.forEach(function(item) {
            const category = item.dataset.category;
            if (filter === "all" || category === filter) {
                // 表示
                item.style.display = "";
            } else {
                // 非表示
                item.style.display = "none";
            }
        });
    });
});

const scrollItems = document.querySelectorAll('.scroll-fade');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }

  });
});

scrollItems.forEach((item) => {
  observer.observe(item);
});