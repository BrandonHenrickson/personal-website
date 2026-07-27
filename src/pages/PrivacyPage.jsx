import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import { ShieldCheck } from 'lucide-react';

const h2 = 'font-display font-bold text-2xl text-ink mt-10 mb-3 leading-tight';
const p = 'text-inkSoft leading-[1.8] text-pretty my-4';

const PrivacyPage = () => (
  <>
    <Helmet>
      <title>Privacy Policy — Brandon Henrickson</title>
      <meta name="robots" content="noindex" />
    </Helmet>

    <div className="min-h-screen bg-canvas">
      <Navigation />

      <main id="main" tabIndex={-1}>
        {/* Banner */}
        <div className="w-full bg-emerald pt-16">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
            <ShieldCheck size={20} className="text-white" strokeWidth={2} />
            <h1 className="font-display font-bold text-xl tracking-wide text-white">
              Privacy Policy
            </h1>
          </div>
        </div>

        {/* Body */}
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
          <p className="font-mono text-xs uppercase tracking-widest text-inkMuted mb-8">
            Last updated — July 2026
          </p>

          <p className={p}>
            This policy explains what information greatbrandino.com collects and
            how it&apos;s used. This is a personal portfolio site — it does not
            sell products, run user accounts, or share your information for
            advertising.
          </p>

          <h2 className={h2}>What&apos;s collected</h2>
          <p className={p}>Two things, both minimal:</p>
          <ul className="my-4 space-y-3">
            <li className="flex gap-3 text-inkSoft leading-[1.8] text-pretty">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
              <span>
                <strong className="text-ink font-semibold">Anonymous analytics.</strong>{' '}
                I use Cloudflare Web Analytics to see basic, aggregate traffic —
                page views, referrers, and general location. It uses no cookies
                and does not build a profile of you or track you across other
                sites.
              </span>
            </li>
            <li className="flex gap-3 text-inkSoft leading-[1.8] text-pretty">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
              <span>
                <strong className="text-ink font-semibold">Contact form.</strong>{' '}
                If you use the contact form, the name, email, and message you
                enter are emailed to me through Web3Forms so I can reply. That is
                the only reason it&apos;s collected.
              </span>
            </li>
          </ul>

          <h2 className={h2}>How it&apos;s used</h2>
          <p className={p}>
            Analytics data helps me understand what&apos;s useful on the site.
            Contact submissions are used only to respond to you. I don&apos;t
            sell, rent, or share your information for marketing.
          </p>

          <h2 className={h2}>Service providers</h2>
          <p className={p}>
            The site relies on a few third parties to operate: Vercel (hosting),
            Cloudflare (analytics), and Web3Forms (contact-form delivery). Each
            only handles the data needed for its function.
          </p>

          <h2 className={h2}>Your choices</h2>
          <p className={p}>
            You can browse the site without submitting anything. If you&apos;ve
            sent a message and want your information deleted, just email me and
            I&apos;ll remove it.
          </p>

          <h2 className={h2}>Contact</h2>
          <p className={p}>
            Questions about this policy? Email{' '}
            <a
              href="mailto:b.henrickson17@gmail.com"
              className="text-emerald hover:text-emeraldHover underline underline-offset-2"
            >
              b.henrickson17@gmail.com
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  </>
);

export default PrivacyPage;
