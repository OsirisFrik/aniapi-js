import { Client, Pagination, PaginationResponse } from '../libs/client'

export interface EpisodeData {
  id: number
  anime_id: number
  number: number
  title: string
  video: string
  video_headers?: string[]
  locale: string
  quality: number | null
  format: string
  is_dub: boolean
  video_hander?: {
    host: string
    referer: string
  }
}

export interface EpisodeQuery {
  anime_id?: string | number
  number?: string | number
  is_dub?: boolean
  locale?: string
}

export declare class Episode extends Client {
  getById(id: number | string, version?: number): Promise<EpisodeData>
  search(query: EpisodeQuery, pagination?: Pagination, version?: number): Promise<PaginationResponse<EpisodeData>>
}
