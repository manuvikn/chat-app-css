import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ChatAppCssRoutingModule } from "./chat-app-css.routing.module";
import { ChatAppCssComponent } from "./chat-app-css.component";
import { MainBackgroundComponent } from "./components/main-background/main-background.component";
import { MainComponent } from "./components/main/main.component";

@NgModule({
    imports: [
        CommonModule,
        ChatAppCssRoutingModule
    ],
    declarations: [
        ChatAppCssComponent,
        MainBackgroundComponent,
        MainComponent
    ]
})
export class ChatAppCssModule { }