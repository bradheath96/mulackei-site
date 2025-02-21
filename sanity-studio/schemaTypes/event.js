import {defineField, defineType} from 'sanity'
import {CalendarIcon} from '@sanity/icons'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  icon: CalendarIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required().error(`Name of event required`),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required().error(`Required to generate a page on the website`),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (rule) => rule.required().error(`Date required`),
    }),
    defineField({
      name: 'image',
      type: 'image',
      validation: (rule) => rule.required().error(`Image required`),
    }),
    defineField({
      name: 'type',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          {title: 'Music Gig', value: 'music'},
          {title: 'Art Exhibition', value: 'art'},
          {title: 'Film Screening', value: 'film'},
          {title: 'Chess Night', value: 'chess'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'price',
      title: 'Event Price',
      type: 'string',
      options: {
        list: [
          {title: 'Free In', value: 'free'},
          {title: 'Paid (Enter Price)', value: 'paid'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required().error(`Event price is required`),
    }),
    defineField({
      name: 'priceAmount',
      title: 'Price Amount (€)',
      type: 'string', // Changed from number to string to allow ranges
      hidden: ({parent}) => parent?.price !== 'paid', // Only show if "Paid" is selected
      validation: (rule) =>
        rule.custom((value, context) => {
          if (context.parent?.price === 'paid') {
            if (!value || !/^\d+(-\d+)?$/.test(value)) {
              return 'Enter a valid price (e.g., "5" or "5-10")'
            }
          }
          return true
        }),
    }),
    defineField({
      name: 'tickets',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      date: 'date',
      image: 'image',
    },
    prepare({name, date, image}) {
      const nameFormatted = name || 'Untitled event'
      const dateFormatted = date
        ? new Date(date).toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          })
        : 'No date'

      return {
        title: nameFormatted,
        subtitle: dateFormatted,
        media: image || CalendarIcon,
      }
    },
  },
})
