import type { Metadata } from "next";
import CTASection from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Website Development | Pixo Spark",
  description: "Custom websites that look premium, load fast, and convert visitors into customers. Built with Next.js, WordPress, or Shopify.",
};

export default function WebsiteDevelopmentPage() {
  return (
    <div className="pt-28 pb-0">
      <div className="container-inner mb-16">
        <div className="eyebrow">Website Development</div>
        <h1 className="section-title text-[var(--color-text)] mb-4">
          Premium Websites That{" "}
          <span className="gradient-text">Convert Visitors Into Customers</span>
        </h1>
        <p className="text-[var(--color-text-muted)] max-w-2xl mb-12">
          Custom websites that look stunning, load in under 2 seconds, and are built to generate leads and sales. Next.js, WordPress, or Shopify — your choice.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "⚡", title: "Lightning Fast", desc: "PageSpeed 95+ scores. Optimized for Core Web Vitals — fast loading on all devices." },
            { icon: "📱", title: "Mobile First", desc: "100% responsive design that looks perfect on phones, tablets, and desktops." },
            { icon: "🎨", title: "Premium Design", desc: "Modern, professional designs inspired by top brands — Apple, Stripe, Linear aesthetic." },
            { icon: "🔍", title: "SEO Ready", desc: "Built with proper HTML structure, schema markup, and technical SEO from day one." },
            { icon: "🛒", title: "E-commerce", desc: "Shopify and WooCommerce stores with payment integration and inventory management." },
            { icon: "🔧", title: "Easy to Manage", desc: "Simple CMS so you can update content yourself without touching any code." },
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
