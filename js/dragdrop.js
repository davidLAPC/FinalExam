let bankLi = document.querySelectorAll('.multipleChoiceOptions ol li');

for (li of bankLi) {
  li.addEventListener('drop', drop);
  li.addEventListener('dragover', allowDrop);
}

let choices = document.querySelectorAll('.multipleChoiceOptions ol li p');
for (p of choices) {
  p.setAttribute('draggable', true);
  p.addEventListener('dragstart', drag);
}

let questions = document.querySelectorAll('.multipleChoiceQuestions li div');
for (div of questions) {
  div.addEventListener('dragover', allowDrop);
  div.addEventListener('drop', drop);
}

function allowDrop(e) {
  e.preventDefault();
}
function drag(e) {
  e.dataTransfer.setData('text', e.target.id);
}
function drop(e) {
  e.preventDefault();
  let space = document.createElement('span');
  space.append(' ');
  var data = e.dataTransfer.getData('text');
  e.target.appendChild(document.getElementById(data));
  e.target.appendChild(space);
}
