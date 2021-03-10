
let addButton = document.querySelector('.button');

addButton.addEventListener('click', () => {
  let tagsArea = document.querySelector('.component_TagsArea');
  let inputValue = document.querySelector('.inputValue').value;
  let tagContainer = document.createElement('p');
  tagContainer.className = 'tag';
  tagContainer.innerHTML = `${inputValue}`;
  tagsArea.prepend(tagContainer);
  document.querySelector('.inputValue').value = ''; 
});

