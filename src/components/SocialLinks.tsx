import type { ComponentType } from "react";
import { Facebook, Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { socials, type SocialId } from "@/data/socials";

type IconProps = { className?: string };

const SpotifyIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

const SubstackIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

const ICONS: Record<SocialId, ComponentType<IconProps>> = {
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
  facebook: Facebook,
  linkedin: Linkedin,
  github: Github,
  substack: SubstackIcon,
  spotify: SpotifyIcon,
};

export const SocialLinks = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-wrap items-center gap-3 ${className}`}>
    {socials.map((social) => {
      const Icon = ICONS[social.id];
      return (
        <a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          title={social.label}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Icon className="w-[18px] h-[18px]" />
        </a>
      );
    })}
  </div>
);
