function hasClass(el, className) {
  return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
}

function addClass(el, className) {
  if (el.classList) el.classList.add(className);
  else if (!hasClass(el, className)) el.className += ' ' + className;
}

function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);
  else el.className = el.className.replace(new RegExp('\\b' + className + '\\b', 'g'), '');
}

function toggle(el) {
  hasClass(el, 'is_hidden') ? removeClass(el, 'is_hidden') : addClass(el, 'is_hidden');
}
function myFunction() {
  var fruits = ["Banana", "I don't know how to swim and", "my least favorite food is sushi. ", "Apple", "Mango"];
  var citrus = fruits.slice(1, 3);
  document.getElementById("demo").innerHTML = citrus;
}
