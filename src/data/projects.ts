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
        category: "Introduction",
        subtitle: "merged channels",
        content:
          "Our platform integrated multiple marketplaces. We offered two separate modules:\n\n**Sales Channel** — connect accounts, sync catalogs, manage listings.\n\n**Market Monitoring** — crawl external marketplaces for competitor & pricing data.\n\nInternally, they were two different systems. To users, they looked like the same thing.\n\nThis case study details how we merged these two modules into a single, unified Channel Hub, resulting in a **55% faster setup time**, a dramatic reduction in support tickets, and a product that finally matched our users' mental models.",
        images: [],
        layout: "single" as const,
      },
      {
        category: "Problem Statement",
        subtitle: "Critical Onboarding Failure",
        content:
          "To understand why onboarding was failing, we analyzed user behavior across three distinct data sources. What we found was a massive disconnect between user expectations and our system design: users successfully connected their channels, but expected competitor insights to appear automatically. When the data wasn't visible, they abandoned the platform, creating a flood of support tickets and a significant drop in user trust.",
        images: [],
        layout: "single" as const,
      },
      {
        category: "Core Issues",
        subtitle: "The User's Mental Model Mismatch",
        content:
          'They saw Amazon in Sales Channel, clicked Connect, and assumed they\'d get pricing data.\n\nThey saw the same marketplaces in Market Monitoring, thought it was redundant or premium-only.\n\nThey didn\'t understand the difference between "connecting a channel" vs. "enabling data crawling."\n\nTheir expectation was simple:\n**If I connect Amazon, I should get everything Amazon-related in one place.**\n\nBut our product forced them to split actions across two tabs, two vocabularies, two flows. That confusion slowed adoption and triggered support tickets.',
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
          "Before redesigning the architecture, we explored multiple approaches.\n\n**Option 1 — Rename Market Monitoring**\n\nWe tested clearer terminology and revised labels.\n\n**Rejected**\n\nThe problem wasn't wording. Users still perceived both modules as representing the same marketplace.\n\n**Option 2 — Add Tooltips & Documentation**\n\nWe explored onboarding guides and contextual education.\n\n**Rejected**\n\nUsers ignored explanations because they believed they already understood the workflow.\n\n**Option 3 — Guided Setup Wizard**\n\nWe considered forcing users through both modules sequentially.\n\n**Rejected**\n\nThis improved discovery but preserved the underlying architectural complexity.\n\n**Option 4 — Unified Channel Hub**\n\nInstead of teaching users about internal systems, we reorganized the experience around their mental model.\n\nMarketplace first.\n\nCapabilities second.\n\n**Selected Solution**\n\nThis approach eliminated the distinction users never cared about in the first place.",
        images: [],
        layout: "single" as const,
      },
      {
        category: "Ideation",
        subtitle: "How We Brainstormed New Ideas",
        content:
          'We didn\'t try to "improve labels" first — that would be a band-aid over a structural wound. Instead, we asked these questions:\n\n**Why do users perceive them as one?**\nBecause both represent marketplace capability.\n\n**At what moment does context matter?**\nDuring channel setup. A user wants: What can I do with this marketplace? Not "Where is the right module for Task A vs Task B?"\n\n**What options does the user actually need?**\nSell, Monitor, Or both.\n\nSo we shifted away from Two modules to: **One Channel Hub that exposes multiple capabilities.**\n\nWe dumped the idea of educating users through documentation or tooltips. Instead we redesigned the structure so that misunderstanding never happens.',
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
          "Following release, we compared performance across four weeks before and four weeks after launch.\n\n**55% Faster Setup**\n\nAverage time-to-first-insight decreased from:\n**14 minutes → 6.3 minutes**\n**3.1× Increase in Monitoring Adoption**\n\nActivation rate increased from: **18% → 57%**\n\nMore users successfully reached the platform's core value proposition.\n\n**63% Reduction in Support Tickets**\n\nQuestions related to onboarding confusion dropped significantly.\n\nSupport conversations shifted from:\n\n**\"Where is competitor data?\"** to **\"How can I improve pricing strategy?\"**\n\nThis indicated that users were no longer struggling with navigation and could focus on business outcomes.",
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
        content:
          "Users struggled to efficiently manage pricing for large product catalogs. Sellers with hundreds of items had to adjust prices one product at a time, which was slow, error-prone, and led to inconsistent pricing.\n\nWhile a bulk spreadsheet upload feature existed, it created new friction—every price change required users to download, edit, and re-upload files, breaking their workflow and adding extra steps instead of simplifying the process.",
        images: [],
        layout: "single" as const,
      },
      {
        category: "How We Found It",
        subtitle: "Data-Driven Discovery",
        content:
          'We identified this through:\n\n**User feedback** directly criticizing the spreadsheet workflow: "It feels like double work."\n\n**Analytics** showing low adoption of the bulk upload feature—only 15% of eligible users used it monthly\n\n**Session recordings** revealing users would start the upload process, then abandon it and revert to manual edits\n\n**Support tickets** asking: "Can\'t I just adjust prices here without downloading a file?"',
        images: [],
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
        category: "Ideation",
        subtitle: "Exploring Different Approaches",
        content:
          "**Brainstorming paths we considered:**\n\n• **Single long form** – too overwhelming, users would get lost\n• **Collapsible sections** – better, but still dense\n• **Wizard-style multi-step** – too many clicks, breaks flow\n• **Tabs by category** – the winner: logical grouping without hidden steps\n\n**Key insight:** Users wanted to see, select, and adjust products in the same place—no context switching, no file handling, no re-uploading. But they needed clarity amidst complexity.",
        images: [],
        layout: "single" as const,
      },
      {
        category: "Solution",
        subtitle: "In-Platform Bulk Editor",
        content:
          "We designed an in-platform bulk editor that eliminated the need for spreadsheets:\n\n**Selection Inside the List**\n• Users select products directly in the dashboard\n• No download required—all products are already loaded\n• Visual feedback shows what's selected\n\n**Three-Tab Editor Panel**\n• Product Status: Enable/disable monitoring in one click\n• Product Attribute: Update costs, commissions, and base prices\n• Product Strategy: Set min/max prices and competitor rules\n\n**Live Editing & Immediate Apply**\n• Changes happen in real time\n• One 'Apply' button updates all selected items instantly\n• No upload step, no file validation, no waiting",
        images: [],
        layout: "single" as const,
      },
      {
        category: "Conclusion",
        subtitle: "Measurable Impact",
        content:
          "By moving bulk actions into the platform, we reduced the time to adjust 200+ products from ~20 minutes (with spreadsheet download/edit/upload) to **under 2 minutes**.\n\nUser adoption of bulk pricing actions increased from **15% to 68%** post-launch.\n\nThe design succeeded because it removed the file middleman and let users work directly with their products, in context, with immediate feedback—turning a fragmented workflow into a seamless one.\n\n**This shows that sometimes the best solution isn't adding another tool, but integrating functionality where users already are.**",
        images: [],
        figmaEmbed: "https://embed.figma.com/design/GgHcLuNY0U2JJAFCe1JWYM/Bulk-Action?node-id=0-1&embed-host=share",
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
