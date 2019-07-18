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
