import talentsAsset from "@/assets/talents-of-tomorrow.jpg.asset.json";
import roadHaitiAsset from "@/assets/road-project-haiti.jpeg.asset.json";
import urbanRoadsCameroonAsset from "@/assets/urban-roads-cameroon.jpeg.asset.json";
import atelierNoirImg from "@/assets/portfolio/atelier-noir.jpg";
import gamerHallAsset from "@/assets/gamer-hall.jpg.asset.json";
import personalWebsiteImg from "@/assets/portfolio/personal-website.jpg";
import dashboardMarketingAsset from "@/assets/dashboard-marketing.png.asset.json";
import fete1erMaiAsset from "@/assets/fete-1er-mai-razel.jpg.asset.json";
import gala10AnsImg from "@/assets/portfolio/gala-10-ans-studely.jpg";
import welcomeFestImg from "@/assets/portfolio/welcome-fest-studely.jpg";
import linkedinPhilippeImg from "@/assets/portfolio/linkedin-philippe-simo.jpg";
import personalBrandCeoImg from "@/assets/portfolio/personal-brand-ceo.jpg";

const talentsImg = talentsAsset.url;
const roadHaitiImg = roadHaitiAsset.url;
const urbanRoadsCameroonImg = urbanRoadsCameroonAsset.url;
const gamerHallImg = gamerHallAsset.url;
const dashboardMarketingImg = dashboardMarketingAsset.url;
const fete1erMaiImg = fete1erMaiAsset.url;

