import { articles } from "@/data/articles";
import { Link } from "react-router-dom";

const Index = () => {
  const publishedArticles = articles
    .filter((a) => a.published)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="max-w-[700px] mx-auto px-6 py-12 md:py-20">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-2xl md:text-3xl mb-3">Jordan Bea Mbong</h1>
        <p className="text-muted-foreground italic">Jack of all trades</p>
      </header>

      {/* About */}
      <section className="mb-10">
        <p className="mb-4">
          Welcome to my corner of the internet. I'm passionate about technology,
          business and building useful things. I believe you learn best by doing,
          and I try to get my hands on everything that interests me.
        </p>
        <p className="mb-4">
          You can reach me by{" "}
          <a href="mailto:jordan@example.com">email</a>, on{" "}
          <a href="https://www.linkedin.com/in/jordanbeambong/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{" "}
          or on{" "}
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>.
        </p>
      </section>

      <hr className="my-10" />

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-xl mb-6">Experience</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[90px] top-0 bottom-0 w-px bg-border hidden sm:block" />

          <TimelineItem
            period="2025 –"
            role="Growth Marketing Manager"
            company="Studely"
            location="Paris, France"
            description="Leading marketing initiatives: migrated website to Webflow (perf score 37→89), scaled social media impressions from 1.4M to 34.1M (+2,216%), grew TikTok from 2.4k to 18.4k followers. Managing a team of 9. Organized Studely Welcome Fest (100+ attendees). Drove +300k organic visitors via blog automation with n8n."
          />
          <TimelineItem
            period="2023 –"
            role="Growth Marketing Consultant"
            company="Freelance"
            location="Paris"
            description="Supporting digital growth for startups and SMEs — paid & earned media, web design, branding, email marketing. Grew a CEO's LinkedIn by 175%, achieved 50%+ email open rate and 4x ROAS on Facebook ads."
          />
          <TimelineItem
            period="2020 – 2022"
            role="Finance Project Manager"
            company="Razel-Bec"
            location="Port-au-Prince, Haiti"
            description="Oversaw finance for all projects in-country. Re-established accounting on a €75M, 42 km road project (500 people on site). Led a team of 17. Reduced accounting errors by 90%, recovering €2M in discrepancies."
          />
          <TimelineItem
            period="2017 – 2019"
            role="Finance Project Manager"
            company="Razel-Bec"
            location="Bafoussam, Cameroon"
            description="Managed finance for a €31M, 21 km urban roads project with 200 employees. Led a team of 10. Project delivered 6 months ahead of schedule, net result 9% better than forecast."
          />
          <TimelineItem
            period="2016"
            role="Junior Controller"
            company="CNAMTS"
            location="Montreuil, France"
            description="Reviewed procurement files, monitored KPI dashboards, drafted progress reports."
          />
          <TimelineItem
            period="2015"
            role="Budget Analyst (Intern)"
            company="CNAMTS"
            location="Montreuil, France"
            description="Analyzed departmental budget consumption on legal and audit contracts. Proposed improvements to budget allocation."
          />
          <TimelineItem
            period="2014 – 2015"
            role="Inventory Analyst (Intern)"
            company="General Electric"
            location="Belfort, France"
            description="Weekly audits of the GE Belfort plant. Drafted financial reports to reconcile discrepancies between logistical and financial stock data."
          />
          <TimelineItem
            period="2013"
            role="Brand Manager Assistant (Intern)"
            company="Reckitt"
            location="Brussels, Belgium"
            description="Marketing for Dettol in the Benelux zone: logistics management of 12,000 product samples/month, liaison with creative agencies for advertising projects."
          />
        </div>
      </section>

      <hr className="my-10" />

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-xl mb-6">Education</h2>
        <div className="relative">
          <div className="absolute left-[90px] top-0 bottom-0 w-px bg-border hidden sm:block" />

          <TimelineItem
            period="2012 – 2017"
            role="Master Grande École"
            company="NEOMA Business School"
            description="Specialization in Entrepreneurship. Bac+5."
          />
          <TimelineItem
            period="2023"
            role="Software Engineering"
            company="Codecademy"
            description="React Native, Django, PostgreSQL, HTML, CSS."
          />
          <TimelineItem
            period="2023"
            role="Bac+5 Product Manager"
            company="OpenClassrooms"
          />
          <TimelineItem
            period="2014 – 2015"
            role="Master 1"
            company="Institut Ucac-Icam"
          />
          <TimelineItem
            period="2010 – 2012"
            role="Classe Préparatoire ECE"
            company="Lycée Hector Berlioz"
          />
          <TimelineItem
            period="2007 – 2010"
            role="Baccalauréat ES"
            company="Lycée Emily Brontë"
            description="Mention Bien."
          />
        </div>
      </section>

      <hr className="my-10" />

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-xl mb-6">Projects</h2>
        <ul className="space-y-6">
          <ProjectItem
            title="Personal Website"
            description="This minimalist site, built with React & Tailwind. A space to share my writing and experiments."
            link="https://minimal-jordan-space.lovable.app"
          />
          <ProjectItem
            title="Blog Automation Pipeline"
            description="An n8n-powered workflow automating blog content creation and publishing, driving +300k organic visitors."
          />
          <ProjectItem
            title="Marketing Dashboards"
            description="Power BI dashboards for tracking marketing performance, budget consumption, and social media KPIs."
          />
        </ul>
      </section>

      <hr className="my-10" />

      {/* Articles */}
      <section className="mb-10">
        <h2 className="text-xl mb-4">Writing</h2>
        {publishedArticles.length > 0 ? (
          <ul className="space-y-3">
            {publishedArticles.map((a) => (
              <ArticleItem
                key={a.slug}
                title={a.title}
                date={a.date}
                link={`/blog/${a.slug}`}
              />
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground text-sm">Nothing published yet.</p>
        )}
      </section>

      <hr className="my-10" />

      {/* Footer */}
      <footer className="text-sm text-muted-foreground pb-8">
        <p>© {new Date().getFullYear()} Jordan Bea Mbong</p>
      </footer>
    </main>
  );
};

/* ── Timeline item (Karpathy-style) ── */
const TimelineItem = ({
  period,
  role,
  company,
  location,
  description,
}: {
  period: string;
  role: string;
  company: string;
  location?: string;
  description?: string;
}) => (
  <div className="flex gap-4 sm:gap-6 mb-8 group">
    {/* Date column */}
    <div className="w-[80px] shrink-0 text-right">
      <span className="text-muted-foreground text-sm">{period}</span>
    </div>

    {/* Dot */}
    <div className="hidden sm:flex items-start pt-1.5">
      <div className="w-2.5 h-2.5 rounded-full bg-foreground border-2 border-background ring-1 ring-border shrink-0" />
    </div>

    {/* Content */}
    <div className="flex-1 min-w-0">
      <div className="font-semibold leading-snug">{role}</div>
      <div className="text-muted-foreground text-sm">
        {company}
        {location && <span> · {location}</span>}
      </div>
      {description && (
        <p className="text-sm mt-1.5 leading-relaxed">{description}</p>
      )}
    </div>
  </div>
);

const ArticleItem = ({
  title,
  date,
  link,
}: {
  title: string;
  date: string;
  link: string;
}) => (
  <li className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
    <Link to={link} className="font-normal">
      {title}
    </Link>
    <span className="text-muted-foreground text-sm shrink-0">{date}</span>
  </li>
);

export default Index;
