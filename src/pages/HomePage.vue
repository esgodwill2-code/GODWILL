<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const roles = ['Developer', 'System builder', 'Problem solver']
const animatedRole = ref<string>('Developer')
let roleTimer: ReturnType<typeof setTimeout> | undefined
let roleIndex = 0
let isDeleting = false

const projects = [
  {
    id: 'school-system',
    number: '01',
    type: 'Full-stack application',
    title: 'School Management System',
    summary: 'A central place for students and staff to manage everyday academic work.',
    details:
      'The application brings together student and staff experiences, with protected areas for attendance, courses, exams, timetables, calendars, and messages.',
    technologies: ['React', 'Node.js', 'Express', 'SQLite'],
    preview: 'school',
    previewLabel: 'Academic overview interface illustration',
  },
  {
    id: 'student-tools',
    number: '02',
    type: 'Student experience',
    title: 'Student tools',
    summary: 'Useful day-to-day pages for keeping track of campus life.',
    details:
      'The student-facing experience includes a dashboard, timetable, school calendar, inbox, lecturer ratings, and unit registration.',
    technologies: ['React', 'JavaScript', 'API integration'],
    preview: 'student',
    previewLabel: 'Student schedule interface illustration',
  },
  {
    id: 'portfolio',
    number: '03',
    type: 'Personal portfolio',
    title: 'Godwill Did It',
    summary: 'A responsive portfolio that brings my work and story together.',
    details:
      'This portfolio is built with Vue and TypeScript. It includes routed pages, contact information, and a members area connected to a backend API.',
    technologies: ['Vue 3', 'TypeScript', 'Vite', 'Express'],
    preview: 'portfolio',
    previewLabel: 'Portfolio page interface illustration',
  },
]

const skillTags = ['React', 'Vue 3', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'SQLite', 'HTML & CSS']

function typeNextRole() {
  const phrase = roles[roleIndex] ?? 'Developer'
  const current = animatedRole.value

  if (isDeleting) {
    animatedRole.value = phrase.slice(0, Math.max(0, current.length - 1))
    if (!animatedRole.value) {
      isDeleting = false
      roleIndex = (roleIndex + 1) % roles.length
      roleTimer = setTimeout(typeNextRole, 220)
      return
    }
    roleTimer = setTimeout(typeNextRole, 45)
    return
  }

  animatedRole.value = phrase.slice(0, current.length + 1)
  if (animatedRole.value === phrase) {
    isDeleting = true
    roleTimer = setTimeout(typeNextRole, 1500)
    return
  }
  roleTimer = setTimeout(typeNextRole, 85)
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  roleTimer = setTimeout(typeNextRole, 1500)
})

onUnmounted(() => {
  if (roleTimer) clearTimeout(roleTimer)
})
</script>

