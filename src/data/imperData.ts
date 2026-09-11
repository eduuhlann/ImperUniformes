export interface ProductItem {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  details: string;
  image: string;
  tags: string[];
  fabrics: string[];
  recommendedFor: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  company: string;
  category: string;
  description: string;
  image: string;
  details: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  verified: boolean;
}

export interface ClientFeedbackVideo {
  id: string;
  videoPath: string;
  title: string;
}

export const COMPANY_INFO = {
  name: 'Imper Uniformes',
  legalName: 'Imper Uniformes Corporativos LTDA',
  cnpj: '55.707.752/0001-89',
  phoneDisplay: '(21) 98816-4571',
  phoneRaw: '5521988164571',
  whatsappMessage: 'Olá! Vim pelo site da Imper Uniformes e gostaria de solicitar um orçamento para minha empresa.',
  instagram: '@imperuniformes',
  instagramUrl: 'https://instagram.com/imperuniformes',
  email: 'impe.riounif@gmail.com',
  location: 'Rio de Janeiro, RJ - Atendimento com envio para todo o Brasil',
  minOrder: 'A partir de 20 peças',
};

export const CREDIBILITY_PILLARS = [
  { title: 'Produção personalizada', desc: 'Peças desenvolvidas sob medida com a identidade da sua marca' },
  { title: 'A partir de 20 peças', desc: 'Atendimento estruturado para pequenas, médias e grandes empresas' },
  { title: 'Atendimento corporativo', desc: 'Especialistas focados em uniformização de equipes profissionais' },
  { title: 'Envio para todo o Brasil', desc: 'Logística ágil e embalagem cuidadosa direto para sua empresa' },
];

export const CLIENT_LOGOS = [
  { name: 'CGN Brazil Energy', segment: 'Energia', logo: '/empresas/1.jpeg' },
  { name: 'Construtora Trindade Lopes', segment: 'Construção Civil', logo: '/empresas/2.jpeg' },
  { name: 'Central Búzios Material de Construção', segment: 'Material de Construção', logo: '/empresas/3.jpeg' },
  { name: 'Progetto Engenharia', segment: 'Engenharia & Consultoria', logo: '/empresas/4.jpeg' },
  { name: 'MPS Projetos Elétricos e Consultoria', segment: 'Projetos Elétricos', logo: '/empresas/5.jpeg' },
  { name: 'Dice Engenharia e Construções', segment: 'Engenharia & Construções', logo: '/empresas/6.jpeg' },
  { name: 'Tecbra Engenharia', segment: 'Engenharia', logo: '/empresas/7.jpeg' },
  { name: 'Sobras Alumínio Rio', segment: 'Esquadrias de Alumínio', logo: '/empresas/8.jpeg' },
  { name: 'Rio Sul Supermercados', segment: 'Supermercados & Varejo', logo: '/empresas/9.jpeg' },
  { name: 'Trammax', segment: 'Engenharia & Construções', logo: '/empresas/trammax.jpeg' },
  { name: 'Attemppt Solar', segment: 'Energia Solar', logo: '/empresas/attemppt-solar.jpeg' },
  { name: 'SerraMar', segment: 'Serralheria em Geral', logo: '/empresas/serramar.jpeg' },
  { name: 'Engretec', segment: 'Serviços para Condomínios', logo: '/empresas/engretec.jpeg' },
  { name: 'Geosea', segment: 'Investigações Geotécnicas', logo: '/empresas/geosea.jpeg' },
  { name: 'MD', segment: 'Projetos & Serviços Elétricos', logo: '/empresas/md.jpeg' },
  { name: 'Albani Paisagismo', segment: 'Paisagismo', logo: '/empresas/albani-paisagismo.jpeg' },
  { name: 'Meta', segment: 'Soluções & Serviços', logo: '/empresas/meta.jpeg' },
  { name: 'Scafom-Rux', segment: 'Soluções para Construção', logo: '/empresas/scafom-rux.jpeg' },
];

