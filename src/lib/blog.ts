import classroom from "@/assets/classroom.jpg";
import hero from "@/assets/hero-campus.jpg";
import library from "@/assets/library.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import sports from "@/assets/sports.jpg";

export type BlogCategory = "School events" | "Teacher spotlight" | "Child development";

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  body: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "annual-day-little-stars-on-stage",
    title: "Annual Day: our little stars take the stage",
    category: "School events",
    date: "2026-08-12",
    readTime: "3 min read",
    excerpt:
      "Playgroup to Sr. KG came together for an evening of dance, rhymes and a whole lot of glitter.",
    image: hero,
    imageAlt: "Little Genius campus decorated for the Annual Day celebration",
    body: [
      "Annual Day at Little Genius International School is never about a perfect performance — it is about a three-year-old finding the courage to walk on stage and wave at the crowd. This year, every single child from Playgroup to Sr. KG had a moment in the spotlight.",
      "Rehearsals ran for three weeks during activity time, never cutting into rest or play. Teachers built the choreography around what the children already loved doing: clapping games, animal walks and action rhymes.",
      "Parents filled the hall well before time, and the loudest cheer of the evening went to our Playgroup 'twinkling stars' who forgot half the steps and improvised beautifully. That, to us, is exactly what early childhood confidence looks like.",
    ],
  },
  {
    slug: "sports-day-tiny-feet-big-hearts",
    title: "Sports Day: tiny feet, big hearts",
    category: "School events",
    date: "2026-07-05",
    readTime: "2 min read",
    excerpt:
      "Sack races, balancing spoons and a parent relay that nobody expected to be so competitive.",
    image: sports,
    imageAlt: "Children taking part in races on the school sports ground",
    body: [
      "Our Sports Day is built on one rule: every child finishes, and every child gets clapped for. Races are short, tracks are soft and teachers run alongside the youngest participants.",
      "The morning included a balancing race, a colour-hunt relay and the much-loved sack race. The parent relay at the end turned into the highlight of the day.",
      "Beyond the fun, these events quietly build gross motor skills, turn-taking and the ability to handle both winning and losing — all essential groundwork for primary school.",
    ],
  },
  {
    slug: "teacher-spotlight-nursery-classroom",
    title: "Teacher spotlight: the calm at the centre of Nursery",
    category: "Teacher spotlight",
    date: "2026-06-18",
    readTime: "3 min read",
    excerpt:
      "How our Nursery team turns the first week of school — usually the teariest — into something children look forward to.",
    image: classroom,
    imageAlt: "A teacher working with young children in a bright classroom",
    body: [
      "The first week of Nursery is the hardest week in any pre-primary school. Our Nursery teachers plan it like a slow welcome rather than a schedule: shorter circle time, familiar toys within reach and a fixed goodbye ritual at the door.",
      "Each teacher keeps a simple observation diary for the children in her care — what settles them, what excites them, what they reach for first. Those notes shape the following week's activities.",
      "With 15+ staff members across the campus, ratios stay small enough that every child is genuinely known by name, mood and habit within the first fortnight.",
    ],
  },
  {
    slug: "teacher-spotlight-storytelling",
    title: "Teacher spotlight: storytelling as a teaching tool",
    category: "Teacher spotlight",
    date: "2026-05-22",
    readTime: "2 min read",
    excerpt: "Why our Jr. KG teachers begin almost every new concept with a story instead of a worksheet.",
    image: library,
    imageAlt: "Children listening to a story in the school library corner",
    body: [
      "Ask a four-year-old to count backwards and you may get a blank look. Wrap the same idea in a story about a rocket taking off and the whole class joins in.",
      "Our Jr. KG teachers introduce numbers, phonics and even classroom rules through short, repeatable stories with props the children can hold.",
      "Repetition is deliberate. A story told three times across a week lets children move from listening, to joining in, to retelling it themselves — which is where real language growth happens.",
    ],
  },
  {
    slug: "school-readiness-before-sr-kg",
    title: "Child development: what school readiness actually means",
    category: "Child development",
    date: "2026-04-30",
    readTime: "4 min read",
    excerpt:
      "It is far less about reading and writing than most parents expect — and far more about independence.",
    image: scienceLab,
    imageAlt: "Young children exploring hands-on learning activities",
    body: [
      "Parents often ask us whether their child should be reading before Sr. KG. Our honest answer: reading readiness matters, but it sits behind three other skills.",
      "First, self-help — opening a tiffin, using the washroom, packing a bag. Second, emotional regulation — waiting for a turn, asking for help, recovering from a small disappointment. Third, sustained attention for ten to fifteen minutes on a chosen task.",
      "Children with those three in place pick up letters and numbers quickly. Children without them struggle even if they can already recite the alphabet.",
      "At home, the simplest support is to resist doing things for your child that they can almost do themselves. The extra five minutes is the lesson.",
    ],
  },
  {
    slug: "screen-time-and-early-years",
    title: "Child development: screen time in the early years",
    category: "Child development",
    date: "2026-03-14",
    readTime: "3 min read",
    excerpt: "A practical, non-judgemental approach for busy families — with three small habits that help.",
    image: classroom,
    imageAlt: "Children engaged in hands-on classroom play instead of screens",
    body: [
      "Screens are part of family life and pretending otherwise helps nobody. What matters at this age is what screens replace: conversation, movement and unstructured play.",
      "Three habits we suggest to parents: keep meals screen-free, watch together and talk about what you see, and end screen time with a physical activity rather than sleep.",
      "In class we balance this with plenty of tactile work — dough, sand, water play and building blocks — because small hands need resistance and texture to develop the strength writing later demands.",
    ],
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
