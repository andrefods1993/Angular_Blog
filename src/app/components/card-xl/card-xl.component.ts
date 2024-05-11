import { Component, Input } from '@angular/core';
import { CardInterface } from '../../models/interface/card.interface';
import { NgClass, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-card-xl',
	standalone: true,
	imports: [NgFor, RouterModule, NgClass],
	templateUrl: './card-xl.component.html',
	styleUrl: './card-xl.component.css',
})
export class CardXlComponent {
	@Input() cardLayout: 'row' | 'column' = 'column'; // Layout padrão é 'column'
	@Input() containerLayout: 'row' | 'column' = 'row'; // Layout padrão é 'row'

	cards: Array<CardInterface> = [
		{
			topic: 'Tecnologia',
			title: 'IA no Setor Industrial',
			description:
				'Avanços recentes em inteligência artificial transformam processos industriais',
			info: 'Leitura em 3 Min',
			author: 'Lucas Oliveira',
			date: new Date('2024-05-09'),
			label: 'IA',
			image: 'https://source.unsplash.com/random/900%C3%97700/?ia',
			route: '#2',
		},
		{
			topic: 'Tecnologia',
			title: 'Energia Solar Eficiente',
			description:
				'Novas tecnologias tornam a energia solar mais eficiente e acessível',
			info: 'Leitura em 4 Min',
			author: 'Carolina Santos',
			date: new Date('2024-05-08'),
			label: 'Energia',
			image: 'https://source.unsplash.com/random/900%C3%97700/?energia',
			route: '#3',
		},
		{
			topic: 'Tecnologia',
			title: 'Cibersegurança em Alta',
			description: 'Desafios e estratégias para proteger dados na era digital',
			info: 'Leitura em 5 Min',
			author: 'Ricardo Almeida',
			date: new Date('2024-05-07'),
			label: 'Segurança',
			image: 'https://source.unsplash.com/random/900%C3%97700/?seguranca',
			route: '#4',
		},
		{
			topic: 'Tecnologia',
			title: 'Realidade Virtual',
			description: 'Avanços recentes na experiência imersiva e interativa',
			info: 'Leitura em 6 Min',
			author: 'Ana Oliveira',
			date: new Date('2024-05-06'),
			label: 'VR',
			image: 'https://source.unsplash.com/random/900%C3%97700/?vr',
			route: '#5',
		},
	];
}
