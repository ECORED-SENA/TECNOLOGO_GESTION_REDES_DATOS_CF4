<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Introducción para VoIP
    p El término VoIP significa voz sobre protocolo de Internet. Es un término con el que se designa una tecnología que transforma las señales de audio analógicas en datos digitales para transmitirlos por Internet, donde otro dispositivo los convierte nuevamente para que se escuche en forma de audio para el receptor. En la Figura VoIP, se puede observar el recorrido de la voz.
    .col-lg-9.mx-auto
      img(src='@/assets/curso/t1/f1.svg', alt='Ilustración VOIP')
    Separador
    #t_1_1.titulo-segundo
      h2 1.1 Funcionamiento
    p.mb-5 Voz sobre IP es una tecnología con la cual se pueden realizar llamadas telefónicas sobre redes de datos. Se tienen básicamente dos formas de uso:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/t1/f2.svg', alt='Icono relacionado')  
        h2.text-center Acceso local
        p Donde no es necesario el Internet. Como ejemplo, podría ser llamar desde USA a Colombia. Aquí se marca el número local que ofrece el proveedor de VoIP, una grabación solicita el ingreso del usuario y el número telefónico del destino a llamar, el tramo internacional de la llamada será por VoIP, llegando así al país de destino simplemente habiendo llamado a un número local del país de origen.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/t1/f3.svg', alt='Icono relacionado')
        h2.text-center Acceso VoIP
        p Se necesita una conexión a Internet. Se puede utilizar cualquier dispositivo conectado a Internet, como un PC, un teléfono IP, un smartphone o tablet, o también se puede conectar un teléfono analógico al router, por medio de un adaptador IP o también llamado ATA.
    .titulo-quinto.color-acento-contenido
      h4.pt-5 Funcionamiento VoIP
    .cajon.color-acento-contenido.p-4.mb-4
      .row.align-items-center
        .col-lg-7.px-4
          img(src='@/assets/curso/t1/f4.svg', alt='Ilustración VOIP')
        .col-lg-5.p-4.fondo-blanco.px-3
          p.mb-0 Cualquier persona puede hacer uso de VoIP debido a que la documentación es un estándar abierto. La calidad, fiabilidad, seguridad y compatibilidad de los teléfonos basados en IP depende de la conexión a Internet entre emisor y receptor, como se observa en la anterior figura.
    Separador
    #t_1_2.titulo-segundo
      h2 1.2	Protocolo H.323 con VoIP
    p De acuerdo con Dordoigne y Bardot (2020):
    .col-lg-10.mx-auto.mb-5
      .bloque-texto-b.color-azul-clarito.p-4
        .bloque-texto-b__texto
          i.fas.fa-quote-left
          h2.mb-0 La serie de protocolos H32x de la Unión Internacional de Telecomunicaciones (UIT) está dirigida a estandarizar las diferentes funciones de videoconferencia, combinando audio, video y transferencia de archivos. En 1996 nace la voz por IP, por medio de H.323, capaz de basarse en diferentes protocolos de comunicación, códec de audio y de video.
          i.fas.fa-quote-right
    .titulo-quinto.color-acento-contenido
      h4 Protocolo H.323
    .col-lg-8.mx-auto.mb-5
      img(src='@/assets/curso/t1/f5.svg', alt='Protocolo H.323')
    p Su utilización es posible tanto en redes locales, en las que el ancho de banda es grande, como en Internet, que se caracteriza por velocidades menores y mayores retrasos en la transmisión. Las dos partes de la comunicación telefónica pueden utilizar diferentes terminales que cumplan la norma H.323.
    p Son recomendables los terminales digitales, como un PC o un teléfono diseñado para la voz por IP. Cada uno está identificado por su dirección IP. Si una de las partes utiliza un teléfono analógico, la comunicación debe pasar por una puerta de enlace.
    .bloque-texto-a.color-acento-contenido.p-md-4.mb-5 
      .row.m-0.align-items-center.justify-content-between.p-4
        .col-lg-4.mb-4.mb-lg-0
          img(src='@/assets/curso/t1/f6.svg' alt='Laptop + VOIP')
        .col-lg-8
          .bloque-texto-a__texto.p-5
            p Por ejemplo, si los dos extremos utilizan un PC, basta que un software de telefonía implemente el protocolo H.323 para dirigir los paquetes, gracias a la dirección IP de cada equipo. Todo el tráfico transita por la red local o Internet. El principio es el mismo si los equipos telefónicos son digitales, como en una comunicación en voz por IP en la empresa, y en este caso se asocia un número de teléfono a la dirección IP del terminal.
            br
            p Al contrario, si uno de los terminales, o los dos, utilizan un teléfono clásico, una puerta de enlace debe realizar la conexión entre el transporte informático y el telefónico, asegurando así la interconexión entre los dos tipos de redes.
    Separador
    #t_1_3.titulo-segundo
      h2 1.3	Elementos necesarios para VoIP
    p Son aquellos elementos o dispositivos que permiten la comunicación a través de VoIP, según Matango (2016). Los elementos que intervienen en una comunicación IP son:
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Teléfonos IP")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h3 Teléfonos IP
            p En <i>hardware</i>, son similares a los convencionales. Se conectan a Internet mediante cable. Cambia la forma en que se transmite la voz. Este teléfono se conecta a Internet directamente por el router, hub o cable módem, y las llamadas se realizan y se reciben por Internet. No hace falta tener un computador prendido para usarlo, simplemente un acceso a Internet de banda ancha.  La siguiente figura muestra teléfonos IP inalámbricos y de mesa.
          .col-md-6
            figure
              img(src='@/assets/curso/t1/i1.jpg', alt='Teléfonos IP')
              figcaption Fuente: DIARIODEHUELVA
      .py-3.py-md-4(titulo="Softphone")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h3 Softphone
            p Hace referencia a un <i>software</i> o programa que permite emular un teléfono convencional utilizando un computador, y permite así realizar llamadas a cualquier destino y dispositivo terminal. Un <i>softphone</i> hace parte de un entorno VoIP y puede tener como base el estándar SIP Proxy. En la figura, se puede observar un ejemplo.
          .col-md-6
            figure
              img(src='@/assets/curso/t1/i2.jpg', alt='Fuente: Blog 3cx')
              figcaption Fuente: Blog 3cx
      .py-3.py-md-4(titulo="Adaptador de Teléfono Analógico ATA")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h3 Adaptador de Teléfono Analógico ATA
            p El Adaptador de Teléfono Analógico o ATA <i>(Analog Telephone Adapter)</i> permite conectar un teléfono convencional a la red IP, por medio del protocolo SIP o IAX; trabaja como un adaptador que, a través del puerto Ethernet, convierte el teléfono analógico en uno IP.
          .col-md-6
            figure
              img(src='@/assets/curso/t1/i3.jpg', alt='Adaptador de teléfono analógico ATA')
              figcaption Fuente: Intelbras
      .py-3.py-md-4(titulo="Gateway")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h3 Gateway
            p Sirve para conectar la red telefónica convencional con la red IP y es transparente para el usuario. Cuando se desea realizar una llamada hacia una red IP, es el gateway quien se encarga de convertir la señal analógica en digital y viceversa.
          .col-md-6
            figure
              img(src='@/assets/curso/t1/i4.jpg', alt='Gateway')
              figcaption Fuente: Techslang
      .py-3.py-md-4(titulo="Gatekeepers")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h3 Gatekeepers
            p Son el centro de la infraestructura VoIP y reemplazan las centrales actuales. Generalmente, se implementan en software y todas las comunicaciones pasarán por él. Se considera como el cerebro de la red VoIP.
          .col-md-6
            figure
              img(src='@/assets/curso/t1/i5.jpg', alt='Gatekeepers')
              figcaption Fuente: Vecteezy
    Separador
    #t_1_4.titulo-segundo
      h2 1.4	Compresión de la voz
    .bloque-texto-a.color-acento-contenido.p-md-4.mb-5 
      .row.m-0.align-items-center.justify-content-between.p-4
        .col-lg-3.mb-4.mb-lg-0
          img(src='@/assets/curso/t1/f7.svg' alt='Laptop y servidores')
        .col-lg-9
          .bloque-texto-a__texto.p-5
            p Para que la voz sea transmitida, es necesario realizar un proceso de compresión de los datos, transformados mediante un algoritmo de codificación, y cuando llegan al equipo receptor se descomprimen y se entrega el mensaje. <b>De acuerdo con la UIT-T (2003), que normaliza los esquemas de codificación PCM y ADPCM en sus recomendaciones en la serie G, los siguientes son los estándares de codificación más usados para la telefonía y voz por paquetes:</b>
    PasosA.color-primario.mb-5(tipo="n")
      .row
        img(src='@/assets/curso/t1/n1.svg' alt='1').figpasos
        .h3 G.711
        p Describe la técnica de codificación de voz PCM de 64 kbps; es el formato correcto para la entrega de voz digital en la red telefónica pública o a través de intercambio privado en tramas (PBX).
      .row
        img(src='@/assets/curso/t1/n2.svg' alt='2').figpasod
        .h3 G.726
        p Describe la codificación de ADPCM a 40, 32, 24 y 16 kbps; también se puede intercambiar voz ADPCM entre voz por paquetes y telefonía pública o redes PBX, suponiendo que estas últimas tienen la capacidad ADPCM.
      .row
        img(src='@/assets/curso/t1/n3.svg' alt='3').figpasoi
        .h3 G.728
        p Describe una variación de bajo retraso de 16 kbps de una compresión de voz CELP.
      .row
        img(src='@/assets/curso/t1/n4.svg' alt='4').figpasod
        .h3 G.729
        p Describe la compresión CELP, que permite que la voz sea codificada en chorros de 8 kbps; dos variaciones de este estándar difieren ampliamente en cuanto a complejidad de computación, y ambas proporcionan generalmente una calidad de voz tan buena como la ADPCM de 32 kbps.
      .row
        img(src='@/assets/curso/t1/n5.svg' alt='5').figpasos
        .h3 G.723.1
        p Describe una técnica de compresión que se puede utilizar para comprimir voz u otros componentes de señales de audio de servicios multimedia a una baja velocidad de bit, como parte de la familia de estándares H.324. Dos velocidades de bit están asociadas con el codificador: 5.3 y 6.3 kbps. (p.31).
    Separador
    #t_1_5.titulo-segundo
      h2 1.5	Retardos
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Qgal2WdrDJE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Retardos Jitter
    Separador
    #t_1_6.titulo-segundo
      h2 1.6	Jitter
    p Es un proceso que realizan los mensajes que consiste en dividirse en paquetes para viajar por diferentes rutas y así llegar al mismo destino. VoIP sufre de este efecto. Como dato para tener en cuenta, de acuerdo con Almeida (2015):
    .col-lg-10.mx-auto.mb-5
      .bloque-texto-b.color-azul-clarito.p-4
        .bloque-texto-b__texto
          i.fas.fa-quote-left
          h2.mb-0 El jitter entre el punto inicial y final de la comunicación debería ser inferior a 100 ms; si el valor es menor a 100 ms, el jitter puede ser compensado de manera apropiada; en caso contrario, debería ser minimizado.
          i.fas.fa-quote-right
    Separador
    #t_1_7.titulo-segundo
      h2 1.7	Telefonía IP
    .bloque-texto-a.color-acento-contenido.p-md-4.mb-5 
      .row.m-0.align-items-center.justify-content-between.p-4
        .col-lg-3.mb-4.mb-lg-0
          img(src='@/assets/curso/t1/f8.svg' alt='Imagen relacionada')
        .col-lg-9
          .bloque-texto-a__texto.p-5
            p Es el servicio que establece comunicación de voz por medio de una red LAN mediante el protocolo de Internet, utilizando diferentes tipos de terminales, como teléfonos convencionales, teléfonos IP, teléfonos móviles, PC portátil o PC de mesa, tal como se ilustra en la siguiente figura:
    .col-lg-10.mx-auto.mb-5
      .titulo-quinto.color-acento-contenido
        h4.pt-5 Telefonía IP
      img(src='@/assets/curso/t1/f9.svg' alt='Esquema VoIP')
    h3.pt-5 Protocolos para telefonía IP
    p Los protocolos más manejados se encuentran a continuación: 
    p.mb-5 <b>SIP (<i>Session Initiation Protocol</i> - Protocolo de Iniciación de Sesión):</b> es un protocolo de señalización definido por el <i>“Internet Engineering Task Force”</i>, o IETF, que permite el establecimiento, la liberación y la modificación de sesiones multimedia donde se lleva a cabo el proceso de sesión con los siguientes estados y señales:
    .titulo-sexto.color-acento-contenido
      //h5 
      span Señales para protocolo SIP
    .tabla-a.color-primario.mb-5 
      table.text-center
        thead
          tr
            th.texto-acento-contenido.text-center Señal
            th.texto-acento-contenido.text-center Acción
        tbody
          tr
            td.text-center REGISTER
            td.text-center Registrar un dispositivo
          tr
            td.text-center INVITE
            td.text-center Iniciar la llamada
          tr
            td.text-center BYE
            td.text-center Terminar la llamada establecida
          tr
            td.text-center ACK
            td.text-center Notificar el recibo de un mensaje
          tr
            td.text-center CANCEL
            td.text-center Anular llamada aún no establecida
          tr
            td.text-center OPTIONS
            td.text-center Métodos disponibles, alcance, latencia de un dispositivo
          tr
            td.text-center INFO
            td.text-center Transmitir señales de aplicación a través del canal usado
    .row.m-0.align-items-center.justify-content-between.p-4
      .col-lg-8
        .bloque-texto-a__texto.p-5
          p <b>RTP (<i>Real-Time Transport Protocol</i> - Protocolo de transporte en tiempo real):</b> se define como un formato de paquete estándar para el envío de audio y video sobre Internet.
          p <b>SRTP <i>(Secure Real–Time Transport Protocol)</i>:</b> se trata de un perfil de extensión de RTP que agrega funciones de seguridad, como autenticación de mensaje, confidencialidad y protección de respuesta, para las comunicaciones VoIP.
          p <b>SDP (<i>Session Description Protocol</i> - Protocolo de Descripción de Sesión):</b> este estándar define los parámetros para el intercambio de media o streaming media entre dos puntos de terminación (endpoints); es usado para describir sesiones multicast en tiempo real; también es necesario para invitaciones, anuncios y toda clase de inicio de sesiones. 
      .col-lg-4.mb-4.mb-lg-0
        img(src='@/assets/curso/t1/f10.svg' alt='Imagen relacionada')
    Separador
    #t_1_8.titulo-segundo
      h2 1.8	Ventajas y desventajas de la telefonía IP
    p.mb-5 La siguiente tabla condensa las ventajas y desventajas que presenta el servicio de telefonía IP:
    .tabla-a.color-primario.mb-5 
      table.text-center
        thead
          tr
            th.texto-acento-contenido.text-center Ventajas
            th.texto-acento-contenido.text-center Desventajas
        tbody
          tr
            td.text-center Bajo costo en facturas telefónicas
            td.text-center Transporte de información dividida en paquetes
          tr
            td.text-center Oficinas virtuales
            td.text-center Seguridad es relevante
          tr
            td.text-center Dirección centralizada
            td.text-center Cambia confiabilidad por velocidad
          tr
            td.text-center Mejor escalabilidad
            td.text-center Servicio restringido a redes privadas
          tr
            td.text-center Única red convergente con datos, voz, video
            td.text-center Pérdida de paquetes
          tr
            td.text-center Uso eficiente de la red
            td.text-center Baja calidad de comunicación
          tr
            td.text-center Alta calidad de comunicación	
            td.text-center
    Separador
    #t_1_9.titulo-segundo
      h2 1.9	Servicios avanzados de telefonía IP
    p Los principales servicios que se pueden obtener o derivar de la telefonía IP son:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/t1/f11.svg', alt='Icono relacionado')  
        h2.text-center Videoconferencia
        p Es una comunicación que se establece a través de una red de telecomunicaciones y que implica la transmisión de sonido e imagen. La videoconferencia es un sistema muy útil para comunicarse con personas que se encuentran en diferentes lugares. Al permitir la transmisión bidireccional de imágenes y sonido, este tipo de comunicación resulta más completa que la telefonía tradicional.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/t1/f12.svg', alt='Icono relacionado')
        h2.text-center Mensajería unificada
        p Se centralizan los servicios de mensajería de texto, voz y video en un correo electrónico, facilitando la comunicación personal y/o empresarial entre usuarios. Por ejemplo, Gmail ofrece al usuario comunicación mediante un mensaje de texto entre usuarios o también iniciar una llamada por Meet, desde el mismo correo electrónico.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
