export function layoutFix(str: string) {
  type Replacer = {
    [key: string]: string;
  };

  const replacer: Replacer = {
    q: 'й',
    w: 'ц',
    e: 'у',
    r: 'к',
    t: 'е',
    y: 'н',
    u: 'г',
    i: 'ш',
    o: 'щ',
    p: 'з',
    '[': 'х',
    ']': 'ъ',
    a: 'ф',
    s: 'ы',
    d: 'в',
    f: 'а',
    g: 'п',
    h: 'р',
    j: 'о',
    k: 'л',
    l: 'д',
    ';': 'ж',
    "'": 'э',
    z: 'я',
    x: 'ч',
    c: 'с',
    v: 'м',
    b: 'и',
    n: 'т',
    m: 'ь',
    ',': 'б',
    '.': 'ю',
    '/': '.',
  };

  let replace = '';

  for (let i = 0; i < str.length; i += 1) {
    if (replacer[str[i].toLowerCase()] !== undefined) {
      if (str[i] === str[i].toLowerCase()) {
        replace = replacer[str[i].toLowerCase()];
      } else if (str[i] === str[i].toUpperCase()) {
        replace = replacer[str[i].toLowerCase()].toUpperCase();
      }

      str = str.replace(str[i], replace);
    }
  }

  return str;
}
