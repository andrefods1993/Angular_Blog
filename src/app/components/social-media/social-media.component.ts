import { Component } from '@angular/core';
import { SocialMedia } from '../../models/interface/social-media.interface';
import { NgFor } from '@angular/common';

@Component({
	selector: 'app-social-media',
	standalone: true,
	imports: [NgFor],
	templateUrl: './social-media.component.html',
	styleUrl: './social-media.component.css',
})
export class SocialMediaComponent {
	instagram: string = '../../../assets/images/instagram.svg';
	facebook: string = '../../../assets/images/facebook.svg';
	linkedin: string = '../../../assets/images/linkedin.svg';
	github: string = '../../../assets/images/github.svg';

	socialMedia: Array<SocialMedia> = [
		{ label: 'Instagram', route: '#instagram', icon: this.instagram },
		{ label: 'Facebook', route: '#facebook', icon: this.facebook },
		{ label: 'Linkedin', route: '#linkedin', icon: this.linkedin },
		{ label: 'GitHub', route: '#github', icon: this.github },
	];
}
