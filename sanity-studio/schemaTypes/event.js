import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'type',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          {title: 'Music Gig', value: 'music'},
          {title: 'Art Exhibition', value: 'art exhibition'},
          {title: 'Film Screening', value: 'film screening'},
          {title: 'Chess Night', value: 'chess'},
        ],
      },
    }),
    defineField({
      name: 'tickets',
      type: 'url',
    }),
  ],
})
