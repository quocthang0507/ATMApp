import { Component, Output, EventEmitter, Injectable } from '@angular/core';
import { LoginPage } from '../login/login';
import { InfoPage } from '../info/info';
import { NavController, Platform } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
	entryComponents: [LoginPage]
})

export class HomePage {
	loginPage = LoginPage;
	id = '';

	constructor(public nav: NavController) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');
		if (!GlobalProvider.logIn) {
			this.nav.setRoot(LoginPage);
		}
		else
			this.id = GlobalProvider.model.account.getId();
	}

	viewInfo() {
		this.nav.setRoot(InfoPage);
	}

	backToLogin() {
		// this.nav.push(LoginPage);
		// this.nav.pop();
		this.nav.setRoot(LoginPage);
}
}