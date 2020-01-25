class Distribution {
  constructor(distribution){
    //super(name)
    this.label = distribution
  }
  opposite(){
    if (this.label === "distributed"){
      return new Distribution("undistributed")
    }
    else if (this.label === "undistributed"){
      return new Distribution("distributed")
    }
  }
}


//export default Dog;
module.exports = Distribution;
