'use strict';
const url = require('url');
module.exports = (opt,app) => {
    return async function auth(ctx,next) {
        //配置安全验证
        ctx.state.csrf = ctx.csrf;
        ctx.state.userInfo = ctx.session.userInfo
        //上一页地址
        ctx.state.prevPage = ctx.request.headers['referer'];
        //获取url
        const pathname =url.parse(ctx.request.url).pathname ;
        if(ctx.session.userInfo) {
            await next();
        } else {
            if(pathname == '/admin/login' || pathname == '/admin/doLogin' || pathname == '/admin/verify') {
                await next();
            } else {
                ctx.redirect('/admin/login');
            }
        }
    }
}