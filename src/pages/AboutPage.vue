<script setup lang="ts">
import { RouterLink } from 'vue-router'

const disciplines = [
  {
    icon: '⌘',
    title: 'Web development',
    description: 'Building thoughtful, responsive experiences for the web.',
  },
  {
    icon: '▤',
    title: 'System building',
    description: 'Connecting the interface, application logic, and data.',
  },
  {
    icon: '✳',
    title: 'Problem solving',
    description: 'Breaking big ideas into small, useful steps.',
  },
  {
    icon: '↗',
    title: 'Always learning',
    description: 'Growing my skills by making things and trying new ideas.',
  },
]

const skillGroups = [
  { name: 'Frontend', skills: ['Vue', 'React', 'TypeScript', 'HTML & CSS'] },
  { name: 'Backend', skills: ['Node.js', 'Express', 'REST APIs', 'SQLite'] },
  { name: 'Tools', skills: ['Git', 'Vite', 'npm', 'VS Code'] },
]

const milestones = [
  {
    date: '2026',
    title: 'School management system',
    description: 'Building a full-stack project that brings a web client and backend API together.',
    type: 'Project',
  },
  {
    date: '2026',
    title: 'Making this portfolio my own',
    description: 'Sharing what I build, what I am learning, and the person behind the work.',
    type: 'In progress',
  },
]

const values = [
  { title: 'Stay curious.', detail: 'Keep asking how things work, then try building them.' },
  { title: 'Make it useful.', detail: 'Good technology should solve a real problem for someone.' },
  { title: 'Keep getting better.', detail: 'Learn from every project and make the next one stronger.' },
]
</script>

