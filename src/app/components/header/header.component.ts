import { Component } from '@angular/core';
import { CardMdComponent } from '../card-md/card-md.component';
import { BannerComponent } from '../banner/banner.component';

@Component({
	selector: 'app-header',
	standalone: true,
	templateUrl: './header.component.html',
	styleUrl: './header.component.css',
	imports: [CardMdComponent, BannerComponent],
})
export class HeaderComponent {
	headline =
		'Explorando ideias, inspirando mudanças - seu guia diário para o mundo do conhecimento.';
	textline =
		'Descubra os Segredos dos Empreendedores de Sucesso: Histórias Inspiradoras e Dicas Práticas!';
	link = '#banner';
}
