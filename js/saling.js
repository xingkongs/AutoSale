jQuery(".txtScroll-top").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"top",autoPlay:true,vis:5,pnLoop:false});    $(".continuous .activity-right").on("click",".tag-title",function(){
    var $index=$(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    var $content=$("#tab_content").find(".content--wrapper");
    $content.eq($index).show().siblings(".content--wrapper").hide();
});
$(".model_select").not(".visited").on("click","li",function(){
    var $this=$(this); var $index=$this.index();
    $this.addClass("active").siblings("li").removeClass("active");
    if($this.closest(".model_select").hasClass("model_type")){
        $("#model_select").find(">li").eq($index).addClass("active").siblings("li").removeClass("active");
        $("#joinsale").find("figure img").attr("src",$(".active .active").attr("data-src"));
    }
    if($this.closest(".model_select").hasClass("models")){
        $("#joinsale").find("figure img").attr("src",$this.attr("data-src"));
    }
    $("#sn-brand").val($(".active .sn-brands").text());
    $("#sn-series").val($(".active .active .sn-series").text());
    $("#sn-seriesId").val($(".active .active .sn-seriesId").text());
    $("#sex").val($(".active .sn-sex").text());
});
!(function(){
    $("#sn-series").val($(".active .active .sn-series").text());
    $("#sn-seriesId").val($(".active .active .sn-seriesId").text());
})();
$('#submit-join-sale').on('click',function(){
    var $sale = $("#form-join-sale");
    $sale.serialize();
    $.ajax({
        type: 'post',
        url: '/sale/index/joinSale',
        data: $sale.serialize(),
        dataType: 'json',
        success: function (data) {
            console.log(data);
            if (data.code === 0) {
                $("#doc-modal-2").modal({closeViaDimmer: 0, width:380});
            } else {
                $("#errormessage").text(data.message);
                $("#doc-modal-3").modal({closeViaDimmer: 0, width:380});
            }
        }
    });
});
$("#joinsales").scrollspynav({speed:200,offsetTop:51});