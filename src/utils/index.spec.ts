import { getEntityFields, isValidSearchQuery } from '.'

describe('getEntityFields()', () => {
  test.each`
    entityType         | searchableFields
    ${`users`}         | ${['_id', 'url', 'external_id', 'email', 'name', 'alias', 'created_at', 'active', 'verified', 'shared', 'locale', 'timezone', 'last_login_at', 'phone', 'signature', 'organization_id', 'tags', 'suspended', 'role']}
    ${`organizations`} | ${['_id', 'url', 'external_id', 'name', 'domain_names', 'created_at', 'details', 'shared_tickets', 'tags']}
    ${`tickets`}       | ${['_id', 'url', 'external_id', 'created_at', 'type', 'subject', 'description', 'priority', 'status', 'submitter_id', 'assignee_id', 'tags', 'has_incidents', 'due_at', 'via', 'organization_id']}
  `(
    `should return correct searchable fields when entity = $entityType`,
    ({ entityType, searchableFields }) => {
      const fields = getEntityFields(entityType)
      expect(fields).toEqual(searchableFields)
    }
  )

  test.each`
    entityType
    ${`people`}
    ${`company`}
    ${`tick`}
  `(
    `should throw error if entityType is invalid, entity = $entityType`,
    ({ entityType }) => {
      expect(() => getEntityFields(entityType)).toThrowError()
    }
  )
})

describe('isValidSearchQuery()', () => {
  // hide console warn from tests
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(jest.fn())
  })
  test.each`
    searchQuery                                      | expectedOutput
    ${{ entity: 'users', field: '_id', value: 123 }} | ${true}
    ${{ entity: 'users', field: '_id', value: 123 }} | ${true}
    ${{ entity: 'users', field: '_id', value: 123 }} | ${true}
    ${{ entity: 'users', field: '_id' }}             | ${true}
    ${{ field: '_id', value: 123 }}                  | ${false}
    ${{ entity: 'users', value: 123 }}               | ${false}
    ${{ entity: 'users', value: 123 }}               | ${false}
    ${{}}                                            | ${false}
  `(
    `should check if the search query is valid`,
    ({ searchQuery, expectedOutput }) => {
      const output = isValidSearchQuery(searchQuery)
      expect(expectedOutput).toEqual(output)
    }
  )
})
