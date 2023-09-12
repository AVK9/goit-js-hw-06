const counter = {
    value: 0,
    increment() {
        // console.log('inc->', this);
        this.value += 1;
    },
    decrement() {
        // console.log('dec->', this);
        this.value -= 1;
    },
};
const decrementBtn = document.querySelector('.decrement');
const incrementBtn = document.querySelector('.increment');
const valueEl = document.querySelector('.value');

decrementBtn.addEventListener('click', function () {
    counter.decrement();
    console.log(counter);
    valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
    counter.increment();
    console.log(counter);
    valueEl.textContent = counter.value;
});