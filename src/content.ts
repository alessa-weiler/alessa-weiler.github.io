// All homepage copy lives here, so the page can be updated without touching components.

export type Link = { label: string; href: string };

export type DrawingKind = 'warehouse' | 'matching' | 'apps';

/** Featured work shows a snapshot of the paper or web page; projects get a line drawing. */
export type Visual = { snapshot: string; alt: string } | { drawing: DrawingKind };

export type WorkEntry = {
  title: string;
  href?: string;
  authors: string[];
  venue: string;
  year: string;
  links: Link[];
  summary: string;
  visual: Visual;
};

export type TimelineEntry = {
  title: string;
  org: string;
  period: string;
  detail: string;
};

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const SELF = 'Alessa Weiler';

const PAPERS = {
  collectiveBelief: asset('papers/weiler-hahn-2026-collective-belief.pdf'),
  aiVillage: asset('papers/weiler-2026-ai-village.pdf'),
  adherence: 'https://doi.org/10.3389/fphar.2023.1183818',
  nmd: asset('papers/weiler-2023-nmd-stem-cells.pdf'),
  carbonMonoxide: asset('papers/weiler-2024-carbon-monoxide-review.pdf'),
  geneDrive: 'https://doi.org/10.64898/2026.02.28.708699',
  oxsci: 'https://oxsci.org/the-link-between-body-and-mind-cant-keep-being-ignored-oxbridge-varsity-sci-symposium/',
};

export const PROFILE = {
  name: SELF,
  bio: [
    "I work where business, biology and software meet. I'm Engineering Lead at Telemachus, a VC-backed platform that builds and runs its own trading companies. I joined as the first technical hire and built the group's operational data platform and warehouse system from scratch.",
    'Before that I was CTO of Pont, an AI matching start-up, which I took through three pivots and three pilots with a team of five. I trained as a scientist, with a BA in Natural Sciences from Cambridge and an MRes in Molecular and Cellular Biology from Imperial. I have worked in labs at the MRC Laboratory of Molecular Biology, the Centre for Trophoblast Research and the Autism Research Centre.',
    "I've been programming since I was 13 and shipping software for clients since 17. As a scientist I measure before I claim anything, and I report the numbers that go against me.",
  ],
  links: [
    { label: 'Email', href: 'mailto:alessakcweiler@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alessa-weiler' },
    { label: 'GitHub', href: 'https://github.com/alessa-weiler' },
  ] as Link[],
};

export const RESEARCH_INTRO = [
  'My research asks how individual minds add up to group behaviour, first in people and now in teams of LLM agents. The tools are simulation, network analysis and statistics. I like models small enough to reason about and rich enough to surprise me.',
];

