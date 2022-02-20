import { Client, Pagination, PaginationResponse } from '../libs/client';
import { UserGender, UserRole, UserStoryStatus } from '../libs/enums'

export interface UserData {
  id: number
  username: string
  role: UserRole
  avatar: string
  gender: UserGender
  has_anilist?: boolean
  has_mal?: boolean
}

export interface UserQuery {
  username?: string
  email?: string
}

export interface UpdateUserData {
  id: number
  password?: string
  gender?: UserGender
  localization?: string
  anilist_id?: number
  anilist_token?: string
}

export interface UserStory {
  id: number
  user_id: number
  anime_id: number
  status: UserStoryStatus
  current_episode: number
  current_episode_ticks: number
}

export interface UserStoryQuery {
  anime_id?: number
  user_id: number | string
  status?: UserStoryStatus
  synced?: boolean
}

export interface CreateUserStory {
  user_id: number | string
  anime_id: number | string
  status: UserStoryStatus
  current_episode?: number
  current_episode_ticks?: number
}

export interface UpdateUserStory extends CreateUserStory {
  id: number | string
}

export declare class User extends Client {
  getById(id: number | string, version?: number): Promise<UserData>
  search(query?: UserQuery, pagination?: Pagination, version?: number): Promise<PaginationResponse<UserData>>
  updateUser(data: UpdateUserData, version?: number): Promise<UserData>
  deleteUser(id: number | string, version?: number): Promise<void>

  // User story
  getStoryById(id: string | number, version?: number): Promise<UserStory>
  searchStory(query: UserStoryQuery, version?: number): Promise<UserStory[]>
  createStory(data: CreateUserStory, version?: number): Promise<UserStory>
  updateStory(data: UpdateUserStory, version?: number): Promise<UserStory>
  deleteStory(id: number | string, version?: number): Promise<void>
}
