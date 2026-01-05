alert("Welcome to the list that writes your numbers from de biggest to the smallest by steps of 10");
let max = prompt("Choose the biggest number on the list: ");
let min = prompt("Choose the smallest number on the list: ");
for(i=max;i>min;i-=10){
    console.log(i);
}
