import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentfulService } from './contentful.service';
import { ResumeListComponent } from './resume-list/resume-list.component';
import { ResumeDetailsComponent } from './resume-details/resume-details.component';
import { ResumeSkillsComponent } from './resume-skills/resume-skills.component';
var routes = [
    { path: '', redirectTo: '/resumes', pathMatch: 'full' },
    // {path: 'home', component: HomeComponent },
    { path: 'resumes', component: ResumeListComponent },
    { path: 'resume/:id,', component: ResumeDetailsComponent },
    { path: 'resume-skills', component: ResumeSkillsComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                ResumeListComponent,
                ResumeDetailsComponent,
                ResumeSkillsComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                RouterModule.forRoot(routes)
            ],
            providers: [ContentfulService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map