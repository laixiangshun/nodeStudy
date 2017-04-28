/**
 * Created by lailai on 2017/4/28.
 */
exports.index=function(req,res){
    var data=req.session.data;
    res.render('index',{
        title: '计算器首页'
    })
};
exports.madd=function(req,res){
    var data=req.body.data;
    console.log(data);
    if(data)
    {
        req.session.data=data;
        return res.redirect('/');
        //res.json({result: 1});
    }else
    {
        delete req.session.data;
        res.json({result: 0});
        //return res.redirect('/');
    }
};
exports.delmc=function(req,res){
    delete req.session.data;
    console.log(req.session.data);
    res.json({result: 0});
    //res.redirect('/');
};
exports.read=function(req,res)
{
    var data=req.session.data;
    res.json({result: data});
};
exports.msresult=function(req,res){
    var data=req.body.data;
    console.log(data);
    if(data)
    {
        req.session.data=data;
       //return res.redirect('/');
        res.json({result: 1});
    }else
    {
        delete req.session.data;
        res.json({result: 0});
        //return res.redirect('/');
    }
};