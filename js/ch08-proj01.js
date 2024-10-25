const tax_rate = parseFloat(prompt('Enter tax rate (e.g., 0.10)'));
const shipping_threshold = parseFloat(prompt('Enter shipping threshold (e.g., 1000)'));

let subtotal = 0;

// Loop through the cart and output rows
cart.forEach(item => {
    const total = calculateTotal(item.quantity, item.product.price);
    subtotal += parseFloat(total);
    outputCartRow(item);
});

const tax = (subtotal * tax_rate).toFixed(2);
const shipping = subtotal > shipping_threshold ? 0 : 40;
const grandTotal = (parseFloat(subtotal) + parseFloat(tax) + shipping).toFixed(2);

// Output the totals row
document.write(`
    <tr class="totals">
        <td colspan="4">Subtotal</td>
        <td>$${subtotal.toFixed(2)}</td>
    </tr>
    <tr class="totals">
        <td colspan="4">Tax</td>
        <td>$${tax}</td>
    </tr>
    <tr class="totals">
        <td colspan="4">Shipping</td>
        <td>$${shipping.toFixed(2)}</td>
    </tr>
    <tr class="totals">
        <td colspan="4" class="focus">Grand Total</td>
        <td class="focus">$${grandTotal}</td>
    </tr>
`);