export const t = {
  en: {
    subtitle: "Marketing & Tech",
    aboutP1:
      "Welcome to my corner of the internet. I'm passionate about technology, business and building useful things. I believe you learn best by doing, and I try to get my hands on everything that interests me.",
    aboutP2Prefix: "You can reach me by",
    email: "email",
    or: "or on",
    on: "on",

    experience: "Experience",
    education: "Education",
    projects: "Portfolio",
    allCategories: "All",
    viewProject: "Visit project",
    backToPortfolio: "Back to portfolio",
    projectNotFound: "Project not found.",
    caseStudyRole: "Role",
    caseStudyOrg: "Organization",
    caseStudyPeriod: "Period",
    caseStudyChallenge: "The Challenge",
    caseStudyApproach: "The Approach",
    caseStudyImpact: "The Impact",
    writing: "Writing",
    recommendations: "Recommendations",
    recommendationsDesc: "A curated selection of books, films and TV shows I enjoy (or am planning to consume).",
    recommendationsLink: "Browse on Notion",

    music: "Music",
    musicDesc: "Feel like chilling? Check out my Spotify playlists. Be careful though : I can't vouch for my taste in music ;-)",
    musicLink: "Listen on Spotify",

    countries: "Countries I visited / lived in so far",

    nothingPublished: "Nothing published yet.",

    // Experience
    exp: [
      {
        period: "2025 –",
        role: "Growth Marketing Manager",
        company: "Studely",
        location: "Paris, France",
        description:
          "Leading marketing initiatives: migrated website to Webflow (perf score 37→89), scaled social media impressions from 1.4M to 34.1M (+2,216%), grew TikTok from 2.4k to 18.4k followers. Managing a team of 9. Organized Studely Welcome Fest (100+ attendees). Drove +300k organic visitors via blog automation with n8n.",
      },
      {
        period: "2023 –",
        role: "Growth Marketing Consultant",
        company: "Freelance",
        location: "Paris",
        description:
          "Supporting digital growth for startups and SMEs — paid & earned media, web design, branding, email marketing. Grew a CEO's LinkedIn by 175%, achieved 50%+ email open rate and 4x ROAS on Facebook ads.",
      },
      {
        period: "2020 – 2022",
        role: "Finance Project Manager",
        company: "Razel-Bec",
        location: "Port-au-Prince, Haiti",
        description:
          "Oversaw finance for all projects in-country. Re-established accounting on a €75M, 42 km road project (500 people on site). Led a team of 17. Reduced accounting errors by 90%, recovering €2M in discrepancies.",
      },
      {
        period: "2017 – 2019",
        role: "Finance Project Manager",
        company: "Razel-Bec",
        location: "Bafoussam, Cameroon",
        description:
          "Managed finance for a €31M, 21 km urban roads project with 200 employees. Led a team of 10. Project delivered 6 months ahead of schedule, net result 9% better than forecast.",
      },
      {
        period: "2016",
        role: "Junior Controller",
        company: "CNAMTS",
        location: "Montreuil, France",
        description:
          "Reviewed procurement files, monitored KPI dashboards, drafted progress reports.",
      },
      {
        period: "2015",
        role: "Budget Analyst (Intern)",
        company: "CNAMTS",
        location: "Montreuil, France",
        description:
          "Analyzed departmental budget consumption on legal and audit contracts. Proposed improvements to budget allocation.",
      },
      {
        period: "2014 – 2015",
        role: "Inventory Analyst (Intern)",
        company: "General Electric",
        location: "Belfort, France",
        description:
          "Weekly audits of the GE Belfort plant. Drafted financial reports to reconcile discrepancies between logistical and financial stock data.",
      },
      {
        period: "2013",
        role: "Brand Manager Assistant (Intern)",
        company: "Reckitt",
        location: "Brussels, Belgium",
        description:
          "Marketing for Dettol in the Benelux zone: logistics management of 12,000 product samples/month, liaison with creative agencies for advertising projects.",
      },
    ],

    // Education
    edu: [
      {
        period: "2012 – 2017",
        role: "Master Grande École",
        company: "NEOMA Business School",
        description: "Specialization in Entrepreneurship. Master's degree.",
      },
      {
        period: "2023",
        role: "Software Engineering",
        company: "Codecademy",
        description: "React Native, Django, PostgreSQL, HTML, CSS.",
      },
      {
        period: "2023",
        role: "Product Manager Certification",
        company: "OpenClassrooms",
      },
      {
        period: "2014 – 2015",
        role: "Master 1 Exchange Program",
        company: "Institut Ucac-Icam",
      },
      {
        period: "2010 – 2012",
        role: "Preparatory Classes (ECE)",
        company: "Lycée Hector Berlioz",
      },
      {
        period: "2007 – 2010",
        role: "High School Diploma (ES)",
        company: "Lycée Emily Brontë",
        description: "With Honors.",
      },
    ],

    // Projects
    projects_list: [
      {
        slug: "gala-10-ans-studely",
        title: "Studely 10th Anniversary Gala",
        category: "events",
        image: gala10AnsImg,
        summary:
          "A landmark evening celebrating a decade of Studely's mission to support international students in France, bringing together partners, alumni, institutions, and team members.",
        meta: {
          role: "Event Lead & Growth Marketing Manager",
          organization: "Studely",
          period: "2025",
        },
        highlights: [
          { value: "10 years", label: "Brand milestone celebrated" },
          { value: "End-to-end", label: "Concept, production & guest experience" },
          { value: "VIP & Alumni", label: "Partners, institutions & community gathered" },
        ],
        challenge:
          "Marking ten years of growth required more than a standard corporate reception. Studely needed a flagship moment that honored its history, strengthened ties with key institutional and banking partners, and projected its vision for the next decade.",
        approach:
          "I coordinated the event from concept to execution: venue selection, editorial run-of-show, partner and VIP invitations, stage storytelling, branding assets, and on-site logistics with the marketing team and external vendors.",
        impact:
          "The gala reinforced Studely's positioning as a reference player in international student mobility, generated strong organic coverage across social channels, and deepened relationships with strategic partners.",
      },
      {
        slug: "welcome-fest-studely",
        title: "Studely Welcome Fest",
        category: "events",
        image: welcomeFestImg,
        summary:
          "An annual welcome festival designed to help newly arrived international students settle in France, build their network, and connect with Studely's partner ecosystem.",
        meta: {
          role: "Event Organizer & Growth Marketing Manager",
          organization: "Studely",
          period: "2025",
        },
        highlights: [
          { value: "100+", label: "International students in attendance" },
          { value: "Multi-partner", label: "Stands, talks & practical workshops" },
          { value: "High NPS", label: "Strong community engagement & word of mouth" },
        ],
        challenge:
          "Arriving in a new country for higher education can be overwhelming. Studely wanted to turn the back-to-school period into a warm, memorable physical touchpoint that went beyond digital onboarding.",
        approach:
          "I led the organization of the Welcome Fest in Paris—coordinating venue logistics, partner activations, registration funnels, social media promotion, and on-site student experience with a team of 9.",
        impact:
          "Over 100 students attended the event, creating authentic community bonds, generating user-created content across TikTok and Instagram, and boosting brand affinity at a pivotal moment in the student journey.",
      },
      {
        slug: "talents-of-tomorrow",
        title: "Talents of Tomorrow",
        category: "events",
        image: talentsImg,
        summary:
          "A scholarship competition I co-created to award up to €20,000 in funding to three outstanding African students for their first year of studies in France.",
        meta: {
          role: "Co-creator & Program Lead",
          organization: "Studely",
          period: "2025",
        },
        highlights: [
          { value: "€20,000", label: "Funding awarded to winning students" },
          { value: "3 laureates", label: "Selected through a multi-stage competition" },
          { value: "360°", label: "Selection, exam design & event logistics" },
        ],
        challenge:
          "Talented African students often face steep financial barriers when pursuing higher education in France. We wanted to design a merit-based, transparent, and inspiring initiative with real life-changing impact.",
        approach:
          "I co-created the competition format and managed every operational layer: application campaign, candidate screening, written and oral exam design, jury coordination, and awards ceremony logistics.",
        impact:
          "The program attracted strong interest across the continent, rewarded three exceptional laureates, and became a signature pillar of Studely's social impact and brand storytelling.",
        link: "https://www.studely.com/fr/talents",
      },
      {
        slug: "fete-1er-mai-razel",
        title: "May 1st Celebration — Razel",
        category: "events",
        image: fete1erMaiImg,
        summary:
          "Full-scale organization of the annual Labour Day celebration for Razel-Bec's on-site teams, bringing together hundreds of workers and staff for a memorable day of recognition.",
        meta: {
          role: "Finance & Admin Project Manager",
          organization: "Razel-Bec",
          period: "2018 – 2021",
        },
        highlights: [
          { value: "200–500", label: "Employees & staff gathered on site" },
          { value: "Full logistics", label: "Budget, catering, entertainment & safety" },
          { value: "Team cohesion", label: "Key annual morale & culture milestone" },
        ],
        challenge:
          "On large-scale civil engineering sites operating under intense schedules, maintaining morale and cohesion across hundreds of local and expatriate workers is essential. May 1st is a flagship cultural moment that requires flawless coordination.",
        approach:
          "Alongside my financial management duties, I oversaw budgeting, vendor sourcing, catering, branded apparel, entertainment, and site logistics to deliver a safe and festive celebration for the entire workforce.",
        impact:
          "The celebration strengthened team spirit across all departments, recognized the daily commitment of field crews, and became one of the most anticipated moments of the year on site.",
      },
      {
        slug: "linkedin-philippe-simo",
        title: "Growing Philippe Simo's LinkedIn from 4k to 50k Followers in 6 Months",
        category: "marketing",
        image: linkedinPhilippeImg,
        summary:
          "A 6-month LinkedIn growth and editorial strategy that scaled Philippe Simo's audience more than 12x—from 4,000 to 50,000 followers.",
        meta: {
          role: "Growth & Content Strategist",
          organization: "Philippe Simo (Investir au Pays)",
          period: "6 months",
        },
        highlights: [
          { value: "4k → 50k", label: "LinkedIn followers in 6 months" },
          { value: "12.5x", label: "Audience growth multiplier" },
          { value: "Organic", label: "Editorial positioning & high-retention formats" },
        ],
        challenge:
          "Despite a massive presence on YouTube and other platforms, Philippe Simo's LinkedIn account was under-exploited at 4,000 followers and lacked a dedicated editorial voice tailored to decision-makers and diaspora entrepreneurs.",
        approach:
          "I structured a consistent LinkedIn content engine: sharpening the positioning, identifying high-resonance business and investment themes, crafting punchy hooks and storytelling formats, and iterating weekly based on engagement analytics.",
        impact:
          "In six months, the account grew from 4,000 to 50,000 followers purely organically, establishing LinkedIn as a major acquisition and authority channel for his ecosystem.",
      },
      {
        slug: "personal-brand-ceo",
        title: "Scaling a Startup CEO's Personal Brand",
        category: "marketing",
        image: personalBrandCeoImg,
        summary:
          "Executive personal branding and LinkedIn growth mission for a startup CEO, turning founder insights into a predictable inbound visibility engine.",
        meta: {
          role: "Growth Marketing Consultant",
          organization: "Startup CEO (Confidential)",
          period: "2023 – 2024",
        },
        highlights: [
          { value: "+175%", label: "LinkedIn audience growth" },
          { value: "50%+", label: "Email open rate on companion newsletter" },
          { value: "Inbound", label: "Consistent qualified leads & press outreach" },
        ],
        challenge:
          "The founder had deep industry expertise and a compelling vision, but no time to formalize a content strategy or publish consistently on LinkedIn to attract investors, clients, and talent.",
        approach:
          "I built a lightweight ghostwriting and editorial workflow: short weekly interviews to extract authentic stories, structured content pillars, LinkedIn profile optimization, and performance tracking tied to business goals.",
        impact:
          "The CEO's LinkedIn presence grew by 175%, generating recurring inbound conversations with prospects and partners while strengthening employer branding.",
      },
      {
        slug: "road-project-haiti",
        title: "Road Project — Haiti",
        category: "infra",
        image: roadHaitiImg,
        summary:
          "Financial turnaround and administration of a €75M, 42 km road infrastructure project in Haiti with 500 people on site.",
        meta: {
          role: "Finance Project Manager",
          organization: "Razel-Bec",
          period: "2020 – 2022",
        },
        highlights: [
          { value: "€75M", label: "Project revenue across 42 km of road" },
          { value: "-90%", label: "Reduction in accounting errors" },
          { value: "€2M", label: "Discrepancies recovered" },
        ],
        challenge:
          "Operating in a complex local environment, the 42 km road project faced major accounting discrepancies, fragmented reporting, and high operational pressure across 500 on-site staff.",
        approach:
          "I took over administration and finance for all in-country projects, restructured a team of 17, rebuilt accounting controls from the ground up, and implemented rigorous monthly reconciliation processes.",
        impact:
          "Accounting errors dropped by 90%, €2M in discrepancies were recovered, and headquarters regained full financial visibility over country operations.",
      },
      {
        slug: "urban-roads-cameroon",
        title: "Urban Roads Project — Cameroon",
        category: "infra",
        image: urbanRoadsCameroonImg,
        summary:
          "Financial leadership of a €31M, 21 km urban roads construction project in Bafoussam, Cameroon, delivered 6 months ahead of schedule.",
        meta: {
          role: "Finance Project Manager",
          organization: "Razel-Bec",
          period: "2017 – 2019",
        },
        highlights: [
          { value: "€31M", label: "Project revenue (21 km urban roads)" },
          { value: "6 months", label: "Delivered ahead of schedule" },
          { value: "+9%", label: "Net result above initial forecast" },
        ],
        challenge:
          "Large urban civil works require tight cash-flow discipline, supplier coordination, and continuous cost control to protect margins while keeping 200 employees moving at pace.",
        approach:
          "I managed a finance and admin team of 10, steering cost tracking, subcontractor billing, payroll, and budget forecasts in close partnership with the project director.",
        impact:
          "The project was delivered 6 months ahead of schedule with a net financial result 9% stronger than initially forecast.",
      },
      {
        slug: "latelier-noir",
        title: "L'Atelier Noir",
        category: "software",
        image: atelierNoirImg,
        summary:
          "A creative web experience designed and shipped rapidly with Lovable, exploring editorial aesthetics and interactive storytelling.",
        meta: {
          role: "Creator & Builder",
          organization: "Personal Project",
          period: "2025",
        },
        highlights: [
          { value: "0 → 1", label: "From concept to live web app" },
          { value: "Lovable", label: "Built with AI-assisted engineering" },
          { value: "Editorial", label: "Focus on typography & visual craft" },
        ],
        challenge:
          "Exploring how modern AI-native development tools can compress the gap between a creative direction and a polished, live web product.",
        approach:
          "I designed the visual identity, crafted the copy, and iterated directly in Lovable to refine layout, responsiveness, and interactions.",
        impact:
          "Shipped a live creative showcase in a fraction of the traditional development cycle.",
        link: "https://lateliernoir.lovable.app",
      },
      {
        slug: "the-gamer-hall",
        title: "The Gamer Hall",
        category: "esport",
        image: gamerHallImg,
        summary:
          "A video gaming lounge and esports community space I founded and launched in Yaoundé, Cameroon.",
        meta: {
          role: "Founder",
          organization: "The Gamer Hall",
          period: "Yaoundé, Cameroon",
        },
        highlights: [
          { value: "Yaoundé", label: "Physical gaming lounge launched from scratch" },
          { value: "Esport", label: "Local tournaments & community hub" },
          { value: "End-to-end", label: "Business plan, setup, operations & marketing" },
        ],
        challenge:
          "Competitive gaming and console culture were growing rapidly in Cameroon, yet players lacked a dedicated, high-quality venue to play, compete, and socialize.",
        approach:
          "I designed the venue concept, sourced hardware and equipment, set up daily operations, and built local awareness through tournaments and social media.",
        impact:
          "The Gamer Hall became a local gathering spot for gamers in Yaoundé and a hands-on entrepreneurial experience in retail and community building.",
        link: "https://www.facebook.com/thegamerhall/photos?locale=fr_FR",
      },
      {
        slug: "personal-website",
        title: "Personal Website",
        category: "software",
        image: personalWebsiteImg,
        summary:
          "This minimalist bilingual site, inspired by Paul Graham and Andrej Karpathy, built with React and Tailwind to share my work, writing, and experiments.",
        meta: {
          role: "Designer & Developer",
          organization: "Personal Project",
          period: "2025 – Present",
        },
        highlights: [
          { value: "100% Static", label: "Zero database, fast & maintainable" },
          { value: "EN / FR", label: "Seamless bilingual experience" },
          { value: "Minimalist", label: "Editorial serif typography & calm layout" },
        ],
        challenge:
          "Creating a personal home on the internet that stays timeless, fast, easy to update, and free from unnecessary complexity.",
        approach:
          "I built a clean static React + Tailwind architecture with structured TypeScript data files, a cream editorial palette, and dedicated pages for essays and case studies.",
        impact:
          "A central hub for my portfolio, writing, and professional identity at jordanbeambong.com.",
        link: "https://www.jordanbeambong.com",
      },
      {
        slug: "dashboard-marketing",
        title: "Dashboard Marketing",
        category: "marketing",
        image: dashboardMarketingImg,
        summary:
          "A marketing analytics dashboard template built to centralize acquisition, retention, and revenue KPIs in one clear view.",
        meta: {
          role: "Creator & Growth Marketer",
          organization: "Personal Project",
          period: "2026",
        },
        highlights: [
          { value: "All-in-one", label: "Acquisition, retention & revenue metrics" },
          { value: "Template", label: "Ready to adapt for marketing teams" },
          { value: "Live demo", label: "Interactive web application" },
        ],
        challenge:
          "Marketing teams often juggle scattered spreadsheets and ad platforms, making it hard to read funnel performance at a glance.",
        approach:
          "I designed a clean, executive-ready dashboard template highlighting the metrics that actually drive growth decisions, built as a live interactive web app.",
        impact:
          "Provides a ready-to-use visual reference for structuring marketing reporting and weekly growth reviews.",
        link: "https://marketingdashboardtemplate.lovable.app",
      },
    ],
  },

  fr: {
    subtitle: "Marketing & Tech",
    aboutP1:
      "Bienvenue dans mon coin d'internet. Je suis passionné par la technologie, le business et la construction de choses utiles. Je crois qu'on apprend mieux en faisant, et j'essaie de mettre la main sur tout ce qui m'intéresse.",
    aboutP2Prefix: "Vous pouvez me contacter par",
    email: "email",
    or: "ou sur",
    on: "sur",

    experience: "Expérience",
    education: "Formation",
    projects: "Portfolio",
    allCategories: "Tous",
    viewProject: "Voir le projet",
    backToPortfolio: "Retour au portfolio",
    projectNotFound: "Projet introuvable.",
    caseStudyRole: "Rôle",
    caseStudyOrg: "Organisation",
    caseStudyPeriod: "Période",
    caseStudyChallenge: "Le défi",
    caseStudyApproach: "L'approche",
    caseStudyImpact: "Les résultats",
    writing: "Articles",
    recommendations: "Recommandations",
    recommendationsDesc: "Une sélection de livres, films et séries que j'apprécie.",
    recommendationsLink: "Voir sur Notion",

    music: "Musique",
    musicDesc: "Envie de passer du bon temps ? Découvrez mes playlists Spotify.",
    musicLink: "Écouter sur Spotify",

    countries: "Pays que j'ai visités / où j'ai vécu",

    nothingPublished: "Rien de publié pour l'instant.",

    exp: [
      {
        period: "2025 –",
        role: "Responsable Marketing & Growth",
        company: "Studely",
        location: "Paris, France",
        description:
          "Pilotage des initiatives marketing : migration du site vers Webflow (score perf 37→89), impressions réseaux sociaux de 1,4M à 34,1M (+2 216 %), TikTok de 2,4k à 18,4k abonnés. Management d'une équipe de 9 personnes. Organisation du Studely Welcome Fest (100+ participants). +300k visiteurs organiques grâce à l'automatisation du blog avec n8n.",
      },
      {
        period: "2023 –",
        role: "Consultant Growth Marketing",
        company: "Freelance",
        location: "Paris",
        description:
          "Accompagnement de startups et PME en croissance digitale — média payant & organique, web design, branding, email marketing. +175 % sur le LinkedIn d'un CEO, taux d'ouverture email >50 %, ROAS x4 sur Facebook ads.",
      },
      {
        period: "2020 – 2022",
        role: "Responsable Financier de Projets",
        company: "Razel-Bec",
        location: "Port-au-Prince, Haïti",
        description:
          "Supervision financière de tous les projets dans le pays. Remise en place de la comptabilité sur un projet routier de 75 M€ et 42 km (500 personnes sur site). Management d'une équipe de 17 personnes. Réduction de 90 % des erreurs comptables, récupération de 2 M€ d'écarts.",
      },
      {
        period: "2017 – 2019",
        role: "Responsable Financier de Projet",
        company: "Razel-Bec",
        location: "Bafoussam, Cameroun",
        description:
          "Gestion financière d'un projet de voirie urbaine de 31 M€ et 21 km, 200 employés. Management d'une équipe de 10. Projet livré 6 mois en avance, résultat net supérieur de 9 % aux prévisions.",
      },
      {
        period: "2016",
        role: "Contrôleur de Gestion Junior",
        company: "CNAMTS",
        location: "Montreuil, France",
        description:
          "Revue des dossiers de marchés publics, suivi de tableaux de bord KPI, rédaction de rapports d'avancement.",
      },
      {
        period: "2015",
        role: "Analyste Budgétaire (Stage)",
        company: "CNAMTS",
        location: "Montreuil, France",
        description:
          "Analyse de la consommation budgétaire sur les contrats juridiques et d'audit. Propositions d'amélioration de l'allocation budgétaire.",
      },
      {
        period: "2014 – 2015",
        role: "Analyste Inventaire (Stage)",
        company: "General Electric",
        location: "Belfort, France",
        description:
          "Audits hebdomadaires de l'usine GE Belfort. Rédaction de rapports financiers pour réconcilier les écarts entre stocks logistiques et financiers.",
      },
      {
        period: "2013",
        role: "Assistant Chef de Marque (Stage)",
        company: "Reckitt",
        location: "Bruxelles, Belgique",
        description:
          "Marketing de Dettol dans la zone Benelux : gestion logistique de 12 000 échantillons produits/mois, liaison avec les agences créatives.",
      },
    ],

    edu: [
      {
        period: "2012 – 2017",
        role: "Master Grande École",
        company: "NEOMA Business School",
        description: "Spécialisation Entrepreneuriat. Bac+5.",
      },
      {
        period: "2023",
        role: "Software Engineering",
        company: "Codecademy",
        description: "React Native, Django, PostgreSQL, HTML, CSS.",
      },
      {
        period: "2023",
        role: "Bac+5 Product Manager",
        company: "OpenClassrooms",
      },
      {
        period: "2014 – 2015",
        role: "Master 1",
        company: "Institut Ucac-Icam",
      },
      {
        period: "2010 – 2012",
        role: "Classe Préparatoire ECE",
        company: "Lycée Hector Berlioz",
      },
      {
        period: "2007 – 2010",
        role: "Baccalauréat ES",
        company: "Lycée Emily Brontë",
        description: "Mention Bien.",
      },
    ],

    projects_list: [
      {
        slug: "gala-10-ans-studely",
        title: "Gala des 10 Ans Studely",
        category: "events",
        image: gala10AnsImg,
        summary:
          "Une soirée phare célébrant dix ans d'engagement de Studely auprès des étudiants internationaux en France, réunissant partenaires, alumni, institutions et équipes.",
        meta: {
          role: "Responsable Événement & Growth Marketing",
          organization: "Studely",
          period: "2025",
        },
        highlights: [
          { value: "10 ans", label: "Cap symbolique célébré" },
          { value: "De A à Z", label: "Concept, production & expérience invités" },
          { value: "VIP & Alumni", label: "Partenaires, institutions & communauté réunis" },
        ],
        challenge:
          "Marquer dix années de croissance demandait bien plus qu'une simple réception. Studely avait besoin d'un moment fort pour honorer son histoire, consolider ses relations avec ses partenaires bancaires et institutionnels, et porter sa vision pour la décennie à venir.",
        approach:
          "J'ai coordonné l'événement de la conception à l'exécution : choix du lieu, conducteur éditorial, invitations VIP et partenaires, mise en scène, supports de marque et logistique sur place avec l'équipe marketing et les prestataires.",
        impact:
          "Le gala a renforcé le positionnement de Studely comme acteur de référence de la mobilité étudiante internationale, généré de nombreuses retombées organiques sur les réseaux sociaux et consolidé les liens avec les partenaires clés.",
      },
      {
        slug: "welcome-fest-studely",
        title: "Welcome Fest Studely",
        category: "events",
        image: welcomeFestImg,
        summary:
          "Un festival de rentrée conçu pour accueillir les étudiants internationaux fraîchement arrivés en France, faciliter leur intégration et les connecter à l'écosystème Studely.",
        meta: {
          role: "Organisateur & Responsable Growth Marketing",
          organization: "Studely",
          period: "2025",
        },
        highlights: [
          { value: "100+", label: "Étudiants internationaux présents" },
          { value: "Multi-partenaires", label: "Stands, prises de parole & ateliers pratiques" },
          { value: "Fort engagement", label: "Création de contenu & bouche-à-oreille" },
        ],
        challenge:
          "Arriver dans un nouveau pays pour ses études est une étape intense. Studely souhaitait transformer la rentrée en un rendez-vous physique chaleureux et utile, au-delà de l'accompagnement digital.",
        approach:
          "J'ai piloté l'organisation du Welcome Fest à Paris : logistique du lieu, activations partenaires, tunnel d'inscription, promotion sur les réseaux sociaux et expérience sur place avec une équipe de 9 personnes.",
        impact:
          "Plus de 100 étudiants ont participé à l'événement, créant de vrais liens communautaires, générant du contenu organique sur TikTok et Instagram et renforçant l'attachement à la marque dès le début du parcours étudiant.",
      },
      {
        slug: "talents-of-tomorrow",
        title: "Talents of Tomorrow",
        category: "events",
        image: talentsImg,
        summary:
          "Un programme de bourse que j'ai co-créé sous forme de jeu-concours permettant à trois étudiants africains de recevoir jusqu'à 20 000 € pour leur première année d'études en France.",
        meta: {
          role: "Co-créateur & Chef de Projet",
          organization: "Studely",
          period: "2025",
        },
        highlights: [
          { value: "20 000 €", label: "De financement attribué aux lauréats" },
          { value: "3 lauréats", label: "Sélectionnés au terme d'un concours complet" },
          { value: "360°", label: "Sélection, création des épreuves & logistique" },
        ],
        challenge:
          "De nombreux étudiants africains brillants se heurtent à des barrières financières pour étudier en France. L'objectif était de créer une initiative méritocratique, transparente et inspirante, avec un impact concret.",
        approach:
          "J'ai co-créé le format du concours et géré l'ensemble des volets opérationnels : campagne de candidatures, présélection, conception des épreuves écrites et orales, coordination du jury et logistique de la remise des prix.",
        impact:
          "Le programme a suscité un fort engouement sur le continent, récompensé trois profils d'exception et s'est imposé comme un pilier de l'impact social et du rayonnement de Studely.",
        link: "https://www.studely.com/fr/talents",
      },
      {
        slug: "fete-1er-mai-razel",
        title: "Fête du 1er Mai - Razel",
        category: "events",
        image: fete1erMaiImg,
        summary:
          "Organisation complète de la célébration annuelle de la Fête du Travail pour les équipes de chantier de Razel-Bec, réunissant plusieurs centaines de collaborateurs.",
        meta: {
          role: "Responsable Administratif & Financier",
          organization: "Razel-Bec",
          period: "2018 – 2021",
        },
        highlights: [
          { value: "200–500", label: "Collaborateurs réunis sur site" },
          { value: "Logistique totale", label: "Budget, restauration, animations & sécurité" },
          { value: "Cohésion", label: "Temps fort annuel de la culture chantier" },
        ],
        challenge:
          "Sur des grands chantiers de travaux publics soumis à des rythmes soutenus, entretenir la cohésion et la motivation entre centaines d'équipes locales et expatriées est crucial. Le 1er Mai est un rendez-vous culturel majeur qui demande une organisation irréprochable.",
        approach:
          "En parallèle de mes responsabilités financières, j'ai piloté le budget, la sélection des prestataires, la restauration, les tenues dédiées, les animations et la logistique terrain pour offrir une journée festive et sécurisée à l'ensemble du personnel.",
        impact:
          "L'événement a renforcé l'esprit d'équipe entre tous les services, valorisé l'engagement quotidien des équipes terrain et constitué l'un des moments les plus attendus de l'année sur le chantier.",
      },
      {
        slug: "linkedin-philippe-simo",
        title: "Faire grossir le compte LinkedIn de Philippe Simo de 4k à 50k followers en 6 mois",
        category: "marketing",
        image: linkedinPhilippeImg,
        summary:
          "Une stratégie éditoriale et de croissance organique sur 6 mois ayant permis de multiplier par plus de 12 l'audience LinkedIn de Philippe Simo, de 4 000 à 50 000 abonnés.",
        meta: {
          role: "Stratège Growth & Contenu",
          organization: "Philippe Simo (Investir au Pays)",
          period: "6 mois",
        },
        highlights: [
          { value: "4k → 50k", label: "Abonnés LinkedIn en 6 mois" },
          { value: "x12,5", label: "Multiplicateur d'audience" },
          { value: "100 % organique", label: "Positionnement éditorial & formats à forte rétention" },
        ],
        challenge:
          "Malgré une forte notoriété sur YouTube et d'autres plateformes, le compte LinkedIn de Philippe Simo restait sous-exploité autour de 4 000 abonnés, sans ligne éditoriale dédiée aux décideurs et entrepreneurs de la diaspora.",
        approach:
          "J'ai mis en place une mécanique éditoriale régulière : clarification du positionnement, sélection des thématiques business et investissement les plus engageantes, travail sur les accroches et le storytelling, et itérations hebdomadaires à partir des données de performance.",
        impact:
          "En six mois, le compte est passé de 4 000 à 50 000 abonnés de façon purement organique, faisant de LinkedIn un canal majeur d'autorité et d'acquisition pour son écosystème.",
      },
      {
        slug: "personal-brand-ceo",
        title: "Faire grossir la personal brand d'un CEO de startup",
        category: "marketing",
        image: personalBrandCeoImg,
        summary:
          "Accompagnement en personal branding et croissance LinkedIn pour un CEO de startup, transformant son expertise en moteur régulier de visibilité entrante.",
        meta: {
          role: "Consultant Growth Marketing",
          organization: "CEO de Startup (Confidentiel)",
          period: "2023 – 2024",
        },
        highlights: [
          { value: "+175 %", label: "Croissance de l'audience LinkedIn" },
          { value: "> 50 %", label: "Taux d'ouverture sur la newsletter associée" },
          { value: "Inbound", label: "Prises de contact qualifiées & opportunités" },
        ],
        challenge:
          "Le dirigeant disposait d'une forte expertise métier et d'une vision claire, mais manquait de temps pour structurer une stratégie de contenu et publier régulièrement sur LinkedIn afin d'attirer clients, investisseurs et talents.",
        approach:
          "J'ai déployé un processus léger de ghostwriting et de stratégie éditoriale : courts entretiens hebdomadaires pour capter sa voix authentique, piliers de contenu ciblés, optimisation du profil et suivi précis des indicateurs clés.",
        impact:
          "La présence LinkedIn du CEO a progressé de 175 %, générant des conversations entrantes régulières avec des prospects et partenaires tout en renforçant la marque employeur.",
      },
      {
        slug: "road-project-haiti",
        title: "Projet Routier — Haïti",
        category: "infra",
        image: roadHaitiImg,
        summary:
          "Redressement financier et gestion administrative d'un projet routier de 75 M€ et 42 km en Haïti mobilisant 500 personnes sur site.",
        meta: {
          role: "Responsable Financier de Projets",
          organization: "Razel-Bec",
          period: "2020 – 2022",
        },
        highlights: [
          { value: "75 M€", label: "Chiffre d'affaires sur 42 km de route" },
          { value: "-90 %", label: "Réduction des erreurs comptables" },
          { value: "2 M€", label: "D'écarts récupérés" },
        ],
        challenge:
          "Dans un contexte local complexe, le chantier de 42 km faisait face à d'importants écarts comptables, un reporting fragmenté et une forte pression opérationnelle auprès de 500 collaborateurs.",
        approach:
          "J'ai repris la supervision administrative et financière de tous les projets du pays, réorganisé une équipe de 17 personnes, reconstruit les contrôles comptables et instauré des clôtures mensuelles rigoureuses.",
        impact:
          "Les erreurs comptables ont été réduites de 90 %, 2 M€ d'écarts ont été récupérés et le siège a retrouvé une visibilité financière complète sur les opérations du pays.",
      },
      {
        slug: "urban-roads-cameroon",
        title: "Projet de Voirie Urbaine — Cameroun",
        category: "infra",
        image: urbanRoadsCameroonImg,
        summary:
          "Pilotage financier d'un projet de voirie urbaine de 31 M€ et 21 km à Bafoussam, au Cameroun, livré avec 6 mois d'avance.",
        meta: {
          role: "Responsable Financier de Projet",
          organization: "Razel-Bec",
          period: "2017 – 2019",
        },
        highlights: [
          { value: "31 M€", label: "Chiffre d'affaires (21 km de voirie)" },
          { value: "6 mois", label: "Livraison en avance sur le planning" },
          { value: "+9 %", label: "Résultat net supérieur aux prévisions" },
        ],
        challenge:
          "Les grands travaux de voirie urbaine exigent une discipline stricte sur la trésorerie, la facturation sous-traitants et le suivi budgétaire afin de protéger les marges tout en maintenant la cadence des 200 collaborateurs.",
        approach:
          "J'ai encadré une équipe administrative et financière de 10 personnes, en pilotant le contrôle de gestion, la paie, les fournisseurs et les prévisions en lien étroit avec la direction de projet.",
        impact:
          "Le chantier a été livré 6 mois en avance avec un résultat net supérieur de 9 % au budget initial.",
      },
      {
        slug: "latelier-noir",
        title: "L'Atelier Noir",
        category: "software",
        image: atelierNoirImg,
        summary:
          "Une expérience web créative conçue et déployée rapidement avec Lovable, explorant une direction artistique éditoriale soignée.",
        meta: {
          role: "Créateur & Builder",
          organization: "Projet personnel",
          period: "2025",
        },
        highlights: [
          { value: "0 → 1", label: "Du concept au site en ligne" },
          { value: "Lovable", label: "Développement assisté par IA" },
          { value: "Éditorial", label: "Travail sur la typographie et le rythme" },
        ],
        challenge:
          "Explorer comment les outils modernes de développement assisté par IA permettent de passer rapidement d'une intention créative à un produit web abouti.",
        approach:
          "J'ai défini la direction artistique, rédigé les contenus et itéré directement dans Lovable sur la mise en page, le responsive et les micro-interactions.",
        impact:
          "Mise en ligne d'une vitrine créative complète dans un délai très court.",
        link: "https://lateliernoir.lovable.app",
      },
      {
        slug: "the-gamer-hall",
        title: "The Gamer Hall",
        category: "esport",
        image: gamerHallImg,
        summary:
          "Une salle de jeu vidéo et un lieu communautaire esport que j'ai fondé et lancé à Yaoundé, au Cameroun.",
        meta: {
          role: "Fondateur",
          organization: "The Gamer Hall",
          period: "Yaoundé, Cameroun",
        },
        highlights: [
          { value: "Yaoundé", label: "Salle de jeu lancée de zéro" },
          { value: "Esport", label: "Tournois locaux & vie communautaire" },
          { value: "De A à Z", label: "Business plan, aménagement & marketing" },
        ],
        challenge:
          "La culture gaming et esport connaissait un fort essor au Cameroun, mais les joueurs manquaient d'un espace dédié, qualitatif et convivial pour jouer et s'affronter.",
        approach:
          "J'ai conçu le concept du lieu, sourcé le matériel, structuré les opérations quotidiennes et animé la communauté locale via des tournois et les réseaux sociaux.",
        impact:
          "The Gamer Hall est devenu un point de rendez-vous pour les passionnés de jeu vidéo à Yaoundé et une expérience entrepreneuriale concrète de bout en bout.",
        link: "https://www.facebook.com/thegamerhall/photos?locale=fr_FR",
      },
      {
        slug: "personal-website",
        title: "Site Personnel",
        category: "software",
        image: personalWebsiteImg,
        summary:
          "Ce site minimaliste bilingue, inspiré par Paul Graham et Andrej Karpathy, construit avec React et Tailwind pour partager mes projets, écrits et expériences.",
        meta: {
          role: "Designer & Développeur",
          organization: "Projet personnel",
          period: "2025 – Aujourd'hui",
        },
        highlights: [
          { value: "100 % Statique", label: "Sans base de données, rapide et léger" },
          { value: "EN / FR", label: "Expérience bilingue fluide" },
          { value: "Minimaliste", label: "Typographie serif et mise en page aérée" },
        ],
        challenge:
          "Créer un espace personnel sur le web qui reste intemporel, rapide, facile à faire évoluer et débarrassé de toute complexité superflue.",
        approach:
          "J'ai conçu une architecture statique React + Tailwind structurée autour de fichiers TypeScript, d'une palette crème chaleureuse et de pages dédiées aux articles et études de cas.",
        impact:
          "Un point d'ancrage central pour mon portfolio, mes écrits et mon identité professionnelle sur jordanbeambong.com.",
        link: "https://www.jordanbeambong.com",
      },
      {
        slug: "dashboard-marketing",
        title: "Dashboard Marketing",
        category: "marketing",
        image: dashboardMarketingImg,
        summary:
          "Un modèle de tableau de bord marketing conçu pour centraliser les indicateurs d'acquisition, de rétention et de revenus au même endroit.",
        meta: {
          role: "Créateur & Growth Marketer",
          organization: "Projet personnel",
          period: "2026",
        },
        highlights: [
          { value: "Tout-en-un", label: "Acquisition, rétention & revenus" },
          { value: "Modèle", label: "Prêt à être adapté par des équipes marketing" },
          { value: "Démo live", label: "Application web interactive" },
        ],
        challenge:
          "Les équipes marketing jonglent souvent entre plusieurs tableurs et plateformes publicitaires, ce qui rend difficile la lecture rapide de la performance globale du funnel.",
        approach:
          "J'ai conçu un modèle de tableau de bord clair et orienté décision, mettant en avant les indicateurs clés de croissance dans une interface web interactive.",
        impact:
          "Offre une base visuelle immédiatement exploitable pour structurer son reporting marketing et ses points hebdomadaires.",
        link: "https://marketingdashboardtemplate.lovable.app",
      },
    ],
  },
} as const;
