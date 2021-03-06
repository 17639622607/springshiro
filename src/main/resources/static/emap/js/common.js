/**
 * 通用方法封装处理
 */
$(function () {
    // select2复选框事件绑定
    if ($.fn.select2 !== undefined) {
        $("select.form-control:not(.noselect2)").each(function () {
            $(this).select2().on("change", function () {
                $(this).valid();
            })
        })
    }
    // checkbox 事件绑定
    if ($(".check-box").length > 0) {
        $(".check-box").iCheck({
            checkboxClass: 'icheckbox-blue',
            radioClass: 'iradio-blue',
        })
    }
    // radio 事件绑定
    if ($(".radio-box").length > 0) {
        $(".radio-box").iCheck({
            checkboxClass: 'icheckbox-blue',
            radioClass: 'iradio-blue',
        })
    }
    // laydate 时间控件绑定
    if ($(".select-time").length > 0) {
        layui.use('laydate', function () {
            var laydate = layui.laydate;
            var startDate = laydate.render({
                elem: '#startTime',
                max: $('#endTime').val(),
                theme: 'molv',
                trigger: 'click',
                done: function (value, date) {
                    // 结束时间大于开始时间
                    if (value !== '') {
                        endDate.config.min.year = date.year;
                        endDate.config.min.month = date.month - 1;
                        endDate.config.min.date = date.date;
                    } else {
                        endDate.config.min.year = '';
                        endDate.config.min.month = '';
                        endDate.config.min.date = '';
                    }
                }
            });
            var endDate = laydate.render({
                elem: '#endTime',
                min: $('#startTime').val(),
                theme: 'molv',
                trigger: 'click',
                done: function (value, date) {
                    // 开始时间小于结束时间
                    if (value !== '') {
                        startDate.config.max.year = date.year;
                        startDate.config.max.month = date.month - 1;
                        startDate.config.max.date = date.date;
                    } else {
                        startDate.config.max.year = '';
                        startDate.config.max.month = '';
                        startDate.config.max.date = '';
                    }
                }
            });
        });
    }
    // laydate 时间控件绑定
    if ($(".select-datetime").length > 0) {
        layui.use('laydate', function () {
            var laydate = layui.laydate;
            var startDate = laydate.render({
                elem: '#startTime',
                max: $('#endTime').val(),
                theme: 'molv',
                trigger: 'click',
                type: 'datetime',
                done: function (value, date) {
                    // 结束时间大于开始时间
                    if (value !== '') {
                        endDate.config.min.year = date.year;
                        endDate.config.min.month = date.month - 1;
                        endDate.config.min.date = date.date;
                        endDate.config.min.hours = date.hours;
                        endDate.config.min.minutes = date.minutes;
                        endDate.config.min.seconds = date.seconds;

                    } else {
                        endDate.config.min.year = '';
                        endDate.config.min.month = '';
                        endDate.config.min.date = '';
                        endDate.config.min.hours = '';
                        endDate.config.min.minutes = '';
                        endDate.config.min.seconds = '';
                    }
                }
            });
            var endDate = laydate.render({
                elem: '#endTime',
                min: $('#startTime').val(),
                theme: 'molv',
                trigger: 'click',
                type: 'datetime',
                done: function (value, date) {
                    // 开始时间小于结束时间
                    if (value !== '') {
                        startDate.config.max.year = date.year;
                        startDate.config.max.month = date.month - 1;
                        startDate.config.max.date = date.date;
                        startDate.config.min.hours = date.hours;
                        startDate.config.min.minutes = date.minutes;
                        startDate.config.min.seconds = date.seconds;
                    } else {
                        startDate.config.max.year = '';
                        startDate.config.max.month = '';
                        startDate.config.max.date = '';
                        startDate.config.min.hours = '';
                        startDate.config.min.minutes = '';
                        startDate.config.min.seconds = '';
                    }
                }
            });
        });
    }

    // laydate time-input 时间控件绑定
    if ($(".time-input").length > 0) {
        layui.use('laydate', function () {
            $(this).attr("autocomplete", "off")
            var laydate = layui.laydate;
            var times = $(".time-input");
            for (var i = 0; i < times.length; i++) {
                var time = times[i];
                laydate.render({
                    elem: time,
                    theme: 'molv',
                    trigger: 'click',
                    done: function (value, date) {
                    }
                });
            }
        });
    }
    // laydate time-input 时间控件绑定
    if ($(".time-input-full").length > 0) {
        layui.use('laydate', function () {
            $(this).attr("autocomplete", "off")
            var laydate = layui.laydate;
            var times = $(".time-input-full");
            for (var i = 0; i < times.length; i++) {
                var time = times[i];
                laydate.render({
                    elem: time,
                    theme: 'molv',
                    trigger: 'click',
                    type: 'datetime',
                    done: function (value, date) {
                    }
                });
            }
        });
    }
    // tree 关键字搜索绑定
    if ($("#keyword").length > 0) {
        $("#keyword").bind("focus", function focusKey(e) {
            if ($("#keyword").hasClass("empty")) {
                $("#keyword").removeClass("empty");
            }
        }).bind("blur", function blurKey(e) {
            if ($("#keyword").val() === "") {
                $("#keyword").addClass("empty");
            }
            $.tree.searchNode(e);
        }).bind("input propertychange", $.tree.searchNode);
    }
    // 复选框后按钮样式状态变更
    $("#bootstrap-table").on("check.bs.table uncheck.bs.table check-all.bs.table uncheck-all.bs.table", function () {
        var ids = $("#bootstrap-table").bootstrapTable("getSelections");
        $('#toolbar .btn-del').toggleClass('disabled', !ids.length);
        $('#toolbar .btn-edit').toggleClass('disabled', ids.length != 1);
    });
    // tree表格树 展开/折叠
    var expandFlag = false;
    $("#expandAllBtn").click(function () {
        if (expandFlag) {
            $('#bootstrap-tree-table').bootstrapTreeTable('expandAll');
        } else {
            $('#bootstrap-tree-table').bootstrapTreeTable('collapseAll');
        }
        expandFlag = expandFlag ? false : true;
    })
});

