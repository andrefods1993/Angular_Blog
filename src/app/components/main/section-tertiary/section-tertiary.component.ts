import { Component } from '@angular/core';
import { CardSmComponent } from "../../card-sm/card-sm.component";
import { CardXlComponent } from "../../card-xl/card-xl.component";

@Component({
    selector: 'app-section-tertiary',
    standalone: true,
    templateUrl: './section-tertiary.component.html',
    styleUrl: './section-tertiary.component.css',
    imports: [CardSmComponent, CardXlComponent]
})
export class SectionTertiaryComponent {

}
