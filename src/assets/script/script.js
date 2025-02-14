document.querySelectorAll(".category").forEach((category) => {
  if (category.lastElementChild) {
    category.addEventListener("mouseover", () => {
      if (!category.lastElementChild.classList.contains("current-cat")) {
        category.lastElementChild.classList.add("hover-cat");
      }
    });
    category.addEventListener("mouseout", () => {
      category.lastElementChild.classList.remove("hover-cat");
    });

    category.addEventListener("click", () => {
      document.querySelectorAll(".category").forEach((cat) => {
        cat.lastElementChild.classList.remove("current-cat");
      });
      category.lastElementChild.classList.add("current-cat");
      localStorage.setItem("currentCategory", category.dataset.category);
    });
  }
});
