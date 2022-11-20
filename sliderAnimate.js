const rootVar = document.querySelector(":root");
let customerReview = [
  {
    "id": 1,
    "name": "Nathaniel Marquez 1",
    "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image": "./images/pic.png",
    "rating": 5,
    "linkedin": "https://www.linkedin.com/",
    "occupation": "CEO at Apple"
  },
  {
    "id": 2,
    "name": "Nathaniel Marquez 2",
    "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image": "./images/pic.png",
    "rating": 5,
    "linkedin": "https://www.linkedin.com/",
    "occupation": "CEO at Apple"
  },
  {
    "id": 3,
    "name": "Nathaniel Marquez 3",
    "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image": "./images/pic.png",
    "rating": 5,
    "linkedin": "https://www.linkedin.com/",
    "occupation": "CEO at Apple"
  },
  {
    "id": 4,
    "name": "Nathaniel Marquez 4",
    "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image": "./images/pic.png",
    "rating": 5,
    "linkedin": "https://www.linkedin.com/",
    "occupation": "CEO at Apple"
  },
  {
    "id": 5,
    "name": "Nathaniel Marquez 5",
    "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image": "./images/pic.png",
    "rating": 5,
    "linkedin": "https://www.linkedin.com/",
    "occupation": "CEO at Apple"
  },
  {
    "id": 6,
    "name": "Nathaniel Marquez 6",
    "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image": "./images/pic.png",
    "rating": 5,
    "linkedin": "https://www.linkedin.com/",
    "occupation": "CEO at Apple"
  },
  {
    "id": 7,
    "name": "Nathaniel Marquez 7",
    "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image": "./images/pic.png",
    "rating": 5,
    "linkedin": "https://www.linkedin.com/",
    "occupation": "CEO at Apple"
  },
  {
    "id": 8,
    "name": "Nathaniel Marquez 8",
    "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image": "./images/pic.png",
    "rating": 5,
    "linkedin": "https://www.linkedin.com/",
    "occupation": "CEO at Apple"
  },
  {
    "id": 9,
    "name": "Nathaniel Marquez 9",
    "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image": "./images/pic.png",
    "rating": 5,
    "linkedin": "https://www.linkedin.com/",
    "occupation": "CEO at Apple"
  },
  {
    "id": 10,
    "name": "Nathaniel Marquez 10",
    "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image": "./images/pic.png",
    "rating": 5,
    "linkedin": "https://www.linkedin.com/",
    "occupation": "CEO at Apple"
  },
  {
    "id": 11,
    "name": "Nathaniel Marquez 11",
    "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image": "./images/pic.png",
    "rating": 5,
    "linkedin": "https://www.linkedin.com/",
    "occupation": "CEO at Apple"
  },
  {
    "id": 12,
    "name": "Nathaniel Marquez 12",
    "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image": "./images/pic.png",
    "rating": 5,
    "linkedin": "https://www.linkedin.com/",
    "occupation": "CEO at Apple"
  },
  {
    "id": 13,
    "name": "Nathaniel Marquez 13",
    "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image": "./images/pic.png",
    "rating": 5,
    "linkedin": "https://www.linkedin.com/",
    "occupation": "CEO at Apple"
  },
  {
    "id": 14,
    "name": "Nathaniel Marquez 14",
    "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image": "./images/pic.png",
    "rating": 5,
    "linkedin": "https://www.linkedin.com/",
    "occupation": "CEO at Apple"
  },
  {
    "id": 15,
    "name": "Nathaniel Marquez 15",
    "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image": "./images/pic.png",
    "rating": 5,
    "linkedin": "https://www.linkedin.com/",
    "occupation": "CEO at Apple"
  }
];

