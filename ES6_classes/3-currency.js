export default class Currency {
    constructor(code, name) {
        this._code = code,
        this._name = name
    }

get code() {
    return this._code;
}

set code(codename) {
    this._code = codename;
}

get name() {
    return this._name;
}

set name(setname) {
    this._name = setname;
}

displayFullCurrency() {
    return `${this._name} (${this._code})`;
}

};
