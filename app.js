const express = require('express');
const app = express();


const port = 3001;

app.use(express.urlencoded({extended:false}))
app.use(express.json())

const itemControll = require('./app/controller/item/itemControll')
const blogControll = require('./app/controller/blog/blogControll')
const homeControll = require('./app/controller/home/home')

app.use(itemControll);
app.use(blogControll);
app.use(homeControll);

app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}.`);
});




