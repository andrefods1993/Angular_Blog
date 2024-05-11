import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesGroup } from '../../../models/interface/categories-group.interface';
import { CategoryItemType } from '../../../models/enum/category-item.enum';

@Component({
	selector: 'app-footer-categories',
	standalone: true,
	imports: [NgFor, RouterModule],
	templateUrl: './footer-categories.component.html',
	styleUrl: './footer-categories.component.css',
})
export class FooterCategoriesComponent {
	categoriesGroupArray: CategoriesGroup[] = [
		{
			title: 'Menu',
			items: [
				{
					label: 'Início',
					route: '#home',
					type: CategoryItemType.HOME,
				},
				{
					label: 'Artigos',
					route: '#articles',
					type: CategoryItemType.ARTICLES,
				},
				{
					label: 'Categorias',
					route: '#categories',
					type: CategoryItemType.CATEGORIES,
				},
				{
					label: 'Autores',
					route: '#authors',
					type: CategoryItemType.AUTHORS,
				},
			],
		},
		{
			title: 'Ajuda & Informações',
			items: [
				{
					label: 'Sobre',
					route: '#about',
					type: CategoryItemType.ABOUT,
				},
				{
					label: 'Contato',
					route: '#contact',
					type: CategoryItemType.CONTACT,
				},
			],
		},
	];
}
