const { first, last, concatStrings, chunk } = require('./utils');

describe('first()', () => {
  test('retourne le premier élément si n non précisé', () => {
    expect(first([1, 2, 3])).toBe(1);
  });

  test('retourne [] si array est null ou undefined', () => {
    expect(first(null)).toEqual([]);
    expect(first(undefined)).toEqual([]);
  });

  test('renvoie [] si n <= 0', () => {
    expect(first([1,2,3], 0)).toEqual([]);
    expect(first([1,2,3], -2)).toEqual([]);
  });

  test('renvoie les n premiers éléments', () => {
    expect(first([1,2,3,4], 2)).toEqual([1,2]);
    expect(first([1,2], 5)).toEqual([1,2]);
  });

  test('retourne [] si array vide', () => {
    expect(first([], 3)).toEqual([]);
  });

  test('avec n=1 retourne tableau avec premier élément', () => {
    expect(first([10,20,30], 1)).toEqual([10]);
  });
});

describe('last()', () => {
  test('retourne le dernier élément si n non précisé', () => {
    expect(last([1, 2, 3])).toBe(3);
  });

  test('retourne undefined si array est null', () => {
    expect(last(null)).toBeUndefined();
  });

  test('renvoie [] si n <= 0', () => {
    expect(last([1,2,3], 0)).toEqual([]);
    expect(last([1,2,3], -1)).toEqual([]);
  });

  test('renvoie les n derniers éléments', () => {
    expect(last([1,2,3,4], 2)).toEqual([3,4]);
    expect(last([1,2], 5)).toEqual([1,2]);
  });

  test('tableau vide retourne undefined', () => {
    expect(last([])).toBeUndefined();
  });

  test('avec n=1 retourne tableau avec dernier élément', () => {
    expect(last([10,20,30], 1)).toEqual([30]);
  });

  test('avec tableau à un seul élément', () => {
    expect(last([42])).toBe(42);
    expect(last([42], 1)).toEqual([42]);
  });
});

describe('concatStrings()', () => {
  test('joint avec la virgule par défaut', () => {
    expect(concatStrings(["Red","Green","White","Black"])).toBe('Red,Green,White,Black');
  });

  test('join avec un séparateur vide', () => {
    expect(concatStrings(["Red","Green"], '')).toBe('RedGreen');
  });

  test('join avec un espace', () => {
    expect(concatStrings(["Hello","World"], ' ')).toBe('Hello World');
  });

  test('convertit les éléments non-string en string', () => {
    expect(concatStrings([1, true, null], '-')).toBe('1-true-null');
  });

  test('retourne "" si ce n\'est pas un tableau', () => {
    expect(concatStrings(null)).toBe('');
    expect(concatStrings(undefined)).toBe('');
  });

  test('tableau vide retourne chaîne vide', () => {
    expect(concatStrings([])).toBe('');
  });

  test('fonctionne avec un seul élément', () => {
    expect(concatStrings(['Solo'])).toBe('Solo');
  });

  test('séparateur personnalisé', () => {
    expect(concatStrings(['a','b','c'], '|')).toBe('a|b|c');
  });
});

describe('chunk()', () => {
  test('divise le tableau en morceaux de taille size', () => {
    expect(chunk([1,2,3,4,5], 2)).toEqual([[1,2],[3,4],[5]]);
  });

  test('size <= 0 renvoie []', () => {
    expect(chunk([1,2,3], 0)).toEqual([]);
    expect(chunk([1,2,3], -1)).toEqual([]);
  });

  test('si array pas tableau -> []', () => {
    expect(chunk(null, 2)).toEqual([]);
    expect(chunk(undefined, 2)).toEqual([]);
  });

  test('si size > length renvoie un seul sous-tableau', () => {
    expect(chunk([1,2], 5)).toEqual([[1,2]]);
  });

  test('tableau vide retourne []', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  test('size non numérique retourne []', () => {
    expect(chunk([1,2,3], 'abc')).toEqual([]);
    expect(chunk([1,2,3], null)).toEqual([]);
  });

  test('divise parfaitement sans reste', () => {
    expect(chunk([1,2,3,4], 2)).toEqual([[1,2],[3,4]]);
  });

  test('avec size=1 chaque élément dans son propre tableau', () => {
    expect(chunk([1,2,3], 1)).toEqual([[1],[2],[3]]);
  });

  test('avec size égal à la longueur du tableau', () => {
    expect(chunk([1,2,3], 3)).toEqual([[1,2,3]]);
  });
});