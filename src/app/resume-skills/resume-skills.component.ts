import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-resume-skills',
  templateUrl: './resume-skills.component.html',
  styleUrls: ['./resume-skills.component.sass']
})
export class ResumeSkillsComponent implements OnInit {

	skillset: Entry<any>[] = [];

  constructor(private router: Router, private contentfulService: ContentfulService) { }

  ngOnInit() {
  	this.contentfulService.getSkillsets()
  		.then(skillset => this.skillset = skillset);
  }

}
