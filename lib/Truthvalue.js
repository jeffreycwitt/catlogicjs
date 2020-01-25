class Truthvalue {
  constructor(truthvalue){
    this.label = truthvalue
  }
  isTrue(){
    if (this.label === "true"){
      return true
    }
    else{
      return false
    }
  }
  opposite(){
    if (this.label === "true"){
      return new Truthvalue("false")
    }
    else if (this.label === "false"){
      return new Truthvalue("true")
    }
    else {
      return new Truthvalue(this.label)
    }
  }
}


//export default Dog;
module.exports = Truthvalue;
