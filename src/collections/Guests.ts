import { isAdminOrEditor, isAnonymous } from '@/lib/access'
import type { CollectionAfterChangeHook, CollectionConfig } from 'payload'

const afterChangeHook: CollectionAfterChangeHook = async ({ doc, operation, req }) => {
  //we only want to handle "create operations".
  if (operation !== 'create') {
    return
  }

  const { payload } = req

  const { message, name, email, createdAt } = doc

  payload.sendEmail({
    from: `"${name}" <${email}>`, // sender address
    to: 'payload@mikecabana.com', // list of receivers
    subject: '👋🏻 Guestbook signed', // Subject line
    text: `${createdAt} | ${name} | ${message}`, // plain text body
  })
}

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
  hooks: {
    afterChange: [afterChangeHook],
  },
}
