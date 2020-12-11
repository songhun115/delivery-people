

    $(document).ready(function () {
        var bgImageTotal = 3;
        var randomNumber = Math.round(Math.random() * (bgImageTotal - 1)) + 1;
        $('.section_bg'+ randomNumber).addClass('active');
        
    });
    