---
title: "Accessibilité intégrée : bénédiction ou malédiction ?"
description: Cette session examine comment les fonctionnalités d'accessibilité « intégrées » dans les normes, la fonctionnalité du navigateur et les composants des systèmes de conception peuvent être une bénédiction ou une malédiction. Elle explore comment ces fonctionnalités peuvent éliminer les obstacles à grande échelle.
otherLangTitle: "Built-in Accessibility: Blessing or Curse?"
---

<p lang="en">Read this page in English: <a hreflang="en" href="/a11yto/{{otherLangTitle | slugify }}">{{otherLangTitle}}</a></p>

Retour à la page de l'[Expérience de la conférence a11yTO](/fr/a11yto/).

## Le concept de l'accessibilité « intégrée » :

### Trouver un équilibre entre facilité et efficacité :

- Les fonctionnalités d'accessibilité intégrées dans les normes du Web, la fonctionnalité du navigateur et les systèmes de conception peuvent faciliter la mise en œuvre de l'accessibilité, mais elles ne sont pas une solution miracle. Elles nécessitent une réflexion et un effort continus.
- Des fonctionnalités comme le texte alternatif pour les images et les éléments HTML sémantiques (par exemple, les en-têtes, les boutons) fournissent des outils d'accessibilité de base directement dans le balisage, aidant à réduire les obstacles pour les utilisateurs en situation de handicap.

## Les défis de s'appuyer uniquement sur les fonctionnalités intégrées :

### Solutions incomplètes :

- De nombreuses fonctionnalités intégrées, comme la sémantique HTML, fournissent une base, mais pas une solution complète. Par exemple, bien que la balise [`<video>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/video) prenne en charge les sous-titres, l'expérience utilisateur globale peut encore nécessiter des ajustements supplémentaires.
- Des problèmes concrets, comme un faible contraste de couleurs ou une mauvaise gestion du focus, nécessitent souvent des ajustements manuels au-delà de ce qui est fourni automatiquement par les normes.

### Utilisabilité vs. accessibilité technique :

- Même lorsque les fonctionnalités respectent techniquement les [normes d'accessibilité WCAG 2.1](https://www.w3.org/Translations/WCAG21-fr/), elles peuvent ne pas être réellement utilisables pour tous les utilisateurs. Par exemple, des éléments comme les onglets peuvent être navigables au clavier, mais rester confus sans tests utilisateurs adéquats.

## Applications pratiques de l'accessibilité intégrée :

### Améliorations des navigateurs et des systèmes de conception :

#### Popovers et sémantique :

Les nouvelles fonctionnalités, comme l'attribut [`<popover>` en HTML](https://developer.mozilla.org/fr/docs/Web/HTML/Global_attributes/popover), sont dotées de rôles d'accessibilité intégrés, mais nécessitent encore une mise en œuvre réfléchie pour garantir leur convivialité.

#### Systèmes de conception :

Les composants dans les systèmes de conception peuvent intégrer les meilleures pratiques en matière d'accessibilité, facilitant la création d'interfaces accessibles pour les développeurs. Cependant, le risque réside dans la reproduction de modèles défectueux sur plusieurs projets. Consultez, par exemple, le [système de conception NL sur GitHub <small>Seulement disponible en anglais</small>](https://github.com/nl-design-system), utilisé pour standardiser les pratiques de conception accessibles au sein du gouvernement néerlandais.

#### Tests et validations automatisés :

Des outils comme les [plugins PostCSS <small>Seulement disponible en anglais</small>](https://github.com/postcss/postcss#plugins) peuvent aider à garantir une utilisation cohérente des fonctionnalités d'accessibilité, en s'assurant par exemple que le texte reste lisible à différents niveaux de zoom ou avec des contrastes de couleurs variés.

## Leçons tirées du système de conception NL du gouvernement néerlandais :

### Approche collaborative :

- Le [système de conception NL <small>Seulement disponible en anglais</small>](https://github.com/nl-design-system) vise à réunir diverses entités gouvernementales pour standardiser les pratiques en matière d'accessibilité entre les ministères, les villes et les services publics.
- En créant un processus collectif incluant des tests utilisateurs et des audits d'accessibilité, l'équipe veille à ce que les directives restent pratiques et basées sur l'utilisation réelle.

### Philosophie open source :

- Le fait d'être open source permet davantage de retours et de collaboration, ce qui facilite le raffinement et l'amélioration des fonctionnalités d'accessibilité. Cela aide également à standardiser les approches entre différents projets, réduisant ainsi la duplication des efforts.

## Renforcer les bases de l'accessibilité :

### Accent sur l'utilisabilité :

- Les systèmes de conception et les fonctionnalités intégrées ne doivent pas seulement respecter les normes techniques, mais aussi viser l'utilisabilité dans le monde réel. Cela implique des tests avec des utilisateurs en situation de handicap pour identifier et combler les lacunes.

### Amélioration continue :

- L'accessibilité n'est pas un correctif ponctuel ; elle nécessite des ajustements continus et de la formation pour tous les intervenants, y compris les développeurs, les concepteurs et les créateurs de contenu.
- Une documentation et des directives claires sont essentielles pour aider les équipes à comprendre comment mettre en œuvre correctement et de manière cohérente l'accessibilité.

## Ressources :

- En savoir plus : [Diapositives de Hidde de Vries <small>Seulement disponible en anglais</small>](https://talks.hiddedevries.nl/sHyKQE/built-in-accessibility-blessing-or-curse) - Diapositives de la session.
