<script setup lang="ts">
import { ref } from 'vue'

const activeContact = ref<string | null>(null)

const contacts = [
  {
    id: 'email',
    label: 'Email',
    detail: 'esgodwll@gmail.com',
    href: 'mailto:esgodwll@gmail.com',
    action: 'Send me an email',
    icon: '@',
    image: '/images/contact-email.jpeg',
    external: false,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    detail: '@54locks',
    href: 'https://www.instagram.com/54locks/',
    action: 'Visit my Instagram',
    icon: '◎',
    image: '/images/twist 1.jpeg',
    external: true,
  },
  {
    id: 'facebook',
    label: 'Facebook',
    detail: 'Godwill',
    href: 'https://www.facebook.com/Godwill',
    action: 'Visit my Facebook',
    icon: 'f',
    image: '/images/facebook.jpeg',
    external: true,
  },
  {
    id: 'phone',
    label: 'Phone',
    detail: '0115197880',
    href: 'tel:0115197880',
    action: 'Call me',
    icon: '☎',
    image: '/images/contact-phone.jpeg',
    external: false,
  },
  {
    id: 'youtube',
    label: 'YouTube',
    detail: '54 Locks',
    href: 'https://youtube.com/@54locks?si=lgLASlpNs-CxbOPi',
    action: 'Visit my YouTube channel',
    icon: '▶',
    image: '/images/contact-youtube.jpeg',
    external: true,
  },
]

function hideUnavailableImage(event: Event) {
  const image = event.currentTarget
  if (image instanceof HTMLImageElement) image.hidden = true
}

function markImageLoaded(event: Event) {
  const image = event.currentTarget
  if (image instanceof HTMLImageElement) {
    image.parentElement?.classList.add('has-image')
  }
}
</script>

<template>
  <section class="contact-page">
    <p class="eyebrow">LET'S CONNECT</p>
    <h1>Find me around the web</h1>
    <p class="contact-intro">Tap or hover over a bubble to see how to reach me.</p>

    <div class="contact-grid">
      <article
        v-for="(contact, index) in contacts"
        :key="contact.id"
        class="contact-card"
        :class="{ 'is-open': activeContact === contact.id }"
        :style="{ '--bubble-delay': `${index * 90}ms` }"
      >
        <button
          class="contact-bubble"
          type="button"
          :aria-expanded="activeContact === contact.id"
          :aria-controls="`contact-details-${contact.id}`"
          @click="activeContact = activeContact === contact.id ? null : contact.id"
        >
          <span class="image-frame" aria-hidden="true">
            <span class="image-fallback">{{ contact.icon }}</span>
            <img
              :src="contact.image"
              alt=""
              @error="hideUnavailableImage"
              @load="markImageLoaded"
            >
          </span>
          <span class="contact-label">{{ contact.label }}</span>
          <span class="bubble-hint" aria-hidden="true">+</span>
        </button>

        <div :id="`contact-details-${contact.id}`" class="contact-details">
          <span class="contact-value">{{ contact.detail }}</span>
          <a
            class="contact-action"
            :href="contact.href"
            :target="contact.external ? '_blank' : undefined"
            :rel="contact.external ? 'noopener noreferrer' : undefined"
          >
            {{ contact.action }} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>
    </div>

    <p class="image-tip">
      Want your own pictures? Add JPEGs to <code>public\images</code> named
      <code>contact-email.jpeg</code>, <code>contact-instagram.jpeg</code>,
      <code>contact-facebook.jpeg</code>, <code>contact-phone.jpeg</code>, and
      <code>contact-youtube.jpeg</code>. The letter icons show until each picture is added.
    </p>
  </section>
</template>

<style scoped>
.contact-page {
  padding: 34px 12px 54px;
  text-align: center;
}

.eyebrow {
  margin: 0 0 8px;
  color: #a34d17;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.2em;
}

.contact-page h1 {
  margin: 0;
  color: #202124;
  font-size: clamp(2rem, 6vw, 3.25rem);
}

.contact-intro {
  margin: 12px 0 34px;
  color: #626875;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 148px), 1fr));
  gap: 20px;
  align-items: start;
  max-width: 820px;
  margin: 0 auto;
}

.contact-card {
  min-width: 0;
  animation: bubble-in 550ms both;
  animation-delay: var(--bubble-delay);
}