/** 刷新选项卡 */
var refreshItem = function () {
    var topWindow = $(window.parent.document);
    var currentId = $('.page-tabs-content', topWindow).find('.active').attr('data-id');
    var target = $('.numberone_iframe[data-id="' + currentId + '"]', topWindow);
    var url = target.attr('src');
    target.attr('src', url).ready();
}

var filterHTMLTag = function (msg) {
    if (msg != null && msg != "null" && msg != undefined) {
        var msg = msg.replace(/\</ig, "&lt;"); //去除HTML Tag
        var msg = msg.replace(/\</ig, "&gt;"); //去除HTML Tag
        msg = msg.replace(/&npsp;/ig, ''); //去掉npsp
    }
    return msg;
}

/** 创建选项卡 */
function createMenuItem(dataUrl, menuName) {
    dataIndex = $.common.random(1, 100),
        flag = true;
    if (dataUrl == undefined || $.trim(dataUrl).length == 0) return false;
    var topWindow = $(window.parent.document);
    // 选项卡菜单已存在
    $('.menuTab', topWindow).each(function () {
        if ($(this).data('id') == dataUrl) {
            if (!$(this).hasClass('active')) {
                $(this).addClass('active').siblings('.menuTab').removeClass('active');
                $('.page-tabs-content').animate({marginLeft: ""}, "fast");
                // 显示tab对应的内容区
                $('.mainContent .numberone_iframe', topWindow).each(function () {
                    if ($(this).data('id') == dataUrl) {
                        $(this).show().siblings('.numberone_iframe').hide();
                        return false;
                    }
                });
            }
            flag = false;
            return false;
        }
    });
    // 选项卡菜单不存在
    if (flag) {
        var str = '<a href="javascript:;" class="active menuTab" data-id="' + dataUrl + '">' + menuName + ' <i class="fa fa-times-circle"></i></a>';
        $('.menuTab', topWindow).removeClass('active');

        // 添加选项卡对应的iframe
        var str1 = '<iframe class="numberone_iframe" name="iframe' + dataIndex + '" width="100%" height="100%" src="' + dataUrl + '" frameborder="0" data-id="' + dataUrl + '" seamless></iframe>';
        $('.mainContent', topWindow).find('iframe.numberone_iframe').hide().parents('.mainContent').append(str1);

        // 添加选项卡
        $('.menuTabs .page-tabs-content', topWindow).append(str);
    }
    return false;
}

//日志打印封装处理
var log = {
    log: function (msg) {
        console.log(msg);
    },
    info: function (msg) {
        console.info(msg);
    },
    warn: function (msg) {
        console.warn(msg);
    },
    error: function (msg) {
        console.error(msg);
    }
};

/** 设置全局ajax处理 */
$.ajaxSetup({
    complete: function (XMLHttpRequest, textStatus) {
        if (textStatus == 'timeout') {
            $.modal.alertWarning("服务器超时，请稍后再试！");
            $.modal.closeLoading();
        } else if (textStatus == "parsererror") {
            $.modal.alertWarning("服务器错误，请联系管理员！");
            $.modal.closeLoading();
        }
    }
});
layer.config({
    extend: 'moon/style.css',
    skin: 'layer-ext-moon'
});


function setDefaultDate(startObj, endObj) {
    var start = new Date().Format("yyyy-MM-dd 00:00:00");
    var end = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 - 1).Format("yyyy-MM-dd HH:mm:ss");
    startObj == null ? $("#startTime").val(start) : $(startObj).val(start);
    endObj == null ? $("#endTime").val(end) : $(endObj).val(end);
}

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

