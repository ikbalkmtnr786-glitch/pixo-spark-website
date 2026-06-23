import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, ArrowLeft, ArrowRight, User, Hash, Sparkles } from 'lucide-react';
import { BlogPost } from '../types';

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  // 4 SEO Optimized Articles
  const articles: BlogPost[] = [
    {
      id: 'leads-under-50',
      title: 'How to Get Leads Under ₹50 Using Meta Ads',
      date: 'June 18, 2026',
      readTime: '5 min read',
      category: 'Meta Ads',
      excerpt: 'Staged budget allocation models and ad-copy adjustments to bypass high auction prices and capture high-intent visual submissions.',
      content: `### Deploying the Low-Cost Lead Generation Funnel

Most digital agencies complain that Cost Per Lead (CPL) is skyrocketing. But by structuring clean ad funnels, we recently validated leads at a remarkable **₹30 CPL** for our validation campaigns. Here is the exact blueprint we used to bypass inflated bidding auction prices:

#### 1. Instant Lead Forms over Landing Pages
When you redirect a mobile user to an external slow loading landing page, you lose up to 60% of traffic due to mobile rendering lag. Meta Instant Forms keep the user inside the Facebook/Instagram sandbox, meaning zero wait-time. 

#### 2. The Power of Direct WhatsApp Routing
For local service businesses or NRI-focused offerings, letting clients instantly transition into a WhatsApp chat triggers immediate conversion. High-intent customers value direct messages over waiting for an email.

#### 3. Strategic Micro-Budgets
Instead of setting huge budgets on day one, launch multiple ad sets with tiny trial budgets (such as **₹150** per target group). This allows Meta’s learning algorithms to find pockets of low-competition auctions before you scale.

#### 4. Friction-Based Questionnaires
To filter out passive clickers, insert at least one key custom question inside the Instant Form (e.g., "What is your monthly budget?"). This decreases duplicate errors and boosts real conversion values.`,
      seoKeywords: ['Meta Ads Lead Gen', 'Low CPL Facebook Ads', 'India Digital Marketing', 'WhatsApp Leads']
    },
    {
      id: 'ai-tools-2025',
      title: 'AI Tools Every Digital Marketer Needs in 2025',
      date: 'May 28, 2026',
      readTime: '6 min read',
      category: 'AI Tools',
      excerpt: 'Harness advanced multi-modal systems to produce high-end ad-copy variants and visual collateral variants inside seconds.',
      content: `### The Next Generation of Generative Campaign Engines

The marketing landscape has shifted from passive generation to calculated machine-assisted structure. Here are the core tools our specialists at Pixo Spark leverage to maintain elite execution speed:

#### 1. Multi-Modal Vision Frameworks
Tools like Midjourney and detailed visual generators allow agencies to build high-end ad creative concepts. Gone are the days of sterile stock vectors—we render distinct visual assets styled to the exact emotional trigger of each target campaign.

#### 2. Specialized Copywriting Agents
Generic ChatGPT copy sounds robotic. By training custom system models with localized brand datasets, we produce hyper-polished, conversational sales pitches and caption guides instantly.

#### 3. Automated Video Hook Trimmers
Retaining viewers on reels requires placing high-impact visual hooks inside the first 2 seconds. Video automation cutters identify high-retention fractions and isolate reels automatically, adding styled subtitles.

#### 4. Algorithmic Competitor Audits
AI-based scrapers parse successful competitor ads, mapping hook structures and pinpointing exactly where consumer attention peaks. This allows us to map visual strategy layouts that convert instantly.`,
      seoKeywords: ['AI Marketing Tools', 'AI Content Strategy', 'Copywriting Models', 'Vite Responsive Ads']
    },
    {
      id: 'instagram-growth',
      title: 'Instagram Growth Strategy That Actually Works',
      date: 'April 14, 2026',
      readTime: '4 min read',
      category: 'Social Media',
      excerpt: 'No follow-for-follow tricks. How we executed an organic engine that pushed accounts from 0 to 171 followers and reached 872 profiles.',
      content: `### Engineering Genuine Social Engagement From Scratch

Vanity followers mean nothing if they aren’t buying. During our recent organic brand trial, we mapped out a systematic blueprint that expanded a client profile from **0 to 171 active followers** and generated **871+ target account reaches** in weeks.

Here is the exact growth routine you should adapt:

#### 1. Micro-Niche Visual Style Guides
Your grid is your digital menu card. Apply a strict dark premium background aesthetic with distinct accent colors (like brand purples and oranges). High-contrast layouts signal elite corporate focus.

#### 2. The Hook-Problem-Solution Framework
Every Reel must address a direct consumer friction point within 3 seconds. For example: *"Why your Facebook ads are failing (Hook) -> Target overlaps are bleeding budget (Problem) -> Deploy local segmentation (Solution)."*

#### 3. Intentional Profile Links
Every post must have a clear direction pathway. Instead of shouting "Link in bio!", provide an incentive-based transition: *"DM us SPARK to receive a free audit doc instantly."* This flags positive algorithmic activity on Meta's server.

#### 4. Asynchronous Group Interaction
Do not expect to receive engagement if you do not offer it. Spend 15 minutes daily interacting with high-authority profiles in your target industry sectors. Offer valuable, structured comments instead of simple generic phrases.`,
      seoKeywords: ['Instagram Organic Growth', 'Social Engagement Blueprint', 'Reel Hook Structures', 'Kerala Creators']
    },
    {
      id: 'facebook-ads-conversions',
      title: 'Why Your Facebook Ads Are Not Converting',
      date: 'March 02, 2026',
      readTime: '5 min read',
      category: 'Meta Ads',
      excerpt: 'The critical target pitfalls, tracking errors, and creative fatigue elements that drain cash without generating leads.',
      content: `### Diagnosing Campaign Performance Drops

If your Meta ads dashboard shows high click ratios but zero incoming leads, your campaign is suffering from conversion leakage. Let’s diagnose the three most common reasons why budgets bleed:

#### 1. Disjointed Creative Context
If your ad visual promises a premium "Free Custom Audit," but clicking the ad brings the customer to a landing page demanding high signup fees, they will immediately bounce. The transition path must feel seamless.

#### 2. Extreme Audience Overlap
If you build broad ad target parameters and target the same generic locations, your ad sets end up bidding against each other in the auctions. This inflates CPL ratios without reaching fresh eyeballs.

#### 3. Ignoring the Mobile Device Window
Over 94% of Meta advertising views happen on mobile devices. If your promotional visual has small, low-contrast text, or if your website takes over 3 seconds to load on mobile data channels, you are actively throwing away conversions.

#### 4. Stale Ad Creatives
Bidding algorithms penalize ads with stale visuals. Swap your graphic creatives and hook scripts at least once every 14 days to keep relevancy scores high and auction costs minimized.`,
      seoKeywords: ['Facebook Ads Troubleshooting', 'Conversion Optimization', 'Ad Creative Fatigue', 'Low ROI Fixes']
    }
  ];

  return (
    <div id="blog-view" className="relative w-full pt-28 pb-20">
      {/* Background Lights */}
      <div className="absolute top-10 left-10 -z-10 h-96 w-96 rounded-full bg-brand-purple/5 blur-[120px]" />
      <div className="absolute bottom-10 right-10 -z-10 h-96 w-96 rounded-full bg-brand-orange/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {!selectedArticle ? (
            /* BLOG LIST VIEW */
            <motion.div
              key="list-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-12"
            >
              {/* Heading */}
              <div className="text-center space-y-4">
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-purple">PIXO SPARK KNOWLEDGE HANGER</span>
                <h1 className="font-syne text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                  AI-Powered Marketing Insights
                </h1>
                <p className="mx-auto max-w-2xl text-sm text-gray-400">
                  Calculated ad guidelines, search engine strategies, and organic social formulas written directly by our specialists.
                </p>
              </div>

              {/* Grid of Articles */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2" id="blog-articles-grid">
                {articles.map((article) => (
                  <article
                    key={article.id}
                    id={`blog-card-${article.id}`}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-900 bg-[#0d0d18]/50 p-6 md:p-8 hover:border-brand-purple/30 transition-all shadow-xl"
                  >
                    <div>
                      {/* Date & Category */}
                      <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-brand-orange" />
                          {article.date}
                        </span>
                        <span>•</span>
                        <span className="rounded bg-brand-purple/10 px-2 py-0.5 text-brand-purple text-[10px] font-bold">
                          {article.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-syne text-lg font-bold text-white group-hover:text-brand-orange transition-colors duration-200">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="mt-3 text-xs text-gray-400 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-gray-900/60 pt-4">
                      <span className="text-[10px] font-mono text-gray-500">{article.readTime}</span>
                      <button
                        id={`read-article-btn-${article.id}`}
                        onClick={() => {
                          setSelectedArticle(article);
                          window.scrollTo({ top: 0, behavior: 'instant' });
                        }}
                        className="inline-flex items-center gap-1 text-xs font-bold text-brand-purple group-hover:text-white transition-colors"
                      >
                        <span>Read Blueprint</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          ) : (
            /* DETAILED SINGLE ARTICLE READ VIEW */
            <motion.div
              key="detail-view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-3xl mx-auto space-y-8"
              id={`blog-detailed-${selectedArticle.id}`}
            >
              {/* Back Nav */}
              <button
                id="blog-back-to-list"
                onClick={() => {
                  setSelectedArticle(null);
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-800 bg-black/40 hover:bg-black/80 px-4 py-2 text-xs font-bold text-gray-300 hover:text-white transition"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Knowledge List</span>
              </button>

              {/* Cover Headers */}
              <div className="space-y-4 border-b border-gray-900 pb-6">
                <span className="rounded-full bg-brand-orange/10 px-3 py-1 text-[10px] font-mono font-bold text-brand-orange uppercase">
                  {selectedArticle.category}
                </span>
                
                <h1 className="font-syne text-3xl font-extrabold text-white md:text-4xl leading-tight">
                  {selectedArticle.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-500 pt-2">
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5 text-brand-purple" />
                    By Ikbal KM (Specialist)
                  </span>
                  <span>•</span>
                  <span>Published {selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
              </div>

              {/* Render Markdowns visually using tailored elements */}
              <div className="space-y-6 text-sm text-gray-300 leading-relaxed font-sans">
                {selectedArticle.content.split('\n\n').map((paragraph, pIdx) => {
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={pIdx} className="font-syne text-xl font-bold text-white pt-4">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('#### ')) {
                    return (
                      <h4 key={pIdx} className="font-syne text-base font-semibold text-brand-orange pt-2">
                        {paragraph.replace('#### ', '')}
                      </h4>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    return (
                      <ul key={pIdx} className="list-disc pl-5 space-y-2 text-gray-300">
                        {paragraph.split('\n').map((li, liIdx) => (
                          <li key={liIdx}>{li.replace('- ', '')}</li>
                        ))}
                      </ul>
                    );
                  }

                  // Handle random midtext bolds `**text**` and code templates `**₹30 CPL**`
                  const formattedText = paragraph.split('**').map((chunk, cIdx) => {
                    if (cIdx % 2 === 1) {
                      return <strong key={cIdx} className="text-white font-semibold bg-brand-purple/10 px-1.5 py-0.5 rounded text-xs">{chunk}</strong>;
                    }
                    return chunk;
                  });

                  return <p key={pIdx} className="leading-relaxed text-gray-300">{formattedText}</p>;
                })}
              </div>

              {/* SEO Tags Container */}
              <div className="border-t border-gray-900 pt-6 space-y-3">
                <h4 className="font-mono text-xs text-gray-500 uppercase tracking-wider flex items-center gap-1">
                  <Hash className="h-3.5 w-3.5 text-brand-purple" />
                  SEO Optimizations Applied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedArticle.seoKeywords.map((tag, tagIdx) => (
                    <span key={tagIdx} className="rounded-lg border border-gray-900 bg-gray-950/60 px-2.5 py-1 text-[10px] font-mono text-gray-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Consultation Invitation Box */}
              <div className="rounded-2xl bg-gradient-to-r from-brand-purple/10 to-brand-orange/10 p-6 text-center space-y-4">
                <Sparkles className="h-6 w-6 text-brand-orange mx-auto animate-pulse" />
                <h4 className="font-syne text-base font-bold text-white">Apply These Insights to Your Brand Layout</h4>
                <p className="text-xs text-gray-400 max-w-md mx-auto">
                  Don&apos;t implement blindly. Request our founder Ikbal KM to configure this setup customized exactly to your business parameters.
                </p>
                <button
                  id="blog-detail-modal-cta"
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                  className="rounded-xl bg-gradient-to-r from-brand-purple to-brand-orange py-2.5 px-6 text-xs font-bold text-white"
                >
                  Request Fast Consultation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
