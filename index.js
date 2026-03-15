const inventory = {
    tops: ['images/blue shirt.png', 'images/pink shirt.png', 'images/white shirt.png'],
    bottoms: ['images/blue omd.png', 'images/darkblue omd.png', 'images/grey omd.png'],
    hats: ['images/bow.png', 'images/malgai.png', 'images/zangia.png']
};

function showCategory(category) {
    const grid = document.getElementById('item-grid');
    grid.innerHTML = ''; 

    inventory[category].forEach(fileName => {
        const itemImg = document.createElement('img');
        itemImg.src = fileName;
        itemImg.className = 'menu-item-icon'; // THIS MUST MATCH THE CSS ABOVE
        
        itemImg.onclick = function() {
            equipItem(category, fileName);
        };
        grid.appendChild(itemImg);
    });
}

function equipItem(category, fileName) {
    let layerId;
    if (category === 'tops') layerId = 'top-layer';
    else if (category === 'bottoms') layerId = 'bottom-layer';
    else if (category === 'hats') layerId = 'hat-layer';

    const layerElement = document.getElementById(layerId);
    if (layerElement) {
        layerElement.src = fileName;
        layerElement.style.display = 'block'; // Ensure the layer is visible
    }
}

// Start the game showing tops
window.onload = () => showCategory('tops');