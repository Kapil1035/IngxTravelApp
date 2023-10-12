const cds = require('@sap/cds')

const generateOrgID = require('./sample')

const { Travel } = cds.entities("travel")

const travelService = (srv) => {

    try {

        srv.on('CREATE', "insertTravel", async (req) => {

            var {maxID}  = await SELECT.one`max(travelId) as maxID`.from(Travel);
            if(maxID==null){
                maxID = "Ingenx0000";
            }

            const splitId = maxID.split("x");

            const id = parseInt(splitId[1])

            // console.log(id);
          if(id<10){

              req.data.travelId = `Ingenx000${id + 1}`;
          }
          else if(id>9 || id<100){
            req.data.travelId = `Ingenx00${id + 1}`;
          }
          else if(id>99 || id<1000 ){
            req.data.travelId = `Ingenx0${id + 1}`;
          }
          else if(id>999 || id<10000){
            req.data.travelId = `Ingenx${id + 1}`;
          }

            const data = req.data

            const result = await cds.tx(req).run(INSERT.into(Travel).entries(data))

            // console.log(result);

            return result;

        })

    } catch (error) {

        console.log("error is :" + error);

    }

}



module.exports = travelService