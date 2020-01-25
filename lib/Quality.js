class Quality {
  constructor(quality){
    //super(name)
    this.label = quality
  }
  opposite(){
    if (this.label === "affirmative"){
      return new Quality("negative")
    }
    else if (this.label === "negative"){
      return new Quality("affirmative")
    }
  }

}


//export default Dog;
module.exports = Quality;
