const notificationNumber = document.querySelector(".title span");
const notifications = document.querySelectorAll(".notification.active");
const markAllAsRead = document.querySelector(".mark-as-read");
const dots = document.querySelectorAll(".notification-dot");

markAllAsRead.addEventListener("click", () => {
  notifications.forEach((notification) => {
    notification.classList.remove("active");
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  notificationNumber.innerText = "0";
});
