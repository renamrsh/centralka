$('#lighting').on('click', '.change', function(){
    //$('#txt').text('Zmieniono');
    $.ajax({
        url: 'ajax.php',
        type: 'POST',
        data: {'user':'test'},
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