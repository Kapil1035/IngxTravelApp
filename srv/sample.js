let counter = 0;
function generateOrgID() {
    counter++;
    const orgID = `Ingenx${counter.toString().padStart(4, '0')}`;

    console.log(orgID);

    

    return orgID;

}





module.exports = generateOrgID