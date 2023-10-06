const cds = require('@sap/cds')
const generateOrgID = require('./sample')
const {Travel} = cds.entities("travel")
const travelService = (srv)=>{
    try {
        srv.on('CREATE',"insertTravel",async(req)=>{
            req.data.travelId = generateOrgID();
            const data = req.data
            const result = await cds.tx(req).run(INSERT.into(Travel).entries(data))
            // console.log(result);
            return result;
           })    
    } catch (error) {
       console.log("error is :"+error); 
    }
}
    
module.exports = travelService