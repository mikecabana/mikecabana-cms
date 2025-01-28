import { Access, FieldAccess } from 'payload'

// type AccessHook<T = unknown> = (args: AccessArgs<T>) => AccessResult | Promise<AccessResult>

export const isAdmin: Access = ({ req: { user } }) => {
  // Return true or false based on if the user has an admin role
  return Boolean(user?.roles?.includes('admin'))
}

export const isAdminFieldLevel: FieldAccess = ({ req: { user } }) => {
  // Return true or false based on if the user has an admin role
  return Boolean(user?.roles?.includes('admin'))
}

export const isAdminOrSelf: Access = ({ req: { user } }) => {
  // Need to be logged in
  if (user) {
    // If user has role of 'admin'
    if (user.roles?.includes('admin')) {
      return true
    }

    // If any other type of user, only provide access to themselves
    return {
      id: {
        equals: user.id,
      },
    }
  }

  // Reject everyone else
  return false
}

export const isLoggedIn: Access = ({ req: { user } }) => {
  // Return true if user is logged in, false if not
  return Boolean(user)
}

export const isAdminOrEditor: Access = ({ req: { user } }) => {
  if (user) {
    // If user has role of 'admin'
    if (user.roles?.includes('admin')) {
      return true
    }

    // If user has role of 'admin'
    if (user.roles?.includes('editor')) {
      return true
    }
  }

  // Reject everyone else
  return false
}

export const isAnonymous: Access = ({ req: { user } }) => {
  // Return true if user is logged in, false if not
  return true
}
