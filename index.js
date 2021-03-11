
// adding tags
let addButton = document.querySelector('.button');

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


// tags removal
document.addEventListener( "click" , ({target}) => (target = target.closest(".pic")) && target.parentElement.remove());


// readonly mode
let active = document.querySelector('.readOnlyMode');
let textMode = document.querySelector('.inputValue');
let tagMode = document.querySelector('.component_TagsArea');

active.addEventListener('click', () => {
  (!active.classList.contains('active')) ? active.classList.add('active') : active.classList.remove('active');
  (!textMode.hasAttribute('readonly')) ? textMode.setAttribute('readonly', '') : textMode.removeAttribute('readonly');
  (!addButton.hasAttribute('disabled')) ? addButton.setAttribute('disabled', '') : addButton.removeAttribute('disabled');
  (!tagMode.classList.contains('inactiveTag')) ? tagMode.classList.add('inactiveTag') : tagMode.classList.remove('inactiveTag')
})