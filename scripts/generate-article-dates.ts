import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const articlesDir = path.join(process.cwd(), 'lib/content/articles')
const outputPath = path.join(process.cwd(), 'public/data/article-dates.json')

const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.tsx'))

const dates: Record<string, { published: string; modified: string }> = {}

for (const file of files) {
  const slug = file.replace('.tsx', '')
  const filePath = `lib/content/articles/${file}`

  try {
    const firstCommit = execSync(
      `git log --follow --format="%aI" --diff-filter=A -- "${filePath}"`,
      { encoding: 'utf-8' }
    ).trim().split('\n').pop()

    const lastCommit = execSync(
      `git log -1 --format="%aI" -- "${filePath}"`,
      { encoding: 'utf-8' }
    ).trim()

    if (firstCommit) {
      dates[slug] = {
        published: firstCommit.split('T')[0],
        modified: lastCommit ? lastCommit.split('T')[0] : firstCommit.split('T')[0],
      }
    }
  } catch {
    // File not yet committed — skip
  }
}

fs.writeFileSync(outputPath, JSON.stringify(dates, null, 2))
console.log(`Generated article dates for ${Object.keys(dates).length} articles → ${outputPath}`)
