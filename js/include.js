let includeCount = 0;
let includeTotal = 0;

async function includeHTML(selector, url, callback) {
  const el = document.querySelector(selector);
  if (!el) return;

  includeTotal++;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Cannot load ${url}`);
    el.innerHTML = await res.text();
  } catch (err) {
    console.error(err);
  } finally {
    includeCount++;

    // ✅ CHỈ init khi TẤT CẢ include xong
    if (includeCount === includeTotal) {
      requestAnimationFrame(() => {
        initAfterInclude();
      });
    }
  }
}

function initAfterInclude() {
  /* ===== Breadcrumb ===== */
  if (typeof initBreadcrumb === 'function') {
    initBreadcrumb();
  }

  /* ===== Flowbite (CHỈ 1 LẦN) ===== */
  if (
    !window.__FLOWBITE_INITED__ &&
    typeof window.initFlowbite === 'function'
  ) {
    window.__FLOWBITE_INITED__ = true;
    initFlowbite();
  }

  /* ===== AOS ===== */
  if (window.AOS && !window.__AOS_INITED__) {
    window.__AOS_INITED__ = true;
    AOS.init({
      delay: 0,
      duration: 1000,
      // once: true,
    });
  }

  /* ===== Component phụ thuộc layout ===== */
  requestAnimationFrame(() => {
    if (typeof initTeamSwiper === 'function') initTeamSwiper();
    if (typeof initPhuongSwiper === 'function') initPhuongSwiper();
    if (typeof initRangeSlider === 'function') initRangeSlider();
    if (typeof initUsersRating === 'function') initUsersRating();
    if (typeof initAgentSwiper === 'function') initAgentSwiper();
  });
}
