// document.querySelector('button')
//   .addEventListener('click', function() {
//     document.querySelector('.answerBox').classList.toggle('isOpen');
//   });
// let btnarray = document.querySelectorAll(".btn");
// let answerarray = document.querySelectorAll(".answerBox");
// console.log(btnarray);

// btnarray.forEach((e) => {
//   e.addEventListener("click", function () {
//     document.querySelector(".answerBox").classList.toggle("isOpen");

//     // answerarray.forEach((e) =>{
//     //   console.log(e);
//     //   e.classList.toggle('isOpen');

//     // for (i = 0; i < answerarray; i++) {
//     //   document.querySelector(".answerBox").classList.toggle("isOpen");
//     // }

//     e.querySelector(".answerBox");
//   });
// });

const qa = document.querySelectorAll(".jsAc"); // js-ac要素すべて取得
  function acToggle() {
    const content = this.nextElementSibling;
    content.classList.toggle("isOpen");
    // const qa = this;
    // qa.classList.toggle('isOpen');
  }

  for (let i = 0; i < qa.length; i++) { // for文でjs-acメニューをループ処理
    qa[i].addEventListener("click", acToggle);
  }