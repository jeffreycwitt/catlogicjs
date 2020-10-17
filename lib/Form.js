const Figure = require('../lib/Figure');
const Mood = require('../lib/Mood');
const Proposition = require('../lib/Proposition');
const Syllogism = require('../lib/Syllogism');
const Term = require('../lib/Term');

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
  majorProposition(){
    const majorProposition = new Proposition(this.mood.majorType.quantity(), this.figure.majorSubject(), this.mood.majorType.quality(), this.figure.majorPredicate(), "true")
    return majorProposition
  }
  minorProposition(){
    const minorProposition = new Proposition(this.mood.minorType.quantity(), this.figure.minorSubject(), this.mood.minorType.quality(), this.figure.minorPredicate(), "true")
    return minorProposition
  }
  conclusion(){
    const conclusion = new Proposition(this.mood.conclusionType.quantity(), new Term("S"), this.mood.conclusionType.quality(), new Term("P"), "true")
    return conclusion
  }
  syllogism(){
    const syllogism = new Syllogism(this.majorProposition(), this.minorProposition(), this.conclusion())

    return syllogism
  }
  
  validity(){
    const syllogism = this.syllogism();
    return syllogism.validity()
  }
  name(){
    let name
    switch(this.figure.label){
      case "1":
        switch(this.mood.label){
          case "AAA":
            name = "Barbara";
            break;
          case "EAE":
            name = "Celarent"
            break;
          case "AII":
            name = "Darii"
            break;
          case "EIO":
            name = "Ferio"
            break;
          case "AAI":
            name = "Barbari"
            break;
          case "EAO":
            name = "Celaront"
            break;
          default:
            name = undefined
          }
          break;
      case "2":
        switch(this.mood.label){
          case "EAE":
            name = "Cesare"
            break;
          case "AEE":
            name = "Camestres"
            break;
          case "EIO":
            name = "Festino"
            break;
          case "AOO":
            name = "Baroco"
            break;
          case "EAO":
            name = "Cesaro"
            break;
          case "AEO":
            name = "Camestrop"
            break;
          default: 
          name = undefined
        }
        break;
      case "3":
        switch(this.mood.label){
          case "AAI":
            name = "Darapti"
            break;
          case "IAI":
            name = "Disamis"
            break;
          case "AII":
            name = "Datisi"
            break;
          case "EAO":
            name = "Felapton"
            break;
          case "OAO":
            name = "Bocardo"
            break;
          case "EIO":
            name = "Ferison"
            break;
          default:
            name = undefined
        }
        break;
      case "4":
      switch(this.mood.label){
          case "AAI":
            name = "Bramantip"
            break;
          case "AEE":
            name = "Camenes"
            break;
          case "IAI":
            name = "Festino"
            break;
          case "EAO":
            name = "Fesapo"
            break;
          case "EIO":
            name = "Fresison"
            break;
          case "AEO":
            name = "Camenop"
            break;
          default:
            name = undefined
        }
        break;
      default:
      name = undefined;
      }
    return name
  }
}

module.exports = Form;
