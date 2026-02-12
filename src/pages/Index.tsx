const Index = () => {
  return (
    <main className="max-w-[600px] mx-auto px-6 py-12 md:py-20">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-2xl md:text-3xl mb-3">Jordan Beambong</h1>
        <p className="text-muted-foreground italic">Jack of all trades</p>
      </header>

      {/* About */}
      <section className="mb-10">
        <p className="mb-4">
          Bienvenue sur mon coin d'internet. Je suis passionné par la technologie, 
          le business et la création de choses utiles. Je crois qu'on apprend mieux 
          en faisant, et j'essaie de toucher à tout ce qui m'intéresse.
        </p>
        <p className="mb-4">
          Vous pouvez me contacter par{" "}
          <a href="mailto:jordan@example.com">email</a>,
          sur{" "}
          <a href="https://www.linkedin.com/in/jordanbeambong/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {" "}ou sur{" "}
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>.
        </p>
      </section>

      <hr className="my-10" />

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-xl mb-4">Projets</h2>
        <ul className="space-y-4">
          <ProjectItem
            title="Projet Alpha"
            description="Un outil pour simplifier [description]. Construit avec React et Python."
            link="#"
          />
          <ProjectItem
            title="Projet Beta"
            description="Application mobile qui [description]. Disponible sur iOS et Android."
            link="#"
          />
          <ProjectItem
            title="Projet Gamma"
            description="Side project explorant [description]. Open source."
            link="#"
          />
        </ul>
      </section>

      <hr className="my-10" />

      {/* Articles */}
      <section className="mb-10">
        <h2 className="text-xl mb-4">Articles</h2>
        <ul className="space-y-3">
          <ArticleItem
            title="Pourquoi j'ai arrêté de planifier"
            date="Janvier 2025"
            link="#"
          />
          <ArticleItem
            title="Ce que j'ai appris en construisant mon premier SaaS"
            date="Novembre 2024"
            link="#"
          />
          <ArticleItem
            title="Le mythe du talent naturel"
            date="Septembre 2024"
            link="#"
          />
        </ul>
      </section>

      <hr className="my-10" />

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-xl mb-4">Parcours</h2>
        <ul className="space-y-5">
          <ExperienceItem
            role="Poste actuel"
            company="Entreprise X"
            period="2023 – présent"
            description="Description courte de ce que tu fais."
          />
          <ExperienceItem
            role="Poste précédent"
            company="Entreprise Y"
            period="2021 – 2023"
            description="Description courte de ce que tu as fait."
          />
          <ExperienceItem
            role="Stage / premier poste"
            company="Entreprise Z"
            period="2020 – 2021"
            description="Description courte."
          />
        </ul>
      </section>

      <hr className="my-10" />

      {/* Footer */}
      <footer className="text-sm text-muted-foreground pb-8">
        <p>© {new Date().getFullYear()} Jordan Beambong</p>
      </footer>
    </main>
  );
};

const ProjectItem = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) => (
  <li>
    <a href={link} className="font-semibold">
      {title}
    </a>
    <p className="text-muted-foreground text-sm mt-0.5">{description}</p>
  </li>
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
    <a href={link} className="font-normal">
      {title}
    </a>
    <span className="text-muted-foreground text-sm shrink-0">{date}</span>
  </li>
);

const ExperienceItem = ({
  role,
  company,
  period,
  description,
}: {
  role: string;
  company: string;
  period: string;
  description: string;
}) => (
  <li>
    <div className="font-semibold">{role}</div>
    <div className="text-muted-foreground text-sm">
      {company} · {period}
    </div>
    <p className="text-sm mt-1">{description}</p>
  </li>
);

export default Index;
