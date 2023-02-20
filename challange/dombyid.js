

const h3 = document.getElementById('heading3');
h3.style.color = 'orange';
h3.style.background = 'black';
h3.style.width='500px' ;
console.log(h3)

const list = document.getElementById('list');
console.log(list[0]);

// getby tagname
const headings = document.getElementsByTagName('h2');
headings[0].style.color='red';
headings[1].style.color='skyblue';