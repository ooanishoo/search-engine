import jsonfile from 'jsonfile'
import { EntityType, FieldType, SearchData } from '../types'
import { getFilePath } from '../utils'

export class SearchEntity {
  private _data: SearchData[] = []
  private _entity: EntityType
  private _field: FieldType
  private _value: string
  private filePath: string

  constructor(entity: EntityType, field: FieldType, value: string) {
    this._entity = entity
    this._field = field
    this._value = value
    this.filePath = getFilePath(entity)
  }

  public async readData(): Promise<boolean> {
    let hasReadData = false
    try {
      const data: SearchData[] = await jsonfile.readFileSync(this.filePath)
      this._data = data
      hasReadData = true
    } catch (err) {
      throw new Error(err)
    }
    return hasReadData
  }

  get data(): SearchData[] {
    return this._data
  }

  public searchData(): SearchData[] {
    const results = this._data.filter((v) => {
      const key = this._field
      if (key === 'tags' || key === 'domain_names') {
        if (v[key as keyof SearchData].toString().includes(this._value))
          return v
      } else {
        return v[key as keyof SearchData] == this._value
      }
    })
    return results
  }
}
