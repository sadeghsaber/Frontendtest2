let products = [];
// ...read file json
fetch('file.json')
// ...response to file json
    .then(response => response.json())
    .then(data => {
        // ........get data product
        products = data;
        // ........dispay products
        displayProducts(products);
    })
    // ....for error
    .catch(error => console.error('Error fetching the products:', error));
// ...............................................................
// ........................display products
function displayProducts(products) {
    // ..........for display products
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous results
    // .......................for display products
    products.forEach(product => {
        // ..div for products
        const productDiv = document.createElement('div');
        // ....style css
        productDiv.className = 'product';
        // ....desplay data
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.nameproduct}">
            <h2>${product.nameproduct}</h2>
            <p>${product.description}</p>
            <p>قیمت: ${product.price} تومان</p>
        `;
        productList.appendChild(productDiv);
    });
}
// ....for get date text of input search
document.getElementById('search').addEventListener('input', function() {

    // ..............varibles
    const searchTerm = this.value.toLowerCase();
    const searchid = parseInt(this.value);

    // ...........for fiillter name produts
    const filteredProducts = products.filter(product => 
        // .......rolus with name products
        product.nameproduct.toLowerCase().includes(searchTerm)
        
    );
    // ..........for search with id
    const filteredProductsid = products.filter(product => 
        // .......rolus with name products
        // ........eculas == id 
        product.id ===searchid
        
    );
    // ....display fillter products
    displayProducts(filteredProducts);
    // ....display fillter id
    displayProducts(filteredProductsid);
});
