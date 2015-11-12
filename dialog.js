(function($, window, undefined) {

    var Dialog = function(options) {
        //取消任何一个显示直接把参数的值设置为false
        var defaults = {
            //标题
            // titleText: 'title',
            //删除
            // closeBtn: true,
            //内容
            content: 'message!',
            //确定按钮显示文字
            // okText: 'ok',
            //取消按钮显示文字
            // cancelText: 'cancel'
            // 定时销毁dialog  默认手动
            //time:1000
            // 默认没有ok回调函数 点击ok直接销毁dialog  想要执行回调后销毁dialog 请自行添加销毁dialog方法 remove();
            // ok:function(){},
            // 默认没有cancel回调函数 点击cancel直接销毁dialog  想要执行回调后销毁dialog 请自行添加销毁dialog方法 remove();
            //cancel:function(){}
        };

        this.params = $.extend(defaults, options);
        this.init();
    };

    Dialog.prototype = {
        init: function() {
            this.create();
            this.setTime();
            this.ok();
            this.cancel();
            this.close();
        },
        create: function() {
            this.contentHtml = '';
            if (this.params.titleText) this.contentHtml += '<h3 class="title">' + this.params.titleText + '</h3>';
            if (this.params.closeBtn) this.contentHtml += '<a class="dialog_close" id="dialog_close" href="javascript:;">+</a>';
            if (this.params.content) this.contentHtml += '<div class="dialog_content">' + this.params.content + '</div>';
            if (this.params.okText || this.params.cancelTex) {
                this.btnHtml = '';
                if (this.params.okText) this.btnHtml += '<a href="javascript:;" id="dialog_ok">' + this.params.okText + '</a>';
                if (this.params.cancelText) this.btnHtml += '<a href="javascript:;" id="dialog_cancel">' + this.params.cancelText + '</a>';
                this.contentHtml += '<div class="dialog_btn_box">' + this.btnHtml + '</div>';
            }
            this.dialog = $('<div class="dialog_bg "><div class="dialog ">' + this.contentHtml + '</div></div>').prependTo('body');
            this.dialog.on('tap', function() {
                return false;
            });
        },
        ok: function() {
            var _this = this;
            eventCallbackFn(_this, 'ok');
        },
        cancel: function() {
            var _this = this;
            eventCallbackFn(_this, 'cancel');
        },
        close: function() {
            var _this = this;
            eventCallbackFn(_this, 'close');
        },
        setTime: function() {
            var _this = this,
                setTime = _this.params.time;
            if (setTime) {
                setTimeout(function() {
                    _this.removeDialog();
                }, setTime);
            }
        },
        removeDialog: function() {
            if (this.dialog) {
                this.dialog.remove();
            }
        }
    };

    function eventCallbackFn(_this, btnName) {
        var cbFn = _this.params[btnName];
        var btn = _this.dialog.find('#dialog_' + btnName + '');
        btn.on('tap', function() {
            typeof cbFn == 'function' ? cbFn() : _this.removeDialog();
            return false;
        });
    }

    window.dialog = function(options) {
        return new Dialog(options);
    }
})($, window);
