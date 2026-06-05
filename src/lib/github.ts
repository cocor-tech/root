const GITHUB_TOKEN = process.env.GITHUB_TOKEN || ""
const GITHUB_REPO_OWNER = process.env.GITHUB_REPO_OWNER || ""
const GITHUB_REPO_NAME = process.env.GITHUB_REPO_NAME || ""
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "main"

const BASE_URL = `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/contents`

export function isGitHubMode(): boolean {
  return !!GITHUB_TOKEN && !!GITHUB_REPO_OWNER && !!GITHUB_REPO_NAME
}

interface GitHubFileResponse {
  content: string
  sha: string
  encoding: string
}

async function getFileSha(path: string): Promise<string | null> {
  const url = `${BASE_URL}/${path}?ref=${GITHUB_BRANCH}`
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
    },
  })
  if (!res.ok) return null
  const data: GitHubFileResponse = await res.json()
  return data.sha
}

export async function githubCommitFile(
  path: string,
  content: string,
  message: string
): Promise<boolean> {
  const existingSha = await getFileSha(path)
  const encoded = Buffer.from(content, "utf-8").toString("base64")

  const body: Record<string, unknown> = {
    message,
    content: encoded,
    branch: GITHUB_BRANCH,
  }
  if (existingSha) body.sha = existingSha

  const url = `${BASE_URL}/${path}`
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })

  return res.ok
}

export async function githubDeleteFile(
  path: string,
  message: string
): Promise<boolean> {
  const sha = await getFileSha(path)
  if (!sha) return false

  const url = `${BASE_URL}/${path}`
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      sha,
      branch: GITHUB_BRANCH,
    }),
  })

  return res.ok
}
