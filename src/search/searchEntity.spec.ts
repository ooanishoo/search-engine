import { SearchEntity } from './searchEntity'
import jsonfile from 'jsonfile'

jest.mock('jsonfile')
const mockedJsonfile = jsonfile as jest.Mocked<typeof jsonfile>

const users = [
  {
    _id: 1,
    url: 'http://initech.zendesk.com/api/v2/users/1.json',
    external_id: '74341f74-9c79-49d5-9611-87ef9b6eb75f',
    name: 'Test One',
    alias: '',
    created_at: '2016-04-15T05:19:46 -10:00',
    active: true,
    verified: true,
    shared: false,
    locale: 'en-AU',
    timezone: 'Sri Lanka',
    last_login_at: '2013-08-04T01:03:27 -10:00',
    email: 'test@test.com',
    phone: '8335-422-718',
    signature: "Don't Worry Be Happy!",
    organization_id: 119,
    tags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    suspended: true,
    role: 'admin'
  },
  {
    _id: 2,
    url: 'http://initech.zendesk.com/api/v2/users/2.json',
    external_id: 'c9995ea4-ff72-46e0-ab77-dfe0ae1ef6c2',
    name: 'Cross Barlow',
    alias: 'Miss Joni',
    created_at: '2016-06-23T10:31:39 -10:00',
    active: true,
    verified: true,
    shared: false,
    locale: 'zh-CN',
    timezone: 'Armenia',
    last_login_at: '2012-04-12T04:03:28 -10:00',
    email: 'jonibarlow@flotonic.com',
    phone: '9575-552-585',
    signature: "Don't Worry Be Happy!",
    organization_id: 106,
    tags: ['Foxworth', 'Woodlands', 'Herlong', 'Henrietta'],
    suspended: false,
    role: 'admin'
  }
]

describe('readData()', () => {
  it('should read the data from the file path', async () => {
    mockedJsonfile.readFileSync.mockResolvedValueOnce(users)
    const searchEntity = new SearchEntity('users', 'name', 'test')
    await searchEntity.readData()
    expect(searchEntity.data).toEqual(users)
  })

  it('should throw error when the data is incorrect', async () => {
    mockedJsonfile.readFileSync.mockRejectedValueOnce('hello')
    const searchEntity = new SearchEntity('users', 'name', 'test')
    await expect(searchEntity.readData()).rejects.toThrowError()
    expect(searchEntity.data).toEqual([])
  })
})

describe('searchData()', () => {
  beforeEach(() => {
    mockedJsonfile.readFileSync.mockResolvedValueOnce(users)
  })
  it('should find name in user', async () => {
    const searchEntity = new SearchEntity('users', 'name', 'Test One')
    await searchEntity.readData()

    const [results] = searchEntity.searchData()
    expect(results).toEqual(users[0])
  })

  it('should find role in user', async () => {
    const searchEntity = new SearchEntity('users', 'role', 'admin')
    await searchEntity.readData()

    const [results] = searchEntity.searchData()
    expect(results).toEqual(users[0])
  })

  it('should not find user if no match is found', async () => {
    const searchEntity = new SearchEntity('users', 'email', 'test@xyz.com')
    await searchEntity.readData()

    const [results] = searchEntity.searchData()
    expect(results).not.toEqual(users[0])
  })
})
