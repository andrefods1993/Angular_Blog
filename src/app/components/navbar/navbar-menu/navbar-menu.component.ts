import { Component, Input } from '@angular/core';
import { MenuItem } from '../../../models/interface/menu-item.interface';
import { MenuItemType } from '../../../models/enum/menu-item.enum';
import { NgClass, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-navbar-menu',
	standalone: true,
	imports: [NgFor, RouterModule, NgClass],
	templateUrl: './navbar-menu.component.html',
	styleUrl: './navbar-menu.component.css',
})
export class NavbarMenuComponent {
	@Input() layout: 'row' | 'column' = 'row'; // Layout padrão é 'row'

	menuItems: Array<MenuItem> = [
		{ label: 'Início', route: '#home', type: MenuItemType.HOME },
		{ label: 'Artigos', route: '#articles', type: MenuItemType.ARTICLES },
		{
			label: 'Categorias',
			route: '#categories',
			type: MenuItemType.CATEGORIES,
		},
		{ label: 'Autores', route: '#authors', type: MenuItemType.AUTHORS },
		{ label: 'Sobre', route: '#about', type: MenuItemType.ABOUT },
		{ label: 'Contato', route: '#contact', type: MenuItemType.CONTACT },
	];
}
