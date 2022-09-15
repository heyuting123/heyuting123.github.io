var glass = function(id,dia,mr,shape){
    dia=dia==undefined?100:dia;
    mr=mr==undefined?2:mr,
    shape=shape==undefined?50:shape
    var _this = this;
    var dx1 = $("#"+id);
    var dx1width=parseInt(dx1.css("width").replace("px",""));
    var dx2 = dx1.clone();
    var gls = "<div id='"+id+"gls'></div>"
    var glsimg = "<img id='"+id+"glsimg' src='"+dx1.attr("src")+"'>"
    dx2.attr("id",id+"clone")
    dx1.after(dx2);
    dx2.after(gls);
    var gls1 = $("#"+id+"gls");
    gls1.append(glsimg);
    var glsimg1 = $("#"+id+"glsimg");
    dx1.parent().css({
        "position":"relative"
    })
    dx1.css({
        "position":"absolute",
        "z-index":"1"
    })
    dx2.css({
        "width":dx1width,
        "position":"absolute",
        "z-index":"3",
        "opacity":"0",
        "cursor":"crosshair",
        "margin":dx1.css("margin"),
        "left":dx1.css("left"),
        "top":dx1.css("top"),
        "right":dx1.css("right"),
        "bottom":dx1.css("bottom"),
    })
    gls1.css({
        //"border":"1px solid lightgray",
        "width":dia+"px",
        "height":dia+"px",
        "border-radius":""+shape+"%",
        "position":"fixed",
        "z-index":"2",
        "overflow":"hidden",
        "display":"none",
        "background-color":"black"
    })
    glsimg1.css({
        "margin-left": dia/2+"px",
        "margin-top":dia/2+"px",
        "width":(dx1width*mr)+"px"
    })
    dx2.mousemove(function(e){
        var sy = $(document).scrollTop()
        var sx = $(document).scrollLeft()
        gls1.css({
            "top":e.pageY-(dia/2)-sy,
            "left":e.pageX-(dia/2)-sx
        })
        glsimg1.css({
            "margin-top":(dia/2)-e.offsetY*mr,
            "margin-left":(dia/2)-e.offsetX*mr
        })
    })
    dx2.mouseenter(function(){
        gls1.show();
    })
    dx2.mouseleave(function(){
        gls1.hide();
    })
}