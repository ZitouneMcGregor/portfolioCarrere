import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-projet.squelette',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent],
  templateUrl: './projet.squelette.component.html',
  styleUrl: './projet.squelette.component.scss'
})
export class ProjetSqueletteComponent {
  projets = [
    {
      titre: 'Pronono - En développement',
      description: 'Application de pronostiques sportifs factices entre amis',
      lienGithub: null,
      lienWeb: null,
      banniere: 'https://library.sportingnews.com/styles/twitter_card_120x120/s3/2023-04/Alex%20Pereira%20130423%20%282%29.jpg?itok=1BiRxGYn',
      detailsVisible: false,
      details: 'En cours de développement',
      technologies: 'Angular, Python',
      objectifs: 'Publier l\'appli',
      challenges: 'ouais'

    },
    {
      titre: 'Futfutfut',
      description: 'Génération de cartes FUT personnalisées à grande échelle.',
      lienGithub: 'https://github.com/ZitouneMcGregor/futfutfut',
      lienWeb: null,
      banniere: 'https://www.radiofrance.fr/s3/cruiser-production/2022/01/0a2137f7-6af8-4629-bfca-28698e0c7a00/1200x680_gettyimages-1282093971.jpg',
      detailsVisible: false,
      details: 'Ouais c est des cartes fut quoi',
      technologies: 'Angular, Docker',
      objectifs: 'Supporter un test de charge conséquent grâce à Docker',
      challenges: 'Ne pas crash'
    },
    {
      titre: 'Tracking GPS',
      description: 'Application de suivi de bateaux en direct',
      lienGithub: 'https://github.com/Julien1000/TrackingGPS',
      lienWeb: null,
      banniere: 'https://img.lovepik.com/bg/20240418/a-3d-illustration-of-boat-and-locator-mark-on-sea_6301259_wh860.jpg!/fw/860',
      detailsVisible: false,
      details: 'Localiser différentes machines connectées à des brocker qui se déplacent',
      technologies: 'Kafka, Docker, VueJS, Python',
      objectifs: 'Localiser au moins 2 personnes en meme temps',
      challenges: 'Le faire avant noel'
    },
    {
      titre: 'Messagerie',
      description: 'Messagerie en Peer-To-Peer ultra sécurisée',
      lienGithub: 'https://github.com/ZitouneMcGregor/messagerie',
      lienWeb: null,
      banniere: 'https://img.freepik.com/photos-gratuite/abstrait-arriere-plan-digital-faible-lignes-connexion-points_1048-6507.jpg?semt=ais_hybrid',
      detailsVisible: false,
      details: 'Si clément mounic a la meme venez pas attraper ma veste',
      technologies: 'Angular, Python, SQLite3',
      objectifs: 'Envoyer des messages',
      challenges: 'Le faire meme si on a TOEIC'
    }
  ];

  selectedProjet: any = null;

  openModal(projet: any) {
    this.selectedProjet = projet;
    document.body.classList.add('modal-open');
  }

  closeModal() {
    this.selectedProjet = null;
    document.body.classList.remove('modal-open');
  }
}