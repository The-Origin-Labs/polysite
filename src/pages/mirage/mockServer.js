import { createServer } from "miragejs";
import properties from '../../data/properties.json';
import userData from '../../data/user.json';

export const createMockServer = () => {
  createServer({

    seeds(server) {
      server.db.loadData({
        property: properties,
        user: userData,
        info: userData.info,
        owned: userData.property.owned,
        sell: userData.property.selling
      })
    },
    routes() {
      this.namespace = "api"
      this.get("/property", (schema, request) => {
        let property  = schema.db.property
        return { property: property }
      })

      this.get("/info", (schema, request) => {
        let info  = schema.db.info
        return { info: info }
      })

      this.get("/user", (schema, request) => {
        let user  = schema.db.user
        return { user: user }
      })

      this.get("/owned", (schema, request) => {
        let owned  = schema.db.owned
        return { owned: owned }
      })

      this.get("/sell", (schema, request) => {
        let sell  = schema.db.sell
        return { sell: sell }
      })
    }
  })
}