import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  onSubmit(event: Event): void {
    event.preventDefault();
    alert('Votre message a été envoyé !');
    // Logique d'envoi de formulaire ici
  }
}
