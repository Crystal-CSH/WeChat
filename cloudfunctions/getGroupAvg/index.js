// 云函数入口文件
const cloud = require('wx-server-sdk')
// 初始化
cloud.init()
// 数据库操作对象定义
const db = cloud.database()
// 聚合执行对象定义
const $ = db.command.aggregate
// 云函数入口函数
exports.main = async (event, context) => {
//  一旦在服务器端(云端)有异步操作，则我们可以使用await
// 数据库的操作无论是在微信终端还是在云端都是一个异步操作，我们客户端没有关系，可以把所有东西写在success或者complete的一些回调函数里面，但对于服务器端来讲，你去写在success，所以需要做的事情是在云端得到数据以后，才把它返回回来，所以不能直接操作，用到了ES6的语法。
return await db.collection('books').aggregate().group({
  _id:'$category',//分组字段
  avgNum:$.avg('$sales')
}).end()
}