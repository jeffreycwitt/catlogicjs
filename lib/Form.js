const Figure = require('../lib/Figure');
const Mood = require('../lib/Mood');

class Form {
  /**
   * @constructor
   * @param {Figure} figure - figure object
   * @param {Mood} mood - mood object
   * @returns {Form}
   */
  constructor(mood, figure){
    this.figure = typeof Figure ? figure : new Figure(figure) 
    this.mood = typeof Mood ? mood : new Mood(mood)
    this.label = this.mood.label + this.figure.label
  }
  
}

module.exports = Form;
