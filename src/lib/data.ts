export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
  featured?: boolean;
  trending?: boolean;
}

export const categories = [
  "All",
  "Technology",
  "Business",
  "Science",
  "Politics",
  "Sports",
  "Entertainment",
  "Health",
] as const;

export const articles: Article[] = [
  {
    id: "1",
    title: "AI Revolution: How Machine Learning Is Reshaping Every Industry in 2026",
    excerpt: "From healthcare to finance, artificial intelligence continues to transform the way businesses operate and innovate.",
    content: `Artificial intelligence has moved far beyond the experimental stage. In 2026, machine learning models are deeply embedded in virtually every major industry, driving efficiency gains that were unimaginable just five years ago.\n\nIn healthcare, AI-powered diagnostic tools now assist doctors in identifying diseases with remarkable accuracy. Radiology departments across top hospitals report that AI systems catch anomalies that human eyes might miss, reducing misdiagnosis rates by up to 30%.\n\nThe financial sector has embraced algorithmic trading and AI-driven risk assessment models. Major banks now use sophisticated neural networks to detect fraud in real-time, processing millions of transactions per second with near-zero false positives.\n\nManufacturing has seen perhaps the most dramatic transformation. Smart factories equipped with AI-powered quality control systems and predictive maintenance algorithms have reduced downtime by 45% and defect rates by 60%.\n\nAs we look ahead, experts predict that the next wave of AI innovation will focus on multimodal systems that can seamlessly process text, images, audio, and video simultaneously, opening up entirely new possibilities for human-machine collaboration.`,
    category: "Technology",
    author: "Sarah Chen",
    date: "2026-03-01",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: "2",
    title: "Global Markets Rally as Central Banks Signal Rate Cuts",
    excerpt: "Stock markets around the world surge as major central banks hint at easing monetary policy in the coming months.",
    content: `Global financial markets experienced a significant rally today as several major central banks signaled a potential shift toward looser monetary policy.\n\nThe Federal Reserve, European Central Bank, and Bank of England all released statements suggesting that inflation has cooled sufficiently to consider rate reductions in the near future.\n\nWall Street led the charge, with the S&P 500 climbing 2.3% and the Nasdaq gaining 3.1%. European markets followed suit, with the FTSE 100 and DAX both posting gains above 1.5%.\n\nAnalysts note that the coordinated messaging from central banks represents a significant shift in global monetary policy that could fuel economic growth throughout the remainder of 2026.`,
    category: "Business",
    author: "Michael Torres",
    date: "2026-02-28",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: "4 min read",
    trending: true,
  },
  {
    id: "3",
    title: "Breakthrough in Quantum Computing Promises Faster Drug Discovery",
    excerpt: "Scientists achieve quantum supremacy milestone that could accelerate pharmaceutical research by decades.",
    content: `A team of researchers has achieved a groundbreaking milestone in quantum computing that could revolutionize drug discovery and materials science.\n\nThe new quantum processor, developed at a leading research university, successfully simulated complex molecular interactions that would take traditional supercomputers thousands of years to compute.\n\nThis breakthrough opens the door to rapid screening of potential drug candidates, potentially cutting the pharmaceutical development timeline from 10-15 years to just 2-3 years.\n\nPharmaceutical companies are already lining up to partner with the research team, recognizing the enormous potential for creating targeted therapies for diseases that have long resisted treatment.`,
    category: "Science",
    author: "Dr. Emily Watson",
    date: "2026-02-27",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: "4",
    title: "Historic Climate Agreement Signed by 190 Nations",
    excerpt: "World leaders commit to ambitious carbon reduction targets in landmark environmental accord.",
    content: `In what environmental advocates are calling the most significant climate agreement since the Paris Accord, representatives from 190 nations have signed a binding commitment to dramatically reduce carbon emissions.\n\nThe agreement includes enforceable targets for reducing greenhouse gas emissions by 60% by 2035, with specific milestones and penalties for non-compliance.\n\nKey provisions include a $500 billion fund for developing nations to transition to clean energy, strict regulations on industrial emissions, and incentives for carbon capture technology development.`,
    category: "Politics",
    author: "James Mitchell",
    date: "2026-02-26",
    image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=800&q=80",
    readTime: "4 min read",
    trending: true,
  },
  {
    id: "5",
    title: "Champions League Final: Underdogs Stun Football World",
    excerpt: "In one of the greatest upsets in football history, a small-market club claims Europe's most prestigious trophy.",
    content: `The football world was left in shock as a small-market club defied all odds to claim the Champions League trophy in a thrilling final that will be remembered for generations.\n\nWith a squad valued at a fraction of their opponents', the underdogs produced a masterclass in tactical discipline and counter-attacking football to secure a famous 3-2 victory.\n\nThe winning goal came in the 89th minute, sending their supporters into euphoric celebrations across the globe.`,
    category: "Sports",
    author: "Carlos Rivera",
    date: "2026-02-25",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
    readTime: "3 min read",
  },
  {
    id: "6",
    title: "Streaming Wars Intensify as New Platform Launches with Blockbuster Lineup",
    excerpt: "The latest entrant to the streaming market promises to disrupt the industry with exclusive content deals.",
    content: `The streaming landscape has been shaken up once again with the launch of a new platform backed by a consortium of major studios and tech investors.\n\nThe service debuts with an impressive catalog of exclusive films and series, including several projects from award-winning directors and A-list talent.\n\nIndustry analysts predict the new platform could capture up to 15% of the streaming market within its first year, putting pressure on established players.`,
    category: "Entertainment",
    author: "Lisa Park",
    date: "2026-02-24",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80",
    readTime: "3 min read",
  },
  {
    id: "7",
    title: "New Gene Therapy Shows Promise in Treating Alzheimer's Disease",
    excerpt: "Clinical trials reveal breakthrough treatment that could slow or even reverse cognitive decline.",
    content: `A revolutionary gene therapy has shown remarkable results in Phase 3 clinical trials for Alzheimer's disease, offering hope to millions of patients and their families worldwide.\n\nThe treatment works by targeting specific genetic markers associated with the buildup of amyloid plaques in the brain. In trials involving 2,000 patients, those receiving the therapy showed a 70% reduction in cognitive decline compared to the placebo group.\n\nPerhaps most remarkably, 30% of treated patients actually showed improvement in cognitive function, suggesting the therapy may be able to partially reverse the disease's effects.`,
    category: "Health",
    author: "Dr. Robert Kim",
    date: "2026-02-23",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: "8",
    title: "SpaceX Announces First Commercial Mars Mission for 2028",
    excerpt: "Elon Musk's company reveals plans for the first civilian journey to the Red Planet.",
    content: `SpaceX has officially announced plans for the first commercial mission to Mars, scheduled for launch in 2028. The mission will carry a crew of six civilians on a round-trip journey lasting approximately 18 months.\n\nThe company revealed that ticket prices will start at $5 million per seat, with the first batch of seats already sold out to a mix of scientists, entrepreneurs, and space enthusiasts.`,
    category: "Technology",
    author: "Alex Johnson",
    date: "2026-02-22",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&q=80",
    readTime: "4 min read",
    trending: true,
  },
  {
    id: "9",
    title: "Cryptocurrency Regulation Framework Adopted by G20 Nations",
    excerpt: "Major economies agree on unified approach to digital asset oversight.",
    content: `The G20 nations have reached a historic consensus on a comprehensive regulatory framework for cryptocurrencies and digital assets.\n\nThe framework establishes clear guidelines for exchanges, stablecoin issuers, and DeFi protocols, while providing consumer protections and anti-money laundering measures.\n\nMarket reaction has been overwhelmingly positive, with Bitcoin surging past $150,000 as investors welcome the regulatory clarity.`,
    category: "Business",
    author: "David Chang",
    date: "2026-02-21",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    readTime: "4 min read",
  },
  {
    id: "10",
    title: "Olympic Committee Announces Esports as Official Medal Event for 2028",
    excerpt: "Competitive gaming will debut as a full medal sport at the Los Angeles Olympics.",
    content: `In a decision that bridges the gap between traditional athletics and digital competition, the International Olympic Committee has officially approved esports as a medal event for the 2028 Los Angeles Olympics.\n\nFive titles will be featured, spanning fighting games, racing simulations, and team-based strategy games. National teams are already forming, with athletes undergoing rigorous training regimens.`,
    category: "Sports",
    author: "Nina Patel",
    date: "2026-02-20",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    readTime: "3 min read",
  },
  {
    id: "11",
    title: "Renewable Energy Now Cheaper Than Fossil Fuels in Every Major Market",
    excerpt: "Solar and wind energy costs drop below coal and gas, marking a historic turning point.",
    content: `For the first time in history, renewable energy sources are now cheaper than fossil fuels in every major global market, according to a comprehensive report from the International Energy Agency.\n\nSolar energy costs have plummeted by 89% over the past decade, while wind energy costs have fallen by 70%. The report notes that new renewable installations are now the most economical choice for electricity generation worldwide.`,
    category: "Science",
    author: "Maria Santos",
    date: "2026-02-19",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    readTime: "4 min read",
  },
  {
    id: "12",
    title: "Universal Basic Income Pilot Program Shows Promising Results",
    excerpt: "Two-year study reveals significant improvements in health, education, and entrepreneurship.",
    content: `A large-scale Universal Basic Income pilot program has released its final results after two years, revealing significant positive outcomes across multiple metrics.\n\nParticipants who received $1,500 monthly showed 40% higher rates of entrepreneurship, 25% improvement in mental health scores, and their children showed measurably better academic performance.`,
    category: "Politics",
    author: "Rachel Foster",
    date: "2026-02-18",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    readTime: "5 min read",
  },
];

export function getArticleById(id: string): Article | undefined {
  return articles.find((a) => a.id === id);
}

export function getArticlesByCategory(category: string): Article[] {
  if (category === "All") return articles;
  return articles.filter((a) => a.category === category);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}

export function getTrendingArticles(): Article[] {
  return articles.filter((a) => a.trending);
}

export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase();
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q)
  );
}
