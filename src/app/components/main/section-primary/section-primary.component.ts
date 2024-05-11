import { Component } from '@angular/core';
import { CardXxlComponent } from "../../card-xxl/card-xxl.component";
import { CardMdComponent } from "../../card-md/card-md.component";

@Component({
    selector: 'app-section-primary',
    standalone: true,
    templateUrl: './section-primary.component.html',
    styleUrl: './section-primary.component.css',
    imports: [CardXxlComponent, CardMdComponent]
})
export class SectionPrimaryComponent {

}
