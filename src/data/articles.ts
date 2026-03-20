export interface Article {
  title: string;
  slug: string;
  date: string;
  content: string;
  published: boolean;
}

export const articles: Article[] = [
  {
    title: "On Building Things",
    slug: "on-building-things",
    date: "2025-01",
    content: `There's something deeply satisfying about building things from scratch. Not because it's efficient — it rarely is — but because the act of creation forces you to understand every layer of the problem.

When you use someone else's solution, you get the answer but miss the lesson. When you build your own, you get both.

The best builders I know share this trait: they've built bad versions of everything. Bad databases, bad compilers, bad websites. Each one taught them something no tutorial could.

So if you're wondering whether to use the library or write it yourself — for learning, always write it yourself. For shipping, use the library. Know which mode you're in.`,
    published: true,
  },
  {
    title: "Vous ne réussirez jamais en jouant selon les règles, voici pourquoi",
    slug: "vous-ne-reussirez-jamais-en-jouant-selon-les-regles",
    date: "2023-07",
    externalUrl: "https://www.linkedin.com/pulse/vous-ne-r%C3%A9ussirez-jamais-en-jouant-selon-les-r%C3%A8gles-voici-b%C3%A9a-mbong/",
    content: `La vie sourit à ceux qui suivent les règles mais fait de l'œil à ceux qui les contournent.

Si on considère que la vie est un jeu, on admet que des règles préétablies ont été écrites pour nous permettre de terminer la partie. Mais ces configurations, aussi belles soient-elles sur le papier, ne le sont plus tellement quand vous constatez que vous avez tiré des mauvaises cartes...et que vous réalisez que vous pouvez perdre au détriment des autres joueurs.

Le problème dans tout ça, c'est que si la vie est un jeu, le jeu c'est la vie. Notre vie. Le temps passe et nos opportunités diminuent. Pour la mener avec le moins de regrets possible et changer le paradigme, une seule solution : contester l'intégrité du jeu, renverser le plateau et adopter une mentalité de "tricheur".


Jouer selon les règles ne vous donne aucun avantage compétitif

Essayez de vous rappeler la dernière fois que vous avez suivi les règles et que le résultat de ce comportement a été transcendant. Vous avez un moment en tête qui vous revient ? Moi, non.

Au mieux, une attitude de "bon élève" vous garantit un résultat, mais uniquement un résultat attendu, prévisible :

• s'entraîner tous les jours à la salle et manger assez de protéines → gain de muscle
• renouveler sa carte d'identité à la mairie → nouvelle carte d'identité

Mais la notion de monde pur et parfait n'existe qu'en économie.
Dans la réalité, jouer selon les règles n'apporte presque jamais un résultat exceptionnel :

• si vous travaillez dur au travail, une promotion ou une considération de votre employeur n'est jamais garantie
• si vous utilisez votre réseau actuel pour arriver à un but, vous n'avez aucune garantie de l'atteindre

Et c'est tant mieux, car on ne raisonne plus en mode binaire (0 ou 1). À la place, il y a une zone d'incertitude sur laquelle vous devez tout miser.

La zone de "triche".

On nous a appris dès le plus jeune âge que tricher était mauvais. C'est vrai, mais là encore, l'environnement quand on est jeune est binaire, notamment à l'école : le cadre est clair, si vous avez de bonnes notes vous passez, sinon vous échouez. Tout dépend de vos notes et de votre comportement (causalités internes).

Dans le monde adulte, beaucoup plus de paramètres entrent en compte. Des paramètres que vous ne pouvez pas contrôler : l'humeur de votre Manager, la tendance du marché etc. Et là, tout de suite, tout devient plus difficile... ou pas, si vous avez en votre possession des armes que d'autres n'ont pas.

Les auteurs Ash Ali et Hasan Kubba qualifient d'"unfair advantages" les facteurs suivants :

1. La richesse : l'accès à des ressources financières, le temps, le soutien familial, l'éducation, etc.
2. L'intelligence et le discernement : la capacité intellectuelle, la créativité, l'éducation et la capacité d'apprendre rapidement. Le discernement, quant à lui, est la capacité de voir des opportunités que les autres ne voient pas.
3. Le réseau : vos relations personnelles et professionnelles.
4. L'emplacement : l'endroit où vous êtes né(e), où vous vivez et les circonstances de votre vie jouent un rôle significatif dans vos opportunités. Le timing, les événements fortuits et les "coups de chance" entrent également dans cette catégorie.
5. Le travail acharné et le talent : la persévérance, la détermination, la discipline et la passion, ainsi que les compétences naturelles ou acquises.

À ces points, j'ajouterais aussi l'origine ethnique. En effet, les gens ont tendance à socialiser et faire du commerce avec les gens qui leur ressemblent. Ce point, tout aussi unfair que les autres cités plus haut, n'en reste pas moins réel.

En utilisant un (ou plusieurs) de ces atouts, vous pouvez lutter à armes égales avec d'autres personnes qui ont été favorisées dans le jeu.

Maintenant, tout n'est pas simple : vous pouvez, dans votre contexte, réaliser que vous n'avez AUCUN des avantages cités plus haut.

Si c'est le cas, il vous reste une arme ultime : l'audace.


L'audace booste vos chances de succès jusqu'à la lune

Quel est le point commun entre Raibed Tahri, Steven Spielberg et Bessie Coleman ?

Dans le très bon livre Forcez votre destin d'Anthony Bourbon, ce dernier écrit que "pour attirer son attention et réussir à venir le rencontrer chez Feed., Raibed s'est fait passer pour un livreur Chronopost, après avoir fait preuve de malice auprès d'une journaliste pour avoir son numéro de téléphone."

Steven Spielberg, quant à lui, était juste un étudiant en cinéma ambitieux avant de devenir l'un des réalisateurs les plus influents d'Hollywood. Il s'est fait passer pour un directeur de production des studios Universal en empruntant un badge de sécurité d'un ami. C'est comme ça qu'il a appris le métier.

Enfin, Bessie Coleman était une pionnière de l'aviation américaine. Née en 1892 au Texas, elle voulait devenir pilote, mais avait un "handicap" de taille dans cette société : c'était une femme noire, ce qui lui interdisait de suivre une formation de pilotage aux États-Unis. Refusant de laisser ces obstacles la freiner, elle a choisi de hacker le système : elle a appris le français et est partie en France pour obtenir son brevet de pilote. En 1921, elle est devenue la première femme noire à détenir une licence de pilote international.

À titre personnel, un de mes amis a "enjolivé" son CV pour obtenir un poste en IT (très bien payé). Malgré sa qualification pour ce poste, il n'avait pas de précédente expérience pro dans ce métier et aucun argument qui jouait en sa faveur. Alors il y est allé au culot et au travail, et une entreprise l'a finalement embauché. Aujourd'hui, il est très content de sa paie — et surtout, son entreprise est très satisfaite de lui. S'il était resté inactif, ça n'aurait aidé personne.

Maintenant, si le point commun évident entre tout ce monde est la magnifique audace dont ils ont fait preuve, une autre similitude existe, un peu plus subtile mais encore plus importante.

Leur démarche a apporté de la valeur à la société.

Steven ? On ne compte plus ses classiques et les émotions qu'il a fait susciter chez des millions de personnes grâce à ses films.
Raibed (et Fatiha) ? Ils nous ont fait découvrir de nouvelles saveurs dont on n'avait pas la moindre idée.
Bessie ? Elle a contribué à montrer que les femmes noires sont tout aussi légitimes et talentueuses que les autres.

L'audace est un outil qui peut servir de rééquilibrage des inégalités, quand on ose l'utiliser.

Qui que vous soyez, il vous est sûrement arrivé d'avoir besoin de hacker le système pour que les choses avancent, autrement dit trouver des moyens créatifs de naviguer dans le système qui sont à la fois légaux et éthiques, mais qui défient les voies traditionnelles.

Et c'est tout à votre honneur si vous partiez avec des handicaps.

Vous devez penser autrement pour survivre dans un contexte où "le monde est méchant", pour reprendre les sages paroles d'un célèbre rappeur francophone ;-).

Mais, est-ce que la fin justifie les moyens pour toute situation ?


Tricher, des limites morales et mentales ?

Il convient de rappeler la définition du mot tricher.

Tricher (Larousse) :
1. Au jeu, enfreindre les règles pour gagner : Tricher aux cartes.
2. Enfreindre certaines règles, certaines conventions explicites ou d'usage en affectant de les respecter : Tricher en affaires.

Pour ma part, je définis tricher comme briser la convention sociale (mais pas la convention éthique). Je ne parle pas de triche dans le sens de voler le stock d'un concurrent ou corrompre un officiel de l'État (la corruption est un autre débat sur lequel je me pencherai dans un prochain article).

La nuance se situe justement ici : tricher, c'est bien, mais seulement pour un jeu à somme positive. Pas un jeu à somme nulle.

Dans un jeu à somme nulle, la victoire de l'un signifie la défaite de l'autre.
Ex : si un ministre décide d'octroyer un marché de voirie urbaine à une entreprise médiocre moyennant un dessous de table généreux, les citoyens seront perdants à long terme.

Mais dans un jeu à somme positive, tous les joueurs peuvent gagner, du moins, finir dans une meilleure situation que celle de départ.
Ex : Uber, en hackant les règles traditionnelles du marché des taxis, a créé un jeu à somme positive en offrant une nouvelle panoplie de services aux consommateurs, tout en laissant les taxis conduire leur clientèle.

Chaque fois qu'on essaye de dépasser le statu quo, c'est comme si la société faisait tout pour nous faire ressentir qu'on brise une convention tacite.

Mais le problème est le suivant : qui l'a écrite, cette convention ?

Selon Marx, les règles de la société sont principalement définies par ceux qui détiennent le pouvoir économique : pour faire court, la bourgeoisie. Il affirme que la bourgeoisie, en tant que classe sociale qui possède les moyens de production, a également le pouvoir de contrôler les lois et les normes sociales. Ces règles sont conçues pour maintenir le statu quo et perpétuer les inégalités de classes.

En gros, des règles existent, mais ce n'est pas pour autant qu'elles sont parfaites. Leur perfection est subjective. Et c'est pour cela qu'il est parfois nécessaire de se rebeller afin d'atteindre des résultats bénéfiques pour tous (sauf bien sûr pour ceux qui ont érigé les règles).

Tricher, c'est refuser d'accepter les limitations imposées par le modèle traditionnel.

Je comprends la culpabilisation qu'on peut ressentir en empruntant d'autres voies ou en utilisant des atouts que d'autres n'ont pas. En particulier quand vous êtes attaché(e) à des principes d'équité et de justice.

Mais d'un autre côté, toutes ces forces, vous êtes dans l'obligation de les utiliser si vous voulez vous différencier ou briser un plafond de verre.

Vous savez pourquoi ? Tout simplement parce que si vous ne le faites pas, les autres, eux, n'hésitent pas une seule seconde. Trop peu de gens ont conscience de la puissance des jeux à somme positive et vous devez prendre ça en compte.

Maintenant que j'ai défini les règles (très ironique)... eh bien, trichons !

Et n'oubliez pas : "Nobody smart plays fair".`,
    published: true,
  },
];
