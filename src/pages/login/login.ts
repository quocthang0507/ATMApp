import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Toast } from 'ionic-angular';
import { HomePage } from '../home/home';
import { GlobalProvider } from '../../providers/global/global';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})

export class LoginPage {

	username: string;
	password: string;
	success: boolean;
	toast: Toast;

	constructor(public nav: NavController, public toastController: ToastController) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
		GlobalProvider.model.start();
	}

	login() {
		let data: Array<string>;
		data = [this.username, this.password];
		this.success = GlobalProvider.controller.processMenu(GlobalProvider.model, 1, data);
		if (this.success) {
			console.log("login ok");
			localStorage.setItem('login', 'on');
			// this.nav.push(HomePage);
			// this.nav.pop();
			this.nav.setRoot(HomePage);
		}
		else {
			console.log("login failed");
			localStorage.setItem('login', 'off');
			this.toast = this.toastController.create({
				message: 'Login failed',
				duration: 2000,
				position: 'botton'
			});
			this.toast.present();
		}
	}
}
