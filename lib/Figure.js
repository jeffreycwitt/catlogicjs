const Term = require('../lib/Term');

class Figure {
  /**
   * @constructor
   * @param {string} figure - the number of the figure, 1, 2, 3, or 4
   * @returns {Figure}
   */
  constructor(figure){
    /**
     * @type string
     */
    this.label = figure
  }

  majorSubject(){
    let subject;
    if (this.label == "1" || this.label == "3"){
        subject = new Term('M')
    }
    else if (this.label == "2" || this.label == "4"){
        subject = new Term('P')
    }
    return subject
  }
  majorPredicate(){
    let predicate;
    if (this.label == "1" || this.label == "3"){
        predicate = new Term('P')
    }
    else if (this.label == "2" || this.label == "4"){
        predicate = new Term('M')
    }
    return predicate
  }
  minorSubject(){
    let subject
    if (this.label == "1" || this.label == "2"){
        subject = new Term('S')
    }
    else if (this.label == "3" || this.label == "4"){
        subject = new Term('M')
    }
    return subject
  }
  minorPredicate(){
    let predicate
    if (this.label == "1" || this.label == "2"){
        predicate = new Term('M')
    }
    else if (this.label == "3" || this.label == "4"){
        predicate = new Term('S')
    }
    return predicate
  }
  
}

module.exports = Figure;
