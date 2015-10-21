# webapp
## Dialog

#### 移动端dialog


##### dialog默认参数 及用法
```
var defaults = {
    //标题
    titleText: 'title',
    //删除
    close: true,
    //内容
    content: 'message!',
    //确定按钮显示文字
    okText: 'ok',
    //取消按钮显示文字
    cancelText: 'cancel'
    // 定时删除dialog  默认手动
    //time:1000
    // 默认不写ok回调函数 点击ok直接销毁dialog  想要执行回调 请自行添加销毁dialog方法 remove();
    // ok:function(){
    // 默认不写cancel回调函数 点击cancel直接销毁dialog  想要执行回调 请自行添加销毁dialog方法 remove();
    //},
    //cancel:function(){

    // }
};
```
样式请自行覆盖！

**下一版本预计添加 成功 、失败 、提示 图标 以及进退场动画**
