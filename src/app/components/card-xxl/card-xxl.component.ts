import { Component, Input } from '@angular/core';
import { CardInterface } from '../../models/interface/card.interface';
import { NgClass, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SocialMediaComponent } from '../social-media/social-media.component';

@Component({
	selector: 'app-card-xxl',
	standalone: true,
	templateUrl: './card-xxl.component.html',
	styleUrl: './card-xxl.component.css',
	imports: [NgFor, RouterModule, NgClass, SocialMediaComponent],
})
export class CardXxlComponent {
	@Input() cardLayout: 'row' | 'column' = 'column'; // Layout padrão é 'column'
	@Input() containerLayout: 'row' | 'column' = 'row'; // Layout padrão é 'row'

	cards: Array<CardInterface> = [
		{
			topic: 'Saúde e Bem-Estar',
			title: 'Os Benefícios Surpreendentes da Meditação Diária',
			description: 'Descubra como a meditação pode transformar sua vida',
			info: 'Leitura em 3 Min',
			author: 'Luciana Santos',
			date: new Date('2024-05-09'),
			label: 'Meditação',
			image: 'https://source.unsplash.com/random/900%C3%97700/?meditacao',
			route: '#2',
		},
		{
			topic: 'Negócios e Finanças',
			title: 'Estratégias Inteligentes para Aumentar sua Produtividade',
			description: 'Dicas práticas para alcançar mais em menos tempo',
			info: 'Leitura em 4 Min',
			author: 'João Oliveira',
			date: new Date('2024-05-08'),
			label: 'Produtividade',
			image: 'https://source.unsplash.com/random/900%C3%97700/?produtividade',
			route: '#3',
		},
	];
}
