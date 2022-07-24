// this code transform the type chose in "mg" and it's converted to the others

function toMg(){
    // transforming num_choose in mg
    var num_choose = document.querySelector('#num_c').value;
    var element = document.querySelector('#unit');
    var unit = element.options[element.selectedIndex].value;
    var num;

    if (unit == 'miligrams') {
        num = num_choose;
    } else if (unit == 'grams') {
        num = num_choose*1000;
    } else if (unit == 'kilograms') {
        num = num_choose*1000000;
    } else if (unit == 'tons') {
        num = num_choose*1000000000;
    } else if (unit == 'ounces') {
        num = num_choose*28349.523125;
    } else if (unit == 'pounds') {
        num = num_choose*453592.37;
    } else if (unit == 'troy_onces') {
        num = num_choose*31103.4768;
    } else if (unit == 'pennyweight') {
        num = num_choose*1555.17384;
    } else if (unit == 'grains') {
        num = num_choose*64.79891;
    } else if (unit == 'stone') {
        num = num_choose*6350293.18;
    } else if (unit == 'atomic_mass') {
        num = num_choose*(1.66054019*(Math.pow(10,(-21))));
    } else if (unit == 'us_ton') {
        num = num_choose*(9.072*(Math.pow(10,8)));
    } else if (unit == 'earths') {
        num = num_choose*(5.976*(Math.pow(10,30)));
    } else if (unit == 'suns') {
        num = num_choose*(2*(Math.pow(10,36)));
    }

    // transforming num in others units
    document.getElementById('mg').value = num;
    document.getElementById('kg').value = num/1000000;
    document.getElementById('oz').value = num/28349.523125;
    document.getElementById('lb').value = num/453592.37;
    document.getElementById('st').value = num/6350293.18;
    document.getElementById('nt').value = num/1555.17384;
    document.getElementById('e').value = num/(5.976*(Math.pow(10,30)));
    document.getElementById('g').value = num/1000;
    document.getElementById('t').value = num/1000000000;
    document.getElementById('t_o').value = num/31103.4768;
    document.getElementById('gra').value = num/64.79891;
    document.getElementById('uston').value = num/(9.072*(Math.pow(10,8)));
    document.getElementById('u').value = num/(1.66054019*(Math.pow(10,(-21))));
    document.getElementById('sun').value = num/(2*(Math.pow(10,36)));
}


