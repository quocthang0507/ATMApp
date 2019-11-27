import { Component, Output, EventEmitter } from '@angular/core';
import { Account } from './Account';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	constructor() {this.init(); }

	username = "";
	accountNo = 0;
	password = "";

	init() {
		const acc = new Account(1610207, "1610207", 1000000, "La Quoc Thang");
		this.username = acc.getCustomerName();
		this.accountNo = acc.getAccountNo();
		this.password = acc.getPassword();
	}
}

