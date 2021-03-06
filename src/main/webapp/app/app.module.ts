import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { TestJhipsterSharedModule, UserRouteAccessService } from './shared';
import { TestJhipsterAppRoutingModule} from './app-routing.module';
import { TestJhipsterHomeModule } from './home/home.module';
import { TestJhipsterAdminModule } from './admin/admin.module';
import { TestJhipsterAccountModule } from './account/account.module';
import { TestJhipsterEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        TestJhipsterAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        TestJhipsterSharedModule,
        TestJhipsterHomeModule,
        TestJhipsterAdminModule,
        TestJhipsterAccountModule,
        TestJhipsterEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class TestJhipsterAppModule {}
