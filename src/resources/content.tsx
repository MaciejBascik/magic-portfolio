import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Maciej",
  lastName: "Baścik",
  name: `Maciej Baścik`,
  role: "Fullstack Developer",
  avatar: "/images/avatar.jpg",
  email: "maciej.b4scik@gmail.com",
  location: "Europe/Warsaw", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Polski", "Angielski"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Zasubskrybuj mój newsletter</>,
  description: (
    <>
      Mój newsletter zawiera informację o noiwnkach technologicznych, inżynierii
      i trendach rynkowych.
    </>
  ),
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MaciejBascik",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://pl.linkedin.com/in/maciejbascik",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – ${person.role}`,
  description: `Portfolio przedstawiające moje dotychczasowe projekty i doświadczenie zawodowe. Zapraszam do zapoznania się z moją pracą!`,
  headline: (
    <>
      Rozwiązuję problemy biznesowe, których nikt inny nie chce mieć na głowie
    </>
  ),
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Projekty
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Jestem Maciej Baścik, Pomagam startupom i firmom technologicznym budować{" "}
      <Text as="span" size="xl" weight="strong">
        MVP i platformy SaaS
      </Text>
      , gdzie tworzę intuicyjne <br /> doświadczenia użytkowników. Po godzinach
      buduję moje własne projekty.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `O mnie – ${person.name}`,
  description: `Dowiedz się więcej o ${person.name}, ${person.role} z ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Pomagam startupom i firmom technologicznym budować MVP i platformy SaaS
        w Next.js + Strapi. SPECJALIZACJA: SaaS MVP Development TECH STACK: HTML
        / CSS (SCSS) / JavaScript / TypeScript / ReactJS/ NextJS + MongoDB/MySQL
        / React Native , Git, C++, PHP, Python + Django, Wordpress, AWS/Amplify,
        strapi, directus REZULTATY: Średnio 6 tygodni od pomysłu do działającego
        MVP PERFORMANCE: Aplikacje ładujące się poniżej 1s, 99.9% uptime
        WSPÓŁPRACUJĘ Z: - Startupy technologiczne (pre-seed do Series A) - Firmy
        digitalizujące procesy biznesowe - Agencje potrzebujące partnera
        technicznego
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Doświadczenie zawodowe",
    experiences: [
      {
        company: "Papillon Media",
        timeframe: "2023 - 2024",
        role: "Programista Fullstack",
        achievements: [
          <>
            Projektowanie i rozwój aplikacji webowych typu full-stack z
            wykorzystaniem Next.js (frontend) oraz Strapi (headless CMS /
            backend) lub directus
          </>,
          <>
            Tworzenie responsywnych interfejsów użytkownika w React / Next.js z
            naciskiem na UX i wydajność
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "ByteFine",
        timeframe: "2024 - 2024",
        role: "Programista Fullstack",
        achievements: [
          <>
            Implementacja API REST / GraphQL w Strapi oraz integracja z
            frontendem Next.js, umożliwiając dynamiczne zarządzanie treścią i
            funkcjonalnościami aplikacji.
          </>,
          <>
            Optymalizacja wydajności aplikacji poprzez implementację najlepszych
            praktyk w Next.js, takich jak server-side rendering (SSR) i static
            site generation (SSG), co skutkowało szybszym ładowaniem stron i
            lepszym doświadczeniem użytkownika.
          </>,
        ],
        images: [],
      },
      {
        company: "Bizneto",
        timeframe: "2024 - 2025",
        role: "Programista Fullstack",
        achievements: [
          <>
            Optymalizacja wydajności aplikacji (SSR, SSG, ISR, code splitting),
            co skutkowało szybszym ładowaniem stron i lepszym doświadczeniem
            użytkownika.
          </>,
          <>
            Implementacja API REST / GraphQL w Strapi oraz integracja z
            frontendem Next.js, umożliwiając dynamiczne zarządzanie treścią i
            funkcjonalnościami aplikacji.
          </>,
        ],
        images: [],
      },
      {
        company: "Samozatrudnienie",
        timeframe: "2022 - Obecnie",
        role: "Programista Fullstack",
        achievements: [
          <>
            Współpraca z klientami w celu zrozumienia ich potrzeb i dostarczania
            rozwiązań technologicznych, które spełniają ich wymagania biznesowe.
          </>,
          <>
            Implementacja API REST / GraphQL w Strapi oraz integracja z
            frontendem Next.js, umożliwiając dynamiczne zarządzanie treścią i
            funkcjonalnościami aplikacji.
          </>,
          <>
            Analiza konkurencji i trendów rynkowych w celu dostarczania
            innowacyjnych rozwiązań technologicznych, które wyróżniają się na
            tle konkurencji.
          </>,
          <>
            Pomoc w budowie marki osobistej klientów poprzez tworzenie
            profesjonalnych stron internetowych, które prezentują ich
            umiejętności, doświadczenie i osiągnięcia w atrakcyjny sposób.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Piszę o trendach technologicznych i wiele więcej...",
  description: `Przeczytaj co ${person.name} ostatnio opisywał`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projekty",
  title: `Projekty – ${person.name}`,
  description: `Ostatnie realizacje - ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
