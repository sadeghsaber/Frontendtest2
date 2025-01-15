// alert("hi");
// ...list products
// ............read fille jeson

fetch('file.json')

// ...........request and response of jeeson
    .then(Response => Response.json())
    // ......get date
    .then(data =>{
        /////list product
        const productList =document.getElementById('product-list');
        // ............get data of file jeson
        data.forEach(products =>{

            const productdiv =document.createElement('div');
           
            
            productdiv.className ="product";
            
            productdiv.innerHTML= `

                <img src="${products.image}" alt="">
                <h2>${products.nameproduct}</h2>
                <p>${products.description}</p>
                <span>${products.price}</span>
                
            

            `;
            // .................................apped child
           
            productList.appendChild(productdiv);


        });
        // .........for error
        


    });
//..........................................................\\

    