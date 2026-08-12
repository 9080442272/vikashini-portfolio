import salesChannelImage from "@/assets/projects/sales-channel.png";
import section12Image from "@/assets/projects/section-1-2.png";
import figjamNotesImage from "@/assets/projects/figjam-notes.png";
import productAttributes from "@/assets/projects/product-attributes.png";
import productList from "@/assets/projects/product-list.png";
import productListExpanded from "@/assets/projects/product-list-expanded.png";
import performanceAnalysis from "@/assets/projects/performance-analysis.png";
import performanceSettings from "@/assets/projects/performance-settings.png";
import myOrderImage from "@/assets/projects/myorder.png";
import orderPreparationImage from "@/assets/projects/order-preparation.png";
import ordersListImage from "@/assets/projects/orders-list.png";
import marketRadarImage from "@/assets/projects/market-radar.png";
import orderPreparationOld from "@/assets/projects/order-preparation-old.png";
import ordersListOld from "@/assets/projects/orders-list-old.png";
import problemEverywhere from "@/assets/projects/problem-everywhere.png";
import conclusionKeyTakeaways from "@/assets/projects/conclusion-key-takeaways.png";
import solutionUnifiedChannelHub from "@/assets/projects/solution-unified-channel-hub.png";
import howWeFoundItDiscovery from "@/assets/projects/how-we-found-it-discovery.png";
import bulkPricingProblemImage from "@/assets/projects/bulk-pricing-problem.png";
import bulkPricingDiscoveryImage from "@/assets/projects/bulk-pricing-discovery.jpg";
import bulkPricingImpactImage from "@/assets/projects/bulk-pricing-impact.png";
import competitorIntelligenceDiscoveryImage from "@/assets/projects/competitor-intelligence-discovery.png";
import competitorIntelligenceImpactImage from "@/assets/projects/competitor-intelligence-impact.png";
import vikassyImage from "@/assets/projects/vikassy.png";
import vikassyDiscoveryImage from "@/assets/projects/vikassy-discovery.jpg";
import vikassyExplorationImage from "@/assets/projects/vikassy-exploration.png";
import vikassyDecisionsImage from "@/assets/projects/vikassy-decisions.png";
import vikassyArchitectureImage from "@/assets/projects/vikassy-architecture.png";
import vikassyPrioritizationImage from "@/assets/projects/vikassy-prioritization.png";









export interface ProjectData {
  id: number;
  title: string;
  subtitle: string;
  featuredImage: string;
  liveLink?: string;
  caseSections: {
    category: string;
    subtitle: string;
    content: string;
    images: { src: string; alt: string }[];
    layout: "single" | "split";
    figmaEmbed?: string;
  }[];
}

