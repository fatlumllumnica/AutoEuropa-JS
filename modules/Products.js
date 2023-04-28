function composeProductsHTML(products) {
    let  result = ''

    products.forEach(product => {
        result += `
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-3">
            <div class="card py-4">
                <a href="view-product.html?id=${product.id}" class="text-link">
                    <img src="${product.image}" alt="${product.title}" class="product-img" />
                </a>
                <div class="card-body">
                    <a href="view-product.html?id=${product.id}" class="text-link">
                        <h5 class="card-title">${product.title}</h5>
                    </a>
                    <p class="card-text">
                        <span class="badge bg-primary">${product.category}</span>
                        <span class="description">${product.description.substring(0, 80)}...</span>
                    </p>
                </div>
            </div>
        </div>
        `
    });
    return result
}

// function composeAPIURL(options) {

//     let url = 'http://localhost:3000/products'
//     const limit = (options.limit !==null) ? options.limit: null
//     const sort = (options.sort !== null) ? options.sort: null

//     if(limit !== null && sort !== null) {
//         return `${url}?limit=${limit}&sort=${sort}`
//     }
//     else if(limit !== null) {
//         return `${url}?limit=${limit}`
//     }
//     else if (sort !== null) {
//         return `${url}?sort=${sort}`
//     }     else {
//         return url
//     }
// }

function composeAPIURL(options) {
    let url = 'https://fakestoreapi.com/products'
    const limit = (options.limit !== null) ? options.limit : null
    const sort = (options.sort !== null) ? options.sort : null

    if(limit !== null && sort !== null) {
        return `${url}?limit=${limit}&sort=${sort}`
    } 
    else if(limit !== null) {
        return `${url}?limit=${limit}`
    }
    else if(sort !== null) {
        return `${url}?sort=${sort}`
    } else {
        return url
    }
}


export default function getProducts(div, options) {
    axios.get(composeAPIURL(options))
        .then(response => {
            div.innerHTML = composeProductsHTML(response.data)})
        }


export function getProductByID(id) {

}
// 'http://localhost:3000/products'




jom met te sesion 26 min 1:52min 