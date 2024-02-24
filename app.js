const express = require('express');
const app = express();
const port = 3001;
const sequelize = require('./app/config/dbConfig'); // Import the Sequelize configuration
const cors = require('cors');
app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.use(cors());


// const dataBaceConn =async ()=>{
//   await sequelize.sync({ force: true }) 
//   .then(() => {
//     console.log('Database synced');
//   })
//   .catch(err => {
//     console.error('Error syncing database:.......................................', err);
//   });
// }
// dataBaceConn()

app.listen(port,()=>{
  console.log("server is listening",port);
});



const itemControll = require('./app/controller/item/itemControll')
const blogControll = require('./app/controller/blog/blogControll')
const homeControll = require('./app/controller/home/home')

app.use(itemControll);
app.use(blogControll);
app.use(homeControll);


































// app.listen(port,()=>{
//   console.log(`App running on port http://localhost:${port}`);
// });






