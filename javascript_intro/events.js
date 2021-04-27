//Array de Kpi_measures
let measures = new Array();
//Función de Average
function average(arr){
  let sum = arr.reduce((acc, cur) => acc + cur, 0)
  let answer = sum / arr.length
  return answer
}
//Función de Total
const arrSum = arr => arr.reduce((a,b) => a + b, 0)

let add_item_to_list = (dom_element_creator, dom_element_adder, employees) => {
   return (_event) => {
    let employee_name = document.querySelector(".employe-name-input").value
    let kpi_measure = document.querySelector(".kpi-measure-input").value
    let dom_element = dom_element_creator(employee_name, kpi_measure)
    dom_element_adder(dom_element)

    //Agrego un evento al boton de DELETE
    document.querySelector('.delete').addEventListener('click', delete_element)
    //Agrego el elemento al array
    measures.push(parseInt(kpi_measure, 10))
    //Calcula el Total y Average
    write(arrSum(measures), average(measures)) 
    console.log(measures)
   }
}

//Función para eliminar un elemento 
let delete_element=(event)=>{
  const button = event.target;
  const li = button.parentNode;
  const ul = li.parentNode;
  ul.removeChild(li);

  //Elimina el elemento del array
  let kpi_measure = li.querySelector(".kpi-measure").textContent
  console.log(kpi_measure)
  let pos = measures.indexOf(parseInt(kpi_measure, 10))
  console.log(pos)
  measures.splice(pos,1)
  console.log(measures)
  //Calcula el Total y Average
  write(arrSum(measures), average(measures)) 
}


//Escribe el Total y Average en el DOM
let write = (total, average) => {
  document.getElementById("Total").innerHTML = total
  document.getElementById("Average").innerHTML = average
}


let string_dom_element_creator = (employee_name, measure) => {
  return `<li><span class="employe-name">${employee_name}</span><span class="kpi-measure">${measure}</span><button class="delete">delete</button></li>`
}


let template_dom_element_creator = (employee_name, measure) => {
  let element_list_mock = document.querySelector("template#item-mock").content.children[0]
  let element_list_cloned = element_list_mock.cloneNode(true)
  element_list_cloned.querySelector(".employe-name").innerText = employee_name
  element_list_cloned.querySelector(".kpi-measure").innerText = measure
  return element_list_cloned
}


let string_dom_element_adder = (string_dom_element) => {
  // return document.querySelector("ul.item-list").innerHTML += string_dom_element
  document.querySelector("ul.item-list").insertAdjacentHTML('afterbegin', string_dom_element)
}

let template_dom_element_adder = (node_dom_element) => {
  let list = document.querySelector("ul.item-list")
  return list.insertAdjacentElement('afterbegin', node_dom_element)
}


export {
  add_item_to_list,
  string_dom_element_creator,
  template_dom_element_creator,
  string_dom_element_adder,
  template_dom_element_adder
}