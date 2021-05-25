export interface Organization {
  _id: number
  url: string
  external_id: string
  name: string
  domain_names: string[]
  created_at: string
  details: string
  shared_tickets: boolean
  tags: string[]
}

export interface Ticket {
  _id: string
  url: string
  external_id: string
  created_at: string
  type: string
  subject: string
  description?: string
  priority: string
  status: string
  submitter_id: number
  assignee_id: number
  tags: string[]
  has_incidents: boolean
  due_at: string
  via: string
  organization_id: number
}

export interface User {
  _id: number
  url: string
  external_id: string
  email?: string
  name: string
  alias?: string
  created_at: string
  active: boolean
  verified?: boolean
  shared: boolean
  locale?: string
  timezone?: string
  last_login_at: string
  phone: string
  signature: string
  organization_id?: number
  tags: string[]
  suspended: boolean
  role: string
}
export type SearchData = Organization | User | Ticket
export type FieldType = keyof Organization | keyof User | keyof Ticket
export type EntityType = 'users' | 'tickets' | 'organizations'
export type SearchQuery = {
  entity: EntityType
  field: string
  value: string
}
