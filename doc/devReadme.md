# 开发文档

> 记录开发中的一些思路以、想法以及困难

* 如何确定用户已经登录了呢？

* 登录成功之后，用户跳转到主页，但是导航头部需要获取用户信息，返回用户的用户信息，包括用户头像、用户名等信息  所以需要增加一个获取用户信息的接口？

* 如何定义首页文章接口   应该返回什么数据呢？参考mmf的接口写法？  首页文章接口入参 页码page 每一页限制多少条 limit type='' || 'hot' 出参 code:200 data:{hasNext:1, hasPrev:false, list:[category:"58481a49d4352863efb5542c",  category_name:"Vue", comment_count:1, content:"vue2 经过 2.2 版本升级后", creat_date:"2016-12-07 23:12:64,is_delete:0, like:7, like_status:false, timestamp:1481123160, title:"Vue2 dist 目录下各个文件的区别", update_date:"2017-02-27 21:24:39", visit:5993, _id:"58482558d4352863efb55475"], total:90}

* 文章分类列表 入参基本上同上 然后
