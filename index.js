const inputElement=document.querySelector('#itemInput');
const button=document.querySelector('button');
const shoppingList=document.querySelector('#listContainer');


// const newItem = JSON.parse(localStorage.getItem(newItems));


inputElement.addEventListener('keypress',function(eventObject) {
if(eventObject.key==="Enter"){

    let newItem=document.createElement('li');
    newItem.innerText=inputElement.value;
    shoppingList.appendChild(newItem);

    inputElement.value='';

}



    
});



