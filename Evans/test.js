// function fn1(){
//     var str = document.getElementById('text1').value;
//     document.getElementById('text2').value=str;
//     var arreglo = separarPorComa(str)
//     console.log(arreglo)
// }

// function clear(){
//    document.getElementById('text1').reset()
// }

// function separarPorComa(){
    
// }

function fn1() {
    var str1 = document.getElementById('text1').value;
    var dvd = str1.split(" ",).sort();
    document.getElementById('text2').value = dvd;
}



