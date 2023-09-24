import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const ROUTES: Routes = [
    {
        path: 'chat-app-css',
        loadChildren: () => import('./chat-app-css/chat-app-css.module').then(m => m.ChatAppCssModule)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'chat-app-css'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot( ROUTES ) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }