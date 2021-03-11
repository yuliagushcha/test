
let addButton = document.querySelector('.button');
let closeButton = document.querySelector('.pic');

addButton.addEventListener('click', () => {

  let tagsArea = document.querySelector('.component_TagsArea');
  let inputValue = document.querySelector('.inputValue').value;
  let tagContainer = document.createElement('div');
  let pic = document.createElement('img');

  pic.className = 'pic';
  pic.src = 'cross.png';
  tagContainer.className = 'tag';

  if (inputValue === '') {
    alert('Type the tag');
  } else {
    tagContainer.innerHTML = `<p>${inputValue}</p>`;
    tagContainer.append(pic);
    tagsArea.prepend(tagContainer);
    document.querySelector('.inputValue').value = ''; 
  }
  
});

// if (closeButton) {
//   closeButton.addEventListener('click', (i) => {
//     closeButton.style.display = 'none';
//   })
// }

