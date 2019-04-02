import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import { ResumeSkillsComponent } from '../resume-skills/resume-skills.component';

import { NgModule } from '@angular/core';

@Component({
  selector: 'app-resume-list',
  templateUrl: './resume-list.component.html',
  styleUrls: ['./resume-list.component.sass']
})
export class ResumeListComponent implements OnInit {

  resumes: Entry<any>[] = [];
	skillset: Entry<any>[] = [];
  blog:  Entry<any>[] = [];


  constructor(private router: Router, private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getBlog()
      .then(blog => this.blog = blog);

  	this.contentfulService.getResumes()
  		.then(resumes => this.resumes = resumes);

    this.contentfulService.getSkillsets()
      .then(skillset => this.skillset = skillset);
  }
  goToResumeDetailsPage(resumeId) {
  	this.router.navigate(['/resume', resumeId]);
  }

}
