import {defineType, defineField} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export const venueType = defineType({
  name: 'venue',
  title: 'Venue Images',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().error('Title is required'),
    }),
    defineField({
      name: 'images',
      title: 'Venue Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
      options: {layout: 'grid'}, // Displays images in a grid layout
      validation: (rule) => rule.min(1).error('At least one image is required'),
    }),
  ],
})
