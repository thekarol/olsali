window.onload = function() {

    const anchor = document.getElementById('photos');
    for(let index in photos) {
        const {src, p} = photos[index];
        anchor.innerHTML +=
            `<div style="display: inline-block;">` +
                `<img id=img-${Number(index)+1} src=${src} class="initLoad")">` +
                `<p id=p-${Number(index)+1}> ${p} </p>` +
            '</div>'
    }
};

"use strict";
window.addEventListener('DOMContentLoaded', DOMContentLoaded, false);

function DOMContentLoaded(evt)
{
    let allImages = Array.from( document.getElementsByClassName('initLoad') );
    let numRemaining = allImages.length;
    allImages.forEach(  img => img.onload = img.onerror = onImgDone );

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