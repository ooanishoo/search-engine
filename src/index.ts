import {
  askSearchValue,
  askSelectEntity,
  askSelectFields,
  askSelectOptions
} from './ask/ask'
import { SearchEntity } from './search/searchEntity'
import { SearchQuery } from './types'
import { getEntityFields, isValidSearchQuery } from './utils'
import { performance } from 'perf_hooks'

export const start = async (): Promise<void> => {
  const isRunning = true
  console.log(`
  ------------------------------------
  🔎 Welcome to Search Engine 🔍
  ------------------------------------
  `)
  while (isRunning) {
    try {
      // ask user to select options
      const menu = await askSelectOptions()
      if (menu === 'exit') break

      // ask user to select the entity type
      const entity = await askSelectEntity()

      // get all the searchable fields of the selected entity type
      const fields = getEntityFields(entity)

      // ask user to select the entity field
      const field = await askSelectFields(fields)

      // ask user to enter the search keyword
      const value = await askSearchValue()

      console.log(
        `\nSearching ${entity} for ${field} with a value of: ${value}`
      )

      const searchQuery: SearchQuery = { entity, field, value }

      // check if the search query is valid
      if (isValidSearchQuery(searchQuery)) {
        const startSearch = performance.now()

        // search data
        const searchEntity = new SearchEntity(entity, field, value)
        const hasReadData = await searchEntity.readData()
        if (hasReadData) {
          const results = searchEntity.searchData()
          const endSearch = performance.now()

          // calculate the search duration
          const searchDuration = (endSearch - startSearch).toFixed(2)

          // display the search data
          console.log(results)
          console.log(
            `\nFound ${results.length} result in ${searchDuration} milliseconds. \n`
          )
        }
      }
    } catch (err) {
      console.warn(err)
    }
  }
}

start()
