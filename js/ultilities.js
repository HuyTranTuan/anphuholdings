function showHeader() {
  const rentalOfficeTabWard = document.querySelector('.rent-office-ward');
  const rentalOfficeTabDistrict = document.querySelector(
    '.rent-office-district',
  );

  rentalOfficeTabDistrict.addEventListener('click', () => {
    rentalOfficeTabDistrict.classList.add('active');
    rentalOfficeTabWard.classList.remove('active');
  });

  rentalOfficeTabWard.addEventListener('click', () => {
    rentalOfficeTabWard.classList.add('active');
    rentalOfficeTabDistrict.classList.remove('active');
  });

  const packageOfficeTabWard = document.querySelector('.package-office-ward');
  const packageOfficeTabDistrict = document.querySelector(
    '.package-office-district',
  );

  packageOfficeTabDistrict.addEventListener('click', () => {
    packageOfficeTabDistrict.classList.add('active');
    packageOfficeTabWard.classList.remove('active');
  });

  packageOfficeTabWard.addEventListener('click', () => {
    packageOfficeTabWard.classList.add('active');
    packageOfficeTabDistrict.classList.remove('active');
  });

  const virtualOfficeTabWard = document.querySelector('.virtual-office-ward');
  const virtualOfficeTabDistrict = document.querySelector(
    '.virtual-office-district',
  );

  virtualOfficeTabDistrict.addEventListener('click', () => {
    virtualOfficeTabDistrict.classList.add('active');
    virtualOfficeTabWard.classList.remove('active');
  });

  virtualOfficeTabWard.addEventListener('click', () => {
    virtualOfficeTabWard.classList.add('active');
    virtualOfficeTabDistrict.classList.remove('active');
  });

  const headerPhoneBtn = document.querySelector('.header-phone-btn');
  const headerPhoneText = document.querySelector('.header-phone-text');

  headerPhoneBtn.addEventListener('click', () => {
    headerPhoneText.classList.toggle('active');
  });
}
function megaSearchEvent() {
  const slider = document.getElementById('price-slider');
  const minDisplay = document.getElementById('min-price-display');
  const maxDisplay = document.getElementById('max-price-display');
  const minInput = document.getElementById('min-price-input');
  const maxInput = document.getElementById('max-price-input');
  // Giá tính theo VND
  let MIN_PRICE = 20000000; // 20 triệu
  let MAX_PRICE = 500000000; // 500 triệu

  function formatVND(value) {
    // Đổi sang "triệu"
    let trieu = Math.round(value / 1000000);
    return trieu.toLocaleString('vi-VN') + ' triệu';
  }

  noUiSlider.create(slider, {
    start: [MIN_PRICE, MIN_PRICE], // điểm bắt đầu
    connect: true,
    step: 1000000, // bước 1 triệu
    range: {
      min: MIN_PRICE,
      max: MAX_PRICE,
    },
  });

  slider.noUiSlider.on('update', function (values, handle) {
    let minVal = Math.round(values[0]);
    let maxVal = Math.round(values[1]);

    minDisplay.textContent = formatVND(minVal);
    maxDisplay.textContent = formatVND(maxVal);

    // Gán vào input hidden để gửi form
    minInput.value = minVal;
    maxInput.value = maxVal;
  });

  // Area Slider
  const areaSlider = document.getElementById('area-slider');
  const minAreaDisplay = document.getElementById('min-area-display');
  const maxAreaDisplay = document.getElementById('max-area-display');
  const minAreaInput = document.getElementById('min-area-input');
  const maxAreaInput = document.getElementById('max-area-input');
  let MIN_AREA = 20; // 20 m2
  let MAX_AREA = 50; // 500 m2

  if (areaSlider) {
    noUiSlider.create(areaSlider, {
      start: [MIN_AREA, MIN_AREA],
      connect: true,
      step: 10,
      range: {
        min: MIN_AREA,
        max: MAX_AREA,
      },
    });

    areaSlider.noUiSlider.on('update', function (values, handle) {
      let minVal = Math.round(values[0]);
      let maxVal = Math.round(values[1]);

      minAreaDisplay.textContent = minVal + ' m²';
      maxAreaDisplay.textContent = maxVal + ' m²';

      minAreaInput.value = minVal;
      maxAreaInput.value = maxVal;
    });
  }

  // Floor Slider
  const floorSlider = document.getElementById('floor-slider');
  const minFloorDisplay = document.getElementById('min-floor-display');
  const maxFloorDisplay = document.getElementById('max-floor-display');
  const minFloorInput = document.getElementById('min-floor-input');
  const maxFloorInput = document.getElementById('max-floor-input');

  let MIN_FLOOR = 1;
  let MAX_FLOOR = 50;

  if (floorSlider) {
    noUiSlider.create(floorSlider, {
      start: [MIN_FLOOR, MIN_FLOOR],
      connect: true,
      step: 1,
      range: {
        min: MIN_FLOOR,
        max: MAX_FLOOR,
      },
    });

    floorSlider.noUiSlider.on('update', function (values, handle) {
      let minVal = Math.round(values[0]);
      let maxVal = Math.round(values[1]);

      minFloorDisplay.textContent = minVal;
      maxFloorDisplay.textContent = maxVal;

      minFloorInput.value = minVal;
      maxFloorInput.value = maxVal;
    });
  }

  // Capacity Slider
  const capacitySlider = document.getElementById('capacity-slider');
  const minCapacityDisplay = document.getElementById('min-capacity-display');
  const maxCapacityDisplay = document.getElementById('max-capacity-display');
  const minCapacityInput = document.getElementById('min-capacity-input');
  const maxCapacityInput = document.getElementById('max-capacity-input');

  let MIN_PEOPLE = 1;
  let MAX_PEOPLE = 100;

  if (capacitySlider) {
    noUiSlider.create(capacitySlider, {
      start: [MIN_PEOPLE, MIN_PEOPLE],
      connect: true,
      step: 1,
      range: {
        min: MIN_PEOPLE,
        max: MAX_PEOPLE,
      },
    });

    capacitySlider.noUiSlider.on('update', function (values, handle) {
      let minVal = Math.round(values[0]);
      let maxVal = Math.round(values[1]);

      minCapacityDisplay.textContent = minVal;
      maxCapacityDisplay.textContent = maxVal;

      minCapacityInput.value = minVal;
      maxCapacityInput.value = maxVal;
    });
  }

  // Toggle search form collapse/expand
  const toggleBtn = document.getElementById('toggle-search-btn');
  const searchFormContent = document.getElementById('search-form-content');
  const toggleText = document.getElementById('toggle-search-text');
  const toggleIcon = document.getElementById('toggle-search-icon');

  if (toggleBtn && searchFormContent) {
    toggleBtn.addEventListener('click', function () {
      // Check if currently hidden
      var isHidden =
        searchFormContent.classList.contains('hidden') ||
        searchFormContent.style.display === 'none' ||
        window.getComputedStyle(searchFormContent).display === 'none';

      if (isHidden) {
        // Show the form
        searchFormContent.classList.remove('hidden');
        searchFormContent.style.display = 'grid';
        toggleText.textContent = 'Thu gọn';
        toggleIcon.classList.remove('fa-chevron-down');
        toggleIcon.classList.add('fa-chevron-up');
      } else {
        // Hide the form
        searchFormContent.classList.add('hidden');
        searchFormContent.style.display = 'none';
        toggleText.textContent = 'Mở rộng';
        toggleIcon.classList.remove('fa-chevron-up');
        toggleIcon.classList.add('fa-chevron-down');
      }
    });
  }

  const resetButton = document.getElementById('mega-search-reset-btn');

  resetButton.addEventListener('click', function () {
    slider.noUiSlider.reset();
    areaSlider.noUiSlider.reset();
    floorSlider.noUiSlider.reset();
    capacitySlider.noUiSlider.reset();
  });
}
function initVPChoThue() {
  const els = document.querySelectorAll('.office-rental-swiper');

  els.forEach((el) => {
    if (!el || el.classList.contains('swiper-initialized')) return;

    new Swiper(el, {
      slidesPerView: 4,
      spaceBetween: 24,
      loop: true,
      speed: 800,
      grabCursor: true,

      navigation: {
        nextEl: '.office-rental-swiper-next',
        prevEl: '.office-rental-swiper-prev',
      },

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 16 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 24 },
        1280: { slidesPerView: 4, spaceBetween: 24 },
      },
    });
  });
}
function resetMegaSearchForm() {
  const searchForm = document.getElementById('search-form');
  const resetSearchFormBtn = document.getElementById('mega-search-reset-btn');
  const minPrice = document.getElementById('min-price-input');
  const maxPrice = document.getElementById('max-price-input');
  const minArea = document.getElementById('min-area-input');
  const maxArea = document.getElementById('max-area-input');
  const minFloor = document.getElementById('min-floor-input');
  const maxFloor = document.getElementById('max-floor-input');
  const minCapacity = document.getElementById('min-capacity-input');
  const maxCapacity = document.getElementById('max-capacity-input');

  resetSearchFormBtn.addEventListener('click', () => {
    searchForm.reset();
    minPrice.value = '20000000';
    maxPrice.value = '20000000';
    minArea.value = '20';
    maxArea.value = '20';
    minFloor.value = '1';
    maxFloor.value = '1';
    minCapacity.value = '1';
    maxCapacity.value = '1';
  });
}

