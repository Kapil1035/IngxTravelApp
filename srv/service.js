const cds = require('@sap/cds')
const generateOrgID = require('./sample')
const {Travel} = cds.entities("travel")
const travelService = (srv)=>{
    try {
        // srv.on('CREATE',"insertTravel",async(req)=>{
        //     req.data.travelId = generateOrgID();
        //     const data = req.data
        //     const result = await cds.tx(req).run(INSERT.into(Travel).entries(data))
        //     // console.log(result);
        //     return result;
        //    }) ;
           
           srv.on('CREATE', 'insertTravel', async (req) => {
            // Find the maximum travelId
            const maxTravelId = await cds
                .run(SELECT.one`MAX(travelId) as maxTravelId`.from(Travel));

            // Increment the maximum travelId
            let counter = maxTravelId.maxTravelId ? parseInt(maxTravelId.maxTravelId.slice(-4)) + 1 : 1;

            // Generate the new travelId
            const newTravelId = `Ingenx${counter.toString().padStart(4, '0')}`;

            req.data.travelId = newTravelId;
            const data = req.data;
            const result = await cds.tx(req).run(INSERT.into(Travel).entries(data));
            return result;
        });
    } catch (error) {
       console.log("error is :"+error); 
    }
}
    
module.exports = travelService