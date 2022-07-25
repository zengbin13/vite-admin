import type { ConfigEnv, UserConfigExport } from 'vite'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import { wraperEnv } from './build/utils'

export default ({ mode }: ConfigEnv): UserConfigExport => {
  // Vite加载环境变量方法
  const env = loadEnv(mode, process.cwd())
  const viteEnv = wraperEnv(env)
  const { VITE_PORT } = viteEnv

  //返回vite配置
  return defineConfig({
    plugins: [vue()],
  })
}
