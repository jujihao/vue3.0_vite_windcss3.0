import { defineConfig } from 'windicss/helpers'

const colors = require('windicss/colors')
const typography = require('windicss/plugin/typography')

export default defineConfig({
    extract: {
        include: ['./**/*.html']
    },
    safelist: ['prose', 'prose-sm', 'm-auto'],
    plugins: [typography],
    theme: {
        extend: {
            colors: {}
        }
    }
})