function displayCustomerReview(customerReview) {

  let customerReviewItems = customerReview.map((item) => {
    return `<div class="slider__container__slides__slide">
                <img id="pic" src="${item.image}" draggable="false"  alt="pic" />
                <div class="content">
                    <div class="content_header">
                        <h1>${item.name}</h1>
                        <img src="./images/linkedin.png" draggable="false" alt="linkedin"  />
                    </div>
                    <h4>${item.occupation}</h4>
                    <p>${item.review}</p>
                    <div class="content_rating">
                        <img src="./images/star.png" draggable="false" alt="star" />
                        <img src="./images/star.png" draggable="false" alt="star" />
                        <img src="./images/star.png" draggable="false" alt="star" />
                        <img src="./images/star.png" draggable="false"  alt="star" />
                        <img src="./images/star.png" draggable="false" alt="star" />
                    </div>
                    <div class="content_certificate">
                        <img src="./images/trust-logo.png" draggable="false" alt="trust-logo" />
                    </div>
                </div>
            </div>`;
  });

  customerReviewItems = customerReviewItems.join("");
  document.querySelector(".slider__container__slides").innerHTML = customerReviewItems;
};

function carousel() {
  let carouselSlider = document.querySelector(".slider__container");
  let list = document.querySelector(".slider__container__slides");
  let list2;

  const speed = 1;

  const width = list.offsetWidth;
  let x = 0;
  let x2 = width;

  function clone() {
    list2 = list.cloneNode(true);
    carouselSlider.appendChild(list2);
    list2.style.left = `${width}px`;
  }

  function moveFirst() {
    x -= speed;

    if (width >= Math.abs(x)) {
      list.style.left = `${x}px`;
    } else {
      x = width;
    }
  }

  function moveSecond() {
    x2 -= speed;

    if (list2.offsetWidth >= Math.abs(x2)) {
      list2.style.left = `${x2}px`;
    } else {
      x2 = width;
    }
  }

  function hover() {
    carouselSlider.style.cursor = "grab";
    clearInterval(a);
    clearInterval(b);
  }

  function unhover() {
    carouselSlider.style.cursor = "pointer";
    a = setInterval(moveFirst, 10);
    b = setInterval(moveSecond, 10);
  }

  clone();

  let a = setInterval(moveFirst, 10);
  let b = setInterval(moveSecond, 10);

  carouselSlider.addEventListener("mouseenter", hover);
  carouselSlider.addEventListener("mouseleave", unhover);
  // let clicked = false;
  // let moved = false;
  // let lastX = 0;
  // let lastX2 = 0;
  function down() {
    carouselSlider.style.cursor = "grabbing";
    // clicked = true;
  }
  function up() {
    carouselSlider.style.cursor = "grab";
    // if (moved && clicked) {
    //   x = lastX;
    //   x2 = lastX2;
    //   x = move(e).list_click;
    //   x2 = move(e).list_click2;
    // }
    // clicked = false;
    // moved = false;
  }

  // function move(e) {
  //   moved = true;
  //   console.log(e);
  //   let list_click = 0;
  //   let list_click2 = 0;
  //   if (clicked) {
  //     if (width >= Math.abs(x)) {
  //       list_click = (x - e.clientX) * -1;
  //     }
  //     if (list2.offsetWidth >= Math.abs(x2)) {
  //       list_click2 = (x2 - e.clientX) * -1;
  //     }
  //     list.style.left = `${list_click}px`;
  //     list2.style.left = `${list_click2}px`;

  //     // lastX = list_click;
  //     // lastX2 = list_click2;
  //   }
  // }
  carouselSlider.addEventListener("mousedown", down);
  document.body.addEventListener("mouseup", up);
  // carouselSlider.addEventListener("mousemove", move);
}

function loadAnimation() {
  rootVar.style.setProperty("--sliderSize", `${customerReview.length}`);
  displayCustomerReview(customerReview);
  carousel();
}

(async () => {
  for (const customerReview of [...document.querySelectorAll(".slider__container__slides")]) {
    // Wait for all images to load before initializing the slideshow
    for (const review of [...customerReview.children]) {
      await new Promise(resolve => {
        if (review.complete) resolve();
        else review.onload = resolve;
      });
    }

    // Let's go
    loadAnimation();
  }
})();
