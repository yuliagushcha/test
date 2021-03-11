
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

  let count = document.querySelectorAll('.tag').length;
  localStorage.setItem(`tag${count}`, `${inputValue}`);

});


// tags removal

document.addEventListener( "click" , ({target}) => (target = target.closest(".pic")) && target.parentElement.remove());


// readonly mode

let active = document.querySelector('.readOnlyMode');
let textMode = document.querySelector('.inputValue');
let tagMode = document.querySelector('.component_TagsArea');
let clearButton = document.querySelector('.clearTags');

active.addEventListener('click', () => {
  (!active.classList.contains('active')) ? active.classList.add('active') : active.classList.remove('active');
  (!textMode.hasAttribute('readonly')) ? textMode.setAttribute('readonly', '') : textMode.removeAttribute('readonly');
  (!addButton.hasAttribute('disabled')) ? addButton.setAttribute('disabled', '') : addButton.removeAttribute('disabled');
  (!tagMode.classList.contains('inactiveTag')) ? tagMode.classList.add('inactiveTag') : tagMode.classList.remove('inactiveTag');
  (!clearButton.classList.contains('inactiveTag')) ? clearButton.classList.add('inactiveTag') : clearButton.classList.remove('inactiveTag');
})


// adding to local storage, clearing tags

clearButton.addEventListener('click', () => {
  localStorage.clear();
  let tagsParent = document.querySelector('.component_TagsArea');
  while (tagsParent.firstChild) {
    tagsParent.removeChild(tagsParent.firstChild);
  }
})
