export default class HolbertonCourse {
    constructor(name, length, students) {
        this._name = name,
        this._length = length,
        this._students = students
    }


get name() {
    return this._name;
}

set name(setName) {
    if (typeof !== 'string') {
        throw new TypeError('Wrong type')
    }
    this._name = setName;
}

get length() {
    return this._length;
}

set length(setLength) {
     if (typeof !== 'number') {
        throw new TypeError('Wrong type')
    }
    this._length = setLength;
}

get students() {
    return this._students;
}

set students(setName) {
     if (!Array.isArray(setName)) {
        throw new TypeError('Wrong type')
    }
    this._students = setName;
}

}

