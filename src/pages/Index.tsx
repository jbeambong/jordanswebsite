import { articles } from "@/data/articles";
import { Link } from "react-router-dom";

const Index = () => {
  const publishedArticles = articles.
  filter((a) => a.published).
  sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="max-w-[600px] mx-auto px-6 py-12 md:py-20">
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
          <a href="mailto:jordan@example.com" className="">email</a>,
          on{" "}
          <a href="https://www.linkedin.com/in/jordanbeambong/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {" "}or on{" "}
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>.
        </p>
      </section>

      <hr className="my-10" />

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-xl mb-4">Projects</h2>
        <ul className="space-y-4">
          <ProjectItem
            title="Project Alpha"
            description="A tool to simplify [description]. Built with React and Python."
            link="#" />

          <ProjectItem
            title="Project Beta"
            description="Mobile app that [description]. Available on iOS and Android."
            link="#" />

          <ProjectItem
            title="Project Gamma"
            description="Side project exploring [description]. Open source."
            link="#" />

        </ul>
      </section>

      <hr className="my-10" />

      {/* Articles */}
      <section className="mb-10">
        <h2 className="text-xl mb-4">Writing</h2>
        {publishedArticles.length > 0 ?
        <ul className="space-y-3">
            {publishedArticles.map((a) =>
          <ArticleItem
            key={a.slug}
            title={a.title}
            date={a.date}
            link={`/blog/${a.slug}`} />

          )}
          </ul> :

        <p className="text-muted-foreground text-sm">Nothing published yet.</p>
        }
      </section>

      <hr className="my-10" />

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-xl mb-4">Experience</h2>
        <ul className="space-y-5">
          <ExperienceItem
            role="Current role"
            company="Company X"
            period="2023 – present"
            description="Short description of what you do." />

          <ExperienceItem
            role="Previous role"
            company="Company Y"
            period="2021 – 2023"
            description="Short description of what you did." />

          <ExperienceItem
            role="Internship / first role"
            company="Company Z"
            period="2020 – 2021"
            description="Short description." />

        </ul>
      </section>

      <hr className="my-10" />

      {/* Footer */}
      <footer className="text-sm text-muted-foreground pb-8">
        <p>© {new Date().getFullYear()} Jordan Beambong</p>
      </footer>
    </main>);

};

const ProjectItem = ({
  title,
  description,
  link




}: {title: string;description: string;link: string;}) =>
<li>
    <a href={link} className="font-semibold">
      {title}
    </a>
    <p className="text-muted-foreground text-sm mt-0.5">{description}</p>
  </li>;


const ArticleItem = ({
  title,
  date,
  link




}: {title: string;date: string;link: string;}) =>
<li className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
    <Link to={link} className="font-normal">
      {title}
    </Link>
    <span className="text-muted-foreground text-sm shrink-0">{date}</span>
  </li>;


const ExperienceItem = ({
  role,
  company,
  period,
  description





}: {role: string;company: string;period: string;description: string;}) =>
<li>
    <div className="font-semibold">{role}</div>
    <div className="text-muted-foreground text-sm">
      {company} · {period}
    </div>
    <p className="text-sm mt-1">{description}</p>
  </li>;


export default Index;