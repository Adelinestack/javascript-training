// Exercice 1 - Parcours de liste
// A l’aide d’une fonction récursive,
//affichez les éléments d’un tableau d’élément.
const list = [1, 2, 3, 4, 5, 6];

function parcoursListe(listNum) {
  if (listNum.length === 0) {
    return 0;
  } else {
    console.log(listNum.shift());
    parcoursListe(listNum);
  }
}
parcoursListe(list);

// Exercice 2 - Inversion de chaîne de caractère
// A l’aide d’une fonction récursive, inversez le sens d’une chaîne de caractère.
const chaine = 'Bonjour';

function reverse(string) {
  if (string.length === 0) {
    return '';
  } else {
    return (
      string[string.length - 1] +
      reverse(string.substring(0, string.length - 1))
    );
  }
}
console.log(reverse(chaine));

//Exercice 3
// Considérez la structure suivante:
// Arbre
//        1
//      /   \
//     2     3
//    / \   / \
//   4   5 6   7
// Chaque noeud de l’arbre est un objet qui contient
//2 attributs: leftChild et rightChild.
// L’arbre est représenté avec le code suivant.
// Faites une fonction de parcours qui quelque soit le noeud donné,
// affiche la valeur de ses enfants tel que
// browse(node1) affiche 1 2 3 4 5 6 7

const node7 = {
  leftChildren: null,
  rightChildren: null,
  value: 7,
};
const node6 = {
  leftChildren: null,
  rightChildren: null,
  value: 6,
};
const node5 = {
  leftChildren: null,
  rightChildren: null,
  value: 5,
};
const node4 = {
  leftChildren: null,
  rightChildren: null,
  value: 4,
};
const node3 = {
  leftChildren: node6,
  rightChildren: node7,
  value: 3,
};
const node2 = {
  leftChildren: node4,
  rightChildren: node5,
  value: 2,
};
const node1 = {
  leftChildren: node2,
  rightChildren: node3,
  value: 1,
};

function browse(node) {
  if (node.leftChildren === null) {
    return node.value;
  } else {
    return (
      node.value +
      ' ' +
      browse(node.leftChildren) +
      ' ' +
      browse(node.rightChildren)
    );
  }
}
console.log(browse(node2));

//Exercice 6
//Imaginez que vous avez cette structure de données.
//Vous souhaitez maintenant afficher les catégories dans un menu…
//et elles ne sont pas très bien rangées. Vous auriez préféré une
//structure comme celle qui suit :
// {
//   "tech": {
//     "hot_right_now": {},
//     "upcomming_releases": {},
//     "gadgets": {}
//   },
//   "news": {
//     "europe": {},
//     "asia": {},
//     "events": {},
//     "usa": {}
//   },
//   "startups": {
//     "social": {},
//     "funding": {
//       "venture_capital": {},
//       "crowdfunding": {}
//     },
//     "unicorns": {}
//   }
// }

const categories = [
  { name: 'tech', parent: null },
  { name: 'hot_right_now', parent: 'tech' },
  { name: 'upcomming_releases', parent: 'tech' },
  { name: 'gadgets', parent: 'tech' },
  { name: 'news', parent: null },
  { name: 'social', parent: 'startups' },
  { name: 'europe', parent: 'news' },
  { name: 'asia', parent: 'news' },
  { name: 'events', parent: 'news' },
  { name: 'startups', parent: null },
  { name: 'funding', parent: 'startups' },
  { name: 'unicorns', parent: 'startups' },
  { name: 'venture_capital', parent: 'funding' },
  { name: 'crowdfunding', parent: 'funding' },
  { name: 'usa', parent: 'news' },
];
