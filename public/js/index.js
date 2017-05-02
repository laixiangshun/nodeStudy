/**
 * Created by lailai on 2017/4/28.
 */
$(function(){
    /*function onclicknum(num)
    {
        var value=$('#content').val();
        $('#content').val(value+num);
    }*/
    $('.num').click(function(){

        var value=$('#content').val();
        var num=$(this).val();
        $('#content').val(value+num);
    });
    $('#result').click(function(){
        var content=$('#content').val();
        var result=eval(content);
        $('#content').val(content+'='+result);
    });
    $('#del').click(function(){
        var content=$('#content').val();
        content=content.substring(0,content.length-1);
        $('#content').val(content);
    });
    $('#madd').click(function(){
        $.ajax({
            url: '/saveresult',
            type: 'post',
            data: 'data='+$('#content').val(),
            success: function(data){
               /* if(data.result==1)
                {
                    $('#content').val('m');
                }*/
                if(data.result==0)
                {
                    $('#content').val('');
                }
            }
        });
    });
    $('#mc').click(function(){
        $.ajax({
            url: '/deldata',
            type: 'post',
            success: function(data)
            {
                if(data.result==0)
                {
                    $('#content').val('');
                }
            }
        })
    });
    $('#mr').click(function(){
        $.ajax({
            url: '/readdata',
            type: 'get',
            success: function(data)
            {
                if(data.result)
                {
                    $('#content').val(data.result);
                }else
                {
                    $('#content').val('');
                }
            }
        })
    });
    $('#ms').click(function(){
        $.ajax({
            url: '/msresult',
            type: 'post',
            data: 'data='+$('#content').val(),
            success: function(data){
                 if(data.result==1)
                 {
                 $('#content').val('m');
                 }
                if(data.result==0)
                {
                    $('#content').val('');
                }
            }
        });
    });
    $('#ce').click(function(){
        $('#content').val('');
    });
    $('#c').click(function(){
        $('#content').val('0');
    });

   // $('#single').attr('checked',true);
    $('#single').click(function(){
        $('#single').attr('checked',true);
        if( $('#more').attr('checked')=='checked')
        {
            $('#more').attr('checked',false);
        }
        $('#content').val('');
    });
    $('#more').click(function(){
        $('#more').attr('checked',true);
        if( $('#single').attr('checked')=='checked')
        {
            $('#single').attr('checked',false);
        }
        $('#content').val('');
    });
    $('#delall').click(function(){
        $('#content').val('');
        $('#money').val('');
        $('#year').val('');
        $('#pase').val('');
    });
    $('#set0').click(function(){
        $('#content').val('0');
    });
    $('#getData').click(function(){
        var money= Number($('#money').val());
        if(money==0)
        {
            $('#money').val('金额不能为空');
            return false;
        }
        var year=Number($('#year').val());
        if(year==0)
        {
            $('#year').val('年限不能为空');
            return false;
        }
        var pase=$('#pase').val();
        if(pase=='')
        {
            $('#pase').val('利率不能为空');
            return false;
        }
        var choose;
        if($('#single').attr('checked')=='checked')
        {
            choose=$('#single').val();
            var pases=pase.replace('%','');
                pases=pases/100;
            var result=money+(money*pases*year);
            $('#content').val(result);
        }else if($('#more').attr('checked')=='checked')
        {
            choose=$('#more').val();
            var pases=pase.replace('%','');
            pases=pases/100;
            var result=money*(Math.pow((1+pases),year));
            $('#content').val(result);
        }
    });
    $('#money').focus(function(){
        $('.num2').click(function(){
            var money=$('#money').val();
            $('#money').val(money+$(this).val());
        });
        $('#delnext').click(function(){
            var money=$('#money').val();
            money=money.substring(0,money.length-1);
            $('#money').val(money);
        });
    });
    /*$('#delnext').click(function(){
        var content=$('#content').val();
        content=content.substring(0,content.length-1);
        $('#content').val(content);
    });*/
    $('#year').focus(function(){
        $('.num2').click(function(){
            var year=$('#year').val();
            $('#year').val(year+$(this).val());
        });
        $('#delnext').click(function(){
            var year=$('#year').val();
            year=year.substring(0,year.length-1);
            $('#year').val(year);
        });
    });
    $('#pase').focus(function(){
        $('.num2').click(function(){
            var pase=$('#pase').val();
            $('#pase').val(pase+$(this).val());
        })
    });
});