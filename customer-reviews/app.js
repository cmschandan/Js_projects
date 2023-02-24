// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

// get button in variable using getElementById
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

// select button using querySelector

const prev = document.querySelector('.prev-btn');
const next = document.querySelector('.next-btn');
const random = document.querySelector('.random-btn');

let currentReview = 0;

window.addEventListener("DOMContentLoaded", function(){
  // console.log('Yeah Log hoga jab screen reload hoga');
  showPerson(currentReview);
})

function showPerson(person){
  const item = reviews[person];
  console.log(item);
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// previous button accessing person
prev.addEventListener('click', function(){
  currentReview--;
  if(currentReview <0){
    currentReview = reviews.length -1;
    console.log(currentReview);
  }
  showPerson(currentReview);
})

// access person with next button
next.addEventListener('click', function(){
  currentReview++;
  console.log(currentReview);
  if(currentReview > reviews.length-1){
    currentReview = 0;
  }
  showPerson(currentReview);
})

// random person shows up
random.addEventListener('click',function(){
  // here Math.random will generate random number and multiply with reviews lenght and round the number with Math.floor()
  currentReview = Math.floor(Math.random() * reviews.length);
  console.log(currentReview);
  showPerson(currentReview);
})

