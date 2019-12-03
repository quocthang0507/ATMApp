import { Component, Output, EventEmitter, Injectable } from '@angular/core';
import { LoginPage } from '../login/login';
import { BalancePage } from '../balance/balance';
import { DepositPage } from '../deposit/deposit';
import { TransferPage } from '../transfer/transfer';
import { WithdrawPage } from '../withdraw/withdraw';
import { NavController, Platform } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { Storage } from '@ionic/storage';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
})

export class HomePage {
	loginPage = LoginPage;
	id = '';

	constructor(public nav: NavController, public platform: Platform, public storage: Storage) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');
		this.storage.get('login').then((result) => {
			if (!result || result != 'on') {
				console.log('No login');
				this.nav.setRoot(LoginPage);
			}
			else {
				this.id = GlobalProvider.model.getId();
			}
		});
	}

	goToBalance() {
		this.nav.push(BalancePage);
	}

	backToLogin() {
		this.nav.setRoot(LoginPage);
	}

	exit() {
		this.storage.set('login', 'off');
		this.platform.exitApp();
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