function setCounter() {
  class Counter {
    constructor(config) {
      this.selector = config.selector;
      this.element = null;
      this.count = 0;
      this.countEnd = config.countEnd;
      this.step = config.step;
      this.intervalMS = config.intervalMS;
      this.init();
    }

    getElement() {
      this.element = document.querySelector(this.selector);
    }

    startCounter() {
      this.element.innerHTML = `${this.count}+`;
      setTimeout(() => {
        if (this.count < this.countEnd) {
          this.count += this.step;
          this.startCounter();
        }
      }, this.intervalMS);
    }

    init() {
      this.getElement();
      this.startCounter();
    }
  }

  const yearElement = {
    selector: '#yearCounter',
    countEnd: 10,
    step: 1,
    intervalMS: 50,
  };
  const projectElement = {
    selector: '#projectCounter',
    countEnd: 520,
    step: 2,
    intervalMS: 1,
  };
  const peopleElement = {
    selector: '#peopleCounter',
    countEnd: 75,
    step: 1,
    intervalMS: 30,
  };

  new Counter(yearElement);
  new Counter(projectElement);
  new Counter(peopleElement);
}
function toggleFaq(button) {
  const answer = button.nextElementSibling;
  const icon = button.querySelector('i');

  if (answer.classList.contains('hidden')) {
    answer.classList.remove('hidden');
    icon.classList.add('rotate-180');
    button.classList.add('bg-blue-50');
  } else {
    answer.classList.add('hidden');
    icon.classList.remove('rotate-180');
    button.classList.remove('bg-blue-50');
  }
}
function toggleFullInfo() {
  const fullContent = document.getElementById('info-full');
  const gradient = document.getElementById('seo-gradient');
  const btn = document.getElementById('toggleInfoBtn');
  const btnText = document.getElementById('btnText');
  const btnIcon = document.getElementById('btnIcon');

  if (fullContent.classList.contains('hidden')) {
    fullContent.classList.remove('hidden');
    gradient.classList.add('hidden');
    btnText.textContent = 'Thu gọn';
    btnIcon.classList.remove('fa-chevron-down');
    btnIcon.classList.add('fa-chevron-up');
    // Scroll to full content
    fullContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } else {
    fullContent.classList.add('hidden');
    gradient.classList.remove('hidden');
    btnText.textContent = 'Xem thêm';
    btnIcon.classList.remove('fa-chevron-up');
    btnIcon.classList.add('fa-chevron-down');
    // Scroll back to preview
    document
      .getElementById('info-preview')
      .scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function sideSlider() {
  // Slider diện tích
  const areaSlider = document.getElementById('areaSlider');
  noUiSlider.create(areaSlider, {
    start: [0, 0], // giá trị mặc định
    connect: true,
    range: {
      min: 0,
      max: 2000,
    },
    step: 10,
    tooltips: true,
    format: {
      to: (value) => Math.round(value),
      from: (value) => Number(value),
    },
  });

  const areaMinVal = document.getElementById('areaMinVal');
  const areaMaxVal = document.getElementById('areaMaxVal');
  const minAreaDistrict = document.getElementById('min-area-district');
  const maxAreaDistrict = document.getElementById('max-area-district');

  areaSlider.noUiSlider.on('update', (values) => {
    areaMinVal.textContent = values[0];
    areaMaxVal.textContent = values[1];
    minAreaDistrict.value = values[0];
    maxAreaDistrict.value = values[1];
  });

  // Slider giá thuê
  const priceSlider = document.getElementById('priceSlider');
  noUiSlider.create(priceSlider, {
    start: [0, 0], // giá trị mặc định
    connect: true,
    range: {
      min: 0,
      max: 65,
    },
    step: 1,
    tooltips: true,
    format: {
      to: (value) => Math.round(value),
      from: (value) => Number(value),
    },
  });

  const priceMinVal = document.getElementById('priceMinVal');
  const priceMaxVal = document.getElementById('priceMaxVal');
  const minPriceDistrict = document.getElementById('min-price-district');
  const maxPriceDistrict = document.getElementById('max-price-district');

  priceSlider.noUiSlider.on('update', (values) => {
    priceMinVal.textContent = values[0];
    priceMaxVal.textContent = values[1];
    minPriceDistrict.value = values[0];
    maxPriceDistrict.value = values[1];
  });

  const arrayClassDistrictBtns = document.querySelectorAll(
    '.btn-district-class',
  );
  const classDistrictInput = document.getElementById('class-district');
  arrayClassDistrictBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      classDistrictInput.value = btn.textContent.trim();
    });
  });

  const arraySideDistrictBtns = document.querySelectorAll('.btn-district-side');
  const sideDistrictInput = document.getElementById('side-district');
  arraySideDistrictBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      sideDistrictInput.value = btn.textContent.trim();
    });
  });

  const sideFilterForm = document.getElementById('side-filter-form');
  const sideFormResetBtn = document.getElementById(
    'side-filter-form-reset-btn',
  );
  sideFormResetBtn.addEventListener('click', function (event) {
    event.preventDefault();
    sideFilterForm.reset();
    areaSlider.noUiSlider.reset();
    priceSlider.noUiSlider.reset();
  });
}