export const projects: ProjectData[] = [
  {
    id: 1,
    title: "Combining Sales Channel and Market Monitoring",
    subtitle: "Client: Boostmyshop APP | My Role: Product Designer | Industry: E-commerce | Platform: Web Application",
    featuredImage: salesChannelImage,
    caseSections: [
      {
        category: "Problem Statement",
        subtitle: "Critical Onboarding Failure",
        content:
          "To understand why onboarding conversion was underperforming, we analyzed product analytics, support tickets, and user session recordings.\n\nThe findings revealed a consistent pattern:\n\nUsers successfully connected marketplaces through Sales Channel but expected competitor pricing and market insights to appear automatically. When those insights were missing, users assumed the setup was incomplete or the product was malfunctioning.\n\n**As a result:**\n• Users abandoned onboarding before discovering Market Monitoring\n• Activation of the platform's most valuable feature remained low\n• Support teams spent significant time explaining product architecture\n• Trust in the platform decreased during the critical first-use experience\n\n**The issue was not a usability problem—it was a mental model problem.**\n\nUsers viewed marketplaces as a single capability, while our product forced them to navigate two separate systems.",
        images: [],
        layout: "single" as const,
      },
      {
        category: "How We Found It",
        subtitle: "Data-Driven Discovery",
        content:
          'We didn\'t guess. It showed up everywhere in real usage:\n\nWe weren\'t losing usability. We were losing trust.',
        images: [
          {
            src: howWeFoundItDiscovery,
            alt: "How We Found It - Data-Driven Discovery image",
          },
        ],
        layout: "single" as const,
      },
      {
        category: "Design Exploration",
        subtitle: "Exploring Multiple Approaches",
        content:
          "Before redesigning the architecture, we explored multiple approaches.\n\n**Option 1 — Rename Market Monitoring**\nWe tested clearer terminology and revised labels.\n❌ **Rejected** — The problem wasn't wording. Users still perceived both modules as representing the same marketplace.\n\n**Option 2 — Add Tooltips & Documentation**\nWe explored onboarding guides and contextual education.\n❌ **Rejected** — Users ignored explanations because they believed they already understood the workflow.\n\n**Option 3 — Guided Setup Wizard**\nWe considered forcing users through both modules sequentially.\n❌ **Rejected** — This improved discovery but preserved the underlying architectural complexity.\n\n**Option 4 — Unified Channel Hub**\nInstead of teaching users about internal systems, we reorganized the experience around their mental model (Marketplace first, Capabilities second).\n✅ **Selected Solution** — This approach eliminated the distinction users never cared about in the first place.",
        images: [
          {
            src: figjamNotesImage,
            alt: "Brainstorming and ideation",
          },
        ],
        layout: "single" as const,
      },
      {
        category: "Solution",
        subtitle: "The Unified Channel Hub",
        content:
          'We merged both modules into a single experience.\n\nNo jargon, no multi-tab hunting, no duplicated pages. The moment of highest intent is when onboarding momentum is still high — we use it.',

        images: [
          {
            src: solutionUnifiedChannelHub,
            alt: "The Unified Channel Hub Solution image",
          },
        ],
        layout: "single" as const,
      },
      {
        category: "Impact",
        subtitle: "Measurable Results",
        content:
          "Following release, we compared performance across four weeks before and four weeks after launch:\n\n⚡ **55% Faster Setup**\n• Average time-to-first-insight decreased from **14 minutes** ➔ **6.3 minutes**.\n• Setup complexity was significantly reduced, allowing faster onboarding.\n\n📈 **3.1× Increase in Monitoring Adoption**\n• Activation rate increased from **18%** ➔ **57%**.\n• More users successfully reached and activated the platform's core value proposition.\n\n💬 **63% Reduction in Support Tickets**\n• Questions related to onboarding confusion dropped significantly.\n• Support conversations shifted from **\"Where is competitor data?\"** ➔ **\"How can I improve pricing strategy?\"**\n• This indicated that users were no longer struggling with navigation and could focus on business outcomes.",
        images: [],
        layout: "single" as const,
        figmaEmbed:
          "https://embed.figma.com/design/mua6OmvCxWTTHgSpW4r1AL/Sales-channel-and-market-monitoring?node-id=1-8214&embed-host=share",
      },
      {
        category: "Conclusion",
        subtitle: "Key Takeaways",
        content:
          "We stopped making users think like our engineering team, and let them act like merchants.\n\n**The redesign replaced confusion with clarity, and action with conversion.**",
        images: [
          {
            src: conclusionKeyTakeaways,
            alt: "Conclusion - Key Takeaways image",
          },
        ],
        layout: "single" as const,
      },
    ],
  },
  {
    id: 2,
    title: "Designing a Bulk Pricing Action Interface",
    subtitle: "Client: Boostmyshop APP | My Role: Product Designer | Industry: E-commerce | Platform: Web Application",
    featuredImage: productAttributes,
    caseSections: [
      {
        category: "Problem",
        subtitle: "Inefficient Pricing Management",
        content: "",
        images: [
          {
            src: bulkPricingProblemImage,
            alt: "Bulk pricing problem statement: current workflow spreadsheet dependency and repetitive edit cycle",
          },
        ],
        layout: "single" as const,
      },
      {
        category: "How We Found It",
        subtitle: "Data-Driven Discovery",
        content: "To validate the problem, we analyzed multiple sources of user behavior.",
        images: [
          {
            src: bulkPricingDiscoveryImage,
            alt: "How we found it data-driven discovery diagram: User feedback, product analytics, session recordings, and support tickets",
          },
        ],
        layout: "single" as const,
      },
      {
        category: "Design Challenge",
        subtitle: "Balancing Complexity with Usability",
        content:
          "Our design challenge was complex:\n\nWe had **18+ different options** to expose in bulk actions, including:\n• Reference Price, Max Retail Price, Wholesale Price\n• Shipping Cost, Additional Cost\n• Tax Rate, Platform Commission\n• Shipping Price\n• Competitor rules (min price, max price, fixed price)\n• Product status toggles (monitoring, optimization)\n\n**The big question:** How do we show all these options without overwhelming users?",
        images: [],
        layout: "single" as const,
      },
      {
        category: "Design Exploration",
        subtitle: "Exploring Multiple Approaches",
        content:
          "We explored several approaches before arriving at the final solution.\n\n**Option 1 — Single Form**\nAll bulk actions displayed in one screen.\n❌ **Rejected** — The interface became overwhelming and difficult to scan.\n\n**Option 2 — Collapsible Sections**\nGrouped actions inside expandable panels.\n❌ **Rejected** — Reduced visual clutter but increased navigation effort.\n\n**Option 3 — Multi-Step Wizard**\nSeparated actions into sequential steps.\n❌ **Rejected** — Improved organization but slowed down frequent workflows.\n\n**Option 4 — Intent-Based Tabs**\nActions grouped by what users were trying to accomplish.\n✅ **Selected** — This approach reduced cognitive load while preserving visibility and speed.\n\n**Key Insight:**\nUsers did not think in terms of fields. They thought in terms of goals.\n\nThey wanted to:\n• Change product status\n• Adjust pricing inputs\n• Define pricing strategies\n\nThis insight became the foundation of the information architecture.",
        images: [],
        layout: "single" as const,
      },
      {
        category: "Solution",
        subtitle: "In-Platform Bulk Editor",
        content:
          "We replaced spreadsheet uploads with a contextual bulk editing experience directly inside the product list.\n\n**Product Selection in Context**\nUsers can select products directly from the catalog view.\n• No downloads\n• No external tools\n• No context switching\n\nVisual selection states provide immediate feedback.\n\n**Intent-Based Editing Structure**\nActions were organized into three focused tabs:\n\n1. **Product Status** (Operational controls such as Monitoring, Optimization, and Product activation)\n2. **Product Attributes** (Pricing inputs including Reference Price, Wholesale Price, Shipping Cost, Additional Cost, and Tax and Commission Settings)\n3. **Product Strategy** (Competitive pricing rules such as Minimum Price, Maximum Price, Fixed Price, and Competitor-based Rules)\n\n**Instant Application**\nOnce changes are configured:\n• Users review updates\n• Apply changes immediately\n• Results appear directly within the platform\n\nNo file validation. No upload process. No waiting.",
        images: [],
        figmaEmbed: "https://embed.figma.com/design/GgHcLuNY0U2JJAFCe1JWYM/Bulk-Action?node-id=0-1&embed-host=share",
        layout: "single" as const,
      },
      {
        category: "Impact",
        subtitle: "Measurable Results",
        content: "Following release, we measured adoption and workflow efficiency.",
        images: [
          {
            src: bulkPricingImpactImage,
            alt: "Impact & Results: Bulk Action Adoption (15% to 68%), Time to Update 200 Products (20 min to under 2 min), Spreadsheet Dependency (100% to 0%), and Manual Product Edits (High to Low).",
          },
        ],
        layout: "single" as const,
      },
      {
        category: "Conclusion",
        subtitle: "Key Takeaways",
        content:
          "The design succeeded because it removed the file middleman and let users work directly with their products, in context, with immediate feedback—turning a fragmented workflow into a seamless one.\n\n**This shows that sometimes the best solution isn't adding another tool, but integrating functionality where users already are.**",
        images: [],
        layout: "single" as const,
      },
    ],
  },
  {
    id: 3,
    title: "Competitor Intelligence & Market Radar Redesign",
    subtitle: "Client: Boostmyshop APP | My Role: Product Designer | Industry: E-commerce | Platform: Web Application",
    featuredImage: productList,
    caseSections: [
      {
        category: "Problem",
        subtitle: "Limited Competitor Data",
        content:
          'Users struggled to make strategic pricing decisions with limited competitor data. Sellers could see basic competitor pricing through our Market Radar feature, but this surface-level view left critical strategic questions unanswered: "Is this competitor credible?" "Is this price a temporary flash sale or a permanent shift?"\n\nWithout this context, users defaulted to reactive price-matching instead of proactive market positioning, often leaving margin on the table or losing sales opportunities.\n\nWhile the Market Radar provided a starting point, it created new friction—users had to cross-reference multiple tools, maintain manual spreadsheets, and make decisions based on incomplete information, breaking their strategic workflow and adding hours of research instead of providing actionable insights.',
        images: [
          {
            src: marketRadarImage,
            alt: "Market Radar interface showing competitor offers",
          },
        ],
        layout: "single" as const,
      },
      {
        category: "How We Found It",
        subtitle: "The Evidence Was Everywhere",
        content: "We analyzed user interviews, support conversations, and product usage to understand how merchants used competitor data in practice.",
        images: [
          {
            src: competitorIntelligenceDiscoveryImage,
            alt: "How We Found It — The Evidence Was Everywhere diagram: User interviews & surveys, support tickets, and workflow observation showing the manual process.",
          },
        ],
        layout: "single" as const,
      },
      {
        category: "Design Challenge",
        subtitle: "Adding Depth Without Overwhelm",
        content:
          "We had to add **18+ new data dimensions** without overwhelming users accustomed to a simple table. How do you go from showing 4 data points (price, shipping, condition, marketplace) to 22+ without creating analysis paralysis?",
        images: [],
        layout: "single" as const,
      },
      {
        category: "Ideation",
        subtitle: "Approaches We Considered",
        content:
          "We explored several approaches before arriving at the final solution.\n\n**Approach 1 — Everything Dashboard**\nDisplay all available competitor intelligence on a single screen.\n❌ **Rejected** — The interface became overwhelming and difficult to scan. Users struggled to identify the most important information.\n\n**Approach 2 — Drill-Down Only**\nKeep the table simple and move all intelligence into detail pages.\n❌ **Rejected** — Users needed too many clicks to answer routine questions. The workflow became slow and fragmented.\n\n**Approach 3 — Separate Advanced View**\nCreate basic and advanced modes.\n❌ **Rejected** — This split the experience into two products and hid valuable insights from many users.\n\n**Approach 4 — Layered Intelligence Model**\nProgressively reveal intelligence while preserving the familiar table structure.\n✅ **Selected** — Users could quickly scan competitor data while accessing deeper insights only when necessary.",
        images: [],
        layout: "single" as const,
      },

      {
        category: "Solution",
        subtitle: "Layered Intelligence Framework",
        content:
          "We redesigned Market Radar around three levels of insight.\n\n**Level 1 — Quick Scan**\nInformation immediately visible in the competitor table:\n• Price\n• Seller Rating\n• Market Position\n• Threat Indicators\n\nThis enabled fast scanning and comparison across competitors.\n\n**Level 2 — Context on Demand**\nUsers could expand a competitor row without leaving the page.\n\nAdditional insights included:\n• Historical Price Trends\n• Seller Performance\n• Product Availability\n• Marketplace Presence\n• Competitive Positioning\n\nThis eliminated the need for external research.\n\n**Level 3 — Decision Support**\nInstead of simply displaying data, the system provided actionable context.\n\nExamples:\n• Emerging Threat\n• Aggressive Price Drop Detected\n• Temporary Promotion Likely\n• Strong Competitor Performance\n\nUsers could understand what was happening and why it mattered.",
        images: [
          {
            src: productListExpanded,
            alt: "Redesigned competitor intelligence solution showing expanded view, performance analysis, and configuration settings.",
          },
          {
            src: performanceAnalysis,
            alt: "Performance analysis metrics within the expanded competitor details.",
          },
          {
            src: performanceSettings,
            alt: "Seller performance settings and thresholds configurations.",
          },
        ],
        layout: "single" as const,
      },
      {
        category: "Conclusion",
        subtitle: "Transformation Results",
        content:
          '"Before, I had data. Now, I have answers."\n\nThe redesign transformed Market Radar from a basic price table to a complete competitor intelligence platform, driving significant improvements across user adoption and strategic business outcomes.',
        images: [
          {
            src: competitorIntelligenceImpactImage,
            alt: "Competitor Intelligence Before vs After & Impact results: Faster analysis (5+ min to 15s), higher confidence (42% to 89%), higher adoption (22% to 78%), and business impact metrics.",
          },
        ],
        layout: "single" as const,
      },
    ],
  },
  {
    id: 4,
    title: "myOrders – Order Management Designed for Small Sellers",
    subtitle: "Client: Boostmyshop APP | My Role: Product Designer | Industry: E-commerce | Platform: Web Application",
    featuredImage: myOrderImage,
    caseSections: [
      {
        category: "Introduction",
        subtitle: "A Simple Tool for Simple Needs",
        content:
          "Small e-commerce sellers don't run warehouses. They don't think in logistics terminology and they definitely don't want to operate a complicated fulfillment system just to ship 3–10 orders a day. Yet, most order tools in the market were built for large operations.\n\nI designed myOrders to deliver a simple, visual, and step-by-step order experience specifically for small sellers who just need to accept orders and ship them without confusion.",
        images: [],
        layout: "single" as const,
      },
      {
        category: "Problem Statement",
        subtitle: "The Wrong Tool for the Wrong Audience",
        content:
          "We already had a product called myFulfillment, a fully featured warehouse management tool intended for medium and large businesses. When small sellers started requesting order-management capabilities, we tried using myFulfillment for them with heavy customization.\n\nEven after multiple UI simplifications, it still didn't match the needs of small sellers. It was over-engineered, hard to understand, and required constant guidance.\n\nStakeholders decided to create a new product—myOrders—focused exclusively on small business operations so we could serve both segments without compromising either product.",
        images: [
          {
            src: orderPreparationOld,
            alt: "Original Order Preparation interface showing complex table layout",
          },
          {
            src: ordersListOld,
            alt: "Original Orders list showing data-heavy grid view",
          },
        ],
        layout: "split" as const,
      },
      {
        category: "Core Issues",
        subtitle: "What Was Broken",
        content:
          "From the small sellers' perspective:\n\n**Too many steps**\nThe workflows assumed warehouse-level processes.\n\n**Complex terminology**\nUsers didn't understand fulfillment language like 'processing,' 'generation,' or 'inventory exceptions.'\n\n**Traditional grid view increased scanning**\nA table-heavy layout forced users to find actions instead of guiding them.\n\n**Unclear next steps**\nUsers constantly asked support: 'What should I click now?'\n\n**Marketplace status inconsistency**\nDifferent marketplaces use different status wording, which created further ambiguity.",
        images: [],
        layout: "single" as const,
      },
      {
        category: "How We Found It",
        subtitle: "Evidence from Every Direction",
        content:
          "We collected insights from:\n\n• Support tickets\n• Onboarding conversations\n• Observation of their workflows\n• User messages asking for 'what to do next'\n• Repeated requests for 'simpler views'\n\nPatterns were impossible to ignore:\n\n• Sellers were getting stuck at basic operations\n• They didn't want detailed data, they wanted a sequential flow\n• There was zero appetite for learning warehouse logic\n\n**If users have to think about the product instead of thinking about their work, the UX is wrong.**",
        images: [],
        layout: "single" as const,
      },
      {
        category: "Ideation",
        subtitle: "Challenging Our Assumptions",
        content:
          "We challenged the assumptions behind myFulfillment's UI:\n\n• Does every user really need grids?\n• Does everyone care about logistics terminology?\n• Why do we show full data before showing actions?\n• Why isn't the next step visually obvious?\n\nWe prototyped:\n\n• Simplified tables\n• Guided flows\n• Progressive disclosure\n• Smarter button groups\n• A visual workflow idea (Kanban)\n\n**The Kanban concept immediately solved most problems:**\nIt turned the order flow into visible stages instead of hidden data.",
        images: [],
        layout: "single" as const,
      },
      {
        category: "Solution",
        subtitle: "Kanban-First Order Management",
        content:
          "**Kanban as the main experience**\n\nMost tools in the category default to tables. I intentionally made Kanban primary because small sellers don't think in spreadsheets. They think in stages:\nPlaced → Accepted → Shipping → Delivered.\n\nKanban does exactly that.\n\n**Grid as secondary**\n\nThe grid still exists for:\n• History\n• Exports\n• Bulk actions\n• Data review\n\nBut it's optional, not mandatory.\n\n**Action-first cards**\n\nEach order card shows the most important action:\nAccept, Generate Label, Print, Ship, Resolve, etc.\n\nNo guessing. No hunting through menus.\n\n**Simplified language**\n\nAll labels and CTAs were rewritten in everyday language—not industry terms.",
        images: [],
        figmaEmbed: "https://embed.figma.com/design/EO9blelygEKF5LRIq1BA5J/myorder?node-id=0-1&embed-host=share",
        layout: "single" as const,
      },
      {
        category: "Conclusion",
        subtitle: "Matching Mental Models",
        content:
          "myOrders removes warehouse complexity from small sellers' daily workflow. It turns order processing into a simple visual pipeline with obvious next steps, minimal decisions, and drastically reduced support dependency.\n\nInstead of forcing small sellers into enterprise processes, we built a workflow that matches how they actually operate: one order at a time, moving forward until it's shipped.\n\n**Kanban wasn't a UI preference—it was the correct mental model for this audience.**",
        images: [],
       
        layout: "split" as const,
      },
    ],
  },
  {
    id: 5,
    title: "Vikassy — Digitising day-to-day operations for a small garment business",
    subtitle: "Client: Varahi Export | My Role: Product Designer & Product Owner | Industry: Garment Manufacturing | Platform: Web Application",
    featuredImage: vikassyImage,
    liveLink: "https://vikassy-billing-software-sdp8.vercel.app/",
    caseSections: [
      {
        category: "Overview",
        subtitle: "Technology & AI-Assisted Development",
        content:
          "Vikassy was not only designed in Figma — I also took the product from design into a working web application using AI-assisted development.\n\nBuilt with: React, TypeScript, Tailwind CSS, Convex and Chart.js.\n\n### AI-assisted / Vibe Coding\nI developed the working product with the help of **Antigravity**, using an AI-assisted development workflow to translate product requirements, UX decisions, and interface designs into functional code.\n\nRather than treating AI as a replacement for product or design thinking, I used it as a development accelerator — defining the product requirements and workflows myself, guiding implementation, reviewing the generated code, debugging issues, and iterating on the product.\n\nThis project demonstrates my ability to move beyond design files and **rapidly turn product ideas into functional software using modern AI-assisted development workflows.**",
        images: [],
        layout: "single" as const,
      },
      {
        category: "Problem",
        subtitle: "Small businesses are still running critical operations manually",
        content:
          "Varahi Export is a small garment business in Tirupur, managed directly by the business owner without dedicated accounts, HR, or operations teams.\n\nBilling and accounting are handled through tools such as Tally, while many day-to-day activities still depend on **manual records, scattered information, and the owner's memory**.\n\nThis creates a fragmented workflow:\n• **Client information** → manual records\n• **Job tracking** → manual records\n• **Expenses** → manual tracking\n• **Workforce information** → manual tracking\n• **Billing** → separate accounting software\n\n### The opportunity\n> **How might we give a small garment-business owner one simple place to understand and manage day-to-day operations without introducing the complexity of a traditional ERP?**",
        images: [],
        layout: "single" as const,
      },
      {
        category: "How We Found It",
        subtitle: "The problem wasn't a lack of software. It was fragmented information.",
        content:
          `Because Varahi Export is my father's business, I had direct exposure to how day-to-day management happened.\n\nI observed that the owner had to personally coordinate multiple areas of the business while relying on different methods for recording information.\n\n![The Reality We Observed](${vikassyDiscoveryImage})\n\n### Key insight\n> **The problem wasn't “we need more features.” It was “we need less fragmentation.”**`,
        images: [],
        layout: "single" as const,
      },
      {
        category: "Design Exploration",
        subtitle: "Exploring Multiple Approaches",
        content:
          `Before moving into the final UI, I explored different product directions based on the actual business context.\n\n![Design Exploration](${vikassyExplorationImage})\n\n### Why I chose it\nIt creates a balance between:\n**Manual processes** ➔ **Enterprise ERP complexity**\n\nVikassy sits in the middle:\n> **Simple enough for a small business, structured enough to reduce operational fragmentation.**`,
        images: [],
        layout: "single" as const,
      },
      {
        category: "Solution",
        subtitle: "A lightweight business operations platform",
        content:
          "The final product brings the most important operational information into one place.\n\n### Sales & Billing\n**Clients ➔ Invoice**\nManage customer information and billing without switching between different records.\n\n### Operations\n**Jobs**\nTrack active business jobs and understand what work is currently happening.\n\n### Workforce\n**Employees / workers**\nMaintain basic workforce information without turning the product into a complex HR system.\n\n### Finance\n**Capital & Investment ➔ Factory Expenses & Bills**\nGive the owner visibility into business spending and capital.",
        images: [],
        layout: "single" as const,
      },
      {
        category: "Architecture",
        subtitle: "Information Architecture & Final Product Structure",
        content:
          `The final IA reflects the actual business rather than an enterprise software template:\n\n![Vikassy Navigation Structure](${vikassyArchitectureImage})\n\n### Why this structure?\nEach section represents a distinct responsibility:\n• **Sales & Billing** → money earned\n• **Operations** → work being done\n• **Workforce** → people involved\n• **Finance** → money going out / capital\n• **Dashboard** → overall business visibility`,
        images: [],
        layout: "single" as const,
      },
      {
        category: "User Experience",
        subtitle: "Designing for the Real User & Contract Workforce",
        content:
          "The primary user isn't a Finance Manager, HR Manager or Operations Director. It's closer to:\n> **A business owner who manages multiple responsibilities personally.**\n\nThat changes the UX significantly. Every screen needs to answer:\n• **Can I understand this quickly?**\n• **Can I complete this without training?**\n• **Does this save me from maintaining another manual record?**\n\nThe product is intentionally designed to support a lean business rather than force the business to behave like a large enterprise.\n\n### Contract Workforce\nVarahi Export does not operate with a large permanent employee structure. Contract workers are brought in based on business requirements.\n\nBecause of that, I avoided positioning Vikassy as a traditional enterprise **HR Management System**.\n\nInstead, the focus is **Workforce Management** — helping the owner maintain the information needed to coordinate the people involved in the business without introducing unnecessary HR processes.",
        images: [],
        layout: "single" as const,
      },
      {
        category: "Prioritization",
        subtitle: "What I Intentionally Did Not Prioritize",
        content:
          `![What I Prioritized vs What I Didn't](${vikassyPrioritizationImage})\n\nThe priority is:\n> **Reliable business operations first. Intelligence later.**`,
        images: [],
        layout: "single" as const,
      },
      {
        category: "Conclusion",
        subtitle: "Digitise what matters, not everything.",
        content:
          "Vikassy evolved from a billing tool into a **lightweight business operations platform** designed around the realities of a small garment business.\n\nI designed, implemented, and **validated the core workflows through user testing**, focusing on simplicity rather than enterprise-level complexity.\n\nThe product is currently in the **early implementation stage** and is not yet used in production. **Convex** was used for development and testing, with a more scalable database and backend planned for the next phase.\n\nSince there is no production usage yet, I have intentionally not included business-impact metrics.\n\n> **The goal wasn't to build a bigger ERP. It was to build a simpler one that fits how a small business actually works.**",
        images: [],
        layout: "single" as const,
      },
    ],
  },
];

export const getProjectById = (id: number): ProjectData | undefined => {
  return projects.find((project) => project.id === id);
};
