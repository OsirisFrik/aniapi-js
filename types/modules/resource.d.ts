import { Client } from '../libs/client'

declare class Resouce extends Client {
  resources(version?: number): Promise<string>
  generes(resouceVersion?: string, version?: number): Promise<{ generes: string[] }>
  locations(resouceVersion?: string, version?: number): Promise<{
    locations: { i18n: string, label: string }[]
  }>
}
