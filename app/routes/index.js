'use strict';

import Router from 'koa-router';

import User from '../controllers/user';
import Individual from '../controllers/individual';
import Company from '../controllers/company';


const router = new Router();

router
  .get('/', User.index)                 //主页面
  .get('/login', User.showLogin)        //登录页面
  .get('/register', User.showRegister)  //注册页面
  .get('/logout', User.logout)          //用户退出登录
  .post('/login', User.login)           //用户登录操作
  .post('/register', User.register)     //用户注册操作
  .get('/individual/main', Individual.main)   //个人主页面
  .get('/company/main', Company.main)         //企业主页面
  .get('/about',User.about)//关于我们
  .get('/hezuo',User.hezuo)//合作企业
  .get('/shengchan',User.shengchan)//生产能力
  .get('/chanpin',User.chanpin)//生产能力
  .get('/lianxi',User.lianxi)//联系我们
  .get('/two',User.two)//下一页
  .get('/chanpin2',User.chanpin2)//第二类产品
  .get('/chanpin3',User.chanpin3)//第三类产品
  .get('/message',User.message)//在线留言






  //individual
  .get('/individual/hot', Individual.hot)  //加热炉
  .get('/individual/cuihuo', Individual.cuihuo)  //淬火炉
  .get('/individual/huihuo', Individual.huihuo)  //回火炉
  .get('/individual/leng', Individual.leng)  //回火炉
  .get('/individual/hotguan',Individual.hotguan)//加热炉数据管理页面
  .get('/individual/hotshi',Individual.hotshi)//加热炉 历史记录页面
  .get('/individual/cuiguan',Individual.cuiguan)//淬火炉数据管理页面
  .get('/individual/cuishi',Individual.cuishi)//淬火炉历史记录页面
  .get('/individual/lengguan',Individual.lengguan)//冷却炉数据管理页面
  .get('/individual/lengshi',Individual.lengshi)//冷却炉历史记录页面
  .get('/individual/huiguan',Individual.huiguan)//回火炉数据管理页面
  .get('/individual/huishi',Individual.huishi)//回火炉历史记录页面
  .get('/individual/hotjia',Individual.hotjia)//加热炉项目添加页面
  .post('/individual/hot1',Individual.ctlhot1)  //处理hotjia提交的数据
  .get('/individual/cuijia',Individual.cuijia)//淬火炉项目添加页面
  .get('/individual/huijia',Individual.huijia)//回火炉项目添加页面
  .get('/individual/lengjia',Individual.lengjia)//冷却炉项目添加页面








export default router;
