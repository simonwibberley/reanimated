function onLayoutComplete(e) {
    console.log("masonry: layout complete");
}

function setupMasonry() {
    // crams items into a layout
    const masonryOptions = {
        columnWidth: 200,
        gutter: 10,
        itemSelector: '.rdt-grid-item'
    };

    const masonry = new Masonry('.rdt-masonry-grid', masonryOptions);
    masonry.on('layoutComplete', onLayoutComplete);

    masonry.layout();
}

function onReady(e) {
    setupMasonry(gridNodeList);
}

document.addEventListener('DOMContentLoaded', onReady);
