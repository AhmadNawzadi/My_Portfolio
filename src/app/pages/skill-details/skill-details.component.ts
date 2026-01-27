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
  selectedProject: string = '';

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
        {"Project management tool":"/details/" + 1}, 
        {"Game up":"/details/" + 2},
        {"STPPS":"/details/" + 3},
        {"CRM-Liqtrade":"/details/" + 4},
      ]
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
      {"Project management tool":"/details/" + 1}]
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
        {"Project management tool":"/details/" + 1}, 
        {"Game up":"/details/" + 2}]
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
      {"STPPS ":"/details/" + 3} ]
    } ,

    {
      id: 7,
      name: "Capacité d'autocritique",
      introduction: [`
        La capacité d'autocritique est une compétence essentielle dans le développement logiciel, où les technologies, les pratiques et les exigences évoluent en permanence. Être capable d'analyser son propre travail, d'identifier ses limites et de mettre en place des actions d'amélioration permet de progresser durablement et de gagner en maturité professionnelle. Cette démarche est indispensable pour maintenir un haut niveau de qualité et s'adapter aux attentes du monde professionnel.     
      `],
      img: 'assets/images/skills-imgs/autocritique.png',
      level: `
        Aujourd'hui, je considère avoir une bonne capacité d'analyse critique de mon travail. Je suis capable d'identifier ce qui fonctionne et ce qui peut être amélioré, tant sur le plan technique que méthodologique. Néanmoins, j'ai conscience que l'autocritique doit être équilibrée afin de ne pas ralentir inutilement l'avancement des projets. Je travaille donc à mieux prioriser les axes d'amélioration les plus impactants, afin de progresser efficacement tout en respectant les contraintes de temps.      `,
      experiance: `
        Au cours de mes projets académiques et professionnels, j'ai régulièrement été amené à analyser la qualité de mes réalisations, que ce soit lors de revues de code, de retours de formateurs ou d'échanges avec des Product Owners. Les projets comme Liqtrade CRM, STPPS ou encore mes projets de formation m'ont confronté à des problématiques réelles, où certaines décisions techniques pouvaient être améliorées après coup.\n
        Ces situations m'ont appris à accepter les retours, à remettre en question mes choix et à considérer les erreurs non comme des échecs, mais comme des opportunités d'apprentissage. Cette posture m'a permis d'améliorer progressivement la qualité de mon code et ma compréhension des enjeux techniques et métiers.      `,
      projects: [
        {"STPPS ":"/details"},
        {"CRM-Liqtrade":"/details"},
        {"Carte bancaire OCR":"/details"}  as { [key: string]: string }]
    },

    {
      id: 8,
      name: 'Rigueur',
      introduction: [`
        La rigueur et le sens de la qualité sont des compétences fondamentales dans le développement logiciel, en particulier sur des applications métiers et des systèmes en production. Elles garantissent la fiabilité, la maintenabilité et la sécurité des solutions développées, tout en réduisant les risques de régression et de dysfonctionnement.      `],
      level: `
        Je considère aujourd'hui la rigueur comme l'un de mes points forts. Toutefois, j'ai identifié que cette exigence peut parfois m'amener à passer trop de temps sur des détails techniques. Je travaille donc à trouver un meilleur équilibre entre qualité et efficacité, en priorisant les actions ayant le plus fort impact sur la fiabilité et la valeur métier de l'application.      `,
      experiance: ` 
        Lors de mes expériences professionnelles et de formation, j'ai été sensibilisé à l'importance de la qualité du code à travers la mise en place de tests unitaires, de pipelines CI/CD et le respect des bonnes pratiques de développement. Sur des projets comme STPPS ou Liqtrade, la stabilité et la sécurité des applications étaient des enjeux majeurs, ce qui m'a conduit à adopter une approche rigoureuse dans mes développements.\n
        Cette rigueur s'est traduite par une attention portée à la lisibilité du code, à la structuration des projets et à la validation des fonctionnalités avant leur mise en production.      
      `,
      img: 'assets/images/skills-imgs/rigueur.png',
      projects: [
        {"Project management tool":"/details"},
        {"Game up":"/details"},
        {"CRM-Liqtrade":"/details"},
        {"STPPS ":"/details"} as { [key: string]: string }]
      },

    {
      id: 9,
      name: 'Communication',
      introduction: [`
        La communication est une compétence clé dans un contexte de développement logiciel collaboratif. Être capable d'expliquer des choix techniques, de comprendre des besoins fonctionnels et de travailler avec des interlocuteurs variés est indispensable pour mener à bien des projets complexes.      `],
      experiance: ` 
        J'ai eu l'occasion de collaborer avec différents profils : développeurs, Product Owners, équipes métiers et formateurs. Dans des projets comme STPPS ou Liqtrade, les échanges réguliers étaient essentiels pour aligner les développements avec les besoins réels des utilisateurs.\n
        Ces expériences m'ont appris à adapter mon discours selon mon interlocuteur, à vulgariser des concepts techniques et à prendre en compte les contraintes fonctionnelles dans mes choix techniques.      `,
      img: 'assets/images/skills-imgs/communication.png',
      level: `
        Je suis aujourd'hui à l'aise dans les échanges techniques et fonctionnels. Toutefois, je souhaite progresser sur une communication encore plus proactive, notamment en anticipant davantage les besoins des parties prenantes et en formulant plus tôt des propositions ou des alertes lorsque des risques sont identifiés.        `,
      projects: [
        {"CRM-Liqtrade":"/details"},
        {"STPPS ":"/details"} as { [key: string]: string }]
    },

    {
      id: 10,
      name: 'Autonomie',
      introduction: [`
        L'autonomie est une compétence essentielle pour un développeur, mais elle doit s'accompagner d'un sens des responsabilités. Être autonome signifie être capable de prendre en charge des tâches complètes, tout en sachant quand solliciter de l'aide ou un avis extérieur.      `],
      experiance: ` 
        J'ai été amené à travailler de manière autonome sur plusieurs projets, notamment lors de mes projets de formation et sur certaines fonctionnalités développées en contexte professionnel. J'ai pris en charge des tâches allant de l'analyse du besoin jusqu'à la livraison, ce qui m'a permis de gagner en confiance et en efficacité.        `,
      img: 'assets/images/skills-imgs/autonomie.png',
      level: `
        Je considère avoir atteint un bon niveau d'autonomie, mais j'ai conscience que celle-ci doit rester encadrée. Je travaille donc à améliorer ma capacité à solliciter des retours au bon moment, afin d'éviter les dérives techniques et de garantir l'alignement avec les attentes métier.    
      `,
      projects: [
        {"Project management tool":"/details"},
        {"Game up":"/details"}as { [key: string]: string }]
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
          Mon apprentissage des tests unitaires avec JUnit s'est construit progressivement à travers plusieurs projets concrets. Lors de mon contrat en alternance chez Liqtrade, j'ai participé à l'intégration de suites de tests unitaires dans le projet CRM, afin de sécuriser les fonctionnalités existantes et les nouvelles évolutions.\n
          Cette démarche a également été mise en œuvre dans d’autres projets tels que Project Management Tool, Game Up et STPPS, où les tests unitaires faisaient partie intégrante du processus de développement. L'ajout de tests automatisés a permis de détecter plus rapidement les anomalies, de fiabiliser les livraisons et de faciliter l'évolution du code dans le temps. Cette pratique s'inscrivait dans un cycle de développement intégrant des phases de validation avant déploiement et m'a permis de mieux collaborer avec les équipes techniques en apportant des garanties concrètes sur la stabilité des fonctionnalités développées.      `],
      experiance: ` 
        Mon apprentissage des tests unitaires avec JUnit s'est construit progressivement à travers plusieurs projets concrets. Lors de mon contrat en alternance chez Liqtrade, j'ai participé à l'intégration de suites de tests unitaires dans le projet CRM, afin de sécuriser les fonctionnalités existantes et les nouvelles évolutions.\n
        L'ajout de tests automatisés a permis de détecter plus rapidement les anomalies, de fiabiliser les livraisons et de faciliter l'évolution du code dans le temps. Cette pratique s'inscrivait dans un cycle de développement intégrant des phases de validation avant déploiement, et m'a permis de mieux collaborer avec l'équipe technique en apportant des garanties sur la stabilité des fonctionnalités développées.      `,
      img: 'assets/images/skills/test.png',
      level: `
        Grâce à ces expériences, j'ai acquis une bonne maîtrise opérationnelle de JUnit et des principes fondamentaux des tests unitaires en Java. Je suis aujourd'hui capable de concevoir des tests pertinents, de valider des comportements métiers simples et d'intégrer ces tests dans des pipelines CI/CD afin d'automatiser les contrôles qualité.\n
        Cependant, j'ai également identifié plusieurs axes de progression. Bien que je sois à l'aise avec les tests unitaires classiques, je souhaite approfondir des aspects plus avancés tels que la conception de tests orientés métier, l'amélioration de la couverture de code pertinente (au-delà des simples indicateurs chiffrés) et l'utilisation de techniques de mocking plus avancées pour tester des composants complexes.\n
        De plus, je cherche à renforcer mes compétences sur les tests d'intégration et la complémentarité entre tests unitaires et tests end-to-end, afin de disposer d'une vision plus globale de la qualité logicielle. Cette démarche d'amélioration continue me permet de mieux anticiper les risques de régression et de contribuer plus efficacement à la stabilité des applications en production.      `,
      projects: [{"CRM-Liqtrade":"/details/" + 4},
        {"Project management tool":"/details/" + 1}, 
        {"Game up":"/details/" + 2},
        {"STPPS ":"/details/" + 3} as { [key: string]: string }]
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
        L'utilisation de SQL s'est construite progressivement à travers plusieurs projets académiques et professionnels. Lors de mes contrats chez Liqtrade et GroupeFBO, j'ai utilisé SQL dans le cadre du projet CRM et STPPS, notamment pour la gestion des bases de données relationnelles, la conception des tables et l'écriture de requêtes nécessaires au fonctionnement des fonctionnalités métiers.\n
        J'ai également travaillé sur l'optimisation de certaines requêtes afin d'améliorer les performances des opérations courantes, tout en veillant à la cohérence et à l'intégrité des données. Par ailleurs, durant ma formation en Master en Ingénierie Logicielle, les projets Project Management Tool et Game Up m'ont permis de concevoir des schémas relationnels adaptés aux besoins fonctionnels et de rédiger des requêtes plus complexes impliquant des jointures, des filtres et des contraintes d'intégrité.\n
        Ces expériences m'ont permis de comprendre l'importance d'une base de données bien modélisée pour garantir la stabilité et l'évolutivité d'une application.      
      `,
      projects: [{"CRM-Liqtrade":"/details/" + 4},
        {"Project management tool":"/details/" + 1}, 
        {"Game up":"/details/" + 2},
        {"STPPS ":"/details/" + 3} as { [key: string]: string }]
    },

    {
      id: 15,
      name: 'Python',
      introduction: [`
        Python est l'un des langages les plus polyvalents et les plus utilisés dans le domaine du développement logiciel et de l'intelligence artificielle. Sa syntaxe simple et lisible, combinée à un écosystème très riche de bibliothèques, en fait un outil privilégié pour le développement d'algorithmes, la création d'API et la mise en œuvre de modèles de Machine Learning. Qu'il s'agisse de manipulation de données, de reconnaissance optique de caractères ou de développement d'applications web légères, Python permet de prototyper rapidement et de construire des solutions efficaces et adaptées aux besoins métiers.      `],
      img: 'assets/images/skills/python.png',
       experiance: `
        Mon apprentissage de Python s'est construit principalement au cours de ma formation en Intelligence Artificielle, puis s'est renforcé à travers plusieurs projets concrets. J'ai utilisé Python pour développer des algorithmes, manipuler des données et expérimenter différents modèles de Machine Learning, depuis la phase d'exploration jusqu'à l'évaluation des résultats.\n
        J'ai notamment travaillé sur un projet de reconnaissance optique de caractères (OCR) appliquée aux cartes bancaires, dans lequel j'ai intégré la bibliothèque EasyOCR afin d'extraire automatiquement des informations textuelles à partir d'images. Dans ce même projet, j'ai développé une API avec Flask, permettant d'exposer les fonctionnalités d'OCR et de les intégrer dans une application web complète.\n
        Ces travaux m'ont permis d'avoir une vision globale de l'utilisation de Python, depuis le développement d'algorithmes et de modèles jusqu'à leur intégration dans des services exploitables au sein d'une application.     
      `,
      level: ` 
        Grâce à ces expériences, j'ai acquis une maîtrise solide des bases de Python et de son écosystème, aussi bien pour le développement d'algorithmes que pour la création d'API web avec Flask. Je suis capable de concevoir des scripts structurés, d'intégrer des bibliothèques spécialisées comme EasyOCR et de développer des services fonctionnels répondant à des cas d'usage concrets.\n
        Cependant, j'ai également identifié plusieurs axes de progression. Bien que je sois à l'aise avec l'utilisation de bibliothèques existantes et la mise en œuvre de modèles standards, je souhaite approfondir mes connaissances sur l'optimisation des performances, la gestion avancée des données et l'entraînement de modèles personnalisés plutôt que l'utilisation exclusive de solutions prêtes à l'emploi. De plus, je cherche à renforcer mes compétences sur la mise en production de modèles de Machine Learning, notamment en termes de robustesse, de supervision et de sécurité des données.\n
        Cette démarche d'autoévaluation me permet d'utiliser Python de manière polyvalente et efficace aujourd'hui, tout en construisant une montée en compétence progressive vers des projets d'intelligence artificielle plus avancés et industrialisés.      `,
      projects: [
        {"GameUp":"/details/" + 2}, 
        {"Carte bancaire OCR":"/details/" + 5}]
    },
    {
      id: 20,
      name: 'Bootstrap',
      introduction: [`
        J’ai utilisé Bootstrap principalement dans le cadre de mon contrat en alternance chez Liqtrade, notamment lors du développement du projet CRM, ainsi que durant ma formation en intelligence artificielle chez Simplon. Ce framework m’a permis de concevoir des interfaces ergonomiques et responsives, adaptées aux usages et aux besoins des équipes métiers.      `],
      img: 'assets/images/skills/boot.png',
      level: `
        Aujourd'hui, je possède une bonne maîtrise opérationnelle de Bootstrap, me permettant de concevoir rapidement des interfaces web modernes, responsives et fonctionnelles. Je suis capable de personnaliser les composants du framework, d'exploiter son système de grille et de l'intégrer efficacement dans des projets utilisant des frameworks frontend comme React ou Angular.\n
        Cependant, j'ai identifié certaines limites liées à l'utilisation exclusive de Bootstrap. Bien que le framework soit très efficace pour accélérer le développement, il peut restreindre la flexibilité graphique et conduire à des interfaces standardisées si l'on ne maîtrise pas suffisamment la personnalisation avancée du CSS. Dans cette optique, je cherche à renforcer mes compétences en CSS avancé, en design système et en frameworks plus orientés personnalisation comme Tailwind CSS, afin de produire des interfaces plus sur mesure.\n
        Cette prise de recul me permet aujourd'hui d'utiliser Bootstrap de manière pertinente, comme un outil de productivité, tout en développant progressivement une approche frontend plus fine et plus orientée expérience utilisateur. 
     `,   
      experiance: `
        J'ai utilisé Bootstrap principalement dans le cadre de mon contrat en alternance chez Liqtrade, notamment lors du développement du projet CRM. Le framework m'a permis de concevoir des interfaces ergonomiques et responsives, adaptées aux usages des équipes métiers.\n
        Cette expérience m'a appris à structurer efficacement les pages, à exploiter le système de grille et à utiliser les composants fournis par Bootstrap afin de répondre rapidement à des besoins fonctionnels tout en respectant les contraintes de délais. Elle m'a également sensibilisé à l'importance de la cohérence visuelle et de la lisibilité de l'interface pour améliorer l'expérience utilisateur.      `,
      projects: [
         {"CRM-Liqtrade":"/details/" + 4},
         {"Carte bancaire OCR":"/details/" + 5}]
    },
  ]
}
