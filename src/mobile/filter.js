/*模板里用的函数*/
const filters = {
    date: function(date, pattern) {
        if (date == undefined) {
            date = new Date();
        } else {
            date = new Date(date*1000)
        }
        if (pattern == undefined) {
            // pattern = "yyyy-MM-dd hh:mm:ss";
            pattern = "yyyy-MM-dd hh:mm";
        }
        var o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
            "S": date.getMilliseconds()
        }
        if (/(y+)/.test(pattern)) {
            pattern = pattern.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(pattern)) {
                pattern = pattern.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return pattern;
    },
    // 将时间戳 转换为 X天X小时X分钟
    formatDuring: function(mss){
        var days = parseInt(mss / ( 60 * 60 * 24));
        var hours = parseInt((mss % ( 60 * 60 * 24)) / ( 60 * 60));
        var minutes = parseInt((mss % ( 60 * 60)) /  60 );
        var seconds = mss %  60  ;
        return days + " 天 " + hours + " 小时 " + minutes + " 分钟 ";
    },
    //js计算时间为刚刚、几分钟前、几小时前、几天前
    timeago:function(dateTimeStamp){ //dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
            var minute = 1000 * 60;      //把分，时，天，周，半个月，一个月用毫秒表示
            var hour = minute * 60;
            var day = hour * 24;
            var week = day * 7;
            var halfamonth = day * 15;
            var month = day * 30;
            var now = new Date().getTime();   //获取当前时间毫秒
            var result ;
            // console.log(now)
            var diffValue = now - dateTimeStamp;//时间差
         
            if(diffValue < 0){
                diffValue = Math.floor(Math.abs(diffValue)/1000);
                // console.log(diffValue);
                var tempDay = Math.floor(diffValue/24/60/60);
                var tempHour = Math.floor((diffValue%(24*60*60))/60/60);
                var tempMin = Math.floor((((diffValue%(24*60*60))%(60*60))/60));
                var tempStr = "";
                if(tempDay>0){
                    tempStr += tempDay + " 天 ";
                }
                if(tempHour>0){
                    tempStr += tempHour + " 小时 ";
                }
                if(tempMin>0){
                    tempStr += tempMin +" 分钟后";
                }
                // console.log(tempDay,tempHour,tempMin)
                return tempStr;
            }
            var minC = diffValue/minute;  //计算时间差的分，时，天，周，月
            var hourC = diffValue/hour;
            var dayC = diffValue/day;
            var weekC = diffValue/week;
            var monthC = diffValue/month;
            if(monthC >= 1 && monthC <= 3){
                result = " " + parseInt(monthC) + "月前"
            }else if(weekC >= 1 && weekC <= 3){
                result = " " + parseInt(weekC) + "周前"
            }else if(dayC >= 1 && dayC <= 6){
                result = " " + parseInt(dayC) + "天前"
            }else if(hourC >= 1 && hourC <= 23){
                result = " " + parseInt(hourC) + "小时前"
            }else if(minC >= 1 && minC <= 59){
                result =" " + parseInt(minC) + "分钟前"
            }else if(diffValue >= 0 && diffValue <= minute){
                result = "刚刚"
            }else {
                var datetime = new Date();
                datetime.setTime(dateTimeStamp);
                var Nyear = datetime.getFullYear();
                var Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
                var Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
                var Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
                var Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
                var Nsecond = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
                result = Nyear + "-" + Nmonth + "-" + Ndate
            }
            return result;
    },
    xtoy:function(value){
        return btoa(btoa(btoa(value)));
    },
    ytox:function(value){
        return atob(atob(atob(value)));
    },
    //本周  上周 参数 0本周 1 上一周 2上两周
    //输出  2018-4-29 
    getDateWeek:function(time){
        var todayDate = new Date(parseInt(time));
        var date = todayDate.getDate();
        var month= todayDate.getMonth() +1;
        var year= todayDate.getYear();
        var dateweek = "";
        if(navigator.appName == "Netscape")
        {
          dateweek = dateweek + (1900+year) + "-" + month + "-" + date ;
        }
        if(navigator.appVersion.indexOf("MSIE") != -1)
        {
          dateweek = dateweek + year + "-" + month + "-" + date ;
        }
        return dateweek;
    },
    weekNum:function(week){
        var now = new Date(); 
        var nowTime = now.getTime() ; 
        var day = now.getDay();
        var oneDayLong = 24*60*60*1000 ; 


        var MondayTime = nowTime - (day-1)*oneDayLong-7*24*60*60*1000*week; 
        var SundayTime =  nowTime + (7-day)*oneDayLong-7*24*60*60*1000*week; 


        // var monday = new Date(MondayTime);
        // var sunday = new Date(SundayTime);
        // console.log(MondayTime,SundayTime)
        // console.log(this.getDateWeek(MondayTime)) ; 
        // console.log(this.getDateWeek(SundayTime)) ;
        return {
            start_date:this.getDateWeek(MondayTime),
            over_date:this.getDateWeek(SundayTime)
        }

    }
    
}


    

export { filters }