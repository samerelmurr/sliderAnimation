const rootVar = document.querySelector(":root");
let customerReview = [
  {
    "id" : 1,
    "name" : "Nathaniel Marquez 1",
    "review" : "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image" : "./images/pic.png",
    "rating" : 5,
    "linkedin" : "https://www.linkedin.com/",
    "occupation" : "CEO at Apple"
  },
  {
    "id" : 2,
    "name" : "Nathaniel Marquez 2",
    "review" : "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image" : "./images/pic.png",
    "rating" : 5,
    "linkedin" : "https://www.linkedin.com/",
    "occupation" : "CEO at Apple"
  },
  {
    "id" : 3,
    "name" : "Nathaniel Marquez 3",
    "review" : "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image" : "./images/pic.png",
    "rating" : 5,
    "linkedin" : "https://www.linkedin.com/",
    "occupation" : "CEO at Apple"
  },
  {
    "id" : 4,
    "name" : "Nathaniel Marquez 4",
    "review" : "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image" : "./images/pic.png",
    "rating" : 5,
    "linkedin" : "https://www.linkedin.com/",
    "occupation" : "CEO at Apple"
  },
  {
    "id" : 5,
    "name" : "Nathaniel Marquez 5",
    "review" : "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image" : "./images/pic.png",
    "rating" : 5,
    "linkedin" : "https://www.linkedin.com/",
    "occupation" : "CEO at Apple"
  },
  {
    "id" : 6,
    "name" : "Nathaniel Marquez 6",
    "review" : "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image" : "./images/pic.png",
    "rating" : 5,
    "linkedin" : "https://www.linkedin.com/",
    "occupation" : "CEO at Apple"
  },
  {
    "id" : 7,
    "name" : "Nathaniel Marquez 7",
    "review" : "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image" : "./images/pic.png",
    "rating" : 5,
    "linkedin" : "https://www.linkedin.com/",
    "occupation" : "CEO at Apple"
  },
  {
    "id" : 8,
    "name" : "Nathaniel Marquez 8",
    "review" : "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image" : "./images/pic.png",
    "rating" : 5,
    "linkedin" : "https://www.linkedin.com/",
    "occupation" : "CEO at Apple"
  },
  {
    "id" : 9,
    "name" : "Nathaniel Marquez 9",
    "review" : "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image" : "./images/pic.png",
    "rating" : 5,
    "linkedin" : "https://www.linkedin.com/",
    "occupation" : "CEO at Apple"
  },
  {
    "id" : 10,
    "name" : "Nathaniel Marquez 10",
    "review" : "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image" : "./images/pic.png",
    "rating" : 5,
    "linkedin" : "https://www.linkedin.com/",
    "occupation" : "CEO at Apple"
  },
  {
    "id" : 11,
    "name" : "Nathaniel Marquez 11",
    "review" : "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image" : "./images/pic.png",
    "rating" : 5,
    "linkedin" : "https://www.linkedin.com/",
    "occupation" : "CEO at Apple"
  },
  {
    "id" : 12,
    "name" : "Nathaniel Marquez 12",
    "review" : "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image" : "./images/pic.png",
    "rating" : 5,
    "linkedin" : "https://www.linkedin.com/",
    "occupation" : "CEO at Apple"
  },
  {
    "id" : 13,
    "name" : "Nathaniel Marquez 13",
    "review" : "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image" : "./images/pic.png",
    "rating" : 5,
    "linkedin" : "https://www.linkedin.com/",
    "occupation" : "CEO at Apple"
  },
  {
    "id" : 14,
    "name" : "Nathaniel Marquez 14",
    "review" : "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image" : "./images/pic.png",
    "rating" : 5,
    "linkedin" : "https://www.linkedin.com/",
    "occupation" : "CEO at Apple"
  },
  {
    "id" : 15,
    "name" : "Nathaniel Marquez 15",
    "review" : "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
    "image" : "./images/pic.png",
    "rating" : 5,
    "linkedin" : "https://www.linkedin.com/",
    "occupation" : "CEO at Apple"
  }
];

function displayCustomerReview(customerReview){

  let customerReviewItems = customerReview.map((item) => {
    return `<div class="slide">
                <img id="pic" src="${item.image}" alt="pic" />
                <div class="content">
                    <div class="content_header">
                        <h1>${item.name}</h1>
                        <img src="./images/linkedin.png" alt="linkedin" />
                    </div>
                    <h4>${item.occupation}</h4>
                    <p>${item.review}</p>
                    <div class="content_rating">
                        <img src="./images/star.png" alt="star" />
                        <img src="./images/star.png" alt="star" />
                        <img src="./images/star.png" alt="star" />
                        <img src="./images/star.png" alt="star" />
                        <img src="./images/star.png" alt="star" />
                    </div>
                    <div class="content_certificate">
                        <img src="./images/trust-logo.png" alt="trust-logo" />
                    </div>
                </div>
            </div>`;
  });

  customerReviewItems = customerReviewItems.join("");
  document.querySelector(".slides__container").innerHTML = customerReviewItems;
};

function carousel() {
  let carouselSlider = document.querySelector(".slider");
  let list = document.querySelector(".slides__container");
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
    clearInterval(a);
    clearInterval(b);
  }

  function unhover() {
    a = setInterval(moveFirst, 10);
    b = setInterval(moveSecond, 10);
  }

  clone();

  let a = setInterval(moveFirst, 10);
  let b = setInterval(moveSecond, 10);

  carouselSlider.addEventListener("mouseenter", hover);
  carouselSlider.addEventListener("mouseleave", unhover);
}
// window.addEventListener("DOMContentLoaded", () => {
//   rootVar.style.setProperty("--sliderSize", `${customerReview.length}`);
//   displayCustomerReview(customerReview);
//   carousel();
// });

function loadAnimation() {
  rootVar.style.setProperty("--sliderSize", `${customerReview.length}`);
  displayCustomerReview(customerReview);
  carousel();
}

(async () => {
  for (const customerReview of [...document.querySelectorAll(".slides__container")]) {
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
// (async () => {
//   // Using a for..of loop in case you want more slideshows on page.
//   for (const slideshow of [...document.querySelectorAll(".slideshow")]) {
//       // Wait for all images to load before initializing the slideshow
//       for (const image of [...slideshow.children]) {
//       await new Promise(resolve => {
//           if (image.complete) resolve();
//           else image.onload = resolve;
//       });
//       }

//       // Let's go
//       initSlideshow(slideshow);
//   }
//   })();
