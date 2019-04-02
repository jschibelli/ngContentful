import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../contentful.service';
var ResumeSkillsComponent = /** @class */ (function () {
    function ResumeSkillsComponent(router, contentfulService) {
        this.router = router;
        this.contentfulService = contentfulService;
        this.skillset = [];
    }
    ResumeSkillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentfulService.getSkillsets()
            .then(function (skillset) { return _this.skillset = skillset; });
    };
    ResumeSkillsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-resume-skills',
            templateUrl: './resume-skills.component.html',
            styleUrls: ['./resume-skills.component.sass']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ContentfulService])
    ], ResumeSkillsComponent);
    return ResumeSkillsComponent;
}());
export { ResumeSkillsComponent };
//# sourceMappingURL=resume-skills.component.js.map