const pages = [
  "splash.html",
  "home.html",
  "shop.html",
  "gallery.html",
  "content2.html",
  "content1.html",
  "ContentPage/content.html",
  "content4.html",
  "UserProfile/profile.html",
  "feedback.html",
  "TeamPage/team.html",
  "sitemap.html",
];

// Add click event listeners to each group in the sitemap
for (let i = 1; i <= pages.length; i++) {
  document.getElementById("groupId" + i).addEventListener("click", function () {
    document.location.href = pages[i - 1];
  });
}
// Open editor.html in a new tab when clicked on groupId13
document.getElementById("groupId13").addEventListener("click", function () {
  window.open("editor.html", "_blank");
});

document.getElementById("groupId14").addEventListener("click", function () {
  document.location.href = "#groupId5";
});

document.getElementById("groupId15").addEventListener("click", function () {
  document.location.href = "#groupId9";
});

document
  .querySelectorAll(".node:not(#groupId14):not(#groupId15)")
  .forEach(function (node) {
    node.addEventListener("click", function () {
      document.location.href = "#groupId11";
    });
  });
