/*
Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
*/


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputControls: document.querySelector("#controls > input[type=number]"),
  btnCreate: document.querySelector("#controls > button:nth-child(2)"),
  btnDestroy: document.querySelector("#controls > button:nth-child(3)"),
  boxesDiv: document.querySelector("#boxes")
};
console.dir(refs.inputControls);
console.dir(refs.btnCreate);
console.dir(refs.btnDestroy);
console.dir(refs.boxesDiv);




let inputNum;
refs.inputControls.addEventListener('input', evt => {
  return inputNum = evt.currentTarget.value;
  console.dir(inputNum);
})


const mass2 = [
{ boxSize: 30, color: '#e05c20'},
{ boxSize: 40, color: '#db65e2'},
{ boxSize: 50, color: '#870110'},
{ boxSize: 60, color: '#cce368'},
{ boxSize: 70, color: '#e6d32c'},
];

console.log(mass2);


let mass = [];
console.log(mass);

refs.btnCreate.addEventListener('click', num)
function num(evt) {
    const size = inputNum; //
  for ( let i = 1; i <= size; i++) {
    mass.push(Number(`{boxSize: ${20 +(i * 10)}, color: '${getRandomHexColor()}'}`));
  }
     console.dir(size);
    }
const massssss = [...mass]
console.log(massssss);
let arrClone = Array.from(mass);
console.log(arrClone);
function createBoxes(mass2) {

  return mass2
    .map(
      ({boxSize, color}) => `<div class="qqqq" style="width: ${boxSize}px; height:${boxSize}px; background-color: ${color};"></div>`
  ).join('');
};
refs.boxesDiv.insertAdjacentHTML('beforeend', createBoxes(mass2));
