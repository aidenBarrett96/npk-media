export interface IBlok {
  component: string
  _uid: string
  [x: string]: any
}

export interface IStoryblokComponent {
  blok: IBlok
}
