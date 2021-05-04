const express = require('express');
const app = express();
const {sequelize} = require('./models');
const {User} = require('./models');
const nunjucks = require('nunjucks');
const indexRouter = require('./routers')
/*
    new Promise 객체 입니다. force 접속햇을때 테이블이 존재하냐 안하냐 따라서 테이블을 새로 생성할꺼냐 안할꺼냐 
    force:false 생성하지않음
    force:true 생성함
*/

app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
})

app.use('/',indexRouter);
//'/'
/*
app.get('/', async (req,res)=>{   
    const userList = await User.findAll({
        attributes:['name','married'],
    });
    console.log(userList);
    res.send('hello world!');
})
*/

app.listen(3000,()=>{
    console.log('server start 3000');
});