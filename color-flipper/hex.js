const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
console.log(btn);

const color = document.querySelector('.color');
console.log(color);

btn.addEventListener('click', function(){
    console.log('clicked on button');
    let hexColor = '#';
    for(i=1;i<=3;i++){
        hexColor += hex[randomNumber()];
        
    }
    console.log(hexColor);
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function randomNumber(){
    return Math.floor(Math.random()*hex.length);
}