"use strict";

function DOMContentLoaded(evt)
{
    let allImages = Array.from( document.getElementsByClassName('initLoad') );
    let numRemaining = allImages.length;
    allImages.forEach(  img =>  img.complete && img.naturalHeight !== 0 ? numRemaining-- : img.onload = img.onerror = onImgDone );

    function onImgDone(evt)
    {
        numRemaining--;
        if (numRemaining == 0)
        {
            var tmpMsg = document.getElementById('loader');
            tmpMsg.remove();
        }
    }
}

window.onload = function() {

    const anchor = document.getElementById('photos');
    for(let index in photos) {
        let {src, p} = photos[index];
        let style = "display: inline-block;";

        if(index == 16 || index == 15 || index == 4){
            style = style + ' float: right;' ;
        }

        anchor.innerHTML +=
            `<div style="${style}">` +
                `<img id=img-${Number(index)+1} src=${src} )">` +
                `<p id=p-${Number(index)+1}> ${p} </p>` +
            '</div>'
    }

};

window.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
