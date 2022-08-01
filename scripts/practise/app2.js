import {PI, add} from './utils.js'

//utils.printLog("a")

console.log(PI)

console.log('This is a test message');

/*************** Var Keyword ****************/

// var course = "zero to hero"


// /*************** Let Keyword ****************/

// let course1 = "zero to hero"

// console.log(this.course);
// console.log(this.course1);

// var x = 10.09
// console.log(typeof(x))

// // big int
// var y = 10n
// console.log(typeof y) 


/** Spread Operator */
// Array

// var arr = ["a", "b", "c"];
// console.log(arr[0])


// // Objects

// var obj = {
//     "name" : "salesforce",
//     "age" : 23,
//     "full name" : "sfdx"
// }
// console.log(obj.age)
// console.log(obj["age"]);
// console.log(obj["full name"])
// obj.sex = "male"
// console.log(obj)

// // Spread Op

// //1. Expanding of string
// let greeting = "Hello Everyone"
// let charList = [...greeting]
// console.log(charList[2].toUpperCase())

// // 2. Comibining array
// let arr1 = ["amazon", "google"]
// let arr2 = ["facebook", "instagram"]
// let arr3 = [...arr1, ...arr2]
// console.log(arr3)

// // 3. adding values to an array
// let arr4 = ["a", "b", "c"]
// let arr5 = [...arr4, "subbu", "d", "a"]
// console.log(arr5)

// // 4. Combinig objects
// let obj1 = {name:"salesforce", age:23, date:"23/05"}
// let obj2 = {type:"CRM", developer:"subbu", date:"23/06"}
// let obj3 = {...obj1, ...obj2}
// console.log(obj3)

// // 5. Shallow copy

// var arrvar = ["x", "y", "z"]
// var arrvar2 = [...arrvar]
// arrvar.push("something")
// arrvar2.push("something again")
// print(arrvar)
// print(arrvar2)



// // var arrvar = ["x", "y", "z"]
// // arrvar.push(3)

// // var arrvar2 = arrvar
// // arrvar2.push("something")
// // arrvar.push("something again")
// // print(arrvar)
// // print(arrvar2)

// // 6. Nested copy

// var arrObj = [
//     {name:"Nikhi"},
//     {name:"subbu"}
// ]

// // var arrObj2 = [...arrObj]
// // arrObj2[0].name="Nick"
// // print(arrObj)
// // print(arrObj2)

// var arrObj2 = JSON.parse(JSON.stringify(arrObj))
// arrObj2[0].name = "salesforce"
// print(arrObj)
// print(arrObj2)


// array destructuring

// let arr = ["amazon", "google"]
// // let company1 = arr[0]
// // let company2 = arr[1]

// let [company1, company2] = arr
// print(company1)
// print(company2)

// let obj = {
//     name : "salesforce",
//     dev  : "subbu",
//     age  : 23
// }

// let {title, dev, age} = obj
// print(title)
// print(dev)
// print(age)

// console.log(`Hello ${dev}`)

// var a = 3
// var b = 7
// print(`the sum of ${a}, ${b} is ${a+b}`)




// JSON Operations

// let obj ={
//     name : "Salesforce",
//     age: 23,
//     dob : '23/10/1990'
// }

// console.log(Object.keys(obj))
// print(Object.values(obj))

// // Stringify
// print(obj)
// let str = JSON.stringify(obj)
// print(str)
// print(JSON.parse(str))

// let arr = [1,2,3,4,5,5,8,10]

// // map()

// let newArray = arr.map(function(currentItem, index, array){
//     console.log(`The current item is ${currentItem} with ${index} index`)
//     return currentItem*2
// })

// print(newArray)

// // filter()

// let filterValues = arr.filter(function(currentItem, index, array){
//     return currentItem > 5
// })

// print(filterValues)

// // every()

// let arr2 = [23, 27, 20, 18, 34]
// let isAllAdult = arr2.every(function(currentItem){
//     return currentItem > 18 
// })

// print(isAllAdult)

// // some()

// let isSomeAdult = arr2.some(function(currentItem){
//     return currentItem > 18 
// })

// print(isSomeAdult)

// // sort()

// var names = ["subbu", "john", "smith"]
// console.log(names.sort())

// let sortedAges = arr2.sort(function(a,b){
//     return a-b
// })
// print(sortedAges)

// // reduce methods

// let arrForReduce = [10, 13, 17, 20, -3]

// let sumReduce = arrForReduce.reduce(function(total, currentItem){
//     return total+currentItem
// },0)
// print(sumReduce)

// // forEach()
// arrForReduce.forEach(function(currentItem){
//     if(currentItem>10){
//         print(currentItem)
//     }
// })




// promise

// function checkIsSuccess(data){
//     return new Promise(function(resolve, reject){
//         if(data === "success"){
//             return resolve("success")
//         }else{
//             return reject("unsuccessfully executed")
//         }
//     })
// }

// checkIsSuccess('').then(function(result){
//     print(result)
// }).catch(function(error){
//     console.error(error)
// })

// fetch('https://api.github.com/users/imvsubbu').then(function(result){
//     console.log(result)
//     return result.json()
// }).then(function(response){
//     console.log(response)
// })
