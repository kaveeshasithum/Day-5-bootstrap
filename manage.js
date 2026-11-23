//st key
const BURGERS_STORAGE_KEY = "burger_menu_items_v1";
const BOTTLES_STORAGE_KEY = "bottle_menu_items_v1";

const DEFAULT_BURGERS = [
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

const DEFAULT_BOTTLES = [
    { id: "BO001", name: "Coca-Cola (500ml Bottle)", price: 250, desc: "Chilled 500ml Coca-Cola bottle to pair perfectly with your burger.", img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500&auto=format&fit=crop&q=60" },
    { id: "BO002", name: "Pepsi (500ml Bottle)", price: 250, desc: "Ice-cold 500ml Pepsi bottle with crisp, refreshing cola taste.", img: "https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=500&auto=format&fit=crop&q=60" },
    { id: "BO003", name: "Sprite (500ml Bottle)", price: 250, desc: "Chilled 500ml clear lemon-lime soda bottle.", img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=500&auto=format&fit=crop&q=60" },
    { id: "BO004", name: "Fanta Orange (500ml Bottle)", price: 250, desc: "Chilled 500ml sparkling orange soda bottle.", img: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=500&auto=format&fit=crop&q=60" },
    { id: "BO005", name: "7UP (500ml Bottle)", price: 250, desc: "Crisp and bubbly 500ml 7UP soft drink bottle served cold.", img: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=500&auto=format&fit=crop&q=60" },
    { id: "BO006", name: "Mountain Dew (500ml Bottle)", price: 250, desc: "Chilled 500ml Mountain Dew bottle with bold citrus refreshment.", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop&q=60" }
];

const FALLBACK_BURGER_IMG = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60";
const FALLBACK_BOTTLE_IMG = "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500&auto=format&fit=crop&q=60";

let burgers = loadMenuList(BURGERS_STORAGE_KEY, DEFAULT_BURGERS);
let bottles = loadMenuList(BOTTLES_STORAGE_KEY, DEFAULT_BOTTLES);

function loadMenuList(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        if (!raw) {
            localStorage.setItem(key, JSON.stringify(fallback));
            return [...fallback];
        }
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [...fallback];
    } catch {
        return [...fallback];
    }
}

function saveMenuToLocalStorage() {
    localStorage.setItem(BURGERS_STORAGE_KEY, JSON.stringify(burgers));
    localStorage.setItem(BOTTLES_STORAGE_KEY, JSON.stringify(bottles));
}

function suggestNextId() {
    const idInput = document.getElementById("newId");
    const catSelect = document.getElementById("newCategory");
    if (!idInput || !catSelect) return;

    const isBurger = catSelect.value === "burger";
    const list = isBurger ? burgers : bottles;
    const prefix = isBurger ? "BR" : "BO";

    let maxNum = 0;
    list.forEach(item => {
        const match = String(item.id).toUpperCase().match(new RegExp(`^${prefix}(\\d+)$`));
        if (match) {
            const num = parseInt(match[1], 10);
            if (num > maxNum) maxNum = num;
        }
    });

    idInput.value = `${prefix}${String(maxNum + 1).padStart(3, "0")}`;
}

function populateManageDropdown() {
    const selectEl = document.getElementById("selectManageItem");
    const priceInput = document.getElementById("updatePriceInput");
    if (!selectEl || !priceInput) return;

    const allItems = [...burgers, ...bottles];
    if (allItems.length === 0) {
        selectEl.innerHTML = `<option value="">No items available</option>`;
        priceInput.value = "";
        return;
    }

    const prev = selectEl.value;
    selectEl.innerHTML = allItems
        .map(item => `<option value="${item.id}">[${item.id}] ${item.name} — Rs. ${item.price}</option>`)
        .join("");

    if (prev && allItems.some(i => i.id === prev)) {
        selectEl.value = prev;
    }
    syncSelectedPrice();
}

function syncSelectedPrice() {
    const selectEl = document.getElementById("selectManageItem");
    const priceInput = document.getElementById("updatePriceInput");
    if (!selectEl || !priceInput) return;

    const found = [...burgers, ...bottles].find(item => item.id === selectEl.value);
    priceInput.value = found ? found.price : "";
}

function renderManageTables() {
    const bTbody = document.getElementById("manage-burgers-tbody");
    const dTbody = document.getElementById("manage-bottles-tbody");
    if (!bTbody || !dTbody) return;

    bTbody.innerHTML = burgers.map(b => `
        <tr>
            <td><strong>${b.id}</strong></td>
            <td>${b.name}</td>
            <td class="price">Rs. ${b.price}</td>
        </tr>
    `).join("");

    dTbody.innerHTML = bottles.map(d => `
        <tr>
            <td><strong>${d.id}</strong></td>
            <td>${d.name}</td>
            <td class="price">Rs. ${d.price}</td>
        </tr>
    `).join("");
}

function renderManageView() {
    populateManageDropdown();
    renderManageTables();
}

const addItemForm = document.getElementById("addItemForm");
if (addItemForm) {
    addItemForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const category = document.getElementById("newCategory").value;
        const id = document.getElementById("newId").value.trim().toUpperCase();
        const name = document.getElementById("newName").value.trim();
        const price = parseInt(document.getElementById("newPrice").value, 10);

        if (!id || !name || isNaN(price) || price <= 0) {
            showManageToast("Please enter valid ID, Name, and Price.");
            return;
        }

        const exists = [...burgers, ...bottles].some(item => item.id.toUpperCase() === id);
        if (exists) {
            showManageToast(`ID ${id} already exists!`);
            return;
        }

        const newItem = {
            id,
            name,
            price,
            desc: category === "bottle" ? "Chilled bottled drink." : "Freshly grilled burger.",
            img: category === "bottle" ? FALLBACK_BOTTLE_IMG : FALLBACK_BURGER_IMG
        };

        if (category === "burger") {
            burgers.push(newItem);
        } else {
            bottles.push(newItem);
        }

        saveMenuToLocalStorage();
        renderManageView();
        document.getElementById("newName").value = "";
        document.getElementById("newPrice").value = "";
        suggestNextId();
        showManageToast(`Added ${id} - ${name} (Rs. ${price})`);
    });
}

function updateItemPrice() {
    const id = document.getElementById("selectManageItem").value;
    const newPrice = parseInt(document.getElementById("updatePriceInput").value, 10);

    if (!id || isNaN(newPrice) || newPrice <= 0) {
        showManageToast("Select an item and enter a valid price.");
        return;
    }

    let updatedName = "";
    const b = burgers.find(item => item.id === id);
    if (b) {
        b.price = newPrice;
        updatedName = b.name;
    }

    const d = bottles.find(item => item.id === id);
    if (d) {
        d.price = newPrice;
        updatedName = d.name;
    }

    if (!updatedName) return;

    saveMenuToLocalStorage();
    renderManageView();
    showManageToast(`Updated ${id} (${updatedName}) price to Rs. ${newPrice}`);
}

function deleteSelectedItem() {
    const id = document.getElementById("selectManageItem").value;
    if (!id) return;

    burgers = burgers.filter(b => b.id !== id);
    bottles = bottles.filter(d => d.id !== id);
    saveMenuToLocalStorage();
    renderManageView();
    suggestNextId();
    showManageToast(`Deleted ${id}`);
}

function showManageToast(message) {
    const msgEl = document.getElementById("toast-message");
    const toastEl = document.getElementById("orderToast");
    if (!msgEl || !toastEl) return;
    msgEl.innerText = message;
    const toast = bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 2000 });
    toast.show();
}

renderManageView();
suggestNextId();