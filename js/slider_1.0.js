/*
 * author   曦悦灿荣
 * time     2019-7-9
 * 版本     v1.0 
 * 参数		width:200, //滑动条宽度
    		isShowMark:true,  //是否显示刻度
    		sliderDotSize:16,  //指针大小
				barHeight:6,  //滑动条高度
				step:2  //刻度数量
*/
(function($) {
    $.fn.slider = function(options) {
		var defaultOption={
    		width:200,
    		isShowMark:true,
    		sliderDotSize:16,
			barHeight:6,
			step:20
    	}
		var opts = $.extend(true, {}, defaultOption, options);

        // if (!this.length) {
        //     return this;
        // }
        function setValue(left,min,max,obj){
        	var value = left/(opts.width-opts.sliderDotSize)*(max-min)+min;
        	obj.value = parseInt(value);
        }

    	function creatDom(min,max,step,obj){
			if(max-min<step){
				
				return "<span>参数错误</span>";
			}else{

				var sliderWrap = $("<div ondragstart=\"return false;\" class=\"sliderWrap\"></div>");
				sliderWrap.width(opts.width||200);
				sliderWrap[0].ismousedown = false;

				var sliderBar = $('<div class="sliderBar"></div>');
				var sliderDot = $('<span class="sliderDot"></span>');
				sliderDot.css({"width":opts.sliderDotSize,"height":opts.sliderDotSize,"top":-(opts.sliderDotSize-opts.barHeight)/2});
				sliderBar.height(opts.barHeight);

				sliderWrap.mousedown(function(){
					this.ismousedown = true;
				})
				sliderWrap.on("click",function(e){
					var left = e.pageX-$(this).children(".sliderBar").offset().left;
					if(left<0)left=0;
					if(left>opts.width-opts.sliderDotSize)left=opts.width-opts.sliderDotSize;
					sliderDot.css("left",left);
					setValue(left,min,max,obj)
				})	
				sliderWrap.on("mousemove",function(e){
					if(this.ismousedown){
						var left = e.pageX-$(this).children(".sliderBar").offset().left;
						if(left<0)left=0;
						if(left>opts.width-opts.sliderDotSize)left=opts.width-opts.sliderDotSize;
						sliderDot.css("left",left);
						setValue(left,min,max,obj)
					}
				})	
				
				$(document).mouseup(function(){
					sliderWrap[0].ismousedown = false;
				})	
				sliderWrap.append(sliderBar);
				sliderBar.append(sliderDot);

				if((max-min)%step!==0) opts.isShowMark = false;
				if(opts.isShowMark){
					var str = "<div class=\"sliderMark\">";
					var sectionLength = (max-min)/step;
					for(i=0;i<=sectionLength;i++){
						var barWidth = opts.width-opts.sliderDotSize;
						var leftValue = barWidth/sectionLength*i+opts.sliderDotSize/2;

						splitValue = min+step*i;

						str+="<dl style='left:"+leftValue+"px'>"+
									"<dt></dt>"+
									"<dd>"+splitValue+"</dd>"+
								"</dl>"
					}

					str+="</div>";
					sliderBar.append($(str));
				}
				
				return sliderWrap;
			}

    	}

    	
        
        this.each(function() {
            var $this = $(this);
            var min = parseInt(this.min)||0;
            var max = parseInt(this.max)||100;
            var step = parseInt(opts.step);
            var sliderDom = creatDom(min,max,step,this);
            $(sliderDom).insertAfter($this);

			$this.change(function(){
				var value = this.value;
				var left = (value-min)/(max-min)*(opts.width-opts.sliderDotSize);
				sliderDom.find(".sliderDot").css("left",left);
			})

			if(this.value)
				$this.trigger("change");

        });
        return this;
    };

})(jQuery);
