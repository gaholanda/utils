/*
  Normaliza uma string e retira os caracteres especiais
*/

const normalizeString = (_str) => {
  if (typeof _str !== 'undefined') {
    return _str
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s\s+/, ' ')
      .toLowerCase();
  }
  return false;
};

module.exports = normalizeString