import { User } from '../interfaces'
const crypto = require('crypto')

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: crypto.randomUUID(), name: 'Alice' },
  { id: crypto.randomUUID(), name: 'Bob' },
  { id: crypto.randomUUID(), name: 'Caroline' },
  { id: crypto.randomUUID(), name: 'Dave' },
]
