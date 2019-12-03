import { Component, Output, EventEmitter, Injectable } from '@angular/core';
import { LoginPage } from '../login/login';
import { BalancePage } from '../balance/balance';
import { DepositPage } from '../deposit/deposit';
import { TransferPage } from '../transfer/transfer';
import { WithdrawPage } from '../withdraw/withdraw';
import { NavController, Platform } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
})

export class HomePage {
	loginPage = LoginPage;
	id = '';

	constructor(public nav: NavController) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');
		let value = localStorage.getItem('login');
		if (value == 'off') {
			this.nav.setRoot(LoginPage);
		}
		else {
			this.id = GlobalProvider.model.getId();
		}
	}

	goToBalance() {
		this.nav.push(BalancePage);
	}

	backToLogin() {
		// this.nav.push(LoginPage);
		// this.nav.pop();
		this.nav.setRoot(LoginPage);
	}

	goToWithdraw() {
		this.nav.push(WithdrawPage);
	}

	goToDeposit() {
		this.nav.push(DepositPage);
	}

	goToTransfer() {
		this.nav.push(TransferPage);
	}
}