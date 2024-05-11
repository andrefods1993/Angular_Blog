import { Component } from '@angular/core';
import { CardLgComponent } from "../../card-lg/card-lg.component";

@Component({
    selector: 'app-section-secondary',
    standalone: true,
    templateUrl: './section-secondary.component.html',
    styleUrl: './section-secondary.component.css',
    imports: [CardLgComponent]
})
export class SectionSecondaryComponent {

}
