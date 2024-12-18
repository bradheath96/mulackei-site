import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import {structure} from './structure/index'

export default defineConfig({
  name: 'default',
  title: 'mulackei-studio',

  projectId: '1e153wmz',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
