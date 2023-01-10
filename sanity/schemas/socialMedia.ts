import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'socialMedia',
  title: 'Social Media',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Social Media platform',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
    }),
  ],
})
