$('#lighting').on('click', '.change', function(){
    //$('#txt').text('Zmieniono');
    var form =$('#form');
    $.ajax({
        url: 'ajax.php',
        type: 'POST',
        data: form.serialize(),
        beforeSend:function(){
            console.log('start');
        },
        complete:function(){
            console.log('complete request');
        },
        success:function(response){
            $('p').text(response);
        },
        error:function(){}
    });
});