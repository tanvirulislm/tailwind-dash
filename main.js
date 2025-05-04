// Initialize Feather Icons
feather.replace();

// Toggle Sidebar
document
  .getElementById("sidebar-toggle")
  .addEventListener("click", function () {
    document.querySelector(".sidebar").classList.toggle("collapsed");
  });

// Profile Dropdown
document.getElementById("profileBtn").addEventListener("click", function (e) {
  e.stopPropagation();
  const dropdown = document.getElementById("profileDropdown");
  const chevron = document.getElementById("profileChevron");

  dropdown.classList.toggle("hidden");
  chevron.classList.toggle("rotate-180");

  // Close notification dropdown if open
  const notificationDropdown = document.getElementById("notificationDropdown");
  notificationDropdown.classList.add("hidden");
  notificationDropdown.classList.remove("scale-100", "opacity-100");
  notificationDropdown.classList.add("scale-95", "opacity-0");
});

// Notification Dropdown
document.getElementById("notificationBtn")
  .addEventListener("click", function (e) {
    e.stopPropagation();
    const dropdown = document.getElementById("notificationDropdown");

    dropdown.classList.toggle("hidden");
    dropdown.classList.toggle("scale-95");
    dropdown.classList.toggle("opacity-0");
    dropdown.classList.toggle("scale-100");
    dropdown.classList.toggle("opacity-100");

    // Close profile dropdown if open
    document.getElementById("profileDropdown").classList.add("hidden");
    document.getElementById("profileChevron").classList.remove("rotate-180");
  });

// Handle clicking outside for both dropdowns
document.addEventListener("click", function (e) {
  // Click outside profile dropdown & button
  if (
    !e.target.closest("#profileBtn") &&
    !e.target.closest("#profileDropdown")
  ) {
    document.getElementById("profileDropdown").classList.add("hidden");
    document.getElementById("profileChevron").classList.remove("rotate-180");
  }

  // Click outside notification dropdown & button
  if (
    !e.target.closest("#notificationBtn") &&
    !e.target.closest("#notificationDropdown")
  ) {
    const dropdown = document.getElementById("notificationDropdown");
    dropdown.classList.add("hidden");
    dropdown.classList.remove("scale-100", "opacity-100");
    dropdown.classList.add("scale-95", "opacity-0");
  }
});
