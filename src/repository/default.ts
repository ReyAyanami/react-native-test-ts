import Realm from 'realm'
import defaultRegistry from '../models/registry'

const REALM_LIST = new Map()
const DEFAULT_REALM_NAME = 'default'

class DefaultRepository {
  static get(realmName = DEFAULT_REALM_NAME, registry: any = defaultRegistry): Realm {
    if (!REALM_LIST.has(realmName)) {
      REALM_LIST.set(realmName, new Realm({
        path: realmName,
        schema: registry,
        schemaVersion: 3
      }))
    }

    return REALM_LIST.get(realmName)
  }
}

export default DefaultRepository
