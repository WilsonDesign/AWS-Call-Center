exports.handler = async (event) => {
 
    // Set the variable values.
    const temp = "53";
    const name = "Dallas";
   
    var resultValue = {
    Temp: `${temp}`,
    Name:`${name}`
    };
   
    return resultValue;
};