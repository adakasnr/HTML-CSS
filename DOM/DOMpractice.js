// console.dir(document);
// console.log(document.doctype);
// console.log(document.all[10]);
// console.log(document.URL);
// console.log(document.title);
// document.header.textContent=123;
// console.log(document.body)
// document.title="abcd";
// document.header="super"
// console.log(document.header)

// var logo=document.getElementsByClassName("logo")
// console.log(logo[0])
// logo[0].textContent = 'super';
// console.log(document.getElementById('itemsList'));
// var listItems = document.getElementById('itemsList');
// console.log(listItems);
// console.log(document.getElementsByClassName('itemsList'))
// var items = document.getElementsByClassName('name-class');
// var items = document.querySelector('#name-class');
// console.log(items);
// console.log(items[1])
// items[1].textContent="nice"
// items[1].innerText="fine"
// items[2].style.background='red'

// to change bacjground color to all lists
// items.style.backgroundColor ='grey' - this is giving error
// we have do by using for loop



// for (var i=0; i < items.length; i++){
//     items[1].style.backgroundColor = 'pink'
// }

// // By TAGName
// var liTag = document.getElementsByTagName('li');
// console.log(liTag);
// console.log(liTag[3])
// liTag[3].textContent='by tag name'

// QUERYSELECTOR
// var InputBox = document.querySelector('input[type="submit"]');
// console.log(InputBox)
// InputBox.style.backgroundColor = 'red';
// InputBox.value = "ice"

// var wishes = document.querySelector('#wish')
// console.log(wishes)
// wishes.textContent='HI! there'

// // QUERYSELECTOR ALL
// var item = document.querySelectorAll('.name-class');
// console.log(item)

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i =0; i<odd.length; i++){
//     odd[i].style.backgroundColor = "yellow";
//     even[i].style.backgroundColor = "red"
// }

// TRAVERSING THE DOM
var listitems = document.querySelector('.box')

// // parentNode
// console.log(listitems.parentNode);
// listitems.parentNode.style.backgroundColor = 'brown';
// parentElement
// console.log(listitems.parentElement);
// listitems.parentElement.style.backgroundColor = 'orange';

// CHILD Nodes-we can select child based on parent class
// console.log(listitems.childNodes)
// console.log(listitems.children[0])
// listitems.children[0].style.padding = '10px'

// lastChild & lastElementChild 
// console.log(listitems.lastElementChild)
// listitems.lastElementChild.style.color = 'blue'
// nextSibling & nextElementSibling & previousSibiling &previousElementSibling
// console.log(listitems.nextElementSibling)
// console.log(listitems.previousElementSibling)

// create element 

var newDiv = document.createElement('div');
console.log(newDiv)
// add class & id
newDiv.className = 'note'
newDiv.id = 'yes'

// create text 
var newText =  document.createTextNode('i am new text')

// adding that text to new div
newDiv.appendChild(newText)

var adding = document.querySelector('header ,.logo')
var newh1 = document.querySelector('header h1');

console.log(newDiv)
adding.insertBefore(newDiv,newh1);


