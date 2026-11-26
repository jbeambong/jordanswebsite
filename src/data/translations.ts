import talentsAsset from "@/assets/talents-of-tomorrow.jpg.asset.json";
import roadHaitiAsset from "@/assets/road-project-haiti.jpeg.asset.json";
import urbanRoadsCameroonAsset from "@/assets/urban-roads-cameroon.jpeg.asset.json";
import atelierNoirImg from "@/assets/portfolio/atelier-noir.jpg";
import gamerHallAsset from "@/assets/gamer-hall.jpg.asset.json";
import personalWebsiteImg from "@/assets/portfolio/personal-website.jpg";
import dashboardMarketingAsset from "@/assets/dashboard-marketing.png.asset.json";
import fete1erMaiAsset from "@/assets/fete-1er-mai-razel.jpg.asset.json";
import galaCoverAsset from "@/assets/gala/gala-cover.jpg.asset.json";
import galaPhoto2Asset from "@/assets/gala/gala-photo-2.jpg.asset.json";
import galaPhoto3Asset from "@/assets/gala/gala-photo-3.jpg.asset.json";
import galaPhoto4Asset from "@/assets/gala/gala-photo-4.jpg.asset.json";
import galaPhoto5Asset from "@/assets/gala/gala-photo-5.jpg.asset.json";
import galaPhoto6Asset from "@/assets/gala/gala-photo-6.jpg.asset.json";
import welcomeFestAsset from "@/assets/welcome-fest-studely.jpg.asset.json";
import linkedinPhilippeImg from "@/assets/portfolio/linkedin-philippe-simo.jpg";
import personalBrandCeoImg from "@/assets/portfolio/personal-brand-ceo.jpg";
import studelyTiktokImg from "@/assets/portfolio/studely-tiktok-growth.jpg";
import studelyFacebookImg from "@/assets/portfolio/studely-facebook-organic.jpg";
import studelyWebsiteImg from "@/assets/portfolio/studely-website-rebuild.jpg";
import studelyAiBlogImg from "@/assets/portfolio/studely-ai-blog-engine.jpg";
import studelyBrandImg from "@/assets/portfolio/studely-brand-turnaround.jpg";
import talentsPhoto1Asset from "@/assets/talents/TDD1-DakarExpress-36_1.jpg.asset.json";
import talentsPhoto2Asset from "@/assets/talents/TDD1-DakarExpress-28.jpg.asset.json";
import talentsPhoto3Asset from "@/assets/talents/TDD1-DakarExpress-24.jpg.asset.json";
import talentsPhoto4Asset from "@/assets/talents/TDD1-DakarExpress-12_2.jpg.asset.json";
import talentsPhoto5Asset from "@/assets/talents/TDD1-DakarExpress-5.jpg.asset.json";
import talentsPhoto6Asset from "@/assets/talents/FinaleTDD2026-32_1.jpg.asset.json";
import talentsPhoto7Asset from "@/assets/talents/FinaleTDD2026-11.jpeg.asset.json";
import talentsPhoto8Asset from "@/assets/talents/DSC08410_1.jpg.asset.json";
import talentsPhoto9Asset from "@/assets/talents/DSC07957_2.jpg.asset.json";
import talentsPhoto10Asset from "@/assets/talents/DSC01839_1.jpg.asset.json";

