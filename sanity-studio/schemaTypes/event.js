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
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => {
          if (!doc.title || !doc.date) return doc.title || ''
          const d = new Date(doc.date)
          const month = String(d.getMonth() + 1).padStart(2, '0')
          const day = String(d.getDate()).padStart(2, '0')
          return `${doc.title}-${month}=${day}`
        },
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.required().custom(async (slug, context) => {
          const {getClient} = context
          const client = getClient({apiVersion: '2023-01-01'})
          const existing = await client.fetch(
            `*[_type == "event" && slug.current == $slug && _id != $id][0]`,
            {slug: slug.current, id: context.document._id},
          )
          return existing ? 'Slug must be unique' : true
        }),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'de',
          title: 'German',
          type: 'array',
          of: [{type: 'block'}],
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
          {title: 'Literature', value: 'literature'},
          {title: 'Workshops', value: 'workshops'},
          {title: 'Spoken Word', value: 'spoken-word'},
          {title: 'Other', value: 'other'},
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
      type: 'string',
      hidden: ({parent}) => parent?.price !== 'paid',
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
      title: 'Tickets',
      type: 'url',
      message: 'If left blank will display "Pay on Entry"',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      date: 'date',
      image: 'image',
      highlighted: 'highlighted',
    },
    prepare({name, date, image, highlighted}) {
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
        subtitle: `${dateFormatted} ${highlighted ? '⭐ Highlighted' : ''}`,
        media: image || CalendarIcon,
      }
    },
  },
})
