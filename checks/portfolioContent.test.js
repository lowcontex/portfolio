import { readFile } from 'node:fs/promises'
import { test } from 'node:test'
import assert from 'node:assert/strict'

async function readSourceFile(path) {
  return readFile(new URL(`../${path}`, import.meta.url), 'utf8')
}

test('portfolio data contains grounded student profile content', async () => {
  const content = await readSourceFile('website/content/portfolioContent.js')

  assert.match(content, /Michael Josh Rodriguez/)
  assert.match(content, /4th-Year BSIT Student \| IT Support \| AI-Assisted Web Projects/)
  assert.match(content, /Windows PC Troubleshooting/)
  assert.match(content, /AI-Assisted Development Workflow/)
  assert.match(content, /support-first mindset/)
  assert.match(content, /Build \+ test/)
  assert.match(content, /Solo Capstone Project/)
  assert.match(content, /Personal IT Support Experience/)
  assert.doesNotMatch(content, /\b(expert|senior|architect)\b/i)
})

test('hero presents quick hiring signals without a generic template card', async () => {
  const component = await readSourceFile('website/parts/HomeIntro.jsx')

  assert.match(component, /aria-label="Quick hiring signals"/)
  assert.match(component, /Student workspace summary/)
  assert.match(component, /workflow-strip/)
  assert.doesNotMatch(component, /mini-terminal/)
})

test('projects section uses an accessible infinite carousel', async () => {
  const component = await readSourceFile('website/parts/Projects.jsx')
  const styles = await readSourceFile('website/portfolio.css')

  assert.match(component, /aria-label="Portfolio projects"/)
  assert.match(component, /duplicatedProjects/)
  assert.match(styles, /@keyframes project-scroll/)
  assert.match(styles, /\.projects-track:hover/)
  assert.match(styles, /animation-play-state: paused/)
})
