import { Component } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: 'about.html'
})
export class AboutPage {
    versao: string

    constructor() {
        this.versao = "1.0.0";
    }
}
