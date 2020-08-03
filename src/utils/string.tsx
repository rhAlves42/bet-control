export const normalizeUrl = (url: string) => {
  const strAccentsOut = [];
  const accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
  const accentsOut = 'AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz';
  for (let y = 0; y < url.length; y += 1) {
    const accentIdex = accents.indexOf(url[y]);
    if (Number(accentIdex) !== -1) {
      strAccentsOut[y] = accentsOut.substr(accentIdex, 1);
    } else {
      strAccentsOut[y] = url[y];
    }
  }
  const finalUrl = strAccentsOut
    .join('')
    .replace(/ /g, '_')
    .toLowerCase();
  return finalUrl;
};