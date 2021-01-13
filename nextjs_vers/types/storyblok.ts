export interface storyblokImage {
  alt: string
  copyright: string
  fieldtype: string
  filename: null | string
  id: number
  name: string
}

export interface storyblokStory {
  content: storyblokComponent
  created_at: string
  default_full_slug: string
  first_published_at: string
  full_slug: string
  group_id: string
  id: number
  is_startpage: boolean
  lang: string
  meta_data: any
  name: string
  parent_id: number
  path: any
  position: number
  published_at: string
  release_id: string
  slug: string
  sort_by_date: string
  tag_list: any
  translated_slugs: any
  uuid: string
}

export interface storyblokComponent {
  _uid: string
  _editable: string
  component: string
  [x: string]: any 
}

export interface storyblokColor {
  color: string
  plugin: string
  _uid: string
}

export interface storyblokLink {
  cached_url: string
  fieldtype: string
  id: string
  linktype: string
  url: string
}

export interface storyblokButtonLinkComponent extends storyblokComponent {
  button_link: storyblokLink
  button_text: string
}
