const {User} = require('../../models');

// /board/list
let list = async (req,res)=>{
    /*
    //select
    let UserList = await User.findAll({})
    */
    res.render('list.html',{ title:'뷰 ㅎㅇ'});
}

// /board/write POST...
let write = async (req,res)=>{
    /*
    //insert
    let rst = await User.create({
        //....
    })
    */
    res.render('write.html');
}

// /board/modify
let modify = async (req,res)=>{
    /*
    //update
    let rst = await User.update({
        // 필드:'바뀔내용', ..
    },{
        where: { // 필드:값  }
    })
    */
    res.render('modify.html');
}

// /board/view
let view = async (req,res)=>{
    /*
    //select
    let UserList = await User.findAll({})
    */
    res.render('view.html');
}

module.exports = {
    list:list,
    view:view,
    modify:modify,
    write:write,
}