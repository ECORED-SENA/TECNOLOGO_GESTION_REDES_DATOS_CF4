<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bloque-texto-a.color-acento-contenido.p-md-4.mb-5 
      .row.m-0.align-items-center.justify-content-between.p-4
        .col-lg-3.mb-4.mb-lg-0
          img(src='@/assets/curso/i-f1.svg' alt='Imagen 4 computadores')
        .col-lg-9
          .bloque-texto-a__texto.p-5
            p La tecnología VoIP tiene la ventaja de poder comunicar voz mediante Internet, superando así a la telefonía convencional; además, genera procesos más rentables, especialmente para las grandes empresas, con este tipo de flujo de información. Para que la voz se pueda transmitir a través de la red de forma correcta, es importante establecer los protocolos, señalización y los codificadores necesarios para la transmisión, los cuales deben basarse en los estándares y normas internacionales.
    .cajon.color-acento-contenido.p-4.mb-4
      p.mb-0 Para la elaboración del componente, es importante especificar que se abordaron varios autores conocidos en el campo de la VoIP; se referencian en la bibliografía aquellos de quienes se tomaron los conceptos y ejemplos; respetando al igual que ellos, la recopilación y producción de material para el uso en educación. Es preciso señalar que el conocimiento es social y, por lo tanto, es para usarlo; cuando se investiga, especialmente en el campo de la educación, se busca aportar a la formación de quienes necesitan adquirir el conocimiento. Se espera que este documento sea útil para todos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de la temática.















</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
