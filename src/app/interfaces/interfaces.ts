export interface Card {
  id?: string,
  title: string,
  description: string,
  status: boolean
}

export interface ResponseServerCreate {
  name: string
}

export interface ResponseServerGet {
  [propName: string]: Card
}

export interface ResponseServerStatus {
  status: boolean
}
