

module.exports = {
  calculate: (req, res) => {
    const body = req.body
    //the data should receive an array
    let totalPoints = body.reduce( (prev, curr) => {
      return prev + (Number(curr.units) * Number(curr.points)); 
    }, 0);
    let units = body.reduce( (prev, curr) => {
      return prev + Number(curr.units); 
    }, 0);
    let result = (totalPoints / units);

    return res.status(200).json({
      message: "success",
      gp: result,
    })
  }
}