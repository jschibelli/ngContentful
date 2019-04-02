import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContentfulService } from '../contentful.service';
var ResumeDetailsComponent = /** @class */ (function () {
    function ResumeDetailsComponent(route, router, contentfulService) {
        this.route = route;
        this.router = router;
        this.contentfulService = contentfulService;
    }
    ResumeDetailsComponent.prototype.ngOnInit = function () {
        // const resumeId = this.route.snapshot.paramMap.get('id');
        // this.contentfulService.getResumes(resumeId)
        // 	.then((resume) => {
        // 		this.resume = resume;
        // 	});
    };
    ResumeDetailsComponent.prototype.goToList = function () {
        this.router.navigate(['/resumes']);
    };
    ResumeDetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-resume-details',
            templateUrl: './resume-details.component.html',
            styleUrls: ['./resume-details.component.sass']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            Router,
            ContentfulService])
    ], ResumeDetailsComponent);
    return ResumeDetailsComponent;
}());
export { ResumeDetailsComponent };
//# sourceMappingURL=resume-details.component.js.map