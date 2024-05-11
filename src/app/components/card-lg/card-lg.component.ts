import { Component, Input } from '@angular/core';
import { CardInterface } from '../../models/interface/card.interface';
import { NgClass, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-card-lg',
	standalone: true,
	imports: [NgFor, RouterModule, NgClass],
	templateUrl: './card-lg.component.html',
	styleUrl: './card-lg.component.css',
})
export class CardLgComponent {
	@Input() cardLayout: 'row' | 'column' = 'column'; // Layout padrão é 'column'
	@Input() containerLayout: 'row' | 'column' = 'row'; // Layout padrão é 'row'

	cards: Array<CardInterface> = [
		{
			topic: 'Estilo de Vida',
			title: 'Os benefícios da meditação para o equilíbrio emocional',
			description:
				'Como a prática da meditação pode melhorar sua qualidade de vida',
			info: 'Leitura em 3 Min',
			author: 'Carolina Lima',
			date: new Date('2024-05-09'),
			label: 'Bem-Estar',
			image: 'https://source.unsplash.com/random/900%C3%97700/?meditacao',
			route: '#1',
		},
		{
			topic: 'Estilo de Vida',
			title: 'Alimentação saudável: Dicas para uma dieta equilibrada',
			description:
				'Conheça os alimentos que podem melhorar sua saúde e bem-estar',
			info: 'Leitura em 4 Min',
			author: 'Lucas Almeida',
			date: new Date('2024-05-08'),
			label: 'Nutrição',
			image: 'https://source.unsplash.com/random/900%C3%97700/?alimentacao',
			route: '#2',
		},
		{
			topic: 'Estilo de Vida',
			title: 'Exercícios em casa: Mantenha-se ativo sem sair de casa',
			description:
				'Rotinas de exercícios simples para manter a forma e a saúde',
			info: 'Leitura em 5 Min',
			author: 'Patrícia Santos',
			date: new Date('2024-05-07'),
			label: 'Fitness',
			image: 'https://source.unsplash.com/random/900%C3%97700/?fitness',
			route: '#3',
		},
		{
			topic: 'Estilo de Vida',
			title: 'Dicas de organização: Simplifique sua vida e reduza o estresse',
			description:
				'Estratégias para organizar espaços e rotinas de forma eficiente',
			info: 'Leitura em 6 Min',
			author: 'Ricardo Oliveira',
			date: new Date('2024-05-06'),
			label: 'Organização',
			image: 'https://source.unsplash.com/random/900%C3%97700/?organizacao',
			route: '#4',
		},
	];
}
