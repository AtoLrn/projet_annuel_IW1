$(document).ready(() => { 
    if($('#star_1').length) {
        for(let i = 1; i <= 5; i++) {
            $('#star_' + i).hover(function() {
                for(let j = 1; j <= 5; j++) {
                    $('#star_' + j + ' path')[0].style = (j <= i ? "fill: #FFC300" : "fill: #feff98");
                }
            })

            $('#star_' + i).mouseleave(function() {
                for(let j = 1; j <= 5; j++) {
                    $('#star_' + j + ' path')[0].style = "fill: " + $('#star_' + j).attr('colorvalue');
                }
            })
        }
    }
})

