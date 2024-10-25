/* define your functions here */

function outputCartRow(item) {
    const { product, quantity } = item;
    const total = calculateTotal(quantity, product.price);

    document.write(`
        <tr>
            <td><img src="project2/images/${product.filename}" alt="${product.title}" class="painting"></td>
            <td>${product.title}</td>
            <td>${quantity}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>$${total}</td>
        </tr>
    `);
}
