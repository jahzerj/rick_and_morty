export function createNavButtons() {
  const prevButton = document.createElement('button');
  prevButton.className = 'button button--prev';
  prevButton.textContent = 'previous';
  prevButton.dataset.js = 'button-prev';

  const nextButton = document.createElement('button');
  nextButton.className = 'button button--next';
  nextButton.textContent = 'next';
  nextButton.dataset.js = 'button-next';

  return { prevButton, nextButton };
}
