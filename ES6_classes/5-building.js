export default class Building {
    constructor(sqft) {
        if (this.constructor === Building) {
            throw new Error('this is an abstract class');
        }

        if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
            throw new Error("Class extending Building must override evacuationWarningMessage");
        }
        this._sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }
}







mplement a class named Building:

Constructor attributes:
sqft (Number)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
Implement a getter for each attribute.
Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named evacuationWarningMessage.
If a class that extends from it does not have a evacuationWarningMessage method, throw an error with the message Class extending Building must override evacuationWarningMessage