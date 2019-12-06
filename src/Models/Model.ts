import { Account } from "./Account";
import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { Platform } from "ionic-angular";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Model {
    private list: Account[] = [];
    private current: Account;

    constructor(public storage: Storage, public platform: Platform, public http: Http) {
        console.log('Model: Model created');
    }

    start(): void {
        this.getDataFromStorage().then(result => {
            if (result != null) {
                let temp = JSON.parse(result);
                this.list = [];
                temp.forEach(element => {
                    this.list.push(new Account(element.id, element.password, element.amount));
                });
            }
        });
        this.add(new Account("laquocthang", "1234", 100000));
        this.getDataFromServer();
    }

    public getDataFromStorage(): Promise<any> {
        console.log('Model: Read data from storage successfully');
        return this.storage.get('list');
    }

    public removeDataFromStorage(): Promise<any> {
        console.log('Model: Remove data from storage successfully');
        return this.storage.remove('list');
    }

    public saveDataToStorage() {
        this.storage.set('list', JSON.stringify(this.list));
        console.log('Model: Save data to storage successfully');
    }

    public add(account: Account) {
        let success: Boolean;
        if (this.find(account.getId()) == null) {
            this.list.push(account);
            console.log('Model: I will add new account because there are no existing same account');
            success = true;
        }
        else {
            console.log('Model: I won\'t add new account because there are existing account');
            success = false;
        }
        console.log('Model: # users: ' + this.list.length);
        this.saveDataToStorage();
        return success;
    }

    public login(id: string, password: string) {
        console.log('Model: Checking login info...');
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].checkLogin(id, password)) {
                this.current = this.list[i];
                return true;
            }
        }
        return false;
    }

    public find(id: string) {

        console.log('Model: Looking for account...');
        for (let i = 0; i < this.list.length; i++) {
            if ((this.list[i] as Account).getId() == id) {
                console.log('Found user');
                return this.list[i];
            }
        }
        console.log('Model: Not found user');
        return null;
    }

    public getId() {
        return this.current.getId();
    }

    public getAmount() {
        return this.current.getAmount();
    }

    public setCurrentAccount(id: string) {
        this.current = this.find(id);
    }

    public getAllAccounts() {
        let result: string[] = [];
        console.log('Model: Getting all account names');
        this.list.forEach(account => {
            result.push(account.getId());
        });
        return result;
    }

    public removeAccount(id: string) {
        let account: Account = this.find(id);
        if (account == null) {
            console.log('Model: Not found customer so I don\'t remove it');
            return false;
        }
        let index: number = this.list.indexOf(account, 0);
        this.list.splice(index, 1);
        console.log('Model: Remove customer with id = ' + id);
        this.saveDataToStorage();
        return true;
    }

    public getDataFromServer() {
        let url = 'http://pvhoang.vn/atm/atmData.php';
        this.http.get(url, {}).map(result => result.json()).subscribe(response => {
            //Response
            let t = JSON.parse(response.accounts);
            console.log('Response: ' + t);
            t.forEach(element => {
                this.add(new Account(element.accountNo, element.password, element.amount));
            });
        },
            error => {
                console.log(error.message);
            });
    }

    public saveDataToServer() {
        let url = 'http://pvhoang.vn/atm/atmData.php';
        let params = 'param=1';
        let header = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        this.http.post(url, params, { headers: header }).map(res => res.json()).subscribe(response => {
            //...
            console.log('Response: ' + response);
        },
            error => {
                console.log(error.message);
            }
        );
    }
}
