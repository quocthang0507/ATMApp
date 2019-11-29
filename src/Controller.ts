import { Model } from "./Model";
import { Injectable } from "@angular/core";

export class Controller {
    public processMenu(model: Model, action: number, data: string[]) {
        switch (action) {
            case 1:
                let id = data[0];
                let password = data[1];
                return model.login(id, password);
            case 2:
                break;
            default:
                break;
        }
    }
}