.contact-bubble {
  position: relative;
  display: grid;
  justify-items: center;
  gap: 9px;
  width: 100%;
  min-height: 174px;
  border: 1px solid rgb(255 255 255 / 80%);
  border-radius: 32px;
  padding: 18px 12px 16px;
  background: linear-gradient(145deg, #fff, #f3f5f8);
  box-shadow:
    0 12px 26px rgb(34 39 46 / 10%),
    inset 0 2px 4px rgb(255 255 255 / 95%);
  color: #24272d;
  font: inherit;
  cursor: pointer;
  transition:
    transform 220ms ease,
    border-radius 220ms ease,
    box-shadow 220ms ease,
    background 220ms ease;
  -webkit-tap-highlight-color: transparent;
}

.contact-bubble::before,
.contact-bubble::after {
  position: absolute;
  z-index: 0;
  border-radius: 50%;
  background: rgb(255 255 255 / 75%);
  content: '';
  pointer-events: none;
}

.contact-bubble::before {
  top: 12px;
  right: 21px;
  width: 11px;
  height: 11px;
}

.contact-bubble::after {
  top: 30px;
  right: 13px;
  width: 6px;
  height: 6px;
}

.contact-card:nth-child(1) .contact-bubble {
  background: linear-gradient(145deg, #fff7ed, #fed7aa);
}

.contact-card:nth-child(2) .contact-bubble {
  background: linear-gradient(145deg, #fdf2f8, #f5c2e7);
}

.contact-card:nth-child(3) .contact-bubble {
  background: linear-gradient(145deg, #eff6ff, #bfdbfe);
}

.contact-card:nth-child(4) .contact-bubble {
  background: linear-gradient(145deg, #ecfdf5, #bbf7d0);
}

.contact-card:nth-child(5) .contact-bubble {
  background: linear-gradient(145deg, #fff1f2, #fecdd3);
}

.contact-bubble:hover,
.contact-bubble:focus-visible,
.contact-card.is-open .contact-bubble {
  transform: translateY(-7px) scale(1.035);
  border-radius: 38px 26px 36px 25px;
  box-shadow:
    0 20px 35px rgb(34 39 46 / 17%),
    inset 0 2px 4px rgb(255 255 255 / 95%);
  outline: none;
}

.contact-bubble:active {
  transform: translateY(-2px) scale(0.98);
}

.image-frame {
  position: relative;
  display: grid;
  width: 86px;
  height: 86px;
  place-items: center;
  overflow: hidden;
  border: 3px solid rgb(255 255 255 / 90%);
  border-radius: 50%;
  background: rgb(255 255 255 / 62%);
  box-shadow: 0 5px 13px rgb(40 44 52 / 13%);
}

.image-fallback {
  color: #373b43;
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
}

.image-frame img {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;
}

.image-frame img[hidden] {
  display: none;
}

.image-frame.has-image .image-fallback {
  display: none;
}

.contact-label {
  font-size: 1rem;
  font-weight: 750;
}

.bubble-hint {
  position: absolute;
  right: 13px;
  bottom: 11px;
  color: rgb(36 39 45 / 58%);
  font-size: 1.15rem;
}

.is-open .bubble-hint {
  transform: rotate(45deg);
}

.contact-details {
  display: grid;
  justify-items: center;
  gap: 8px;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transform: translateY(-7px);
  transition:
    max-height 260ms ease,
    opacity 200ms ease,
    transform 200ms ease,
    padding 200ms ease;
}

.contact-card:hover .contact-details,
.contact-card:focus-within .contact-details,
.contact-card.is-open .contact-details {
  max-height: 120px;
  padding: 12px 4px 2px;
  opacity: 1;
  transform: translateY(0);
}

.contact-value {
  overflow-wrap: anywhere;
  color: #4b515d;
  font-size: 0.9rem;
}

.contact-action {
  border-radius: 999px;
  padding: 8px 12px;
  background: #292d33;
  color: white;
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration: none;
  transition: background 180ms ease;
}

.contact-action:hover,
.contact-action:focus-visible {
  background: #a34d17;
}

.image-tip {
  max-width: 700px;
  margin: 38px auto 0;
  color: #737986;
  font-size: 0.85rem;
  line-height: 1.7;
}

.image-tip code {
  border-radius: 4px;
  padding: 2px 5px;
  background: #f0f1f3;
  color: #343943;
  overflow-wrap: anywhere;
}

@keyframes bubble-in {
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
