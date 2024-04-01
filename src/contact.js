export { renderContactSection };

const pageContent = document.getElementById("content");

function renderContactSection() {
  pageContent.textContent = "";
  const contactSection = document.createElement("section");
  contactSection.classList.add("main__contact-section");
  pageContent.appendChild(contactSection);

  const contentData = [
    {
      header: "Contact Us",
      details:
        "We'd love to hear from you! If you have any questions, feedback, or inquiries, please don't hesitate to reach out to us.",
      address: "Address: 123 Main Street, City, Country",
      phone: "Phone: +123 456 7890",
      email: "Email: info@burgerrestaurant.com",
    },
  ];

  const contactDetails = contentData.map((element) => {
    const contactWrapper = document.createElement("div");
    contactWrapper.classList.add("main__contact-wrapper");

    const contactHeader = document.createElement("h2");
    contactHeader.textContent = element.header;
    contactHeader.classList.add("main__contact-header");
    contactWrapper.appendChild(contactHeader);

    const contactDetails = document.createElement("p");
    contactDetails.classList.add("main__contact-details");
    contactDetails.textContent = element.details;
    contactWrapper.appendChild(contactDetails);

    const address = document.createElement("p");
    address.classList.add("main__contact-address");
    address.textContent = element.address;
    contactWrapper.appendChild(address);

    const number = document.createElement("p");
    number.classList.add("main__contact-num");
    number.textContent = element.phone;
    contactWrapper.appendChild(number);

    const email = document.createElement("p");
    email.classList.add("main__contact-email");
    email.textContent = element.email;
    contactWrapper.appendChild(email);

    return contactWrapper;
  });

  contactDetails.forEach((contactWrapper) => {
    contactSection.appendChild(contactWrapper);
  });

  const contactForm = document.createElement("form");
  const formHeader = document.createElement("h3");
  formHeader.textContent = "Contact Us";

  const formElements = [
    { label: "Name:", type: "text", id: "name", name: "name" },
    { label: "Phone:", type: "tel", id: "tel", name: "tel" },
    { label: "Email:", type: "email", id: "email", name: "email" },
    {
      label: "Message:",
      tag: "textarea",
      id: "message",
      name: "message",
      rows: "4",
    },
  ];

  formElements.forEach(({ label, type, id, name, rows, tag = "input" }) => {
    const inputElement = document.createElement(tag);
    inputElement.setAttribute("type", type);
    inputElement.setAttribute("id", id);
    inputElement.setAttribute("name", name);
    if (rows) inputElement.setAttribute("rows", rows);

    const labelElement = document.createElement("label");
    labelElement.textContent = label;
    labelElement.appendChild(inputElement);
    contactForm.appendChild(labelElement);
  });

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  contactForm.appendChild(submitBtn);

  contactSection.appendChild(formHeader);
  contactSection.appendChild(contactForm);
}
