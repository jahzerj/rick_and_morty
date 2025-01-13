export function createSearchBar() {
    const form = document.createElement('form');
    form.className = 'search-bar';
    form.dataset.js = 'search-bar';
  
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'query';
    input.placeholder = 'search characters';
    input.ariaLabel = 'character name';
  
    const button = document.createElement('button');
    button.className = 'search-bar__button';
    button.ariaLabel = 'search for character';
  
    const icon = document.createElement('img');
    icon.className = 'search-bar__icon';
    icon.src = 'assets/magnifying-glass.png';
    icon.alt = '';
  
    button.appendChild(icon);
    form.appendChild(input);
    form.appendChild(button);
  
    return form;
  }
