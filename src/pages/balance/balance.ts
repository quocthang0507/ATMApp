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
	selector: 'page-balance',
	templateUrl: 'balance.html',
})

export class BalancePage {

	homePage = HomePage;
	id: string;
	amount: number;

	constructor(public nav: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad BalancePage');
		this.id = GlobalProvider.model.getId();
		this.amount = GlobalProvider.model.getAmount();
	}

	backToHome() {
		this.nav.pop();
	}
}
