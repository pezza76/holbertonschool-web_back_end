import Currency from './3-currency.js'; 

class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

// Get Amount
get amount() {
    return this._amount;
}
// Set Amount
set amount(amount) {
    this._amount = amount;
}
// Get Currency
get currency() {
    return this._currency
}
// Set Currency
set currency(currency) {
    this._currency = currency
}

displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;

}

static convertPrice(amount, conversionRate) {
    return amount * conversionRate
}
}
