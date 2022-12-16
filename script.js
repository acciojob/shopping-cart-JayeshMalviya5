let item = document.getElementsByTagName("input")[0];
let price = document.getElementsByTagName("input")[1];
let button = document.getElementsByTagName("button")[0];
let container = document.getElementsByClassName("container")[0];
let ss = document.getElementsByTagName('h3')[0];
let str = "";
let arr = [];
function addRow() {
   
  if (item.value == "" || price.value == "") {
     ss.innerText = "All fields required";
  }
  else if(item.validity.typeMismatch || price.validity.typeMismatch){
     ss.innerText = "Please insert valid input";
  }

else {
    str = str + "+" + price.value;
    ss.innerText = "";
    // Get the table element in which you want to add row
    let table = document.getElementById("table");
    // Create a row using the inserRow() method and
    // specify the index where you want to add the row
    let row = table.insertRow(-1); // We are adding at the end

    // Create table cells
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    // let c3 = row.insertCell(2);

    // Add data to c1 and c2
    c1.innerText = item.value;
    c2.innerText = price.value;
    item.value = "";
    price.value = "";
    ss.innerText = "Total -:    " + eval(str);
  }
}
console.log(arr);
button.addEventListener("click", addRow);
