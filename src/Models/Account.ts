import { Injectable } from "@angular/core";

@Injectable()
export class Account {
    private id: string;
    private password: string;
    private amount: number;

    constructor(id, password, amount) {
        this.id = id;
        this.password = password;
        this.amount = amount;
    }

    public checkLogin(id: string, password: string) {
        return this.id == id && this.password == password;
    }

    public getId() {
        return this.id;
    }

    public getAmount() {
        return this.amount;
    }

    public getPassword() {
        return this.password;
    }
}