// const emojis = [
//     "😝",
//     "😝",
//     "😎",
//     "😎",
//     "🤞",
//     "🤞",
//     "❤️",
//     "❤️",
//     "🤫",
//     "🤫",
//     "🤡",
//     "🤡",
//     "🤢",
//     "🤢",
//     "🥺",
//     "🥺"

// ];
// let openCards = [];

// let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2: -1));

// for(let i=0; i < emojis.length; i++) {
//     let box = document.createElement("div");
//     box.className = "item";
//     box.innerHTML = shuffleEmojis[i];
//     box.onclick = handleClick;
//     document.querySelector(".game").appendChild(box)
// }

// function handleClick () {
//     if(openCards.length < 2) {
//         this.classList.add("boxOpen");
//         openCards.push(this);
//     }

//     if(openCards.length == 2){
//         setTimeout(checkMatch, 500)
//     }
// W
// }

// function checkMatch() {
//     if (openCards[0].innerHTML === openCards[1].innerHTML) {
//         openCards[0].classList.add("boxMatch");
//         openCards[1].classList.add("boxMatch")
//     }else{
//         openCards[0].classList.remove("boxOpen");
//         openCards[1].classList.remove("boxOpen");

//     }

//     openCards = [];

//     if (document.querySelectorAll(".boxMatch").length === emojis.length) {
//         alert("Você venceu!");
//     }

// }


const images = [
  "assets/images/1.jpg",
  "assets/images/1.jpg",
  "assets/images/2.jpg",
  "assets/images/2.jpg",
  "assets/images/3.jpg",
  "assets/images/3.jpg",
  "assets/images/4.jpg",
  "assets/images/4.jpg",
  "assets/images/5.jpg",
  "assets/images/5.jpg",
  "assets/images/6.jpg",
  "assets/images/6.jpg",
  "assets/images/7.jpg",
  "assets/images/7.jpg",
  "assets/images/8.jpg",
  "assets/images/8.jpg"
];

let openCards = [];

let shuffleImages = images.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < shuffleImages.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = `<img src="${shuffleImages[i]}" alt="card" style="width: 100%; height: 100%; object-fit: cover;" />`;
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}

function handleClick() {
  if (openCards.length < 2 && !this.classList.contains("boxOpen") && !this.classList.contains("boxMatch")) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  const img1 = openCards[0].querySelector("img").src;
  const img2 = openCards[1].querySelector("img").src;
  if (img1 === img2) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === images.length) {
     alert("Você venceu!");
   }
}