<template>
  <div class="home-page">
    <section class="home-hero">
      <div class="hero-copy">
        <p class="eyebrow"><span class="availability-dot"></span> DESIGNING, BUILDING, LEARNING</p>
        <h1>GODWILL<br><span>DID IT.</span></h1>
        <p class="hero-promise">Developer. Builder. I turn ideas into systems that work.</p>
        <p class="role-line" aria-hidden="true">
          <span class="role-prefix">A little more:</span>
          <span class="typed-role">{{ animatedRole }}</span><span class="typing-cursor"></span>
        </p>
        <p class="sr-only">Developer, system builder, and problem solver.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#selected-work">View my work <span aria-hidden="true">↓</span></a>
          <RouterLink class="button button-secondary" to="/contact">Contact me <span aria-hidden="true">↗</span></RouterLink>
        </div>
        <p class="hero-footnote">Curious by nature. Building one idea at a time.</p>
      </div>

      <figure class="hero-portrait">
        <div class="portrait-frame">
          <img src="/images/twist%201.jpeg" alt="Portrait of Godwill">
          <span class="portrait-corner" aria-hidden="true">GD / 01</span>
        </div>
        <figcaption><span>THE PERSON</span><span>BEHIND THE PROJECTS</span></figcaption>
        <span class="portrait-spark" aria-hidden="true">✳</span>
      </figure>
      <span class="hero-coordinate" aria-hidden="true">PORTFOLIO — 2026</span>
    </section>

    <section id="selected-work" class="work-section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">A FEW THINGS I’VE BEEN BUILDING</p>
          <h2>Selected <em>work.</em></h2>
        </div>
        <p class="section-note">A look at the projects and product areas I’ve been exploring.</p>
      </div>

      <div class="project-grid">
        <article v-for="project in projects" :key="project.id" class="project-card">
          <div class="project-preview" :class="`preview-${project.preview}`" role="img" :aria-label="project.previewLabel">
            <div v-if="project.preview === 'school'" class="mock-window">
              <div class="mock-topbar"><span></span><span></span><span></span><i>Campus overview</i></div>
              <div class="mock-layout">
                <div class="mock-sidebar"><b></b><span></span><span></span><span></span><span></span></div>
                <div class="mock-content">
                  <div class="mock-heading"></div>
                  <div class="mock-metrics"><span></span><span></span><span></span></div>
                  <div class="mock-chart"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                </div>
              </div>
            </div>
            <div v-else-if="project.preview === 'student'" class="mock-window student-window">
              <div class="mock-topbar"><span></span><span></span><span></span><i>My week</i></div>
              <div class="student-mock-content">
                <div class="mock-heading"></div>
                <div class="mock-day-row"><b></b><span></span><small></small></div>
                <div class="mock-day-row"><b></b><span></span><small></small></div>
                <div class="mock-day-row"><b></b><span></span><small></small></div>
                <div class="mock-day-row"><b></b><span></span><small></small></div>
              </div>
            </div>
            <div v-else class="portfolio-mock">
              <span class="mock-eyebrow">A LITTLE ABOUT ME</span>
              <span class="mock-title">Ideas into<br><em>something real.</em></span>
              <span class="mock-button"></span>
              <span class="mock-photo"></span>
            </div>
            <span class="preview-caption">INTERFACE STUDY <span>↗</span></span>
          </div>

          <div class="project-meta"><span>{{ project.type }}</span><span>{{ project.number }}</span></div>
          <h3>{{ project.title }}</h3>
          <p class="project-summary">{{ project.summary }}</p>
          <ul class="project-tags" :aria-label="`${project.title} technologies`">
            <li v-for="technology in project.technologies" :key="technology">{{ technology }}</li>
          </ul>
          <details class="project-details">
            <summary>See more <span aria-hidden="true">↗</span></summary>
            <p>{{ project.details }}</p>
          </details>
        </article>
      </div>
    </section>

    <section class="skills-strip" aria-labelledby="skills-heading">
      <p id="skills-heading" class="eyebrow">TOOLS IN MY TOOLKIT</p>
      <ul>
        <li v-for="skill in skillTags" :key="skill">{{ skill }}</li>
      </ul>
    </section>

    <section class="about-teaser">
      <div class="teaser-mark" aria-hidden="true">G<span>.</span></div>
      <div class="teaser-copy">
        <p class="eyebrow">THE PERSON BEHIND THE SCREEN</p>
        <h2>Curiosity got me <em>here.</em></h2>
        <p>
          I’m Godwill — a curious builder who enjoys learning how things work and turning ideas
          into something useful. I’m growing my skills one project at a time.
        </p>
        <RouterLink class="text-link" to="/about">A little more about me <span aria-hidden="true">↗</span></RouterLink>
      </div>
      <span class="teaser-note">STILL LEARNING<br>STILL BUILDING</span>
    </section>

    <section class="now-section">
      <div class="now-indicator"><span></span> RIGHT NOW</div>
      <p><strong>Building:</strong> a school management system and this portfolio.</p>
      <p><strong>Exploring:</strong> full-stack web development, from interface to API.</p>
      <span class="now-date">A SMALL UPDATE · 2026</span>
    </section>

    <footer class="home-cta">
      <p class="eyebrow">HAVE A GOOD IDEA?</p>
      <h2>Let’s build <em>something useful.</em></h2>
      <p>Have a project or want to talk through an idea? I’d love to hear from you.</p>
      <RouterLink class="button button-primary" to="/contact">Let’s work together <span aria-hidden="true">↗</span></RouterLink>
    </footer>
  </div>
</template>

<style scoped>
.home-page {
  --ink: #20231f;
  --muted: #696c63;
  --line: #e9e6dd;
  --paper: #fbfaf7;
  --accent: #b05b3d;
  --green: #5a6f5b;

  width: min(100%, 868px);
  margin: 0 auto;
  padding: 8px 0 22px;
  color: var(--ink);
  font-family: Arial, sans-serif;
  text-align: left;
}

.home-page,
.home-page * {
  box-sizing: border-box;
}

