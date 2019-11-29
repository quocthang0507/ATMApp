import { Account } from "./Account";

export class Model {
    account: Account;

    public start() {
        this.account = new Account("quocthang0507@gmail.com", "1234", 100000);
    }

    public login(id: string, password: string) {
        return this.account.checkLogin(id, password);
    }

    public getId(){
        return this.account.getId();
    }
}