export const UNIFORM_SECTIONS = [
  {
    title: 'Camisa Polo Feminina',
    images: [
      '/uniformes/camisapolobabylook5.jpeg',
      '/uniformes/camisapolobabylook1.jpeg',
      '/uniformes/camisapolobabylook2.jpeg',
      '/uniformes/camisapolobabylook3.jpeg',
      '/uniformes/camisapolobabylook4.jpeg',
      '/uniformes/camisapolobabylook6.jpeg',
      '/uniformes/camisapolobabylook7.jpeg',
      '/uniformes/camisapolobabylook8.jpeg',
      '/uniformes/babylook1.jpeg',
      '/uniformes/babylook2.jpeg',
      '/uniformes/babylook3.jpeg',
      '/uniformes/babylook4.jpeg',
      '/uniformes/camisapolofeminina.jpeg',
    ],
  },
  {
    title: 'Camisa Polo Masculina',
    images: [
      '/uniformes1/camisapolomasculina1.jpeg',
      '/uniformes1/camisapolomasculina2.jpeg',
      '/uniformes1/camisapolomasculina3.jpeg',
      '/uniformes1/camisapolomasculina4.jpeg',
      '/uniformes1/camisapolomasculina5.jpeg',
      '/uniformes1/camisapolomasculina6.jpeg',
      '/uniformes1/camisapolomasculina7.jpeg',
      '/uniformes1/camisapolomasculina8.jpeg',
    ],
  },
  {
    title: 'Camisa Social Feminina',
    images: [
      '/uniformes/camisasocialfeminina.jpeg',
      '/uniformes/camisasocialfeminina1.jpeg',
      '/uniformes/camisasocialfeminina2.jpeg',
    ],
  },
  {
    title: 'Camisa Social Masculina',
    images: [
      '/uniformes/camisasocialmasculina.jpeg',
      '/uniformes/camisasocialmasculina1.jpeg',
      '/uniformes/camisasocialmasculina3.jpeg',
    ],
  },
  {
    title: 'Calça Social',
    images: [
      '/uniformes/calçasocialfeminina.jpeg',
      '/uniformes/calçasocialmasculina.jpeg',
    ],
  },
  {
    title: 'Camisa de Malha',
    images: [
      '/uniformes1/camisademalha.jpeg',
      '/uniformes1/camisademalha1.jpeg',
      '/uniformes1/camisademalha2.jpeg',
      '/uniformes1/camisademalha3.jpeg',
      '/uniformes1/camisademalha4.jpeg',
    ],
  },
  {
    title: 'Camisa UV Dry Fit',
    images: [
      '/uniformes1/camisauvdryfit.jpeg',
      '/uniformes1/camisauvdryfit1.jpeg',
      '/uniformes1/camisauvdryfit2.jpeg',
      '/uniformes1/camisauvdryfit3.jpeg',
      '/uniformes1/camisauvdryfit4.jpeg',
      '/uniformes1/camisauvdryfit5.jpeg',
      '/uniformes1/camisauvdryfit6.jpeg',
    ],
  },
  {
    title: 'Calça Jeans',
    images: [
      '/uniformes/calçajeansmasculina.jpeg',
      '/uniformes/calçajeansmasculina1.jpeg',
    ],
  },
  {
    title: 'Camisa de Malha com Refletivo',
    images: [
      '/uniformes1/camisademalhacomrefletivo1.jpeg',
      '/uniformes1/camisademalhacomrefletivo2.jpeg',
    ],
  },
  {
    title: 'Moletom',
    images: [
      '/uniformes1/moletom1.jpeg',
      '/uniformes1/moletom2.jpeg',
      '/uniformes1/moletom3.jpeg',
      '/uniformes1/moletom4.jpeg',
    ],
  },
  {
    title: 'Calça de Brim',
    images: [
      '/uniformes/calçabrim1.jpeg',
      '/uniformes/calçabrim2.jpeg',
      '/uniformes/calçabrim3.jpeg',
      '/uniformes/calçabrim4.jpeg',
      '/uniformes/caçlabrim5.jpeg',
    ],
  },
  {
    title: 'Bermuda de Brim',
    images: [
      '/uniformes/bermudabrim1.jpeg',
      '/uniformes/bermudabrim2.jpeg',
      '/uniformes/bermudabrim3.jpeg',
      '/uniformes/bermudabrim4.jpeg',
      '/uniformes/bermudabrim5.jpeg',
    ],
  },
  {
    title: 'Conjunto de Brim',
    images: [
      '/uniformes1/conjuntobrim1.jpeg',
      '/uniformes1/conjuntobrim2.jpeg',
      '/uniformes1/conjuntobrim3.jpeg',
      '/uniformes1/conjuntobrim4.jpeg',
      '/uniformes1/conjuntobrim5.jpeg',
    ],
  },
];