.home-page :is(h1, h2, h3, p, figure) {
  margin: 0;
}

.home-page h1,
.home-page h2 {
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 400;
  letter-spacing: -0.05em;
}

.home-page h2 em {
  color: var(--accent);
  font-weight: 400;
}

.home-page section {
  padding: 65px 0;
}

.eyebrow {
  color: var(--muted);
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  line-height: 1.5;
}

.home-hero {
  position: relative;
  display: grid;
  grid-template-columns: 1.18fr 0.75fr;
  gap: 55px;
  align-items: center;
  overflow: hidden;
  min-height: 450px;
  border-radius: 5px;
  padding: 54px 60px;
  background: var(--paper);
}

.hero-copy {
  position: relative;
  z-index: 1;
}

.hero-copy > .eyebrow {
  display: flex;
  gap: 9px;
  align-items: center;
  margin-bottom: 22px;
}

.availability-dot,
.now-indicator span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #6f896b;
  box-shadow: 0 0 0 4px rgb(111 137 107 / 13%);
}

.home-hero h1 {
  font-size: clamp(3.65rem, 8vw, 6.2rem);
  line-height: 0.83;
}

.home-hero h1 span {
  color: var(--accent);
}

.hero-promise {
  max-width: 400px;
  margin-top: 25px !important;
  color: #454940;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.6;
}

.role-line {
  display: flex;
  min-height: 22px;
  gap: 7px;
  align-items: center;
  margin-top: 12px !important;
  color: var(--muted);
  font-size: 0.78rem;
}

.typed-role {
  min-width: 90px;
  color: var(--green);
  font-weight: 700;
}

.typing-cursor {
  width: 1px;
  height: 14px;
  background: var(--accent);
  animation: blink 900ms steps(2, start) infinite;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 27px;
}

.button {
  display: inline-flex;
  min-height: 44px;
  gap: 20px;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 2px;
  padding: 12px 15px;
  font-size: 0.76rem;
  font-weight: 700;
  text-decoration: none;
  transition: background 180ms ease, color 180ms ease, border-color 180ms ease, transform 180ms ease;
}

.button-primary {
  background: var(--ink);
  color: #fff;
}

.button-primary:hover,
.button-primary:focus-visible {
  transform: translateY(-2px);
  background: var(--accent);
}

.button-secondary {
  border-color: #d8d5cb;
  background: #fff;
  color: var(--ink);
}

.button-secondary:hover,
.button-secondary:focus-visible {
  transform: translateY(-2px);
  border-color: var(--accent);
  color: var(--accent);
}

.hero-footnote {
  margin-top: 20px !important;
  color: #85867e;
  font-size: 0.68rem;
}

.hero-portrait {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 260px;
  justify-self: center;
  padding: 10px 10px 0;
  background: #fff;
  box-shadow: 0 18px 45px rgb(39 38 31 / 12%);
  transform: rotate(2deg);
}

.portrait-frame {
  position: relative;
  overflow: hidden;
  background: #e7e3da;
}

.portrait-frame img {
  display: block;
  width: 100%;
  aspect-ratio: 0.82;
  object-fit: cover;
  object-position: center 38%;
  filter: grayscale(1);
  transition: filter 600ms ease, transform 700ms ease;
}

.hero-portrait:hover .portrait-frame img,
.hero-portrait:focus-within .portrait-frame img {
  filter: grayscale(0);
  transform: scale(1.025);
}

.portrait-corner {
  position: absolute;
  right: 9px;
  bottom: 9px;
  border-radius: 2px;
  padding: 5px 7px;
  background: rgb(32 35 31 / 75%);
  color: #fff;
  font-size: 0.53rem;
  letter-spacing: 0.12em;
}

.hero-portrait figcaption {
  display: flex;
  justify-content: space-between;
  gap: 7px;
  padding: 12px 1px 10px;
  color: #62645d;
  font-size: 0.47rem;
  font-weight: 700;
  letter-spacing: 0.09em;
}

.portrait-spark {
  position: absolute;
  top: -19px;
  right: -21px;
  color: #b99c70;
  font-size: 1.5rem;
}

.hero-coordinate {
  position: absolute;
  right: 24px;
  bottom: 19px;
  color: #9b9a90;
  font-size: 0.52rem;
  letter-spacing: 0.13em;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: end;
  margin-bottom: 27px;
}

