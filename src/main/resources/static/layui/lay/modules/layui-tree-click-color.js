alert(1);
$("body").click(function () {
    alert(2);
    /* $(".layui-tree-txt").click(function(){
        $(".layui-tree-txt").css("background","red");
    }) */
    $(".layui-tree-txt").click(function () {
        $(".layui-tree-txt").css("background", "white");//所有都变白色
        $(this).css("background", "#FC9003");//自己变颜色
    });
})