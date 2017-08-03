import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MdSidenavModule, MdToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ResumeComponent} from './resume/resume.component';
import {ContactComponent} from './contact/contact.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PortfolioComponent,
        ResumeComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
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
    bootstrap: [AppComponent]
})
export class AppModule {
}