.section-heading h2,
.about-teaser h2,
.home-cta h2 {
  margin-top: 10px !important;
  font-size: clamp(2.35rem, 5vw, 3.35rem);
  line-height: 1.08;
}

.section-note {
  max-width: 250px;
  color: var(--muted);
  font-size: 0.78rem;
  line-height: 1.65;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 15px;
}

.project-card {
  min-width: 0;
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 10px 10px 16px;
  background: #fff;
  transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: #d8c3b3;
  box-shadow: 0 12px 28px rgb(39 38 31 / 8%);
}

.project-preview {
  position: relative;
  display: grid;
  min-height: 160px;
  place-items: center;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 84% 10%, rgb(231 213 188 / 50%), transparent 45%),
    #f2f0e9;
}

.preview-student {
  background:
    radial-gradient(ellipse at 14% 90%, rgb(193 211 190 / 70%), transparent 47%),
    #f2f0e9;
}

.preview-portfolio {
  background:
    radial-gradient(ellipse at 82% 78%, rgb(232 202 188 / 64%), transparent 46%),
    #f4efe8;
}

.mock-window {
  width: 81%;
  height: 111px;
  overflow: hidden;
  border: 1px solid #d8d8d0;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 9px 20px rgb(48 48 43 / 13%);
  transform: rotate(-2deg);
}

.mock-topbar {
  display: flex;
  height: 18px;
  gap: 3px;
  align-items: center;
  border-bottom: 1px solid #eeeeea;
  padding: 0 6px;
}

.mock-topbar > span {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #d8b8a8;
}

.mock-topbar > span:nth-child(2) {
  background: #d8cb9b;
}

.mock-topbar > span:nth-child(3) {
  background: #b2c6ad;
}

.mock-topbar i {
  margin-left: 4px;
  color: #9b9b92;
  font-size: 0.37rem;
  font-style: normal;
}

.mock-layout {
  display: grid;
  height: calc(100% - 18px);
  grid-template-columns: 29px 1fr;
}

.mock-sidebar {
  display: grid;
  align-content: start;
  gap: 7px;
  border-right: 1px solid #efefeb;
  padding: 8px 5px;
}

.mock-sidebar b {
  width: 15px;
  height: 5px;
  margin-bottom: 3px;
  border-radius: 3px;
  background: #778873;
}

.mock-sidebar span {
  width: 17px;
  height: 3px;
  border-radius: 3px;
  background: #e7e7e1;
}

.mock-content {
  padding: 8px;
}

.mock-heading {
  width: 42%;
  height: 6px;
  border-radius: 3px;
  background: #52594e;
}

.mock-metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  margin-top: 7px;
}

