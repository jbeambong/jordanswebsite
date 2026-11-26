# Accueil en menu + une page par section

## Ce qui change pour toi
La page d'accueil garde ta photo, ton nom, ton sous-titre, tes réseaux et ton court texte « About ». En dessous, un menu liste les sections. Chaque section s'ouvre sur sa propre page, avec un lien « ← Retour » et le bouton EN/FR.

Pages créées :
- /experience : Expérience et Formation (frise chronologique entièrement dépliée)
- /portfolio : grille de vignettes avec les filtres
- /writing : liste des articles
- /recommendations : texte et lien Notion
- /music : texte et lien Spotify

Les pages de projets et d'articles déjà en place restent identiques. Leur lien « Retour » mènera vers /portfolio ou /writing.

## 3 propositions visuelles pour le menu

**A. Liste « Paul Graham »** (recommandée, la plus fidèle à l'esprit actuel)
```text
Experience & Education      →
Portfolio                   →
Writing                     →
Recommendations             →
Music                       →
```
Une section par ligne, en serif, séparée par un trait fin. La flèche glisse un peu au survol.

**B. Liste annotée**
Comme la proposition A, avec une courte ligne grise sous chaque titre (ex. « 12 projets en marketing, événementiel, finance… »). Chaque section est plus facile à comprendre, mais la page est un peu plus chargée.

**C. Cartes douces**
Une grille de 2 colonnes avec des cartes arrondies et une ombre légère, dans le style des vignettes du portfolio, avec une petite icône. Le rendu est plus visuel et moins « texte ».

Par défaut, je construis la A. Tu peux choisir B ou C avant de valider.

## Détails techniques
- Créer un composant partagé `PageShell` : barre retour, bouton de langue et largeur max.
- Déplacer les blocs de `Index.tsx` vers `pages/Experience.tsx`, `Portfolio.tsx`, `Writing.tsx`, `Recommendations.tsx` et `Music.tsx`. Ajouter les routes dans `App.tsx`.
- Ajouter dans `translations.ts` les libellés EN/FR du menu (et les descriptions pour B).
- Faire pointer les liens retour de `ProjectDetail` et `BlogPost` vers /portfolio et /writing.
