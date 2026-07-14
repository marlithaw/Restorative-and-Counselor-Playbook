// Mobile nav toggle, scrollspy, and back-to-top for the handbook site.

(function () {
  var sidebar = document.getElementById("sidebar");
  var scrim = document.getElementById("scrim");
  var menuBtn = document.getElementById("menuBtn");
  var toTop = document.getElementById("toTop");
  var tocLinks = Array.prototype.slice.call(
    document.querySelectorAll("#toc a")
  );

  function closeMenu() {
    sidebar.classList.remove("open");
    scrim.classList.remove("show");
    menuBtn.setAttribute("aria-expanded", "false");
  }

  menuBtn.addEventListener("click", function () {
    var open = sidebar.classList.toggle("open");
    scrim.classList.toggle("show", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  scrim.addEventListener("click", closeMenu);
  tocLinks.forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });

  // Scrollspy: highlight the section currently in view.
  var sections = tocLinks
    .map(function (a) {
      return document.querySelector(a.getAttribute("href"));
    })
    .filter(Boolean);

  function onScroll() {
    var pos = window.scrollY + 120;
    var current = sections[0];
    sections.forEach(function (s) {
      if (s.offsetTop <= pos) current = s;
    });
    tocLinks.forEach(function (a) {
      a.classList.toggle(
        "active",
        a.getAttribute("href") === "#" + current.id
      );
    });
    toTop.classList.toggle("show", window.scrollY > 600);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "auto" });
  });
})();
