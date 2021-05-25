import { prompt, Separator } from 'inquirer'
import { EntityType, FieldType } from '../types'

export const askSelectOptions = async (): Promise<string> => {
  try {
    const { menu } = await prompt([
      {
        type: 'list',
        name: 'menu',
        message: 'What would you like to do ?',
        choices: [new Separator(), 'Search for entity', 'Exit'],
        filter: (val: string) => val.toLowerCase()
      }
    ])
    return menu
  } catch (err) {
    throw new Error(err)
  }
}

export const askSelectEntity = async (): Promise<EntityType> => {
  const entities: EntityType[] = ['users', 'organizations', 'tickets']
  try {
    const { entity }: { entity: EntityType } = await prompt([
      {
        type: 'list',
        name: 'entity',
        message: 'Select the type of entity you would like to search',
        choices: entities,
        filter: (val: string) => val.toLowerCase()
      }
    ])
    return entity
  } catch (err) {
    throw new Error(err)
  }
}

export const askSelectFields = async (fields: string[]): Promise<FieldType> => {
  try {
    const { field }: { field: FieldType } = await prompt([
      {
        type: 'list',
        name: 'field',
        message: 'Select the field on the specified entity to search in',
        choices: fields,
        filter: (val: string) => val.toLowerCase()
      }
    ])
    return field
  } catch (err) {
    throw new Error(err)
  }
}

export const askSearchValue = async (): Promise<string> => {
  try {
    const { value }: { value: string } = await prompt([
      {
        type: 'input',
        name: 'value',
        message: 'Enter the value to search for in the field'
      }
    ])
    return value
  } catch (err) {
    throw new Error(err)
  }
}
