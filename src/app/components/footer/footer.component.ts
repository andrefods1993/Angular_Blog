import { Component } from '@angular/core';
import { FooterCategoriesComponent } from "./footer-categories/footer-categories.component";
import { FooterSubscribeComponent } from "./footer-subscribe/footer-subscribe.component";
import { SocialMediaComponent } from "../social-media/social-media.component";

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
    imports: [FooterCategoriesComponent, FooterSubscribeComponent, SocialMediaComponent]
})
export class FooterComponent {

}
