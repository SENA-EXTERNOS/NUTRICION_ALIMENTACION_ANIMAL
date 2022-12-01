export default {
  global: {
    componenteFormativo: 'Nutrición y alimentación animal',
    descripcionCurso:
      'El objetivo es aprender la diferencia entre: alimentación y nutrición, monogástricos y poligástricos. Además, se aborda el tipo de alimento que debemos suministrar a cada especie y los procesos bioquímicos que suceden para absorber los nutrientes necesarios para el mantenimiento y producción. Asimismo, se estudia la producción de forrajes, ya que, en épocas de abundancia, es necesario conservar con las diferentes técnicas existentes para suministrar dietas adecuadas en tiempo de sequía.',
    imagenBannerPrincipal: require('@/assets/curso/portada/imagen-banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/img-decorativo1.png'),
      },
    ],
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
        titulo: 'Programa de Alimentación Agroecológica',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Principios de anatomía y fisiología digestiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Sistema digestivo de los rumiantes',
            hash: 'sistema-digestivo-de-los-rumiantes',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.1.1',
            titulo: 'Las bacterias del rumen',
            hash: 'las-bacterias-del-rumen',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.1.2',
            titulo: 'Aparato digestivo de los rumiantes',
            hash: 'aparato-digestivo-de-los-rumiantes',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Sistema digestivo de los monogástricos',
            hash: 'sistema-digestivo-de-los-monogastricos',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Nutrición y alimentación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de nutrientes',
            hash: 'tipos-de-nutrientes',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Nutrición y alimentación de los bovinos',
            hash: 'nutricion-y-alimentacion-de-los-bovinos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Requerimientos nutricionales de los bovinos',
            hash: 'requerimientos-nutricionales-de-los-bovinos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Requerimientos nutricionales de los porcinos',
            hash: 'requerimientos-nutricionales-de-los-porcinos',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: ' Materias primas en la alimentación agroecológica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: ' Pastos y forrajes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Ciclos de pastoreo',
            hash: 'tipos-de-nutrientes',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Conservación de forrajes ',
            hash: 'conservacion-de-forrajes ',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Sistemas agroforestales',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
  complementario: [
    {
      tema: 'Alimentación y agroecología',
      referencia:
        'Canal Bodega orgánica (24 de junio 2022) importancia de consumir agroecológico [archivo de video]',
      tipo: 'video',
      link: 'https://youtu.be/GeAyZLlztVk',
    },
    {
      tema: 'Manejo y producción de pastos y forrajes',
      referencia:
        'Canal Tv. Agro por Juan Gonzalo Ángel (7 de septiembre 2017) Manejo y producción de pastos y forrajes [archivo de video]',
      tipo: 'video',
      link: 'https://youtu.be/1LE6brB8W_I',
    },
    {
      tema:
        'Capítulo 10. Manual práctico ganadero - especies forrajeras: gramíneas y leguminosas',
      referencia:
        'Canal Fedegan (7 de octubre 2021) Manual práctico ganadero [archivo de video]',
      tipo: 'video',
      link: 'https://youtu.be/8JiYswXGLxM',
    },
    {
      tema: 'Manejo de praderas y sistemas de pastoreo',
      referencia:
        'Canal Ganadería colombiana sostenible (12 de Julio 2018) Ganadería sostenible [archivo de video]',
      tipo: 'video',
      link: 'https://youtu.be/jmeXgBzCoGI',
    },
  ],
  glosario: [
    {
      termino: 'Carbohidrato',
      significado: 'principal nutriente en la alimentación animal.',
    },
    {
      termino: 'Fibra',
      significado: 'filamento presente en los tejidos animales y vegetales.',
    },
    {
      termino: 'Forraje',
      significado:
        'Son la base de la alimentación de cualquier animal herbívoro, entre los que se encuentra el ganado bovino. Su alto contenido en fibra es imprescindible para mantener el equilibrio ruminal.',
    },
    {
      termino: 'Grasa',
      significado:
        'sustancias orgánicas, formadas por átomos de carbono, oxígeno e hidrógeno que hacen parte de procesos en el cuerpo.',
    },
    {
      termino: 'Melaza',
      significado:
        'subproducto del proceso de la caña de azúcar y utilizada como fuente de energía.',
    },
    {
      termino: 'Minerales',
      significado: 'sustancias formadas por varios compuestos químicos.',
    },
    {
      termino: 'Monogástricos',
      significado:
        'son animales que tienen un estómago y su catabolismo y anabolismo se realiza por medio de enzimas y ácidos.',
    },
    {
      termino: 'Poligástricos',
      significado:
        'animales que poseen un estómago dividido en cuatro compartimentos de los cuales cada uno cumple una función.',
    },
    {
      termino: 'Proteínas',
      significado:
        'moléculas formadas por cadenas de aminoácidos, cumplen muchas funciones en el cuerpo.',
    },
    {
      termino: 'Rumen',
      significado:
        'es uno de los compartimentos esofágicos del aparato digestivo de los rumiantes.',
    },
    {
      termino: 'Rumiante',
      significado:
        'animal que realiza el proceso de la rumia, por medio del cual el animal el expulsa el CO2 a través del eructo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Castrejón, F. et al. (2017). <em> Características nutrimentales de gramíneas, leguminosas y algunas arbóreas forrajeras del trópico de México.</em> UNAM. Obtenido de',
      link:
        'https://papimes.fmvz.unam.mx/proyectos/manuales_nutricion/Manual_Fracciones.pdf',
    },
    {
      referencia:
        'Martínez, F. (2020, febrero 10). Proceso de Ensilaje. <em>Infopastosyforrajes.com.</em> Obtenido de',
      link:
        'https://infopastosyforrajes.com/metodos-de-conservacion/proceso-de-ensilaje/',
    },
    {
      referencia:
        'Martínez, F. (2020, febrero 6). Proceso de henificación.  <em>Infopastosyforrajes.com.</em> Obtenido de',
      link:
        'https://infopastosyforrajes.com/metodos-de-conservacion/proceso-de-henificacion/',
    },
    {
      referencia:
        'Moran, E. (2018, octubre 24). Anatomofisiología del tracto digestivo de aves y cerdos y la influencia de los alimentos. <em>LPN Congress.</em> Obtenido de ',
      link:
        'https://lpncongress.com/wp-content/uploads/2018/10/anatomofisiologia-del-tracto-digestivo-de-aves-y-cerdos-y-la-influencia-de-los-alimentos-edwin-moran.pdf',
    },
    {
      referencia:
        'Pérez, E. (2017). <em>Manual de manejo de sistemas intensivos sostenibles en ganadería de engorde.</em> Instituto Nacional de Innovación y Transferencia en Tecnología Agropecuaria. Obtenido de',
      link: 'http://www.mag.go.cr/bibliotecavirtual/L02-10923.pdf',
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
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
