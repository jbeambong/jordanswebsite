import { t } from "@/data/translations";
import { useLang } from "@/contexts/LanguageContext";
import { PageShell } from "@/components/PageShell";

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
    <div className="w-[80px] shrink-0 text-right">
      <span className="text-muted-foreground text-sm">{period}</span>
    </div>
    <div className="hidden sm:flex items-start pt-1.5">
      <div className="w-2.5 h-2.5 rounded-full bg-foreground border-2 border-background ring-1 ring-border shrink-0" />
    </div>
    <div className="flex-1 min-w-0">
      <div className="font-semibold leading-snug">{role}</div>
      <div className="text-muted-foreground text-sm">
        {company}
        {location && <span> · {location}</span>}
      </div>
      {description && <p className="text-sm mt-1.5 leading-relaxed">{description}</p>}
    </div>
  </div>
);

const Experience = () => {
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <PageShell title={tr.experienceAndEducation}>
      <section className="mb-12">
        <h2 className="text-xl mb-6">{tr.experience}</h2>
        <div className="relative">
          <div className="absolute left-[90px] top-0 bottom-0 w-px bg-border hidden sm:block" />
          {tr.exp.map((item, i) => (
            <TimelineItem key={i} {...item} />
          ))}
        </div>
      </section>

      <hr className="my-10" />

      <section>
        <h2 className="text-xl mb-6">{tr.education}</h2>
        <div className="relative">
          <div className="absolute left-[90px] top-0 bottom-0 w-px bg-border hidden sm:block" />
          {tr.edu.map((item, i) => (
            <TimelineItem key={i} {...item} />
          ))}
        </div>
      </section>
    </PageShell>
  );
};

export default Experience;