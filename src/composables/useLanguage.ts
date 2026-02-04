import { ref, computed } from 'vue';

type Language = 'en' | 'es';

const currentLanguage = ref<Language>('en');

// Load language from localStorage on first load
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('museum-language') as Language | null;
  if (saved === 'es') {
    currentLanguage.value = 'es';
  }
}

export const useLanguage = () => {
  const language = computed(() => currentLanguage.value);
  
  const switchLanguage = (lang: Language) => {
    currentLanguage.value = lang;
    if (typeof window !== 'undefined') {
      localStorage.setItem('museum-language', lang);
    }
  };

  const toggleLanguage = () => {
    switchLanguage(currentLanguage.value === 'en' ? 'es' : 'en');
  };

  const getNextLanguageLabel = () => {
    return currentLanguage.value === 'en' ? 'ES' : 'EN';
  };

  const t = (key: string, defaultValue: string = key): string => {
    return translations[currentLanguage.value][key as TranslationKeys] || defaultValue;
  };

  return {
    language,
    switchLanguage,
    toggleLanguage,
    getNextLanguageLabel,
    t,
  };
};

type TranslationKeys = 
  | 'nav.title'
  | 'nav.francisco'
  | 'nav.colonials'
  | 'nav.indigenous'
  | 'home.hero.title'
  | 'home.hero.subtitle'
  | 'home.hero.scrollMore'
  | 'home.exhibitions.title'
  | 'home.exhibitions.description'
  | 'home.exhibitions.structure'
  | 'home.exhibitions.francisco'
  | 'home.exhibitions.colonials'
  | 'home.exhibitions.indigenous'
  | 'home.cta.title'
  | 'home.cta.subtitle'
  | 'footer.copyright'
  | 'francisco.subtitle'
  | 'francisco.hero'
  | 'francisco.badge'
  | 'francisco.section.mainTopics'
  | 'francisco.section.relatedTopics'
  | 'francisco.topic.earlyLife.title'
  | 'francisco.topic.earlyLife.desc'
  | 'francisco.topic.military.title'
  | 'francisco.topic.military.desc'
  | 'francisco.topic.texiguat.title'
  | 'francisco.topic.texiguat.desc'
  | 'francisco.topic.postWar.title'
  | 'francisco.topic.postWar.desc'
  | 'francisco.topic.trinidad.title'
  | 'francisco.topic.trinidad.desc'
  | 'francisco.topic.political.title'
  | 'francisco.topic.political.desc'
  | 'francisco.topic.death.title'
  | 'francisco.topic.death.desc'
  | 'colonials.subtitle'
  | 'colonials.hero'
  | 'colonials.badge'
  | 'colonials.section.foundations'
  | 'colonials.section.economyStructure'
  | 'colonials.topic.creation.title'
  | 'colonials.topic.creation.desc'
  | 'colonials.topic.mining.title'
  | 'colonials.topic.mining.desc'
  | 'colonials.topic.church.title'
  | 'colonials.topic.church.desc'
  | 'colonials.topic.removal.title'
  | 'colonials.topic.removal.desc'
  | 'indigenous.subtitle'
  | 'indigenous.hero'
  | 'indigenous.badge'
  | 'indigenous.section.foundations'
  | 'indigenous.section.heritage'
  | 'indigenous.topic.folktales.title'
  | 'indigenous.topic.folktales.desc'
  | 'indigenous.topic.spirituality.title'
  | 'indigenous.topic.spirituality.desc'
  | 'indigenous.topic.culturalHeritage.title'
  | 'indigenous.topic.culturalHeritage.desc'
  | 'indigenous.topic.land.title'
  | 'indigenous.topic.land.desc'
  | 'indigenous.topic.community.title'
  | 'indigenous.topic.community.desc'
  | 'indigenous.topic.identity.title'
  | 'indigenous.topic.identity.desc'
  | 'button.backHome'
  | 'button.explore'
  | 'button.learnMore'
  | 'button.home'
  | 'home.hero.navSubtitle'
  | 'francisco.timeline.title'
  | 'francisco.timeline.earlyLife.title'
  | 'francisco.timeline.earlyLife.desc'
  | 'francisco.timeline.military.title'
  | 'francisco.timeline.military.desc'
  | 'francisco.timeline.federation.title'
  | 'francisco.timeline.federation.desc'
  | 'francisco.timeline.death.title'
  | 'francisco.timeline.death.desc'
  | 'francisco.section.exploreName'
  | 'colonials.timeline.title'
  | 'colonials.timeline.conquest.title'
  | 'colonials.timeline.conquest.desc'
  | 'colonials.timeline.towns.title'
  | 'colonials.timeline.towns.desc'
  | 'colonials.timeline.mining.title'
  | 'colonials.timeline.mining.desc'
  | 'colonials.timeline.independence.title'
  | 'colonials.timeline.independence.desc'
  | 'colonials.economy.mining.title'
  | 'colonials.economy.mining.desc'
  | 'colonials.economy.religious.title'
  | 'colonials.economy.religious.desc'
  | 'indigenous.civilizations.title'
  | 'indigenous.civilizations.ancient.title'
  | 'indigenous.civilizations.ancient.desc'
  | 'indigenous.civilizations.traditions.title'
  | 'indigenous.civilizations.traditions.desc'
  | 'indigenous.living.title'
  | 'indigenous.living.language.title'
  | 'indigenous.living.language.desc'
  | 'indigenous.living.arts.title'
  | 'indigenous.living.arts.desc'
  | 'indigenous.living.environment.title'
  | 'indigenous.living.environment.desc'
  | 'indigenous.modern.title'
  | 'indigenous.modern.subtitle'
  | 'indigenous.modern.pride.title'
  | 'indigenous.modern.pride.desc'
  | 'indigenous.modern.education.title'
  | 'indigenous.modern.education.desc'
  | 'indigenous.modern.advocacy.title'
  | 'indigenous.modern.advocacy.desc';

