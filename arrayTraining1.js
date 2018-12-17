const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornIn1500 = inventors.filter(function(inventor) {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return inventor;
  }
});
console.log('Exo1 : ');
console.log(bornIn1500);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const inventorsName = inventors.map(function(inventor) {
  return [inventor.first, inventor.last];
});
console.log('Exo2 : ');
console.log(inventorsName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const oldestToYoungest = inventors.sort(function(year1, year2) {
  return year1.year - year2.year;
});
console.log('Exo3 : ');
console.log(oldestToYoungest);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const howManyYears = inventors.reduce(function(acc, value, index) {
  const nbYears = value.passed - value.year;
  value.live = nbYears;
  return acc;
}, inventors);
console.log('Exo4 : ');
console.log(inventors);

// 5. Sort the inventors by years lived
const sortByNbYearsLived = inventors.sort(function(year1, year2) {
  return year1.live - year2.live;
});
console.log('Exo5 : ');
console.log(sortByNbYearsLived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in
// the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const boulevards = [
  'Boulevards of Paris',
  'City walls of Paris',
  'Thiers wall',
  'Wall of Charles V',
  'Wall of Philip II Augustus',
  'City gates of Paris',
  "Haussmann's renovation of Paris",
  'Boulevards of the Marshals',
  'Boulevard Auguste-Blanqui',
  'Boulevard Barbès',
  'Boulevard Beaumarchais',
  "Boulevard de l'Amiral-Bruix",
  'Boulevard des Capucines',
  'Boulevard de la Chapelle',
  'Boulevard de Clichy',
  'Boulevard du Crime',
  'Boulevard Haussmann',
  "Boulevard de l'Hôpital",
  'Boulevard des Italiens',
  'Boulevard de la Madeleine',
  'Boulevard de Magenta',
  'Boulevard Montmartre',
  'Boulevard du Montparnasse',
  'Boulevard Raspail',
  'Boulevard Richard-Lenoir',
  'Boulevard de Rochechouart',
  'Boulevard Saint-Germain',
  'Boulevard Saint-Michel',
  'Boulevard de Sébastopol',
  'Boulevard de Strasbourg',
  'Boulevard du Temple',
  'Boulevard Voltaire',
  'Boulevard de la Zone',
];
const containDe = boulevards.filter(function(bld) {
  return bld.search('de') > -1;
});
console.log('Exo 6 : ');
console.log(containDe);

// 7. sort Exercise
// Sort the people alphabetically by last name
const people = [
  'Beck, Glenn',
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Benchley, Robert',
  'Benenson, Peter',
  'Ben-Gurion, David',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'Berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black, Elk',
  'Blair, Robert',
  'Blair, Tony',
  'Blake, William',
];

const sortByLastName = people.sort(function(name1, name2) {
  return name1 > name2 ? 1 : -1;
});
console.log('Exo 7 : ');
console.log(sortByLastName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];

const instances = data.reduce(function(acc, value) {
  if (acc[value]) {
    acc[value] = acc[value] + 1;
  } else {
    acc[value] = 1;
  }
  return acc;
}, {});

console.log('Exo 8 : ');
console.log(instances);
