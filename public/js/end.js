/**
 * Created by lailai on 2017/4/28.
 */
$(function(){
   function date(){
       var date=new Date();
       var result;
       var day=date.getDay();
       var hours=date.getHours();
       if(hours>=10 && hours<=14)//中午
       {
           if(day==0 || day==6)//周末
           {
               result='weekend';
           }else{
               result='weekendNoon';
           }
       }else if(hours>=16 && hours<18)//晚上
       {
           if(day==0 || day==6)//周末
           {
               result='weekend';
           }else{
               result='weekendNight';
           }
       }else{
           result='undefined';
       }
       return result;
   }
    $('#delAll').click(function(){
        $('#content').val('');
        $('#bigperson').val('');
        $('#samllperson').val('');
        $('#dazhe').val('');
        if($('#money_100').attr('checked'))
        {
            $('#money_100').attr('checked',false);
        }
        if($('#money_50').attr('checked'))
        {
            $('#money_50').attr('checked',false);
        }
    });
    $('#getResult').click(function(){

    });
});