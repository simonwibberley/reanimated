function onReady(e) {
    console.log("document is ready");

    console.log("Masonry:", Masonry);

    const gridElement = document.getElementById('the-grid');

    // crams items into a layout
    const masonryOptions = {
        columnWidth: 400,
        itemSelector: '.grid-item'
    };

    const masonry = new Masonry(gridElement, masonryOptions);
}

document.addEventListener('DOMContentLoaded', onReady);
