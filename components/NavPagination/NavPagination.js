export function createNavPagination(currentPage, totalPages) {
  const pagination = document.createElement('span');
  pagination.className = 'navigation__pagination';
  pagination.dataset.js = 'pagination';
  pagination.textContent = `${currentPage} / ${totalPages}`;

  return pagination;
}
