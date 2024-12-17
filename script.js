const cart = [];

// إضافة منتج إلى السلة
function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

// تحديث السلة
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - ${item.price} ريال سعودي`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

// تحميل صفحة إتمام الطلب داخل الصفحة
function loadCheckout() {
    const content = `
        <h1 style="color: #28a745;"></h1>
        <p>تم استلام طلبك بنجاح.</p>
        <p>سنقوم بالتواصل معك قريبا.</p>
        <a href="#" onclick="reloadHome()" style="
            display: inline-block;
            margin-top: 1rem;
            padding: 0.7rem 1.5rem;
            background-color: #28a745;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;">العودة إلى الصفحة الرئيسية</a>
    `;

    document.getElementById('products').style.display = 'none';
    document.getElementById('cart').style.display = 'none';
    document.getElementById('dynamic-content').style.display = 'block';
    document.getElementById('dynamic-content').innerHTML = content;
}

// العودة للصفحة الرئيسية
function reloadHome() {
    document.getElementById('products').style.display = 'block';
    document.getElementById('cart').style.display = 'block';
    document.getElementById('dynamic-content').style.display = 'none';
}
