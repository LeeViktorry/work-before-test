// #1

// function Calc(l){
//     let arr = []
//     for(var i = 0; i < l; i++){
//         arr.push(Math.floor(Math.random() * (1000 - 10) + 10))
//     }
//     console.log(arr);
//     for(var i = 0; i < l; i++){
//         if(arr[i] > 9 && arr[i] < 100){
//             arr[i] += ''
//         }else if (arr[i] > 99 && arr[i] < 1000){
//             arr[i] = -Math.abs(arr[i])
//         }
//     }
//     console.log(arr);
// }
// Calc(+prompt('length'))


// #2

// function call(l){
//     let arr = []
//     for(var i = 0; i < l; i++){
//         arr.push(Math.floor(Math.random() * 20))
//     }
//     console.log(arr);
//     let na = []
//     for(var i = 0; i < l; i++){
//         if(arr[i] >= 5){
//             na.push(arr[i])
//         }
//     }
//     console.log(na);
// }
// call(+prompt('length'))


// #4

// function call(a){
//     if (a % 2 === 0){
//         alert(a*a)
//     }else if (a % 2 === 1){
//         alert(a+a)
//     }
// }
// call(+prompt('number'))


// #5

// function call(a, b){
//     const data = new Date()
//     let objDate = {
//         day: data.getDate(),
//         month: data.getMonth(),
//     }
//     if(a < objDate.day && b < objDate.month){
//         alert('Proshel')
//     }else if(a > objDate.day && b < objDate.month){
//         alert('Proshel')
//     } else if(a === objDate.day && b < objDate.month){
//         alert('Proshel')
//     } else if(a < objDate.day && b === objDate.month){
//         alert('Proshel')
//     } else if(a > objDate.day && b > objDate.month){
//         alert(' ne Proshel')
//     }else if(a > objDate.day && b === objDate.month){
//         alert(' ne Proshel')
//     } else if(a < objDate.day && b > objDate.month){
//         alert(' ne Proshel')
//     } else {
//         alert(' С Днем Рождения!')
//     }
// }
// call(+prompt('day'), +prompt('month'))


// #7

// function call(a){
//     b = Math.floor(Math.random() * 4)
//     if(a === b){
//         c = prompt('slovo')
//         for(var i = 0; i < b; i++){
//             console.log(c);
//             console.log(i+1);
//         }
//     }else{
//         alert('ups! this is ' + b)
//     }
// }
// call(+prompt('0-3'))


// #8

// let arrs = []
// function call(l, arr){
//     for(var i = 0; i < l; i++){
//         arr.push(Math.floor(Math.random() * 20))
//     }
//     console.log(arr);
//     for(var i = 0; i < l; i++){
//         if(arr[i] % 2 === 1){
//             arr[i] += ' - Н.Ч.С.'
//         }
//     }
//     console.log(arr);
// }
// call(+prompt('lenth'), arrs)


// #9

// function call(a , b){
//     var j = ' '
//     for(var i = 0; i < a.length - b; i++){
//         j += a[i]
//     }
//     alert(j);
// }
// call(prompt('word') , +prompt('number'))


// #10

let arrs = []
function call(arr, a){
    for(var i = 0; i < a; i++){
        arr[i] = []
        arr[i][0] = prompt('Name')
        arr[i][1] = +prompt('Age')
        arr[i][2] = prompt('Prog name')
    }
    console.log(arr);
}
call(arrs, +prompt('how many people?'))