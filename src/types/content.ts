export interface ContentMeta {
  title: string
  description: string
  order: number
  category?: string
  author?: string
  published?: string
  image?: string
  slug: string
}

export interface ContentDoc {
  meta: ContentMeta
  content: string
}