<template>
  <article class="about-page">
    <header class="about-hero">
      <div class="hero-copy">
        <p class="eyebrow"><span class="eyebrow-dot"></span> A LITTLE ABOUT ME</p>
        <h1>Curiosity got me <span>here.</span></h1>
        <p class="hero-intro">
          Hey, I’m Godwill — a curious builder who loves turning ideas into things people can use.
          I got into tech by wondering how websites worked. One question led to another, and before
          long I was making my own.
        </p>
        <p class="hero-note">Still learning. Still building. Always asking “what if?”</p>
        <a class="text-link" href="#my-story">Get to know me <span aria-hidden="true">↓</span></a>
      </div>

      <figure class="portrait-card">
        <img src="/images/twist%201.jpeg" alt="Godwill, curious builder and lifelong learner">
        <figcaption>
          <span class="portrait-caption-dot"></span>
          <span>GODWILL <span class="caption-divider">/</span> BUILDER IN PROGRESS</span>
        </figcaption>
        <span class="portrait-stamp" aria-hidden="true">G<br>D</span>
      </figure>
      <span class="hero-spark hero-spark-one" aria-hidden="true">✳</span>
      <span class="hero-spark hero-spark-two" aria-hidden="true">✳</span>
    </header>

    <section id="my-story" class="story-section">
      <div class="section-label"><span>01</span> THE STORY</div>
      <div class="story-copy">
        <h2>I like the moment an idea <em>becomes real.</em></h2>
        <p>
          For me, tech is a way to create, explore, and solve problems. I enjoy the whole process:
          figuring out what something should do, building it piece by piece, and seeing it come
          together on screen.
        </p>
        <p>
          I’m learning by doing — taking on projects, picking up new tools, and getting a little
          better with each build. This site is one small window into that journey.
        </p>
      </div>
    </section>

    <section class="name-section">
      <div class="name-mark" aria-hidden="true">G<span>.</span></div>
      <div>
        <p class="eyebrow">THE NAME BEHIND THE WORK</p>
        <h2>“Godwill Did It”</h2>
        <p>
          It’s my name, with a little confidence attached. It reminds me to take an idea, put in
          the work, and make something I can proudly say I did. The name is playful; the commitment
          behind it is real.
        </p>
      </div>
    </section>

    <section class="build-section">
      <div class="section-heading">
        <div class="section-label"><span>02</span> WHAT I DO</div>
        <h2>Good ideas deserve <em>good builds.</em></h2>
      </div>
      <div class="discipline-grid">
        <article v-for="(item, index) in disciplines" :key="item.title" class="discipline-card">
          <div class="discipline-topline">
            <span class="discipline-icon" aria-hidden="true">{{ item.icon }}</span>
            <span class="card-index">0{{ index + 1 }}</span>
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </section>

    <section class="skills-section">
      <div class="skills-intro">
        <div class="section-label"><span>03</span> MY TOOLKIT</div>
        <h2>Tools I’m <em>learning with.</em></h2>
        <p>
          A growing toolkit, built one project at a time. These are technologies I’ve used in my
          projects — and I’m always open to learning more.
        </p>
      </div>
      <div class="skill-groups">
        <div v-for="group in skillGroups" :key="group.name" class="skill-group">
          <h3>{{ group.name }}</h3>
          <ul>
            <li v-for="skill in group.skills" :key="skill">{{ skill }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="journey-section">
      <div class="section-heading">
        <div class="section-label"><span>04</span> THE JOURNEY</div>
        <h2>A work in <em>progress.</em></h2>
      </div>
      <ol class="timeline">
        <li v-for="milestone in milestones" :key="milestone.title" class="timeline-item">
          <div class="timeline-date">{{ milestone.date }}</div>
          <div class="timeline-marker" aria-hidden="true"></div>
          <div class="timeline-content">
            <span class="timeline-type">{{ milestone.type }}</span>
            <h3>{{ milestone.title }}</h3>
            <p>{{ milestone.description }}</p>
          </div>
        </li>
      </ol>
    </section>

    <section class="values-section">
      <div class="section-heading">
        <div class="section-label"><span>05</span> HOW I WORK</div>
        <h2>Simple things I <em>believe in.</em></h2>
      </div>
      <div class="values-list">
        <div v-for="(value, index) in values" :key="value.title" class="value-row">
          <span class="value-number">0{{ index + 1 }}</span>
          <h3>{{ value.title }}</h3>
          <p>{{ value.detail }}</p>
        </div>
      </div>
    </section>

    <section class="fun-section">
      <div class="fun-icon" aria-hidden="true">☀</div>
      <div class="fun-copy">
        <div class="section-label"><span>06</span> OUTSIDE THE CODE</div>
        <h2>A little more <em>Godwill.</em></h2>
        <div class="fun-facts">
          <p><span>01</span> I have a creative side too — find me on YouTube as <strong>54 Locks</strong>.</p>
          <p><span>02</span> My favourite kind of progress is an idea that turns into something real.</p>
          <p><span>03</span> I’m always collecting new things to learn and try.</p>
        </div>
      </div>
    </section>

    <section class="cv-section" aria-labelledby="cv-heading">
      <div>
        <p class="eyebrow">A SNAPSHOT OF MY JOURNEY</p>
        <h2 id="cv-heading">My CV is getting ready.</h2>
        <p>I’ll add a downloadable copy here soon.</p>
      </div>
      <button class="cv-button" type="button" disabled>
        Download CV <span aria-hidden="true">↓</span>
      </button>
    </section>

    <footer class="contact-cta">
      <p class="eyebrow">HAVE SOMETHING IN MIND?</p>
      <h2>Let’s work <em>together.</em></h2>
      <p>Got a project, an idea, or just want to say hello? I’d love to hear from you.</p>
      <RouterLink class="contact-button" to="/contact">
        Let’s talk <span aria-hidden="true">↗</span>
      </RouterLink>
    </footer>
  </article>
</template>

<style scoped>
.about-page {
  --ink: #20231f;
  --muted: #696c63;
  --line: #e9e6dd;
  --paper: #fbfaf7;
  --accent: #b05b3d;
  --green: #5a6f5b;

  width: min(100%, 868px);
  margin: 0 auto;
  padding: 8px 0 40px;
  color: var(--ink);
  font-family: Arial, sans-serif;
}

.about-page,
.about-page * {
  box-sizing: border-box;
}

.about-page :is(h1, h2, h3, p, figure) {
  margin: 0;
}

.about-page h1,
.about-page h2 {
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 400;
  letter-spacing: -0.045em;
}

.about-page h2 em,
.about-hero h1 span {
  color: var(--accent);
  font-weight: 400;
}

.about-page section {
  padding: 70px 0;
}

.eyebrow,
.section-label {
  color: var(--muted);
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  line-height: 1.5;
}

.about-hero {
  position: relative;
  display: grid;
  grid-template-columns: 1.08fr 0.82fr;
  gap: 58px;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;
  padding: 56px 60px;
  background: var(--paper);
}

.hero-copy {
  position: relative;
  z-index: 1;
}

.hero-copy .eyebrow {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 22px;
}

.eyebrow-dot,
.portrait-caption-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
}

