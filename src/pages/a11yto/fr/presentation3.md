---
title: "Décoder l'impact : les superpositions d'accessibilité à travers une lentille scientifique"
description: Cette session explore l'efficacité et les limites des superpositions d'accessibilité, avec des perspectives issues de recherches académiques récentes et d'évaluations techniques.
otherLangTitle: "Decoding the Impact: Accessibility Overlays Through a Scientific Lens"
---

<p lang="en">Read this page in English: <a hreflang="en" href="/a11yto/{{otherLangTitle | slugify }}">{{otherLangTitle}}</a></p>

Retour à la page de l'[Expérience de la conférence a11yTO](/fr/a11yto/).

**Présentatrice :** Daniela Kubesch

## Daniela Kubesch

Daniela Kubesch est une ingénieure en accessibilité avec une formation en ingénierie Web et en conception inclusive.

### Que sont les superpositions d'accessibilité ?

- **Définition** : Les superpositions d'accessibilité sont des outils logiciels ajoutés aux sites Web pour les rendre plus accessibles aux personnes ayant des limitations. Elles incluent souvent des options pour agrandir le texte, ajuster le contraste des couleurs, lire le texte à haute voix, et plus encore, en utilisant parfois l'IA pour corriger automatiquement les problèmes d'accessibilité.
- **Facilité de mise en œuvre** : Ces superpositions sont commercialisées comme une solution rapide, ne nécessitant qu'une ligne de JavaScript pour être installées, ce qui les rend attrayantes pour les propriétaires de sites cherchant à se conformer aux normes.

### Aperçu de la recherche :

#### Conception de l’étude :

- Daniela Kubesch a mené une étude impliquant 21 participants ayant des déficiences visuelles, y compris des utilisateurs aveugles, pour évaluer la convivialité et l’efficacité des superpositions d'accessibilité.
- L’étude comprenait une évaluation technique par rapport aux [normes WCAG 2.1](https://www.w3.org/Translations/WCAG21-fr/) et des tests utilisateur directs, fournissant des informations quantitatives et qualitatives.

#### Résultats :

Les superpositions d'accessibilité, dans leur état actuel, ne tiennent pas pleinement leurs promesses et créent souvent de nouveaux problèmes de convivialité sans résoudre les obstacles existants.

### Conclusions principales :

#### Améliorations limitées :

- Les superpositions testées ont réussi à corriger automatiquement un nombre limité de violations des WCAG et ont même introduit de nouveaux problèmes, notamment en raison de l’utilisation incorrecte des [rôles ARIA <small>Seulement disponible en anglais</small>](https://www.w3.org/TR/wai-aria-1.1/) et de la génération de titres confus.
- De nombreux participants ont trouvé les superpositions difficiles à identifier et à utiliser, certains ne reconnaissant même pas leur présence.

#### Problèmes spécifiques identifiés :

- **Gestion du focus** : Certaines superpositions n'ont pas géré correctement le focus, créant de la confusion pour les utilisateurs de lecteurs d'écran.
- **Structure logique des titres** : Les superpositions ont parfois transformé à tort le texte en gras en titres, perturbant ainsi la logique du contenu et créant des structures trompeuses.
- **Descriptions d’images** : Les descriptions générées automatiquement étaient souvent inexactes, comme le mauvais étiquetage des images, ce qui pouvait dérouter davantage les utilisateurs.

#### Utilisabilité et expérience utilisateur :

- **Utilisabilité générale** : L’étude a montré une diminution de l’utilisabilité lorsque les participants interagissaient davantage avec les superpositions, ceux qui ne les utilisaient pas du tout rapportant une meilleure expérience.
- **Retour d’expérience varié** : Certains utilisateurs ont apprécié la clarté supplémentaire apportée par les superpositions sur certains éléments, tandis que d'autres ont trouvé le texte ajouté inutile ou intrusif, ce qui souligne la difficulté de répondre aux besoins diversifiés des utilisateurs avec une solution unique.

### Principes directeurs pour aller de l'avant :

1. **Ne pas prioriser l’expérience de certains utilisateurs au détriment d’autres** :
   - Les correctifs apportés par les superpositions ne doivent pas créer de nouveaux obstacles pour d’autres utilisateurs.
   - La résolution d'un problème ne doit pas dégrader l'expérience pour ceux qui utilisent différentes technologies d'assistance.
2. **Rien sur nous sans nous** :
   - Les utilisateurs ayant des limitations doivent être impliqués dans le développement et la conception des superpositions pour que leurs besoins réels soient satisfaits. Voir le principe [« Rien sur nous sans nous » <small>Seulement disponible en anglais</small>](https://en.wikipedia.org/wiki/Nothing_About_Us_Without_Us) pour en savoir plus sur cette initiative.
   - L’intégration des retours des utilisateurs ciblés est cruciale pour créer des solutions efficaces.
3. **Engager des discussions interdisciplinaires** :
   - Le débat autour des superpositions ne doit pas se faire de manière isolée, mais inclure des perspectives juridiques, sociales et techniques.
   - Des progrès efficaces en matière d'accessibilité nécessitent une collaboration entre disciplines pour s'attaquer aux barrières systémiques qui rendent le Web inaccessible.

### Pourquoi certains utilisateurs soutiennent-ils les superpositions malgré les problèmes ?

- **Biais de réponse positive** : Les participants dans des études non anonymes ont tendance à évaluer les expériences plus positivement.
- **Désir de meilleures solutions** : De nombreux utilisateurs restent optimistes quant à l'amélioration future des superpositions et sont ouverts à explorer de nouveaux outils promettant une accessibilité accrue.
- **Désespoir en matière d'accessibilité** : Compte tenu de l'inaccessibilité généralisée du Web, les utilisateurs voient parfois les superpositions comme un moindre mal par rapport à des sites complètement inaccessibles.

### Conclusion :

- Les superpositions d'accessibilité, dans leur forme actuelle, agissent souvent comme des « prothèses numériques » — des solutions rapides qui ne répondent pas aux besoins sous-jacents en matière d'accessibilité.
- Pour réellement améliorer l'accessibilité du Web, les superpositions nécessitent des améliorations significatives, des tests plus rigoureux et une intégration plus profonde des retours des utilisateurs.
- La communauté devrait rester engagée dans les discussions sur les superpositions tout en continuant à promouvoir des sites Web mieux conçus qui ne reposent pas uniquement sur des outils supplémentaires.

### Ressources :

- [A11yphant <small>Seulement disponible en anglais</small>](https://a11yphant.com) - Projet de Daniela, une plateforme en ligne offrant une formation gratuite en accessibilité Web pour les développeurs.
- [Overlay Fact Sheet <small>Seulement disponible en anglais</small>](https://overlayfactsheet.com/en/) - Un site dédié à l'éducation des utilisateurs sur les limites des superpositions d'accessibilité.
