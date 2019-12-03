import { Account } from "./Account";
import { Injectable } from "@angular/core";

@Injectable()
export class Model {
    private list: Array<Account> = new Array();
    private current: Account;

    constructor() {
        this.add(new Account("quocthang0507@gmail.com", "1234", 100000));
    }

    add(account: Account) {
        console.log('Adding account');
        this.list.push(account);
    }

    public login(id: string, password: string) {
        console.log('Checking login');
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].checkLogin(id, password)) {
                this.current = this.list[i];
                return true;
            }
        }
        return false;
    }

    public find(id: string) {
        console.log('Looking for account');
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].getId() == id)
                this.current = this.list[i];
        }
    }

    public getId() {
        return this.current.getId();
    }

    public getAmount() {
        return this.current.getAmount();
    }
}