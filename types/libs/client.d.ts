import { AxiosInstance } from 'axios'

export interface Pagination {
  locale?: string
  page?: number | string
  per_page?: number | string
  ids?: number[] | string[]
  sort_fields?: string[]
  sort_directions?: number[]
}

export interface PaginationResponse<T> {
  current_page: number
  count: number
  documents: T[]
}


export declare class Client {
  constructor(token: string)

  client: AxiosInstance
}
