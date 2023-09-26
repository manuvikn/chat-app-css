import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: 'cac-mobile',
    templateUrl: './mobile.component.html',
    styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements AfterViewInit {

    @ViewChild('mobileScreen') mobileScreen: ElementRef | undefined;

    constructor() { }

    ngAfterViewInit(): void {
        
        this.fillMessagesArr();

    }

    async fillMessagesArr(): Promise<void> {

        if (!this.mobileScreen) return;

        const length: number = this.mobileScreen.nativeElement.children.length;

        for (let i = 0; i < length; i++) {
            
            await this.delay( 0.6 );
            const message: HTMLElement = this.mobileScreen.nativeElement.children[i];
            message.classList.remove( 'noDisplay' );
            
        }

    }

    delay( time: number ): Promise<void> {

        return new Promise((resolve) => {
            
            setTimeout(() => {
    
                resolve();
    
            }, time * 1000);

        });

    }

}