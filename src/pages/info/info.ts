import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { GlobalProvider } from '../../providers/global/global';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-info',
	templateUrl: 'info.html',
})

export class InfoPage {

	homePage = HomePage;
	id: string;
	amount: number;

	constructor(public nav: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad InfoPage');
		this.id = GlobalProvider.model.account.getId();
		this.amount = GlobalProvider.model.account.getAmount();
	}

	backToHome() {
		// this.nav.push(HomePage);
		this.nav.setRoot(HomePage);
	}
}
