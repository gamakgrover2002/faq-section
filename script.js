const faqData = [
  {
    question: " What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offer's realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: " Can I use Frontend Mentor projects in my portfolio?",
    answer:
      " Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community.    There's a help channel where you can ask questions and seek support from other community members.",
  },
];
var open = [];

const closeFAQ = (num) => {
  const faqs = Array.from(document.getElementsByClassName("faqQuestions"));
  const answer = faqs[num].getElementsByClassName("answer");
  answer[0].style.display = "none";
  document.getElementsByClassName("button")[num].style.backgroundImage =
    "url('/assets/images/icon-plus.svg')";
};
const openFAQ = (num) => {
  const faqs = document.getElementsByClassName("faqQuestions");
  const answer = faqs[num].getElementsByClassName("answer");
  answer[0].style.display = "block";
  document.getElementsByClassName("button")[num].style.backgroundImage =
    "url('/assets/images/icon-minus.svg')";
};

const createButton = (index) => {
  const button = document.createElement("button");
  button.className = "button";
  button.addEventListener("click", () => {
    if (open[index] === true) {
      open[index] = false;
      closeFAQ(index);
    } else {
      open[index] = true;
      openFAQ(index);
    }
  });
  return button;
};
const createFaqQuestion = (faqQuestion, faqAnswer, index) => {
  const faqSection = document.createElement("li");
  faqSection.className = "faqQuestions";
  const question = document.createElement("div");
  question.className = "question";
  question.textContent = faqQuestion;
  question.appendChild(createButton(index));
  const answer = document.createElement("div");
  answer.className = "answer";
  answer.textContent = faqAnswer;
  faqSection.appendChild(question);
  faqSection.appendChild(answer);
  return faqSection;
};
const faqQuestions = document.createElement("ul");
faqData.forEach((e, index) => {
  faqQuestions.appendChild(createFaqQuestion(e.question, e.answer, index));
});
document.getElementsByClassName("faq_question")[0].appendChild(faqQuestions);