export const UNIFORM_CATEGORIES = [
  { name: 'Camisas Polo', image: UNIFORM_SECTIONS[0].images[0] },
  { name: 'Camisas Polos Masculinas', image: UNIFORM_SECTIONS[1].images[0] },
  { name: 'Camisas Sociais Femininas', image: UNIFORM_SECTIONS[2].images[0] },
  { name: 'Camisas Sociais Masculinas', image: UNIFORM_SECTIONS[3].images[0] },
  { name: 'Calças Sociais', image: UNIFORM_SECTIONS[4].images[0] },
  { name: 'Camisetas de Malha', image: UNIFORM_SECTIONS[5].images[0] },
  { name: 'Camisas UV Dry Fit', image: UNIFORM_SECTIONS[6].images[0] },
  { name: 'Calças Jeans', image: UNIFORM_SECTIONS[7].images[0] },
  { name: 'Camisas com Refletivo', image: UNIFORM_SECTIONS[8].images[0] },
  { name: 'Moletons', image: UNIFORM_SECTIONS[9].images[0] },
  { name: 'Calças de Brim', image: UNIFORM_SECTIONS[10].images[0] },
  { name: 'Bermudas de Brim', image: UNIFORM_SECTIONS[11].images[0] },
  { name: 'Conjuntos de Brim', image: UNIFORM_SECTIONS[12].images[0] },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'polo-piquet',
    name: 'Camisa Polo Piquet Comfort',
    category: 'Camisas Polo',
    shortDesc: 'Elegância e conforto térmico com gola estruturada para equipes corporativas e atendimento.',
    details: 'Confeccionada em malha piquet premium (50% algodão / 50% poliéster ou 100% algodão), com gola e punhos com costura reforçada. Acabamento fino que valoriza a marca com bordado no peito ou manga.',
    image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80',
    tags: ['Bordado', 'Piquet', 'Mais Vendido'],
    fabrics: ['Piquet 50/50', 'Algodão Penteado', 'Dry Fit'],
    recommendedFor: ['Escritórios', 'Vendas', 'Clínicas', 'Eventos'],
  },
  {
    id: 'polo-baby-look',
    name: 'Camisa Polo Baby Look Feminina',
    category: 'Baby Looks',
    shortDesc: 'Modelagem anatômica feminina com excelente caimento, elegância e durabilidade.',
    details: 'Desenhada para valorizar o caimento sem comprometer o conforto no dia a dia. Costuras reforçadas e gola polo alinhada.',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80',
    tags: ['Feminino', 'Bordado', 'Anatômico'],
    fabrics: ['Piquet Premium', 'Viscose Mista', 'Malha PV'],
    recommendedFor: ['Recepção', 'Atendimento', 'Comércios', 'Clínicas'],
  },
  {
    id: 'camiseta-personalizada',
    name: 'Camisetas de Malha Manga Curta',
    category: 'Camisetas',
    shortDesc: 'Perfeita para operações diárias, eventos e equipes dinâmicas com alta durabilidade.',
    details: 'Tecido macio e respirável com costura dupla nos ombros e gola. Ideal para grandes tiragens em Silk Screen ou DTF.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    tags: ['Silk Screen', 'DTF', 'Versátil'],
    fabrics: ['100% Algodão 30.1', 'Malha PV Antipilling', 'Dry Fit Poliéster'],
    recommendedFor: ['Operacional', 'Logística', 'Promotores', 'Prestadores'],
  },
  {
    id: 'camiseta-manga-longa',
    name: 'Camisa de Malha Manga Longa',
    category: 'Camisetas',
    shortDesc: 'Proteção contra vento, poeira e clima ameno para equipes em constante movimentação.',
    details: 'Malha estruturada de toque suave com punhos canelados firmes que não alargam após sucessivas lavagens.',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80',
    tags: ['Manga Longa', 'Conforto', 'Operacional'],
    fabrics: ['Algodão 30.1', 'Poliéster/Algodão'],
    recommendedFor: ['Armazéns', 'Manutenção', 'Transporte'],
  },
  {
    id: 'camisa-social',
    name: 'Camisa Social Masculina e Feminina',
    category: 'Camisas Sociais',
    shortDesc: 'Corte refinado para liderança, diretoria, áreas administrativas e consultorias.',
    details: 'Disponível em manga longa e manga curta, além de modelo 3/4 feminino. Tecido com caimento nobre de fácil passadoria (easy iron).',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
    tags: ['Corporativo', 'Easy Iron', 'Executivo'],
    fabrics: ['Tricoline Mista', 'Fio 50 Algodão', 'Maquinetado'],
    recommendedFor: ['Diretoria', 'Recepção Executiva', 'Escritórios de Advocacia/Engenharia'],
  },
  {
    id: 'calca-brim',
    name: 'Calça em Brim Pesado Operacional',
    category: 'Calças em Brim',
    shortDesc: 'Resistência máxima a atritos, rasgos e lavagens industriais constantes.',
    details: 'Brim 100% algodão super reforçado, com cós com meio elástico ou passantes para cinto, costuras duplas e bolsos reforçados.',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80',
    tags: ['Alta Resistência', '100% Algodão', 'Pesado'],
    fabrics: ['Brim Santanense 100% Algodão', 'Sarja Pesada'],
    recommendedFor: ['Construção Civil', 'Mecânicas', 'Metalúrgicas', 'Obras'],
  },
  {
    id: 'jaleco-brim',
    name: 'Jaleco em Brim para Obra e Indústria',
    category: 'Jalecos em Brim',
    shortDesc: 'Proteção superior para profissionais em campo, obras civis e chão de fábrica.',
    details: 'Fechamento frontal resistente com botões embutidos ou zíper coberto, bolsos frontais estratégicos e costuras travadas nos pontos de esforço.',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    tags: ['Segurança', 'Durabilidade', 'Obras'],
    fabrics: ['Brim Pesado 100% Algodão', 'Ripstop Opcional'],
    recommendedFor: ['Engenheiros de Campo', 'Mestres de Obra', 'Técnicos', 'Manutenção'],
  },
  {
    id: 'calca-jeans',
    name: 'Calça Jeans Corporativa e Operacional',
    category: 'Calças Jeans',
    shortDesc: 'Versatilidade urbana e robustez com visual moderno para equipes técnicas.',
    details: 'Denim com gramatura ideal para rotinas intensas sem perder o conforto ao sentar ou agachar.',
    image: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80',
    tags: ['Denim Resistente', 'Conforto', 'Urbano'],
    fabrics: ['Jeans 100% Algodão', 'Jeans com Elastano'],
    recommendedFor: ['Vendedores Externos', 'Técnicos de TI/Campo', 'Supervisores'],
  },
  {
    id: 'faixa-refletiva',
    name: 'Linha com Faixa Refletiva de Segurança',
    category: 'Outros Modelos',
    shortDesc: 'Atende normas de visibilidade diurna e noturna para tráfego e canteiro de obras.',
    details: 'Aplicação de faixas refletivas de alta intensidade em camisetas, camisas de manga longa e calças operacionais.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
    tags: ['Sinalização', 'NR-10', 'Segurança'],
    fabrics: ['Poliéster Alta Visibilidade', 'Brim com Refletivo'],
    recommendedFor: ['Rodovias', 'Galpões Logísticos', 'Obras Noturnas', 'Estacionamentos'],
  },
  {
    id: 'coletes',
    name: 'Coletes Corporativos e de Identificação',
    category: 'Coletes',
    shortDesc: 'Identificação visual imediata de funções para eventos, canteiros e equipes de apoio.',
    details: 'Coletes esportivos em tela respirável ou coletes operacionais estruturados com bolsos e fecho ajustável.',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    tags: ['Identificação', 'Respirável', 'Ajustável'],
    fabrics: ['Dry Furadinho', 'Brim Leve', 'Tactel'],
    recommendedFor: ['Eventos Corporativos', 'Supervisores', 'Equipes de Apoio'],
  },
  {
    id: 'uv-50',
    name: 'Camisa com Proteção UV 50+',
    category: 'Outros Modelos',
    shortDesc: 'Bloqueio de 98% dos raios solares para trabalhadores ao ar livre sob forte calor.',
    details: 'Poliamida e poliéster tecnológico com fator UV permanente. Secagem ultrarrápida e frescor contínuo.',
    image: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80',
    tags: ['UV 50+', 'Térmico', 'Secagem Rápida'],
    fabrics: ['Poliamida UV Tech', 'Dry Fit Microfibra'],
    recommendedFor: ['Equipes de Rua', 'Topografia', 'Telecom', 'Monitoramento Externo'],
  },
  {
    id: 'moletom-canguru',
    name: 'Casaco Moletom Canguru Flanelado',
    category: 'Outros Modelos',
    shortDesc: 'Aquecimento e padronização impecável para épocas frias e ambientes climatizados.',
    details: 'Moletom 3 cabos flanelado com capuz ajustável e bolso canguru. Não deforma nem encolhe com lavagens normais.',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    tags: ['Flanelado', 'Inverno', 'Unissex'],
    fabrics: ['Moletom 3 Cabos 70/30', 'Flanela Dupla'],
    recommendedFor: ['Câmaras Frias', 'Turnos Noturnos', 'Escritórios Climatizados'],
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'work-1',
    title: 'Polos Bordadas com Logo Aplicada',
    company: 'Construtora & Engenharia RJ',
    category: 'Bordados',
    description: 'Bordado computadorizado de alta definição no peito, com precisão cromática e alinhamento milimétrico do logotipo.',
    image: '/uniformes/camisapolomasculina.jpeg',
    details: 'Pedido corporativo com polos piquet para engenheiros e encarregados, com logo bordada no peito.',
  },
  {
    id: 'work-3',
    title: 'Uniformes Sociais Executivos',
    company: 'Rio Flat Apart Hotel',
    category: 'Social',
    description: 'Camisas sociais com corte sob medida e personalização discreta para recepção e administração.',
    image: '/uniformes/camisasocialmasculina.jpeg',
    details: 'Padronização elegante para recepcionistas, concierges e equipe administrativa hoteleira.',
  },
  {
    id: 'work-4',
    title: 'Camisetas Personalizadas para Linha de Distribuição',
    company: 'Solar Atacado & Logística',
    category: 'Silk Screen',
    description: 'Personalização aplicada com durabilidade, mantendo a cor e a definição após inúmeras lavagens.',
    image: '/uniformes/camisademalhapersonalizada.jpeg',
    details: 'Remessa de camisetas com logotipo aplicado frente e verso para a equipe de distribuição.',
  },
  {
    id: 'work-5',
    title: 'Detalhes de Bordado da Logo em Acabamento Premium',
    company: 'Vanguard Serviços Prediais',
    category: 'Bordados',
    description: 'Aplicação do logotipo com pontos de alta densidade, sem repuxar o tecido.',
    image: '/uniformes/camisapolomasculina2.jpeg',
    details: 'Inspeção de qualidade 100% manual antes da embalagem e envio.',
  },
  {
    id: 'work-6',
    title: 'Camisas UV Personalizadas para Equipes Externas',
    company: 'Equipes de Campo & Monitoramento',
    category: 'Personalizados',
    description: 'Tecido com proteção UV e personalização de alta definição para uso sob sol intenso.',
    image: '/uniformes/camisauvmangalonga.jpeg',
    details: 'Conjuntos completos com numeração e personalização integral para equipes externas.',
  },
];

