---
title: "Built-in Accessibility: Blessing or Curse?"
description: This session examines how 'built-in' accessibility features in standards, browser functionality, and design system components can either be a blessing or a curse. It explores how these features can remove barriers at scale.
otherLangTitle: "Accessibilité intégrée : bénédiction ou malédiction ?"
---

<p lang="fr">Lire cette page en français : <a hreflang="fr" href="/fr/a11yto/{{otherLangTitle | slugify }}">{{otherLangTitle}}</a></p>

Back to [a11yTO Conference Experience](/a11yto/) page.

**Presenter:** Hidde de Vries

## The Concept of "Built-in" Accessibility:

### Balancing Ease and Effectiveness:

- Built-in accessibility features in web standards, browser functionality, and design systems can make implementing accessibility easier, but they aren't a cure-all. They require careful consideration and ongoing effort.
- Features like alt text for images and semantic HTML elements (e.g., headings, buttons) provide foundational accessibility tools directly in the markup, helping reduce barriers for users with disabilities.

## Challenges of Relying Solely on Built-in Features:

### Incomplete Solutions:

- Many built-in features, like HTML semantics, provide a foundation but not a complete solution. For example, while the [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) tag supports captions, the overall user experience may still require additional adjustments.
- Real-world issues like low color contrast or poor focus management often require manual adjustments beyond what's automatically provided by standards.

### Usability vs. Technical Accessibility:

- Even when features technically meet [WCAG 2.1 accessibility standards](https://www.w3.org/TR/WCAG21/), they might not be truly usable for all users. For example, elements like tabs may be keyboard-navigable but still confusing without proper user testing.

## Practical Applications of Built-in Accessibility:

### Browser and Design System Enhancements:

#### Popovers and Semantics:

Newer features like the [`<popover>` attribute in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover) come with built-in accessibility roles, but they still require thoughtful implementation to ensure user-friendliness.

#### Design Systems:

Components in design systems can embed accessibility best practices, making it easier for developers to build accessible interfaces. However, the risk lies in replicating flawed patterns across multiple projects. For an example, check out the [NL Design System on GitHub](https://github.com/nl-design-system), which is used to standardize accessible design practices in the Dutch government.

#### Automated Testing and Validation:

Tools like [PostCSS plugins](https://github.com/postcss/postcss#plugins) can help ensure consistent use of accessibility features, such as ensuring text remains readable at different zoom levels or with varied color contrasts.

## Lessons from the Dutch Government's NL Design System:

### Collaborative Approach:

- The [NL Design System](https://github.com/nl-design-system) focuses on bringing together various government entities to standardize accessibility practices across ministries, cities, and public services.
- By creating a collective process that includes user testing and accessibility audits, the team ensures that the guidance remains practical and based on real-world use.

### Open Source Philosophy:

- Being open source allows for more feedback and collaboration, making it easier to refine and improve accessibility features. It also helps standardize approaches across different projects, reducing duplication of effort.

## Building a Stronger Accessibility Foundation:

### Focus on Usability:

- Design systems and built-in features should not just meet technical standards but also aim for real-world usability. This involves testing with users with disabilities to identify and address gaps.

### Continuous Improvement:

- Accessibility isn't a one-time fix—it requires ongoing adjustments and education for all stakeholders, including developers, designers, and content creators.
- Clear documentation and guidelines are crucial to help teams understand how to implement accessibility correctly and consistently.

## Resources:

- Learn More: [Hidde de Vries's Slides](https://talks.hiddedevries.nl/sHyKQE/built-in-accessibility-blessing-or-curse) - Slides from the session.
