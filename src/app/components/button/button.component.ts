import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-button',
	standalone: true,
	imports: [],
	templateUrl: './button.component.html',
	styleUrl: './button.component.css',
})
export class ButtonComponent {
	@Input() buttonText: string = 'Click';
	@Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

	onClick(): void {
		this.buttonClick.emit();
	}
}
