import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-banner',
	standalone: true,
	imports: [],
	templateUrl: './banner.component.html',
	styleUrl: './banner.component.css',
})
export class BannerComponent {
	@Input() headline: string = '';
	@Input() textline: string = '';
	@Input() link: string = '';
}