const translations: Record<Language, Record<TranslationKeys, string>> = {
  en: {
    'nav.title': 'Honduras Museum',
    'nav.francisco': 'Francisco Morazan',
    'nav.colonials': 'Spanish Colonials',
    'nav.indigenous': 'Indigenous Population',
    'home.hero.title': 'Welcome to the Honduras Museum',
    'home.hero.subtitle': 'Explore the rich and complex history of Honduras through three interconnected themes: the visionary leadership of Francisco Morazan, the lasting impacts of Spanish colonization, and the enduring heritage of indigenous populations.',
    'home.hero.scrollMore': 'Learn More',
    'home.exhibitions.title': 'Discover the Museum Layout',
    'home.exhibitions.description': 'This museum presents a carefully designed exhibition structure that reveals the interconnected nature of Honduran history. Each of the three main themes branches into specific historical periods, events, and cultural elements.',
    'home.exhibitions.structure': 'Exhibition Structure:',
    'home.exhibitions.francisco': 'Francisco Morazan - His early life, military ambitions, and political legacy',
    'home.exhibitions.colonials': 'Spanish Colonials - Colonial period, mining, and church influence',
    'home.exhibitions.indigenous': 'Indigenous Population - Ancient traditions, folktales, and cultural heritage',
    'home.cta.title': 'Ready to explore?',
    'home.cta.subtitle': 'Start with any of the three main exhibitions and journey through the fascinating history of Honduras.',
    'footer.copyright': 'Honduras Museum - MSOE Honors Texiguat Program',
    'francisco.subtitle': 'Visionary Leader of Central America',
    'francisco.hero': 'Francisco Morazan stands as one of Honduras\' most significant historical figures, a military commander and statesman whose ambitions shaped the region.',
    'francisco.badge': 'Main Exhibition',
    'francisco.section.mainTopics': 'Francisco Morazan',
    'francisco.section.relatedTopics': 'Historical Impact & Legacy',
    'francisco.topic.earlyLife.title': 'Early Life',
    'francisco.topic.earlyLife.desc': 'Born in Tegucigalpa, Francisco Morazan rose from humble beginnings to become a military strategist and political leader.',
    'francisco.topic.military.title': 'Military Ambitions',
    'francisco.topic.military.desc': 'His military campaigns unified Central American states and established him as a formidable military commander in the region.',
    'francisco.topic.texiguat.title': 'In Texiguat',
    'francisco.topic.texiguat.desc': 'Morazan\'s connection to Texiguat and his role in the town\'s development reflects his broader vision for Honduras.',
    'francisco.topic.postWar.title': 'Post-War Period',
    'francisco.topic.postWar.desc': 'Following military campaigns, Morazan worked to establish political stability and reform in Central America.',
    'francisco.topic.trinidad.title': 'Trinidad',
    'francisco.topic.trinidad.desc': 'His headquarters and base of operations during key periods of his leadership and military organization.',
    'francisco.topic.political.title': 'Political Ambitions',
    'francisco.topic.political.desc': 'Beyond military achievements, Morazan sought to create a unified, progressive Central American federation.',
    'francisco.topic.death.title': 'Death & Legacy',
    'francisco.topic.death.desc': 'His execution in 1842 marked a turning point, but his legacy continues to influence Central American politics.',
    'colonials.subtitle': 'The Legacy of Spanish Rule in Honduras',
    'colonials.hero': 'Discover how Spanish colonization transformed Honduras, from the initial conquest to the establishment of colonial institutions that shaped society for centuries.',
    'colonials.badge': 'Main Exhibition',
    'colonials.section.foundations': 'Colonial Foundations',
    'colonials.section.economyStructure': 'Colonial Economy & Structure',
    'colonials.topic.creation.title': 'Creation of Town',
    'colonials.topic.creation.desc': 'Spanish conquistadors established towns and settlements, reorganizing indigenous populations under colonial rule and establishing new urban centers.',
    'colonials.topic.mining.title': 'Mining',
    'colonials.topic.mining.desc': 'The extraction of precious metals and minerals became the economic foundation of colonial Honduras, driving Spanish interest and investment in the region.',
    'colonials.topic.church.title': 'Church',
    'colonials.topic.church.desc': 'The Catholic Church played a central role in colonial society, converting indigenous populations and establishing spiritual and cultural authority.',
    'colonials.topic.removal.title': 'Spanish Removal',
    'colonials.topic.removal.desc': 'The eventual decline of Spanish colonial rule and the transition to independence movements in the 19th century.',
    'indigenous.subtitle': 'Ancient Cultures & Enduring Heritage',
    'indigenous.hero': 'Explore the rich and ancient cultures of Honduras\' indigenous peoples, whose traditions, beliefs, and practices continue to shape the nation\'s cultural identity.',
    'indigenous.badge': 'Main Exhibition',
    'indigenous.section.foundations': 'Cultural Foundations',
    'indigenous.section.heritage': 'Indigenous Heritage & Traditions',
    'indigenous.topic.folktales.title': 'Folktales',
    'indigenous.topic.folktales.desc': 'Traditional stories passed down through generations preserve the wisdom, values, and imagination of indigenous communities.',
    'indigenous.topic.spirituality.title': 'Church & Spirituality',
    'indigenous.topic.spirituality.desc': 'Indigenous spiritual practices blended with introduced religions, creating unique syncretic traditions and belief systems.',
    'indigenous.topic.culturalHeritage.title': 'Cultural Heritage',
    'indigenous.topic.culturalHeritage.desc': 'The preservation and celebration of indigenous languages, crafts, and traditions in contemporary Honduras.',
    'indigenous.topic.land.title': 'Land & Territory',
    'indigenous.topic.land.desc': 'The historical and ongoing relationship between indigenous peoples and the lands they inhabited for centuries.',
    'indigenous.topic.community.title': 'Community & Society',
    'indigenous.topic.community.desc': 'The social structures, governance systems, and community organization of indigenous Honduran societies.',
    'indigenous.topic.identity.title': 'Contemporary Identity',
    'indigenous.topic.identity.desc': 'How indigenous Hondurans maintain their cultural identity and traditions in the modern world.',
    'button.backHome': 'Back to Home',
    'button.explore': 'Explore',
    'button.learnMore': 'Learn More',
    'button.home': 'Home',
    'home.hero.navSubtitle': 'Navigate through each exhibition to discover how these forces shaped the nation we see today.',
    'francisco.section.exploreName': 'Explore Other Exhibitions',
    'francisco.timeline.title': 'Historical Timeline',
    'francisco.timeline.earlyLife.title': 'Early Life & Rise',
    'francisco.timeline.earlyLife.desc': 'Francisco Morazan establishes himself as a military figure in Central America',
    'francisco.timeline.military.title': 'Military Campaigns',
    'francisco.timeline.military.desc': 'Leads military operations to unify Central American states and expand his influence',
    'francisco.timeline.federation.title': 'Federation & Reform',
    'francisco.timeline.federation.desc': 'Works to establish the Central American federation and implement political reforms',
    'francisco.timeline.death.title': 'Death & Legacy',
    'francisco.timeline.death.desc': 'His execution marks the end of an era, but his influence persists in Central American history',
    'colonials.timeline.title': 'Historical Timeline',
    'colonials.timeline.conquest.title': 'Conquest & Settlement',
    'colonials.timeline.conquest.desc': 'Spanish conquistadors arrive and establish colonial control over indigenous territories',
    'colonials.timeline.towns.title': 'Town Development',
    'colonials.timeline.towns.desc': 'Colonial towns are founded and organized under Spanish administrative systems',
    'colonials.timeline.mining.title': 'Mining Boom',
    'colonials.timeline.mining.desc': 'Mining operations expand, bringing wealth and labor demands to colonial Honduras',
    'colonials.timeline.independence.title': 'Independence',
    'colonials.timeline.independence.desc': 'Honduras breaks from Spanish colonial rule, though colonial institutions continue to influence society',
    'colonials.economy.mining.title': 'Mining Economy',
    'colonials.economy.mining.desc': 'Silver and other precious metals extracted from Honduras were the lifeblood of colonial commerce, attracting Spanish investment and labor, and establishing trade routes that connected the colony to Europe and other Spanish colonies.',
    'colonials.economy.religious.title': 'Religious Authority',
    'colonials.economy.religious.desc': 'The Church became the most powerful institution in colonial society, controlling vast lands, wealth, and influencing political decisions. Conversion efforts transformed the spiritual landscape and created new cultural identities.',
    'indigenous.civilizations.title': 'Indigenous Civilizations',
    'indigenous.civilizations.ancient.title': 'Ancient Societies',
    'indigenous.civilizations.ancient.desc': 'Before European contact, indigenous peoples of Honduras developed complex societies with sophisticated governance systems, agricultural practices, and architectural achievements that reflected their deep knowledge of the land.',
    'indigenous.civilizations.traditions.title': 'Traditions & Knowledge',
    'indigenous.civilizations.traditions.desc': 'Indigenous knowledge systems encompassed agriculture, medicine, astronomy, and art. These traditions were preserved and transmitted through oral history, artistic expression, and practical skills passed from generation to generation.',
    'indigenous.living.title': 'Living Traditions',
    'indigenous.living.language.title': 'Language & Oral Tradition',
    'indigenous.living.language.desc': 'Indigenous languages preserve unique ways of understanding the world. Oral traditions continue to transmit stories, histories, and cultural values through spoken word and ceremony.',
    'indigenous.living.arts.title': 'Arts & Crafts',
    'indigenous.living.arts.desc': 'Textiles, pottery, weaving, and other traditional crafts are expressions of cultural identity and continue to be vital parts of indigenous communities today.',
    'indigenous.living.environment.title': 'Environmental Stewardship',
    'indigenous.living.environment.desc': 'Indigenous peoples developed sustainable relationships with their environment, with practices rooted in deep ecological knowledge and respect for natural systems.',
    'indigenous.modern.title': 'Indigenous Honduras Today',
    'indigenous.modern.subtitle': 'Indigenous communities in Honduras continue to preserve and celebrate their cultural heritage while adapting to contemporary challenges. From language preservation initiatives to cultural festivals, indigenous Hondurans maintain strong connections to their ancestral traditions while shaping the nation\'s future.',
    'indigenous.modern.pride.title': 'Cultural Pride',
    'indigenous.modern.pride.desc': 'Celebrating indigenous heritage through festivals and community events',
    'indigenous.modern.education.title': 'Education',
    'indigenous.modern.education.desc': 'Teaching indigenous languages and histories to new generations',
    'indigenous.modern.advocacy.title': 'Advocacy',
    'indigenous.modern.advocacy.desc': 'Working to protect indigenous rights and land claims',
  },
  es: {
    'nav.title': 'Museo de Honduras',
    'nav.francisco': 'Francisco Morazán',
    'nav.colonials': 'Coloniales Españoles',
    'nav.indigenous': 'Población Indígena',
    'home.hero.title': 'Bienvenido al Museo de Honduras',
    'home.hero.subtitle': 'Explora la historia rica y compleja de Honduras a través de tres temas interconectados: el liderazgo visionario de Francisco Morazán, los impactos duraderos de la colonización española y la herencia perdurable de las poblaciones indígenas.',
    'home.hero.scrollMore': 'Aprende Más',
    'home.exhibitions.title': 'Descubre el Diseño del Museo',
    'home.exhibitions.description': 'Este museo presenta una estructura de exhibición cuidadosamente diseñada que revela la naturaleza interconectada de la historia hondureña. Cada uno de los tres temas principales se ramifica en períodos históricos específicos, eventos y elementos culturales.',
    'home.exhibitions.structure': 'Estructura de la Exhibición:',
    'home.exhibitions.francisco': 'Francisco Morazán - Su vida temprana, ambiciones militares y legado político',
    'home.exhibitions.colonials': 'Coloniales Españoles - Período colonial, minería e influencia de la iglesia',
    'home.exhibitions.indigenous': 'Población Indígena - Tradiciones antiguas, leyendas y patrimonio cultural',
    'home.cta.title': '¿Listo para explorar?',
    'home.cta.subtitle': 'Comienza con cualquiera de las tres exhibiciones principales y viaja a través de la historia fascinante de Honduras.',
    'footer.copyright': 'Museo de Honduras - Programa MSOE Honors Texiguat',
    'francisco.subtitle': 'Líder Visionario de América Central',
    'francisco.hero': 'Francisco Morazán se destaca como una de las figuras históricas más significativas de Honduras, un comandante militar y estadista cuyas ambiciones moldearon la región.',
    'francisco.badge': 'Exhibición Principal',
    'francisco.section.mainTopics': 'Francisco Morazán',
    'francisco.section.relatedTopics': 'Impacto Histórico y Legado',
    'francisco.topic.earlyLife.title': 'Vida Temprana',
    'francisco.topic.earlyLife.desc': 'Nacido en Tegucigalpa, Francisco Morazán ascendió desde orígenes humildes para convertirse en estratega militar y líder político.',
    'francisco.topic.military.title': 'Ambiciones Militares',
    'francisco.topic.military.desc': 'Sus campañas militares unificaron estados centroamericanos y lo establecieron como un comandante militar formidable en la región.',
    'francisco.topic.texiguat.title': 'En Texiguat',
    'francisco.topic.texiguat.desc': 'La conexión de Morazán con Texiguat y su papel en el desarrollo del pueblo refleja su visión más amplia para Honduras.',
    'francisco.topic.postWar.title': 'Período Post-Guerra',
    'francisco.topic.postWar.desc': 'Después de las campañas militares, Morazán trabajó para establecer estabilidad política y reforma en América Central.',
    'francisco.topic.trinidad.title': 'Trinidad',
    'francisco.topic.trinidad.desc': 'Su cuartel general y base de operaciones durante períodos clave de su liderazgo y organización militar.',
    'francisco.topic.political.title': 'Ambiciones Políticas',
    'francisco.topic.political.desc': 'Más allá de los logros militares, Morazán buscaba crear una federación centroamericana unificada y progresista.',
    'francisco.topic.death.title': 'Muerte y Legado',
    'francisco.topic.death.desc': 'Su ejecución en 1842 marcó un punto de inflexión, pero su legado continúa influyendo en la política centroamericana.',
    'colonials.subtitle': 'El Legado del Dominio Español en Honduras',
    'colonials.hero': 'Descubre cómo la colonización española transformó Honduras, desde la conquista inicial hasta el establecimiento de instituciones coloniales que moldearon la sociedad durante siglos.',
    'colonials.badge': 'Exhibición Principal',
    'colonials.section.foundations': 'Fundaciones Coloniales',
    'colonials.section.economyStructure': 'Economía y Estructura Colonial',
    'colonials.topic.creation.title': 'Creación de Pueblos',
    'colonials.topic.creation.desc': 'Los conquistadores españoles establecieron pueblos y asentamientos, reorganizando las poblaciones indígenas bajo el dominio colonial y estableciendo nuevos centros urbanos.',
    'colonials.topic.mining.title': 'Minería',
    'colonials.topic.mining.desc': 'La extracción de metales preciosos y minerales se convirtió en la base económica de Honduras colonial, impulsando el interés y la inversión españoles en la región.',
    'colonials.topic.church.title': 'Iglesia',
    'colonials.topic.church.desc': 'La Iglesia Católica jugó un papel central en la sociedad colonial, convirtiendo a las poblaciones indígenas y estableciendo autoridad espiritual y cultural.',
    'colonials.topic.removal.title': 'Remoción Española',
    'colonials.topic.removal.desc': 'La eventual decadencia del dominio colonial español y la transición a movimientos de independencia en el siglo XIX.',
    'indigenous.subtitle': 'Culturas Antiguas y Patrimonio Perdurable',
    'indigenous.hero': 'Explora las culturas ricas y antiguas de los pueblos indígenas de Honduras, cuyas tradiciones, creencias y prácticas continúan moldeando la identidad cultural de la nación.',
    'indigenous.badge': 'Exhibición Principal',
    'indigenous.section.foundations': 'Fundaciones Culturales',
    'indigenous.section.heritage': 'Patrimonio e Tradiciones Indígenas',
    'indigenous.topic.folktales.title': 'Leyendas',
    'indigenous.topic.folktales.desc': 'Las historias tradicionales transmitidas de generación en generación preservan la sabiduría, los valores y la imaginación de las comunidades indígenas.',
    'indigenous.topic.spirituality.title': 'Iglesia y Espiritualidad',
    'indigenous.topic.spirituality.desc': 'Las prácticas espirituales indígenas se mezclaron con religiones introducidas, creando tradiciones y sistemas de creencias sincrética únicos.',
    'indigenous.topic.culturalHeritage.title': 'Patrimonio Cultural',
    'indigenous.topic.culturalHeritage.desc': 'La preservación y celebración de lenguas indígenas, artesanías y tradiciones en Honduras contemporáneo.',
    'indigenous.topic.land.title': 'Tierra y Territorio',
    'indigenous.topic.land.desc': 'La relación histórica y continua entre los pueblos indígenas y las tierras que habitaron durante siglos.',
    'indigenous.topic.community.title': 'Comunidad y Sociedad',
    'indigenous.topic.community.desc': 'Las estructuras sociales, sistemas de gobierno y organización comunitaria de las sociedades indígenas hondureñas.',
    'indigenous.topic.identity.title': 'Identidad Contemporánea',
    'indigenous.topic.identity.desc': 'Cómo los hondureños indígenas mantienen su identidad cultural y tradiciones en el mundo moderno.',
    'button.backHome': 'Volver al Inicio',
    'button.explore': 'Explorar',
    'button.learnMore': 'Aprende Más',
    'button.home': 'Inicio',
    'home.hero.navSubtitle': 'Navega a través de cada exhibición para descubrir cómo estas fuerzas moldearon la nación que vemos hoy.',
    'francisco.section.exploreName': 'Explora Otras Exhibiciones',
    'francisco.timeline.title': 'Cronología Histórica',
    'francisco.timeline.earlyLife.title': 'Vida Temprana y Ascenso',
    'francisco.timeline.earlyLife.desc': 'Francisco Morazán se establece como una figura militar en América Central',
    'francisco.timeline.military.title': 'Campañas Militares',
    'francisco.timeline.military.desc': 'Lidera operaciones militares para unificar estados centroamericanos y expandir su influencia',
    'francisco.timeline.federation.title': 'Federación y Reforma',
    'francisco.timeline.federation.desc': 'Trabaja para establecer la federación centroamericana e implementar reformas políticas',
    'francisco.timeline.death.title': 'Muerte y Legado',
    'francisco.timeline.death.desc': 'Su ejecución marca el final de una era, pero su influencia persiste en la historia centroamericana',
    'colonials.timeline.title': 'Cronología Histórica',
    'colonials.timeline.conquest.title': 'Conquista y Asentamiento',
    'colonials.timeline.conquest.desc': 'Los conquistadores españoles llegan y establecen control colonial sobre territorios indígenas',
    'colonials.timeline.towns.title': 'Desarrollo de Pueblos',
    'colonials.timeline.towns.desc': 'Los pueblos coloniales se fundan y se organizan bajo sistemas administrativos españoles',
    'colonials.timeline.mining.title': 'Auge de la Minería',
    'colonials.timeline.mining.desc': 'Las operaciones mineras se expanden, trayendo riqueza y demandas laborales a Honduras colonial',
    'colonials.timeline.independence.title': 'Independencia',
    'colonials.timeline.independence.desc': 'Honduras se separa del dominio colonial español, aunque las instituciones coloniales continúan influyendo en la sociedad',
    'colonials.economy.mining.title': 'Economía Minera',
    'colonials.economy.mining.desc': 'La plata y otros metales preciosos extraídos de Honduras fueron el sustento del comercio colonial, atrayendo inversión y mano de obra españolas, y estableciendo rutas comerciales que conectaban la colonia con Europa y otras colonias españolas.',
    'colonials.economy.religious.title': 'Autoridad Religiosa',
    'colonials.economy.religious.desc': 'La Iglesia se convirtió en la institución más poderosa de la sociedad colonial, controlando vastas tierras, riqueza e influyendo en decisiones políticas. Los esfuerzos de conversión transformaron el paisaje espiritual y crearon nuevas identidades culturales.',
    'indigenous.civilizations.title': 'Civilizaciones Indígenas',
    'indigenous.civilizations.ancient.title': 'Sociedades Antiguas',
    'indigenous.civilizations.ancient.desc': 'Antes del contacto europeo, los pueblos indígenas de Honduras desarrollaron sociedades complejas con sistemas de gobierno sofisticados, prácticas agrícolas y logros arquitectónicos que reflejaban su profundo conocimiento de la tierra.',
    'indigenous.civilizations.traditions.title': 'Tradiciones y Conocimiento',
    'indigenous.civilizations.traditions.desc': 'Los sistemas de conocimiento indígena abarcaban agricultura, medicina, astronomía y arte. Estas tradiciones fueron preservadas y transmitidas a través de historias orales, expresión artística y habilidades prácticas transmitidas de generación en generación.',
    'indigenous.living.title': 'Tradiciones Vivas',
    'indigenous.living.language.title': 'Idioma y Tradición Oral',
    'indigenous.living.language.desc': 'Los idiomas indígenas preservan formas únicas de entender el mundo. Las tradiciones orales continúan transmitiendo historias, historias y valores culturales a través de la palabra hablada y la ceremonia.',
    'indigenous.living.arts.title': 'Artes y Artesanías',
    'indigenous.living.arts.desc': 'Los textiles, cerámica, tejidos y otras artesanías tradicionales son expresiones de identidad cultural y continúan siendo partes vitales de las comunidades indígenas hoy.',
    'indigenous.living.environment.title': 'Administración Ambiental',
    'indigenous.living.environment.desc': 'Los pueblos indígenas desarrollaron relaciones sostenibles con su entorno, con prácticas enraizadas en profundo conocimiento ecológico y respeto por los sistemas naturales.',
    'indigenous.modern.title': 'Honduras Indígena Hoy',
    'indigenous.modern.subtitle': 'Las comunidades indígenas en Honduras continúan preservando y celebrando su herencia cultural mientras se adaptan a los desafíos contemporáneos. Desde iniciativas de preservación de idiomas hasta festivales culturales, los hondureños indígenas mantienen conexiones fuertes con sus tradiciones ancestrales mientras moldean el futuro de la nación.',
    'indigenous.modern.pride.title': 'Orgullo Cultural',
    'indigenous.modern.pride.desc': 'Celebrar la herencia indígena a través de festivales y eventos comunitarios',
    'indigenous.modern.education.title': 'Educación',
    'indigenous.modern.education.desc': 'Enseñar idiomas indígenas e historias a nuevas generaciones',
    'indigenous.modern.advocacy.title': 'Defensa',
    'indigenous.modern.advocacy.desc': 'Trabajar para proteger los derechos indígenas y reclamaciones de tierras',
  },
};
