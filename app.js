/**
 * Created by lailai on 2017/4/28.
 */
var express=require('express');
// 引入path模块的作用：因为页面样式的路径放在了bower_components，告诉express，请求页面里所过来的请求中，
// 如果有请求样式或脚本，都让他们去bower_components中去查找
var path=require('path');
var port=process.env.PORT || 3000;
var app=express();// 启动Web服务器

var cookieParser=require('cookie-parser');
var expresssession=require('express-session');

var dburl='mongodb://localhost/movie';//数据库地址
// 加载mongoose模块
var mongoose=require('mongoose');
// 连接mongodb本地数据库movie
mongoose.connect(dburl);
console.log('mongodb connect successful');
var mongoStore=require('connect-mongo')(expresssession);//引入connect-mongo库，实现将session存入mongodb，会话持久化

app.set('views','./app/views/pages');   // 设置视图默认的文件路径
app.set('view engine','jade');// 设置视图引擎：jade
// 载入moment模块，格式化日期
app.locals.moment=require('moment');

var serveStatic = require('serve-static');  // 静态文件处理
app.use(serveStatic('public'));

app.listen(port);
console.log('imooc started on port'+ port);

app.use(expresssession({
    secret: 'calculator',
    store: new mongoStore({
            url: dburl,
            collection: 'calculatorsessions'
            // auto_reconnect: true //自动重新连接
        }),
    resave: false,
    saveUninitialized: true
}
));
app.use(cookieParser());

var bodyParse=require('body-parser');
app.use(bodyParse.urlencoded({extended:true}));


require('./config/route.js')(app);//加载路由文件