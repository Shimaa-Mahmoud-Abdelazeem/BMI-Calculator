function calculateBmi() {
    let height = document.getElementById('height').value;
    height = height / 100;
    let weight = document.getElementById('weight').value;

    // validate
    if (height == '' && weight == '') {
        alert('please enter the Height and Weight to calculate BMI');
        document.getElementById('height').focus();
        return false;
    }
    else if (height == '' || height <= 0) {
        alert('Height value is empty or invalid');
        document.getElementById('height').focus();
        return false;
    }
    else if (weight == '' || weight <= 0) {
        alert('Weight value is empty or invalid');
        document.getElementById('weight').focus();
        return false;
    }

    
    let bmi = (weight / (height * height));

    document.getElementById('result').innerHTML = bmi.toFixed(2);

    if (bmi < 18.5) {
        document.getElementById('comment').innerHTML = 'You are Underweight';
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById('comment').innerHTML = 'You are Healthy weight';
    }
    else if (bmi > 25) {
        document.getElementById('comment').innerHTML = 'You are Overweight';
    }
    else {
        document.getElementById('comment').innerHTML = 'hi';
    }
}