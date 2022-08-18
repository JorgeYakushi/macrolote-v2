import { ITerrainsData } from '@core/interfaces/interface';
export const terrainsData: ITerrainsData = {
  huacho: {
    index: 2,
    name: 'Huacho',
    route: 'huacho',
    description: {
      texto:
        'Estos dos magníficos terrenos están ubicados en Huacho, la capital de la provincia de Huaura en Lima. Ubicados en una zona estratégica y rodeado de entorno vivo y comercial. La ubicación de ambos macrolotes los hace ser una excelente oportunidad para proyectos residenciales y comerciales.',
      area: '29,333',
      desde: '5,000',
      estamosaqui: [
        'En la Av. 9 de Octubre',
        'A pocos minutos de la Panamericana Norte',
        'Al costado de Sodimac',
        'A una cuadra del Centro Comercial Plaza del Sol Huacho',
        'A pocas cuadras de la Plaza de Armas',
        'Vista impresionante y directa al mar',
        'Con acceso al malecón principal de la ciudad',
      ],
      zonificacion: 'Comercio zonal',
      tipouso: 'Residencial y comercial',
      tipoZona: 'Residencial.svg',
      porcentaje: '100% saneado y cerco perimétrico',
      direccion: 'Cuadra 1 de Av. 9 de octubre',
      zonificationTarjeta: 'Comercio zonal',
      districtName: 'Huacho',
    },

    imagenes: [
      'huacho/huacho-1.jpg',
      'huacho/huacho-2.jpg',
      'huacho/huacho-3.jpg',
      'huacho/huacho-4.jpg',
      'huacho/huacho-5.jpg',
      'huacho/huacho-6.jpg',
    ],
    video: 'huacho/video/huacho-2.mp4',
    geoJson: '/assets/geoJson/Huacho.geojson',
    lat: -11.1064,
    long: -77.6155,
    zoom: 16,
  },
  'san-antonio': {
    index: 1,
    name: 'San Antonio',
    route: 'san-antonio',
    description: {
      texto:
        'Estos dos potenciales espacios para desarrollos residenciales y comerciales, se encuentran ubicados en el kilómetro 77 de la Panamericana Sur, en el lugar con mayores perspectivas de crecimiento de Lima Sur. Con un entorno de alto potencial y de proyectos en desarrollo. A pocos minutos de Asia, Lima.',
      area: '200,000',
      desde: '10,000',
      estamosaqui: [
        'Kilómetro 77 de la Panamericana Sur',
        'A pocos minutos del Boulevard de Asia',
        'Al lado del Condominio Montemar',
        'Al ingreso de la Urbanización Arenas de San Antonio',
        'Cerca al Club Regatas',
      ],
      zonificacion: 'Residencial y comercial',
      tipouso: 'Residencial',
      tipoZona: 'Comercial.svg',
      porcentaje: '100% saneado',
      direccion: 'KM 77 de la Panamericana Sur',
      zonificationTarjeta: 'Comercial',
      districtName: 'Asia',
    },
    imagenes: [
      'san_antonio/san-antonio-1.jpg',
      'san_antonio/san-antonio-2.jpg',
      'san_antonio/san-antonio-3.jpg',
      'san_antonio/san-antonio-4.jpg',
      'san_antonio/san-antonio-5.jpg',
    ],
    video: 'san_antonio/video/san-antonio-2.mp4',
    geoJson: '/assets/geoJson/San-antonio.geojson',
    lat: -12.6089,
    long: -76.6681,
    zoom: 16,
  },
  olguin: {
    index: 3,
    name: 'Olguín',
    route: 'olguin',
    description: {
      texto:
        'En la mejor zona de Surco, el terreno en venta se encuentra ubicado en la Av. Manuel Olguín y con acceso a las principales avenidas del distrito. La ubicación hace que este sea de una de las ubicaciones estrella. Rodeado de centros comerciales, bancos, hoteles y principales comercios.',
      area: '4,331',
      desde: '2,605',
      estamosaqui: [
        'Ubicado en la cuadra 4 de la Av. Manuel Olguín',
        'A 1 minuto de la Av. Javier Prado',
        'Al frente del Jockey Club',
        'A pocos metros del centro comercial Jockey Plaza',
        'A 1 cuadra de la Universidad de Lima',
      ],
      zonificacion: 'Comercio zonal',
      tipouso: 'Comercial',
      tipoZona: 'Comercial.svg',
      porcentaje: '100% saneado y cerco perimétrico',
      direccion: 'Cuadra 4 de Av. Manuel Olguín',
      zonificationTarjeta: 'Comercio zonal',
      districtName: 'Surco',
    },
    imagenes: [
      'olguin/olguin-1.jpg',
      'olguin/olguin-2.jpg',
      'olguin/olguin-3.jpg',
      'olguin/olguin-4.jpg',
      'olguin/olguin-5.jpg',
      'olguin/olguin-6.jpg',
    ],
    video: 'olguin/video/olguin-2.mp4',
    lat: -12.08943,
    long: -76.973475,
    zoom: 18,
    geoJson: '/assets/geoJson/Olguin.geojson',
  },
  'parque-el-golf': {
    index: 4,
    name: 'Parque El Golf',
    route: 'parque-el-golf',
    description: {
      texto:
        'Esta propiedad se encuentra rodeada de un entorno de alto valor comercial y residencial, en la zona más exclusiva de San Isidro. Tiene un acceso privilegiado a avenidas principales y se encuentra a pocos metros del Golf.',
      area: '32,020',
      desde: '1,560',
      estamosaqui: [
        'En el cruce de la Calle Lizardo Alzamora y la Av. Santo Toribio.',
        'Cerca a la Av. Camino Real',
        'A pocos metros de Lima Golf Club',
        'Muy cerca del Centro Empresarial Real',
      ],
      zonificacion: 'Residencial ',
      tipouso: 'Residencial.',
      tipoZona: 'Residencial.svg',
      porcentaje: '100% saneado y cerco perimétrico',
      direccion: 'Av. Choquehuanca',
      zonificationTarjeta: 'Residencial',
      districtName: 'San isidro',
    },
    imagenes: [
      'parque_golf/parque-el-golf-1.jpg',
      'parque_golf/parque-el-golf-2.jpg',
      'parque_golf/parque-el-golf-3.jpg',
      'parque_golf/parque-el-golf-4.jpg',
      'parque_golf/parque-el-golf-5.jpg',
      'parque_golf/parque-el-golf-6.jpg',
    ],
    video: 'parque_golf/video/parque-el-golf-2.mp4',
    geoJson: '/assets/geoJson/San-isidro.geojson',
    lat: -12.09912,
    long: -77.03929,
    zoom: 18,
  },
  lurin: {
    index: 5,
    name: 'Lurín',
    route: 'lurin',
    description: {
      texto:
        'Este terreno se encuentra en medio de un entorno con mucho potencial empresarial. Al lado de la ciudad industrial más grande del Perú, MacrOpolis. Ubicado en el kilómetro 40 de la Panamericana Sur.',
      area: '800,000',
      desde: '10,000',
      estamosaqui: [
        'Ubicado en el kilómetro 35 de la Panamericana Sur',
        'Al lado de la ciudad industrial MacrOpolis',
        'A pocos minutos de la antigua Panamericana Sur',
        'En la Av. Mártir Olaya',
      ],
      zonificacion: 'Industrial ',
      tipouso: 'Industrial y otros usos.',
      tipoZona: 'Industrial.svg',
      porcentaje: '100% saneado',
      direccion: 'Altura del KM 40 de la Panamericana Sur',
      zonificationTarjeta: 'Industrial',
      districtName: 'Lurín',
    },
    imagenes: [
      'lurin/lurin-1.jpg',
      'lurin/lurin-2.jpg',
      'lurin/lurin-3.jpg',
      'lurin/lurin-4.jpg',
      'lurin/lurin-5.jpg',
      'lurin/lurin-6.jpg',
    ],
    video: 'lurin/video/lurin-3.mp4',
    lat: -12.2511,
    long: -76.8339,
    zoom: 14,
    geoJson: '/assets/geoJson/Lurin.geojson',
  },
  salinas: {
    index: 5,
    name: 'Salinas',
    route: 'salinas',
    description: {
      texto:
        'Este terreno cuenta con un entorno dinámico y lleno de comercio. Estratégicamente ubicado en la Panamericana Sur y al lado del Condominio Islas de San Pedro.',
      area: '32,020',
      desde: '32,020',
      estamosaqui: [
        'Ubicado en el kilómetro 33 de la Panamericana Sur',
        'Al lado del Condominio Islas de San Pedro',
        'Al frente del cementerio Jardines de la Paz',
        'A pocos minutos del centro comercial InOulet Premium',
      ],
      zonificacion: 'Recreacional y residencial',
      tipouso: 'Residencial',
      tipoZona: 'Residencial.svg',
      porcentaje: '100% saneado y cerco perimétrico',
      direccion: 'Altura del KM 40 de la Panamericana Sur',
      zonificationTarjeta: 'Residencial',
      districtName: 'Lurín',
    },
    imagenes: [
      'salinas/salinas-1.jpg',
      'salinas/salinas-2.jpg',
      'salinas/salinas-3.jpg',
      'salinas/salinas-4.jpg',
      'salinas/salinas-5.jpg',
    ],
    video: 'salinas/video/salinas-2.mp4',
    geoJson: '/assets/geoJson/Salinas.geojson',
    lat: -12.29195,
    long: -76.86707,
    zoom: 16,
  },
};

//imagenes que van en el carrusel del home en carpeta "principal/"

export const slideHome = [
  {
    nombre: 'san-antonio',
    url: 'principal/san-antonio.jpg',
    titulo: 'Macrolotes ideales para desarrollos inmobiliarios',
    subtitulo:
      'Proyectos desde 1,000 m² de tipo residencial, comercial e industrial',
  },
  {
    nombre: 'parque-el-golf',
    url: 'principal/parque-el-golf.jpg',
    titulo: 'Desarrolla proyectos residenciales de venta o renta',
    subtitulo:
      'Terrenos para edificios multifamiliares, vivienda social, condominios, proyectos de primera y segunda vivienda, entre otros.',
  },
  {
    nombre: 'olguin',
    url: 'principal/olguin.jpg',
    titulo: 'Confía en los expertos',
    subtitulo:
      'Tenemos más de 91 años de experiencia en el sector inmobiliario',
  },
];