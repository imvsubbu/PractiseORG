

// let element = document.querySelectorAll('.ab')
// console.log(element)
// Array.from(element).forEach(function(item){
//     item.style.color = "red"
// })

// function firstFunction(){
//     console.log("print")
// }

// let btn = document.querySelector("button")
// btn.addEventListener("click", firstFunction)

// document.addEventListener("mousemove", handler)
// function handler(){
//     document.querySelector(".demo").innerHTML = Math.random()
// }

// function removeEvent(){
//     document.removeEventListener("mousemove", handler)
// }

// document.addEventListener("hello",function(data){
//     console.log("hello has been called and send " , data.detail)
// })

// function callCustomMethod(){
//     let event = new CustomEvent("hello", {
//         detail:{name:"subbu"}
//     })
//     document.dispatchEvent(event)
// }

// Arrow function

const ab = () => console.log("hello")

ab()

//const sum = (data1, data2) => data1 + 10 + data2

// const sum = (data1, data2) => {
//     return data1 + 10 + data2
// }


// console.log(sum(4, 5))

window.setTimeout(5000)
console.log("hhell")

let intervalId = window.setInterval(function(){
    console.log("hello")
}, 5000)

clearInterval(intervalId)