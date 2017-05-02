/**
 * Created by lailai on 2017/4/28.
 */
$(function(){
    var howmach;
    $('#money_100').attr('disabled',true);
    $('#money_50').attr('disabled',true);
    $('#dazhe').attr('disabled',true);
   function dates(){
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
               result='Noon';
           }
       }else if(hours>=16 && hours<18)//晚上
       {
           if(day==0 || day==6)//周末
           {
               result='weekend';
           }else{
               result='Night';
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
        if($('#money_100').attr('checked')=='checked')
        {
            $('#money_100').attr('checked',false);
        }
        if($('#money_50').attr('checked')=='checked')
        {
            $('#money_50').attr('checked',false);
        }
    });
    $('#money_100').click(function(){
        $('#money_100').attr('checked',true);
        if($('#money_50').attr('checked')=='checked')
        {
            $('#money_50').attr('checked',false);
        }

    });
    $('#money_50').click(function(){
        $('#money_50').attr('checked',true);
        if($('#money_100').attr('checked')=='checked')
        {
            $('#money_100').attr('checked',false);
        }
    });
    $('#getResult').click(function(){
        var dazhe=$('#dazhe').val();
        if(dazhe=='')
        {
            var bigpersonnum=Number($('#bigperson').val());
            var samllperson=Number($('#samllperson').val());
            var moneyyouhui;
            if($('#money_100').attr('checked')=='checked')
            {
                moneyyouhui=Number($('#money_100').val());
            }else if($('#money_50').attr('checked')=='checked')
            {
                moneyyouhui=Number($('#money_50').val());
            }
            var bigMoney;
            var smallMoney;
            var flag;
            var date=dates();
            switch (date)
            {
                case "weekend":
                    bigMoney=688;
                    smallMoney=488;
                    break;
                case "Noon":
                    bigMoney=368;
                    smallMoney=168;
                    break;
                case "Night":
                    bigMoney=586;
                    smallMoney=386;
                    break;
                default :
                    flag=false;
                    break;
            }
            if(flag==false)
            {
                $('#content').val('非服务时间不能用');
                return false;
            }
            if(bigpersonnum+samllperson==4)
            {
                if(samllperson!=0)
                {
                    samllperson=samllperson-1;
                }else
                {
                    bigpersonnum=bigpersonnum-1;
                }
            }
            var money=bigpersonnum*bigMoney + samllperson*smallMoney;
            if(money>1000)
            {
                /*if($('#money_100').attr('checked'))
                 {
                 money=money-100;
                 }else if($('#money_50').attr('checked'))
                 {
                 money=money-50;
                 }else
                 {
                 money=money-100;//默认减100
                 }*/
                $('#money_100').attr('disabled',false);
                $('#money_50').attr('disabled',false);
            }
            if(money>1200)
            {
                /* if(dazhe!='')
                 {
                 money=money * (Number(dazhe)/10);
                 }else{
                 money=money;//不打折
                 }*/
                $('#dazhe').attr('disabled',false);
            }
            howmach=money;
            $('#content').val(money);
        }else
        {
            /*var content=$('#content').val();
            if(Number(content)>1200)
            {
                var result=Number(content) * (Number(dazhe)/10);
                $('#content').val(result);
            }else
            {
                $('#content').val(content)
            }*/
            var content=howmach;
            if(content>1200)
            {
                var result=howmach * (Number(dazhe)/10);
                $('#content').val(result);
            }else
            {
                $('#content').val(howmach);
            }
        }
    });
    $('#set00').click(function(){
        $('#content').val('0');
    });
    $('#delete').click(function(){
        var content=$('#content').val();
        content=content.substring(0,content.length-1);
        $('#content').val(content);
    });
    $('#bigperson').focusin(function(){
        $('.num3').click(function(){
            var bigperson=$('#bigperson').val();
            $('#bigperson').val(bigperson+$(this).val());
        });
        $('#delete').click(function(){
            var bigperson=$('#bigperson').val();
            bigperson=bigperson.substring(0,bigperson.length-1);
            $('#bigperson').val(bigperson);
        });
    });
    $('#samllperson').focusin(function(){
        $('.num3').click(function(){
            var samllperson=$('#samllperson').val();
            $('#samllperson').val(samllperson+$(this).val());
        });
        $('#delete').click(function(){
            var samllperson=$('#samllperson').val();
            samllperson=samllperson.substring(0,samllperson.length-1);
            $('#samllperson').val(samllperson);
        });
    });
    $('#money_100').click(function(){
        var content=$('#content').val();
        if(Number(content)>1000)
        {
            var result=Number(content)-100;
            $('#content').val(result);
            howmach=result;
            $('#money_50').attr('disabled',true);
            if(result>1200)
            {
                $('#dazhe').attr('disabled',false);
            }else{
                $('#dazhe').attr('disabled',true);
            }
        }
    });
    $('#money_50').click(function(){
        var content=$('#content').val();
        if(Number(content)>1000)
        {
            var result=Number(content)-50;
            howmach=result;
            $('#content').val(result);
            $('#money_100').attr('disabled',true);
            if(result>1200)
            {
                $('#dazhe').attr('disabled',false);
            }else{
                $('#dazhe').attr('disabled',true);
            }
        }
    });
});