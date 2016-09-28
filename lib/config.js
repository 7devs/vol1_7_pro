// 项目配置文件
module.exports = {
    // 微信相关配置
    wechat: {
        appid: 'wx20d6cfd4a6ba95ba',
        secret: 'd4624c36b6795d1d99dcf0547af5443d',
        // 微信 API 地址，地址后需要连接相关功能地址，例如：https://api.weixin.qq.com/cgi-bin/user/get
        apiurl: 'https://api.weixin.qq.com/cgi-bin/',
        reurl: 'https://open.weixin.qq.com/connect/oauth2/authorize',
        snsurl: 'https://api.weixin.qq.com/sns/oauth2/access_token',
        template: {
            alert: '6Uc_6adqWVrq6JHGDzunIDF5cBosSQR-3Tgm9nSgFio'
        }
    }
}
