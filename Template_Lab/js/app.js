
class item {
    constructor(name) {
        this.name = name;
        this.price = 2.25;
        this.stock = 10;
    }
    render(){

        return `
        <div>${this.name}</div>
        <div>Price: ${this.price}</div>
        <div>Current Stock: ${this.stock}</div>
        `;
    }

    purchase(){
        if( this.stock >= 1){
            this.stock --;
        }
        else{
            //This item currently does not have stock!
        }
    }
}

let itemOne = new item("Small Candy");
let itemTwo = new item("Large Candy");
let itemThree = new item ("Chips");

let vendDiv = document.getElementById("vendDiv");
vendDiv.innerHTML = itemOne.render();


function vendOne(){
    itemOne.purchase();
    vendDiv.innerHTML = itemOne.render();
}

function vendTwo(){
    itemTwo.purchase();
    vendDiv.innerHTML = itemTwo.render();
}

function vendThree(){
    itemThree.purchase();
    vendDiv.innerHTML = itemThree.render();
}

