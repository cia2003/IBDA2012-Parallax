// Accordion component
function createFAQItem(data) {
  const listHTML =
    data.list && data.list.length
      ? `
      <ul class="text-list text--dark-grey">
        ${data.list.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    `
      : "";

  return `
        <section class="item" id="${data.id}">
            <p class="number number--light-grey">${data.number}</p>
            <p class="text">${data.question}</p>
            <button class="dropdown-button" onclick="showFAQ('${data.id}')">
                <svg
                    class="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </button>

            <div class="hidden-box">
                <p class="text-description">
                    ${data.answer}
                </p>
                ${listHTML}
            </div>
        </section>
    `;
}
function insertItemToAccordionSection(data) {
  const container = document.getElementById("faq-container");
  container.insertAdjacentHTML("beforeend", createFAQItem(data));
}

export { insertItemToAccordionSection };
