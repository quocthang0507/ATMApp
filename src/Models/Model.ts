import { Account } from "./Account";
import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';

@Injectable()
export class Model {
    private list: Account[] = [];
    private current: Account;

    constructor(public storage: Storage) {
        console.log('Model: Model created');
        this.add(new Account("laquocthang", "1234", 100000));
    }

    public readDataFromStorage() {
        this.storage.get('list').then(result => {
            if (!result) {
                this.list = JSON.parse(result);
            }
        });
        console.log('Model: Read data from storage successfully');
    }

    public removeDataFromStorage(): Promise<any> {
        return this.storage.remove('list');
    }

    public saveDataToStorage() {
        this.removeDataFromStorage();
        this.storage.set('list', JSON.stringify(this.list));
        console.log('Model: Save data to storage successfully');
    }

    public add(account: Account) {
        let success: Boolean;
        this.readDataFromStorage();
        if (this.find(account.getId()) == null) {
            this.list.push(account);
            console.log('Model: I will add new account because there are no existing same account');
            this.saveDataToStorage();
            success = true;
        }
        else {
            console.log('Model: I won\'t add new account because there are existing account');
            success = false;
        }
        console.log('Model: # existing users: ' + this.list.length);
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
        this.readDataFromStorage();
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
        this.readDataFromStorage();
        let result: string[] = [];
        console.log('Model: Getting all account name');
        this.list.forEach(account => {
            result.push(account.getId());
        });
        return result;
    }

    public removeAccount(id: string) {
        this.readDataFromStorage();
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
}