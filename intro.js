// const func = () => {
//     var favNumber = 20 // this is the initial value of favNumber
//     favNumber += 30
//     console.log(favNumber)
// }
// function func(){
//     var favNumber = 20
//     favNumber +=30
//     console.log(favNumber)
// }

// const makeNoise = (noise) => { //noise is a parameter
//     console.log(noise)
// }
// makeNoise("Yaaay")//yaay is an argument
// makeNoise("Wooof")//woof is an argument

// const calculator = (num1, num2) => {

//     let multiplication = num1 * num2
//     let subtraction = num2 - num1
//     let division = num1 / num2

//     let total = multiplication + subtraction + division
//     console.log(subtraction, multiplication, division, total)
//     return total
// }
// const add = (num1, num2) => {
//     let sum = num1 + num2
//     console.log(sum)
// }

// const calculator = ((num1, num2) => {
//     let add = num1 + num2
//     let subtract = num2 - num1
//     console.log(add, subtract)
// }
// )

// add(num1, num2)
// calculator((45, 15))
// // calculator(30, 10)
// calculator()

//BE
// const add = (num1, num2, num3, num4) => {
//     console.log(num1 + num2 + num3 + num4)
//     return num1 + num2 + num3 + num4
// }
//UI
// let num1 = parseInt(prompt("Enter a number"))
// let num2 = parseInt(prompt("Enter a number"))
// let num3 = parseInt(prompt("Enter a number"))
// let num4 = parseInt(prompt("Enter a number"))
// alert(add(num1, num2, num3, num4))

// const even = (num) => {
//     // if (num % 2 == 0) {
//     //     console.log("Even number")
//     // }
//     // else {
//     //     console.log("Odd number")
//     // }
//     // num % 2 == 0 ? console.log("Even number") : console.log("Odd number")
// }
// even(11)
// var total = 0
// var nums = [1, 2, 3, 4, 5]
// nums.forEach((num) => {
//     total += num
// })
// console.log(total)
// console.log(nums)

// var names = ["Daniel", "Trixie", "Benson", "Maureen"]
// names.forEach((name) => {
//     console.log(name)
// })
// console.log(names)

// var nums = [1, 2, 3, 4, 5]
// var total = 0
// nums.forEach((num) => {
//     console.log(num * 2)
//     total += num

// })
// console.log(total)

// let nums = [1, 2, 3, 4, 5]
// let doubles = nums.map((num) => {
//     return num * 2
// })
// console.log(doubles)

// let names = ["Victoria", "Joseph", "Ann"]
// let classNames = names.map((name) => {
//     return `${name} is a student at MS`
// })
// console.log(classNames)

// let names = ["Victoria", "Joseph", "Ann"]
// for (let i = 1; i < names.length; i += 1) {
//     console.log(`${names[i]} is a student at MS`)
// }

// let total = 0
// for (let i = 1; i <= 10; i += 3) {
//     console.log(total += i)
// }
// let name = "School" //global scope
// let ourFunction = () => {
//     let name = "Hospital" //local scope
//     console.log(name)
// }
// ourFunction()
// console.log(name)
//Dictionary
//creating new objects via literal notation
// let cohort1 = {
//     cohortName: "MPFT45",
//     names: ["Laurette", "Ian", "Maureen", "Joseph"],
//     Module: 1,
//     Graduated: false
// }
// console.log(cohort1['cohortName'])
// console.log(cohort1['names'].push("John"))
// console.log(cohort1.names)
// let cohort2 = {
//     cohortName: "MPFT46",
//     names: ["Laurette", "Ian", "Maureen", "Joseph"],
//     Module: 2,
//     Graduated: true
// }
//creating new objects via constructors
function Cohort(cohortName, names, module, graduated) {
    this.cohortName = cohortName,
        this.names = names,
        this.module = module,
        this.graduated = graduated
}
Cohort.prototype.clap = function () {
    console.log("clappapaapapapapapapa clapapapapap")
}
let cohort1 = new Cohort("MPFT45", ["Laurette", "Ian", "Maureen", "Joseph"], 1, false)
let cohort2 = new Cohort("MPFT46", ["Laurette", "Ian", "Maureen"], 2, true)
console.log(cohort1.clap())
console.log(cohort2.clap())