export const PORTFOLIO_DETAILS = [
  {
    id: 'detail-1',
    title: 'Bordado aplicado',
    description: 'Logo bordada com fios de alta resistência.',
    image: '/uniformes/camisapolofeminina.jpeg',
    position: 'center',
    zoom: 2,
  },
  {
    id: 'detail-2',
    title: 'Punho e acabamento',
    description: 'Acabamento alinhado e costuras reforçadas na camisa.',
    image: '/uniformes/camisasocialmasculina1.jpeg',
    position: 'center',
    zoom: 1.8,
  },
  {
    id: 'detail-3',
    title: 'Gola estruturada',
    description: 'Gola polo com caimento alinhado.',
    image: '/uniformes/camisapolomasculina2.jpeg',
    position: 'center',
    zoom: 2,
  },
  {
    id: 'detail-4',
    title: 'Personalização DTF',
    description: 'Alta definição em tecidos técnicos.',
    image: '/uniformes/camisauvmangalonga2.jpeg',
    position: 'center',
    zoom: 1.8,
  },
];

export const CUSTOMIZATION_TYPES = [
  {
    name: 'Bordado Computadorizado',
    subtitle: 'Acabamento sofisticado e profissional',
    points: [
      'Visual premium e máxima elegância corporativa',
      'Altíssima durabilidade: não desbota e não desgasta com lavagens sucessivas',
      'Ideal para tecidos encorpados como camisas polo, sociais e jalecos de brim',
      'Matrizes digitais calibradas com fidelidade geométrica exata do seu logotipo',
    ],
  },
  {
    name: 'Silk Screen (Serigrafia)',
    subtitle: 'Ideal para grandes tiragens e melhor custo-benefício',
    points: [
      'Visual vibrante com excelente custo para médias e grandes quantidades',
      'Tintas resistentes que garantem ótima aderência à fibra têxtil',
      'Melhor escolha para camisetas promocionais, uniformes operacionais e moletons',
      'Cobertura homogênea em tecidos claros e escuros',
    ],
  },
  {
    name: 'Dtf (Direct To Film)',
    subtitle: 'Alta definição e riqueza de degradês',
    points: [
      'Impressão digital com reprodução fotográfica de degradês e sombras',
      'Excelente resistência a lavagens e toque incrivelmente elástico e suave',
      'Compatível com tecidos variados, poliéster, dry-fit e tecidos técnicos',
      'Sem limite de cores para logos complexos e modernos',
    ],
  },
  {
    name: 'Sublimação',
    subtitle: 'Cores vivas integradas ao tecido',
    points: [
      'Impressão em tecidos de poliéster com cores que não descascam nem racham',
      'Perfeita para peças esportivas, dry-fit e uniformes com áreas grandes',
      'Reprodução fiel de logos e artes em alta resolução',
      'Custo-benefício excelente para pedidos com personalização integral',
    ],
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Conte o que sua empresa precisa',
    description: 'Informe o modelo de uniforme, quantidade e necessidade da equipe.',
  },
  {
    number: '02',
    title: 'Receba orientação e orçamento',
    description: 'Nossa equipe orienta na escolha de tecidos e envia uma proposta personalizada.',
  },
  {
    number: '03',
    title: 'Aprove a personalização',
    description: 'Enviamos a simulação do uniforme com a identidade visual da sua empresa para sua aprovação.',
  },
  {
    number: '04',
    title: 'Produção',
    description: 'Após aprovação, o pedido entra em produção com acompanhamento rigoroso de qualidade.',
  },
  {
    number: '05',
    title: 'Receba seu pedido',
    description: 'Uniformes prontos com embalagem cuidadosa, enviados para todo o Brasil.',
  },
];

