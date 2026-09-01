# Ajout de la balise Metricool

## Objectif
Connecter le site à Metricool en intégrant la balise JavaScript fournie.

## Changement prévu
Dans `index.html`, insérer la balise Metricool juste avant la fermeture de `</head>` afin de charger le tracker sur toutes les pages.

## Balise à intégrer
```html
<script>function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"3cd248a9e5dd4e6d1eb630eeaf140e9f"})});</script>
```

## Vérification
- Le script sera présent dans le `<head>` du fichier généré.
- Aucun autre changement n'est requis côté code.
