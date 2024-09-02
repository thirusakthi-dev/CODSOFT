import DarkModeIcon from "../assets/icons/dark-mode.svg";
import LightModeIcon from "../assets/icons/light-mode.svg";
import MailDarkIcon from "../assets/icons/social/email-dark.png";
import MailLightIcon from "../assets/icons/social/email-light.png";
import LinkedInLightIcon from "../assets/icons/social/linkedin-light.png";
import LinkedInDarkIcon from "../assets/icons/social/linkedin.png";
import GitIcon from "../assets/icons/skills/github.svg";
import GitLightIcon from "../assets/icons/skills/github-light.svg";
import PhoneDarkIcon from "../assets/icons/social/phone-dark.png";
import PhoneLightIcon from "../assets/icons/social/phone-light.png";

interface Icon {
  name: string;
  icon: string;
  mode: string;
}

const ModelIcons: Icon[] = [
  { name: "dark-mode", icon: DarkModeIcon, mode: "dark" },
  { name: "light-mode", icon: LightModeIcon, mode: "light" },
];

const SocialIcons: Icon[] = [
  {
    name: "Mail",
    icon: MailDarkIcon,
    mode: "dark",
  },
  {
    name: "Mail",
    icon: MailLightIcon,
    mode: "light",
  },
  {
    name: "LinkedIn",
    icon: LinkedInDarkIcon,
    mode: "dark",
  },
  {
    name: "LinkedIn",
    icon: LinkedInLightIcon,
    mode: "light",
  },
  {
    name: "GitHub",
    icon: GitIcon,
    mode: "dark",
  },
  {
    name: "GitHub",
    icon: GitLightIcon,
    mode: "light",
  },
  {
    name: "Phone",
    icon: PhoneDarkIcon,
    mode: "dark",
  },
  {
    name: "Phone",
    icon: PhoneLightIcon,
    mode: "light",
  },
];

export { ModelIcons, SocialIcons };
