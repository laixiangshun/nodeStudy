/**
 * Created by lailai on 2017/4/28.
 */
$(function(){
    $('#num1').attr('checked',true);

    $('#num1').click(function(){
        $('#num1').attr('checked','checked');
        if( $('#num2').attr('checked')=='checked')
        {
            $('#num2').attr('checked',false);
        }
        if( $('#num3').attr('checked')=='checked')
        {
            $('#num3').attr('checked',false);
           // $('#num3').removeAttr('checked');
        }
        $('#first').css('display','block');
        $('#next').css('display','none');
        $('#end').css('display','none');
    });
    $('#num2').click(function(){
        $('#num2').attr('checked','checked');
        if( $('#num1').attr('checked')=='checked')
        {
            $('#num1').attr('checked',false);
        }
        if( $('#num3').attr('checked')=='checked')
        {
            $('#num3').attr('checked',false);
        }
        $('#first').css('display','none');
        $('#next').css('display','block');
        $('#end').css('display','none');
    });
    $('#num3').click(function(){
        $('#num3').attr('checked','checked');
        if( $('#num1').attr('checked')=='checked')
        {
            $('#num1').attr('checked',false);
        }
        if( $('#num2').attr('checked')=='checked')
        {
            $('#num2').attr('checked',false);
        }
        $('#first').css('display','none');
        $('#next').css('display','none');
        $('#end').css('display','block');
    });

});