import { Account } from "./Account";
import { Injectable } from "@angular/core";

@Injectable()
export class Model {
    private account: Account;

    constructor(){
        this.start();
    }

    public start() {
        this.account = new Account("quocthang0507@gmail.com", "1234", 100000);
    }

    public login(id: string, password: string) {
        return this.account.checkLogin(id, password);
    }

    public getId(){
        return this.account.getId();
    }

    public getAmount(){
        return this.account.getAmount();
    }
}