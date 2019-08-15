function onLayoutComplete(e) {
    console.log("masonry: layout complete");
}

function onReady(e) {
    console.log("document is ready");

    console.log("Masonry:", Masonry);

    // XXX: should be queryselectorall but didn't work very well creating
    // multiple handles...
    const gridElement = document.querySelector('.rdt-masonry-grid');

    // crams items into a layout
    const masonryOptions = {
        columnWidth: 400,
        gutter: 0,
        itemSelector: '.rdt-grid-item'
    };

    const masonry = new Masonry(gridElement, masonryOptions);
    masonry.on('layoutComplete', onLayoutComplete);

    masonry.layout();
}

document.addEventListener('DOMContentLoaded', onReady);
