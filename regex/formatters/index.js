/*
  Formata variados números
  Autor: @brunomacedo
*/
const formatNumber = (
  _number,
  _locale = 'pt-BR',
  _format = 'BRL',
  _currency = 'currency', // decimal, currency
) => (
  new Intl.NumberFormat(_locale, {
    style: _currency,
    currency: _format,
    minimumFractionDigits: 2,
  })).format(parseFloat(_number) || 0);

const formatPhone = _value => (
  _value
    .toString()
    .trim()
    .toUpperCase()
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{2})(\d)/g, '($1) $2')
    .replace(/(\d)(\d{4})$/, '$1-$2')
);

module.exports = { formatNumber, formatPhone }
