exports.handler = async (event) => {
 
    // Set the variable values.
    const temp = "46";
    const name = "Tulsa";
   
    var resultValue = {
    Temp: `${temp}`,
    Name:`${name}`
    };
   
    return resultValue;
};