import {User} from "./user";

export class Tester extends User {
    private _salary: number;

    constructor(age: number, name: string, salary: number) {
        super(age, name);
        this._salary = salary;
    }

    get salary(): number {
        return this._salary;
    }

    set salary(value: number) {
        this._salary = value;
    }
}