export const DIFFERENTIALS = [
  {
    title: 'Atendimento ágil e próximo',
    description: 'Respondemos com agilidade, esclarecemos suas dúvidas e acompanhamos sua empresa durante todo o pedido.',
  },
  {
    title: 'Segurança em cada escolha',
    description: 'Enviamos fotos de tecidos, apresentamos opções e orientamos sobre modelos e personalizações para que você saiba exatamente o que está escolhendo.',
  },
  {
    title: 'Compromisso com o prazo',
    description: 'Trabalhamos com prazos definidos e avaliamos demandas urgentes sempre que nossa produção permite.',
  },
  {
    title: 'Atendimento em todo o Brasil',
    description: 'Atendemos empresas de diferentes regiões e enviamos pedidos para todo o país.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'dep-1',
    name: 'Carlos Henrique Albuquerque',
    role: 'Gerente de Operações',
    company: 'Construtora & Engenharia RJ',
    content: 'Fizemos nossas polos com a Imper e ficamos muito satisfeitos! O atendimento foi rápido, o pessoal super atencioso e a qualidade das peças realmente é muito boa. Entregaram no prazo certinho, como combinado. Já estamos planejando o próximo pedido.',
    verified: true,
  },
  {
    id: 'dep-2',
    name: 'Mariana Duarte',
    role: 'Coordenação de Governança & RH',
    company: 'Rio Flat Apart Hotel',
    content: 'Uniformes de ótima qualidade! Fizemos camisetas e jalecos personalizados para nossa equipe e todo mundo elogiou. O tecido é muito bom e o bordado ficou perfeito. O atendimento pelo WhatsApp também foi super prático.',
    verified: true,
  },
  {
    id: 'dep-3',
    name: 'Roberto Valadares',
    role: 'Diretor de Logística',
    company: 'Guerreiros do Trecho Transportes',
    content: 'Já é o terceiro pedido que fazemos com a Imper e sempre dá tudo certo. Boa qualidade, entrega no prazo e um atendimento que realmente resolve. É bom ter um fornecedor que a gente pode confiar.',
    verified: true,
  },
];

