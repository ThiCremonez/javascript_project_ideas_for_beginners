function calc(){
    var ht = document.getElementById('hg')
    var wt = document.getElementById('wg')
    
    if ((wt.value == isNaN || wt.value <= 0) || (ht.value == isNaN || ht.value <= 0)){
        window.alert("[ERROR] Invalid Number")
    } else {
        var result = (Number(wt.value)/(Number(ht.value)**2)).toFixed(2)

        res.innerHTML = `Your BMI is ${result}`
    
        if (result < 18.5){
            txt.innerHTML = `Underweight: Obesity class = 0`
        } else if (result >= 18.5 && result < 25){
            txt.innerHTML = `Normal: Obesity class = 0`
        } else if (result >= 25 && result < 30){
            txt.innerHTML = `Overweight: Obesity class = I`
        } else if (result >= 30 && result < 40){
            txt.innerHTML = `Obese: Obesity class = II`
        } else {
            txt.innerHTML = `Extremely Obese: Obesity class = III`
        }
    }

}