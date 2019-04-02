import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { environment } from '../environments/environment';
var ContentfulService = /** @class */ (function () {
    function ContentfulService() {
        this.client = createClient({
            space: environment.contentful.spaceId,
            accessToken: environment.contentful.token
        });
    }
    // Blog Page
    ContentfulService.prototype.getBlog = function (query) {
        return this.client.getEntries(Object.assign({
            content_type: 'blogPost'
        }, query))
            .then(function (res) { return res.items; });
    };
    ;
    // Resume Page
    ContentfulService.prototype.getResumes = function (query) {
        return this.client.getEntries(Object.assign({
            content_type: 'resume'
        }, query))
            .then(function (res) { return res.items; });
    };
    ;
    // Resume Side-Bar
    ContentfulService.prototype.getSkillsets = function (query) {
        return this.client.getEntries(Object.assign({
            content_type: 'resumeSkills'
        }, query))
            .then(function (res) { return res.items; });
    };
    ;
    ContentfulService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ContentfulService);
    return ContentfulService;
}());
export { ContentfulService };
//# sourceMappingURL=contentful.service.js.map