export const CLIENT_FEEDBACK_VIDEOS: ClientFeedbackVideo[] = [
  {
    id: 'feedback-1',
    videoPath: '/feedbackvideos/WhatsApp Video 2026-09-07 at 19.40.09.mp4',
    title: 'Feedback Cliente 1',
  },
  {
    id: 'feedback-2',
    videoPath: '/feedbackvideos/WhatsApp Video 2026-09-07 at 19.40.21.mp4',
    title: 'Feedback Cliente 2',
  },
  {
    id: 'feedback-3',
    videoPath: '/feedbackvideos/WhatsApp Video 2026-09-07 at 19.40.24.mp4',
    title: 'Feedback Cliente 3',
  },
  {
    id: 'feedback-4',
    videoPath: '/feedbackvideos/WhatsApp Video 2026-09-07 at 19.40.29.mp4',
    title: 'Feedback Cliente 4',
  },
  {
    id: 'feedback-5',
    videoPath: '/feedbackvideos/WhatsApp Video 2026-09-07 at 19.40.38.mp4',
    title: 'Feedback Cliente 5',
  },
  {
    id: 'feedback-6',
    videoPath: '/feedbackvideos/WhatsApp Video 2026-09-07 at 19.40.41.mp4',
    title: 'Feedback Cliente 6',
  },
];

export const FAQ_ITEMS = [
  {
    q: 'Qual é o pedido mínimo?',
    a: 'Trabalhamos com pedidos a partir de 20 peças.',
  },
  {
    q: 'Vocês personalizam com a logo da empresa?',
    a: 'Sim. Trabalhamos com diferentes possibilidades de personalização de acordo com o modelo e a necessidade de cada empresa.',
  },
  {
    q: 'Vocês enviam para outros estados?',
    a: 'Sim. Realizamos envios para todo o Brasil.',
  },
  {
    q: 'Qual é o prazo de produção?',
    a: 'Nosso prazo padrão é de até 15 dias úteis, podendo variar conforme modelo, quantidade e personalização. Para demandas urgentes, consulte nossa equipe sobre a possibilidade de antecipação.',
  },
];
