import { Component, HostListener } from '@angular/core';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-navbar',
	standalone: true,
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.css',
	imports: [NavbarMenuComponent, SocialMediaComponent, NgClass],
})
export class NavbarComponent {
	isSidebarOpen: boolean = true;
	navbarOpacity: boolean = false;

	toggleSidebar() {
		this.isSidebarOpen = !this.isSidebarOpen;
	}

	@HostListener('window:scroll', [])
	onScroll(): void {
		this.navbarOpacity = window.scrollY > 0;
	}
}
