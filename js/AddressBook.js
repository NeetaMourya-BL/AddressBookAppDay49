// <!-- UC3 Add Form Input Fields to the Address Book Form UI-->
class EmployeePayrollData {

    //getter and setter method
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }

    // UC => 4 form validation
    get name() {
        return this._name;
    }
    set name(name) {
        const nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name)) {
            this._name = name;
        } else {
            throw "First letter must be in uppercase and min 3 character long";
        }
    }

    // UC => 4 form validation
    get phone() {
        return this._phone;
    }
    set phone(phone) {
        const phoneRegex = RegExp('^[+][1-9]{2}[-][0-9]{10}$');
        if (phoneRegex.test(phone)) {
            this._phone = phone;
        } else {
            throw "Phone number should be (Ex:+91-665445646)";
        }
    }

    // UC => 4 form validation
    get address() {
        return this._address;
    }
    set address(address) {
        const addressRegex = RegExp('^([A-Za-z0-9/.,-]{3,}.)+$');
        if (addressRegex.test(address)) {
            this._address = address;
        } else {
            throw "Sorry entered address is incorrect";
        }
    }

    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }

    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }

    get zipcode() {
        return this._zipcode;
    }
    set zipcode(zipcode) {
        this._zipcode = zipcode;
    }
}