let currentPage = 1;

function toggleClass(e, toggleClassName) {
  if (e.classList.contains(toggleClassName)) {
    e.classList.remove(toggleClassName);
  } else {
    e.classList.add(toggleClassName);
  }
}

function movePage(e, page) {
  if (page === currentPage) {
    currentPage += 2;
    toggleClass(e, "left-side");
    toggleClass(e.nextElementSibling, "left-side");
  } else if (page === currentPage - 1) { 
    currentPage -= 2;
    toggleClass(e, "left-side");
    toggleClass(e.previousElementSibling, "left-side");
  }
}
