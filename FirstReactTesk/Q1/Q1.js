class Counter {
    //cunstructor
    constructor() {
        this.num = 0;
    }

    //class methods
    Initialize(InputNum) {
        this.num = InputNum;
    }

    Increment() {
        this.num++;
    }
    Go() {
        let arr = [];
        for (let index = 0; index <= this.num; index++) {
            arr.push(index);
        }
        ArrayPrint.innerHTML = arr.join(", ");
    }
}
let Input = document.getElementById("InputNum");
let btnStart = document.getElementById("btnStart");
let btnPlus = document.getElementById("btnPlus");
let btnGo = document.getElementById("btnGo");
let P_array = document.getElementById("ArrayPrint");

//addEventListener = take the element by id and start the function base on the mouse event
//for exmple: Input= the element from the html page, click = the mouse_event,
//function= what i want to do after i click
Input.addEventListener("click", function () {
    btnPlus.disabled = true;
    btnGo.disabled = true;
    ArrayPrint.innerHTML = "";
});//every time we change numbers on the textBox the print array will disapear

btnStart.addEventListener("click", function () {
    NewCounter = new Counter();//create a new object
    NewCounter.Initialize(Input.value);
    btnPlus.disabled = false;
    btnGo.disabled = false;
    //abled the go and + button
});

btnPlus.addEventListener("click", function () {
    NewCounter.Increment();
    Input.value = NewCounter.num;
});

btnGo.addEventListener("click", function () {
    NewCounter.Go();
});