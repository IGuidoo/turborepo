// tailwind.config.js
import _ from 'lodash'
import baseConfig from '../../packages/tailwind-config/tailwind.config'

// Use export default instead of module.exports
export default _.merge(baseConfig, {
  theme: {
    extend: {
      colors: {
        'custom-color-2': '#FF0000'
      }
    }
  },
  plugins: []
})