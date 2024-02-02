class Duck {
    constructor(name, color, age, weight, image) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.weight = weight;
        this.image = image;

    }

    Show() {
        let str = "";
        str += `<h3>duck details:</h3>`;
        str += `duck name: ${this.name}<br>`;
        str += `duck color: <span style="color:${this.color}">${this.color}</span><br>`;
        str += `duck age: ${this.age}<br>`;
        str += `duck weight: ${this.weight}<br>`;
        str += `<img src="${this.image}" alt="duck" width="150" height="150"><br>`;
        document.getElementById('result-block').innerHTML = str;
    }

    Quack() {
        let str = "";
        document.getElementById('result-block').innerHTML = str;
        let quackPrintNumber = Number((this.age * this.weight) / 2);
        for (var i = 0; i < quackPrintNumber; i++) {
            str += `Quack!, `;
        }
        document.getElementById('result-block').innerHTML = str;
        if (this.audioCounter < 3) {
            this.audioCounter++;
            document.getElementById("duck_audio").play();
            setTimeout(() => this.Quack(), 1500);
        }

    }


}
let CreateBTN = document.getElementById("create-duck");
let ShowBTN = document.getElementById("show");
let QuackBTN = document.getElementById("quack");

CreateBTN.addEventListener('click', function () {
    const color = document.getElementById('color').value;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const image = document.getElementById('img').value;
    duck = new Duck(name, color, age, weight, image);
    ShowBTN.disabled = false;
    QuackBTN.disabled = false;
    CreateBTN.disabled = true;
});

ShowBTN.addEventListener('click', function () {
    duck.Show();
});

QuackBTN.addEventListener('click', function () {
    duck.audioCounter = 0;
    duck.Quack();

});

ResetBTN.addEventListener('click', function () {
        ShowBTN.disabled = true;
        QuackBTN.disabled = true;
        CreateBTN.disabled = false;
});






