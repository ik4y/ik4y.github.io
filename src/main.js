const clientName = document.querySelector(".client_name");
const clientImage = document.querySelector(".client_image");
const testimonial = document.querySelector(".testimonials_content");

const testimonials = [
  {
    name: "Dylan Lucas",
    review:
      "This guy is amazing goes above and beyond to execute any given assignment",
  },

  {
    name: "Sahil R (Project Manager at ApanDevs)",
    review:
      "I'm delighted to wholeheartdly recommend Imad Khan. His remarkable dedication and expertise as a backend developer were evident throught our collaboration. Imad consistently delivered high-quality work, showing an exceptional ability to solve complex technical challenges. His positive attitude, effective communication, and commitment to excellence make him an invaluable asset to any team. Imad's contribution have significantly enhanced our projects, and I'm confident he will continue to excel in all his future endeavours",
  },
];

let i = 0;
let j = testimonials.length;
let duration = 7000;

let displayTestimonial = () => {
  testimonials.forEach(
    (testimony) => (duration = testimony.review.length > 40 ? 10000 : 7000)
  );

  setInterval(() => {
    console.log(duration);
    i = (j + i + 1) % j;
    testimonial.textContent = testimonials[i].review;
    clientName.textContent = testimonials[i].name;
  }, duration);
};
window.onload = displayTestimonial;
