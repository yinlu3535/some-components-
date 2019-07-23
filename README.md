# 一些组件
author is  曦悦灿荣
*****
## slider滑块组件
### 使用方法 

`<input id="sliderInput" class="sliderInput" type="text" min="-100" max="100" value="55">`

    <script>
      $(".sliderInput").slider({
        width:200,  //滑动条宽度
        isShowMark:true, //是否显示刻度
        sliderDotSize:20, //指针大小
        barHeight:4, //滑动条高度
        step:100 //刻度大小
      });
    </script>
    
*****
## 日期时间组件
### 使用方法 

     <input type="text" placeholder="请选择日期" id="date">
     <input type="text" placeholder="请选择时间" id="time">
     <input type="text" placeholder="请选择日期和时间" id="datetime">
     
    <script>
		$("#date").datetime({
			type:"date",
			value:[2019,9,31],
			success:function(res){
				console.log(res)
			}
		})
		$("#time").datetime({
			type:"time",
			value:[12,28]
		})
		$("#datetime").datetime({
			type:"datetime",
			value:[2019,7,15,15,30]
		})
	</script>
*****
