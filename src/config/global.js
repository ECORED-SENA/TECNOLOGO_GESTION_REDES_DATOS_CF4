export default {
  global: {
    componenteFormativo:
      'Planificación y configuración de comunicación sobre VoIP',
    descripcionCurso:
      'En este componente se estudiarán los conocimientos para planificar y configurar los dispositivos requeridos para establecer comunicación sobre VoIP.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal-img.svg'),
    fondoBannerPrincipal: require('@/assets/curso/banner-principal-bg.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción para VoIP',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Funcionamiento',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Protocolo H.323 con VoIP',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Elementos necesarios para VoIP',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Compresión de la voz',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-play-circle',
            numero: '1.5',
            titulo: 'Retardo',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Jitter',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Telefonía IP',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Ventajas y desventajas de la telefonía IP',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Servicios avanzados de telefonía IP',
            hash: 't_1_9',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Configuración',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Cálculo del número de líneas de voz',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Elementos comunes de la configuración',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Almeida, R. (2015). Implementar una Central Telefónica IP basada en tecnología Open Source en la carrera de Ingeniería en Sistemas Computacionales [Doctoral dissertation, Universidad de Guayaquil. Ecuador]. Repositorio Institucional de la Universidad de Guayaquil.',
      link: 'http://repositorio.ug.edu.ec/handle/redug/9946',
    },
    {
      referencia: 'Dordoigne, J. y Bardot, Y. (2020). Redes informáticas. ENI.',
    },
    {
      referencia:
        'Handley, M., Jacobson, V. y Perkins, C. (2006). RFC 4566: SDP: session description protocol. The Internet Society.',
      link: 'https://datatracker.ietf.org/doc/html/rfc4566',
    },
    {
      referencia:
        'Matango, F. (2016, 29 marzo). Cuales son los Elementos de la Red – Arquitectura. SERVER VoIP.',
      link: 'http://www.servervoip.com/blog/arquitectura-red-voip/',
    },
    {
      referencia:
        'UIT-T. (2003). Serie G Suplemento 39. Serie G: Sistemas y medios de transmisión, sistemas y redes digitales. Unión Internacional de Telecomunicaciones.',
      link:
        'https://www.itu.int/rec/dologin_pub.asp?lang=e&id=T-REC-G.Sup39-200310-S!!PDF-S&type=items',
    },
  ],
  glosario: [
    {
      termino: 'Adaptador de red',
      significado:
        'Dispositivo de <i>hardware</i> que se inserta en una estación de trabajo de una red y le permite comunicarse con otros elementos unidos a la red. El adaptador de red recibe y convierte señales entrantes de la red a la estación de trabajo y convierte y envía comunicaciones salientes a la red.',
    },
    {
      termino: 'kbps',
      significado: 'Kilobits por segundo.',
    },
    {
      termino: 'kBps',
      significado: 'Kilobytes por segundo. La relación es 1 kB/s = 8 kbps.',
    },
    {
      termino: 'Latencia',
      significado: 'Retardo o demora de transmisión a través de la red.',
    },
    {
      termino: 'PBX',
      significado:
        '<span style="display:none">_</span>Private Branch Exchange. Equipo privado que administra las llamadas telefónicas de una empresa.',
    },
    {
      termino: 'SIP',
      significado:
        '<span style="display:none">_</span>Session Initiation Protocol. Es un protocolo de señalización para inicio de sesión.',
    },
    {
      termino: 'VoIP',
      significado:
        'Es un conjunto de recursos que hacen posible que la señal de voz viaje a través de Internet empleando el protocolo IP (Protocolo de Internet).',
    },
  ],
  complementario: [
    {
      texto:
        'CISCO Networking Academy. (s. f.). CCNA: Switching, Routing, and Wireless Essentials.',
      tipo: 'Capítulo de libro',
      link:
        'https://www.netacad.com/courses/networking/ccna-switching-routing-wireless-essentials',
    },
    {
      texto: 'Kronotek. (s. f.). Configuración de red para VoIP.',
      tipo: 'Manual',
      descarga: 'downloads/configuracion_de_red_VoIP.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Mauricio Tovar Artunduaga',
        cargo: 'Instructor',
        centro: 'Centro de Servicios y Gestión Empresarial Regional Antioquia',
      },
      {
        nombre: 'Jorge Eliécer Loaiza Muñoz',
        cargo: 'Instructor',
        centro:
          'Centro de Diseño e Innovación Tecnológica Industrial Regional Antioquia',
      },
      {
        nombre: 'Claudia López Arboleda',
        cargo: 'Experta temática',
        centro:
          'Centro de Teleinformática y Producción Industrial Regional Cauca',
      },
      {
        nombre: 'Luz Mila Pacheco Fuentes',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Uriel Darío González Montoya',
        cargo: 'Acompañamiento pedagógico',
        centro: 'Centro Agropecuario La Granja Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Jesús Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Walter Roa Serrano',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
