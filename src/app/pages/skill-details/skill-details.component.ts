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
    introduction: [],
    img: '',
    level: '',
    experiance : '',
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
      introduction:[ 
      `
        Java est l'un des langages les plus utilisés dans le monde professionnel grâce à sa robustesse, sa scalabilité et sa communauté active. Couplé à Spring, un framework puissant, il permet de développer des applications back-end performantes, sécurisées et maintenables. C'est une technologie largement adoptée dans les entreprises pour créer des plateformes solides et évolutives.
      `],
      img: 'assets/images/skills-imgs/Java.png',
      level: 
      `
        Grâce à cette expérience, j'ai acquis une maîtrise solide de l'écosystème Spring, notamment Spring Boot, Spring Security et Spring Data. Je suis aujourd'hui capable de développer de manière autonome des fonctionnalités back-end complètes et d'optimiser des applications existantes pour améliorer leur performance et leur fiabilité.
        Néanmoins, je considère qu'il me reste encore beaucoup à apprendre, car l'écosystème Java évolue constamment et propose de nouvelles approches, notamment autour du cloud et des microservices.
      `,
      experiance: 
      ` 
        Au cours de mon contrat d'apprentissage chez Liqtrade, j'ai eu l'opportunité de travailler intensivement sur Java et Spring afin d'améliorer la plateforme de l'entreprise. Ma mission principale consistait à concevoir et implémenter de nouvelles fonctionnalités, tout en veillant à optimiser les performances et à garantir la scalabilité du système.
        J'ai participé au développement et à l'optimisation d'APIs REST, à l'intégration et la gestion des bases de données, ainsi qu'à la mise en place de bonnes pratiques en matière de sécurité et de performance. Cette expérience m'a également permis de travailler en collaboration étroite avec les équipes techniques, en adoptant une méthodologie agile pour assurer la qualité et la rapidité des livraisons.
      `,
      projects: [
        {"Project management tool":"/details"}, 
        {"Game up":"/details"}, 
        {"Electricity billing system":"/details"} as { [key: string]: string }]
    },

    {
      id: 3,
      name: 'CI CD',
      introduction:[ 
      `
        La CI/CD (Continuous Integration & Continuous Deployment) et Docker occupent une place centrale dans le développement logiciel moderne. La CI/CD permet d’automatiser les étapes clés du cycle de vie d’une application (tests, build, déploiement) afin d’assurer des livraisons rapides, fiables et de qualité. Quant à Docker, il facilite la création d’environnements de conteneurisation cohérents et portables, garantissant la stabilité et la scalabilité des applications. Combinés, ces outils et pratiques offrent un cycle de développement fluide, sécurisé et performant.      `],
      img: 'assets/images/skills-imgs/cicd.png',
      level: `
        Ces expériences m’ont permis de développer une maîtrise pratique de l’écosystème Docker et des outils de CI/CD, ainsi qu’une compréhension approfondie des enjeux liés à la qualité, à la performance et à la stabilité des applications. Aujourd’hui, je suis capable de concevoir, configurer et maintenir des pipelines robustes intégrant Docker, tout en appliquant les bonnes pratiques nécessaires pour accompagner un projet logiciel de bout en bout, de l’intégration au déploiement en production.      `,
      experiance: `
        Au cours de ma formation Visiplus Master en Ingénierie Logicielle, j’ai mis en place plusieurs pipelines d’automatisation avec des outils tels que GitHub Actions, GitLab CI/CD, Jenkins et Docker. Ces pipelines assuraient l’intégration continue, la validation automatisée par les tests et le déploiement en production.
        /n
        En parallèle, lors du développement du projet Project Management Tools, j’ai acquis une solide expérience dans l’utilisation de Docker, en apprenant à créer et gérer des environnements de conteneurisation. Cette pratique a permis de simplifier les déploiements, de renforcer la cohérence entre les environnements et d’améliorer la portabilité des applications.      `,
    projects: [
      {"Project management tool":"/details"},
      {"Game up":"/details"}, 
      {"Electricity billing system":"/details"} as { [key: string]: string }]
    }, 

    {
      id: 4,
      name: 'Angular',
      introduction: [`
        Angular est un framework JavaScript puissant qui permet de développer des applications web modernes, modulaires et performantes. Grâce à sa structure basée sur les composants et à son écosystème riche, il facilite la création d'interfaces utilisateur dynamiques et évolutives.  
        `
      ],
      img: 'assets/images/skills-imgs/angular.png',
      level: ` 
        Cette expérience m'a permis de maîtriser les concepts clés d'Angular, tels que les composants, les services, les routes et les formulaires. Associée à des technologies complémentaires comme TypeScript, RxJS et Firebase, ma maîtrise d'Angular me permet aujourd'hui de créer des applications performantes, ergonomiques et adaptées aux besoins des utilisateurs.
      `,
      experiance: ` 
        Lors de ma formation Visiplus Master en Ingénierie Logicielle, j'ai acquis une expertise solide en JavaScript et Angular, en travaillant sur plusieurs projets concrets. Parmi mes réalisations, j'ai conçu Project Management Tool, une application de gestion de projet permettant d'organiser les tâches, suivre l'avancement et collaborer efficacement en équipe. J'ai également développé Game Up, une plateforme interactive pour les passionnés de jeux vidéo, intégrant des fonctionnalités avancées comme la gestion de collections et des recommandations personnalisées.
      `,
      projects: [
        {"Project management tool":"/details"}, 
        {"Game up":"/details"}, 
        {"Electricity billing system":"/details"} as { [key: string]: string }]
      },
    {
      id: 6,
      name: 'React',
      introduction: [`
        Depuis plusieurs années, React s'impose comme une référence incontournable dans le développement d'applications web modernes. Développée par Facebook, cette bibliothèque JavaScript repose sur un concept innovant : la création de composants réutilisables qui permettent de gagner en productivité, en clarté et en maintenabilité. Grâce à son approche déclarative et à sa gestion efficace du DOM virtuel, React facilite la conception d'interfaces dynamiques, performantes et évolutives.
        Son vaste écosystème, incluant des outils comme React Router, Redux ou encore React Query, en fait une solution privilégiée pour répondre aux besoins variés du développement front-end, qu'il s'agisse de petites applications ou de projets d'envergure.      `],
      img: 'assets/images/skills-imgs/react.png',
      level: `
        Cette expérience m'a permis d'acquérir une solide maîtrise de React, allant de la conception de composants réutilisables à l'optimisation d'applications complexes. Je suis aujourd'hui capable de développer de manière autonome et efficace des applications front-end robustes, tout en exploitant les bonnes pratiques et les outils de l'écosystème React pour répondre aux besoins spécifiques des utilisateurs et des projets.
      `,
      experiance: ` 
        Lors de mon contrat en CDI chez Groupe FBO, j'ai approfondi mes compétences en travaillant sur le projet STPPS – Gestion du tiers payant. Cette application destinée aux professionnels de santé facilite la gestion du tiers payant en automatisant les processus et en améliorant le suivi des remboursements. Dans ce cadre, j'ai exploité les fonctionnalités avancées de React telles que les hooks, le state management (Redux et Context API) et les techniques d'optimisation des performances. J'ai également intégré des technologies complémentaires comme TypeScript, React Query et Material-UI afin de garantir une application fluide, ergonomique et fiable.
      `,
    projects: [
      {"Project management tool":"/details"},
      {"Game up":"/details"}, 
      {"Electricity billing system":"/details"} as { [key: string]: string }]
    } ,

    {
      id: 7,
      name: 'Gestion de Projet',
      introduction: [`
        La gestion de projet joue un rôle central dans la réussite des développements logiciels. Elle consiste à organiser, planifier et piloter les différentes étapes d'un projet afin d'atteindre les objectifs fixés dans les délais et avec la qualité attendue. Dans le domaine informatique, les méthodes agiles (Scrum, Kanban) se sont imposées comme une référence, car elles privilégient la collaboration, la transparence et l'amélioration continue.
        Elles offrent une approche itérative et flexible qui permet d'intégrer rapidement les retours des utilisateurs et de s'adapter aux changements. Les rituels agiles, tels que les daily meetings, les sprint planning et les rétrospectives, sont autant de leviers pour améliorer la communication au sein des équipes et garantir une livraison régulière et fiable des fonctionnalités.
      `],
      img: 'assets/images/skills-imgs/projet.jpg',
      level: `
        Grâce à cette expérience, j'ai acquis une approche méthodique et collaborative de la gestion de projet. Je maîtrise les outils et pratiques liés aux méthodes agiles, ce qui me permet aujourd'hui d'optimiser la qualité des livrables, d'améliorer la communication entre les membres de l'équipe et de garantir une livraison rapide et fiable des fonctionnalités. Je suis ainsi capable de contribuer à la réussite d'un projet, aussi bien en tant que développeur impliqué qu'en tant que coordinateur de processus.      `,
      experiance: `
        Lors de mon expérience chez Groupe FBO, j'ai participé activement à la planification, au suivi et à l'optimisation des processus de développement. J'ai pris part aux différents rituels agiles tels que les daily meetings, les sprint planning et les rétrospectives, ce qui m'a permis de contribuer à la structuration des tâches, à la coordination des équipes et à la fluidité du cycle de développement. Cette immersion dans un environnement agile m'a appris à équilibrer rigueur et flexibilité afin de répondre efficacement aux besoins du projet et aux attentes des utilisateurs.
      `,
      projects: [
        {"Project management tool":"/details"},
        {"Game up":"/details"}, 
        {"Electricity billing system":"/details"} as { [key: string]: string }]
    },

    {
      id: 8,
      name: 'Communication',
      introduction: [`
        La communication est une compétence clé dans le domaine professionnel, en particulier dans l'ingénierie logicielle où la réussite d'un projet repose autant sur la qualité technique que sur la clarté des échanges entre les équipes. Une bonne communication favorise la collaboration, renforce la cohésion et permet de transmettre les informations de manière fluide. Associée à un esprit d'analyse, elle devient un levier stratégique pour comprendre les besoins, résoudre les problèmes et prendre des décisions éclairées.      img: 'assets/images/skills-imgs/com.jpg',
      `],
      level: `
        Ces échanges m'ont permis de renforcer mon esprit d'analyse, en évaluant les problématiques rencontrées et en identifiant des solutions adaptées aux besoins du projet. Je suis désormais capable de contribuer efficacement à l'amélioration continue en alliant communication ouverte, réflexion critique et collaboration constructive au sein d'une équipe.      `,
      experiance: ` 
        Lors de mon expérience chez Liqtrade, j'ai eu l'opportunité de développer mes compétences en communication et en esprit d'analyse grâce à des interactions régulières avec différentes parties prenantes. J'ai appris à formuler mes idées de manière claire et structurée, à écouter activement et à adapter mon discours en fonction de mes interlocuteurs, qu'ils soient techniques ou non techniques.
      `,
    projects: [
      {"Project management tool":"/details"},
      {"Game up":"/details"}, 
      {"Electricity billing system":"/details"} as { [key: string]: string }]
    },

    {
      id: 9,
      name: 'Esprit d\'analyse',
      introduction: [`
        L'esprit d'analyse est une compétence fondamentale dans le domaine de l'ingénierie logicielle et du développement informatique. Il permet de comprendre en profondeur les problématiques rencontrées, d'identifier les causes sous-jacentes et de proposer des solutions pertinentes. Au-delà de la technique, il favorise la prise de décision stratégique et l'amélioration continue des projets, en tenant compte à la fois des contraintes techniques, organisationnelles et humaines.     `],
      experiance: ` 
        Lors de mon expérience chez Liqtrade, j'ai eu l'occasion de développer mon esprit d'analyse à travers des échanges réguliers avec les différentes parties prenantes. Cette collaboration m'a appris à évaluer les problématiques de manière structurée, à poser les bonnes questions et à dégager des pistes de réflexion adaptées aux besoins du projet.
      `,
      img: 'assets/images/skills-imgs/analyse.png',
      level: `
        Grâce à cette expérience, j'ai renforcé ma capacité à identifier les solutions les plus efficaces tout en tenant compte des priorités et des contraintes. Je suis désormais en mesure d'apporter une vision claire et constructive dans la résolution de problèmes complexes, et de contribuer activement à l'optimisation et à l'amélioration des processus au sein d'une équipe.
        `,
    projects: [
      {"Project management tool":"/details"},
      {"Game up":"/details"}, 
      {"Electricity billing system":"/details"} as { [key: string]: string }]
    },

    {
      id: 10,
      name: 'Methodologies Agiles',
      introduction: [`
        Les méthodes agiles (Scrum, Kanban) sont aujourd'hui incontournables dans le développement logiciel. Elles offrent une approche itérative et collaborative qui permet de livrer rapidement des fonctionnalités tout en intégrant les retours des utilisateurs et en s'adaptant aux changements. Grâce à leurs principes de transparence, de communication constante et d'amélioration continue, elles favorisent la cohésion des équipes et l'efficacité opérationnelle. Les rituels agiles, tels que les daily meetings, le sprint planning et les rétrospectives, jouent un rôle essentiel pour structurer le travail et garantir la qualité des livrables.       `],
      experiance: ` 
        Lors de mon expérience au sein de Groupe FBO, j'ai participé activement à la mise en œuvre des méthodes agiles dans le cadre de projets de développement logiciel. J'ai contribué à la planification des sprints, au suivi des tâches et à l'optimisation des processus, tout en favorisant la collaboration entre les membres de l'équipe et l'adaptabilité face aux imprévus. Cette immersion m'a permis de mieux comprendre les bénéfices des cycles courts et des itérations pour atteindre progressivement les objectifs fixés.
      `,
      img: 'assets/images/skills-imgs/Agile-Methodology.png',
      level: `
        Grâce à cette expérience, j'ai acquis une approche structurée et pragmatique de la gestion de projet agile. Je maîtrise les principaux rituels et outils agiles, ce qui me permet de contribuer à une meilleure coordination entre les équipes, d'assurer une amélioration continue et de garantir la livraison rapide et qualitative des fonctionnalités. Je suis ainsi capable d'apporter une réelle valeur ajoutée dans des environnements où la flexibilité et la collaboration sont essentielles.    `,
      projects: [
        {"Project management tool":"/details"}, 
        {"Game up":"/details"}, 
        {"Electricity billing system":"/details"} as { [key: string]: string }
      ]
    },

    {
      id: 11,
      name: 'Docker',
      introduction: [`
        Lors du développement du projet "Project Management Tools", j'ai acquis des compétences solides dans l'utilisation de Docker. J'ai appris à créer et gérer des environnements de conteneurisation, facilitant le déploiement et la portabilité des applications. 
      `],
      experiance: ` J'ai travaillé sur le développement et l'optimisation d'APIs REST, l'intégration de bases de données, ainsi que la mise en place de bonnes pratiques en matière de sécurité et de gestion des performances. 
      Cette expérience m'a permis d'acquérir une solide maîtrise de l'écosystème Spring (Spring Boot, Spring Security, Spring Data), tout en collaborant étroitement avec les équipes techniques pour assurer une livraison efficace et qualitative des fonctionnalités.
    `,
      img: 'assets/images/skills/docker.png',
      level: `
      Cette expérience m'a permis d'optimiser la configuration des services, de renforcer la cohérence des environnements de développement et de simplifier les processus d'intégration et de déploiement continus (CI/CD).
    `,
    projects: [{"Project management tool":"/details"}, {"Game up":"/details"}, {"Electricity billing system":"/details"} as { [key: string]: string }]
    },

    {
      id: 12,
      name: 'Test',
      introduction: [`
        Les tests unitaires constituent une étape essentielle du développement logiciel moderne. Ils permettent de vérifier le bon fonctionnement de chaque composant d’une application de manière isolée, garantissant ainsi la fiabilité et la robustesse du code produit. L’adoption de frameworks comme JUnit en Java facilite l’écriture, l’exécution et l’automatisation des tests, tout en s’intégrant parfaitement dans une démarche plus large de qualité logicielle et de livraison continue (CI/CD). Les tests unitaires ne se limitent pas à détecter des erreurs : ils contribuent également à la maintenabilité, à la réduction des régressions et à la pérennité d’un projet logiciel.      `],
      experiance: ` 
        L’apprentissage des tests unitaires avec JUnit s’est construit à travers plusieurs projets significatifs. Lors de mon contrat en alternance chez Liqtrade, j’ai intégré des suites de tests dans le projet CRM, ce qui a permis de renforcer la fiabilité des fonctionnalités livrées et de faciliter leur évolution. L’ajout de tests automatisés a contribué à détecter rapidement les erreurs, à améliorer la qualité du code et à garantir une meilleure stabilité du système. Cette pratique m’a aussi permis de collaborer plus efficacement avec l’équipe, en validant chaque itération avant son déploiement.
      `,
      img: 'assets/images/skills/test.png',
      level: `
        Grâce à ces expériences, j’ai acquis une bonne maîtrise de JUnit et de son intégration dans les projets Java. Je suis désormais capable de concevoir et d’exécuter des tests unitaires pertinents, de gérer la couverture de code et d’intégrer ces tests dans des pipelines CI/CD pour automatiser les contrôles qualité. Cette compétence me permet aujourd’hui d’assurer une meilleure qualité logicielle, tout en réduisant les coûts de maintenance et les risques liés aux régressions.      
      `,
      projects: [{"Project management tool":"/details"}, {"Game up":"/details"}, {"Electricity billing system":"/details"} as { [key: string]: string }]
    },

    {
      id: 13,
      name: 'SQL',
      introduction: [`
        Le langage SQL (Structured Query Language) est un pilier incontournable du développement logiciel moderne. Il permet de manipuler et de gérer efficacement les bases de données relationnelles, qu’il s’agisse de la création de schémas, de l’écriture de requêtes complexes ou de l’optimisation des performances. La maîtrise de SQL est essentielle pour garantir l’intégrité, la cohérence et la disponibilité des données, qui représentent souvent le cœur d’une application métier. Au-delà des simples requêtes, SQL joue également un rôle central dans la modélisation des données, la gestion des transactions et la sécurité des accès.      `],
      img: 'assets/images/skills/sql.png',
      level: `
        Ces expériences m’ont permis de développer une solide maîtrise de SQL, tant sur l’aspect conception (modélisation de bases relationnelles, normalisation) que sur l’aspect opérationnel (écriture et optimisation de requêtes, gestion des transactions). Je suis aujourd’hui capable de travailler efficacement avec des bases de données relationnelles dans des environnements variés, en garantissant la performance, la fiabilité et la sécurité des données.      `,
      experiance: ` 
        L’utilisation de SQL s’est affirmée au fil de plusieurs projets variés. Lors de mon contrat en alternance chez Liqtrade, le langage a été mobilisé dans le cadre du projet CRM, notamment pour la gestion et l’optimisation des bases de données relationnelles. J’ai pu travailler sur la conception de tables, la rédaction de requêtes de manipulation et l’optimisation des performances des opérations courantes. Durant ma formation en Master en Ingénierie Logicielle, j’ai également approfondi mes compétences grâce aux projets Project Management Tool et Game Up, qui m’ont permis de mettre en place des schémas relationnels adaptés et de développer des requêtes complexes répondant à des besoins fonctionnels précis.
      `,
      projects: [{"Project management tool":"/details"}, {"Game up":"/details"}, {"Electricity billing system":"/details"} as { [key: string]: string }]
    },

    // {
    //   id: 14,
    //   name: 'Adobe XD',
    //   introduction: [`
    //     L'expérience avec Adobe XD a été développée durant le contrat en alternance chez Liqtrade, à travers le projet CRM. La réalisation de maquettes interactives a permis de concevoir des interfaces claires et ergonomiques, facilitant la communication entre l'équipe technique et les utilisateurs finaux. 
    //   `],
    //   img: 'assets/images/skills/xd.png',
    //   level: `Cette pratique a contribué à renforcer la dimension UX/UI dans le cycle de développement et à garantir une meilleure adéquation entre les besoins fonctionnels et la solution livrée.
    //   `,
    //   experiance: ` J'ai travaillé sur le développement et l'optimisation d'APIs REST, l'intégration de bases de données, ainsi que la mise en place de bonnes pratiques en matière de sécurité et de gestion des performances. 
    //   Cette expérience m'a permis d'acquérir une solide maîtrise de l'écosystème Spring (Spring Boot, Spring Security, Spring Data), tout en collaborant étroitement avec les équipes techniques pour assurer une livraison efficace et qualitative des fonctionnalités.
    // `,
    //   projects: [{"Project management tool":"/details"}, {"Game up":"/details"}, {"Electricity billing system":"/details"} as { [key: string]: string }]
    // }, 
    {
      id: 15,
      name: 'Python',
      introduction: [`
        Python est l’un des langages les plus polyvalents et populaires dans le domaine du développement logiciel et de l’intelligence artificielle. Sa simplicité syntaxique et la richesse de son écosystème de bibliothèques en font un outil privilégié pour le développement d’algorithmes, la création d’API et la mise en œuvre de modèles de Machine Learning. Que ce soit pour la manipulation de données, la reconnaissance optique de caractères ou la mise en place d’applications web légères, Python permet d’expérimenter rapidement et de construire des solutions performantes et adaptées aux besoins métier.      `],
      img: 'assets/images/skills/python.png',
       experiance: `
        Mon apprentissage de Python s’est construit au fil de ma formation en Intelligence Artificielle, renforcé par plusieurs projets concrets. Le langage a servi de base au développement d’algorithmes et de modèles prédictifs, tout en facilitant l’expérimentation grâce à ses bibliothèques spécialisées.

        L’utilisation de Machine Learning m’a permis de concevoir, entraîner et évaluer différents modèles prédictifs, appliqués à des cas pratiques variés.

        J’ai travaillé sur le projet final d’OCR de cartes bancaires, où j’ai intégré EasyOCR afin de mettre en place des modèles de reconnaissance optique de caractères adaptés à un cas d’usage réel.

        Dans ce même projet, j’ai utilisé le framework Flask pour développer une API, exposant les fonctionnalités de reconnaissance et permettant leur intégration dans une application complète et fonctionnelle.

        Ces projets m’ont offert une vision globale de Python, allant du développement d’algorithmes à la mise en production de services concrets.      
      `,
      level: ` 
        Grâce à ces expériences, j’ai acquis une maîtrise solide de Python et de son écosystème. Je suis capable de développer des solutions allant de la conception de modèles de Machine Learning à la création d’API web avec Flask, en passant par l’intégration de bibliothèques comme EasyOCR pour répondre à des besoins métiers spécifiques. Je dispose aujourd’hui de la polyvalence nécessaire pour utiliser Python aussi bien dans des contextes d’intelligence artificielle que de développement logiciel full stack.
      `,
      projects: [{"Project management tool":"/details"}, {"Game up":"/details"}, {"Electricity billing system":"/details"} as { [key: string]: string }]
    },
    {
      id: 16,
      name: 'Machine Learning',
      introduction: [`
        Les compétences en Machine Learning se sont développées dans le cadre de la formation en Intelligence Artificielle et à travers les différents projets réalisés durant ce parcours. L'apprentissage a porté sur la conception, l'entraînement et l'évaluation de modèles prédictifs, avec une mise en pratique concrète dans des cas variés. 
      `],
      img: 'assets/images/skills/machine_learning.jpg',
      level: `Le projet final d'OCR de cartes bancaires a particulièrement permis d'appliquer des techniques avancées de reconnaissance de texte et de traitement d'images, démontrant l'efficacité des approches supervisées et non supervisées dans des environnements réels.`,
      experiance: ` J'ai travaillé sur le développement et l'optimisation d'APIs REST, l'intégration de bases de données, ainsi que la mise en place de bonnes pratiques en matière de sécurité et de gestion des performances. 
      Cette expérience m'a permis d'acquérir une solide maîtrise de l'écosystème Spring (Spring Boot, Spring Security, Spring Data), tout en collaborant étroitement avec les équipes techniques pour assurer une livraison efficace et qualitative des fonctionnalités.
    `,
      projects: [{"Project management tool":"/details"}, {"Game up":"/details"}, {"Electricity billing system":"/details"} as { [key: string]: string }]
    },
    {
      id: 17,
      name: 'Swing',
      introduction: [`
        L'apprentissage de Java Swing a été consolidé lors du développement du projet "Electricity Billing System". Ce projet a permis de mettre en pratique les concepts fondamentaux du langage Java tout en explorant la création d'interfaces graphiques interactives. 
      `],
      img: 'assets/images/skills/swing.png',
      level: `L'expérience a renforcé la compréhension de la programmation orientée objet, la gestion des événements et la conception d'applications conviviales, offrant ainsi une approche complète de la construction de logiciels desktop en Java.`,
      experiance: ` J'ai travaillé sur le développement et l'optimisation d'APIs REST, l'intégration de bases de données, ainsi que la mise en place de bonnes pratiques en matière de sécurité et de gestion des performances. 
      Cette expérience m'a permis d'acquérir une solide maîtrise de l'écosystème Spring (Spring Boot, Spring Security, Spring Data), tout en collaborant étroitement avec les équipes techniques pour assurer une livraison efficace et qualitative des fonctionnalités.
    `,
      projects: [{"Project management tool":"/details"}, {"Game up":"/details"}, {"Electricity billing system":"/details"} as { [key: string]: string }]
    },
    // {
    //   id: 18,
    //   name: 'Vue Js',
    //   introduction: [`
    //     L'utilisation de Vue.js a été développée dans le cadre du contrat en alternance chez Liqtrade, à travers le projet CRM. Le framework a permis de construire des interfaces dynamiques et réactives, tout en favorisant une architecture modulaire et maintenable.
    //   `],
    //   img: 'assets/images/skills/vue.png',
    //   level: `Cette expérience a renforcé la maîtrise des principes du développement frontend moderne, notamment la gestion des composants, la réactivité des données et l'intégration fluide avec les services backend.`,
    //   experiance: ` J'ai travaillé sur le développement et l'optimisation d'APIs REST, l'intégration de bases de données, ainsi que la mise en place de bonnes pratiques en matière de sécurité et de gestion des performances. 
    //   Cette expérience m'a permis d'acquérir une solide maîtrise de l'écosystème Spring (Spring Boot, Spring Security, Spring Data), tout en collaborant étroitement avec les équipes techniques pour assurer une livraison efficace et qualitative des fonctionnalités.
    // `,
    //   projects: [{"Project management tool":"/details"}, {"Game up":"/details"}, {"Electricity billing system":"/details"} as { [key: string]: string }]
    // },
    // {
    //   id: 19,
    //   name: 'Tailwind',
    //   introduction: [`
    //     L'expérience avec Tailwind CSS s'est développée dans le cadre du projet actuel "STPPS" chez Groupe FBO, lors de la conception de la partie UI. Son utilisation a permis de mettre en place une interface moderne, responsive et cohérente, tout en accélérant le développement grâce à son approche utilitaire.
    //   `],
    //   img: 'assets/images/skills/tailwind.png',
    //   level: `Cette pratique a renforcé les compétences en design d'interfaces orientées utilisateur, en garantissant une meilleure ergonomie et une personnalisation efficace des composants visuels.`,
    //   experiance: ` J'ai travaillé sur le développement et l'optimisation d'APIs REST, l'intégration de bases de données, ainsi que la mise en place de bonnes pratiques en matière de sécurité et de gestion des performances. 
    //   Cette expérience m'a permis d'acquérir une solide maîtrise de l'écosystème Spring (Spring Boot, Spring Security, Spring Data), tout en collaborant étroitement avec les équipes techniques pour assurer une livraison efficace et qualitative des fonctionnalités.
    // `,
    //   projects: [{"Project management tool":"/details"}, {"Game up":"/details"}, {"Electricity billing system":"/details"} as { [key: string]: string }]
    // },
    {
      id: 20,
      name: 'Bootsrap',
      introduction: [`
        Bootstrap est l’un des frameworks CSS les plus populaires pour le développement d’interfaces web modernes et responsives. Il fournit un ensemble de composants préconstruits (grilles, boutons, formulaires, modales, etc.) et de classes utilitaires facilitant la mise en page et la personnalisation visuelle des applications. Grâce à sa simplicité d’intégration et à sa compatibilité avec la plupart des navigateurs, Bootstrap permet de gagner en rapidité de développement tout en garantissant une expérience utilisateur cohérente et fluide sur différents supports (ordinateur, tablette, mobile).      `],
      img: 'assets/images/skills/boot.png',
      level: `
        Aujourd’hui, je maîtrise l’utilisation de Bootstrap pour créer rapidement des interfaces modernes et adaptées aux standards du web. Je suis capable de personnaliser les composants du framework, d’exploiter son système de grille pour concevoir des mises en page flexibles et d’intégrer Bootstrap efficacement dans des projets utilisant d’autres technologies front-end comme React ou Angular. Cette compétence me permet de livrer des applications à la fois esthétiques, fonctionnelles et optimisées pour tous types d’appareils.      `,
      experiance: `
        L’apprentissage de Bootstrap s’est fait dans le cadre de mon contrat en alternance chez Liqtrade, à travers le projet CRM. J’ai utilisé le framework pour concevoir des interfaces ergonomiques et responsives, adaptées aux besoins des utilisateurs. Cette expérience m’a permis de comprendre l’importance d’une architecture front-end structurée et de tirer parti des composants intégrés de Bootstrap afin d’accélérer le développement et d’améliorer la lisibilité du code.
      `,
      projects: [{"Project management tool":"/details"}, {"Game up":"/details"}, {"Electricity billing system":"/details"} as { [key: string]: string }]
    },
    // {
    //   id: 21,
    //   name: 'Easy OCR',
    //   introduction: [`
    //     L'utilisation d'EasyOCR a été abordée dans le cadre de la formation en Intelligence Artificielle, notamment lors du projet final d'OCR de cartes bancaires. Cet outil a permis de mettre en place des modèles de reconnaissance optique de caractères adaptés à un cas d'usage concret.
    //   `],
    //   img: 'assets/images/skills/easyocr.png',
    //   level: `L'expérience a renforcé les compétences en traitement d'images, en extraction automatisée de données textuelles et en intégration de solutions d'intelligence artificielle dans des applications pratiques.`,
    //   experiance: ` J'ai travaillé sur le développement et l'optimisation d'APIs REST, l'intégration de bases de données, ainsi que la mise en place de bonnes pratiques en matière de sécurité et de gestion des performances. 
    //   Cette expérience m'a permis d'acquérir une solide maîtrise de l'écosystème Spring (Spring Boot, Spring Security, Spring Data), tout en collaborant étroitement avec les équipes techniques pour assurer une livraison efficace et qualitative des fonctionnalités.
    // `,
    //   projects: [{"Project management tool":"/details"}, {"Game up":"/details"}, {"Electricity billing system":"/details"} as { [key: string]: string }]
    // },
    // {
    //   id: 22,
    //   name: 'Flask',
    //   introduction: [`
    //     L'apprentissage de Flask a eu lieu dans le cadre de la formation en Intelligence Artificielle, avec une mise en pratique lors du projet final d'OCR de cartes bancaires. Le framework a été utilisé pour développer une API permettant d'exposer les fonctionnalités de reconnaissance et de les intégrer dans une application fonctionnelle. 
    //   `],
    //   img: 'assets/images/skills/flask.png',
    //   level: `Cette expérience a permis de renforcer les compétences en développement backend léger, en gestion des routes et en déploiement de services web adaptés à des projets d'intelligence artificielle.`,
    //   experiance: ` J'ai travaillé sur le développement et l'optimisation d'APIs REST, l'intégration de bases de données, ainsi que la mise en place de bonnes pratiques en matière de sécurité et de gestion des performances. 
    //   Cette expérience m'a permis d'acquérir une solide maîtrise de l'écosystème Spring (Spring Boot, Spring Security, Spring Data), tout en collaborant étroitement avec les équipes techniques pour assurer une livraison efficace et qualitative des fonctionnalités.
    // `,
    //   projects: [{"Project management tool":"/details"}, {"Game up":"/details"}, {"Electricity billing system":"/details"} as { [key: string]: string }]
    // },

  ]
}
