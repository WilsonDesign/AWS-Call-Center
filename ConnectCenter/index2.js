exports.handler = async (event) => {
 
    // Set the variable values.
    const temp = "48";
    const name = "Oklahoma City";
   
    var resultValue = {
    Temp: `${temp}`,
    Name:`${name}`
    };
   
    return resultValue;
};
