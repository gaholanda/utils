var categories = sdk.component(
  'categories',
  '#categories', {
    loadCategoryOnClick:false,
    categorySlug:InbentaConfig.slug,
    length: 100,
    // Adicionar a propriedade openContentOnClick
    contents:{
        openContentOnClick:false
    }
});