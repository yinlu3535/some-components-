(function( factory ) {
    'use strict';
    if ( typeof define === "function" && define.amd ) {
        define( ["jquery"], factory );
    } else {
        factory( jQuery );
    }
}(function( $ ) {
    var month_olypic = [31,29,31,30,31,30,31,31,30,31,30,31];
    var month_normal = [31,28,31,30,31,30,31,31,30,31,30,31];
    var my_date = new Date();
    var my_year = my_date.getFullYear();
    var my_month = my_date.getMonth();
    var my_day = my_date.getDate();
    var my_hours = my_date.getHours();
    var my_minutes = my_date.getMinutes();
    var $curInput = null;

    var defaultValue={
        type:"date",
        background:"#494a4a"
    }
    var hasDom = false;
    var opt;
    


    $.extend($.fn, {
        datetime:function(options){
this.each(function() {
    var $this = $(this);

            opt = $.extend(true,{},defaultValue,options);
            
            function createDom(){
                var dateBody = $('<div class="dateTimeWrap"><div class="datePart"><div class="dateTimeHead"><span year="2019" month="7" id="dateTime"><select class="year" name="yearSelect" id="yearSelect"><option value="1920">1920年</option><option value="1921">1921年</option><option value="1922">1922年</option><option value="1923">1923年</option><option value="1924">1924年</option><option value="1925">1925年</option><option value="1926">1926年</option><option value="1927">1927年</option><option value="1928">1928年</option><option value="1929">1929年</option><option value="1930">1930年</option><option value="1931">1931年</option><option value="1932">1932年</option><option value="1933">1933年</option><option value="1934">1934年</option><option value="1935">1935年</option><option value="1936">1936年</option><option value="1937">1937年</option><option value="1938">1938年</option><option value="1939">1939年</option><option value="1940">1940年</option><option value="1941">1941年</option><option value="1942">1942年</option><option value="1943">1943年</option><option value="1944">1944年</option><option value="1945">1945年</option><option value="1946">1946年</option><option value="1947">1947年</option><option value="1948">1948年</option><option value="1949">1949年</option><option value="1950">1950年</option><option value="1951">1951年</option><option value="1952">1952年</option><option value="1953">1953年</option><option value="1954">1954年</option><option value="1955">1955年</option><option value="1956">1956年</option><option value="1957">1957年</option><option value="1958">1958年</option><option value="1959">1959年</option><option value="1960">1960年</option><option value="1961">1961年</option><option value="1962">1962年</option><option value="1963">1963年</option><option value="1964">1964年</option><option value="1965">1965年</option><option value="1966">1966年</option><option value="1967">1967年</option><option value="1968">1968年</option><option value="1969">1969年</option><option value="1970">1970年</option><option value="1971">1971年</option><option value="1972">1972年</option><option value="1973">1973年</option><option value="1974">1974年</option><option value="1975">1975年</option><option value="1976">1976年</option><option value="1977">1977年</option><option value="1978">1978年</option><option value="1979">1979年</option><option value="1980">1980年</option><option value="1981">1981年</option><option value="1982">1982年</option><option value="1983">1983年</option><option value="1984">1984年</option><option value="1985">1985年</option><option value="1986">1986年</option><option value="1987">1987年</option><option value="1988">1988年</option><option value="1989">1989年</option><option value="1990">1990年</option><option value="1991">1991年</option><option value="1992">1992年</option><option value="1993">1993年</option><option value="1994">1994年</option><option value="1995">1995年</option><option value="1996">1996年</option><option value="1997">1997年</option><option value="1998">1998年</option><option value="1999">1999年</option><option value="2000">2000年</option><option value="2001">2001年</option><option value="2002">2002年</option><option value="2003">2003年</option><option value="2004">2004年</option><option value="2005">2005年</option><option value="2006">2006年</option><option value="2007">2007年</option><option value="2008">2008年</option><option value="2009">2009年</option><option value="2010">2010年</option><option value="2011">2011年</option><option value="2012">2012年</option><option value="2013">2013年</option><option value="2014">2014年</option><option value="2015">2015年</option><option value="2016">2016年</option><option value="2017">2017年</option><option value="2018">2018年</option><option value="2019">2019年</option><option value="2020">2020年</option><option value="2021">2021年</option><option value="2022">2022年</option><option value="2023">2023年</option><option value="2024">2024年</option><option value="2025">2025年</option><option value="2026">2026年</option><option value="2027">2027年</option><option value="2028">2028年</option><option value="2029">2029年</option><option value="2030">2030年</option><option value="2031">2031年</option><option value="2032">2032年</option><option value="2033">2033年</option><option value="2034">2034年</option><option value="2035">2035年</option><option value="2036">2036年</option><option value="2037">2037年</option><option value="2038">2038年</option><option value="2039">2039年</option><option value="2040">2040年</option><option value="2041">2041年</option><option value="2042">2042年</option><option value="2043">2043年</option><option value="2044">2044年</option><option value="2045">2045年</option><option value="2046">2046年</option><option value="2047">2047年</option><option value="2048">2048年</option><option value="2049">2049年</option><option value="2050">2050年</option></select><select class="month" name="monthSelect" id="monthSelect"><option value="0">一月</option><option value="1">二月</option><option value="2">三月</option><option value="3">四月</option><option value="4">五月</option><option value="5">六月</option><option value="6">七月</option><option value="7">八月</option><option value="8">九月</option><option value="9">十月</option><option value="10">十一月</option><option value="11">十二月</option></select></span><div class="changeMonth"><span id="pre"><</span> <span id="next">></span></div></div><div><ul><li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li></ul><ul id="dayDat"></ul></div><div class="dateTimeFoot"><span class="selTime">选择时间</span><span id="close">关闭</span><span id="selcurday">今天</span></div></div><div class="timePart" style="display:none"><ul><li id="selHour"><p>时</p><ol></ol></li><li id="selMinute"><p>分</p><ol></ol></li></ul><div class="timeFooter"><span class="selTime">选择日期</span><span id="ensure">确定</span><span id="curTime">当前时间</span></div></div></div>')
                $("body").append(dateBody);
                hasDom = true;
            }
            if(!hasDom)
                    createDom();



            //获取当天的年月日
            function dayStart(month,year){
                var tmpDate = new Date(year, month, 1);
                return (tmpDate.getDay());
            }
            //根据年份判断某月有多少天(11,2018),表示2018年12月
            function daysMonth(month, year){
                var tmp1 = year % 4;
                var tmp2 = year % 100;
                var tmp3 = year % 400;
     
                if((tmp1 == 0 && tmp2 != 0) || (tmp3 == 0)){
                    return (month_olypic[month]);//闰年
                }else{
                    return (month_normal[month]);//非闰年
                }
            }
            function refreshDate(){
                var str = "";
                var totalDay = daysMonth(my_month,my_year);
                if(my_day>totalDay)
                    my_day = totalDay;

                    console.log(my_day);
                var firstDay = dayStart(my_month, my_year);
                for(var i = 0; i < firstDay; i++){
                    str += "<li>"+"</li>";
                }
                var myclass;
                for(var i = 1; i <= totalDay; i++){
                    if(i == my_day){
                        myclass = "class = 'curDay'";
                    }else{
                        myclass = "";
                    }
                    str += "<li "+myclass+">"+i+"</li>";
                }
                $("#dayDat").html(str);
            }


            function refreshTime(){
                var hourstr = "";
                var minutestr = "";
                for(var i=0;i<24;i++){
                    if(i<10)
                        i="0"+i;
                    if(i==my_hours)
                        hourstr+="<li class='cur'>"+i+"</li>";
                    else
                        hourstr+="<li>"+i+"</li>"
                }

                for(var i=0;i<60;i++){
                    if(i<10)
                        i="0"+i;
                    if(i==my_minutes)
                        minutestr+="<li class='cur'>"+i+"</li>";
                    else
                        minutestr+="<li>"+i+"</li>";
                }
                $("#selHour ol").html(hourstr);
                $("#selMinute ol").html(minutestr);
            }
            //获取当天的年月日
            function init(){
                $(".dateTimeWrap").show()
                var type= opt.type;
                if(type!='date'){
                    
                    refreshTime()
                    $(".datePart").hide().siblings('.timePart').show();
                    var hourCurli = $("#selHour .cur");
                    $("#selHour ol").scrollTop(
                        hourCurli.offset().top - $("#selHour ol").offset().top + $("#selHour ol").scrollTop() - hourCurli.outerHeight()
                    )
                    var monuteCurli = $("#selMinute .cur");
                    $("#selMinute ol").scrollTop(
                        monuteCurli.offset().top - $("#selMinute ol").offset().top + $("#selMinute ol").scrollTop() - monuteCurli.outerHeight()
                    )
                }
                if(type!="time"){
                    refreshDate();
                    $(".datePart").show().siblings('.timePart').hide();
                    $("#yearSelect").val(my_year);
                    $("#monthSelect").val(my_month);
                }

                if(type=="datetime") $(".selTime").show();
                else $(".selTime").hide();
                
            }
            function checkOptions(){
                var type= opt.type;
                var value = opt.value;
                var isRight = true;
                if(value&&value.length>0){
                    if(type=="datetime"){
                        if(value.length!=5||value[0]>2050||value[0]<1920||value[1]>12||value[1]<1||value[2]>31||value[2]<1||value[3]>23||value[3]<1||value[4]>59||value[4]<1){
                            isRight = false
                        }
                    }
                    if(type=="date"){
                        if(value.length!=3||value[0]>2050||value[0]<1920||value[1]>12||value[1]<1||value[2]>31||value[2]<1){
                            isRight = false
                        }
                    }
                    if(type=="time"){
                        if(value.length!=2||value[0]>23||value[0]<1||value[1]>59||value[1]<1){
                            isRight = false
                        }
                    }
                }
               return isRight;
                
            }
            function compelet(){
                var value
                var type=opt.type;
                if(type=="date")
                value = my_year+"-"+(parseInt(my_month)+1)+"-"+my_day;
                else if(type=="time")
                value = my_hours+":"+my_minutes;
                else
                value = my_year+"-"+(parseInt(my_month)+1)+"-"+my_day+" "+my_hours+":"+my_minutes;

                $curInput.val(value);

                $(".dateTimeWrap").hide()
                
                if(opt.success&&typeof opt.success == "function"){
                    var res;
                    if(type=="date")
                    res = [my_year,(parseInt(my_month)+1),parseInt(my_day)]
                    else if(type=="time")
                    res = [my_hours,my_minutes]
                    else
                    res = [my_year,(parseInt(my_month)+1),parseInt(my_day),my_hours,my_minutes]
                    opt.success(res);
                }
            }
           


            $("#selcurday,#close,#dayDat,.changeMonth span,.selTime").unbind('click');
            $("#yearSelect,#monthSelect").unbind("change");

            $("#yearSelect,#monthSelect").change(function(){
                my_month=$("#monthSelect").val();
                my_year=$("#yearSelect").val();
                refreshDate()
            });
            $(".changeMonth span").click(function(){
                    if(this.id=="pre"){
                        my_month-=1;
                        if(my_month==-1){
                            my_month=11;
                            my_year-=1;
                        } 
                    }else{
                        my_month+=1;
                        if(my_month==12){
                            my_month=0;
                            my_year+=1;
                        } 
                    }
                refreshDate();
                $("#yearSelect").val(my_year);
                $("#monthSelect").val(my_month);
            })
            $("#selcurday").click(function(){
                var my_date = new Date();
                    my_year = my_date.getFullYear();
                    my_month = my_date.getMonth();
                    my_day = my_date.getDate();
                refreshDate();
                $("#yearSelect").val(my_year);
                $("#monthSelect").val(my_month);
                
                if(opt.type == "datetime"){
                    $(".datePart").hide().siblings(".timePart").show();
                    return; 
                }
                compelet();
            })
            $("#close").click(function() {
                $(".dateTimeWrap").hide()
            })
            $("#dayDat").on("click","li",function(){
                my_day = $(this).html();
                if(opt.type == "datetime"){
                    $(".datePart").hide().siblings(".timePart").show();
                    return; 
                }
                compelet();
            })

            $(".selTime").click(function(){
                if($(this).html()=="选择时间"){
                    $(".datePart").hide().siblings(".timePart").show();
                }else{
                    $(".datePart").show().siblings(".timePart").hide();
                }
            })
            $(".timePart ol,.timeFooter #ensure,.timeFooter #curTime").unbind("click");
            $(".timePart ol").on("click","li",function(){
                $(this).addClass("cur").siblings("li").removeClass("cur");
                var container = $(this).parent();
                container.animate({
                    scrollTop: $(this).offset().top - container.offset().top + container.scrollTop() - $(this).outerHeight()
                },100)
            })
            
            $(".timeFooter #ensure").click(function(){
                my_hours = $("#selHour ol .cur").html();
                my_minutes = $("#selMinute ol .cur").html();
                compelet();
                $(".dateTimeWrap").hide()
            })
            $(".timeFooter #curTime").click(function(){
                my_hours = my_date.getHours();
                my_minutes = my_date.getMinutes();

                if(parseInt(my_hours)<10)
                my_hours="0"+my_hours;
                if(parseInt(my_minutes)<10)
                my_minutes="0"+my_minutes;

                refreshTime(my_hours,my_minutes);
                compelet();
            })

            $this.click(function(){
                opt = $.extend(true,{},defaultValue,options);
                if(!checkOptions()) {alert("参数错误");return false;}

                var datetimeVlaue = this.value;
                if(datetimeVlaue){
                    datetimeVlaue = datetimeVlaue.replace(/-/g, '/');
                    var curTime = new Date(datetimeVlaue);
                }
                if(opt.type=="date"){
                    if(this.value){
                        my_month = curTime.getMonth(); 
                        my_year = curTime.getFullYear();
                        my_day = curTime.getDate(); 
                    }else{
                        my_month = opt.value[1]-1; 
                        my_year = opt.value[0]; 
                        my_day = opt.value[2]; 
                    }
                }else if(opt.type=="time"){
                    
                    if(this.value){
                        my_hours = this.value.split(":")[0];
                        my_minutes = this.value.split(":")[1];
                    }else{
                        my_minutes = opt.value[1]; 
                        my_hours = opt.value[0]; 
                    }
                }else{
                    if(this.value){
                        my_month = curTime.getMonth(); 
                        my_year = curTime.getFullYear();
                        my_day = curTime.getDate(); 
                        my_hours = curTime.getHours();
                        my_minutes = curTime.getMinutes();
                    }else{
                        my_month = opt.value[1]-1; 
                        my_year = opt.value[0]; 
                        my_day = opt.value[2]; 
                        my_minutes = opt.value[4]; 
                        my_hours = opt.value[3];
                    }
                }
                $curInput = $(this);
                init();
                var left = $this.offset().left;
                var top = $this.offset().top + $this.outerHeight()+4;
                $(".dateTimeWrap").css({
                    background:opt.background,
                    top:top,
                    left:left
                });
            })
        });
return this;
        }
    });

}));