import { isAdminOrEditor, isAnonymous } from '@/lib/access'
import type { CollectionConfig } from 'payload'

export const Guests: CollectionConfig = {
  slug: 'guests',
  access: {
    create: isAnonymous,
    read: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    {
      name: 'message',
      type: 'text',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: false,
    },
    {
      name: 'email',
      type: 'email',
      required: false,
    },
    {
      name: 'approved',
      type: 'checkbox',
      required: true,
      defaultValue: false,
    },
  ],
}