export const FEATURED: WorkEntry[] = [
  {
    title: 'Does Network Position Shape What LLM Agents Do? A Longitudinal Study of the AI Village',
    href: PAPERS.aiVillage,
    authors: [SELF],
    venue: 'Working paper',
    year: '2026',
    links: [{ label: 'paper', href: PAPERS.aiVillage }],
    summary:
      '17 months of logs from 46 frontier-model agents in a shared chat, turned into weekly social networks. Central agents ship more, mostly because productive agents become central rather than the other way round. Brokerage is the exception: projects shipped in weeks when an agent bridges groups are taken up and verified by peers more often.',
    visual: { snapshot: asset('thumbs/ai-village.jpg'), alt: 'First page of the AI Village paper' },
  },
  {
    title: 'Central and Peripheral Routes to Collective Belief: An Agent-Based Model of Mixed-Processing Populations',
    href: PAPERS.collectiveBelief,
    authors: [SELF, 'Ulrike Hahn'],
    venue: 'Working paper',
    year: '2026',
    links: [{ label: 'paper', href: PAPERS.collectiveBelief }],
    summary:
      'Exact Bayesian reasoners and opinion-averaging agents share one world model and one network. Across 22,000 simulation runs, a group needed a critical mass of 10–40% careful reasoners before it got noticeably more accurate. Broadcasting arguments beat pairwise sharing, and mixing the two kinds of reasoner produced polarisation on its own.',
    visual: { snapshot: asset('thumbs/collective-belief.jpg'), alt: 'First page of the collective belief paper' },
  },
  {
    title: 'Are there neurotoxic effects of low-level carbon monoxide exposure? A systematic review of animal model studies',
    href: PAPERS.carbonMonoxide,
    authors: [SELF],
    venue: 'MRes dissertation, Imperial College London',
    year: '2024',
    links: [{ label: 'pdf', href: PAPERS.carbonMonoxide }],
    summary:
      'A systematic review of 207 studies of carbon monoxide neurotoxicity in mammals, with a meta-analysis of the seven that measured behaviour after prenatal exposure. Low-level prenatal exposure went with a 36% impairment in behavioural measures compared with controls (95% CI −53.6 to −18.7%, p < 0.0001), but there was no clear dose-response relationship.',
    visual: { snapshot: asset('thumbs/carbon-monoxide.jpg'), alt: 'Title page of the carbon monoxide review' },
  },
  {
    title: 'Factors influencing adherence to non-communicable disease medication in India: secondary analysis of cross-sectional data from WHO-SAGE2',
    href: PAPERS.adherence,
    authors: ['Abraham Tolley', 'Kirpal Grewal', SELF, 'Anna Maria Papameletiou', 'Refaat Hassan', 'Saurav Basu'],
    venue: 'Frontiers in Pharmacology',
    year: '2023',
    links: [{ label: 'paper', href: PAPERS.adherence }],
    summary:
      "Multilevel modelling of the WHO SAGE-2 survey of mostly older adults across India, looking at why people don't start or stop taking medication for chronic disease. Older age was linked to better adherence, and anxiety and depression were not.",
    visual: { snapshot: asset('thumbs/frontiers.jpg'), alt: 'Article page in Frontiers in Pharmacology' },
  },
  {
    title: 'Investigating the role of nonsense-mediated decay in embryonic stem cell differentiation',
    href: PAPERS.nmd,
    authors: [SELF],
    venue: 'BA dissertation, Department of Physiology, Development and Neuroscience, University of Cambridge',
    year: '2023',
    links: [{ label: 'pdf', href: PAPERS.nmd }],
    summary:
      'Wet-lab and RNA-seq work on Smg1, a key gene in the nonsense-mediated decay pathway. Smg1 knockout embryos die, and their placentas lack the spongiotrophoblast and chorion layers and have extra trophoblast giant cells, which points to a role in placental lineage decisions. RNA-seq of embryonic and trophoblast stem cells showed that different cell lineages may depend on NMD in different ways.',
    visual: { snapshot: asset('thumbs/nmd-stem-cells.jpg'), alt: 'Title page of the NMD dissertation' },
  },
  {
    title: "The link between body and mind can't keep being ignored",
    href: PAPERS.oxsci,
    authors: [SELF],
    venue: 'Talk, Oxbridge Varsity Sci Symposium; covered in The Oxford Scientist',
    year: '2020',
    links: [{ label: 'write-up', href: PAPERS.oxsci }],
    summary:
      'Checklist-style psychiatric diagnosis overlooks the evidence linking mental health to the gut microbiome and the immune system. I argued that doctors and patients should be taught to treat the body as one connected system.',
    visual: { snapshot: asset('thumbs/oxsci.jpg'), alt: 'Article page in The Oxford Scientist' },
  },
  {
    title: 'Cross-species meta-analysis reveals determinants of homing gene drive performance',
    href: PAPERS.geneDrive,
    authors: ['Sebald A. N. Verkuijl', 'Edward R. Ivimey-Cook', 'Bairu Liu', 'Michael B. Bonsall', 'Philip T. Leftwich', 'Nikolai Windbichler'],
    venue: 'bioRxiv preprint',
    year: '2026',
    links: [{ label: 'preprint', href: PAPERS.geneDrive }],
    summary:
      'A multilevel meta-analysis of what makes homing gene drives work across insect species. My contribution was the analysis pipeline (R, Python, Bash): it scraped construct data from Benchling, scored gRNA sequences and fitted multivariate and random-forest models to test whether gRNA features predict inheritance rates.',
    visual: { snapshot: asset('thumbs/gene-drive.jpg'), alt: 'Preprint page on bioRxiv' },
  },
];

