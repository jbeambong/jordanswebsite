import { t } from "@/data/translations";
import { useLang } from "@/contexts/LanguageContext";
import { PageShell } from "@/components/PageShell";

const Music = () => {
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <PageShell title={tr.music}>
      <p className="mb-4">{tr.musicDesc}</p>
      <a
        href="https://open.spotify.com/user/rocketstarn8?si=373e886bf28040b1"
        target="_blank"
        rel="noopener noreferrer"
      >
        {tr.musicLink} →
      </a>
    </PageShell>
  );
};

export default Music;