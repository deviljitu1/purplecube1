import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { POLICIES, type Policy } from '../data/policies.ts';

export const PolicyPage: React.FC<{ policy: Policy; onOpenContact: () => void }> = ({ policy, onOpenContact }) => {
  useEffect(() => {
    document.title = `${policy.title} | Purple Cube`;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute('content', policy.summary);
  }, [policy]);

  return (
    <article className="mx-auto max-w-4xl px-5 sm:px-8 pt-28 sm:pt-36 pb-20">
      <a href="/" className="inline-flex min-h-11 items-center gap-2 text-sm text-[#D9B4FA] hover:text-white"><ArrowLeft size={16} /> Back to Purple Cube</a>
      <header className="mt-5 border-b border-white/10 pb-8">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">{policy.title}</h1>
        <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-[#D7E2EA]/75">{policy.summary}</p>
        <p className="mt-4 text-xs text-[#D7E2EA]/50">Last updated: 24 October 2026</p>
      </header>
      <nav aria-label="Policy pages" className="my-7 flex flex-wrap gap-2">
        {POLICIES.map((item) => <a key={item.path} href={item.path} aria-current={item.path === policy.path ? 'page' : undefined} className={`inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-xs sm:text-sm ${item.path === policy.path ? 'border-[#9D4EDD] bg-[#9D4EDD]/20 text-white' : 'border-white/10 text-[#D7E2EA]/75 hover:text-white'}`}>{item.title}</a>)}
      </nav>
      <div className="space-y-8 sm:space-y-10">
        {policy.sections.map((section, index) => <section key={section.title}>
          <h2 className="text-lg sm:text-xl font-semibold text-white"><span className="mr-2 text-[#C77DFF]">{index + 1}.</span>{section.title}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-3 text-sm leading-7 text-[#D7E2EA]/75">{paragraph}</p>)}
        </section>)}
      </div>
      <div className="mt-10 rounded-2xl border border-[#9D4EDD]/30 bg-[#201329] p-5 sm:p-6">
        <h2 className="font-semibold">Need help with your order?</h2>
        <p className="mt-2 text-sm leading-relaxed text-[#D7E2EA]/75">Contact the studio with your order reference and question.</p>
        <button type="button" onClick={onOpenContact} className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#9D4EDD] px-5 py-3 text-sm font-medium hover:bg-[#AD63E8]">Contact the studio <ArrowRight size={16} /></button>
      </div>
    </article>
  );
};
