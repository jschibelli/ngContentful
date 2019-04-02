import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../contentful.service';
var ResumeListComponent = /** @class */ (function () {
    function ResumeListComponent(router, contentfulService) {
        this.router = router;
        this.contentfulService = contentfulService;
        this.resumes = [];
        this.skillset = [];
        this.blog = [];
    }
    ResumeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentfulService.getBlog()
            .then(function (blog) { return _this.blog = blog; });
        this.contentfulService.getResumes()
            .then(function (resumes) { return _this.resumes = resumes; });
        this.contentfulService.getSkillsets()
            .then(function (skillset) { return _this.skillset = skillset; });
    };
    ResumeListComponent.prototype.goToResumeDetailsPage = function (resumeId) {
        this.router.navigate(['/resume', resumeId]);
    };
    ResumeListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-resume-list',
            templateUrl: './resume-list.component.html',
            styleUrls: ['./resume-list.component.sass']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ContentfulService])
    ], ResumeListComponent);
    return ResumeListComponent;
}());
export { ResumeListComponent };
//# sourceMappingURL=resume-list.component.js.map