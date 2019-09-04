categories.$on('categoryId', function (categoryId) {

  var popular = sdk.component(
     'popular',
     '#popular',
     {
       // Adicionar a propriedade categoryId
       categoryId: categoryId,
       contents:{
         openContentOnClick:false,
       },
       labels:{
         POPULAR_TITLE:POPULAR_TITLE,
         RATINGS_INTRODUCTION:RATINGS_INTRODUCTION,
         RATINGS_COMMENT_INTRODUCTION: RATINGS_COMMENT_INTRODUCTION,
         RATINGS_GRETTINGS_TEXT: RATINGS_GRETTINGS_TEXT,
         RATINGS_SUBMIT_COMMENT_BUTTON: RATINGS_SUBMIT_COMMENT_BUTTON
       }
     }
  );

})