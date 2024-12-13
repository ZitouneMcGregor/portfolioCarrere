import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() currentProjet!: {
    titre: string;
    image: string;
    details: string;
    technologies: string;
    objectifs: string;
    challenges: string;
    banniere: string;
  };

  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}