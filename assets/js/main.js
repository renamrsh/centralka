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

function toggleSidebar() {
    const sidebar = $('#sidebar');
    if (sidebar.css('left') === '0px') {
        sidebar.animate({ left: '-280px' }, 300);
    } else {
        sidebar.animate({ left: '0px' }, 300);
    }
}

function createMenu() {
    $.getJSON('assets/js/menu.json', function(json) {
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
