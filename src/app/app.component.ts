import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from "./common/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent implements AfterViewInit, OnDestroy {
  private targetX = 0; // Position cible X pour le halo
  private targetY = 0; // Position cible Y pour le halo
  private currentX = 0; // Position actuelle X du halo
  private currentY = 0; // Position actuelle Y du halo
  private animationFrameId: number | null = null; // ID de l'animation
  private halo: HTMLElement | null = null; // Référence à l'élément halo

  ngAfterViewInit() {
    // Initialisation de l'élément halo une fois le DOM chargé
    this.halo = document.getElementById('halo');
    this.animateHalo(); // Lance l'animation
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.targetX = event.clientX; // Mise à jour de la position cible
    this.targetY = event.clientY;

    let target = event.target as HTMLElement;

    // Vérifier si l'élément est cliquable
    while (target && !this.isElementClickable(target)) {
      target = target.parentElement as HTMLElement;
    }

    if (target) {
      document.body.classList.add('clickable');
    } else {
      document.body.classList.remove('clickable');
    }
  }

  // Vérifie si un élément est cliquable
  private isElementClickable(element: HTMLElement): boolean {
    return (
      element.tagName === 'A' ||
      element.tagName === 'BUTTON' ||
      element.hasAttribute('clickable') ||
      element.getAttribute('role') === 'button' ||
      element.onclick !== null ||
      element.classList.contains('theme-toggle')
    );
  }

  // Fonction d'animation pour le halo
  private animateHalo() {
    if (this.halo) {
      // Interpolation des positions actuelles vers les positions cibles
      this.currentX += (this.targetX - this.currentX) * 0.3;
      this.currentY += (this.targetY - this.currentY) * 0.3;

      this.halo.style.left = `${this.currentX}px`;
      this.halo.style.top = `${this.currentY}px`;
    }

    // Boucle d'animation
    this.animationFrameId = requestAnimationFrame(() => this.animateHalo());
  }

  // Nettoyage lors de la destruction du composant
  ngOnDestroy() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}