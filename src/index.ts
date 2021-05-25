import { askSearchValue, askSelectEntity, askSelectFields } from './ask/ask'
import { SearchEntity } from './search/searchEntity'
import { SearchQuery } from './types'
import { getEntityFields, isValidSearchQuery } from './utils'

export const start = async (): Promise<void> => {
  try {
    // ask user to select the entity type
    const entity = await askSelectEntity()

    // get all the searchable fields of the selected entity type
    const fields = getEntityFields(entity)

    // ask user to select the entity field
    const field = await askSelectFields(fields)

    // ask user to enter the search keyword
    const value = await askSearchValue()

    console.log(`\n Searching ${entity} for ${field} with a value of: ${value}`)

    const searchQuery: SearchQuery = { entity, field, value }

    if (!isValidSearchQuery(searchQuery)) {
      process.exit(1)
    }

    const se = new SearchEntity(entity, field, value)
    se.searchResult()
    console.log(se.data)
  } catch (err) {
    console.warn(err)
  }
}

start()
