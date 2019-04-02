import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
	private client = createClient({
		space: environment.contentful.spaceId,
		accessToken: environment.contentful.token
	});

    constructor() { }



    // Blog Page
    getBlog(query?: object): Promise<Entry<any>[]> {
        return this.client.getEntries(Object.assign( {
            content_type: 'blogPost'
        }, query))
            .then(res =>res.items)
    };

    // Resume Page
    getResumes(query?: object): Promise<Entry<any>[]> {
    	return this.client.getEntries(Object.assign( {
    		content_type: 'resume'
    	}, query))
    		.then(res =>res.items)
    };

    // Resume Side-Bar
    getSkillsets(query?: object): Promise<Entry<any>[]> {
        return this.client.getEntries(Object.assign( {
            content_type: 'resumeSkills'
        }, query))
            .then(res =>res.items)
    };
}
