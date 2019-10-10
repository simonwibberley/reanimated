
function onLayoutComplete(e) {
    console.log("masonry: layout complete");
}

function setupMasonry(gridElement) {
    console.log("gridElement is %o", gridElement);

    // crams items into a layout
    const masonryOptions = {
        columnWidth: 200,
        gutter: 10,
        itemSelector: '.rdt-grid-item'
    };

    const masonry = new Masonry(gridElement, masonryOptions);
    masonry.on('layoutComplete', onLayoutComplete);

    masonry.layout();
}

function onReady(e) {
    console.log("document is ready");
    console.log("Masonry:", Masonry);

    const gridElement = document.querySelector('.rdt-masonry-grid');

    // We're called for every page, so we only care if the Masonry grid is
    // actually part of the template.
    if (gridElement !== null)  setupMasonry(gridElement);
}

document.addEventListener('DOMContentLoaded', onReady);
