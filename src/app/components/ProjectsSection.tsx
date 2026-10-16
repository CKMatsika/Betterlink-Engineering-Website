'use client';

import React, { useEffect, useRef } from 'react';

import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  value: string;
  tags: string[];
  href: string;
  cta: string;
  image: string;
  imageAlt: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 'teacher-assistant',
    title: 'Teacher Assistant',
    subtitle: 'AI-Powered, Localised & Inclusive Learning',
    description:
      'An AI-powered educational technology platform providing students with personalised learning support while connecting parents and education specialists into the learning ecosystem.',
    challenge:
      'Students in Zimbabwe needed personalised, curriculum-aligned learning support accessible beyond the classroom.',
    solution:
      'AI Tutor with ZIMSEC and Cambridge pathways, adaptive learning, flashcards, quizzes, mind maps, progress tracking, parent engagement and offline learning direction.',
    value:
      'Demonstrates Betterlink capability in AI + Software Engineering + Education Technology + Accessibility + Localisation.',
    tags: ['AI', 'Education', 'Accessibility', 'Software Engineering', 'Localisation'],
    href: 'https://teacher-companion.ai.studio/',
    cta: 'Explore Teacher Assistant',
    image: '/assets/images/gallery/rocket_gen_img_17e8fb111-1772764342632.png',
    imageAlt: 'Student using a tablet for AI-powered learning in a bright classroom environment',
    featured: true,
  },
  {
    id: 'local-authority-erp',
    title: 'Local Authority ERP',
    subtitle: 'Integrated Digital Management for Municipal Operations',
    description:
      'A comprehensive ERP platform covering general ledger, billing, procurement, HR, property management, land, planning, council governance, resident services and analytics.',
    challenge:
      'Municipal operations required an integrated digital system replacing fragmented manual processes.',
    solution:
      'Full ERP covering finance, billing, assets, HR, procurement, property, land, council meetings and resident services with dashboards.',
    value:
      'Demonstrates capability to understand complex enterprise processes and translate them into integrated systems.',
    tags: ['ERP', 'Government', 'Systems Integration', 'Finance'],
    href: 'https://v0-generic-erp-template.vercel.app/dashboard',
    cta: 'Explore Local Authority ERP',
    image: '/assets/images/gallery/rocket_gen_img_14ee21e1e-1774626811377.png',
    imageAlt: 'Modern government office with professionals reviewing digital dashboards on screens',
    featured: false,
  },
  {
    id: 'space-explorer',
    title: 'Space Explorer',
    subtitle: 'Interactive API-Driven Digital Experience',
    description:
      'A modern interactive web application demonstrating API integration, real-time data presentation, responsive front-end engineering and engaging user experience design.',
    challenge:
      'Demonstrate modern web development capability through an interactive, API-driven application.',
    solution:
      'Interactive space data explorer built with modern front-end engineering, REST API integration and responsive design.',
    value:
      'Demonstrates modern web development, interactive UX, API integration and front-end engineering capability.',
    tags: ['API Integration', 'Software Engineering', 'Interactive UX'],
    href: 'https://ckmatsika.github.io/space-explorer/',
    cta: 'Launch Space Explorer',
    image: '/assets/images/gallery/space-explorer.jpg',
    imageAlt:
      'Deep space galaxy image with vibrant nebula colours against a dark cosmic background',
    featured: false,
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.proj-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
              }, i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const featured = projects[0];
  const secondary = projects.slice(1);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 bg-primary"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="section-label mb-4">Featured Work</span>
            <h2 id="projects-heading" className="font-display text-section-xl text-white">
              What We Have Built
            </h2>
          </div>
          <p className="text-white/50 text-base font-500 leading-relaxed max-w-sm">
            Real applications demonstrating engineering capability across AI, ERP, education and
            modern web development.
          </p>
        </div>

        {/* Bento grid */}
        {/* Row 1: [TeacherAssistant cs-2 rs-2][LocalAuthorityERP cs-1] */}
        {/* Row 2: [TeacherAssistant continued][SpaceExplorer cs-1] */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured: Teacher Assistant — col-span-2, row-span-2 */}
          <div
            className="proj-card lg:col-span-2 lg:row-span-2 rounded-3xl overflow-hidden relative group flex flex-col min-h-[480px]"
            style={{
              opacity: 0,
              transform: 'translateY(30px)',
              transition:
                'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <AppImage
                src={featured.image}
                alt={featured.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Scrim: white text → dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full p-8 md:p-10">
              {/* Top badge */}
              <div className="flex items-center gap-3 mb-auto">
                <span
                  className="text-[0.65rem] font-800 tracking-[0.3em] uppercase px-3 py-1.5 rounded-full border"
                  style={{
                    borderColor: 'rgba(29,106,229,0.5)',
                    color: 'var(--accent)',
                    backgroundColor: 'rgba(29,106,229,0.1)',
                  }}
                >
                  Flagship Innovation
                </span>
              </div>

              {/* Bottom text */}
              <div className="mt-auto">
                <h3 className="font-display text-3xl md:text-4xl font-800 text-white mb-2 leading-tight">
                  {featured.title}
                </h3>
                <p
                  className="text-sm font-700 tracking-widest uppercase mb-4"
                  style={{ color: 'var(--accent)' }}
                >
                  {featured.subtitle}
                </p>
                <p className="text-white/70 text-sm font-500 leading-relaxed mb-6 max-w-lg">
                  {featured.description}
                </p>

                {/* Challenge / Solution */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/8 rounded-xl p-4 border border-white/10">
                    <p className="text-[0.65rem] font-800 tracking-widest text-white/40 uppercase mb-2">
                      Challenge
                    </p>
                    <p className="text-xs font-500 text-white/70 leading-relaxed">
                      {featured.challenge}
                    </p>
                  </div>
                  <div className="bg-white/8 rounded-xl p-4 border border-white/10">
                    <p className="text-[0.65rem] font-800 tracking-widest text-white/40 uppercase mb-2">
                      Solution
                    </p>
                    <p className="text-xs font-500 text-white/70 leading-relaxed">
                      {featured.solution}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="project-tag-dark">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={featured.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex"
                >
                  {featured.cta}
                  <Icon name="ArrowTopRightOnSquareIcon" size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* Secondary projects */}
          {secondary.map((proj, i) => (
            <div
              key={proj.id}
              className="proj-card rounded-3xl overflow-hidden relative group flex flex-col min-h-[230px]"
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)`,
                transitionDelay: `${(i + 1) * 120}ms`,
              }}
            >
              <div className="absolute inset-0">
                <AppImage
                  src={proj.image}
                  alt={proj.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              <div className="relative z-10 flex flex-col h-full p-6">
                <div className="mb-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="project-tag-dark text-[0.6rem]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <h3 className="font-display text-xl font-800 text-white mb-1 leading-tight">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-600 text-white/50 mb-3">{proj.subtitle}</p>
                  <p className="text-white/60 text-xs font-500 leading-relaxed mb-4 line-clamp-2">
                    {proj.description}
                  </p>
                  <a
                    href={proj.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent text-xs font-800 tracking-widest uppercase hover:gap-3 transition-all duration-200"
                  >
                    {proj.cta}
                    <Icon name="ArrowTopRightOnSquareIcon" size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
