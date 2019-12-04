import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
declare var google;

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-map',
	templateUrl: 'map.html',
})

export class MapPage {
	@ViewChild('map') mapElement: ElementRef;
	map: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MapPage');
		this.getCurrentPosition();
	}

	getCurrentPosition() {
		console.log('Map: Getting current location...');
		this.geolocation.getCurrentPosition().then(result => {
			console.log('Map: Your position ' + result.coords.latitude + ' ; ' + result.coords.longitude);
			this.setMap(result.coords.latitude, result.coords.longitude);
		},
			error => {
				console.log('Map: Error ' + error);
			});
	}

	setMap(latitude, longitude) {
		console.log('Map: Setting map...');
		let options = {
			center: new google.maps.LatLng(latitude, longitude),
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		this.map = new google.maps.Map(this.mapElement.nativeElement, options);
	}
}