$(document).ready(function() {
    //Инициализация переменных
    let $cardImg = $('#imgHolder img')

    let cardSpecsHolder = $('#card-specs')
    let cardPriceHolder = $('#card-price')
    let cardDescripHolder = $('#card-description')
    let cardTypeHolder = $('#card-type')

    let cardPrice = 0
    let cardSpecs = ''
    let cardDescrip = ''
    let cardType = ''
    //Инициализация переменных
    
    //Вызов Функций
    
    $('#cardForm input').on('change', function () {
        calculatePrice()
        compaleSpecs()
        compaleDescrip()
        compaleType()
    })
    //Вызов Функций

    //Выбор рубашки
    $cardImg.on('click', function () {
        $(this).attr('src', './img/02.PNG')
    })

    $('#colorsSelector .colorItem').on('click', function () {
        let imgPath = $(this).attr('data-img-path')
        $cardImg.fadeOut(200, function () {
            $cardImg.attr('src', imgPath).fadeIn(200)
        })

    })
    //Выбор рубашки

    //Функции
    function calculatePrice() {
        let cardPricePortret = $('input[name=portret]:checked', '#cardForm').val()
        let cardPricePack = $('input[name=pack]:checked', '#cardForm').val()
        let cardPriceGoldcard = $('input[name=GoldCard]:checked', '#cardForm').val()

        cardPricePortret = parseInt(cardPricePortret)
        cardPricePack = parseInt(cardPricePack)
        cardPriceGoldcard = parseInt(cardPriceGoldcard)

        cardPrice = cardPricePortret + cardPricePack + cardPriceGoldcard

        cardPriceHolder.text(cardPrice + ' KZT')
    }

    function compaleSpecs() {
        cardSpecs = $('input[name=portret]:checked + label', '#cardForm').text()
        cardSpecs += ', ' + $('input[name=pack]:checked + label', '#cardForm').text()
        cardSpecs += ', ' + $('input[name=GoldCard]:checked + label', '#cardForm').text()
        
        cardSpecsHolder.text(cardSpecs)
    }

    function compaleDescrip() {
        $('.colorItem').on('click', function() {
            cardDescrip = $(this).attr('data-descrip')
        })

        cardDescripHolder.text('Рубашка - ' + cardDescrip)
    }

    function compaleType() {
        $('.colorItem').on('click', function () {
            cardType = $(this).attr('data-type')
        })

        cardTypeHolder.text('Тип рубашки - ' + cardType)
        console.log(cardType)
    }
    //Функции



})