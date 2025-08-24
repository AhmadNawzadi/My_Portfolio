import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import Skill from '../../types/Skill';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';

@Component({
  selector: 'app-skill-details',
  standalone: true,
  imports: [
    CommonModule,
    CustomButtonComponent,
    RouterOutlet,
    RouterModule
  ],
  templateUrl: './skill-details.component.html',
  styleUrl: './skill-details.component.scss'
})
export class SkillDetailsComponent{
  skillId: number = 0;
  ind : number = 1
  selectedSkill : Skill = {
    id: 0,
    name: '',
    description: [],
    img: '',
    details: '',
    projects: []
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.skillId = +this.route.snapshot.paramMap.get('id')!;
    this.selectedSkill = this.skills.find(skill => skill.id === this.skillId)!;
  }

  objectEntries(obj: { [key: string]: string }): [string, string][] {
    return Object.entries(obj);
  }

  skills = [
    {
      id: 1,
      name: 'Java',
      description:[ `
        Au cours de mon contrat d'apprentissage chez Liqtrade, j'ai développé une expertise approfondie en Java et Spring, en contribuant activement à l'amélioration de leur plateforme. 
        Ma mission principale consistait à concevoir et implémenter de nouvelles fonctionnalités, en optimisant les performances du back-end et en garantissant la scalabilité du système. 
      `],
      img: 'assets/images/skills-imgs/Java.png',
      details: ` J'ai travaillé sur le développement et l'optimisation d'APIs REST, l'intégration de bases de données, ainsi que la mise en place de bonnes pratiques en matière de sécurité et de gestion des performances. 
        Cette expérience m'a permis d'acquérir une solide maîtrise de l'écosystème Spring (Spring Boot, Spring Security, Spring Data), tout en collaborant étroitement avec les équipes techniques pour assurer une livraison efficace et qualitative des fonctionnalités.
      `,
      projects: [
        {"Project management tool":"/details"}, 
        {"Game up":"/details"}, 
        {"Electricity billing system":"/details"} as { [key: string]: string }]
    },

    {
      id: 2,
      name: 'Spring et Hibernate',
      description: [`
        Au cours de mon contrat d'apprentissage chez Liqtrade, j'ai développé une expertise approfondie en Java et Spring, en contribuant activement à l'amélioration de leur plateforme. Ma mission principale consistait à concevoir et implémenter de nouvelles fonctionnalités, en optimisant les performances du back-end et en garantissant la scalabilité du système.
      `],
      img: 'assets/images/skills-imgs/spring.png', 
      details: ` J'ai travaillé sur le développement et l'optimisation d'APIs REST, l'intégration de bases de données, ainsi que la mise en place de bonnes pratiques en matière de sécurité et de gestion des performances. 
      Cette expérience m'a permis d'acquérir une solide maîtrise de l'écosystème Spring (Spring Boot, Spring Security, Spring Data), tout en collaborant étroitement avec les équipes techniques pour assurer une livraison efficace et qualitative des fonctionnalités.
    `,
    projects: [
      {"Project management tool":"/details"}, 
      {"Game up":"/details"}, 
      {"Electricity billing system":"/details"} as { [key: string]: string }]
    },

    {
      id: 3,
      name: 'CI CD',
      description:[ `
        Dans le cadre de ma formation Visiplus Master en Ingénierie Logicielle, j'ai acquis des compétences en CI/CD (Continuous Integration & Continuous Deployment), en mettant en place des pipelines d'automatisation pour optimiser le cycle de développement logiciel.
      `],
      img: 'assets/images/skills-imgs/cicd.png',
      details: ` J'ai appris à configurer et utiliser des outils tels que GitHub Actions, GitLab CI/CD, Jenkins et Docker pour automatiser les tests, le build et le déploiement des applications. Cette expertise me permet d'assurer une livraison rapide et fiable des logiciels tout en garantissant leur qualité et leur stabilité.
    `,
    projects: [
      {"Project management tool":"/details"},
      {"Game up":"/details"}, 
      {"Electricity billing system":"/details"} as { [key: string]: string }]
    }, 

    {
      id: 4,
      name: 'Angular',
      description: [`
        J'ai acquis une expertise en Javascript et Angular lors de ma formation Visiplus Master en ingénierie logicielle. Grâce à cette formation et à la réalisation de plusieurs projets, j'ai développé des compétences solides en développement d'applications web modernes, modulaires et performantes.
        Cette formation m'a permis de maîtriser les concepts clés d'Angular, tels que les composants, les services, les routes et les formulaires.`,
        `Parmi mes réalisations, j'ai conçu Project Management Tool, une application de gestion de projet permettant d'organiser les tâches, suivre l'avancement et collaborer efficacement en équipe. J'ai également développé Game Up, une plateforme interactive dédiée aux passionnés de jeux vidéo, intégrant des fonctionnalités avancées comme la gestion de collections et les recommandations personnalisées.`
      ],
      img: 'assets/images/skills-imgs/angular.png',
      details: ` Ma maîtrise d'Angular, associée à des technologies complémentaires comme TypeScript, RxJS et Firebase, me permet de créer des applications performantes et ergonomiques, adaptées aux besoins des utilisateurs.
    `,
    projects: [
      {"Project management tool":"/details"}, 
      {"Game up":"/details"}, 
      {"Electricity billing system":"/details"} as { [key: string]: string }]
    },

    {
      id: 5,
      name: 'JavaScript',
      description: [`
        J'ai acquis une expertise en Javascript et Angular lors de ma formation Visiplus Master en ingénierie logicielle. Grâce à cette formation et à la réalisation de plusieurs projets, j'ai développé des compétences solides en développement d'applications web modernes, modulaires et performantes.
        Cette formation m'a permis de maîtriser les concepts clés d'Angular, tels que les composants, les services, les routes et les formulaires.`,
        `Parmi mes réalisations, j'ai conçu Project Management Tool, une application de gestion de projet permettant d'organiser les tâches, suivre l'avancement et collaborer efficacement en équipe. J'ai également développé Game Up, une plateforme interactive dédiée aux passionnés de jeux vidéo, intégrant des fonctionnalités avancées comme la gestion de collections et les recommandations personnalisées.`
      ],
      img: 'assets/images/skills-imgs/js.png',
      details: ` Ma maîtrise d'Angular, associée à des technologies complémentaires comme TypeScript, RxJS et Firebase, me permet de créer des applications performantes et ergonomiques, adaptées aux besoins des utilisateurs.
    `  ,
    projects: [
      {"Project management tool":"/details"},
      {"Game up":"/details"},
      {"Electricity billing system":"/details"} as { [key: string]: string }]
    },

    {
      id: 6,
      name: 'React',
      description: [`
        Lors de mon contrat en CDI chez Groupe FBO, j'ai approfondi mes compétences en React en travaillant sur le projet STPPS – Gestion du tiers payant. Cette application permet aux professionnels de santé d'optimiser la gestion du tiers payant en automatisant les processus et en améliorant le suivi des remboursements.
      `],
      img: 'assets/images/skills-imgs/react.png',
      details: `Grâce à cette expérience, j'ai acquis une solide maîtrise de React, en exploitant ses fonctionnalités avancées comme les hooks, le state management (Redux/Context API) et l'optimisation des performances. J'ai également travaillé avec des technologies associées telles que TypeScript, React Query et Material-UI, garantissant une expérience utilisateur fluide et efficace.
    `,
    projects: [
      {"Project management tool":"/details"},
      {"Game up":"/details"}, 
      {"Electricity billing system":"/details"} as { [key: string]: string }]
    } ,

    {
      id: 7,
      name: 'Gestion de Projet',
      description: [`
        Lors de mon expérience chez Groupe FBO, j'ai développé des compétences en gestion de projet et en méthodes agiles (Scrum, Kanban). J'ai participé activement à la planification, au suivi et à l'optimisation des processus de développement, en favorisant la collaboration et l'adaptabilité. 
      `],
      img: 'assets/images/skills-imgs/projet.jpg',
        details: `Grâce aux rituels agiles (daily meetings, sprint planning, rétrospectives), j'ai acquis une approche structurée et efficace pour la gestion des tâches, l'amélioration continue et la livraison rapide de fonctionnalités. Cette expérience m'a permis d'améliorer la coordination entre les équipes et d'optimiser la qualité des livrables.
      `,
      projects: [
        {"Project management tool":"/details"},
        {"Game up":"/details"}, 
        {"Electricity billing system":"/details"} as { [key: string]: string }]
    },

    {
      id: 8,
      name: 'Communication',
      description: [`
        Lors de mon expérience chez Liqrade, j'ai développé des compétences en communication et en esprit d'analyse, essentiels pour travailler efficacement en équipe et prendre des décisions stratégiques.      `],
      img: 'assets/images/skills-imgs/com.jpg',
      details: `Grâce à des échanges réguliers avec les différentes parties prenantes, jai appris à formuler des idées de manière claire, à écouter activement et à adapter mon discours en fonction des interlocuteurs. Mon esprit d'analyse m'a permis d'évaluer les problématiques, d'identifier des solutions adaptées et de contribuer à l'amélioration continue des projets.
    `,
    projects: [
      {"Project management tool":"/details"},
      {"Game up":"/details"}, 
      {"Electricity billing system":"/details"} as { [key: string]: string }]
    },

    {
      id: 9,
      name: 'Esprit d\'analyse',
      description: [`
        Lors de mon expérience chez Liqrade, j'ai développé des compétences en communication et en esprit danalyse, essentiels pour travailler efficacement en équipe et prendre des décisions stratégiques. 
     `],
      img: 'assets/images/skills-imgs/analyse.png',
      details: `Grâce à des échanges réguliers avec les différentes parties prenantes, jai appris à formuler des idées de manière claire, à écouter activement et à adapter mon discours en fonction des interlocuteurs. Mon esprit d'analyse m'a permis d'évaluer les problématiques, d'identifier des solutions adaptées et de contribuer à l'amélioration continue des projets.
    `,
    projects: [
      {"Project management tool":"/details"},
      {"Game up":"/details"}, 
      {"Electricity billing system":"/details"} as { [key: string]: string }]
    },

    {
      id: 10,
      name: 'Methodologies Agiles',
      description: [`
        Lors de mon expérience chez Groupe FBO, j'ai développé des compétences en gestion de projet et en méthodes agiles (Scrum, Kanban). J'ai participé activement à la planification, au suivi et à l'optimisation des processus de développement, en favorisant la collaboration et l'adaptabilité. 
      `],
      img: 'assets/images/skills-imgs/Agile-Methodology.png',
      details: `Grâce aux rituels agiles (daily meetings, sprint planning, rétrospectives), j'ai acquis une approche structurée et efficace pour la gestion des tâches, l'amélioration continue et la livraison rapide de fonctionnalités. Cette expérience m'a permis d'améliorer la coordination entre les équipes et d'optimiser la qualité des livrables.
    `,
    projects: [
      {"Project management tool":"/details"}, 
      {"Game up":"/details"}, 
      {"Electricity billing system":"/details"} as { [key: string]: string }]
    },

    {
      id: 11,
      name: 'Docker',
      description: [`
        Lors du développement du projet "Project Management Tools", j’ai acquis des compétences solides dans l’utilisation de Docker. J’ai appris à créer et gérer des environnements de conteneurisation, facilitant le déploiement et la portabilité des applications. 
      `],
      img: 'assets/images/skills/docker.png',
      details: `Cette expérience m’a permis d’optimiser la configuration des services, de renforcer la cohérence des environnements de développement et de simplifier les processus d’intégration et de déploiement continus (CI/CD).
    `,
    projects: [{"Project management tool":"/details"}, {"Game up":"/details"}, {"Electricity billing system":"/details"} as { [key: string]: string }]
    },

    {
      id: 12,
      name: 'Test',
      description: [`
        L’apprentissage des tests unitaires avec JUnit s’est construit à travers plusieurs projets significatifs. Lors du contrat en alternance chez Liqtrade, l’intégration des tests dans le projet CRM a permis de renforcer la fiabilité des fonctionnalités livrées et d’assurer une meilleure maintenance du code.
      `],
      img: 'assets/images/skills/test.png',
      details: `Durant le développement du projet académique "Project Management Tool" dans le cadre du Master en Ingénierie Logicielle, JUnit a été utilisé pour structurer des scénarios de validation et améliorer la qualité du logiciel. Plus récemment, sur le projet en cours "STPPS" chez Groupe FBO, les tests automatisés participent directement à la robustesse et à la pérennité des solutions déployées.    `,
    projects: [{"Project management tool":"/details"}, {"Game up":"/details"}, {"Electricity billing system":"/details"} as { [key: string]: string }]
    },

    {
      id: 13,
      name: 'SQL',
      description: [`
        L’utilisation de SQL s’est affirmée au fil de plusieurs projets variés. Lors du contrat en alternance chez Liqtrade, le langage a été mobilisé dans le cadre du projet CRM pour la gestion et l’optimisation des bases de données relationnelles. Durant la formation en Master en Ingénierie Logicielle, les projets "Project Management Tool" et "Game Up" ont permis d’approfondir la conception de schémas relationnels et l’écriture de requêtes complexes. 
      `],
      img: 'assets/images/skills/sql.png',
      details: `Actuellement, sur le projet "STPPS" chez Groupe FBO, SQL occupe une place centrale dans le traitement, l’analyse et la sécurisation des données opérationnelles.    `,
    projects: [{"Project management tool":"/details"}, {"Game up":"/details"}, {"Electricity billing system":"/details"} as { [key: string]: string }]
    },

    {
      id: 14,
      name: 'Adobe XD',
      description: [`
        L’expérience avec Adobe XD a été développée durant le contrat en alternance chez Liqtrade, à travers le projet CRM. La réalisation de maquettes interactives a permis de concevoir des interfaces claires et ergonomiques, facilitant la communication entre l’équipe technique et les utilisateurs finaux. 
      `],
      img: 'assets/images/skills/xd.png',
      details: `Cette pratique a contribué à renforcer la dimension UX/UI dans le cycle de développement et à garantir une meilleure adéquation entre les besoins fonctionnels et la solution livrée.    `,
    projects: [{"Project management tool":"/details"}, {"Game up":"/details"}, {"Electricity billing system":"/details"} as { [key: string]: string }]
    }, 
    {
      id: 15,
      name: 'Python',
      description: [`
        L’apprentissage de Python s’est construit dans le cadre de la formation en Intelligence Artificielle, accompagné par plusieurs projets concrets. Le langage a servi de base au développement d’algorithmes et de modèles d’apprentissage automatique, tout en facilitant l’expérimentation grâce à ses nombreuses bibliothèques spécialisées.
      `],
      img: 'assets/images/skills/python.png',
      details: `Les projets réalisés ont permis de consolider les compétences en programmation orientée objet, en traitement de données et en implémentation de solutions intelligentes adaptées à des cas d’usage variés.    `,
    projects: [{"Project management tool":"/details"}, {"Game up":"/details"}, {"Electricity billing system":"/details"} as { [key: string]: string }]
    },
    {
      id: 16,
      name: 'Machine Learning',
      description: [`
        Les compétences en Machine Learning se sont développées dans le cadre de la formation en Intelligence Artificielle et à travers les différents projets réalisés durant ce parcours. L’apprentissage a porté sur la conception, l’entraînement et l’évaluation de modèles prédictifs, avec une mise en pratique concrète dans des cas variés. 
      `],
      img: 'assets/images/skills/machine_learning.jpg',
      details: `Le projet final d’OCR de cartes bancaires a particulièrement permis d’appliquer des techniques avancées de reconnaissance de texte et de traitement d’images, démontrant l’efficacité des approches supervisées et non supervisées dans des environnements réels.    `,
    projects: [{"Project management tool":"/details"}, {"Game up":"/details"}, {"Electricity billing system":"/details"} as { [key: string]: string }]
    },
    {
      id: 17,
      name: 'Swing',
      description: [`
        L’apprentissage de Java Swing a été consolidé lors du développement du projet "Electricity Billing System". Ce projet a permis de mettre en pratique les concepts fondamentaux du langage Java tout en explorant la création d’interfaces graphiques interactives. 
      `],
      img: 'assets/images/skills/swing.png',
      details: `L’expérience a renforcé la compréhension de la programmation orientée objet, la gestion des événements et la conception d’applications conviviales, offrant ainsi une approche complète de la construction de logiciels desktop en Java.    `,
    projects: [{"Project management tool":"/details"}, {"Game up":"/details"}, {"Electricity billing system":"/details"} as { [key: string]: string }]
    },
    {
      id: 18,
      name: 'Vue Js',
      description: [`
        L’utilisation de Vue.js a été développée dans le cadre du contrat en alternance chez Liqtrade, à travers le projet CRM. Le framework a permis de construire des interfaces dynamiques et réactives, tout en favorisant une architecture modulaire et maintenable.
      `],
      img: 'assets/images/skills/vue.png',
      details: `Cette expérience a renforcé la maîtrise des principes du développement frontend moderne, notamment la gestion des composants, la réactivité des données et l’intégration fluide avec les services backend.    `,
    projects: [{"Project management tool":"/details"}, {"Game up":"/details"}, {"Electricity billing system":"/details"} as { [key: string]: string }]
    },
    {
      id: 19,
      name: 'Tailwind',
      description: [`
        L’expérience avec Tailwind CSS s’est développée dans le cadre du projet actuel "STPPS" chez Groupe FBO, lors de la conception de la partie UI. Son utilisation a permis de mettre en place une interface moderne, responsive et cohérente, tout en accélérant le développement grâce à son approche utilitaire.
      `],
      img: 'assets/images/skills/tailwind.png',
      details: `Cette pratique a renforcé les compétences en design d’interfaces orientées utilisateur, en garantissant une meilleure ergonomie et une personnalisation efficace des composants visuels.    `,
    projects: [{"Project management tool":"/details"}, {"Game up":"/details"}, {"Electricity billing system":"/details"} as { [key: string]: string }]
    },
    {
      id: 20,
      name: 'Bootsrap',
      description: [`
        L’apprentissage de Bootstrap s’est fait dans le cadre du contrat en alternance chez Liqtrade, à travers le projet CRM. 
      `],
      img: 'assets/images/skills/boot.png',
      details: `Le framework a été utilisé pour concevoir une interface responsive et ergonomique, en exploitant ses composants préconstruits et son système de grille.    `,
    projects: [{"Project management tool":"/details"}, {"Game up":"/details"}, {"Electricity billing system":"/details"} as { [key: string]: string }]
    },
    {
      id: 21,
      name: 'Easy OCR',
      description: [`
        L’utilisation d’EasyOCR a été abordée dans le cadre de la formation en Intelligence Artificielle, notamment lors du projet final d’OCR de cartes bancaires. Cet outil a permis de mettre en place des modèles de reconnaissance optique de caractères adaptés à un cas d’usage concret.
      `],
      img: 'assets/images/skills/easyocr.png',
      details: `L’expérience a renforcé les compétences en traitement d’images, en extraction automatisée de données textuelles et en intégration de solutions d’intelligence artificielle dans des applications pratiques.    `,
    projects: [{"Project management tool":"/details"}, {"Game up":"/details"}, {"Electricity billing system":"/details"} as { [key: string]: string }]
    },
    {
      id: 22,
      name: 'Flask',
      description: [`
        L’apprentissage de Flask a eu lieu dans le cadre de la formation en Intelligence Artificielle, avec une mise en pratique lors du projet final d’OCR de cartes bancaires. Le framework a été utilisé pour développer une API permettant d’exposer les fonctionnalités de reconnaissance et de les intégrer dans une application fonctionnelle. 
      `],
      img: 'assets/images/skills/flask.png',
      details: `Cette expérience a permis de renforcer les compétences en développement backend léger, en gestion des routes et en déploiement de services web adaptés à des projets d’intelligence artificielle.    `,
    projects: [{"Project management tool":"/details"}, {"Game up":"/details"}, {"Electricity billing system":"/details"} as { [key: string]: string }]
    },

  ]
}
