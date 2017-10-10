'use strict';

import User from '../models/user';

//main
exports.index = async function(ctx, next){
  //点击'Project name'， 回到主页，同时删除缓存session
  delete ctx.session.user;
  await ctx.render('index', {   //默认后缀名为html
   title: 'managePlatform'
 })
}

exports.showLogin = async function(ctx, next) {
  await ctx.render('pages/user/login', {
    title: '用户登录',
    info: ''
  });
}

exports.showRegister = async function(ctx, next) {
  await ctx.render('pages/user/register', {
    title: '用户注册',
    info: ''
  });
}

//login
exports.login = async function(ctx, next){
  let user_data = ctx.request.body;

  //存储数据到数据库
  let result = await User.insert(user_data);

  //当用户名为空时
  if(result === 'usernameIsNull') {
    ctx.render('pages/user/login', {
      title: '用户登录',
      info: '用户名不能为空，请重新输入'
    })
  }

  //当用密码为空时
  if(result === 'passwordIsNull') {
    ctx.render('pages/user/login', {
      title: '用户登录',
      info: '密码不能为空，请重新输入'
    })
  }

  //密码错误
  if(result === 'passwordIsWrong') {
    ctx.render('pages/user/login', {
      title: '用户登录',
      info: '密码错误，请重新输入'
    })
  }

  //console.log(result);

  //验证成功
  if(result === 'success') {
    ctx.session.user = user_data.username;
    //console.log(ctx.session);
    if(user_data.optionsRadios === 'option1') {
      await ctx.redirect('/individual/main')
    }

    if(user_data.optionsRadios === 'option2') {
      await ctx.redirect('/compnany/main')
    }

    if(user_data.optionsRadios === 'option3') {
      //console.log(12)
      await ctx.redirect('/official/main')
    }
  }
}

//register
exports.register = async function(ctx, next) {
  let user_data = ctx.request.body;

  //存储数据到数据库
  let result = await User.register(user_data);

  if(result === 'usernameIsExist') {

    await ctx.render('pages/user/register', {
      title: '用户注册',
      info: '用户名已经存在，请更换用户名注册'
    });
  } else if(result === 'usernameIsNull') {       //当用户名为空时

    await ctx.render('pages/user/register', {
      title: '用户注册',
      info: '用户名不能为空，请重新输入'
    });
  } else if(result === 'passwordIsNull') { //当用密码为空时

    await ctx.render('pages/user/register', {
      title: '用户注册',
      info: '密码不能为空，请重新输入'
    });
  } else if(result === 'success') {         //注册成功

    await ctx.redirect('/login', {
      title: '用户登录',
      info: ''
    })
  } else {
    await ctx.render('pages/user/register', {
      title: '用户注册',
      info: '请重新注册'
    });
  }
}


//logout
exports.logout = async function(ctx, next) {
  //用户退出登录，删除session，回到主页面
  delete ctx.session.user;
  ctx.redirect('/');
}
//about
exports.about = async function(ctx, next) {
  await ctx.render('pages/user/about', {
    title: '用户登录',
    info: ''
  });
}
//hezuo
exports.hezuo = async function(ctx, next) {
  await ctx.render('pages/user/hezuo', {
    title: '用户登录',
    info: ''
  });
}
//shengchan
exports.shengchan = async function(ctx, next) {
  await ctx.render('pages/user/shengchan', {
    title: '用户登录',
    info: ''
  });
}
//chanpin
exports.chanpin = async function(ctx, next) {
  await ctx.render('pages/user/chanpin', {
    title: '用户登录',
    info: ''
  });
}
//lianxi
//chanpin
exports.lianxi = async function(ctx, next) {
  await ctx.render('pages/user/lianxi', {
    title: '用户登录',
    info: ''
  });
}
//two
exports.two = async function(ctx, next) {
  await ctx.render('pages/user/two', {
    title: '用户登录',
    info: ''
  });
}
//chanpin2
exports.chanpin2 = async function(ctx, next) {
  await ctx.render('pages/user/chanpin2', {
    title: '用户登录',
    info: ''
  });
}
//chanpin3
exports.chanpin3 = async function(ctx, next) {
  await ctx.render('pages/user/chanpin3', {
    title: '用户登录',
    info: ''
  });
}
//在线留言
exports.message = async function(ctx, next) {
  await ctx.render('pages/user/message', {
    title: '用户登录',
    info: ''
  });
}
