export type Event = {
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
  image: string;
};

export const events: Event[] = [
  {
    title: "Next.js Conf 2026",
    slug: "nextjs-conf-2026",
    location: "San Francisco, CA",
    date: "June 10–11, 2026",
    time: "9:00 AM – 5:00 PM PT",
    image: "/images/event1.png",
  },
  {
    title: "React Summit",
    slug: "react-summit-2026",
    location: "Amsterdam, NL",
    date: "May 15–16, 2026",
    time: "10:00 AM – 6:00 PM CEST",
    image: "/images/event2.png",
  },
  {
    title: "JSNation Conference",
    slug: "jsnation-2026",
    location: "Online (Global)",
    date: "July 20–22, 2026",
    time: "11:00 AM – 4:00 PM UTC",
    image: "/images/event3.png",
  },
  {
    title: "GitHub Universe",
    slug: "github-universe-2026",
    location: "New York, NY",
    date: "September 8–9, 2026",
    time: "9:00 AM – 4:00 PM ET",
    image: "/images/event4.png",
  },
  {
    title: "Global AI Hackathon",
    slug: "global-ai-hackathon-2026",
    location: "Online (Global)",
    date: "August 14–16, 2026",
    time: "24-hour sprint",
    image: "/images/event5.png",
  },
  {
    title: "DevOpsDays London",
    slug: "devopsdays-london-2026",
    location: "London, UK",
    date: "October 12–13, 2026",
    time: "9:30 AM – 5:30 PM BST",
    image: "/images/event6.png",
  },
];
