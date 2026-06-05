export function mdToHtml(md: string): string {
  let html = md

  html = html.replace(
    /```(\w*)\n([\s\S]*?)```/g,
    '<pre class="rounded-xl p-4 overflow-x-auto my-4 text-sm font-mono bg-surface border border-default"><code>$2</code></pre>'
  )

  html = html.replace(
    /`([^`]+)`/g,
    '<code class="bg-surface rounded-md px-1.5 py-0.5 text-sm font-mono text-primary">$1</code>'
  )

  html = html.replace(
    /\|(.+)\|\n\|[-:\s|]+\|\n((?:\|.+\|\n?)*)/g,
    (_, header: string, body: string) => {
      const hCells = header
        .split("|")
        .filter((c: string) => c.trim())
        .map((c: string) => `<th class="border border-input px-4 py-2 text-left text-sm font-semibold text-primary">${c.trim()}</th>`)
        .join("")
      const rows = body
        .trim()
        .split("\n")
        .map((row: string) => {
          const cells = row
            .split("|")
            .filter((c: string) => c.trim())
            .map((c: string) => `<td class="border border-input px-4 py-2 text-sm text-primary/70">${c.trim()}</td>`)
            .join("")
          return `<tr>${cells}</tr>`
        })
        .join("")
      return `<div class="overflow-x-auto my-6"><table class="w-full border border-input rounded-xl overflow-hidden">${hCells}${rows}</table></div>`
    }
  )

  html = html.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-primary">$1</strong>')
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>")

  html = html.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img src="$2" alt="$1" class="rounded-xl my-4 max-w-full" />'
  )

  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-primary hover:text-secondary transition-colors underline underline-offset-4">$1</a>'
  )

  html = html.replace(/^#### (.+)$/gm, '<h4 class="text-base font-semibold mt-8 mb-3 text-primary">$1</h4>')
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold mt-10 mb-4 text-primary">$1</h3>')
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-12 mb-5 text-primary uppercase tracking-[0.1em]">$1</h2>')
  html = html.replace(/^# (.+)$/gm, '<h1 class="text-4xl font-black mt-8 mb-8 text-primary">$1</h1>')

  html = html.replace(/^---$/gm, '<hr class="border-default my-8" />')

  html = html.replace(
    /^> (.+)$/gm,
    '<blockquote class="border-l-2 border-primary/20 pl-4 my-4 text-secondary italic">$1</blockquote>'
  )

  html = html.replace(
    /((?:^\d+\. .+\n?)+)/gm,
    (match: string) => {
      const items = match
        .trim()
        .split("\n")
        .map((l) =>
          `<li class="ml-4 list-decimal text-secondary leading-relaxed pl-1">${l.replace(/^\d+\. /, "")}</li>`
        )
        .join("")
      return `<ol class="space-y-1 my-4">${items}</ol>`
    }
  )

  html = html.replace(
    /((?:^- .+\n?)+)/gm,
    (match: string) => {
      const items = match
        .trim()
        .split("\n")
        .map((l) =>
          `<li class="ml-4 list-disc text-secondary leading-relaxed pl-1">${l.replace(/^- /, "")}</li>`
        )
        .join("")
      return `<ul class="space-y-1 my-4">${items}</ul>`
    }
  )

  const paragraphs = html.split(/\n\n+/).map((p: string) => {
    p = p.trim()
    if (!p) return ""
    if (
      p.startsWith("<h") ||
      p.startsWith("<pre") ||
      p.startsWith("<table") ||
      p.startsWith("<ul") ||
      p.startsWith("<ol") ||
      p.startsWith("<div") ||
      p.startsWith("<blockquote") ||
      p.startsWith("<hr") ||
      p.startsWith("<img")
    ) {
      return p
    }
    return `<p class="text-secondary leading-relaxed mb-4">${p}</p>`
  })

  return paragraphs.join("\n")
}
