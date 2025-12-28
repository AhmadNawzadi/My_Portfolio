import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';

@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CustomButtonComponent
  ]
})
export class ParcoursComponent {
  parcours = [
    {
      date: "Jan 2024 - Aujourd'hui",
      titre: 'Master Ingénierie Logicielle',
      lieu: 'Visiplus Academy',
      lien: 'https://www.visiplus.com/',
      details: 'Formation approfondie en architecture logicielle, gestion de projet et développement full-stack. Focus sur la qualité logicielle et les bonnes pratiques de conception.'
    },
    {
      date: "2024 - Aujourd'hui",
      titre: 'Développeur Informatique',
      lieu: 'Groupe FBO - La Roche-sur-Yon',
      lien: 'https://groupefbo.com/',
      details: 'Développement full-stack avec Java et React. Participation à la conception et à la maintenance d’applications métiers.'
    },
    {
      date: '2021 - 2023',
      titre: 'Développeur Web / IA',
      lieu: 'LiqTrade SAS - Biarritz',
      lien: 'https://www.frenchtech-paysbasque.com/ecosysteme/liqtrade/',
      details: 'Développement frontend/backend avec Vue.js et Java Spring. Intégration d’API REST, utilisation de Git, et travail en méthode Agile.'
    },
    {
      date: '2021 - 2023',
      titre: 'Développement Intelligence Artificielle (Bac +3)',
      lieu: 'Ecole IA Microsoft by Simplon - Bayonne',
      lien: 'https://simplon.co/',
      details: 'Python, machine learning, deep learning, analyse de données, visualisation et développement web full-stack avec Flask et JavaScript.'
    },
    {
      date: '2015 - 2017',
      titre: 'Master Économie',
      lieu: 'Université d’Aksaray - Turquie',
      lien: 'https://aksaray.edu.tr/',
      details: 'Analyse économique, statistiques et gestion de données financières.'
    },
    {
      date: '2010 - 2013',
      titre: 'Licence Économie',
      lieu: 'Université de Kaboul - Afghanistan',
      lien: 'https://ku.edu.af/',
      details: 'Études en économie et gestion, introduction à l’analyse quantitative.'
    }
  ];
}
