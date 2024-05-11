import { Component, Input } from '@angular/core';
import { CardInterface } from '../../models/interface/card.interface';
import { NgClass, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SocialMediaComponent } from '../social-media/social-media.component';

@Component({
	selector: 'app-card-video',
	standalone: true,
	imports: [NgFor, RouterModule, NgClass, SocialMediaComponent],
	templateUrl: './card-video.component.html',
	styleUrl: './card-video.component.css',
})
export class CardVideoComponent {
	@Input() cardLayout: 'row' | 'column' = 'row'; // Layout padrão é 'column'
	@Input() containerLayout: 'row' | 'column' = 'row'; // Layout padrão é 'row'

	cards: Array<CardInterface> = [
		{
			topic: 'Estilo de Vida',
			title:
				'Equilíbrio entre trabalho e vida pessoal: Estratégias para uma vida mais saudável',
			description: `Encontrar um equilíbrio saudável entre trabalho e vida pessoal é essencial para o bem-estar e a felicidade. Muitas vezes, ficamos tão envolvidos em nossas responsabilidades profissionais que negligenciamos nossa saúde mental e física. Neste artigo, exploramos diversas estratégias para ajudá-lo a criar um equilíbrio entre suas obrigações profissionais e suas necessidades pessoais. Aprenda a gerenciar seu tempo de forma eficiente, estabelecer limites saudáveis, praticar a autocompaixão e cultivar hobbies que tragam alegria e relaxamento. Com pequenas mudanças em sua rotina diária, você pode alcançar um estilo de vida mais equilibrado e gratificante...`,
			info: 'Leitura em 8 Min',
			author: 'Joana Oliveira',
			date: new Date('2024-05-10'),
			label: 'Equilíbrio',
			image: 'https://source.unsplash.com/random/900%C3%97700/?equilibrio',
			route: '#3',
		},
	];
}
