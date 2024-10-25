/* define your functions here */

function calculateTotal(quantity, price) {
    return (quantity * price).toFixed(2); // Keeps the result to 2 decimal places
}

function outputCartRow(item) {
    const { product, quantity } = item;
    const total = calculateTotal(quantity, product.price);

    document.write(`
        <tr>
            <td><img src="${product.filename}" alt="${product.title}" class="painting"></td>
            <td>${product.title}</td>
            <td>${quantity}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>$${total}</td>
        </tr>
    `);
}
