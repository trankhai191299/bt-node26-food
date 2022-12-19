const express = require("express");
const { AppError, handleErrors } = require("../../../tailieu/15-12-2022-11-10-38-source/src/helpers/error");
const {sequelize} = require('./models');
const app = express();
app.use(express.json());

sequelize.sync({alter:true});

const v1 = require('./routers/v1');
app.use('/api/v1',v1);

app.get('/error',(req,res,next)=>{
    throw new AppError(500,"Internal Server");
});

app.use(handleErrors);

app.listen(4000);