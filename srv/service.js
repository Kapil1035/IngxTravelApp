const cds = require('@sap/cds')

const { Travel } = cds.entities("travel")

const travelService = (srv) => {

  try {
    srv.on('CREATE', "insertTravel", async (req) => {

      var { maxID } = await SELECT.one`max(travelId) as maxID`.from(Travel);
      if (maxID == null) {
        maxID = "Ingenx0000";
      }

      const splitId = maxID.split("x");

      const id = parseInt(splitId[1])

      // console.log(id);
      if (id < 10) {

        req.data.travelId = `Ingenx000${id + 1}`;
      }
      else if (id > 9 || id < 100) {
        req.data.travelId = `Ingenx00${id + 1}`;
      }
      else if (id > 99 || id < 1000) {
        req.data.travelId = `Ingenx0${id + 1}`;
      }
      else if (id > 999 || id < 10000) {
        req.data.travelId = `Ingenx${id + 1}`;
      }

      const data = req.data
      

      const result = await cds.tx(req).run(INSERT.into(Travel).entries(data))

      console.log(result);

      return result;

    })
  } catch (error) {

    console.log("error is :" + error);

  }

  try {
    // Create an event handler for updating a Travel entity
    srv.on('UPDATE', 'Travel', async (req) => {
      // Extract data from the request
      const { travelId, updatedData } = req.data;
      console.log(req.data);

      // Check if the travelId is provided and is a valid format
      if (!travelId || typeof travelId !== 'string') {
        throw new Error('Invalid or missing travelId');
      }

      // Check if the updatedData is provided and is an object
      if (!updatedData || typeof updatedData !== 'object') {
        throw new Error('Invalid or missing updatedData');
      }

      // Use the travelId to identify the Travel entity to update
      const updatedTravel = await cds.tx(req).run(
        UPDATE(Travel)
          .set(updatedData)
          .where({ travelId: travelId })
      );

      // Check if any records were updated
      if (updatedTravel.length === 0) {
        throw new Error(`Travel with ID ${travelId} not found`);
      }

      return updatedTravel[0]; // Return the updated Travel entity
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
   
//   srv.on('resolve', async (req) => {
//     const tx = cds.tx(req);
//     const res = await tx.run(
//         UPDATE('Travel')
//             .set({ 'travelStatus': 'APD' })
//             .where({ travelId: req.params[0].travelId })
//     );
//  }
// )    

  // srv.on("acceptTravel", (req) =>
  //   UPDATE(req._target).with({ travelStatus: "APD" })
  // )
  // srv.on("rejectTravel", (req) =>
  //   UPDATE(req._target).with({ travelStatus: "RJT" })
  // )

}

module.exports = travelService