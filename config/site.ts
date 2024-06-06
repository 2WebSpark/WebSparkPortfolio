export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Web Spark",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Quem sou eu",
      href: "/about",
    },
    {
      label: "Portfólio",
      href: "/portfolio",
    },
    {
      label: "Serviços",
      href: "/servicos",
    },
    {
      label: "Planos de Contratação",
      href: "/planos",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/2WebSpark",
    instagram: "https://www.instagram.com/webspark_/",
    whats: "https://api.whatsapp.com/send?phone=5514982254049",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },

  linksProjetos: {
    projeto1: "https://github.com/nextui-org/nextui",
  },
};
