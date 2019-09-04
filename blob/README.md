## Criando arquivos com Blob

Exemplo de função para criar um arquivo.

```javascript
createFile(
    // Elemento do DOM. Obrigatório ser um <a>
    document.querySelector('a'),

    // Conteúdo do arquivo
    'Hello',

    // Nome do arquivo a ser salvo
    'Hello',

    // MIME type do arquivo
    'text/xml',

    // Extensão do arquivo
    '.txt'
    )
```

Ver mais [MIME Types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types)