const talentsImg = talentsAsset.url;
const talentsGallery = [
  talentsPhoto1Asset.url,
  talentsPhoto2Asset.url,
  talentsPhoto3Asset.url,
  talentsPhoto4Asset.url,
  talentsPhoto5Asset.url,
  talentsPhoto6Asset.url,
  talentsPhoto7Asset.url,
  talentsPhoto8Asset.url,
  talentsPhoto9Asset.url,
  talentsPhoto10Asset.url,
];
const roadHaitiImg = roadHaitiAsset.url;
const urbanRoadsCameroonImg = urbanRoadsCameroonAsset.url;
const gamerHallImg = gamerHallAsset.url;
const dashboardMarketingImg = dashboardMarketingAsset.url;
const fete1erMaiImg = fete1erMaiAsset.url;
const welcomeFestImg = welcomeFestAsset.url;
const gala10AnsImg = galaCoverAsset.url;
const gala10AnsGallery = [
  galaPhoto2Asset.url,
  galaPhoto3Asset.url,
  galaPhoto4Asset.url,
  galaPhoto5Asset.url,
  galaPhoto6Asset.url,
];

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
        slug: "studely-tiktok-growth",
        title: "From 2k to 55k TikTok Followers — and 50 DMs a Day",
        category: "marketing",
        image: studelyTiktokImg,
        summary:
          "Grew Studely's TikTok from 2,000 to 56,000 followers in one year, generated tens of millions of impressions, and built an organic channel attracting nearly 100 DMs and comments every day.",
        meta: {
          role: "Growth Marketing Manager",
          organization: "Studely",
          period: "2025 – 2026",
        },
        highlights: [
          { value: "2k → 56k", label: "TikTok followers in one year" },
          { value: "Tens of millions", label: "Organic impressions generated" },
          { value: "~100 / day", label: "Inbound DMs and comments" },
        ],
        challenge:
          "TikTok is an exceptional awareness channel: even if its golden age of effortless reach is over, the results can still be remarkable for a B2C brand addressing more than 1 billion people worldwide. Before investing, we asked ourselves two questions. Did we need to be there? Yes: our students already spend time on TikTok, Instagram and Facebook, and stronger organic awareness could reduce our reliance on paid advertising. Did we have the resources to do it properly? Our team was very small, so we deliberately prioritized TikTok and Facebook, where we expected the fastest return on our awareness goal.",
        approach:
          "We made one non-negotiable rule: never sponsor our posts. In my view, paid boosting creates artificial numbers—followers who did not choose the brand, rarely interact and dilute the quality of the audience. Instead, we published almost every day and tested trends, face-cam videos, tutorials and promotional formats. We worked with African content creators as brand ambassadors, but relied above all on employee-led content. Without an external agency, our own team learned to write, perform, stage and film content. It took role-playing, organization and new production skills. We then doubled down on what worked and cut what did not.",
        impact:
          "The early numbers were modest, but consistency compounded. In one year, the account grew from 2,000 to 56,000 followers, generated tens of millions of impressions and became Studely's most powerful social channel and its leading source of inbound conversations, with nearly 100 DMs and comments arriving daily—entirely organically.",
      },
      {
        slug: "studely-facebook-organic",
        title: "+45k Facebook Fans Without Spending a Cent on Ads",
        category: "marketing",
        image: studelyFacebookImg,
        summary:
          "Grew Studely's Facebook community from 60,000 to 105,000 followers without paid ads by making the content more social, more useful and closer to what students actually consume.",
        meta: {
          role: "Growth Marketing Manager",
          organization: "Studely",
          period: "2025 – 2026",
        },
        highlights: [
          { value: "60k → 105k", label: "Facebook followers (+75%)" },
          { value: "€0 ad spend", label: "Purely organic community growth" },
          { value: "Almost 2 / day", label: "Publishing frequency reached" },
        ],
        challenge:
          "When I joined the team, Studely's Facebook page already had around 60,000 followers. There was some engagement, but nothing exceptional. The content felt corporate rather than native to social media, and growth had slowed. The opportunity was not to shout louder about the company: it was to turn the page into a destination students would genuinely want to follow, while keeping acquisition entirely organic.",
        approach:
          "We made the editorial line more social and less corporate, modeling it on the content students already enjoyed. Short, vertical videos replaced many landscape formats. We increased practical and informational content—tips, useful articles and face-cam explanations—and raised our publishing rhythm to almost two posts a day. We also diversified the media mix with podcasts, then clipped their most interesting moments into highly relatable Facebook videos. Each format served the same goal: make the page useful, human and worth coming back to.",
        impact:
          "The page gained 45,000 organic followers, growing from 60,000 to 105,000 (+75%) without spending a cent on ads. Beyond the audience growth, Studely built a much more engaging content engine that strengthened its everyday presence with prospective students and their parents.",
      },
      {
        slug: "studely-website-rebuild",
        title: "Rebuilding Studely's Website: Faster, Cheaper, 2× the Traffic",
        category: "software",
        image: studelyWebsiteImg,
        summary:
          "Led Studely's migration from a costly custom-coded website to Webflow, giving marketing direct control, fixing the mobile experience and doubling annual traffic from 1M to 2.1M visitors.",
        meta: {
          role: "Growth Marketing Manager & Project Lead",
          organization: "Studely",
          period: "2025",
        },
        highlights: [
          { value: "1M → 2.1M", label: "Annual website visitors" },
          { value: "60% → 38%", label: "Bounce rate reduction" },
          { value: "2 months", label: "From migration kickoff to Webflow launch" },
        ],
        challenge:
          "Studely had chosen to code its website from scratch rather than use a CMS. For a very small team, that meant relying daily on a developer, a webmaster and a designer for mockups and page changes. Even minor edits could take a week or more—far too slow for a startup. The blog was hosted on Contentful, where high traffic pushed the bill to nearly €700–800 per month. On top of that, many hand-coded pages were ugly or unusable on mobile, even though more than 90% of our prospects used only their phones.",
        approach:
          "I proposed migrating to Webflow, the CMS that best matched the site's requirements, and defended the business case to management. Once approved, I sourced the developer and led a migration that took roughly two months. We rebuilt the experience around mobile ergonomics, speed and clear conversion paths. Just as importantly, we created reusable design templates so the team would not have to reinvent the wheel for every page, and gave marketing direct control over everyday edits instead of routing each request through several specialists.",
        impact:
          "The new site removed a major operational bottleneck and reduced running costs while giving the marketing team real autonomy. Bounce rate dropped from 60% to 38%, and annual traffic more than doubled from 1 million visitors in 2024 to 2.1 million in 2025—supported by a faster, mobile-first experience.",
      },
      {
        slug: "studely-ai-blog-engine",
        title: "200+ Blog Articles Written by an AI Engine We Built In-House",
        category: "software",
        image: studelyAiBlogImg,
        summary:
          "Built an internal AI editorial generator to revive a dormant blog—publishing 200+ SEO-ready articles after two years of zero content output.",
        meta: {
          role: "Growth Marketing Manager & Builder",
          organization: "Studely",
          period: "2025 – 2026",
        },
        highlights: [
          { value: "200+ articles", label: "Published via the in-house AI engine" },
          { value: "0 → 200+", label: "After 2 years with zero blog content" },
          { value: "In-house", label: "Custom editorial workflow built internally" },
        ],
        challenge:
          "Competitors were far better ranked on search engines than Studely, largely thanks to their steady blog production. On our side, we were a lean team with no remaining time or bandwidth to write articles—blog publishing had been completely halted for over a year when the project started, leaving massive organic demand untapped.",
        approach:
          "Seeing how capable LLMs and workflow automations were becoming, I pitched management on building an internal system to win back ground on the topics and keywords where we were poorly ranked. I partnered with a developer to build not a generic script, but a sophisticated blog generator calibrated to Studely's tone of voice, style, and internal knowledge base to ensure high editorial quality at scale.",
        impact:
          "Over 200 articles went live, powering the surge in organic discovery and helping lift overall website traffic from 1 million to 2.1 million annual visitors.",
      },
      {
        slug: "studely-brand-turnaround",
        title: "Brand Turnaround: From Just Another Provider to Brand Love in 1 Year",
        category: "marketing",
        image: studelyBrandImg,
        summary:
          "Transformed Studely from a utilitarian service provider into a loved brand—growing social impressions 10×, cutting ad spend in half while sustaining sales, and driving +51% in blocked accounts sold.",
        meta: {
          role: "Growth Marketing Manager",
          organization: "Studely",
          period: "2025 – 2026",
        },
        highlights: [
          { value: "1.2M → 11.8M", label: "Annual social media impressions" },
          { value: "11% → 19%", label: "Conversion rate (+51% accounts sold)" },
          { value: "4.4★ / 3.9★", label: "Google (4→4.4) & Trustpilot (3.1→3.9)" },
        ],
        challenge:
          "Studely operated in an increasingly crowded market, with more and more blocked-account providers targeting France and eroding our market share—a pressure that also led us to expand into Germany and Belgium. Because we delivered a premium service with far more benefits than a bare blocked account, entering a price war would have been fatal. We needed to stand out beyond product specs and overcome corporate communication, mixed reviews (4.0 on Google, 3.1 on Trustpilot), and an 11% conversion rate.",
        approach:
          "We shifted from product-first messaging to an emotional positioning: becoming the ultimate guide and advocate for international students, fighting for them before and after arrival in France. On social media, we dropped the corporate polish for content built for our 18–25 core audience—short vertical formats, authentic smartphone-shot videos, tutorials, and trends. We revived TikTok from scratch, reactivated our podcasts, and launched high-emotion initiatives like Talents of Tomorrow (awarding €20,000 scholarships to three African students for their first year in Europe), alongside flagship events (10-year Gala, Welcome Fest) and active review management.",
        impact:
          "Studely became a brand people genuinely love and recognize. Social impressions jumped from 1.2M to 11.8M, Google reviews climbed to 4.4 and Trustpilot to 3.9, conversion rose from 11% to 19%, and blocked accounts sold grew from 6k to 9.1k (+51%). We cut our paid ad spend in half compared to the previous year while achieving at least the same sales volume—proving the brand strategy paid off.",
      },
      {
        slug: "gala-10-ans-studely",
        title: "Studely 10th Anniversary Gala",
        category: "events",
        image: gala10AnsImg,
        gallery: gala10AnsGallery,
        youtubeId: "eMt4x7DLh5A",
        summary:
          "A landmark evening celebrating a decade of Studely's mission to support international students in France, bringing together partners, alumni, institutions, and team members.",
        meta: {
          role: "Event Lead & Growth Marketing Manager",
          organization: "Studely",
          period: "2026",
        },
        highlights: [],
        challenge:
          "Marking ten years of growth required more than a standard corporate reception. Studely needed a flagship moment that honored its history, strengthened ties with key institutional and banking partners, and projected its vision for the next decade.",
        approach:
          "I coordinated the event from concept to execution: I booked a reception room at Hôtel d'Évreux on Place Vendôme—one of the most prestigious squares in Paris—and selected Potel & Chabot as caterer. I also led the editorial run-of-show, partner and VIP invitations, stage storytelling, branding assets, and on-site logistics with the marketing team and external vendors.",
        impact:
          "The gala reinforced Studely's positioning as a reference player in international student mobility, generated strong organic coverage across social channels, and deepened relationships with strategic partners.",
      },
      {
        slug: "welcome-fest-studely",
        title: "Studely Welcome Fest",
        category: "events",
        image: welcomeFestImg,
        youtubeId: "xb1-ZIIf978",
        summary:
          "A welcome evening for around 120 international students, designed to help them settle in France, meet other students and connect with Studely's partner ecosystem.",
        meta: {
          role: "Event Lead & Growth Marketing Manager",
          organization: "Studely",
          period: "2025",
        },
        highlights: [
          { value: "~120", label: "Guests welcomed at the event" },
          { value: "15", label: "Team members recruited and supervised" },
          { value: "360°", label: "Venue, catering, invitations & entertainment" },
        ],
        challenge:
          "Arriving in a new country for higher education can be overwhelming. Studely wanted to turn the back-to-school period into a warm, memorable evening that went beyond digital onboarding and helped newly arrived international students build their first connections in France.",
        approach:
          "I supervised the entire event from start to finish. I recruited and coordinated the 15-person team, led the search for both the venue and the caterer, managed invitations and planned the entertainment. I also oversaw the guest experience and on-site logistics, making sure every part of the evening worked together.",
        impact:
          "Around 120 people attended the Welcome Fest. The evening created authentic connections between students, generated organic content across social media and strengthened Studely's brand affinity at a pivotal moment in the student journey. The video below captures the final atmosphere of the event.",
      },
      {
        slug: "talents-of-tomorrow",
        title: "Talents of Tomorrow",
        category: "events",
        image: talentsImg,
        gallery: talentsGallery,
        youtubeIds: ["rlR0aXiRpj8", "HBqECdBIoX0"],
        summary:
          "A scholarship competition I co-created to award up to €20,000 in funding to three outstanding African students for their first year of studies in France.",
        meta: {
          role: "Co-creator & Program Lead",
          organization: "Studely",
          period: "2025",
        },
        highlights: [
          { value: "300% ROI", label: "Return on a budget under €250,000" },
          { value: "€20,000 × 3", label: "Scholarships awarded to winning students" },
          { value: "~8 people", label: "Core team executing the program end-to-end" },
        ],
        challenge:
          "Talented African students often face steep financial barriers when pursuing higher education in France. We wanted to design a merit-based, transparent, and inspiring initiative with real life-changing impact.",
        approach:
          "I co-created the competition with Gatien, Studely's CMO, and our team of around eight people executed the entire project end-to-end: building the program timeline, designing and running every candidate challenge, shortlisting after each stage, producing video content to promote every milestone, and animating the competition's WhatsApp community. We also handled all logistics in-house—flights, visas, school authorizations, local bookings, filming permits, selecting executive video production, catering and transport vendors, on-site challenge production, and influencer management.",
        impact:
          "Delivered on a budget just under €250,000, the program generated a 300% ROI, attracted massive engagement across the continent, rewarded three exceptional laureates, and became a signature pillar of Studely's social impact and brand storytelling.",
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
        title: "Real-Time Marketing Cockpit: Every Metric and Euro Tracked",
        category: "marketing",
        image: dashboardMarketingImg,
        summary:
          "Built a real-time marketing dashboard and a €500k annual budget tracking system to bring full data-driven discipline to the marketing department.",
        meta: {
          role: "Growth Marketing Manager & Creator",
          organization: "Studely",
          period: "2025 – 2026",
        },
        highlights: [
          { value: "Real-time", label: "Acquisition, conversion & revenue KPIs" },
          { value: "€500k / yr", label: "Annual marketing budget tracked & controlled" },
          { value: "Live demo", label: "Interactive web dashboard template" },
        ],
        challenge:
          "When I arrived, the department had no real-time marketing dashboard and no structured budget monitoring, making it difficult to steer a €500k annual B2C budget with consistency.",
        approach:
          "Combining my financial controlling background with growth marketing, I built a live KPI cockpit alongside a rigorous budget tracking system—then turned the dashboard architecture into a reusable interactive web template.",
        impact:
          "Enabled data-driven weekly decisions across acquisition, conversion, and spend consistency, and produced a live template any marketing team can adapt.",
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
        slug: "studely-tiktok-growth",
        title: "De 2k à 55k abonnés TikTok, et 50 messages par jour",
        category: "marketing",
        image: studelyTiktokImg,
        summary:
          "Fait passer le compte TikTok de Studely de 2 000 à 56 000 abonnés en un an, généré des dizaines de millions d'impressions et construit un canal organique attirant près de 100 messages privés et commentaires chaque jour.",
        meta: {
          role: "Growth Marketing Manager",
          organization: "Studely",
          period: "2025 – 2026",
        },
        highlights: [
          { value: "2k → 56k", label: "Abonnés TikTok gagnés en un an" },
          { value: "Des dizaines de millions", label: "Impressions organiques générées" },
          { value: "Près de 100 / jour", label: "Messages privés et commentaires reçus" },
        ],
        challenge:
          "TikTok est un réseau redoutable pour la notoriété : même si la période dorée de la portée facile est terminée, les résultats peuvent encore être spectaculaires pour une marque B2C qui s'adresse à plus d'un milliard de personnes dans le monde. Avant de nous lancer, nous devions répondre à deux questions. Était-ce vraiment nécessaire ? Oui : nos étudiants sont bien présents sur TikTok, Instagram et Facebook, et une meilleure notoriété organique pouvait réduire notre dépendance à la publicité payante. Avions-nous la force de frappe ? Notre équipe était très réduite : nous avons donc choisi de prioriser TikTok et Facebook, où nous espérions un retour plus rapide sur notre objectif de notoriété.",
        approach:
          "Nous avons posé une règle non négociable : ne jamais sponsoriser nos publications. À mes yeux, le boosting crée des chiffres artificiels — des abonnés qui n'ont pas vraiment choisi la marque, n'interagissent pas et diluent la qualité de l'audience. À la place, nous avons publié presque tous les jours et testé les trends, les face cams, les tutoriels et les vidéos promotionnelles. Nous avons collaboré avec des créateurs de contenu africains devenus ambassadeurs, mais surtout misé sur l'employee-led content. Sans agence externe, les employés ont eux-mêmes écrit, joué, mis en scène et filmé les contenus. Cela a demandé du jeu de rôle, de l'organisation et de nouvelles compétences de captation. Nous avons ensuite gardé ce qui fonctionnait et abandonné le reste.",
        impact:
          "Les premiers chiffres n'étaient pas glorieux, mais ce travail de longue haleine a fini par payer. En un an, le compte est passé de 2 000 à 56 000 abonnés, a généré des dizaines de millions d'impressions et est devenu le réseau le plus puissant de Studely ainsi que son premier canal de conversations entrantes, avec près de 100 messages privés et commentaires reçus chaque jour — le tout en 100 % organique.",
      },
      {
        slug: "studely-facebook-organic",
        title: "+45k fans Facebook sans dépenser un centime en pub",
        category: "marketing",
        image: studelyFacebookImg,
        summary:
          "Fait grandir la communauté Facebook de Studely de 60 000 à 105 000 abonnés sans publicité en rendant les contenus plus sociaux, plus utiles et plus proches de ce que les étudiants consomment réellement.",
        meta: {
          role: "Growth Marketing Manager",
          organization: "Studely",
          period: "2025 – 2026",
        },
        highlights: [
          { value: "60k → 105k", label: "Abonnés Facebook (+75 %)" },
          { value: "0 € en pub", label: "Croissance 100 % organique" },
          { value: "Près de 2 / jour", label: "Rythme de publication atteint" },
        ],
        challenge:
          "À mon arrivée dans l'équipe, la page Facebook de Studely comptait environ 60 000 abonnés. Il y avait de l'engagement, mais sans plus. Les contenus restaient trop corporate et peu adaptés aux usages des réseaux sociaux, et la croissance marquait le pas. L'enjeu n'était pas de parler plus fort de l'entreprise : il était de faire de la page un rendez-vous que les étudiants auraient vraiment envie de suivre, tout en gardant une acquisition 100 % organique.",
        approach:
          "Nous avons rendu la ligne éditoriale plus sociale et moins corporate, en nous inspirant des contenus que les étudiants appréciaient déjà. Les vidéos courtes et verticales ont remplacé une partie des formats paysage. Nous avons renforcé les contenus informationnels et pratiques — conseils, articles utiles et explications en face cam — puis augmenté la fréquence jusqu'à presque deux publications par jour. Nous avons aussi diversifié notre stratégie média avec des podcasts, dont nous découpions les passages les plus intéressants pour créer des vidéos Facebook plus parlantes. Chaque format poursuivait le même objectif : rendre la page utile, humaine et digne d'intérêt.",
        impact:
          "La page a gagné 45 000 abonnés organiques, passant de 60 000 à 105 000 (+75 %) sans dépenser un centime en publicité. Au-delà de la croissance d'audience, Studely s'est doté d'un moteur de contenu beaucoup plus engageant, renforçant sa présence quotidienne auprès des étudiants potentiels et de leurs parents.",
      },
      {
        slug: "studely-website-rebuild",
        title: "Refonte du site Studely : plus rapide, moins cher, 2× plus de trafic",
        category: "software",
        image: studelyWebsiteImg,
        summary:
          "Piloté la migration du site Studely, codé sur mesure et coûteux, vers Webflow : marketing autonome, expérience mobile repensée et trafic annuel doublé de 1 M à 2,1 M de visiteurs.",
        meta: {
          role: "Growth Marketing Manager & Chef de Projet",
          organization: "Studely",
          period: "2025",
        },
        highlights: [
          { value: "1 M → 2,1 M", label: "Visiteurs annuels sur le site" },
          { value: "60 % → 38 %", label: "Baisse du taux de rebond" },
          { value: "2 mois", label: "Pour mener la migration vers Webflow" },
        ],
        challenge:
          "Studely avait choisi de coder son site de zéro plutôt que d'utiliser un CMS. Pour une équipe très réduite, cela impliquait de dépendre quotidiennement d'un développeur, d'un webmaster et d'un graphiste pour les maquettes et les modifications de pages. Même un petit changement pouvait prendre une semaine ou plus — bien trop lent pour une startup. Le blog était hébergé sur Contentful, où le fort trafic faisait grimper la facture à près de 700–800 € par mois. Enfin, de nombreuses pages codées à la main étaient laides ou inutilisables sur mobile, alors que plus de 90 % de nos prospects utilisaient uniquement leur téléphone.",
        approach:
          "J'ai proposé de migrer vers Webflow, le CMS qui répondait le mieux aux exigences du site, puis défendu ce projet auprès de la direction. Après validation, j'ai trouvé le développeur et piloté une migration d'environ deux mois. Nous avons repensé l'expérience autour de l'ergonomie mobile, de la vitesse et de parcours de conversion clairs. Surtout, nous avons créé des templates réutilisables pour ne pas réinventer la roue à chaque page, et donné au marketing la main directement sur les modifications courantes plutôt que de faire transiter chaque demande par plusieurs spécialistes.",
        impact:
          "Le nouveau site a supprimé un important goulot d'étranglement opérationnel, réduit les coûts de fonctionnement et donné une réelle autonomie à l'équipe marketing. Le taux de rebond est passé de 60 % à 38 %, tandis que le trafic annuel a plus que doublé, de 1 million de visiteurs en 2024 à 2,1 millions en 2025, porté par une expérience plus rapide et pensée pour le mobile.",
      },
      {
        slug: "studely-ai-blog-engine",
        title: "200+ articles de blog écrits par une IA maison",
        category: "software",
        image: studelyAiBlogImg,
        summary:
          "Conçu en interne un générateur éditorial basé sur l'IA pour relancer un blog à l'arrêt — produisant plus de 200 articles alors qu'aucun n'avait été publié depuis deux ans.",
        meta: {
          role: "Growth Marketing Manager & Builder",
          organization: "Studely",
          period: "2025 – 2026",
        },
        highlights: [
          { value: "200+ articles", label: "Publiés via notre outil IA interne" },
          { value: "0 → 200+", label: "Après 2 ans sans aucun article publié" },
          { value: "Fait maison", label: "Chaîne éditoriale bâtie en interne" },
        ],
        challenge:
          "La concurrence était nettement mieux référencée que Studely sur le web, notamment grâce à sa production régulière d'articles de blog. De notre côté, en équipe réduite, nous n'avions plus le temps ni la bande passante pour rédiger : la publication sur le blog était à l'arrêt depuis plus d'un an au lancement du projet, laissant inexploité un énorme volume de recherches organiques.",
        approach:
          "Voyant les progrès rapides des LLM et des automatisations, j'ai proposé à la direction de mettre en place un système interne pour regagner du terrain sur les thématiques et mots-clés où nous étions mal référencés. J'ai travaillé avec un développeur pour concevoir un générateur d'articles sophistiqué — loin d'un outil basique — intégrant le tone of voice de Studely, notre manière de parler et nos informations internes afin d'enrichir la qualité éditoriale de chaque article.",
        impact:
          "Plus de 200 articles mis en ligne, alimentant l'acquisition organique et contribuant à faire passer le trafic global du site de 1 million à 2,1 millions de visiteurs annuels.",
      },
      {
        slug: "studely-brand-turnaround",
        title: "D'un prestataire comme les autres à une marque qu'on adore, en 1 an",
        category: "marketing",
        image: studelyBrandImg,
        summary:
          "Transformé l'image de Studely d'un simple prestataire administratif en une marque aimée — multipliant les impressions sociales par 10, divisant le budget pub par 2 à ventes égales et faisant grimper les comptes vendus de +51 %.",
        meta: {
          role: "Growth Marketing Manager",
          organization: "Studely",
          period: "2025 – 2026",
        },
        highlights: [
          { value: "1,2 M → 11,8 M", label: "Impressions annuelles sur les réseaux" },
          { value: "11 % → 19 %", label: "Taux de conversion (+51 % de comptes vendus)" },
          { value: "4,4★ / 3,9★", label: "Avis Google (4→4,4) & Trustpilot (3,1→3,9)" },
        ],
        challenge:
          "Studely évoluait dans un paysage de plus en plus concurrentiel : de nouveaux prestataires de comptes bloqués apparaissaient sur la France et grignotaient des parts de marché, ce qui nous a d'ailleurs poussés à ouvrir l'Allemagne et la Belgique. Livrant un service premium bien plus complet qu'un simple compte bloqué, nous refusions une guerre des prix qui aurait mené à notre perte. Il fallait nous distinguer autrement, malgré une communication corporate, des avis mitigés (4,0 sur Google, 3,1 sur Trustpilot) et une conversion à 11 %.",
        approach:
          "Nous avons choisi de toucher l'émotionnel plutôt que de ne parler que produit : positionner Studely comme le guide ultime et le défenseur de l'étudiant en mobilité, avant son départ comme après son arrivée en France. Sur les réseaux sociaux, nous avons rompu avec le ton corporate pour parler à notre cible 18-25 ans : formats courts verticaux, vidéos authentiques filmées au smartphone plutôt que des grosses productions léchées, tutoriels et trends. Nous avons relancé TikTok (alors un réseau mort), réactivé nos podcasts et lancé des opérations à forte charge émotionnelle comme Talents de Demain (trois bourses de 20 000 € pour aider trois étudiants africains à financer leur première année d'études en Europe), aux côtés d'événements phares (Gala des 10 ans, Welcome Fest) et d'un travail actif sur les avis clients.",
        impact:
          "Studely est devenue une marque qu'on aime et qu'on reconnaît. Les impressions sociales ont bondi de 1,2 M à 11,8 M, les notes Google et Trustpilot sont montées à 4,4 et 3,9, la conversion est passée de 11 % à 19 % et les comptes bloqués vendus ont progressé de 6k à 9,1k (+51 %). Surtout, nous avons divisé par deux nos dépenses en ads par rapport à l'année précédente tout en réalisant au moins les mêmes chiffres de vente — preuve directe que la stratégie de marque a payé.",
      },
      {
        slug: "gala-10-ans-studely",
        title: "Gala des 10 Ans Studely",
        category: "events",
        image: gala10AnsImg,
        gallery: gala10AnsGallery,
        youtubeId: "eMt4x7DLh5A",
        summary:
          "Une soirée phare célébrant dix ans d'engagement de Studely auprès des étudiants internationaux en France, réunissant partenaires, alumni, institutions et équipes.",
        meta: {
          role: "Responsable Événement & Growth Marketing",
          organization: "Studely",
          period: "2026",
        },
        highlights: [],
        challenge:
          "Marquer dix années de croissance demandait bien plus qu'une simple réception. Studely avait besoin d'un moment fort pour honorer son histoire, consolider ses relations avec ses partenaires bancaires et institutionnels, et porter sa vision pour la décennie à venir.",
        approach:
          "J'ai coordonné l'événement de la conception à l'exécution : j'ai loué une salle à l'Hôtel d'Évreux, situé Place Vendôme — l'une des places les plus prestigieuses de Paris — et retenu le traiteur Potel & Chabot. J'ai également piloté le conducteur éditorial, les invitations VIP et partenaires, la mise en scène, les supports de marque et la logistique sur place avec l'équipe marketing et les prestataires.",
        impact:
          "Le gala a renforcé le positionnement de Studely comme acteur de référence de la mobilité étudiante internationale, généré de nombreuses retombées organiques sur les réseaux sociaux et consolidé les liens avec les partenaires clés.",
      },
      {
        slug: "welcome-fest-studely",
        title: "Welcome Fest Studely",
        category: "events",
        image: welcomeFestImg,
        youtubeId: "xb1-ZIIf978",
        summary:
          "Une soirée d'accueil réunissant environ 120 étudiants internationaux pour faciliter leur arrivée en France, créer des liens et les connecter à l'écosystème Studely.",
        meta: {
          role: "Responsable Événement & Growth Marketing",
          organization: "Studely",
          period: "2025",
        },
        highlights: [
          { value: "Environ 120", label: "Personnes accueillies à la soirée" },
          { value: "15", label: "Membres d'équipe recrutés et supervisés" },
          { value: "360°", label: "Lieu, traiteur, invitations & animations" },
        ],
        challenge:
          "Arriver dans un nouveau pays pour ses études est une étape intense. Studely souhaitait transformer la rentrée en une soirée chaleureuse et mémorable, au-delà de l'accompagnement digital, pour aider les étudiants internationaux fraîchement arrivés à créer leurs premiers liens en France.",
        approach:
          "J'ai chapeauté l'intégralité de l'événement, du début à la fin. J'ai recruté et coordonné les 15 membres de l'équipe, mené la recherche du lieu et du traiteur, géré les invitations et organisé les animations. J'ai également supervisé l'expérience des invités et la logistique sur place, en veillant à ce que chaque partie de la soirée s'articule correctement.",
        impact:
          "Environ 120 personnes ont participé au Welcome Fest. La soirée a créé de vrais liens entre les étudiants, généré du contenu organique sur les réseaux sociaux et renforcé l'attachement à la marque Studely à un moment clé du parcours étudiant. La vidéo ci-dessous montre l'ambiance finale de l'événement.",
      },
      {
        slug: "talents-of-tomorrow",
        title: "Talents of Tomorrow",
        category: "events",
        image: talentsImg,
        gallery: talentsGallery,
        youtubeIds: ["rlR0aXiRpj8", "HBqECdBIoX0"],
        summary:
          "Un programme de bourse que j'ai co-créé sous forme de jeu-concours permettant à trois étudiants africains de recevoir jusqu'à 20 000 € pour leur première année d'études en France.",
        meta: {
          role: "Co-créateur & Chef de Projet",
          organization: "Studely",
          period: "2025",
        },
        highlights: [
          { value: "300 % ROI", label: "Retour sur un budget sous les 250 000 €" },
          { value: "20 000 € × 3", label: "Bourses attribuées aux lauréats" },
          { value: "~8 personnes", label: "Équipe dédiée de bout en bout" },
        ],
        challenge:
          "De nombreux étudiants africains brillants se heurtent à des barrières financières pour étudier en France. L'objectif était de créer une initiative méritocratique, transparente et inspirante, avec un impact concret.",
        approach:
          "J'ai co-créé le projet avec Gatien, le CMO de Studely, et notre équipe d'environ huit personnes a tout piloté de bout en bout : calendrier du concours, conception et mise en place des épreuves, tris à la fin de chaque étape, réalisation des vidéos promotionnelles et community management pour animer le canal WhatsApp du concours. Nous avons aussi géré toute la logistique : billets d'avion, visas, autorisations pour les écoles, réservations sur place, autorisations de tournage, choix des prestataires (production exécutive vidéo, restauration, transport), réalisation des épreuves sur place et gestion des influenceurs.",
        impact:
          "Réalisé avec un budget d'un peu moins de 250 000 €, le projet a généré un ROI de 300 %, suscité un fort engouement sur le continent, récompensé trois profils d'exception et s'est imposé comme un pilier de l'impact social et du rayonnement de Studely.",
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
        title: "Un cockpit marketing en temps réel : chaque indicateur et chaque euro suivis",
        category: "marketing",
        image: dashboardMarketingImg,
        summary:
          "Mis en place un tableau de bord marketing en temps réel et un système de suivi d'un budget annuel de 500 k€ pour piloter le département par la donnée.",
        meta: {
          role: "Growth Marketing Manager & Créateur",
          organization: "Studely",
          period: "2025 – 2026",
        },
        highlights: [
          { value: "Temps réel", label: "Indicateurs d'acquisition, conversion & revenus" },
          { value: "500 k€ / an", label: "Budget marketing annuel suivi et maîtrisé" },
          { value: "Démo live", label: "Application web interactive réutilisable" },
        ],
        challenge:
          "À mon arrivée, le département ne disposait ni d'outil de pilotage en temps réel ni de suivi budgétaire structuré, rendant difficile la gestion cohérente d'un budget annuel B2C de 500 k€.",
        approach:
          "En croisant mon passé de contrôleur de gestion avec le growth marketing, j'ai construit un tableau de bord KPI en temps réel couplé à un suivi budgétaire rigoureux — puis décliné le dashboard en modèle web interactif.",
        impact:
          "A instauré une prise de décision pilotée par la donnée sur l'acquisition, la conversion et la tenue du budget, tout en offrant un modèle live directement exploitable.",
        link: "https://marketingdashboardtemplate.lovable.app",
      },
    ],
  },
} as const;
