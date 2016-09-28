var app = require('express')(),
    // 引入配置文件
    conf = require('./lib/config'),
    // 引入微信 API 功能包
    wechat = require('./lib/wechat'),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
}));

// 初始化微信 API 功能包
wechat(conf.wechat);

// 创建自定义菜单，lib/menu.json 为菜单结构描述文件
// 相关文档： https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141013&token=&lang=zh_CN
wechat.createMenu(require('./lib/menu.json'));

app.use('/wxapi', require('./lib/routers/wxapi.js'));

app.listen(8017, function(err) {
    console.log('listenning at 8017...');
})
