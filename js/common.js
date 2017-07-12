function modal(thisone){
    var $card=$(thisone).closest(".card");
    var $chexi=$card.attr("data-chexi");
    var $pinpai=$card.attr("data-pinpai");
    var $modal=$("#doc-modal-1");
    var $forminline=$modal.find(".am-form-inline").eq(0);
    var $pinpaisel=$forminline.find(".sn-div-brand select");
    var $chexisel=$forminline.find(".sn-div-series select");
    $pinpaisel.val($pinpai).trigger('changed.selected.amui');
    var time=setTimeout(function(){
        $chexisel.val($chexi).trigger('changed.selected.amui');
    },400);
     $modal.modal({closeViaDimmer: 0, width: 740});
    //    表单提交成功$(".sn-div-brand").find("select")
    //$("#doc-modal-2").modal({closeViaDimmer: 0, width:380});
}
// 倒计时
function GetRTime(){
    $(".continuous .img-wrapper .time").each(function(){
        var $time=$(this).attr("data-time");
        var EndTime= new Date($time);
        var NowTime = new Date();
        var t =EndTime.getTime() - NowTime.getTime();
        var d=0;
        var h=0;
        var m=0;
        var s=0;
        if(t>=0){
            d=Math.floor(t/1000/60/60/24);
            h=Math.floor(t/1000/60/60%24);
            m=Math.floor(t/1000/60%60);
            s=Math.floor(t/1000%60);
        }
        $(this).find(".day").text(d);
        $(this).find(".hour").text(h);
        $(this).find(".min").text(m);
        $(this).find(".sec").text(s);
    });
}

setInterval(GetRTime,0);

$("#doc-modal-2,#doc-modal-1").on("click",".am-modal-hd .am-close",function(){
    location.reload();
    window.event.returnValue=false;
});