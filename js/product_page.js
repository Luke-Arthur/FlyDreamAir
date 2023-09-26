$(document).ready(function() {
    // Fetch product details from API and update the page
    $.ajax({
        url: 'product-details-api',
        method: 'GET',
        success: function(response) {
            $('#points').text(response.points);
            $('#cash-price').text('$' + response.cashPrice);
            $('#shipping-fee').text('$' + response.shippingFee);
        },
        error: function() {
            alert('Failed to fetch product details.');
        }
    });
});