import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from '../../Models/Model';
import { Storage } from '@ionic/storage';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {
	public static model: Model;

	constructor(public storage: Storage) {
		console.log('Hello GlobalProvider Provider');
		GlobalProvider.model = new Model(storage);
	}
}
