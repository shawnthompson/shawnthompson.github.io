---
title: "Decoding the Impact: Accessibility Overlays Through a Scientific Lens"
description: This session explores the effectiveness and limitations of accessibility overlays, with insights from recent academic research and technical evaluations.
otherLangTitle: "Décoder l'impact : les superpositions d'accessibilité à travers une lentille scientifique"
---

<p lang="fr">Lire cette page en français : <a hreflang="fr" href="/fr/a11yto/{{otherLangTitle | slugify }}">{{otherLangTitle}}</a></p>

Back to [a11yTO Conference Experience](/a11yto/) page.

**Presenter:** Daniela Kubesch

## Daniela Kubesch

Daniela Kubesch is an accessibility engineer with a background in web engineering and inclusive design.

### What Are Accessibility Overlays?

- **Definition**: Accessibility overlays are software tools added to websites to make them more accessible for people with impairments. They often include options for enlarging text, adjusting color contrast, reading text aloud, and more, sometimes leveraging AI to automatically fix accessibility issues.
- **Ease of Implementation**: These overlays are marketed as a quick solution, requiring just a line of JavaScript to install, making them appealing for website owners seeking compliance.

### Research Overview:

#### Study Design:

- Daniela Kubesch conducted a study involving 21 participants with visual impairments, including blind users, to evaluate the usability and effectiveness of accessibility overlays.
- The study included a technical evaluation against [WCAG 2.1 standards](https://www.w3.org/TR/WCAG21/) and direct user testing, providing both quantitative and qualitative insights.

#### Results:

Accessibility overlays in their current state do not fully deliver on their promises, often creating new usability issues and failing to address existing barriers.

### Key Findings:

#### Limited Improvements:

- The overlays tested managed to fix only a small number of WCAG violations automatically and even introduced new issues, particularly through improper use of [ARIA roles](https://www.w3.org/TR/wai-aria-1.1/) and generating confusing headings.
- Many participants found overlays difficult to identify and use, with some not recognizing their presence at all.

#### Specific Issues Identified:

- **Focus Management**: Some overlays failed to manage focus correctly, creating confusion for users relying on screen readers.
- **Logical Heading Structure**: Overlays sometimes incorrectly turned bold text into headings, disrupting the logical flow of content and creating misleading structures.
- **Image Descriptions**: Automatically generated descriptions were often inaccurate, like mislabeling images entirely, which could further confuse users.

#### Usability and User Experience:

- **General Usability**: The study showed a decrease in usability when participants interacted more with the overlays, with those who did not use overlays at all reporting a better experience.
- **Varied User Feedback**: Some users appreciated the additional clarity that overlays provided for certain elements, while others found the extra text unnecessary or intrusive, highlighting the difficulty in serving diverse user needs with a one-size-fits-all solution.

### Guiding Principles for Moving Forward:

1. **Do Not Prioritize Some Users’ Experience Over Others**:
   - Fixes provided by overlays should not come at the cost of creating new barriers for other users.
   - Addressing one issue should not degrade the experience for others who might rely on different assistive technologies.
2. **Nothing About Us Without Us**:
   - Users with impairments must be involved in the development and design of overlays to ensure their real needs are met. See the [“Nothing About Us Without Us” principle](https://en.wikipedia.org/wiki/Nothing_About_Us_Without_Us) for background on this advocacy.
   - Incorporating feedback from the intended user base is crucial for creating effective solutions.
3. **Engage in Cross-Disciplinary Discussions**:
   - The debate around overlays should not happen in isolation but include insights from legal, social, and technical fields.
   - Effective progress in accessibility requires collaboration across disciplines to address the deeper systemic barriers that cause inaccessibility.

### Why Do Some Users Support Overlays Despite the Issues?

- **Positive Response Bias**: Participants in non-anonymous studies tend to rate experiences more positively.
- **Desire for Better Solutions**: Many users remain optimistic that overlays could improve in the future, and they are eager to explore new tools that promise increased accessibility.
- **Accessibility Desperation**: Given the widespread inaccessibility of the web, users sometimes see overlays as a lesser evil compared to completely inaccessible sites.

### Conclusion:

- Accessibility overlays, in their current form, often act as "disability dongles"—quick fixes that do not address the underlying accessibility needs.
- To truly enhance web accessibility, overlays need significant improvements, more rigorous testing, and a deeper integration of user feedback.
- The community should remain engaged in discussions about overlays while continuing to advocate for better-designed websites that do not rely solely on add-on tools.

### Resources:

- [A11yphant](https://a11yphant.com) - Daniela’s project, an online platform offering free web accessibility training for developers.
- [Overlay Fact Sheet](https://overlayfactsheet.com/en/) - A website dedicated to educating users on the limitations of accessibility overlays.
