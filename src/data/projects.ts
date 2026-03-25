export interface Project {
  slug: string;
  title: string;
  category: string;
  client: string;
  location: string;
  year: string;
  tools: string[];
  description: { es: string; en: string };
  coverImages: string[]; // curated selection for landing grid
  images: string[];      // full gallery for detail page
}

export const projects: Project[] = [
  {
    slug: 'cabrera-2996',
    title: 'Cabrera 2996',
    category: 'Multifamiliar',
    client: 'Confidencial',
    location: 'Buenos Aires, Argentina',
    year: '2024',
    tools: ['3ds Max', 'Corona Renderer', 'Photoshop'],
    description: {
      es: 'Desarrollo residencial con múltiples tipologías: monoambientes, 2 y 3 ambientes con posibilidad flex. El trabajo incluye renders de fachada con personas, balcones en detalle, planta baja y perspectivas de los retiros, todo pensado para la comunicación comercial del proyecto.',
      en: 'Residential development with multiple unit types: studios, 2 and 3-bedroom apartments with flex layouts. The work includes façade renders with people, balcony close-ups, ground floor and setback perspectives — all designed for the project\'s commercial communication.',
    },
    coverImages: [
      '/images/portfolio/cabrera-2996/2-3-AMBIENTES-CON-PERSONAS-.jpg',
      '/images/portfolio/cabrera-2996/8-CABRERA-PLANTA-BAJA-.jpg',
      '/images/portfolio/cabrera-2996/9-ZOOM-BALCON-CABRERA-CON-PERSONAS.jpg',
    ],
    images: [
      '/images/portfolio/cabrera-2996/1-2-AMBIENTES-CABRERA-C-PERSONAS.jpg',
      '/images/portfolio/cabrera-2996/2-AMBIENTES-CABRERA.jpg',
      '/images/portfolio/cabrera-2996/2-3-AMBIENTES-CON-PERSONAS-.jpg',
      '/images/portfolio/cabrera-2996/3-3-AMBIENTES-FLEX-CON-PERSONAS-.jpg',
      '/images/portfolio/cabrera-2996/7-POST-2D-RETIRO-CABRERA-CON-PERSONAS.jpg',
      '/images/portfolio/cabrera-2996/8-CABRERA-PLANTA-BAJA-.jpg',
      '/images/portfolio/cabrera-2996/9-ZOOM-BALCON-CABRERA-CON-PERSONAS.jpg',
      '/images/portfolio/cabrera-2996/MONO-AMBIENTE-CABRERA.jpg',
    ],
  },
  {
    slug: 'flint-house',
    title: 'Flint House',
    category: 'Vivienda Unifamiliar',
    client: 'Confidencial',
    location: 'Argentina',
    year: '2024',
    tools: ['3ds Max', 'Corona Renderer', 'Photoshop'],
    description: {
      es: 'Residencia unifamiliar de arquitectura moderna. Las visualizaciones incluyen vista de fachada principal y toma aérea, destacando la relación del volumen construido con el entorno natural.',
      en: 'Modern single-family residence. Visualizations include a main façade view and an aerial shot, highlighting the relationship between the built volume and its natural surroundings.',
    },
    coverImages: [
      '/images/portfolio/flint-house/01-flint-house-f.jpg',
      '/images/portfolio/flint-house/02-aerial-flint-house.jpg',
    ],
    images: [
      '/images/portfolio/flint-house/01-flint-house-f.jpg',
      '/images/portfolio/flint-house/02-aerial-flint-house.jpg',
    ],
  },
  {
    slug: 'olivos',
    title: 'Olivos',
    category: 'Vivienda Unifamiliar',
    client: 'FCL Arquitectura',
    location: 'Olivos, Buenos Aires',
    year: '2023',
    tools: ['3ds Max', 'Corona Renderer', 'Photoshop'],
    description: {
      es: 'Vivienda unifamiliar en Olivos con tratamiento completo de exteriores e interiores. Las vistas de frente y contrafrente muestran el paisajismo y el quincho, mientras que las imágenes interiores transmiten la calidad de los acabados y la luminosidad de los espacios.',
      en: 'Single-family residence in Olivos with full exterior and interior treatment. Front and rear views showcase the landscaping and barbecue area, while interior images convey the quality of finishes and the brightness of the spaces.',
    },
    coverImages: [
      '/images/portfolio/olivos/06-BAÑO-OLIVOS-REMAKE.jpg',
      '/images/portfolio/olivos/04-COCINA-QUINCHO-copia.jpg',
      '/images/portfolio/olivos/02-FRENTE-OLIVOS.jpg',
    ],
    images: [
      '/images/portfolio/olivos/01-CONTRAFRENTE-OLIVOS.jpg',
      '/images/portfolio/olivos/02-FRENTE-OLIVOS.jpg',
      '/images/portfolio/olivos/03-QUINCH-OLIVOS-REMAKE.jpg',
      '/images/portfolio/olivos/04-COCINA-QUINCHO-copia.jpg',
      '/images/portfolio/olivos/05-COMEDOR-OLIVOS.jpg',
      '/images/portfolio/olivos/06-BAÑO-OLIVOS-REMAKE.jpg',
    ],
  },
  {
    slug: 'acoyte-725',
    title: 'Acoyte 725',
    category: 'Multifamiliar',
    client: 'Lostres Arquitectura',
    location: 'Buenos Aires, Argentina',
    year: '2025',
    tools: ['3ds Max', 'Corona Renderer', 'Photoshop'],
    description: {
      es: 'Edificio residencial multifamiliar en CABA con una amplia variedad de tipologías: monoambientes, 2 y 3 ambientes, y dúplex. Las visualizaciones abarcan fachada principal, contrafrente, espacios comunes, unidades interiores y terrazas, generando un material completo para la comercialización del desarrollo.',
      en: 'Multifamily residential building in Buenos Aires with a wide range of unit types: studios, 2 and 3-bedroom apartments, and duplex units. Visualizations cover the main façade, rear elevation, common spaces, interior units and terraces, generating comprehensive material for the development\'s commercialization.',
    },
    coverImages: [
      '/images/portfolio/acoyte-725/01-fachada-final-2.jpg',
      '/images/portfolio/acoyte-725/06-Estar-comedor-duplex.jpg',
      '/images/portfolio/acoyte-725/10-TERRAZA.jpg',
    ],
    images: [
      '/images/portfolio/acoyte-725/01-fachada-final-2.jpg',
      '/images/portfolio/acoyte-725/02-planta-baja.jpg',
      '/images/portfolio/acoyte-725/03--monoambiente-.jpg',
      '/images/portfolio/acoyte-725/04-2-AMB-FRENTE.jpg',
      '/images/portfolio/acoyte-725/05-2-amb-fondo.jpg',
      '/images/portfolio/acoyte-725/06-Estar-comedor-duplex.jpg',
      '/images/portfolio/acoyte-725/07-primer-retiro.jpg',
      '/images/portfolio/acoyte-725/08-segundo-retiro.jpg',
      '/images/portfolio/acoyte-725/09-2do-retiro-contrafrente.jpg',
      '/images/portfolio/acoyte-725/10-TERRAZA.jpg',
      '/images/portfolio/acoyte-725/11-contrafrente.jpg',
      '/images/portfolio/acoyte-725/12-zoom-retiros-2.jpg',
    ],
  },
  {
    slug: 'angel-gallardo',
    title: 'Ángel Gallardo',
    category: 'Multifamiliar',
    client: 'Century 21',
    location: 'Buenos Aires, Argentina',
    year: '2024',
    tools: ['3ds Max', 'Corona Renderer', 'Photoshop'],
    description: {
      es: 'Edificio residencial con planta baja comercial y unidades de uno y dos ambientes. Las visualizaciones muestran la fachada urbana y la diversidad de tipologías interiores, orientadas a la campaña de preventa del proyecto.',
      en: 'Residential building with ground-floor commercial space and studio and 2-bedroom units. Visualizations showcase the urban façade and the variety of interior unit types, created for the project\'s pre-sale campaign.',
    },
    coverImages: [
      '/images/portfolio/angel-gallardo/01-FACHADA-ANGEL-GALLARDO.jpg',
      '/images/portfolio/angel-gallardo/04-MONOAMBIENTE-L.jpg',
    ],
    images: [
      '/images/portfolio/angel-gallardo/01-FACHADA-ANGEL-GALLARDO.jpg',
      '/images/portfolio/angel-gallardo/02-PLANTA-BAJA.jpg',
      '/images/portfolio/angel-gallardo/03-MOMO-AMBIENTE-CHIGO-AG.jpg',
      '/images/portfolio/angel-gallardo/04-MONOAMBIENTE-L.jpg',
      '/images/portfolio/angel-gallardo/2-AMBIENTES-AG.jpg',
    ],
  },
  {
    slug: 'casa-decker',
    title: 'Casa Decker',
    category: 'Vivienda Unifamiliar',
    client: 'Eber Panscin Arquitectura',
    location: 'Necochea, Argentina',
    year: '2026',
    tools: ['3ds Max', 'Corona Renderer', 'Photoshop'],
    description: {
      es: 'Vivienda unifamiliar de diseño contemporáneo en Necochea. El trabajo abarca una cobertura integral: exteriores de frente y contrafrente, galería, y espacios interiores completos — estar, comedor, cocina, dormitorio, vestidor y baño — para una presentación exhaustiva del proyecto.',
      en: 'Contemporary single-family residence in Necochea. The work covers a full scope: front and rear exteriors, covered gallery, and complete interiors — living room, dining area, kitchen, bedroom, walk-in closet and bathroom — for a comprehensive project presentation.',
    },
    coverImages: [
      '/images/portfolio/casa-decker/01-FRENTE-DEKCER.jpg',
      '/images/portfolio/casa-decker/03-ESTAR-COMEDOR.jpg',
      '/images/portfolio/casa-decker/08-BAÑO.jpg',
    ],
    images: [
      '/images/portfolio/casa-decker/01-FRENTE-DEKCER.jpg',
      '/images/portfolio/casa-decker/02-CONTRAFRENTE.jpg',
      '/images/portfolio/casa-decker/03-ESTAR-COMEDOR.jpg',
      '/images/portfolio/casa-decker/04-ESTAR.jpg',
      '/images/portfolio/casa-decker/05-Galeria-Decker.jpg',
      '/images/portfolio/casa-decker/05-COCINA.jpg',
      '/images/portfolio/casa-decker/07-DORMITORIO.jpg',
      '/images/portfolio/casa-decker/08-BAÑO.jpg',
      '/images/portfolio/casa-decker/09-VESTIDOR.jpg',
    ],
  },
  {
    slug: 'diaz-velez',
    title: 'Díaz Vélez',
    category: 'Multifamiliar',
    client: 'Lostres Arquitectura',
    location: 'Buenos Aires, Argentina',
    year: '2025',
    tools: ['3ds Max', 'Corona Renderer', 'Photoshop'],
    description: {
      es: 'Edificio residencial en CABA. Visualizaciones de fachada orientadas a comunicar la materialidad y volumetría del proyecto para su etapa de comercialización.',
      en: 'Residential building in Buenos Aires. Façade visualizations aimed at communicating the project\'s materiality and massing during its commercialization phase.',
    },
    coverImages: [
      '/images/portfolio/diaz-velez/DIAZ-VELEZ-01.jpg',
      '/images/portfolio/diaz-velez/DIAZ-VELEZ-02.jpg',
    ],
    images: [
      '/images/portfolio/diaz-velez/DIAZ-VELEZ-01.jpg',
      '/images/portfolio/diaz-velez/DIAZ-VELEZ-02.jpg',
    ],
  },
  {
    slug: 'pride',
    title: 'Pride',
    category: 'Multifamiliar',
    client: '8va Arquitectura',
    location: 'Buenos Aires, Argentina',
    year: '2024',
    tools: ['3ds Max', 'V-Ray', 'Photoshop'],
    description: {
      es: 'Edificio residencial en CABA con visualizaciones de fachada principal, laterales y espacios interiores. Un trabajo integral que acompaña la identidad arquitectónica del proyecto con renders de alta precisión.',
      en: 'Residential building in Buenos Aires with visualizations of the main façade, side elevations and interior spaces. A comprehensive project that supports the building\'s architectural identity with high-precision renders.',
    },
    coverImages: [
      '/images/portfolio/pride/01-FRENTE-PRIDE-FINAL-B.jpg',
      '/images/portfolio/pride/02-INTERIOR-PRIDE-FINAL.jpg',
    ],
    images: [
      '/images/portfolio/pride/01-FRENTE-PRIDE-FINAL-B.jpg',
      '/images/portfolio/pride/02-INTERIOR-PRIDE-FINAL.jpg',
      '/images/portfolio/pride/03-LAT-DER-PRIDE-FINAL.jpg',
      '/images/portfolio/pride/PRIDE-LAT-IZQ-.jpg',
    ],
  },
  {
    slug: 'sport-club-bahia-blanca',
    title: 'Sport Club Bahía Blanca',
    category: 'Equipamiento Deportivo',
    client: 'Eber Panscin Arquitectura',
    location: 'Bahía Blanca, Argentina',
    year: '2024',
    tools: ['3ds Max', 'Corona Renderer', 'Photoshop'],
    description: {
      es: 'Complejo deportivo en Bahía Blanca. Las visualizaciones cubren el acceso al gimnasio, las canchas y las salas de máquinas, comunicando tanto la funcionalidad del espacio como su imagen institucional.',
      en: 'Sports complex in Bahía Blanca. Visualizations cover the gym entrance, courts and equipment rooms, conveying both the functionality of the space and its institutional image.',
    },
    coverImages: [
      '/images/portfolio/sport-club-bahia-blanca/01-ACCESO-GYM.jpg',
      '/images/portfolio/sport-club-bahia-blanca/02-CANCHAS-GYM.jpg',
    ],
    images: [
      '/images/portfolio/sport-club-bahia-blanca/01-ACCESO-GYM.jpg',
      '/images/portfolio/sport-club-bahia-blanca/02-CANCHAS-GYM.jpg',
      '/images/portfolio/sport-club-bahia-blanca/ACCESO-MAQUINAS-GIM.jpg',
      '/images/portfolio/sport-club-bahia-blanca/MAQUINAS-.jpg',
      '/images/portfolio/sport-club-bahia-blanca/MAQUINAZ-ZOOM.jpg',
    ],
  },
  {
    slug: 'suarez',
    title: 'Suárez',
    category: 'Multifamiliar',
    client: 'Lostres Arquitectura',
    location: 'Buenos Aires, Argentina',
    year: '2024',
    tools: ['3ds Max', 'Corona Renderer', 'Photoshop'],
    description: {
      es: 'Edificio residencial en CABA. Vistas de fachada que transmiten la escala y materialidad del proyecto en su contexto urbano, orientadas a la etapa de comercialización.',
      en: 'Residential building in Buenos Aires. Façade views that convey the project\'s scale and materiality in its urban context, created for the commercialization phase.',
    },
    coverImages: [
      '/images/portfolio/suarez/SUAREZ-FRENTE-01F.jpg',
      '/images/portfolio/suarez/SUAREZ-02F-.jpg',
    ],
    images: [
      '/images/portfolio/suarez/SUAREZ-FRENTE-01F.jpg',
      '/images/portfolio/suarez/SUAREZ-02F-.jpg',
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
