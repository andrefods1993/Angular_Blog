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
		{
			label: 'Instagram',
			route: 'https://www.instagram.com/in/andrefilipeods/',
			icon: this.instagram,
		},
		{
			label: 'Facebook',
			route: 'https://pt-br.facebook.com/andrefilipeods',
			icon: this.facebook,
		},
		{
			label: 'Linkedin',
			route: 'https://www.linkedin.com/in/andrefilipeods/',
			icon: this.linkedin,
		},
		{
			label: 'GitHub',
			route: 'https://github.com/andrefods1993',
			icon: this.github,
		},
	];
}
