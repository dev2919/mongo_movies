const mongoose = require('mongoose');
const csv = require('csvtojson');
const {csvPath} = require('csv-into-json');

 
const getMoviesJson = async () => {
  const csvPath = __dirname + '/movies.csv';
  const jsonArray = await csv().fromFile(csvPath);
  return jsonArray;
}

csvPath('./movies.csv')       
 
getJson = (data) => {
   
    console.log("JSON FILE :-",jsonData)
}

getJson();

(async () => {
  await mongoose.connect('mongodb://localhost:27017/movies_mongoose');
  console.log('The connection is done --');
  // the strructure of thee modeel
  const UserSchema = new mongoose.Schema({
    name: 'string',
    rating: 'string',
    description: {type: 'string', unique: true}
  });

  const arr = await getMoviesJson();
  console.log(arr);
  

  // creating a model
  const User = mongoose.model('User', UserSchema);

  arr.forEach(async (item) => {
    await User.create({ name: item.name,rating: item.rating, description: item.description });
  })


  console.log("--created new users--")
})();