.about-hero h1 {
  max-width: 450px;
  font-size: clamp(3.35rem, 7vw, 5.25rem);
  line-height: 0.99;
}

.hero-intro {
  max-width: 390px;
  margin-top: 24px !important;
  color: #555950;
  font-size: 0.96rem;
  line-height: 1.8;
}

.hero-note {
  margin-top: 17px !important;
  color: var(--green);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.01em;
}

.text-link {
  display: inline-flex;
  gap: 12px;
  align-items: center;
  margin-top: 29px;
  border-bottom: 1px solid #c9a28e;
  padding-bottom: 5px;
  color: var(--ink);
  font-size: 0.78rem;
  font-weight: 700;
  text-decoration: none;
}

.text-link:hover,
.text-link:focus-visible {
  color: var(--accent);
}

.portrait-card {
  position: relative;
  z-index: 1;
  align-self: center;
  padding: 10px 10px 0;
  background: #fff;
  box-shadow: 0 18px 45px rgb(39 38 31 / 12%);
  transform: rotate(2deg);
}

.portrait-card img {
  display: block;
  width: 100%;
  aspect-ratio: 0.79;
  object-fit: cover;
  object-position: center 38%;
  background: #e9e4d9;
}

.portrait-card figcaption {
  display: flex;
  min-height: 42px;
  gap: 8px;
  align-items: center;
  color: #62645d;
  font-size: 0.52rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.portrait-caption-dot {
  width: 6px;
  height: 6px;
  flex: 0 0 auto;
  background: var(--green);
}

.caption-divider {
  padding: 0 4px;
  color: #c1b9aa;
}

.portrait-stamp {
  position: absolute;
  right: -20px;
  bottom: 54px;
  display: grid;
  width: 48px;
  height: 48px;
  place-content: center;
  border: 1px solid #d7b3a2;
  border-radius: 50%;
  background: #fbf5ee;
  color: var(--accent);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 0.72rem;
  line-height: 0.95;
  text-align: center;
  transform: rotate(-12deg);
}

.hero-spark {
  position: absolute;
  color: #c3ab86;
  font-size: 1.2rem;
}

.hero-spark-one {
  top: 44px;
  right: 40%;
}

.hero-spark-two {
  right: 35px;
  bottom: 48px;
  color: #d9cbb3;
  font-size: 0.9rem;
}

.section-label {
  display: flex;
  gap: 12px;
  align-items: center;
}

.section-label span {
  color: var(--accent);
  font-variant-numeric: tabular-nums;
}

.story-section {
  display: grid;
  grid-template-columns: 0.65fr 1.35fr;
  gap: 38px;
  border-bottom: 1px solid var(--line);
}

.story-copy {
  max-width: 570px;
}

.story-copy h2,
.section-heading h2,
.skills-intro h2,
.fun-copy h2 {
  font-size: clamp(2rem, 4.5vw, 3.1rem);
  line-height: 1.12;
}

.story-copy p,
.skills-intro > p {
  margin-top: 18px !important;
  color: var(--muted);
  font-size: 0.91rem;
  line-height: 1.85;
}

.story-copy p + p {
  margin-top: 12px !important;
}

.name-section {
  display: grid;
  grid-template-columns: 94px 1fr;
  gap: 30px;
  align-items: center;
  border-bottom: 1px solid var(--line);
  background: #f8f5ee;
  padding-right: 50px !important;
  padding-left: 50px !important;
}

.name-mark {
  display: grid;
  width: 75px;
  height: 75px;
  place-content: center;
  border: 1px solid #dfcbb9;
  border-radius: 50%;
  color: var(--accent);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 2.6rem;
}

.name-mark span {
  color: var(--green);
}

.name-section h2 {
  margin-top: 8px !important;
  font-size: 2.1rem;
}

.name-section > div > p:last-child {
  max-width: 640px;
  margin-top: 10px !important;
  color: var(--muted);
  font-size: 0.87rem;
  line-height: 1.8;
}

.build-section {
  border-bottom: 1px solid var(--line);
}

.section-heading {
  display: flex;
  justify-content: space-between;
  gap: 22px;
  align-items: end;
  margin-bottom: 30px;
}

.section-heading .section-label {
  align-self: start;
}

.section-heading h2 {
  max-width: 470px;
  text-align: right;
}

.discipline-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.discipline-card {
  min-height: 166px;
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 18px 16px;
  background: #fff;
  transition: border-color 180ms ease, transform 180ms ease;
}

.discipline-card:hover {
  transform: translateY(-3px);
  border-color: #c9a28e;
}

.discipline-topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.discipline-icon {
  display: grid;
  width: 34px;
  height: 34px;
  place-content: center;
  border-radius: 50%;
  background: #f6efe8;
  color: var(--accent);
  font-size: 1rem;
}

.card-index {
  color: #aaa99f;
  font-size: 0.62rem;
  font-variant-numeric: tabular-nums;
}

.discipline-card h3 {
  margin-top: 19px !important;
  font-size: 0.88rem;
}

.discipline-card p {
  margin-top: 7px !important;
  color: var(--muted);
  font-size: 0.75rem;
  line-height: 1.6;
}

.skills-section {
  display: grid;
  grid-template-columns: 0.78fr 1.22fr;
  gap: 55px;
  border-bottom: 1px solid var(--line);
  background: var(--paper);
  padding-right: 42px !important;
  padding-left: 42px !important;
}

.skills-intro h2 {
  margin-top: 14px !important;
  font-size: 2.45rem;
}

.skills-intro > p {
  font-size: 0.82rem;
}

.skill-group + .skill-group {
  margin-top: 22px;
}

.skill-group h3 {
  margin-bottom: 10px !important;
  color: var(--muted);
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.skill-group ul {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.skill-group li {
  border: 1px solid #e3e0d7;
  border-radius: 99px;
  padding: 7px 11px;
  background: #fff;
  color: #44483f;
  font-size: 0.75rem;
}

.journey-section {
  border-bottom: 1px solid var(--line);
}

.timeline {
  margin: 0;
  padding: 0;
  list-style: none;
}

.timeline-item {
  display: grid;
  grid-template-columns: 90px 18px 1fr;
  gap: 19px;
  min-height: 116px;
}

.timeline-date {
  padding-top: 3px;
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.timeline-marker {
  position: relative;
  display: flex;
  justify-content: center;
}

.timeline-marker::before {
  position: absolute;
  top: 4px;
  width: 9px;
  height: 9px;
  border: 2px solid var(--accent);
  border-radius: 50%;
  background: #fff;
  content: '';
}

.timeline-item:not(:last-child) .timeline-marker::after {
  position: absolute;
  top: 18px;
  bottom: 0;
  width: 1px;
  background: var(--line);
  content: '';
}

.timeline-content {
  padding-bottom: 27px;
}

.timeline-type {
  color: var(--muted);
  font-size: 0.63rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.timeline-content h3 {
  margin-top: 7px !important;
  font-size: 1rem;
}

.timeline-content p {
  margin-top: 6px !important;
  color: var(--muted);
  font-size: 0.81rem;
  line-height: 1.65;
}

.values-section {
  border-bottom: 1px solid var(--line);
}

.values-list {
  border-top: 1px solid var(--line);
}

.value-row {
  display: grid;
  grid-template-columns: 45px 1fr 1.2fr;
  gap: 17px;
  align-items: baseline;
  border-bottom: 1px solid var(--line);
  padding: 17px 0;
}

.value-row:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.value-number {
  color: var(--accent);
  font-size: 0.65rem;
  font-variant-numeric: tabular-nums;
}

.value-row h3 {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.15rem;
  font-weight: 400;
}

.value-row p {
  color: var(--muted);
  font-size: 0.78rem;
  line-height: 1.6;
}

.fun-section {
  display: grid;
  grid-template-columns: 75px 1fr;
  gap: 25px;
  border-radius: 4px;
  background: #f4f3ec;
  padding: 42px !important;
}

.fun-icon {
  display: grid;
  width: 57px;
  height: 57px;
  place-content: center;
  border-radius: 50%;
  background: #e6e6d9;
  color: #77805a;
  font-size: 1.5rem;
}

.fun-copy h2 {
  margin-top: 10px !important;
  font-size: 2.5rem;
}

.fun-facts {
  display: grid;
  gap: 11px;
  margin-top: 22px;
}

.fun-facts p {
  color: #54574e;
  font-size: 0.81rem;
  line-height: 1.6;
}

.fun-facts p > span {
  margin-right: 9px;
  color: var(--accent);
  font-size: 0.65rem;
}

.fun-facts strong {
  color: var(--ink);
}

.cv-section {
  display: flex;
  justify-content: space-between;
  gap: 25px;
  align-items: center;
  border-bottom: 1px solid var(--line);
}

.cv-section h2 {
  margin-top: 9px !important;
  font-size: 2rem;
}

.cv-section > div > p:last-child {
  margin-top: 8px !important;
  color: var(--muted);
  font-size: 0.81rem;
}

.cv-button {
  display: inline-flex;
  flex: 0 0 auto;
  gap: 20px;
  align-items: center;
  border: 1px solid #d7d4cb;
  border-radius: 2px;
  padding: 13px 16px;
  background: #efeee9;
  color: #777970;
  font: inherit;
  font-size: 0.77rem;
  font-weight: 700;
  cursor: not-allowed;
}

.contact-cta {
  padding: 66px 30px 52px !important;
  text-align: center;
}

.contact-cta .eyebrow {
  color: var(--accent);
}

.contact-cta h2 {
  margin-top: 12px !important;
  font-size: clamp(2.7rem, 7vw, 4.35rem);
}

.contact-cta > p:not(.eyebrow) {
  margin-top: 12px !important;
  color: var(--muted);
  font-size: 0.87rem;
  line-height: 1.7;
}

.contact-button {
  display: inline-flex;
  gap: 22px;
  align-items: center;
  margin-top: 24px;
  border-radius: 2px;
  padding: 14px 20px;
  background: var(--ink);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  text-decoration: none;
  transition: background 180ms ease, transform 180ms ease;
}

.contact-button:hover,
.contact-button:focus-visible {
  transform: translateY(-2px);
  background: var(--accent);
}

@media (max-width: 760px) {
  .about-page {
    width: 100%;
  }

  .about-page section {
    padding: 54px 0;
  }

  .about-hero {
    grid-template-columns: 1fr 0.72fr;
    gap: 28px;
    padding: 40px 32px;
  }

  .hero-spark-one {
    right: 36%;
  }

  .story-section {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .name-section {
    grid-template-columns: 68px 1fr;
    gap: 18px;
    padding-right: 26px !important;
    padding-left: 26px !important;
  }

  .name-mark {
    width: 62px;
    height: 62px;
    font-size: 2.2rem;
  }

  .discipline-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .skills-section {
    grid-template-columns: 1fr;
    gap: 29px;
    padding-right: 30px !important;
    padding-left: 30px !important;
  }
}

@media (max-width: 520px) {
  .about-page {
    padding-top: 0;
  }

  .about-page section {
    padding: 43px 0;
  }

  .about-hero {
    grid-template-columns: 1fr 116px;
    gap: 18px;
    border-radius: 0;
    padding: 34px 20px;
  }

  .hero-copy .eyebrow {
    gap: 7px;
    margin-bottom: 16px;
    font-size: 0.56rem;
    letter-spacing: 0.12em;
  }

  .about-hero h1 {
    font-size: clamp(2.65rem, 13vw, 3.6rem);
  }

  .hero-intro {
    margin-top: 16px !important;
    font-size: 0.82rem;
    line-height: 1.7;
  }

  .hero-note {
    font-size: 0.68rem;
    line-height: 1.6;
  }

  .text-link {
    margin-top: 19px;
    font-size: 0.7rem;
  }

  .portrait-card {
    padding: 6px 6px 0;
  }

  .portrait-card figcaption {
    min-height: 29px;
    gap: 5px;
    font-size: 0.37rem;
    letter-spacing: 0.05em;
  }

  .portrait-caption-dot {
    width: 5px;
    height: 5px;
  }

  .portrait-stamp {
    right: -12px;
    bottom: 36px;
    width: 35px;
    height: 35px;
    font-size: 0.58rem;
  }

  .hero-spark-one {
    top: 19px;
    right: 39%;
    font-size: 0.9rem;
  }

  .hero-spark-two {
    right: 18px;
    bottom: 20px;
  }

  .story-section {
    gap: 20px;
  }

  .about-page > section:not(.about-hero) {
    margin-right: 20px;
    margin-left: 20px;
  }

  .about-page > .name-section,
  .about-page > .skills-section,
  .about-page > .fun-section {
    width: calc(100% - 40px);
    margin-right: 0;
    margin-left: 0;
  }

  .about-page > .name-section {
    grid-template-columns: 48px 1fr;
    gap: 15px;
    padding-right: 16px !important;
    padding-left: 16px !important;
  }

  .name-mark {
    width: 46px;
    height: 46px;
    font-size: 1.75rem;
  }

  .name-section h2 {
    font-size: 1.75rem;
  }

  .name-section > div > p:last-child {
    font-size: 0.79rem;
  }

  .section-heading {
    display: grid;
    gap: 14px;
    margin-bottom: 23px;
  }

  .section-heading h2 {
    text-align: left;
  }

  .discipline-grid {
    gap: 9px;
  }

  .discipline-card {
    min-height: 155px;
    padding: 14px 12px;
  }

  .discipline-card h3 {
    margin-top: 14px !important;
    font-size: 0.82rem;
  }

  .discipline-card p {
    font-size: 0.7rem;
  }

  .about-page > .skills-section {
    gap: 23px;
    padding: 30px 22px !important;
  }

  .skills-intro h2 {
    font-size: 2.15rem;
  }

  .skill-group li {
    padding: 7px 9px;
    font-size: 0.7rem;
  }

  .timeline-item {
    grid-template-columns: 48px 14px 1fr;
    gap: 10px;
  }

  .timeline-content h3 {
    font-size: 0.93rem;
  }

  .timeline-content p {
    font-size: 0.76rem;
  }

  .value-row {
    grid-template-columns: 28px 1fr;
    gap: 8px 12px;
  }

  .value-row p {
    grid-column: 2;
  }

  .about-page > .fun-section {
    grid-template-columns: 1fr;
    gap: 17px;
    padding: 27px 22px !important;
  }

  .fun-icon {
    width: 44px;
    height: 44px;
    font-size: 1.2rem;
  }

  .fun-copy h2 {
    font-size: 2.1rem;
  }

  .cv-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 19px;
  }

  .cv-section h2 {
    font-size: 1.75rem;
  }

  .contact-cta {
    padding: 48px 12px 28px !important;
    text-align: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
