let store = "";
function createStore() {
    const manageFName = document.getElementById("manageFName").value;
    const manageLName = document.getElementById("manageLName").value;
    const manageEmail = document.getElementById("manageEmail").value;
    const managePassword = document.getElementById("managePassword").value;
    const manager = new User(1, manageFName, manageLName, manageEmail, managePassword, true);
    const storeName = document.getElementById("storeName").value;
    const storeDescription = document.getElementById("storeDescription").value;
    const logoUrl = document.getElementById("logoUrl").value;

    store = new Store(manager, storeName, storeDescription, logoUrl);
    localStorage.setItem('store', JSON.stringify(store))
    window.location.href = "/html/store.html";
}