const notificationNumber = document.querySelector(".title span");
const notifications = document.querySelectorAll(".notification");
const markAllAsRead = document.querySelector(".mark-as-read");
const dots = document.querySelectorAll(".notification-dot");

markAllAsRead.addEventListener("click", () => {
  notifications.forEach((notification) => {
    if (notification.classList.contains("active")) {
      notification.classList.remove("active");

      dots.forEach((dot) => {
        if (dot.classList.contains("active")) {
          dot.classList.remove("active");
        }
      });
      notificationNumber.innerText = "0";
    }
  });
});
