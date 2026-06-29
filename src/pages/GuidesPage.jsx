import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { BookOpen, ArrowLeft, ArrowRight, Clock } from 'lucide-react';

/*
 * Guides content lives in this array. To add or edit a guide, copy one of
 * the objects below. Each `content` item is a block:
 *   { type: 'p',    text: '...' }            paragraph
 *   { type: 'h2',   text: '...' }            section heading
 *   { type: 'ul',   items: ['...', '...'] }  bullet list
 *   { type: 'code', text: '...' }            dark code block
 */
const guides = [
  {
    slug: 'automating-bookkeeping-with-python',
    title: 'Automating a Business’s Bookkeeping with Python',
    date: 'June 2026',
    readTime: '6 min read',
    tags: ['Python', 'Automation', 'Excel'],
    excerpt:
      'A local business was hand-typing every receipt into a spreadsheet. Here is how I replaced that with a script that reads the PDF and fills the ledger itself.',
    content: [
      {
        type: 'p',
        text: 'A local business I worked with had a simple but expensive problem: every receipt was being typed into an Excel ledger by hand. It was slow, it was error-prone, and it scaled badly — more sales meant more late nights. The goal was to remove the typing entirely without forcing anyone to learn a new tool.',
      },
      { type: 'h2', text: 'The constraint that shaped everything' },
      {
        type: 'p',
        text: 'The owner already lived in Excel and trusted it. So the rule was: don’t replace the spreadsheet, feed it. The workflow had to slot into what people already did. We landed on something almost invisible — drop a receipt PDF into a watched folder, and the ledger updates on its own.',
      },
      { type: 'h2', text: 'How it works' },
      {
        type: 'p',
        text: 'A Python script reads each receipt, pulls out the fields that matter (date, vendor, total), and appends a row to the workbook by driving Excel directly through its COM automation interface. Because it talks to Excel itself, all the existing formulas and formatting keep working.',
      },
      {
        type: 'code',
        text: `import pdfplumber
import win32com.client as win32

def receipt_to_ledger(pdf_path, workbook_path):
    # 1. Pull the fields we care about out of the receipt
    with pdfplumber.open(pdf_path) as pdf:
        text = pdf.pages[0].extract_text()
    date, vendor, total = parse_fields(text)

    # 2. Drive Excel through COM and append one row
    excel = win32.Dispatch("Excel.Application")
    wb = excel.Workbooks.Open(workbook_path)
    sheet = wb.Worksheets("Ledger")

    last = sheet.Cells(sheet.Rows.Count, 1).End(-4162).Row  # xlUp
    row = last + 1
    sheet.Cells(row, 1).Value = date
    sheet.Cells(row, 2).Value = vendor
    sheet.Cells(row, 3).Value = total

    wb.Save()
    wb.Close()`,
      },
      { type: 'h2', text: 'The result' },
      {
        type: 'ul',
        items: [
          'Manual data entry for receipts was eliminated.',
          'Financial reporting got more accurate, because the script never mistypes a number.',
          'Nobody had to change how they worked — they just save the file to a folder.',
        ],
      },
      { type: 'h2', text: 'What I’d tell anyone building something similar' },
      {
        type: 'p',
        text: 'The hardest part of automation usually isn’t the code — it’s fitting into a workflow people already trust. Meet the business where it is, make the tool boring and reliable, and measure success by how little anyone notices it running.',
      },
    ],
  },
  {
    slug: 'building-a-d3-troubleshooting-tree',
    title: 'Building an Interactive Troubleshooting Tree with D3.js',
    date: 'May 2026',
    readTime: '7 min read',
    tags: ['D3.js', 'JavaScript', 'Data Viz'],
    excerpt:
      'I had years of scattered fixes in my head. So I turned them into a searchable, 295-node visual map of how to repair Windows and Mac.',
    content: [
      {
        type: 'p',
        text: 'After enough years fixing computers, you build a mental decision tree: if it’s this symptom, check that; if that fails, try this. I wanted to get that tree out of my head and into something other people could actually use — visual, searchable, and clickable.',
      },
      { type: 'h2', text: 'Start with the data, not the drawing' },
      {
        type: 'p',
        text: 'The whole project is really just one JSON file. Every node is a small object — a name, an optional description, a command to run, step-by-step instructions, and its children. Get the data model right and the visualization almost builds itself.',
      },
      {
        type: 'code',
        text: `{
  "name": "No Display / Black Screen",
  "description": "Monitor powers on but shows nothing.",
  "children": [
    {
      "name": "Reseat the RAM",
      "steps": ["Power off and unplug", "Remove and reinsert each stick"]
    },
    {
      "name": "Test with another cable",
      "command": "Try HDMI then DisplayPort"
    }
  ]
}`,
      },
      { type: 'h2', text: 'Letting D3 do the layout' },
      {
        type: 'p',
        text: 'D3’s tree layout takes that hierarchy and computes where every node and connector should sit. I render it left-to-right with curved links, and each node toggles its children open or closed on click — so you only ever see the branch you’re working through.',
      },
      {
        type: 'code',
        text: `const tree = d3.tree().nodeSize([22, 280]);
const root = d3.hierarchy(data);

function render(source) {
  tree(root);

  g.selectAll("path.link")
    .data(root.links(), d => d.target.id)
    .join("path")
    .attr("class", "link")
    .attr("d", d3.linkHorizontal().x(d => d.y).y(d => d.x));

  g.selectAll("g.node")
    .data(root.descendants(), d => d.id)
    .join("g")
    .attr("class", "node")
    .on("click", (event, d) => { toggle(d); render(d); });
}`,
      },
      { type: 'h2', text: 'The features that made it usable' },
      {
        type: 'ul',
        items: [
          'Live search that highlights matches and auto-expands the path to them.',
          'Zoom and pan, so a 295-node tree never feels overwhelming.',
          'A slide-in detail panel with the full steps, commands, and a copy button.',
        ],
      },
      { type: 'h2', text: 'Shipping it' },
      {
        type: 'p',
        text: 'It’s vanilla HTML, CSS, and JavaScript with no build step, served straight from GitHub Pages. Sometimes the best stack is the one that deploys with a single git push and never breaks.',
      },
    ],
  },
  {
    slug: 'field-guide-to-diagnosing-any-computer',
    title: 'A Field Guide to Diagnosing Almost Any Computer',
    date: 'April 2026',
    readTime: '5 min read',
    tags: ['Hardware', 'Repair', 'Diagnostics'],
    excerpt:
      'Diagnosing a broken machine isn’t about knowing every fix — it’s about a method that narrows the possibilities fast. Here’s mine.',
    content: [
      {
        type: 'p',
        text: 'As a Certified Apple Technician and Geek Squad agent, I see a steady stream of “it just stopped working.” The machines vary; the method doesn’t. Good diagnostics is less about memorizing fixes and more about eliminating possibilities in the right order.',
      },
      { type: 'h2', text: '1. Get the real symptom, not the headline' },
      {
        type: 'p',
        text: '“It’s slow” and “it won’t turn on” are starting points, not diagnoses. When did it start? What changed right before? Does it happen every time or only sometimes? Five minutes of good questions can save an hour of guessing.',
      },
      { type: 'h2', text: '2. Split hardware from software' },
      {
        type: 'p',
        text: 'This is the single most useful cut. If a problem follows the user into safe mode, a different account, or a live boot environment, it’s likely software. If it persists no matter what software you load, suspect hardware. Isolating that one variable removes half the possibilities immediately.',
      },
      { type: 'h2', text: '3. Work the usual suspects in order' },
      {
        type: 'ul',
        items: [
          'Power and connections first — the boring fixes are boring because they’re common.',
          'Storage health and free space, which quietly cause a huge share of “slow” complaints.',
          'Recent updates, drivers, or new software that line up with when the trouble started.',
          'Heat and dust — thermal throttling masquerades as a dying machine more often than people expect.',
        ],
      },
      { type: 'h2', text: '4. Protect the data before you experiment' },
      {
        type: 'p',
        text: 'Before any repair that could touch the disk, the data comes first. A secure backup or transfer means you can troubleshoot aggressively without gambling someone’s photos, taxes, or work.',
      },
      { type: 'h2', text: 'The mindset' },
      {
        type: 'p',
        text: 'Whether it’s a Windows laptop, a MacBook, or a phone, the discipline is the same: change one thing at a time, keep track of what you’ve ruled out, and stay calm. The method travels across every platform — the logos on the case are just details.',
      },
    ],
  },
];

