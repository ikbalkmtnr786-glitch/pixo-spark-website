import type { Metadata } from "next";
import CTASection from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "AI Content Creation | Pixo Spark",
  description: "Strategic content powered by AI — blogs, captions, scripts, email sequences, and ad copy that engages and converts.",
};

export default function AIContentPage() {
  return (
    <div className="pt-28 pb-0">
      <div className="container-inner mb-16">
        <div className="eyebrow">AI Content Creation</div>
        <h1 className="section-title text-[var(--color-text)] mb-4">
          AI-Powered Content That{" "}
          <span className="gradient-text">Engages & Converts</span>
        </h1>
        <p className="text-[var(--color-text-muted)] max-w-2xl mb-12">
          High-quality blogs, social media captions, ad copy, email sequences, and video scripts — produced faster and more affordably using AI, reviewed by our human creative team.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "✍️", title: "Blog Writing", desc: "SEO-optimized blog posts that rank on Google and establish your brand as an authority." },
            { icon: "📱", title: "Social Media Captions", desc: "Engaging captions for Instagram, Facebook, and LinkedIn that drive likes, comments, and shares." },
            { icon: "🎬", title: "Video Scripts", desc: "Compelling scripts for YouTube, Reels, TikTok, and ad videos that keep viewers watching." },
            { icon: "📧", title: "Email Sequences", desc: "Automated email campaigns that nurture leads and convert subscribers into customers." },
            { icon: "🎯", title: "Ad Copywriting", desc: "High-converting headlines and body copy for Meta Ads, Google Ads, and landing pages." },
            { icon: "🤖", title: "AI + Human Quality", desc: "All AI content is reviewed and refined by our team for brand voice, accuracy, and quality." },
          ].map((item) => (
            <div key={item.title} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 card-hover">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-poppins font-bold text-base text-[var(--color-text)] mb-2">{item.title}</h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <CTASection />
    </div>
  );
}
