/**
 * Created by lailai on 2017/4/28.
 */
var Index=require('../app/controller/index.js');

module.exports=function(app){
    app.use(function(req,res,next){
        var data=req.session.data;
        app.locals.data=data;//将session中data取出来放到本地变量data中
        next();
    });
    app.get('/',Index.index);

    app.post('/saveresult',Index.madd);

    app.post('/deldata',Index.delmc);

    app.get('/readdata',Index.read);

    app.post('/msresult',Index.msresult);
};