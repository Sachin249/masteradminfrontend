// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'


// export default defineConfig({
//   plugins: [react()],
// })

import macrosPlugin from "vite-plugin-babel-macros"

export default {
	// ...
	plugins: [
		// ...
		macrosPlugin(),
	],
}