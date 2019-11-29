import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Controller } from '../../Controller';
import { Model } from '../../Model';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {
	public static controller: Controller = new Controller();
	public static model: Model = new Model();
	public static logIn: boolean = false;

	constructor(public http: HttpClient) {
		console.log('Hello GlobalProvider Provider');
	}
}
