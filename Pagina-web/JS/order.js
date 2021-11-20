window.addEventListener("DOMContentLoaded", () => {
    const orderButtons = document.querySelectorAll("button[data-order]");
    orderButtons.forEach(item => {
        item.addEventListener('click', (event) => {
            const button = event.currentTarget;
            const container = button.parentNode;
            let order = {
                title: container.querySelector(".title").innerText,
                price: container.querySelector(".price").innerText,
                id: button.getAttribute("data-order") 
            }
           localStorage.setItem("order", JSON.stringify(order));
           let fileName = location.href.split("/").slice(-1);
           const url = window.location.href.replace(fileName , "order.html");
            
           window.location.href = url;
        })
    })
});