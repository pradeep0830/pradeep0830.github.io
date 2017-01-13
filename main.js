// Your code here!
$(document).ready(function () {


    $("#search").click(function () {

        var searchValue = $("#searchterm").val();
        $("img").attr("src", '');

        $.ajax({
            url: "https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=" + searchValue,
            method: 'GET',
            dataType: 'jsonp',


            success: function (data) {
                $.each(data.items, function (i, item) {
                    $("<img/>").attr("src", item.media.m).prependTo("#results");


                    $("img").click(function () {
                        var link = $(this).attr("src");
                        $(".modal-body").html("<img src=" + link + "/>");
                        $("#myModal").modal();

                    });
                })

            }

        });

    })

});





