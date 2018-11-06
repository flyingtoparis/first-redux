const express = require('express');
const app = express();
const mongoose = require('mongoose');

//链接mongo，并且使用krislee这个集合，没有的话会新建
const DB_URL = 'mongodb://127.0.0.1:27017/krislee';
mongoose.connect(DB_URL);

// 表示链接成功
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})

//类似于mysql的表 mongo里有文档，字段的概念
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))


//user 新增一条数据
User.create({
    name:'xiaoming',
    age:'18'
},function(err,doc){
    if (!err){
        console.log(doc)
    }else{
        console.log(err)
    }
})

//User中删除一条数据
User.remove({age:18},function(err,doc){
    console.log(doc)
})

//User中更新一条数据
User.update({'name':'xiaoming'},{'$set':{age:26}},function(err,doc){
    if(!err){
        console.log(doc)
    }
})



app.get('/',function(req,res){
    res.send('<h1>hello</h1>')
});

app.get('/data',function(req,res){
    User.find({},function(err,doc){  // 查询到所有数据，是一个数组
        res.json(doc)
    })


    User.find({user:'xiaoming'},function(err,doc){  //依据user查询
        if(!err){
            console.log(doc)
            res.json(doc)
        }
    })

    User.findOne({},function(err,doc){  // 查询到一条数据
        res.json(doc)
    })


  // res.json({name:'dan',type:'it'})
})



app.listen(9093,function(){
    console.log('express test')
})
