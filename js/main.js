let numStudents = document.getElementById("numStudents");
let genArray = document.getElementById("genArray");
let studentScreen = document.getElementById("studentScreen");
let nextStudent = document.getElementById("nextStudent");

( function()  {
  let randomArray;
  let arrayIndex = 0;

  function genRandomArray(){
    randomArray = [];
    let inputNum = numStudents.value;
    for (i = 0; i < inputNum; i++) {
      let num = Math.ceil(Math.random() * inputNum);
      if(!randomArray.includes(num)) {
        randomArray.push(num);
      } else {
        i--;
      }
    }
    return randomArray
  }

  genArray.addEventListener('click', function(){
    randomArray = genRandomArray();
    arrayIndex = 0;
    studentScreen.textContent = randomArray[arrayIndex];
    console.log(randomArray);
  });

  nextStudent.addEventListener('click', function(){
    arrayIndex++;
    if(arrayIndex > randomArray.length - 1){
      genRandomArray();
      console.log(randomArray);
      arrayIndex = 0;
    };
    studentScreen.textContent = randomArray[arrayIndex];
  });
  prevStudent.addEventListener('click', function(){
    arrayIndex--;
    if(arrayIndex < 0) {
      arrayIndex++;
    }
    studentScreen.textContent = randomArray[arrayIndex];
  });

})();
