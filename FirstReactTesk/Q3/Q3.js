class Clock {

    constructor(country,seconds,minutes,hours) {

        this.country = country;
        this.seconds = seconds;
        this.minutes = minutes;
        this.hours = hours;
    }

    ConverToSeconds() {

       return ( this.hours * 3600 + this.minutes * 60 + this.seconds);
    }

    Show() {
        let str_hour = this.hours;
        let str_minutes = this.minutes;
        let str_seconds = this.seconds;
        if (this.hours.toString().length < 2) {
            str_hour = `0${this.hours}`;
        }
        if (this.minutes.toString().length < 2) {
            str_minutes = `0${this.minutes}`;
        }
        if (this.seconds.toString().length < 2) {
            str_seconds = `0${this.seconds}`;
        }
        return `${str_hour}:${str_minutes}:${str_seconds}`;

    }

}
let clockARR = [];
let countryInput = document.getElementById('country');
let hoursInput = document.getElementById('hours');
let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');
let submitButton = document.getElementById('submit');
let ResultBlock = document.getElementById('result-block');

    // Function to check if all form fields are filled
    function isFormFilled() {
        return countryInput.value!== '' &&
            hoursInput.value!== '' &&
            minutesInput.value!== '' &&
            secondsInput.value!== '';
    }

submitButton.addEventListener('click', function () {

    if (!isFormFilled()) {
        alert("Please fill out the entire form");
    }
    else {
        let country = countryInput.value;
        let hours = parseInt(hoursInput.value);
        let minutes = parseInt(minutesInput.value);
        let seconds = parseInt(secondsInput.value);

        // Validate input values
        if (isNaN(hours) || hours < 0 || hours > 23 || isNaN(minutes) || minutes < 0 || minutes > 59 || isNaN(seconds) || seconds < 0 || seconds > 59) {
            alert("Invalid values for hours, minutes, or seconds. Please enter valid values.");
            return;
        }

        let clock = new Clock(country, seconds, minutes, hours);
        clockARR.push(clock);
        countryInput.value = '';
        hoursInput.value = '';
        minutesInput.value = '';
        secondsInput.value = '';
        if (clockARR.length >= 5) {
            let str = "";
            for (let i = 0; i < clockARR.length; i++) {
                let time = clockARR[i].Show();
                str += `Clock Number ${i + 1}: Country: ${clockARR[i].country
                    }, Time: ${time}, Time in Seconds: ${clockARR[i].ConverToSeconds()}<br/>`;
            }
            ResultBlock.innerHTML = str;
        }
    }

});
