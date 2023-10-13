const cds = require("@sap/cds")
class travelService extends cds.ApplicationService {
 init(){
    const {Travel, insertTravel} = this.entities;
    this.on("acceptTravel", (req) =>
    UPDATE(req._target).with({ travelStatus: "APD" })
  )
  this.on("rejectTravel", (req) =>
    UPDATE(req._target).with({ travelStatus: "RJT" })
  )
 }
}

module.exports = {travelService}