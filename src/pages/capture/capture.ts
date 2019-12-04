import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the CapturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-capture',
	templateUrl: 'capture.html',
})
export class CapturePage {

	image = 'data:image/png;base64,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';

	constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public camera: Camera, public platform: Platform, public alertCtrl: AlertController) {
		this.loadPictureFromStorage();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CapturePage');
		this.loadPictureFromStorage();
	}

	takePicture() {
		if (this.platform.is('cordova')) {
			let options = {
				quality: 100,
				destinationType: this.camera.DestinationType.DATA_URL,
				sourceType: this.camera.PictureSourceType.CAMERA,
				allowEdit: true,
				encodingType: this.camera.EncodingType.PNG,
				targetWidth: 300,
				targetHeight: 400,
				saveToPhotoAlbum: true,
			};
			this.camera.getPicture(options).then((result) => {
				this.image = 'data:image/png;base64,' + result;
			});
			this.savePictureToStorage();
		}
		else {
			this.showAlert('Bạn phải sử dụng điện thoại để chụp hình', 'Thông báo');
		}
	}

	showAlert(message: string, title: string) {
		let alert = this.alertCtrl.create({
			title: title,
			message: message,
			buttons: [
				{
					text: 'OK',
					role: 'ok',
					handler: () => {
						console.log('Alert login: OK clicked');
					}
				}
			]
		});
		alert.present();
	}

	savePictureToStorage() {
		this.storage.set('image', this.image);
		console.log('Capture: Save picture to storage successfully');
	}

	loadPictureFromStorage() {
		this.storage.get('image').then((result) => {
			if (result != null)
				this.image = result;
		});
		console.log('Capture: Load picture to storage successfully');
	}
}
