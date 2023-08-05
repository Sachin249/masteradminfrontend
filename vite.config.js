import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

plugins: [
  // For all styled components:
  // create classnames from fileName and displayName in development
  react({
    babel: {
      presets: ['@babel/preset-typescript'],
      plugins: [
        '@babel/plugin-transform-typescript',
        [
          'babel-plugin-styled-components',
          {
            ssr: false,
            pure: true,
            displayName: true,
            fileName: false,
          },
        ],
      ],
    },
  }),
];