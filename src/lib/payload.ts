import config from '@payload-config'
import { getPayload as getPl } from 'payload'

export const getPayload = async () => await getPl({ config })
