import {CalendarIcon, ImageIcon} from '@sanity/icons'

export const structure = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.listItem()
        .title('Upcoming Events')
        .schemaType('event')
        .icon(CalendarIcon)
        .child(S.documentList().title('Upcoming Events').filter('date >= now()')),
      S.listItem()
        .title('Past Events')
        .schemaType('event')
        .icon(CalendarIcon)
        .child(S.documentList().title('Past Events').filter('date < now()')),
      S.divider(),
      S.listItem()
        .title('Venue Images')
        .schemaType('venue')
        .icon(ImageIcon)
        .child(S.documentTypeList('venue').title('Venue Images')),
    ])
