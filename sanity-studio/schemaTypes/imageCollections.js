import {defineType, defineField} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export const imageCollectionType = defineType({
  name: 'imageCollection',
  title: 'Image Collections',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Collection Title',
      type: 'string',
      validation: (rule) => rule.required().error('Title is required'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Enter any category name (e.g., venue, team, gallery)',
      validation: (rule) => rule.required().error('Category is required'),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Alternative text for accessibility and SEO',
            },
          ],
        },
      ],
      options: {layout: 'grid'},
      validation: (rule) => rule.min(1).error('At least one image is required'),
    }),
  ],
})
