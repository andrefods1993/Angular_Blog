import { Component, Input } from '@angular/core';
import { CardInterface } from '../../models/interface/card.interface';
import { NgClass, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-card-sm',
	standalone: true,
	imports: [NgFor, RouterModule, NgClass],
	templateUrl: './card-sm.component.html',
	styleUrl: './card-sm.component.css',
})
export class CardSmComponent {
	@Input() cardLayout: 'row' | 'column' = 'row'; // Layout padrão é 'column'
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
			topic: 'Tecnologia Avançada',
			title:
				'Inovações em inteligência artificial revolucionam setores industriais',
			description:
				'Como a IA está transformando processos e otimizando resultados',
			info: 'Leitura em 3 Min',
			author: 'Lucas Oliveira',
			date: new Date('2024-05-09'),
			label: 'IA',
			image: 'https://source.unsplash.com/random/900%C3%97700/?ia',
			route: '#2',
		},
		{
			topic: 'Energias Renováveis',
			title:
				'Nova tecnologia solar promete revolucionar a indústria energética',
			description:
				'Descubra como a energia solar está se tornando mais eficiente e acessível',
			info: 'Leitura em 4 Min',
			author: 'Carolina Santos',
			date: new Date('2024-05-08'),
			label: 'Energia',
			image: 'https://source.unsplash.com/random/900%C3%97700/?energia',
			route: '#3',
		},
		{
			topic: 'Cibersegurança',
			title: 'Desafios e estratégias para proteger dados na era digital',
			description: 'Como empresas e indivíduos podem se manter seguros online',
			info: 'Leitura em 5 Min',
			author: 'Ricardo Almeida',
			date: new Date('2024-05-07'),
			label: 'Segurança',
			image: 'https://source.unsplash.com/random/900%C3%97700/?seguranca',
			route: '#4',
		},
		{
			topic: 'Realidade Virtual',
			title: 'Avanços recentes em experiências imersivas e interativas',
			description:
				'Explorando o potencial da realidade virtual em diversos setores',
			info: 'Leitura em 6 Min',
			author: 'Ana Oliveira',
			date: new Date('2024-05-06'),
			label: 'VR',
			image: 'https://source.unsplash.com/random/900%C3%97700/?vr',
			route: '#5',
		},
		{
			topic: 'Inovação Tecnológica',
			title: 'Empresas disruptivas que estão mudando o jogo no mercado global',
			description:
				'Conheça as startups e tecnologias que estão redefinindo o futuro',
			info: 'Leitura em 7 Min',
			author: 'João Silva',
			date: new Date('2024-05-05'),
			label: 'Disruptivo',
			image: 'https://source.unsplash.com/random/900%C3%97700/?inovation',
			route: '#6',
		},
		{
			topic: 'Tecnologia Automotiva',
			title: 'Carros autônomos: A revolução no transporte está chegando',
			description:
				'O impacto dos veículos autônomos na mobilidade urbana e na indústria automobilística',
			info: 'Leitura em 8 Min',
			author: 'Mariana Alves',
			date: new Date('2024-05-04'),
			label: 'Automóveis',
			image: 'https://source.unsplash.com/random/900%C3%97700/?automovel',
			route: '#7',
		},
		{
			topic: 'Desenvolvimento de Software',
			title:
				'Metodologias ágeis: A chave para projetos de software bem-sucedidos',
			description:
				'Como as práticas ágeis estão transformando a maneira como desenvolvemos software',
			info: 'Leitura em 9 Min',
			author: 'Pedro Carvalho',
			date: new Date('2024-05-03'),
			label: 'Agilidade',
			image: 'https://source.unsplash.com/random/900%C3%97700/?software',
			route: '#8',
		},
	];
}
