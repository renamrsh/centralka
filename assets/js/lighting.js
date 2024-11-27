$('#lighting').delegate('form', 'submit', function (e) {
    e.preventDefault();
    //$('#txt').text('Zmieniono');
    var form =$(this);
    $.ajax({
        url: 'server.php',
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