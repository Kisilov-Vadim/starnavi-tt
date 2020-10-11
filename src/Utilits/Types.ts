export type TDefaultSettings = {
  key: number
  value: string
  text: string
  field: number
  delay: number
  selected?: boolean
}

export type TWinners = {
  name: string
  date: string
}

export type TPlayerState = {
  name: string
  game_settings: TDefaultSettings
}

export type TMessageState = {
  message: string
  color: string
}

export type TStoreState = {
  computer: number
  player: number
}