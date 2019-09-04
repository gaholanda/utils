## Formatters

### formatNumber
Formata valores com ou sem o simbolo de moeda.

```javascript
formatNumber(100) // default "R$ 100,00"

formatNumber(100, 'en-US', 'USD') // "$100.00"

formatNumber(100, 'en-US', 'USD', 'decimal') // "100.00"
```

### formatPhone
Formata número de telefone no padrão brasileiro

```javascript
formatPhone('11909090900') // "(11) 90909-0900"
```


### Autor

[Bruno Macedo](https://github.com/brunomacedo)
