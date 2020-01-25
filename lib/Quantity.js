class Quantity {
  constructor(quantity){
    //super(name)
    this.label = quantity
  }
  opposite(){
    if (this.label === "universal"){
      return new Quantity("particular")
    }
    else if (this.label === "particular"){
      return new Quantity("universal")
    }
  }
}


//export default Dog;
module.exports = Quantity;
