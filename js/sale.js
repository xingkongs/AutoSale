jQuery(".txtMarquee-left").slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",interTime:50,pnLoop:false,trigger:"click",vis:"3"});
$(".salemodel .activity-right").on("click",".tag-title",function(){
    var $index=$(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    var $content=$("#model_content").find(".content");
    $content.eq($index).show().siblings(".content").hide();
});
$(".continuous .activity-right").on("click",".tag-title",function(){
    var $index=$(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    var $content=$("#tab_content").find(".content--wrapper");
    $content.eq($index).show().siblings(".content--wrapper").hide();
});
//车系
$("#doc-modal-1").on('change', '.sn-div-brand select.sn-brand', function (event) {
    var $this=$(this);
    var provinceId = event.target.value;
    if (provinceId) {
        $.ajax({
            type: 'get',
            url: 'index/getSeries?brandid=' + provinceId,
            dataType: 'json',
            cache: false,
            success: function (data) {
                var str = '<option value="" selected>请选择</option>';
                for (var i = 0; i < data.length; i++) {
                    str += "<option value='" + data[i]['id'] + "' >" + data[i]['name'] + "</option>";
                }
                $this.closest(".am-form-group").siblings(".am-form-group").find(".sn-series").empty().append(str).end().find(".sn-models").empty();

                //ComponentsBootstrapSelect.init();
            }
        });
    } else {
        $this.closest(".am-form-group").siblings(".am-form-group").find(".sn-series").empty().append('<option value="" selected></option>').end().find(".sn-models").empty().append('<option value="" selected></option>');
        // $(".sn-series").empty();
        //$(".sn-series").append('<option value="" selected></option>');
        // $(".sn-models").empty();
        // $(".sn-div-models").append('<option value="" selected></option>');
        //ComponentsBootstrapSelect.init();
    }
});
//车型
$("#doc-modal-1").on('change', '.sn-div-series select.sn-series', function (event) {
    var $this=$(this);
    var provinceId = event.target.value;
    if (provinceId) {
        $.ajax({
            type: 'get',
            url: 'index/getModel?seriesid=' + provinceId,
            dataType: 'json',
            cache: false,
            success: function (data) {
                var str = '<option value="" selected>请选择</option>';
                for (var i = 0; i < data.length; i++) {
                    str += "<option value='" + data[i]['id'] + "' >" + data[i]['name'] + "</option>";
                }

                $this.closest(".am-form-group").siblings(".am-form-group").find(".sn-models").empty().append(str);

                //ComponentsBootstrapSelect.init();
            }
        });
    } else {
        $this.closest(".am-form-group").siblings(".am-form-group").find(".sn-models").empty().append('<option value="" selected></option>');
        //ComponentsBootstrapSelect.init();
    }
});
//添加车型
var i = 1;
$(".addCars").click(function(){
    var str = "<div class='am-form-inline'><div class='am-form-group sn-div-brand'><select data-am-selected='' required class='sn-brand'><option value=''>-=请选择一项=-</option><option value='20'>丰田</option><option value='52'>北汽新能源</option></select></div> <div class='am-form-group sn-div-series '><select data-am-selected='' required class='sn-series '></select></div> <div class='am-form-group '><select data-am-selected='' required class='sn-models '></select></div></div>";
    $(".modal_hr").before(str);
    $("#doc-modal-1").find("select").selected();
    i++;
});
$("#formformit").on("click",function(){
    var $info=[],i=0;
    $("#doc-modal-1").find(".am-form-inline").not(".form_info").each(function(){
        $info[i]=[];
        $(this).find("select").each(function(){
            $info[i].push($(this).find("option:selected").text());
        });
        i++
    });
    var $name=$("#doc-vld-name").val();
    var $phone=$(this).siblings(".form_info").find("input[name=tel]").val();
    console.log([$info,$name,$phone]);
    //$.ajax({
    //       type: 'get',
    //       url: 'index/postSeries,
    //		 data: {info : $info,realname:$name,phone:$phone},
    //       dataType: 'json',

    //       success: function (data) {
    //           console.log(data);
    //       }
    //   });
});