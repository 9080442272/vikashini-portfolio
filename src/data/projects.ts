import salesChannelImage from "@/assets/projects/sales-channel.png";
import section12Image from "@/assets/projects/section-1-2.png";
import figjamNotesImage from "@/assets/projects/figjam-notes.png";
import productAttributes from "@/assets/projects/product-attributes.png";
import productList from "@/assets/projects/product-list.png";
import productListExpanded from "@/assets/projects/product-list-expanded.png";
import performanceAnalysis from "@/assets/projects/performance-analysis.png";
import performanceSettings from "@/assets/projects/performance-settings.png";
import myOrderImage from "@/assets/projects/myorder.png";
import myWebPOSThumbnail from "@/assets/projects/mywebpos-thumbnail.png";
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

export interface ProjectData {
  id: number;
  title: string;
  subtitle: string;
  featuredImage: string;
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
        layout: "single" as const,
      },
      {
        category: "Impact",
        subtitle: "Measurable Results",
        content:
          "Following release, we measured adoption and workflow efficiency.\n\n⚡ **10× Faster Bulk Updates**\nUpdating more than 200 products decreased from approximately:\n**20 Minutes ➔ Under 2 Minutes**\n\n📈 **4.5× Increase in Feature Adoption**\nBulk pricing usage increased from:\n**15% ➔ 68%**\n\n💬 **Reduced Operational Friction**\nMerchants could complete pricing tasks without leaving the platform, resulting in:\n• Faster catalog management\n• Fewer manual edits\n• More consistent pricing updates\n• Reduced dependency on support",
        images: [],
        figmaEmbed: "https://embed.figma.com/design/GgHcLuNY0U2JJAFCe1JWYM/Bulk-Action?node-id=0-1&embed-host=share",
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
        content:
          'We didn\'t have to look hard—users were practically begging for this:\n\n**Direct User Feedback (100+ interviews/surveys):**\n• "Your competitor data is too basic—I need to know if they\'re actually credible."\n• "I use 3 other tools just to get what I should get from you."\n• "Show me trends, not just snapshots."\n\n**Support Tickets Painting the Picture:**\n• "Can you add seller ratings next to prices?"\n• "How do I see if a competitor is consistently cheaper?"\n• "Your data feels like half the story."',
        images: [],
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
          '**Approach 1: The "Everything Dashboard"**\nShow all data at once\nProblem: Information overload—users would drown in data\n\n**Approach 2: The "Drill-Down Only" Model**\nKeep simple table, click for details\nProblem: Too many clicks for routine analysis\n\n**Approach 3: The "Separate Advanced View"**\nSimple mode vs. advanced mode\nProblem: Creates two different user experiences and hides value\n\n**Approach 4: The "Layered Intelligence" Model (Our Winner)**\nProgressive disclosure within familiar interface\nWhy it worked: Preserved scanning efficiency while making depth accessible exactly when needed\n\n**Key Insight from User Testing:**\n"I need to scan quickly most of the time, but when I see something interesting, I need to go deep immediately—without leaving the page or opening new tools."',
        images: [],
        layout: "single" as const,
      },
      {
        category: "Design Pivot",
        subtitle: "From 'Show Everything' to 'Show What Matters'",
        content:
          'We realized our fundamental mistake: We designed for data completeness instead of decision support.\n\n**Key Insight from User Interviews:**\n"I don\'t need to see 500 metrics. I need to know: Are they a threat? Can I beat them? Should I worry?"\n\n**The Three Questions Every User Really Had:**\n1. "Should I care about this competitor?" (Credibility assessment)\n2. "Are they winning or losing?" (Performance trend)\n3. "What should I do about it?" (Actionable recommendation)',
        images: [
          {
            src: productListExpanded,
            alt: "Brainstorming and ideation",
          },
          {
            src: performanceAnalysis,
            alt: "Brainstorming and ideation",
          },
          {
            src: performanceSettings,
            alt: "Brainstorming and ideation",
          },
        ],
        layout: "single" as const,
      },
      {
        category: "Conclusion",
        subtitle: "Transformation Results",
        content:
          '**Before → After Impact:**\n• Time to Insight: 5+ minutes → 15 seconds\n• Decision Confidence: 42% → 89%\n• Feature Adoption: 22% → 78%\n• User Satisfaction: 2.8/5 → 4.6/5\n\n**Key Metrics Improvement:**\n• Daily Active Users: +210%\n• Actions Taken Per Session: +340%\n• Support Tickets: -65%\n• Premium Feature Upsells: +45%\n\n**User Feedback That Validated the Pivot:**\n"Before, I had data. Now, I have answers."\n"Your tool went from being a reference manual to a strategic advisor."\n"I finally understand what \'competitor intelligence\' means."',
        images: [],
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
    title: "myWebPOS – Browser-Based POS for Unified Retail",
    subtitle:
      "Client: Boostmyshop APP | My Role: Product Designer | Industry: E-commerce & Retail | Platform: Web Application",
    featuredImage: myWebPOSThumbnail,
    caseSections: [
      {
        category: "Introduction",
        subtitle: "Bridging Online and In-Store Operations",
        content:
          "myWebPOS was created specifically for merchants already using BoostMyShop's myFulfillment system. These customers were managing online orders efficiently, but their in-store sales were still happening on disconnected POS tools, causing constant stock mismatches and operational gaps.\n\n**Key stakeholders and what they expected:**\n\n• **Existing myFulfillment Merchants:** wanted in-store sales to sync automatically with their fulfillment workflow—no more manual stock updates or messy reconciliations.\n\n• **Business Leadership:** wanted to strengthen BoostMyShop's ecosystem by tying retail operations directly into the fulfillment backbone, increasing retention and product stickiness.\n\n• **Support & Operations Teams:** needed fewer integration points and a single ecosystem to troubleshoot, instead of merchants plugging in random third-party POS tools.\n\n• **Product Team:** needed to build a POS that behaved like a natural extension of myFulfillment, not an independent product that duplicated inventory logic.\n\nThe shared understanding was blunt:\n**If POS didn't integrate tightly with myFulfillment, it was useless.**\n\nSo the design goal became creating a checkout system that felt like the retail front-end of myFulfillment—fast, synced, and fully tied into the same inventory and order engine.",
        images: [],
        layout: "single" as const,
      },
      {
        category: "Problem Statement",
        subtitle: "Fragmented Retail and E-commerce",
        content:
          "Small and medium merchants needed a POS that didn't operate like a separate world. They wanted real-time inventory sync, fast checkout, and a single system to handle online orders, in-store sales, pickups, and returns without manual work or switching platforms.\n\nThe problem wasn't \"we need a POS.\"\nThe real problem was **they couldn't run retail and e-commerce as one business.**",
        images: [],
        layout: "single" as const,
      },
      {
        category: "Core Issues",
        subtitle: "What Staff and Merchants Told Us",
        content:
          "From interviewing store staff, managers, and merchants, these issues repeatedly surfaced:\n\n• **Checkout took too many steps**\n• **Staff had no idea if an item was actually available**\n• **Return handling was disconnected from online orders**\n• **Order types were confusing for staff**\n• **Hardware requirements were expensive and impractical**\n\nThe biggest blocker: merchants didn't trust inventory accuracy because data lived in multiple places.",
        images: [],
        layout: "single" as const,
      },
      {
        category: "Brainstorming",
        subtitle: "Mapping Problems to Solutions",
        content:
          'We mapped problems against operational phases:\n\n• browse → checkout\n• checkout → payment\n• payment → order status\n• order → fulfillment\n• return → restock\n\n**Then prioritized based on impact vs friction:**\n\n1. Checkout speed\n2. Inventory clarity\n3. Multichannel order types\n4. Return flow\n5. Hardware independence\n\nWe dropped ideas that required major staff training or added cognitive load. The goal was "just works," not "feature rich."',
        images: [],
        layout: "single" as const,
      },
      {
        category: "Solution",
        subtitle: "A Browser-Based, Device-Agnostic POS",
        content:
          "We designed a browser-based POS that:\n\n• **Runs on any device** (tablet, desktop, laptop)\n• **Updates stock instantly** across channels\n• **Handles all order types** in one flow\n• **Simplifies returns** to a single step\n• **Supports fast barcode checkout**\n• **Keeps carts persistent**\n• **Surfaces stock info next to product**, not buried\n\nBasically: remove friction, hide complexity, automate what staff kept doing manually.\n\nThe interface adapts to context instead of asking staff to choose workflows. That's how retail should work.",
        images: [],
        layout: "single" as const,
      },
      {
        category: "Conclusion",
        subtitle: "Unified Operations, Not Another Tool",
        content:
          "myWebPOS wasn't about building another POS. It was about eliminating operational fragmentation and treating retail + e-commerce as one system. That's the actual value for small and medium merchants—not fancy UI or extra screens.\n\nAnd bluntly: most POS tools fail because they design for \"features,\" not messy real-world workflows. Our approach fixed the real problem—**business alignment, not cashier UI.**",
        images: [],
        layout: "single" as const,
      },
    ],
  },
];

export const getProjectById = (id: number): ProjectData | undefined => {
  return projects.find((project) => project.id === id);
};
