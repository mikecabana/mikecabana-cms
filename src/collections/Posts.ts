import { formatSlug } from '@/utils'
import { isAdminOrEditor, isAdminOrSelf, isLoggedIn } from '@/utils/access'
import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    livePreview: {
      url: ({ req, data }) => {
        return `${req.protocol}//${req.host}/posts/${data.slug}`
      },
    },
    // preview:
  },
  access: {
    create: isLoggedIn,
    read: () => true,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  versions: {
    drafts: {
      autosave: {
        interval: 375,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      index: true,
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'body',
      label: 'Body',
      type: 'richText',
      required: true,
    },
  ],
}
