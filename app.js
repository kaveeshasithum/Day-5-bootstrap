const APP_BURGERS_KEY = "burger_menu_items_v1";
const APP_BOTTLES_KEY = "bottle_menu_items_v1";

const INITIAL_BURGERS = [
    { id: "BR001", name: "Classic Beef Burger", price: 1100, desc: "Juicy grilled beef patty with fresh lettuce, tomatoes, and house sauce.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60" },
    { id: "BR002", name: "Crispy Chicken Burger", price: 1000, desc: "Juicy burger with fresh vegetables and tasty sauce.", img: "https://tse1.mm.bing.net/th/id/OIP.bZzh-uiQckyWxnoQuN7OjAHaE8?r=0&pid=Api&h=220&P=0" },
    { id: "BR003", name: "Double Cheese Burger", price: 1500, desc: "Double patties loaded with melted cheddar cheese, pickles, and onions.", img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60" },
    { id: "BR004", name: "BBQ Bacon Burger", price: 1650, desc: "Smoky barbecue sauce, crispy bacon strips, onion rings, and melted cheese.", img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&auto=format&fit=crop&q=60" },
    { id: "BR005", name: "Spicy Zinger Burger", price: 1200, desc: "Extra crispy spicy chicken fillet topped with jalapenos and spicy mayo.", img: "https://images.unsplash.com/photo-1615297928064-24977384d0da?w=500&auto=format&fit=crop&q=60" },
    { id: "BR006", name: "Veggie Delight Burger", price: 850, desc: "Healthy crispy vegetable patty with fresh avocado, greens, and herb sauce.", img: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500&auto=format&fit=crop&q=60" },
    { id: "BR007", name: "Mushroom Swiss Burger", price: 1400, desc: "Savory sauteed mushrooms with melted Swiss cheese over a tender patty.", img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&auto=format&fit=crop&q=60" },
    { id: "BR008", name: "Crispy Fish Burger", price: 1050, desc: "Golden fried fish fillet served with tangy tartar sauce and crisp lettuce.", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=60" },
    { id: "BR009", name: "Monster Tower Burger", price: 1950, desc: "Triple-stacked patties with egg, cheese, hash brown, and special sauce.", img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&auto=format&fit=crop&q=60" },
    { id: "BR010", name: "Peri-Peri Grilled Chicken Burger", price: 1350, desc: "Flame-grilled chicken breast marinated in zesty peri-peri sauce with garlic mayo.", img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500&auto=format&fit=crop&q=60" },
    { id: "BR011", name: "Hawaiian Teriyaki Burger", price: 1450, desc: "Sweet and savory glazed patty topped with a grilled pineapple ring and Swiss cheese.", img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&auto=format&fit=crop&q=60" },
    { id: "BR012", name: "Egg & Cheese Burger", price: 1250, desc: "Juicy patty topped with a sunny-side-up fried egg, crispy hash brown, and cheddar.", img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&auto=format&fit=crop&q=60" },
    { id: "BR013", name: "Tandoori Masala Burger", price: 1300, desc: "Spiced tandoori chicken patty with mint chutney, red onions, and creamy yogurt sauce.", img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop&q=60" },
    { id: "BR014", name: "Crispy Paneer Burger", price: 1150, desc: "Golden-fried spiced cottage cheese patty with crunchy slaw and tangy tandoori mayo.", img: "https://images.unsplash.com/photo-1585238341267-1cfec2046a55?w=500&auto=format&fit=crop&q=60" },
    { id: "BR015", name: "Double Smash Burger", price: 1750, desc: "Two crispy-edged smashed patties with caramelized onions, American cheese, and secret sauce.", img: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?w=500&auto=format&fit=crop&q=60" },
    { id: "BR016", name: "Jalapeno Popper Burger", price: 1550, desc: "Loaded with spicy jalapenos, cream cheese, crispy bacon, and chipotle mayo.", img: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=500&auto=format&fit=crop&q=60" },
    { id: "BR017", name: "Garlic Butter Steak Burger", price: 1600, desc: "Rich roasted garlic herb butter melted over a thick seared beef patty and provolone.", img: "https://images.unsplash.com/photo-1534790566855-4cb788d389ec?w=500&auto=format&fit=crop&q=60" },
    { id: "BR018", name: "Buffalo Ranch Chicken Burger", price: 1350, desc: "Crispy chicken tossed in tangy buffalo hot sauce, cooled down with creamy ranch dressing.", img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop&q=60" }
];

const INITIAL_BOTTLES = [
    { id: "BO001", name: "Coca-Cola (500ml Bottle)", price: 250, desc: "Chilled 500ml Coca-Cola bottle to pair perfectly with your burger.", img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500&auto=format&fit=crop&q=60" },
    { id: "BO002", name: "Pepsi (500ml Bottle)", price: 250, desc: "Ice-cold 500ml Pepsi bottle with crisp, refreshing cola taste.", img: "https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=500&auto=format&fit=crop&q=60" },
    { id: "BO003", name: "Sprite (500ml Bottle)", price: 250, desc: "Chilled 500ml clear lemon-lime soda bottle.", img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=500&auto=format&fit=crop&q=60" },
    { id: "BO004", name: "Fanta Orange (500ml Bottle)", price: 250, desc: "Chilled 500ml sparkling orange soda bottle.", img: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=500&auto=format&fit=crop&q=60" },
    { id: "BO005", name: "7UP (500ml Bottle)", price: 250, desc: "Crisp and bubbly 500ml 7UP soft drink bottle served cold.", img: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=500&auto=format&fit=crop&q=60" },
    { id: "BO006", name: "Mountain Dew (500ml Bottle)", price: 250, desc: "Chilled 500ml Mountain Dew bottle with bold citrus refreshment.", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop&q=60" }
];

const DEFAULT_BURGER_PHOTO = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60";
const DEFAULT_BOTTLE_PHOTO = "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500&auto=format&fit=crop&q=60";

let menuBurgers = [];
let menuBottles = [];
let orderCart = [];

function toSafeNumber(val, fallback = 0) {
    const cleaned = Number(String(val ?? "").replace(/[^0-9.-]/g, ""));
    return Number.isFinite(cleaned) ? cleaned : fallback;
}

function readLinkedStorage(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        if (!raw) {
            localStorage.setItem(key, JSON.stringify(fallback));
            return [...fallback];
        }
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [...fallback];
        return parsed.map(item => ({
            ...item,
            price: toSafeNumber(item.price, 0)
        }));
    } catch {
        return [...fallback];
    }
}

function syncMenuFromManageStorage() {
    menuBurgers = readLinkedStorage(APP_BURGERS_KEY, INITIAL_BURGERS);
    menuBottles = readLinkedStorage(APP_BOTTLES_KEY, INITIAL_BOTTLES);
    renderMainMenuCards();
    syncCartWithLatestMenu();
}

function renderMainMenuCards() {
    const burgerList = document.getElementById("burger-list");
    const drinksList = document.getElementById("drinks-list");
    if (!burgerList || !drinksList) return;

    const navBurgers = document.getElementById("nav-burgers-count");
    const navDrinks = document.getElementById("nav-drinks-count");
    const burgerSub = document.getElementById("burger-count-text");
    const bottleSub = document.getElementById("bottle-count-text");

    if (navBurgers) navBurgers.innerText = `Burgers (${menuBurgers.length})`;
    if (navDrinks) navDrinks.innerText = `Bottled Drinks (${menuBottles.length})`;
    if (burgerSub) burgerSub.innerText = `Choose from ${menuBurgers.length} handcrafted gourmet burgers`;
    if (bottleSub) bottleSub.innerText = `Choose from ${menuBottles.length} ice-cold bottled sodas`;

    burgerList.innerHTML = menuBurgers.map(item => buildCardHTML(item, "burger")).join("");
    drinksList.innerHTML = menuBottles.map(item => buildCardHTML(item, "bottle")).join("");

    const b1 = menuBurgers.find(b => b.id === "BR001");
    const b4 = menuBurgers.find(b => b.id === "BR004");
    const s1 = document.getElementById("special-price-1");
    const s2 = document.getElementById("special-price-2");
    if (b1 && s1) s1.innerText = `Price: Rs. ${toSafeNumber(b1.price, 0)}`;
    if (b4 && s2) s2.innerText = `Price: Rs. ${toSafeNumber(b4.price, 0)}`;

    runSearchFilter();
}

function buildCardHTML(item, type) {
    const btnClass = type === "bottle" ? "btn-order btn-drink" : "btn-order";
    const fallbackImg = type === "bottle" ? DEFAULT_BOTTLE_PHOTO : DEFAULT_BURGER_PHOTO;
    const safeName = String(item.name).replace(/'/g, "\\'");
    const safePrice = toSafeNumber(item.price, 0);

    return `
        <div class="col food-item" data-id="${item.id}" data-name="${String(item.name).toLowerCase()}" data-desc="${String(item.desc || "").toLowerCase()}">
            <div class="card mb-3 h-100">
                <img src="${item.img || fallbackImg}" onerror="this.src='${fallbackImg}'" class="card-img-top food-img" alt="${item.name}">
                <div class="card-body d-flex flex-column">
                    <div class="d-flex justify-content-between align-items-start gap-2">
                        <h5 class="card-title mb-1">${item.name}</h5>
                        <span class="badge bg-dark text-light border border-danger-subtle">${item.id}</span>
                    </div>
                    <p class="card-text flex-grow-1">${item.desc || (type === "bottle" ? "Chilled bottled drink." : "Freshly prepared burger.")}</p>
                    <h5 class="price mb-3">Price: Rs. ${safePrice}</h5>
                    <button class="btn ${btnClass}" onclick="addToCart('${item.id}', '${safeName}', ${safePrice})">Order Now</button>
                    <p class="card-text mt-2 mb-0"><small class="card-meta">ID: ${item.id} • Available for delivery</small></p>
                </div>
            </div>
        </div>
    `;
}

function syncCartWithLatestMenu() {
    const allLatest = [...menuBurgers, ...menuBottles];
    orderCart = orderCart
        .filter(c => allLatest.some(m => m.id === c.id))
        .map(c => {
            const latest = allLatest.find(m => m.id === c.id);
            return {
                ...c,
                name: latest.name,
                price: toSafeNumber(latest.price, 0),
                quantity: Math.max(1, toSafeNumber(c.quantity, 1))
            };
        });
    renderCartBill();
}

function addToCart(id, name, price) {
    const numPrice = toSafeNumber(price, 0);
    const existing = orderCart.find(item => item.id === id);
    if (existing) {
        existing.quantity = toSafeNumber(existing.quantity, 1) + 1;
        existing.price = numPrice;
    } else {
        orderCart.push({ id, name, price: numPrice, quantity: 1 });
    }
    renderCartBill();
    showAppToast(`${name} added to bill!`);
}

function changeQuantity(index, delta) {
    if (!orderCart[index]) return;
    orderCart[index].quantity = toSafeNumber(orderCart[index].quantity, 1) + toSafeNumber(delta, 0);
    if (orderCart[index].quantity <= 0) {
        orderCart.splice(index, 1);
    }
    renderCartBill();
}

function removeFromCart(index) {
    orderCart.splice(index, 1);
    renderCartBill();
}

function clearCart() {
    orderCart = [];
    renderCartBill();
    showAppToast("Bill cleared.");
}

function renderCartBill() {
    const cartItemsEl = document.getElementById("cart-items");
    if (!cartItemsEl) return;

    const cartCountEl = document.getElementById("cart-count");
    const badgeEl = document.getElementById("bill-items-badge");
    const subtotalEl = document.getElementById("cart-subtotal");
    const deliveryEl = document.getElementById("delivery-fee");
    const totalEl = document.getElementById("cart-total");

    let totalQty = 0;
    let subtotal = 0;

    if (orderCart.length === 0) {
        cartItemsEl.innerHTML = `
            <div class="text-center py-5 empty-bill-msg">
                <i class="bi bi-bag-plus display-5 d-block mb-2"></i>
                <p class="mb-0">No items added yet.</p>
                <small>Click "Order Now" on the left to add burgers or drinks to your bill.</small>
            </div>
        `;
        if (cartCountEl) cartCountEl.innerText = "0";
        if (badgeEl) badgeEl.innerText = "0 Items";
        if (subtotalEl) subtotalEl.innerText = "Rs. 0";
        if (deliveryEl) deliveryEl.innerText = "Rs. 0";
        if (totalEl) totalEl.innerText = "Rs. 0";
        return;
    }

    let html = '<ul class="list-group list-group-flush w-100">';
    orderCart.forEach((item, idx) => {
        const unitPrice = toSafeNumber(item.price, 0);
        const qty = Math.max(1, toSafeNumber(item.quantity, 1));
        const lineTotal = unitPrice * qty;

        totalQty += qty;
        subtotal += lineTotal;

        html += `
            <li class="list-group-item d-flex justify-content-between align-items-center px-2 py-2">
                <div class="me-2">
                    <h6 class="mb-0 fw-bold small">${item.id} • ${item.name}</h6>
                    <small class="text-muted">Rs. ${unitPrice} x ${qty} = <strong>Rs. ${lineTotal}</strong></small>
                </div>
                <div class="d-flex align-items-center gap-1">
                    <button class="btn btn-sm btn-outline-light py-0 px-2" onclick="changeQuantity(${idx}, -1)">-</button>
                    <span class="px-1 fw-bold small">${qty}</span>
                    <button class="btn btn-sm btn-outline-light py-0 px-2" onclick="changeQuantity(${idx}, 1)">+</button>
                    <button class="btn btn-sm btn-outline-danger py-0 px-2 ms-1" onclick="removeFromCart(${idx})"><i class="bi bi-trash"></i></button>
                </div>
            </li>
        `;
    });
    html += "</ul>";

    const deliveryFee = 200;
    const total = subtotal + deliveryFee;

    cartItemsEl.innerHTML = html;
    if (cartCountEl) cartCountEl.innerText = String(totalQty);
    if (badgeEl) badgeEl.innerText = `${totalQty} ${totalQty === 1 ? "Item" : "Items"}`;
    if (subtotalEl) subtotalEl.innerText = `Rs. ${subtotal}`;
    if (deliveryEl) deliveryEl.innerText = `Rs. ${deliveryFee}`;
    if (totalEl) totalEl.innerText = `Rs. ${total}`;
}

function checkout() {
    if (orderCart.length === 0) {
        if (typeof Swal !== "undefined") {
            Swal.fire({
                title: "Empty Bill!",
                text: "Please add a burger or bottled drink first.",
                icon: "warning"
            });
        } else {
            alert("Please add a burger or bottled drink first.");
        }
        return;
    }

    let subtotal = 0;
    orderCart.forEach(item => {
        const price = toSafeNumber(item.price, 0);
        const qty = Math.max(1, toSafeNumber(item.quantity, 1));
        subtotal += price * qty;
    });
    const deliveryFee = 200;
    const total = subtotal + deliveryFee;

    if (typeof Swal === "undefined") {
        alert(`Total Bill: Rs. ${total}\nPayment Successful!`);
        orderCart = [];
        renderCartBill();
        return;
    }

    Swal.fire({
        title: `Total Bill: Rs. ${total}`,
        text: "How would you like to pay? (Card or Cash)",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Card",
        cancelButtonText: "Cash"
    }).then((result) => {
        const paymentMethod = result.isConfirmed ? "Card" : "Cash";

        Swal.fire({
            title: "Payment Successful!",
            html: `Payment Method: <strong>${paymentMethod}</strong><br>Total Bill: <strong>Rs. ${total}</strong>`,
            icon: "success"
        });

        orderCart = [];
        renderCartBill();
    });
}

function runSearchFilter() {
    const searchEl = document.getElementById("searchInput");
    if (!searchEl) return;

    const q = searchEl.value.trim().toLowerCase();
    document.querySelectorAll(".food-item").forEach(card => {
        const id = (card.getAttribute("data-id") || "").toLowerCase();
        const name = (card.getAttribute("data-name") || "").toLowerCase();
        const desc = (card.getAttribute("data-desc") || "").toLowerCase();
        card.style.display = (!q || id.includes(q) || name.includes(q) || desc.includes(q)) ? "" : "none";
    });
}

const searchBox = document.getElementById("searchInput");
if (searchBox) {
    searchBox.addEventListener("keyup", runSearchFilter);
}

window.addEventListener("storage", function (e) {
    if (e.key === APP_BURGERS_KEY || e.key === APP_BOTTLES_KEY) {
        syncMenuFromManageStorage();
    }
});

window.addEventListener("focus", syncMenuFromManageStorage);

function showAppToast(message) {
    const msgEl = document.getElementById("toast-message");
    const toastEl = document.getElementById("orderToast");
    if (!msgEl || !toastEl) return;
    msgEl.innerText = message;
    const toast = bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 2000 });
    toast.show();
}

syncMenuFromManageStorage();
renderCartBill();