.mock-metrics span {
  height: 21px;
  border: 1px solid #eeeee9;
  border-radius: 2px;
  background: linear-gradient(180deg, #f9f8f4, #fff);
}

.mock-chart {
  display: flex;
  height: 36px;
  gap: 7px;
  align-items: end;
  border-bottom: 1px solid #ecebe6;
  margin-top: 6px;
  padding: 0 6px;
}

.mock-chart i {
  width: 8px;
  height: 16px;
  border-radius: 2px 2px 0 0;
  background: #c7d1c0;
}

.mock-chart i:nth-child(2),
.mock-chart i:nth-child(5) {
  height: 25px;
  background: #839681;
}

.mock-chart i:nth-child(3),
.mock-chart i:nth-child(7) {
  height: 20px;
  background: #e4c5b5;
}

.student-window {
  height: 122px;
  transform: rotate(2deg);
}

.student-mock-content {
  display: grid;
  gap: 6px;
  padding: 9px;
}

.student-mock-content .mock-heading {
  width: 40%;
  margin-bottom: 2px;
}

.mock-day-row {
  display: grid;
  grid-template-columns: 23px 1fr 31px;
  gap: 5px;
  align-items: center;
  height: 14px;
  border: 1px solid #efeee9;
  border-radius: 2px;
  padding: 0 4px;
}

.mock-day-row b,
.mock-day-row span,
.mock-day-row small {
  height: 3px;
  border-radius: 2px;
  background: #deded7;
}

.mock-day-row b {
  background: #8b9a83;
}

.mock-day-row small {
  background: #e1cabb;
}

.portfolio-mock {
  position: relative;
  display: grid;
  width: 81%;
  height: 111px;
  align-content: center;
  padding-left: 13px;
  background: #fbfaf7;
  box-shadow: 0 9px 20px rgb(48 48 43 / 13%);
  transform: rotate(-2deg);
}

.mock-eyebrow {
  color: #8a887e;
  font-size: 0.35rem;
  font-weight: 700;
  letter-spacing: 0.13em;
}

.mock-title {
  margin-top: 5px;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 0.95rem;
  line-height: 1.05;
}

.mock-title em {
  color: var(--accent);
  font-weight: 400;
}

.mock-button {
  width: 38px;
  height: 10px;
  margin-top: 7px;
  border-radius: 1px;
  background: #262a25;
}

.mock-photo {
  position: absolute;
  top: 14px;
  right: 10px;
  width: 43px;
  height: 75px;
  background: linear-gradient(150deg, #d5c7b7 0 44%, #849078 45% 100%);
}

.preview-caption {
  position: absolute;
  right: 8px;
  bottom: 7px;
  left: 8px;
  display: flex;
  justify-content: space-between;
  color: #84847a;
  font-size: 0.45rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.preview-caption span {
  color: var(--accent);
  font-size: 0.7rem;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 16px;
  color: var(--muted);
  font-size: 0.59rem;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.project-meta span:last-child {
  color: var(--accent);
}

.project-card h3 {
  margin-top: 8px !important;
  font-size: 1rem;
  line-height: 1.3;
}

.project-summary {
  min-height: 47px;
  margin-top: 7px !important;
  color: var(--muted);
  font-size: 0.74rem;
  line-height: 1.6;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
}

.project-tags li {
  border: 1px solid #e8e6df;
  border-radius: 99px;
  padding: 4px 7px;
  color: #55584f;
  font-size: 0.57rem;
}

.project-details {
  margin-top: 13px;
  border-top: 1px solid var(--line);
}

.project-details summary {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  padding-top: 10px;
  color: var(--ink);
  font-size: 0.71rem;
  font-weight: 700;
  cursor: pointer;
  list-style: none;
}

.project-details summary::-webkit-details-marker {
  display: none;
}

.project-details summary span {
  color: var(--accent);
  transition: transform 180ms ease;
}

.project-details[open] summary span {
  transform: rotate(45deg);
}

.project-details > p {
  margin-top: 9px !important;
  color: var(--muted);
  font-size: 0.73rem;
  line-height: 1.65;
}

.skills-strip {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.skills-strip ul {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
}

.skills-strip li {
  border: 1px solid #e5e2d9;
  border-radius: 99px;
  padding: 8px 12px;
  background: var(--paper);
  color: #44483f;
  font-size: 0.73rem;
}

.about-teaser {
  position: relative;
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 28px;
  align-items: center;
  overflow: hidden;
  border-radius: 4px;
  padding-right: 38px !important;
  padding-left: 38px !important;
  background: #f8f5ee;
}

.teaser-mark {
  display: grid;
  width: 64px;
  height: 64px;
  place-content: center;
  border: 1px solid #dfcbb9;
  border-radius: 50%;
  color: var(--accent);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 2.3rem;
}

.teaser-mark span {
  color: var(--green);
}

.about-teaser h2 {
  font-size: 2.5rem;
}

.teaser-copy > p:not(.eyebrow) {
  max-width: 570px;
  margin-top: 11px !important;
  color: var(--muted);
  font-size: 0.82rem;
  line-height: 1.75;
}

.text-link {
  display: inline-flex;
  gap: 12px;
  align-items: center;
  margin-top: 15px;
  border-bottom: 1px solid #c9a28e;
  padding-bottom: 4px;
  color: var(--ink);
  font-size: 0.75rem;
  font-weight: 700;
  text-decoration: none;
}

.text-link:hover,
.text-link:focus-visible {
  color: var(--accent);
}

.teaser-note {
  position: absolute;
  right: 24px;
  bottom: 18px;
  color: #9a968a;
  font-size: 0.48rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  line-height: 1.7;
  text-align: right;
}

.now-section {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 12px 20px;
  align-items: baseline;
  border: 1px solid #e4e5d9;
  border-radius: 4px;
  padding: 23px 27px !important;
  background: #f4f5ee;
}

.now-indicator {
  display: flex;
  grid-row: span 2;
  gap: 10px;
  align-items: center;
  color: var(--green);
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.now-indicator span {
  width: 6px;
  height: 6px;
}

.now-section > p {
  color: #56594f;
  font-size: 0.78rem;
  line-height: 1.6;
}

.now-section strong {
  color: var(--ink);
}

.now-date {
  grid-column: 2;
  color: #88897e;
  font-size: 0.52rem;
  letter-spacing: 0.1em;
}

.home-cta {
  padding: 56px 20px 28px !important;
  text-align: center;
}

.home-cta > .eyebrow {
  color: var(--accent);
}

.home-cta h2 {
  font-size: clamp(2.5rem, 6vw, 4rem);
}

.home-cta > p:not(.eyebrow) {
  margin-top: 12px !important;
  color: var(--muted);
  font-size: 0.84rem;
  line-height: 1.7;
}

.home-cta .button {
  margin-top: 22px;
}

@keyframes blink {
  to {
    visibility: hidden;
  }
}

@media (max-width: 760px) {
  .home-page {
    width: 100%;
  }

  .home-page section {
    padding: 54px 0;
  }

  .home-hero {
    grid-template-columns: 1.1fr 0.75fr;
    gap: 27px;
    min-height: 390px;
    padding: 40px 32px;
  }

  .home-hero h1 {
    font-size: clamp(3.4rem, 9vw, 5.2rem);
  }

  .project-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .project-card:last-child {
    grid-column: 1 / -1;
  }

  .project-card:last-child .project-preview {
    min-height: 195px;
  }
}

@media (max-width: 520px) {
  .home-page {
    padding-top: 0;
  }

  .home-page > section:not(.home-hero) {
    margin-right: 20px;
    margin-left: 20px;
  }

  .home-page > .home-hero {
    margin-right: 0;
    margin-left: 0;
  }

  .home-page section {
    padding: 43px 0;
  }

  .home-hero {
    grid-template-columns: 1fr 112px;
    gap: 15px;
    min-height: 370px;
    border-radius: 0;
    padding: 33px 20px;
  }

  .hero-copy > .eyebrow {
    gap: 7px;
    margin-bottom: 18px;
    font-size: 0.52rem;
    letter-spacing: 0.11em;
  }

  .home-hero h1 {
    font-size: clamp(3.05rem, 13.6vw, 4.5rem);
  }

  .hero-promise {
    margin-top: 18px !important;
    font-size: 0.83rem;
    line-height: 1.55;
  }

  .role-line {
    flex-wrap: wrap;
    gap: 5px;
    font-size: 0.68rem;
  }

  .typed-role {
    min-width: 76px;
  }

  .hero-actions {
    gap: 8px;
    margin-top: 20px;
  }

  .button {
    min-height: 40px;
    gap: 11px;
    padding: 10px 11px;
    font-size: 0.67rem;
  }

  .hero-footnote {
    max-width: 170px;
    font-size: 0.62rem;
    line-height: 1.55;
  }

  .hero-portrait {
    padding: 6px 6px 0;
  }

  .hero-portrait figcaption {
    flex-direction: column;
    gap: 3px;
    padding: 8px 1px;
    font-size: 0.42rem;
  }

  .portrait-spark {
    top: -14px;
    right: -14px;
    font-size: 1.1rem;
  }

  .hero-coordinate {
    right: 15px;
    bottom: 10px;
    font-size: 0.43rem;
  }

  .section-heading {
    display: grid;
    gap: 10px;
    margin-bottom: 20px;
  }

  .section-heading h2,
  .about-teaser h2 {
    font-size: 2.35rem;
  }

  .section-note {
    max-width: 290px;
    font-size: 0.74rem;
  }

  .project-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .project-card:last-child {
    grid-column: auto;
  }

  .project-preview,
  .project-card:last-child .project-preview {
    min-height: 175px;
  }

  .project-summary {
    min-height: 0;
  }

  .skills-strip ul {
    gap: 7px;
  }

  .skills-strip li {
    padding: 7px 9px;
    font-size: 0.68rem;
  }

  .home-page > .about-teaser {
    grid-template-columns: 1fr;
    gap: 17px;
    padding: 29px 22px !important;
  }

  .teaser-mark {
    width: 48px;
    height: 48px;
    font-size: 1.8rem;
  }

  .teaser-note {
    right: 15px;
    bottom: 13px;
    font-size: 0.41rem;
  }

  .now-section {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 20px 18px !important;
  }

  .now-indicator {
    grid-row: auto;
    margin-bottom: 3px;
  }

  .now-date {
    grid-column: auto;
  }

  .home-cta {
    padding: 45px 8px 25px !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
