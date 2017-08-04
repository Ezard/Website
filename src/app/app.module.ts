import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MdCardModule, MdDialogModule, MdListModule, MdSidenavModule, MdToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ResumeComponent} from './resume/resume.component';
import {ContactComponent} from './contact/contact.component';
import {DetailsDialogComponent} from './resume/dialog/details.dialog';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PortfolioComponent,
        ResumeComponent,
        ContactComponent,
        DetailsDialogComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        MdCardModule,
        MdDialogModule,
        MdListModule,
        MdSidenavModule,
        MdToolbarModule,
        RouterModule.forRoot([
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'portfolio',
                component: PortfolioComponent
            },
            {
                path: 'resume',
                component: ResumeComponent
            },
            {
                path: 'contact',
                component: ContactComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [DetailsDialogComponent]
})
export class AppModule {
}
