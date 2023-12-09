const reviewCounts = [
  { count: 2536, cta: "Happy Clients" },
  { count: 7562, cta: "Total Projects" },
  { count: 2013, cta: "Cups Coffee" },
  { count: 10536, cta: "Total Submitted" },
];

const divisor = 20;
const reviewCountsContainer = document.getElementById(
  "review-counts-container"
);

reviewCounts.forEach((item, index) => {
  const result = item.count / divisor;
  let adding_value = Math.floor(result);

  const reviewCountCard = document.createElement("div");
  reviewCountCard.classList.add("review-counts-cards");
  reviewCountsContainer.appendChild(reviewCountCard);

  const countDiv = document.createElement("div");
  countDiv.classList.add("count");
  reviewCountCard.appendChild(countDiv);

  const ctaDiv = document.createElement("div");
  ctaDiv.classList.add("cta");
  ctaDiv.textContent = item.cta;
  reviewCountCard.appendChild(ctaDiv);

  function updateResult() {
    countDiv.textContent = `${adding_value}`;
  }

  updateResult();

  const intervalId = setInterval(() => {
    adding_value += Math.floor(result);
    if (adding_value > item.count) {
      clearInterval(intervalId);
      adding_value = item.count;
      updateResult();
      console.log(
        `Interval for resultDiv_${index} stopped. Original value fetched.`
      );
    } else {
      updateResult();
    }
  }, 200);
});



document.addEventListener('scroll', function() {
    // Get the header element
    const header = document.getElementById('header');
    
    // Check the scroll position
    if (window.scrollY > 0) {
      // If scrolled down, change the background color
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Change the color as needed
    } else {
      // If at the top, revert to the initial background color
      header.style.backgroundColor = 'transparent';
    }
  });