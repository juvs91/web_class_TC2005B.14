let integer = 1290;
console.log(integer)
integer = "value"
console.log(integer)

var var_2 = 1290
console.log(var_2)
var var_2 = "1290"
console.log(var_2)


const CONSTANT = "constant var"

function print(params, param2) {
  console.log(params, param2)
}

function print2(func, message) {
  console.log("in the print")
  func(message)
}

let f = (message) => {
  console.log("in the other function", message)
}
print2(f, "juve")

print("hola")

let bool_var = true
let bool_var_two = false



let config_map = {
  int_key: 10,
  string_key: "str",
  kpi_one: {
    display_type: "time_series",
    operation: "grouing_person"
  },
  fun: (arg_one) => {
    console.log(arg_one)
  }
}


if(0) {
  console.log("in the if")
} else if(1) {
  console.log("in the else if")
} else {
  console.log("in the else")
} 


switch ("MYABE") {
  case "YES":
    console.log("yes")
    break
  case "NO":
    console.log("no")
    break
  default:
    console.log("default")
}
let i = 0 
while(i < 5){
  console.log(i)
  i++
}

let array = [1,12.30, "strng", [1,2,3], {a:"b"}]
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element)
}

for (let index in array) {
  console.log(array[index])
}
array.map
array.forEach(element => {
  console.log(element)
});


config_map.fun("balba")

var var_one = "hola"
let var_twp = "hola_let"

let my_dict = {
  key: "value",
  greeting_type: "hello",
  greeting: () => {
    print("hello")
  }
}

let int = 12
let float = 12.34
let str = "my str"
let arr = [1,2,3, "bla", {a:"b"}, [1,2]]
arr[0]

function func_a(params) {
  console.log(params)
}
let func_b = (params) => {
  console.log(params)
}

let greeting = (greeting_type, name) => {
  console.log("in the greeting")
  greeting_type(name)
}
let greetig_spanish = (name) => {
  console.log("hola como estas" + name)
} 

let return_int = () => {
  return 1;
}

let return_str = () => {
  return "some string";
}

let return_dict = () => {
  return {
    a: "b"
  };
}

let return_arr = () => {
  return [1,2,3];
}

let greeter = (message) => {
  return (name) => {
    console.log(message + " " + name)
  }
}

let greeto = greeter("hallo")
greeto("juve")
greeto("agustin")

greeting(greetig_spanish, "juve")

// config_map.fun()
// let f = config_map.fun
// let result = config_map.fun()


