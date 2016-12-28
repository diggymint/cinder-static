/**
 * Created by ex dee on 12/26/2016.
 */

$(function () {
    var $window = $(window);

    $('section[data-type="background"]').each(function () {
        var $bjobj = $(this);
        $window.scroll(function () {

            var yPos = (-($window.scrollTop() / $bjobj.data('speed'))) + 75;

            var coords = '25% ' + yPos + 'px';

            $bjobj.css({backgroundPosition: coords});
            
        });
    });
});

