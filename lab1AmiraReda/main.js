

$(document).ready(function () {
    let item1;
    $("img").hover(function () {

        item1 = $('<img />', {
            id: 'imgId',
            src: this.src,
            alt: 'Alt text'
        });

        $('body').append(item1);


        $('img').mousemove(function (event) {
            $(item1).css({
                position: 'absolute',
                right: event.pageX + 'px',
                bottom: event.pageY + 'px',
            })

        });



    }, function () {

        $(item1).remove();


    });


})



