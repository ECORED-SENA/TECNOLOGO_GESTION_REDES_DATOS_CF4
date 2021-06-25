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
    #t_2_1.titulo-segundo
      h2 2.1	Cálculo del número de líneas de voz
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
    .tabla-a.color-acento-contenido.mb-5 
      table.text-center
        thead
          tr
            th.texto-acento-contenido.text-center Códec	
            th.texto-acento-contenido.text-center Ancho de banda
            th.texto-acento-contenido.text-center MOS (calidad del códec)
        tbody
          tr
            td.text-center G.711
            td.text-center 64 Kbps
            td.text-center 4.1
          tr
            td.text-center Internet Low Bitrate Codec (iLBC)
            td.text-center 15.2 Kbps
            td.text-center 4.1 
          tr
            td.text-center G.729
            td.text-center 8 Kbps
            td.text-center 3.92
          tr
            td.text-center G.726
            td.text-center 32 Kbps
            td.text-center 3.85
          tr
            td.text-center G.729a
            td.text-center 8 Kbps
            td.text-center 3.7
          tr
            td.text-center G.728
            td.text-center 16 Kbps
            td.text-center 3.61
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
      .row.align-items-center(titulo="Paso 1: determinar el ancho de banda requerido por el códec de audio")
        .col-md-4
          figure
            img(src='@/assets/curso/t2/f3.svg' alt='Imagen relacionada').py-4
        .col-md-8.mb-md-0
          p Para encontrar la cantidad de ancho de banda requerido por el códec de audio, se determina el tamaño (en bytes) del audio contenido en cada paquete. El tamaño de la muestra es un intervalo de tiempo específico del audio; para la mayoría de códecs de audio, el tamaño de la muestra es de 20 milisegundos (ms) por defecto.
          p Se puede usar la siguiente fórmula para determinar el tamaño del paquete de voz:
          .cajon.color-acento-contenido.p-4.mb-4
            .col-lg-11.mx-auto.text-center
              p.codigo.mb-4 Bytes_Por_Paquete= (Tamaño_Muestra * Ancho de Banda_Códec) / 8
              p.mb-0 La variable Tamaño_Muestra en la fórmula se da en segundos y la variable Ancho de Banda_Códec se da en valores de bps.
          .col-lg-10.mx-auto.text-center
            p Si se tiene, por ejemplo, una llamada que usa el códec G.711 con una muestra de tamaño de 20 ms, la fórmula se puede calcular así:
            p.codigo Bytes_Por_Paquete = (0.02seg * 64000 bps) / 8
            p.codigo Bytes_Por_Paquete = 1280 / 8
            p.codigo.mb-4 Bytes_Por_Paquete = 160
            p Aquí otro ejemplo de una llamada usando el códec G.729 con una muestra de tamaño de 20 ms:
            p.codigo Bytes_Por_Paquete = (0.02 * 8000) / 8
            p.codigo Bytes_Por_Paquete = 160 / 8
            p.codigo Bytes_Por_Paquete = 20
      .row.align-items-center(titulo="Paso 2: determinar el encabezado del nivel del modelo OSI del enlace de datos, red y transporte")
        .col-md-4
          figure
            img(src='@/assets/curso/t2/f4.svg' alt='Imagen relacionada').py-4
        .col-md-8.mb-md-0
          p Después de encontrar la cantidad de voz contenida en cada paquete, se calcula a continuación la cantidad de datos contenidos en el encabezado de cada paquete. Los siguientes valores representan la cantidad de bytes del encabezado de cada nivel:
          .col-lg-10.mx-auto.text-center
            p.codigo Ethernet: 20 bytes
            p.codigo Frame Relay: 4–6 bytes
            p.codigo.mb-4 Point-to-Point Protocol (PPP): 6 bytes
            p Para los niveles de transporte y red del modelo OSI, los valores serán:
            p.codigo IP: 20 bytes
            p.codigo UDP: 8 bytes
            p.codigo.mb-4 Real-Time Transport Protocol (RTP): 12 bytes
            p Como todos los paquetes de voz usan RTP, UDP e IP, se pueden entonces usar 40 bytes de datos por paquete en los niveles de red y transporte.
      .row.align-items-center(titulo="Paso 3: sumar otros encabezados")
        .col-md-4
          figure
            img(src='@/assets/curso/t2/f5.svg' alt='Imagen relacionada').py-4
        .col-md-8.mb-md-0
          p Por ejemplo, si se está usando VoIP sobre una conexión VPN, los siguientes son los valores de los encabezados basados en este tipo de VPN:
          .col-lg-10.mx-auto.text-center
            p.codigo GRE/L2TP: 24 bytes
            p.codigo MPLS: 4 bytes
            p.codigo IPsec: 50–57 bytes
      .row.align-items-center(titulo="Paso 4: sumar todo lo obtenido en los pasos 1, 2 y 3")
        .col-md-4
          figure
            img(src='@/assets/curso/t2/f6.svg' alt='Imagen relacionada').py-4
        .col-md-8.mb-md-0
          p En este paso se usa la siguiente fórmula:
          .col-lg-10.mx-auto
            p.codigo.text-center.mb-4 Ancho de Banda_Total = Tamaño_Paquete * Paquetes_Por_Segundo
            p Por ejemplo, si se está usando el códec G.729 con 20 ms de tamaño de la muestra en una red Ethernet, el tamaño del paquete podría darse así:
            p.codigo.text-center 20 bytes (Paso 1)
            p.codigo.text-center 20 bytes (encabezado IP)
            p.codigo.text-center 8 bytes (encabezado UDP)
            p.codigo.text-center 12 bytes (encabezado RTP)
            p.codigo.text-center.mb-3 20 bytes (encabezado | Ethernet)
            h4.text-center.texto-acento-contenido -----------------------
            p.codigo.text-center 80 bytes por paquete
        p Ahora, para encontrar el número de paquetes por segundo, se debe tener en cuenta que cada paquete contiene una muestra de tamaño 20 ms, y como 1 segundo equivale a 1000 milisegundos, se toman:
        .col-lg-8.mx-auto
          p.codigo.text-center.mb-4 1000 ms / 20 ms = 50.
        p Esto indica que se tomarán 50 paquetes por segundo para generar un segundo de audio. Con esta información ya se puede encontrar la cantidad de ancho de banda por cada llamada.
        .col-lg-8.mx-auto.text-center
          p.codigo Ancho de Banda_Total = Tamaño_Paquete * Paquetes_Por_Segundo
          p.codigo Ancho de Banda_Total = 80 bytes por paquete * 50 paquetes por segundo
          p.codigo.mb-4 Ancho de Banda_Total = 4000 bytes por segundo
        p Para encontrar los bits por segundo:
        .col-lg-8.mx-auto
          p.codigo.text-center 4000 * 8 = 32000 bits por segundo (32 kbps)
    h3 Cálculo del número de agentes simultáneos
    .cajon.color-acento-contenido.p-4.mb-4
      p.mb-0 Cada conversación ocupa 32 kbps, por lo que el número de conversaciones simultáneas que puede soportar una línea es igual a la velocidad de subida/32 kbps. Para saber la velocidad de subida se debe acudir a los medidores que tiene disponible el operador de Internet. Por ejemplo, en la siguiente gráfica se muestra la medición para el operador Tigo Une:
    .row.align-items-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          //h5 
          span Medición velocidad de Internet
        figure
          img(src='@/assets/curso/t2/i1.png' alt='Medición de velocidad')
          figcaption Fuente: TIGO
      .col-lg-6
        p La medida de la velocidad de subida es de 5.3 Mbps o sea 5300 kbps; entonces el número máximo de conversaciones simultáneas por línea es:
        .col-lg-10.mx-auto.text-center
          p.codigo 5300 kbps/32 kbps = 165,625
          p.codigo.mb-4 Conversaciones simultáneas = 165 agentes
        p La siguiente tabla muestra la cantidad de agentes que puede soportar cada línea según la velocidad de subida disponible:
        .titulo-sexto.color-acento-contenido
          //h5 
          span Agentes Vs. Velocidad
        .tabla-a.color-acento-contenido.mb-5 
          table.text-center
            thead
              tr
                th.texto-acento-contenido.text-center Velocidad de subida
                th.texto-acento-contenido.text-center Agentes simultáneos
            tbody
              tr
                td.text-center 256 kbps
                td.text-center 8
              tr
                td.text-center 512 kbps
                td.text-center 16
              tr
                td.text-center 1.024 kbps = 1 Mbps
                td.text-center 32
              tr
                td.text-center 2.048 kbps = 2 Mbps
                td.text-center 64
              tr
                td.text-center 4.096 kbps = 4 Mbps
                td.text-center 128
    h3 Cálculo del número de líneas dedicadas a voz
    .row.align-items-center
      .col-lg-7
        p Para calcular el número de líneas necesarias, basta con dividir el número de agentes que van a trabajar de forma simultánea entre la capacidad de cada línea. Por ejemplo: las líneas contratadas tienen una capacidad para 64 agentes y el centro de llamadas necesita trabajar con 50 agentes simultáneos. 
        p Entonces el número de líneas es:
        .cajon.color-acento-contenido.p-4.mb-4
          .col-lg-10.mx-auto
            p.codigo.text-center Nº líneas = (Nº Agentes) / (Agentes por línea)
            p.codigo.text-center Nº líneas = 64 / 50
            p.codigo.text-center.mb-4 Nº líneas = 1,28
            p.mb-0 Por lo tanto, el número de líneas es 2, ya que siempre se redondea por lo alto.
      .col-lg-4.mx-auto
        img(src='@/assets/curso/t2/f7.svg' alt='Imagen relacionada').py-4
    Separador
    #t_2_2.titulo-segundo
      h2 2.2	Elementos comunes de la configuración
    p Independientemente del número de líneas de voz necesarias, todas las configuraciones de red tendrán los siguientes elementos en común:
    .row.align-items-center.mb-5
      .col-lg-4
        img(src='@/assets/curso/t2/f8.svg' alt='Imagen relacionada').py-4
      .col-lg-8
        .col-lg-10.mx-auto
          ul.lista-ul--separador
            li 
              i.fas.fa-play.texto-acento-contenido.me-4
              | El tráfico de datos se concentra por una sola línea del proveedor (puede ser ADSL), para liberar de esta forma a las líneas de voz. 
            li 
              i.fas.fa-play.texto-acento-contenido.me-4
              | Todos los elementos de red se encuentran físicamente conectados mediante hubs o switches. 
            li 
              i.fas.fa-play.texto-acento-contenido.me-4
              | Cada línea de Internet dispone de su propio router; habrá entonces router de datos y router de voz que se deben configurar. 
            li 
              i.fas.fa-play.texto-acento-contenido.me-4
              | Para cursar el tráfico de voz, deben emplearse las líneas con la mayor velocidad de subida disponible en la oficina, pues la velocidad de bajada siempre es suficientemente elevada. Entonces se deben contratar las líneas con la mayor velocidad de subida. 
            li 
              i.fas.fa-play.texto-acento-contenido.me-4
              | Todo el tráfico de voz va dirigido hacia un PBX online con una dirección IP concreta para distinguir el tráfico de voz del resto del tráfico. 
            li 
              i.fas.fa-play.texto-acento-contenido.me-4
              | La separación del tráfico de voz la realizan routers, desviando todo el tráfico dirigido a la dirección IP del PBX online a una línea dedicada de voz.
        p La siguiente figura muestra los diferentes dispositivos que se pueden configurar y que son comunes a la red VoIP.
    .col-lg-7.mx-auto
      .titulo-quinto.color-acento-contenido
        h4 Dispositivos comunes VoIP
      figure
        img(src='@/assets/curso/t2/f9.svg' alt='Dispositivos comunes VoIP').py-4
        figcaption Nota. Adaptada de https://www.areatecnologia.com/informatica/imagenes/voip.jpg 
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
