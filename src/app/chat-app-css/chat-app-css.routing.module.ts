import { RouterModule, Routes } from "@angular/router";
import { ChatAppCssComponent } from "./chat-app-css.component";
import { NgModule } from "@angular/core";

const ROUTES: Routes = [
    {
        path: '',
        component: ChatAppCssComponent 
    }
];

@NgModule({
    imports: [ RouterModule.forChild( ROUTES ) ],
    exports: [ RouterModule ]
})
export class ChatAppCssRoutingModule { }