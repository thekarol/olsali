window.onload = function() {

    const anchor = document.getElementById('photos');
    for(let index in photos) {
        const {src, p} = photos[index];
        anchor.innerHTML +=
            `<div style="display: inline-block;">` +
                `<img id=img-${Number(index)+1} src=${src}>` +
                `<p id=p-${Number(index)+1}> ${p} </p>` +
            '</div>'
    }
};

