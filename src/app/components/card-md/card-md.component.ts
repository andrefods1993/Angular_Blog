import { Component, Input } from '@angular/core';
import { CardInterface } from '../../models/interface/card.interface';
import { NgClass, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-card-md',
	standalone: true,
	imports: [NgFor, RouterModule, NgClass],
	templateUrl: './card-md.component.html',
	styleUrl: './card-md.component.css',
})
export class CardMdComponent {
	@Input() cardLayout: 'row' | 'column' = 'column'; // Layout padrão é 'column'
	@Input() containerLayout: 'row' | 'column' = 'row'; // Layout padrão é 'row'

	cards: Array<CardInterface> = [
		{
			topic: 'Ciência e Tecnologia',
			title: 'Novo avanço na pesquisa de células-tronco',
			description:
				'Cientistas descobrem método mais eficiente para regeneração celular',
			info: 'Leitura em 2 Min',
			author: 'Dr. Maria Silva',
			date: new Date('2024-05-10'),
			label: 'Ciência',
			image: 'https://source.unsplash.com/random/900%C3%97700/?ciencia',
			route: '#1',
		},
		{
			topic: 'Economia',
			title: 'Inflação global atinge níveis recordes',
			description:
				'Especialistas discutem as consequências econômicas em diferentes regiões do mundo',
			info: 'Leitura em 2 Min',
			author: 'Economistas Globais',
			date: new Date('2024-05-10'),
			label: 'Economia',
			image: 'https://source.unsplash.com/random/900%C3%97700/?economia',
			route: '#2',
		},
		{
			topic: 'Cultura',
			title: 'Exposição de arte contemporânea chega à cidade',
			description: 'Artistas renomados apresentam suas obras em galeria local',
			info: 'Leitura em 5 Min',
			author: 'Arte & Cultura Magazine',
			date: new Date('2024-05-10'),
			label: 'Cultura',
			image: 'https://source.unsplash.com/random/900%C3%97700/?cultura',
			route: '#3',
		},
		{
			topic: 'Meio Ambiente',
			title: 'Desmatamento na Amazônia: novas medidas de proteção anunciadas',
			description:
				'Autoridades revelam planos para combater a degradação ambiental na região',
			info: 'Leitura em 3 Min',
			author: 'Green Watch',
			date: new Date('2024-05-10'),
			label: 'Meio Ambiente',
			image: 'https://source.unsplash.com/random/900%C3%97700/?meio-ambiente',
			route: '#4',
		},
	];
}
