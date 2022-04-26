console.log('***** Cart Functions *****');
console.log('when adding items to cart, please use single or double quotes around item')
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


const  maxItems = 5;

let basket = [];


function addItem ( item ) {
    if ( isFull() ) {
        return false ;
    }
    else{
    basket.push(item); //adds item entered in console to basket array
    return true;
    }
}

console.log(`adding apples, should return true:  ${addItem('apples')}`);
console.log(`adding carrots:  ${addItem('carrots')}`);


function listItems () {
    for ( items in basket ) {
        console.log( basket[items] );
  
    }
}

//Why does the below code display list items from the function ABOVE the text?
//console.log(`running listItems, should see apples and carrots:  ${listItems()}`);

console.log(`running listItems, should see apples and carrots: `);
console.log(listItems());

function empty () {
    return basket = [];
}

//console.log(`running empty to show empty array:`);
//console.log(empty());

function isFull () {
    if ( basket.length < maxItems ) {
        return false;
    }
    else {
        return true;
    }
}

console.log(`running isFull should see false ${isFull()}`);

function removeItem ( item ) {
    let removeIndex = basket.indexOf(item);//sets removeIndex to index number of item entered
        if ( removeIndex >= 0 ) { //indexOf will return -1 if item not found and this conditional won't run 
            let removedItem = basket[removeIndex];//saves value of removedItem before deleted
            basket.splice( removeIndex, 1) //removes item at value of removeIndex
            return removedItem;
        }
        else {
            return null;
        }
}



