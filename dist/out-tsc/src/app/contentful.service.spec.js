import { TestBed } from '@angular/core/testing';
import { ContentfulService } from './contentful.service';
describe('ContentfulService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ContentfulService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=contentful.service.spec.js.map