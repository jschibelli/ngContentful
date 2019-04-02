import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-resume-details',
  templateUrl: './resume-details.component.html',
  styleUrls: ['./resume-details.component.sass']
})
export class ResumeDetailsComponent implements OnInit {

	resume: Entry<any>;

  	constructor(
  		private route: ActivatedRoute,
  		private router: Router,
  		private contentfulService: ContentfulService
	) { }

  ngOnInit() {
  	// const resumeId = this.route.snapshot.paramMap.get('id');
  	// this.contentfulService.getResumes(resumeId)
  	// 	.then((resume) => {
  	// 		this.resume = resume;
  	// 	});
  }
  goToList() {
  		this.router.navigate(['/resumes']);
  }

}
