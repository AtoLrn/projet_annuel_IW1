$(document).ready(() => {
    $('#left').click(() => {
        moveToLeft(
        )

    })  
    $('#right').click(() => {
        moveToRight()
    })
})

const getValue = () => {
    const container = $('#recette-container')
    return parseInt(container.attr("data-index"))
}

const moveToLeft = () => {
    const container = $('#recette-container')
    container.attr("data-index",getValue()-1 > 0? getValue()-1 : 0 )
    hideImage()

}

const moveToRight = () => {
    const container = $('#recette-container')
    container.attr("data-index", getValue()+1 > getAllImg().length - 1 ? getAllImg().length - 1 : getValue()+1)
    hideImage()

}

const getAllImg = () => {
    return $(".recette-img")
}

const hideImage = () => {
    const img = getAllImg()
    const selected = getValue()
    img.each((i,t) => {
        if (i < selected) {
            $(t).addClass('hidden-recipe')
            $(t).css({transform: `translateX(-${100 * (selected - 1)}% + -${(selected - 1) * 5}em) translateY(10%)`})
        }
        else {
            $(t).removeClass('hidden-recipe')
            $(t).css({transform: `translateX(calc(-${100 * selected}% + -${selected * 5}em))`})
        }
    })
}