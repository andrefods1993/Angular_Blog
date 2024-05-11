import { Component } from '@angular/core';
import { SectionPrimaryComponent } from './section-primary/section-primary.component';
import { SectionSecondaryComponent } from './section-secondary/section-secondary.component';
import { SectionTertiaryComponent } from './section-tertiary/section-tertiary.component';

@Component({
	selector: 'app-main',
	standalone: true,
	templateUrl: './main.component.html',
	styleUrl: './main.component.css',
	imports: [
		SectionPrimaryComponent,
		SectionSecondaryComponent,
		SectionTertiaryComponent,
	],
})
export class MainComponent {}
