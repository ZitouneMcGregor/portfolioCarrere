import { Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjetSqueletteComponent } from './components/projet/projet.squelette/projet.squelette.component';
import { ErrorComponent } from './common/error/error.component';
import { CvComponent } from './components/cv/cv.component';

export const routes: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'projets', component: ProjetSqueletteComponent },
    { path: 'cv', component: CvComponent },
    { path: '',   redirectTo: '/accueil', pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
];
