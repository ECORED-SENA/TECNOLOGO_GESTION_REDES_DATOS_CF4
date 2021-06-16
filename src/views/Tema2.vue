<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Configuración
    p Teniendo como referentes diferentes manuales de servicios de VoIP, se deben tener en cuenta los siguientes aspectos para la configuración:
    Separador
    .titulo-segundo
      h2 2.1.	Cálculo del número de líneas de voz
    .bloque-texto-a.color-acento-contenido.p-md-4.mb-5 
      .row.m-0.align-items-center.justify-content-between.p-4
        .col-lg-4.mb-4.mb-lg-0
          img(src='@/assets/curso/t2/f1.svg' alt='Imagen relacionada')
        .col-lg-8
          .bloque-texto-a__texto.p-5
            p Antes de comenzar con la configuración de la red, es necesario saber cuántas líneas dedicadas a voz se necesitan, para lo cual se calcula el ancho de banda disponible; el número de agentes que van a utilizar el sistema; y determinar o escoger el códec de audio que se va a utilizar. Los códecs utilizados para la compresión de la voz permiten comprimir el número de las muestras que se envían a través de la red, haciendo que se use menos ancho de banda; esto es posible porque al tomar una muestra de voz humana 8000 veces en un segundo produce muchas muestras que son muy idénticas unas con otras, es decir que muchas de las muestras tomadas sonarán igual. En la siguiente tabla, se pueden evidenciar los parámetros para varios de estos códecs que se pueden utilizar:
    .titulo-sexto.color-acento-contenido
      //h5 
      span Características de códecs de voz
    .tabla-a.color-acento-botones.mb-5 
      table.text-center
        thead
          tr
            th.texto-acento-contenido Códec	
            th.texto-acento-contenido Ancho de banda
            th.texto-acento-contenido MOS (calidad del códec)
        tbody
          tr
            td G.711
            td 64 Kbps
            td 4.1
          tr
            td Internet Low Bitrate Codec (iLBC)
            td 15.2 Kbps
            td 4.1 
          tr
            td G.729
            td 8 Kbps
            td 3.92
          tr
            td G.726
            td 32 Kbps
            td 3.85
          tr
            td G.729a
            td 8 Kbps
            td 3.7
          tr
            td G.728
            td 16 Kbps
            td 3.61
    .row.align-items-center.mb-5
      .col-lg-6
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Al momento de seleccionar un códec de voz para ser usado en una red, se debe tener en cuenta lo siguiente:
        .col-lg-10.mx-auto
          ul.lista-ul--separador
            li 
              i.fas.fa-play.texto-acento-contenido.me-4
              | Soporta todos los dispositivos VoIP de la red.
            li 
              i.fas.fa-play.texto-acento-contenido.me-4
              | Cuántos recursos de procesadores digitales de señales (DSP) son tomados por el uso del códec de audio.
            li 
              i.fas.fa-play.texto-acento-contenido.me-4
              | Ofrece niveles de calidad satisfactorios para todos los tipos de audio de la red.
            li 
              i.fas.fa-play.texto-acento-contenido.me-4
              | Cuánto ancho de banda consume el códec.
            li 
              i.fas.fa-play.texto-acento-contenido.me-4
              | Cómo maneja el códec la pérdida de los paquetes.
            li 
              i.fas.fa-play.texto-acento-contenido.me-4
              | Cómo soporta múltiples muestras de diferentes tamaños.
      .col-lg-6
        img(src='@/assets/curso/t2/f2.svg' alt='Imagen relacionada').py-4
    h3 Obtención del ancho de banda
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fondo-casi-blanco")
      .row(titulo="Titulo item 1")
        .col-md-6.mb-4.mb-md-0
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        .col-md-6
          figure
            img(src='@/assets/curso/t2/f2.svg' alt='Imagen relacionada').py-4
            figcaption Leyenda de la imagen
      .row(titulo="Titulo item 1")
        .col-md-6.mb-4.mb-md-0
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        .col-md-6
          figure
            img(src='@/assets/curso/t2/f2.svg' alt='Imagen relacionada').py-4
            figcaption Leyenda de la imagen
        .col-md-6.mb-4.mb-md-0
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        .col-md-6
          figure
            img(src='@/assets/curso/t2/f2.svg' alt='Imagen relacionada').py-4
            figcaption Leyenda de la imagen
      .row(titulo="Titulo item 1")
        .col-md-6.mb-4.mb-md-0
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        .col-md-6
          figure
            img(src='@/assets/curso/t2/f2.svg' alt='Imagen relacionada').py-4
            figcaption Leyenda de la imagen

        














</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
