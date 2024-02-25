const express = require('express');
const app = express();
const port = 3001;
const sequelize = require('./app/config/dbConfig'); // Import the Sequelize configuration
const cors = require('cors');
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.use(cors());


const dataBaceConn = async () => {
  await sequelize.sync({ force: false })
    .then(() => {
      console.log('Database synced');
      app.listen(port, () => {
        console.log("server is listening", port);
      });

    })

    .catch(err => {
      console.error('Error syncing database:.......................................', err);
    });
}
dataBaceConn()




const homeRoute = require('./app/routes/home/homeRoute')
const blogRoute = require('./app/routes/blog/blogRoute')
const itemRoute = require('./app/routes/item/itemRoute')
const aboutRoute = require('./app/routes/about/aboutRoute')
const serviceRoute = require('./app/routes/service/serviceRoute')
const contactRoute = require('./app/routes/contact/contactRoute')

app.use(homeRoute);
app.use(blogRoute);
app.use(itemRoute);
app.use(aboutRoute);
app.use(contactRoute);
app.use(serviceRoute);


































// app.listen(port,()=>{
//   console.log(`App running on port http://localhost:${port}`);
// });






