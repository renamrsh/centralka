$(document).ready(function () {
    $('#overlay-menu').click(function (e) {
        toggleSidebar();
        e.preventDefault();    
    });

    $('.fa-bars').click(function (e) {
        toggleSidebar();
        e.preventDefault();
    });

    $('#refresh').click(function (e) {
        loadData();
        e.preventDefault();        
    });

    createMenu();
    loadView();
});
/*
W widoku lighting.html utworzyć formularz przyjmujący dwa pola typu hidden i dwa pola tekstowe:
- jsonFile: type hidden
- id: type hidden
- nazwa przełącznika type:text
- status:text -> wartość „on|off”
Formularz powinien wysyłać dane do skryptu ajax.php za pomocą POST. Następnie skrypt server.php
powinien dane z POST zapisać w formacie json do pliku lighting.json w postaci:
{"switches":{"1":{"switchID":1,"name":"NAZWA_PRZEŁĄCZNIKA","switchStatus":"
status"}}}
Po zapisie danych skrypt server.php powinien zwrócić nam zapisanego lub zaktualizowanego json’a,
którego dane powinny zostać zaprezentowane przy pomocy success uruchamianej w $.ajax
Przykładowy server.php znajduje się pod adresem: http://zico.ayz.pl/alo/4tp/server.zip
*/
function toggleSidebar() {
    const sidebar = $('#sidebar');
    if (sidebar.css('left') === '0px') {
        sidebar.animate({ left: '-280px' }, 300);
    } else {
        sidebar.animate({ left: '0px' }, 300);
    }
}

function createMenu() {
    $.getJSON('menu.json', function(json) {
        var menu = json.menu;
        var htmlMenu = '';
        for (var i = 0; i < menu.length; i++) {
            if (menu[i].active) {
                htmlMenu += '<li><a href="' + menu[i].url + '">' + menu[i].name + '</a></li>';
            }
        }
        $('.sidebar-menu').html(htmlMenu);
    });
}

function loadView(){
    $('.sidebar-menu').on('click','a', function (e) {
        var htmlFile = $(this).attr('href');
        $('#main-content').load('views/' + htmlFile);
        helperHideSidebar();
        e.preventDefault();
    });
}

function helperHideSidebar(){
    $('#overlay-menu').hide();
    $('#sidebar').animate({ left: '-280px' }, 300);
}
