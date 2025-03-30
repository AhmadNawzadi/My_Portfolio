import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Skill from '../../types/Skill';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-details',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './skill-details.component.html',
  styleUrl: './skill-details.component.scss'
})
export class SkillDetailsComponent{
  skillId: number = 0;
  selectedSkill : Skill = {
    id: 0,
    name: '',
    description: [],
    img: '',
    details: ''
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.skillId = +this.route.snapshot.paramMap.get('id')!;
    this.selectedSkill = this.skills.find(skill => skill.id === this.skillId)!;
  }

  skills = [
    {
      id: 1,
      name: 'Java',
      description:[ `
        Au cours de mon contrat d'apprentissage chez Liqtrade, j'ai développé une expertise approfondie en Java et Spring, en contribuant activement à l'amélioration de leur plateforme. 
        Ma mission principale consistait à concevoir et implémenter de nouvelles fonctionnalités, en optimisant les performances du back-end et en garantissant la scalabilité du système. 
      `],
      img: '/assets/images/skills-imgs/Java.png',
      details: ` J'ai travaillé sur le développement et l'optimisation d'APIs REST, l'intégration de bases de données, ainsi que la mise en place de bonnes pratiques en matière de sécurité et de gestion des performances. 
        Cette expérience m'a permis d'acquérir une solide maîtrise de l'écosystème Spring (Spring Boot, Spring Security, Spring Data), tout en collaborant étroitement avec les équipes techniques pour assurer une livraison efficace et qualitative des fonctionnalités.
      `
    },

    {
      id: 2,
      name: 'Spring et Hibernate',
      description: [`
        Au cours de mon contrat d'apprentissage chez Liqtrade, j'ai développé une expertise approfondie en Java et Spring, en contribuant activement à l'amélioration de leur plateforme. Ma mission principale consistait à concevoir et implémenter de nouvelles fonctionnalités, en optimisant les performances du back-end et en garantissant la scalabilité du système.
      `],
      img: '/assets/images/skills-imgs/spring.png', 
      details: ` J'ai travaillé sur le développement et l'optimisation d'APIs REST, l'intégration de bases de données, ainsi que la mise en place de bonnes pratiques en matière de sécurité et de gestion des performances. 
      Cette expérience m'a permis d'acquérir une solide maîtrise de l'écosystème Spring (Spring Boot, Spring Security, Spring Data), tout en collaborant étroitement avec les équipes techniques pour assurer une livraison efficace et qualitative des fonctionnalités.
    `
    },

    {
      id: 3,
      name: 'CI CD',
      description:[ `
        Dans le cadre de ma formation Visiplus Master en Ingénierie Logicielle, j'ai acquis des compétences en CI/CD (Continuous Integration & Continuous Deployment), en mettant en place des pipelines d'automatisation pour optimiser le cycle de développement logiciel.
      `],
      img: '/assets/images/skills-imgs/cicd.png',
      details: ` J'ai appris à configurer et utiliser des outils tels que GitHub Actions, GitLab CI/CD, Jenkins et Docker pour automatiser les tests, le build et le déploiement des applications. Cette expertise me permet d'assurer une livraison rapide et fiable des logiciels tout en garantissant leur qualité et leur stabilité.
    `
    }, 

    {
      id: 4,
      name: 'Angular',
      description: [`
        J'ai acquis une expertise en Javascript et Angular lors de ma formation Visiplus Master en ingénierie logicielle. Grâce à cette formation et à la réalisation de plusieurs projets, j'ai développé des compétences solides en développement d'applications web modernes, modulaires et performantes.
        Cette formation m'a permis de maîtriser les concepts clés d'Angular, tels que les composants, les services, les routes et les formulaires.`,
        `Parmi mes réalisations, j'ai conçu Project Management Tool, une application de gestion de projet permettant d'organiser les tâches, suivre l'avancement et collaborer efficacement en équipe. J'ai également développé Game Up, une plateforme interactive dédiée aux passionnés de jeux vidéo, intégrant des fonctionnalités avancées comme la gestion de collections et les recommandations personnalisées.`
      ],
      img: '/assets/images/skills-imgs/angular.png',
      details: ` Ma maîtrise d'Angular, associée à des technologies complémentaires comme TypeScript, RxJS et Firebase, me permet de créer des applications performantes et ergonomiques, adaptées aux besoins des utilisateurs.
    `
    },

    {
      id: 5,
      name: 'JavaScript',
      description: [`
        J'ai acquis une expertise en Javascript et Angular lors de ma formation Visiplus Master en ingénierie logicielle. Grâce à cette formation et à la réalisation de plusieurs projets, j'ai développé des compétences solides en développement d'applications web modernes, modulaires et performantes.
        Cette formation m'a permis de maîtriser les concepts clés d'Angular, tels que les composants, les services, les routes et les formulaires.`,
        `Parmi mes réalisations, j'ai conçu Project Management Tool, une application de gestion de projet permettant d'organiser les tâches, suivre l'avancement et collaborer efficacement en équipe. J'ai également développé Game Up, une plateforme interactive dédiée aux passionnés de jeux vidéo, intégrant des fonctionnalités avancées comme la gestion de collections et les recommandations personnalisées.`
      ],
      img: '/assets/images/skills-imgs/js.png',
      details: ` Ma maîtrise d'Angular, associée à des technologies complémentaires comme TypeScript, RxJS et Firebase, me permet de créer des applications performantes et ergonomiques, adaptées aux besoins des utilisateurs.
    `
    },

    {
      id: 6,
      name: 'React',
      description: [`
        Lors de mon contrat en CDI chez Groupe FBO, j'ai approfondi mes compétences en React en travaillant sur le projet STPPS – Gestion du tiers payant. Cette application permet aux professionnels de santé d'optimiser la gestion du tiers payant en automatisant les processus et en améliorant le suivi des remboursements.
      `],
      img: '/assets/images/skills-imgs/react.png',
      details: `Grâce à cette expérience, j'ai acquis une solide maîtrise de React, en exploitant ses fonctionnalités avancées comme les hooks, le state management (Redux/Context API) et l'optimisation des performances. J'ai également travaillé avec des technologies associées telles que TypeScript, React Query et Material-UI, garantissant une expérience utilisateur fluide et efficace.
    `
    } ,
    {
      id: 7,
      name: 'Gestion de Projet',
      description: [`
        Lors de mon expérience chez Groupe FBO, j'ai développé des compétences en gestion de projet et en méthodes agiles (Scrum, Kanban). J'ai participé activement à la planification, au suivi et à l'optimisation des processus de développement, en favorisant la collaboration et l'adaptabilité. 
      `],
      img: '/assets/images/skills-imgs/projet.jpg',
        details: `Grâce aux rituels agiles (daily meetings, sprint planning, rétrospectives), j'ai acquis une approche structurée et efficace pour la gestion des tâches, l'amélioration continue et la livraison rapide de fonctionnalités. Cette expérience m'a permis d'améliorer la coordination entre les équipes et d'optimiser la qualité des livrables.
      `
    },
    {
      id: 8,
      name: 'Communication',
      description: [`
        Lors de mon expérience chez Liqrade, j'ai développé des compétences en communication et en esprit d'analyse, essentiels pour travailler efficacement en équipe et prendre des décisions stratégiques.      `],
      img: '/assets/images/skills-imgs/com.jpg',
      details: `Grâce à des échanges réguliers avec les différentes parties prenantes, jai appris à formuler des idées de manière claire, à écouter activement et à adapter mon discours en fonction des interlocuteurs. Mon esprit d'analyse m'a permis d'évaluer les problématiques, d'identifier des solutions adaptées et de contribuer à l'amélioration continue des projets.
    `
    },
    {
      id: 9,
      name: 'Esprit d\'analyse',
      description: [`
        Lors de mon expérience chez Liqrade, j'ai développé des compétences en communication et en esprit danalyse, essentiels pour travailler efficacement en équipe et prendre des décisions stratégiques. 
     `],
      img: '/assets/images/skills-imgs/analyse.png',
      details: `Grâce à des échanges réguliers avec les différentes parties prenantes, jai appris à formuler des idées de manière claire, à écouter activement et à adapter mon discours en fonction des interlocuteurs. Mon esprit d'analyse m'a permis d'évaluer les problématiques, d'identifier des solutions adaptées et de contribuer à l'amélioration continue des projets.
    `
    },
    {
      id: 10,
      name: 'Methodologies Agiles',
      description: [`
        Lors de mon expérience chez Groupe FBO, j'ai développé des compétences en gestion de projet et en méthodes agiles (Scrum, Kanban). J'ai participé activement à la planification, au suivi et à l'optimisation des processus de développement, en favorisant la collaboration et l'adaptabilité. 
      `],
      img: '/assets/images/skills-imgs/Agile-Methodology.png',
      details: `Grâce aux rituels agiles (daily meetings, sprint planning, rétrospectives), j'ai acquis une approche structurée et efficace pour la gestion des tâches, l'amélioration continue et la livraison rapide de fonctionnalités. Cette expérience m'a permis d'améliorer la coordination entre les équipes et d'optimiser la qualité des livrables.
    `
    },
  ]


}