const Block = ({ block }) => {
  if (block.type === 'h2') {
    return (
      <h2 className="font-display font-bold text-2xl text-ink mt-10 mb-3 leading-tight">
        {block.text}
      </h2>
    );
  }
  if (block.type === 'ul') {
    return (
      <ul className="my-4 space-y-2">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-inkSoft leading-[1.75] text-pretty">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === 'code') {
    return (
      <pre className="my-5 overflow-x-auto rounded-lg bg-codeBlock p-5 text-sm leading-relaxed">
        <code className="font-mono text-codeText">{block.text}</code>
      </pre>
    );
  }
  return <p className="my-4 text-inkSoft leading-[1.8] text-pretty">{block.text}</p>;
};

const GuidesPage = () => {
  const [activeSlug, setActiveSlug] = useState(null);
  const active = guides.find((g) => g.slug === activeSlug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSlug]);

  return (
    <>
      <Helmet>
        <title>
          {active
            ? `${active.title} — Brandon Henrickson`
            : 'Guides — Brandon Henrickson'}
        </title>
        <meta
          name="description"
          content="Technical write-ups by Brandon Henrickson on automation, data visualization, and computer diagnostics."
        />
      </Helmet>

      <div className="min-h-screen bg-canvas">
        <Navigation />

        {/* Banner */}
        <div className="w-full bg-emerald pt-16">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
            <BookOpen size={20} className="text-white" strokeWidth={2} />
            <h1 className="font-display font-bold text-xl tracking-wide text-white">
              Guides
            </h1>
          </div>
        </div>

        {active ? (
          /* ---------- Article view ---------- */
          <article className="max-w-3xl mx-auto px-6 py-12 md:py-16">
            <button
              onClick={() => setActiveSlug(null)}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-inkMuted hover:text-emerald transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              All guides
            </button>

            <div className="flex flex-wrap gap-2 mb-4">
              {active.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs bg-emeraldLight text-emeraldText px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink leading-tight">
              {active.title}
            </h2>
            <p className="mt-3 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-inkMuted">
              <span>{active.date}</span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {active.readTime}
              </span>
            </p>

            <div className="mt-8">
              {active.content.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>

            <button
              onClick={() => setActiveSlug(null)}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald hover:text-emeraldHover transition-colors mt-12"
            >
              <ArrowLeft size={14} />
              Back to all guides
            </button>
          </article>
        ) : (
          /* ---------- List view ---------- */
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <p className="text-inkSoft text-base md:text-lg leading-[1.75] text-pretty mb-10 max-w-2xl">
              Write-ups on the things I build and fix — automation, data
              visualization, and the diagnostics method behind everyday repair work.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {guides.map((g, i) => (
                <motion.button
                  key={g.slug}
                  onClick={() => setActiveSlug(g.slug)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group flex flex-col text-left bg-surface border border-border rounded-lg p-6 transition-all duration-300 hover:border-emerald hover:shadow-sm hover:-translate-y-0.5"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {g.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs bg-emeraldLight text-emeraldText px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display font-bold text-lg text-ink leading-snug">
                    {g.title}
                  </h3>
                  <p className="text-inkSoft leading-[1.7] text-pretty mt-3 flex-1">
                    {g.excerpt}
                  </p>
                  <p className="mt-4 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-inkMuted">
                      {g.date} · {g.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-xs text-emerald group-hover:gap-2 transition-all">
                      Read <ArrowRight size={14} />
                    </span>
                  </p>
                </motion.button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GuidesPage;
