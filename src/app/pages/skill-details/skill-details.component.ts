import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import Skill from '../../types/Skill';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.skillId = +this.route.snapshot.paramMap.get('id')!;
    this.selectedSkill = this.skills.find(skill => skill.id === this.skillId)!;
  }

  objectEntries(obj: { [key: string]: string }): [string, string][] {
    return Object.entries(obj);
  }

  formatText(text: string | undefined): SafeHtml {
    if (!text) return '' as unknown as SafeHtml;
    const html = text.replace(/\r\n|\r|\n/g, '<br/>');
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  skills = [
    {
      id: 1,
      name: 'Java',
      introduction:[ 
      `
        Java est l'un des langages les plus utilisés dans le monde professionnel en raison de sa robustesse, de sa stabilité et de sa capacité à supporter des applications à forte charge. Associé à l'écosystème Spring, il permet de concevoir des applications back-end performantes, sécurisées et maintenables. Ces technologies sont largement adoptées par les entreprises pour développer des systèmes métiers complexes et évolutifs.      `],
      img: 'assets/images/skills-imgs/Java.png',
      level: 
      `
        Aujourd'hui, je dispose d'une maîtrise solide de Java et de l'écosystème Spring (Spring Boot, Spring Security, Spring Data), me permettant de développer de manière autonome des fonctionnalités back-end complètes, de corriger des anomalies et d'optimiser des applications existantes.\n
        Cependant, cette expérience m'a également permis de prendre du recul sur mes compétences et d'identifier plusieurs axes de progression. Bien que je sois à l'aise avec des architectures monolithiques et des applications back-end classiques, je souhaite approfondir mes connaissances sur les architectures cloud et les systèmes distribués, afin de mieux répondre aux enjeux de scalabilité et de résilience.\n
        Dans cette optique, j'ai validé la certification Microsoft Azure Fundamentals, qui m'a permis d'acquérir une compréhension globale des services cloud, des modèles de déploiement et des bonnes pratiques en matière de sécurité et de disponibilité. Mon objectif est désormais de renforcer cet apprentissage par la pratique, notamment sur le déploiement d'applications Spring dans des environnements cloud et l'industrialisation des pipelines de déploiement.\n
        Cette démarche d'autoévaluation et de progression continue me permet d'évoluer vers des architectures plus avancées, tout en consolidant mes bases techniques sur des projets concrets.
      `,
      experiance: 
      ` 
        Lors de mon contrat d'apprentissage chez Liqtrade, j'ai travaillé de manière approfondie avec Java et Spring sur une plateforme métier en production. J'ai participé à la conception et à l'implémentation de nouvelles fonctionnalités back-end, ainsi qu'à l'évolution d'APIs REST existantes, en tenant compte des contraintes de performance, de sécurité et de maintenabilité.\n
        J'ai été amené à gérer des problématiques concrètes telles que l'authentification et l'autorisation des utilisateurs, la persistance des données, ainsi que l'intégration entre le backend et le frontend. Cette expérience m'a permis de renforcer ma rigueur technique, de mieux comprendre les enjeux métiers et de travailler dans un cadre agile avec des échanges réguliers au sein de l'équipe technique.
      `,
      projects: [
        {"Project management tool":"/details"}, 
        {"Game up":"/details"} as { [key: string]: string }]
    },

    {
      id: 3,
      name: 'CI CD',
      introduction:[ 
      `
        La CI/CD (Continuous Integration & Continuous Deployment) et la conteneurisation avec Docker constituent des piliers essentiels du développement logiciel moderne. Les pipelines CI/CD permettent d'automatiser les phases clés du cycle de vie d'une application, notamment les tests, le build et le déploiement, afin d'assurer des livraisons fiables et reproductibles. Docker facilite quant à lui la création d'environnements isolés, cohérents et portables, contribuant à la stabilité et à la scalabilité des applications. L'association de ces pratiques favorise une industrialisation efficace des projets logiciels.      `],
      img: 'assets/images/skills-imgs/cicd.png',
      level: `
        Ces expériences m'ont permis d'acquérir une maîtrise opérationnelle des outils de CI/CD et de la conteneurisation avec Docker. Je suis aujourd'hui capable de concevoir et maintenir des pipelines automatisés intégrant des tests, le build des images Docker et leur publication sur Docker Hub, ainsi que de configurer des environnements multi-services via Docker Compose.\n
        Cependant, cette pratique m'a également permis d'identifier mes axes de progression. Bien que je sois à l'aise avec la conteneurisation et l'automatisation des déploiements, je souhaite approfondir des notions plus avancées telles que l'orchestration de conteneurs, la supervision des applications en production et l'optimisation des pipelines CI/CD pour des environnements à plus grande échelle.\n
        Mon objectif est de consolider ces compétences en les associant à des environnements cloud et à des pratiques DevOps avancées, afin de contribuer efficacement à des projets nécessitant un haut niveau de fiabilité, de sécurité et de performance.
      `,
      experiance: `
        Dans le cadre de ma formation Visiplus – Master en Ingénierie Logicielle, j'ai mis en place plusieurs pipelines CI/CD en utilisant des outils tels que GitHub Actions, GitLab CI/CD et Jenkins. Ces pipelines intégraient des étapes de tests automatiques, de build et de déploiement, garantissant la qualité du code avant toute mise en production ou publication.\n
        Lors du développement du projet Project Management Tool, j'ai utilisé Docker de manière approfondie, en rédigeant des Dockerfile et en orchestrant les différents services de l'application à l'aide de Docker Compose. Cette approche m'a permis de gérer efficacement les dépendances entre les services et d'assurer la cohérence entre les environnements de développement et de déploiement.\n
        Les images Docker étaient construites automatiquement et publiées sur Docker Hub uniquement après validation des tests, ce qui m'a permis de comprendre l'importance des contrôles qualité dans un pipeline d'industrialisation complet.
      `,
    projects: [
      {"Project management tool":"/details"},
      {"Liqtrade CRM":"/details"} as { [key: string]: string }]
    }, 

    {
      id: 4,
      name: 'Angular',
      introduction: [`
        Angular est un framework JavaScript robuste permettant de développer des applications web modernes, modulaires et maintenables. Son architecture basée sur les composants, associée à l'utilisation de TypeScript et à un écosystème riche, facilite la création d'interfaces utilisateur dynamiques et évolutives. Angular est particulièrement adapté aux applications complexes nécessitant une structuration claire et une bonne maintenabilité dans le temps.
        `
      ],
      img: 'assets/images/skills-imgs/angular.png',
      level: ` 
        Grâce à ces projets, j'ai acquis une bonne maîtrise des bases d'Angular, incluant la création de composants, l'utilisation des services, la navigation via le router et la gestion des formulaires. Je suis également à l'aise avec les technologies associées telles que TypeScript et les principes réactifs via RxJS, ce qui me permet de développer des interfaces fonctionnelles et performantes.\n
        Cependant, j'ai identifié plusieurs axes de progression. Bien que je sois capable de développer des applications complètes, je souhaite approfondir des notions plus avancées comme l'optimisation des performances, la gestion avancée de l'état et l'architecture front-end à grande échelle. De plus, l'écosystème Angular étant vaste, je cherche à renforcer mes pratiques sur la testabilité des composants et la structuration de projets complexes.\n
        Cette démarche d'autoévaluation me permet d'utiliser Angular de manière efficace aujourd'hui, tout en construisant une montée en compétence progressive vers des applications plus robustes et mieux structurées.      `,
      experiance: ` 
        Lors de ma formation Visiplus – Master en Ingénierie Logicielle, j'ai travaillé avec Angular sur plusieurs projets concrets visant à mettre en pratique les concepts fondamentaux du framework. J'ai notamment conçu Project Management Tool, une application de gestion de projets permettant d'organiser les tâches, de suivre l'avancement et de faciliter la collaboration entre utilisateurs.\n
        J'ai également participé au développement de Game Up, une plateforme interactive intégrant des fonctionnalités de gestion de contenu et de recommandations. Ces projets m'ont permis de manipuler les principales briques d'Angular, telles que les composants, les services, la gestion des routes et les formulaires, tout en assurant l'intégration avec un backend et des APIs REST.\n
        Cette expérience m'a permis de mieux comprendre les enjeux liés à la structuration d'une application front-end et à la gestion des flux de données dans une application à plusieurs modules.      `,
      projects: [
        {"Project management tool":"/details"} as { [key: string]: string }]
      },
    {
      id: 6,
      name: 'React',
      introduction: [`
        Depuis plusieurs années, React s'impose comme une référence majeure dans le développement d'applications web modernes. Cette bibliothèque JavaScript repose sur une architecture basée sur des composants réutilisables, favorisant la lisibilité, la maintenabilité et la productivité. Son approche déclarative et l'utilisation du DOM virtuel permettent de concevoir des interfaces dynamiques et performantes. Grâce à un écosystème riche intégrant des outils comme React Router, Redux ou React Query, React s'adapte aussi bien aux applications simples qu'aux projets front-end complexes à forte valeur métier.
      `],
      img: 'assets/images/skills-imgs/react.png',
      level: `
        Grâce à cette expérience professionnelle, j'ai acquis une maîtrise solide de React, me permettant de concevoir des composants réutilisables, de structurer des applications complexes et d'optimiser les performances front-end. Je suis aujourd'hui capable de développer de manière autonome des applications React robustes, en appliquant les bonnes pratiques de l'écosystème et en tenant compte des contraintes métier et utilisateurs.\n
        Toutefois, j'ai identifié plusieurs axes de progression. Bien que je sois à l'aise avec la gestion de l'état et l'optimisation des performances, je souhaite approfondir des sujets plus avancés tels que l'architecture front-end à grande échelle, la gestion fine des performances sur des applications à fort volume de données, ainsi que les pratiques avancées de test des composants React.\n
        Cette prise de recul me permet d'aborder React non seulement comme un outil de développement, mais comme un véritable levier de qualité logicielle, avec une démarche d'amélioration continue orientée performance, maintenabilité et expérience utilisateur.      `,
      experiance: ` 
        Lors de mon contrat en CDI chez Groupe FBO, j'ai travaillé sur le projet STPPS – Gestion du tiers payant, une application destinée aux professionnels de santé visant à automatiser les processus liés au tiers payant et à améliorer le suivi des remboursements. Dans ce contexte, j'ai utilisé React comme technologie principale pour le développement de l'interface utilisateur.\n
        J'ai exploité des fonctionnalités avancées telles que les hooks, la gestion de l'état via Redux et la Context API, ainsi que des techniques d'optimisation des performances pour garantir une application fluide et réactive. J'ai également intégré des outils complémentaires comme TypeScript, React Query pour la gestion des données asynchrones, et Material-UI afin d'assurer une interface ergonomique et cohérente. Cette expérience m'a permis de travailler sur une application front-end en production, intégrée à un backend métier complexe.      `,
    projects: [
      {"STPPS ":"/details"} as { [key: string]: string }]
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
        {"STPPS ":"/details"} as { [key: string]: string }]
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
      img: 'assets/images/skills-imgs/com.jpg',
      projects: [
        {"Project management tool":"/details"},
        {"Game up":"/details"} as { [key: string]: string }]
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
      {"Game up":"/details"}as { [key: string]: string }]
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
        {"Game up":"/details"} as { [key: string]: string }
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
    projects: [{"Project management tool":"/details"}, {"Game up":"/details"} as { [key: string]: string }]
    },

    {
      id: 12,
      name: 'Test',
      introduction: [`
        Les tests unitaires constituent une étape essentielle du développement logiciel moderne. Ils permettent de vérifier le bon fonctionnement de chaque composant d'une application de manière isolée, garantissant ainsi la fiabilité et la robustesse du code produit. L'utilisation de frameworks comme JUnit en Java facilite l'écriture, l'exécution et l'automatisation des tests, tout en s'intégrant naturellement dans une démarche globale de qualité logicielle et de livraison continue (CI/CD). Au-delà de la détection d'erreurs, les tests unitaires contribuent à la maintenabilité du code, à la réduction des régressions et à la pérennité des applications.      `],
      experiance: ` 
        Mon apprentissage des tests unitaires avec JUnit s'est construit progressivement à travers plusieurs projets concrets. Lors de mon contrat en alternance chez Liqtrade, j'ai participé à l'intégration de suites de tests unitaires dans le projet CRM, afin de sécuriser les fonctionnalités existantes et les nouvelles évolutions.\n
        L'ajout de tests automatisés a permis de détecter plus rapidement les anomalies, de fiabiliser les livraisons et de faciliter l'évolution du code dans le temps. Cette pratique s'inscrivait dans un cycle de développement intégrant des phases de validation avant déploiement, et m'a permis de mieux collaborer avec l'équipe technique en apportant des garanties sur la stabilité des fonctionnalités développées.      `,
      img: 'assets/images/skills/test.png',
      level: `
        Grâce à ces expériences, j'ai acquis une bonne maîtrise opérationnelle de JUnit et des principes fondamentaux des tests unitaires en Java. Je suis aujourd'hui capable de concevoir des tests pertinents, de valider des comportements métiers simples et d'intégrer ces tests dans des pipelines CI/CD afin d'automatiser les contrôles qualité.\n
        Cependant, j'ai également identifié plusieurs axes de progression. Bien que je sois à l'aise avec les tests unitaires classiques, je souhaite approfondir des aspects plus avancés tels que la conception de tests orientés métier, l'amélioration de la couverture de code pertinente (au-delà des simples indicateurs chiffrés) et l'utilisation de techniques de mocking plus avancées pour tester des composants complexes.\n
        De plus, je cherche à renforcer mes compétences sur les tests d'intégration et la complémentarité entre tests unitaires et tests end-to-end, afin de disposer d'une vision plus globale de la qualité logicielle. Cette démarche d'amélioration continue me permet de mieux anticiper les risques de régression et de contribuer plus efficacement à la stabilité des applications en production.      `,
      projects: [{"Project management tool":"/details"}, {"Game up":"/details"} as { [key: string]: string }]
    },

    {
      id: 13,
      name: 'SQL',
      introduction: [`
        Le langage SQL (Structured Query Language) est un pilier incontournable du développement logiciel moderne. Il permet de manipuler et de gérer efficacement les bases de données relationnelles, qu'il s'agisse de la création de schémas, de l'écriture de requêtes complexes ou de l'optimisation des performances. La maîtrise de SQL est essentielle pour garantir l'intégrité, la cohérence et la disponibilité des données, qui constituent le cœur de nombreuses applications métiers. Au-delà des requêtes, SQL joue également un rôle central dans la modélisation des données, la gestion des transactions et la sécurisation des accès.      `],
      img: 'assets/images/skills/sql.png',
      level: `
        Grâce à ces projets, j'ai acquis une maîtrise solide des bases de SQL, tant sur le plan de la conception des bases de données relationnelles (modélisation, normalisation) que sur l'aspect opérationnel (écriture de requêtes, gestion des transactions et optimisation simple des performances). Je suis aujourd'hui capable de travailler efficacement avec des bases relationnelles dans des contextes applicatifs variés.\n
        Cependant, j'ai identifié plusieurs axes de progression. Bien que je sois à l'aise avec les requêtes complexes et la modélisation relationnelle classique, je souhaite approfondir mes compétences sur des sujets plus avancés tels que l'optimisation fine des performances, l'analyse des plans d'exécution, la gestion des volumes de données importants et les stratégies d'indexation avancées. Je souhaite également renforcer mes connaissances sur les problématiques de scalabilité et de gestion concurrente des accès.\n
        Cette prise de recul me permet d'aborder SQL non seulement comme un langage de requêtes, mais comme un véritable levier de performance et de fiabilité au cœur des applications métiers.      `,
      experiance: ` 
        L'utilisation de SQL s'est construite progressivement à travers plusieurs projets académiques et professionnels. Lors de mon contrat en alternance chez Liqtrade, j'ai utilisé SQL dans le cadre du projet CRM, notamment pour la gestion des bases de données relationnelles, la conception des tables et l'écriture de requêtes nécessaires au fonctionnement des fonctionnalités métiers.\n
        J'ai également travaillé sur l'optimisation de certaines requêtes afin d'améliorer les performances des opérations courantes, tout en veillant à la cohérence et à l'intégrité des données. Par ailleurs, durant ma formation en Master en Ingénierie Logicielle, les projets Project Management Tool et Game Up m'ont permis de concevoir des schémas relationnels adaptés aux besoins fonctionnels et de rédiger des requêtes plus complexes impliquant des jointures, des filtres et des contraintes d'intégrité.\n
        Ces expériences m'ont permis de comprendre l'importance d'une base de données bien modélisée pour garantir la stabilité et l'évolutivité d'une application.      
      `,
      projects: [{"Project management tool":"/details"}, {"Game up":"/details"} as { [key: string]: string }]
    },

    {
      id: 15,
      name: 'Python',
      introduction: [`
        Python est l'un des langages les plus polyvalents et les plus utilisés dans le domaine du développement logiciel et de l'intelligence artificielle. Sa syntaxe simple et lisible, combinée à un écosystème très riche de bibliothèques, en fait un outil privilégié pour le développement d'algorithmes, la création d'API et la mise en œuvre de modèles de Machine Learning. Qu'il s'agisse de manipulation de données, de reconnaissance optique de caractères ou de développement d'applications web légères, Python permet de prototyper rapidement et de construire des solutions efficaces et adaptées aux besoins métiers.      `],
      img: 'assets/images/skills/python.png',
       experiance: `
        Mon apprentissage de Python s'est construit au fil de ma formation en Intelligence Artificielle, renforcé par plusieurs projets concrets. Le langage a servi de base au développement d'algorithmes et de modèles prédictifs, tout en facilitant l'expérimentation grâce à ses bibliothèques spécialisées.\n
        Mon apprentissage de Python s'est construit principalement au cours de ma formation en Intelligence Artificielle, puis s'est renforcé à travers plusieurs projets concrets. J'ai utilisé Python pour développer des algorithmes, manipuler des données et expérimenter différents modèles de Machine Learning, depuis la phase d'exploration jusqu'à l'évaluation des résultats.\n
        J'ai notamment travaillé sur un projet de reconnaissance optique de caractères (OCR) appliquée aux cartes bancaires, dans lequel j'ai intégré la bibliothèque EasyOCR afin d'extraire automatiquement des informations textuelles à partir d'images. Dans ce même projet, j'ai développé une API avec Flask, permettant d'exposer les fonctionnalités d'OCR et de les intégrer dans une application web complète.\n
        Ces travaux m'ont permis d'avoir une vision globale de l'utilisation de Python, depuis le développement d'algorithmes et de modèles jusqu'à leur intégration dans des services exploitables au sein d'une application.     
      `,
      level: ` 
        Grâce à ces expériences, j'ai acquis une maîtrise solide des bases de Python et de son écosystème, aussi bien pour le développement d'algorithmes que pour la création d'API web avec Flask. Je suis capable de concevoir des scripts structurés, d'intégrer des bibliothèques spécialisées comme EasyOCR et de développer des services fonctionnels répondant à des cas d'usage concrets.\n
        Cependant, j'ai également identifié plusieurs axes de progression. Bien que je sois à l'aise avec l'utilisation de bibliothèques existantes et la mise en œuvre de modèles standards, je souhaite approfondir mes connaissances sur l'optimisation des performances, la gestion avancée des données et l'entraînement de modèles personnalisés plutôt que l'utilisation exclusive de solutions prêtes à l'emploi. De plus, je cherche à renforcer mes compétences sur la mise en production de modèles de Machine Learning, notamment en termes de robustesse, de supervision et de sécurité des données.\n
        Cette démarche d'autoévaluation me permet d'utiliser Python de manière polyvalente et efficace aujourd'hui, tout en construisant une montée en compétence progressive vers des projets d'intelligence artificielle plus avancés et industrialisés.      `,
      projects: [{"Project management tool":"/details"}, {"Game up":"/details"} as { [key: string]: string }]
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
      projects: [{"Project management tool":"/details"}, {"Game up":"/details"} as { [key: string]: string }]
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
      projects: [{"Project management tool":"/details"}, {"Game up":"/details"} as { [key: string]: string }]
    },
 
    {
      id: 20,
      name: 'Bootsrap',
      introduction: [`
        Bootstrap est l'un des frameworks CSS les plus utilisés pour le développement d'interfaces web modernes et responsives. Il propose un ensemble de composants préconstruits (grilles, formulaires, boutons, modales, etc.) et de classes utilitaires permettant de structurer rapidement des interfaces cohérentes et compatibles avec la majorité des navigateurs. Grâce à sa simplicité d'utilisation, Bootstrap permet d'accélérer le développement frontend tout en garantissant une expérience utilisateur fluide sur différents supports (ordinateur, tablette et mobile).    
      `],
      img: 'assets/images/skills/boot.png',
      level: `
        Aujourd'hui, je possède une bonne maîtrise opérationnelle de Bootstrap, me permettant de concevoir rapidement des interfaces web modernes, responsives et fonctionnelles. Je suis capable de personnaliser les composants du framework, d'exploiter son système de grille et de l'intégrer efficacement dans des projets utilisant des frameworks frontend comme React ou Angular.\n
        Cependant, j'ai identifié certaines limites liées à l'utilisation exclusive de Bootstrap. Bien que le framework soit très efficace pour accélérer le développement, il peut restreindre la flexibilité graphique et conduire à des interfaces standardisées si l'on ne maîtrise pas suffisamment la personnalisation avancée du CSS. Dans cette optique, je cherche à renforcer mes compétences en CSS avancé, en design système et en frameworks plus orientés personnalisation comme Tailwind CSS, afin de produire des interfaces plus sur mesure.\n
        Cette prise de recul me permet aujourd'hui d'utiliser Bootstrap de manière pertinente, comme un outil de productivité, tout en développant progressivement une approche frontend plus fine et plus orientée expérience utilisateur. 
     `,   
      experiance: `
        J'ai utilisé Bootstrap principalement dans le cadre de mon contrat en alternance chez Liqtrade, notamment lors du développement du projet CRM. Le framework m'a permis de concevoir des interfaces ergonomiques et responsives, adaptées aux usages des équipes métiers.\n
        Cette expérience m'a appris à structurer efficacement les pages, à exploiter le système de grille et à utiliser les composants fournis par Bootstrap afin de répondre rapidement à des besoins fonctionnels tout en respectant les contraintes de délais. Elle m'a également sensibilisé à l'importance de la cohérence visuelle et de la lisibilité de l'interface pour améliorer l'expérience utilisateur.      `,
      projects: [{"Project management tool":"/details"}, {"Game up":"/details"} as { [key: string]: string }]
    },
  ]
}
