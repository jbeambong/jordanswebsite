export type SocialId =
  | "instagram"
  | "twitter"
  | "youtube"
  | "facebook"
  | "linkedin"
  | "substack"
  | "spotify";

export interface Social {
  id: SocialId;
  label: string;
  url: string;
}

export const socials: Social[] = [
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/jordanbeambong/",
  },
  {
    id: "twitter",
    label: "X (Twitter)",
    url: "https://x.com/jordanbeambong",
  },
  {
    id: "youtube",
    label: "YouTube",
    url: "https://www.youtube.com/watch?v=irlXSjnPzkE",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/jordanbeambong/",
  },
  {
    id: "substack",
    label: "Substack",
    url: "https://substack.com/@jordanbeambong",
  },
  {
    id: "spotify",
    label: "Spotify",
    url: "https://open.spotify.com/user/rocketstarn8",
  },
];
