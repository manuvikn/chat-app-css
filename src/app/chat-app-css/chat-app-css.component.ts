import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: 'cac-chat-app-component',
    templateUrl: './chat-app-css.component.html',
    styleUrls: ['./chat-app-css.component.scss']
})
export class ChatAppCssComponent implements OnInit, OnDestroy { 

    constructor() {}

    ngOnInit(): void {
        
        document.body.classList.add( 'chat-app-css' );

    }

    ngOnDestroy(): void {

        document.body.classList.remove( 'chat-app-css' );

    }

}