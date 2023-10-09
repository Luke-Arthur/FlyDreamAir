$(document).ready(function() {
    // Initialize cart items
    let cartItems = [];

    // Add item to cart
    function addItemToCart(item) {
        cartItems.push(item);
        updateCart();
    }

    // Remove item from cart
    function removeItemFromCart(index) {
        cartItems.splice(index, 1);
        updateCart();
    }

    // Update cart
    function updateCart() {
        let totalItems = 0;
        let totalAmountCash = 0;
        let totalAmountPoints = 0;

        // Clear cart items
        $('#cartItems').empty();

        // Add cart items
        cartItems.forEach(function(item, index) {
            let total = item.price * item.quantity;
            totalItems += item.quantity;
            totalAmountCash += total;

            let row = `<tr>
                            <td>${item.name}</td>
                            <td>$${item.price.toFixed(2)}</td>
                            <td>${item.quantity}</td>
                            <td>$${total.toFixed(2)}</td>
                            <td><button class="btn btn-danger btn-sm remove-item" data-index="${index}">Remove</button></td>
                        </tr>`;
            $('#cartItems').append(row);
        });

        // Update summary
        $('#totalItems').text(totalItems);
        $('#totalAmountCash').text(totalAmountCash.toFixed(2));
        $('#totalAmountPoints').text(totalAmountPoints);
    }

    // Add item to cart on form submit
    $('#addItemForm').submit(function(e) {
        e.preventDefault();
        let name = $('#itemName').val();
        let price = parseFloat($('#itemPrice').val());
        let quantity = parseInt($('#itemQuantity').val());

        if (name && price && quantity) {
            let item = {
                name: name,
                price: price,
                quantity: quantity
            };
            addItemToCart(item);
            $('#addItemForm')[0].reset();
        }
    });

    // Remove item from cart on button click
    $(document).on('click', '.remove-item', function() {
        let index = $(this).data('index');
        removeItemFromCart(index);
    });

    // Checkout
    $('#checkoutBtn').click(function() {
        let paymentMethod = $('input[name="paymentMethod"]:checked').val();
        let totalAmount = paymentMethod === 'cash' ? parseFloat($('#totalAmountCash').text()) : parseInt($('#totalAmountPoints').text());

        if (totalAmount > 0) {
            alert(`Checkout successful! Total amount: ${totalAmount}`);
            cartItems = [];
            updateCart();
        } else {
            alert('Your cart is empty. Please add items before checkout.');
        }
    });
});