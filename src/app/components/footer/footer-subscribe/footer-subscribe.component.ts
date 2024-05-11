import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
	selector: 'app-footer-subscribe',
	standalone: true,
	templateUrl: './footer-subscribe.component.html',
	styleUrl: './footer-subscribe.component.css',
	imports: [ButtonComponent],
})
export class FooterSubscribeComponent {
	handleButtonClick() {
		alert(
			'Seu e-mail foi cadastrado com sucesso! Agora, é só ficar de olho nas últimas notícias.'
		);
	}
}
