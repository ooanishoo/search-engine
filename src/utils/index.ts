import path from 'path'
import { EntityType, SearchQuery } from '../types'

export const getFilePath = (fileName: string): string => {
  const dirArray = __dirname.split('/')
  const location = dirArray
    .splice(0, dirArray.indexOf('search-engine') + 1)
    .join('/')
  return path.join(location, `./data/${fileName}.json`)
}

export const getEntityFields = (entityType: EntityType): string[] => {
  switch (entityType) {
    case 'users':
      return [
        '_id',
        'url',
        'external_id',
        'email',
        'name',
        'alias',
        'created_at',
        'active',
        'verified',
        'shared',
        'locale',
        'timezone',
        'last_login_at',
        'phone',
        'signature',
        'organization_id',
        'tags',
        'suspended',
        'role'
      ]

    case 'organizations':
      return [
        '_id',
        'url',
        'external_id',
        'name',
        'domain_names',
        'created_at',
        'details',
        'shared_tickets',
        'tags'
      ]

    case 'tickets':
      return [
        '_id',
        'url',
        'external_id',
        'created_at',
        'type',
        'subject',
        'description',
        'priority',
        'status',
        'submitter_id',
        'assignee_id',
        'tags',
        'has_incidents',
        'due_at',
        'via',
        'organization_id'
      ]
    default:
      throw new Error(`Invalid Entity: ${entityType}`)
  }
}

export const isValidSearchQuery = (searchQuery: SearchQuery): boolean => {
  if (!searchQuery.entity) {
    console.warn('Please select a valid entity')
    return false
  }
  if (!searchQuery.field || searchQuery.field.length === 0) {
    console.warn('Please select a valid searchable field')
    return false
  }
  if (!searchQuery.value) {
    console.warn('No search keyword supplied, searching for empty values')
  }

  return true
}