export const PROJECTS: WorkEntry[] = [
  {
    title: 'Operational data platform and warehouse system',
    authors: [],
    venue: 'Telemachus',
    year: '2026–present',
    links: [],
    summary:
      'The single source of truth for stock, orders, invoices and pricing across several business units and six warehouses (FastAPI, PostgreSQL), plus a separate Next.js storefront that stays up whatever happens to inventory. Non-technical colleagues ship through CI/CD, and business-unit leaders use an MCP server and an agent that books shipments and notifies warehouses.',
    visual: { drawing: 'warehouse' },
  },
  {
    title: 'Compatibility engine for organisational and healthcare matching',
    authors: [],
    venue: 'Pont',
    year: '2024–2025',
    links: [],
    summary:
      'An agent-based model that combines behavioural science with LLM inference to predict how well two people will work together. It shipped as a full production system (Python, PostgreSQL, vector search, Celery and Redis).',
    visual: { drawing: 'matching' },
  },
  {
    title: 'Client web and iOS apps',
    authors: [],
    venue: 'Freelance',
    year: '2020–2023',
    links: [],
    summary:
      'End-to-end builds for clients alongside my degree: a dating app, a planning and tracking app, landing pages, and iOS builds shipped through TestFlight.',
    visual: { drawing: 'apps' },
  },
];

export const EXPERIENCE: TimelineEntry[] = [
  {
    title: 'Engineering Lead',
    org: 'Telemachus, London',
    period: '2026–now',
    detail: 'First technical hire; owns the operational data platform end to end.',
  },
  {
    title: 'Chief Technology Officer',
    org: 'Pont, London',
    period: '2024–2025',
    detail: 'Built the product and a team of five; made the call to wind it down.',
  },
  {
    title: 'Researcher',
    org: 'Public Health Foundation of India (remote)',
    period: '2022–2023',
    detail: 'Modelled WHO SAGE-2 data; co-authored a peer-reviewed paper.',
  },
  {
    title: 'Medical Affairs Associate',
    org: 'Entheon Biomedical (remote)',
    period: '2021',
    detail: "Pharmacogenomics review, presented to both CEOs, that changed which genes went on the company's genetic test kit.",
  },
  {
    title: 'Freelance Software Consultant',
    org: 'London and Cambridge',
    period: '2020–2023',
    detail: 'Web and iOS apps for clients, built end to end.',
  },
  {
    title: 'Software Design Intern',
    org: 'Ticketmaster, London',
    period: '2019',
    detail: 'Placement with the software design team at 15.',
  },
];

export const EDUCATION: TimelineEntry[] = [
  {
    title: 'MRes Molecular and Cellular Biology (Merit)',
    org: 'Imperial College London',
    period: '2023–2024',
    detail: 'Computational modelling of CRISPR gene-drive inheritance; systematic review and meta-analysis of carbon monoxide neurotoxicity.',
  },
  {
    title: 'BA Natural Sciences',
    org: 'University of Cambridge',
    period: '2020–2023',
    detail: 'Physiology, development and neuroscience; bioinformatics; mathematical biology; psychology.',
  },
  {
    title: 'Baccalauréat français',
    org: 'Lycée Français Charles de Gaulle, London',
    period: '2014–2020',
    detail: 'Maths and science stream; top 2% nationally in maths and science.',
  },
];

export const MISC = [
  'I founded the Trinity Psychology Society at Cambridge with Sir Simon Baron-Cohen. It has 150+ members and is still running four years on. I peer review for JMIR and write on Medium about AI and collective psychology.',
  "Outside work I do stand-up comedy, have coxed senior men's rowing crews, and support autistic children and adults every other week. In 2021–22 I was a St John Ambulance vaccinator.",
];
