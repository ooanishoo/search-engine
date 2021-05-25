import inquirer from 'inquirer'
import { askSearchValue, askSelectEntity, askSelectFields } from './ask'

jest.mock('inquirer')
const mockedInquirer = inquirer as jest.Mocked<typeof inquirer>

describe('askSelectEntity()', () => {
  test.each`
    mockedAnswer                   | mockedValue
    ${{ entity: 'users' }}         | ${`users`}
    ${{ entity: 'organizations' }} | ${`organizations`}
    ${{ entity: 'tickets' }}       | ${`tickets`}
  `(
    'should return an entity selected by user',
    async ({ mockedAnswer, mockedValue }) => {
      mockedInquirer.prompt.mockResolvedValueOnce(mockedAnswer)
      const answer = await askSelectEntity()
      expect(answer).toEqual(mockedValue)
    }
  )

  test.each`
    mockedAnswer
    ${{ entitys: 'users' }}
    ${{ entitye: 'organizations' }}
    ${{ entitdfy: 'tickets' }}
  `(
    'should throw error if the entity is not valid',
    async ({ mockedAnswer }) => {
      mockedInquirer.prompt.mockRejectedValueOnce(mockedAnswer)
      await expect(askSelectEntity()).rejects.toThrowError()
    }
  )
})

describe('askSelectFields()', () => {
  const searchableFields = [
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
  test.each`
    mockedAnswer
    ${{ field: '_id' }}
    ${{ field: 'url' }}
    ${{ field: 'external_id' }}
    ${{ field: 'email' }}
    ${{ field: 'name' }}
    ${{ field: 'alias' }}
    ${{ field: 'created_at' }}
    ${{ field: 'active' }}
    ${{ field: 'verified' }}
    ${{ field: 'shared' }}
    ${{ field: 'locale' }}
    ${{ field: 'timezone' }}
    ${{ field: 'last_login_at' }}
    ${{ field: 'phone' }}
    ${{ field: 'signature' }}
    ${{ field: 'organization_id' }}
    ${{ field: 'tags' }}
    ${{ field: 'suspended' }}
  `('should return a field selected by user', async ({ mockedAnswer }) => {
    mockedInquirer.prompt.mockResolvedValueOnce(mockedAnswer)
    const answer = await askSelectFields(searchableFields)
    expect(answer).toEqual(mockedAnswer.field)
  })

  test.each`
    mockedAnswer
    ${{ fi2ld: 'users' }}
    ${{ pfield: 'organizations' }}
    ${{ fielder: 'tickets' }}
  `(
    'should throw error if the field is not valid',
    async ({ mockedAnswer }) => {
      mockedInquirer.prompt.mockRejectedValueOnce(mockedAnswer)
      await expect(askSelectFields(searchableFields)).rejects.toThrowError()
    }
  )
})

describe('askSearchValue()', () => {
  test.each`
    mockedAnswer             | mockedValue
    ${{ value: 'John Doe' }} | ${`John Doe`}
    ${{ value: '11232' }}    | ${`11232`}
    ${{ value: 'Fuentes' }}  | ${`Fuentes`}
  `(
    'should return search keyword entered by user',
    async ({ mockedAnswer, mockedValue }) => {
      mockedInquirer.prompt.mockResolvedValueOnce(mockedAnswer)
      const answer = await askSearchValue()
      expect(answer).toEqual(mockedValue)
    }
  )

  test.each`
    mockedAnswer
    ${{ val: 'James' }}
    ${{ vallue: '43343' }}
    ${{ vue: '' }}
  `(
    'should throw error if the search keyword value is not valid',
    async ({ mockedAnswer }) => {
      mockedInquirer.prompt.mockRejectedValueOnce(mockedAnswer)
      await expect(askSearchValue()).rejects.toThrowError()
    }
  )
})
