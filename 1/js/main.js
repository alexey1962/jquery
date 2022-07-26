$(document).ready(function() {
    let $cardImg = $('#imgHolder img')
    
    $cardImg.on('click', function() {
        $(this).attr('src', './img/02.PNG')
    })

    $('#colorsSelector .colorItem').on('click', function() {
        let imgPath = $(this).attr('data-img-path')
        $cardImg.fadeOut(200, function() {
            $cardImg.attr('src', imgPath).fadeIn(200)    
        })
        
    })
})