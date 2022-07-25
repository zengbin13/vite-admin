declare type Recordable<T = any> = Record<string, T>

declare interface ViteEnv {
  VITE_PORT: number
  VITE_GLOB_APP_TITLE: string
  VITE_GLOB_APP_SHORT_NAME: string
}
