import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            resolvers: [ElementPlusResolver()]
        })
    ],
    server: {
        host: '0.0.0.0',
        proxy: {
            // 代理标识
            '/api': {
                // 实际请求地址
                target: 'http://xxxx:xxxx:3007/api',
                // 开启跨域
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '') // 不可以省略rewrite
            }
        }
    },
    resolve: {
        // 配置路径别名
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
})
