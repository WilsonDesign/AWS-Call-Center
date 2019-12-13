exports.handler = async (event) => {
 
    // Set the variable values.
    const temp = "55";
    const name = "Houston";
   
    var resultValue = {
    Temp: `${temp}`,
    Name:`${name}`
    };
   
    return resultValue;
};