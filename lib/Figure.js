class Figure {
  /**
   * @constructor
   * @param {integer} figure - the number of the figure, 1, 2, 3, or 4
   * @returns {Figure}
   */
  constructor(figure){
    /**
     * @type integer
     */
    this.number = typeof integer ? figure : Number(figure) 
    /**
     * @type string
     */
    this.label = figure.toString()
  }
  
}

module.exports = Figure;
