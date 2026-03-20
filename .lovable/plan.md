

# Ajouter une section Projects

## Constat

Le fichier `Index.tsx` contient actuellement : About → Experience → Education → Writing → Footer. Il n'y a jamais eu de section "Projects" dans le code — la mémoire du projet la mentionne comme prévue mais elle n'a pas encore été implémentée.

## Plan

1. **Ajouter une section "Projects"** entre Education et Writing dans `Index.tsx`, en réutilisant le même style timeline Karpathy (ou un format liste simple selon ton choix).

2. **Contenu** : comme tu n'as pas encore partagé tes projets, deux options :
   - Je crée la section avec du contenu placeholder que tu modifieras ensuite
   - Tu me donnes la liste de tes projets (nom, description, lien éventuel) et je les intègre directement

## Détails techniques

- Modification unique de `src/pages/Index.tsx`
- Ajout d'une nouvelle `<section>` avec `<hr>` entre Education (ligne 147) et Writing (ligne 151)
- Réutilisation du composant `TimelineItem` existant ou création d'un composant `ProjectItem` simple (titre + description + lien)

