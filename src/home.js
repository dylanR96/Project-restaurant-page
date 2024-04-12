export { renderHomePage };

const pageContent = document.getElementById("content");

function renderHomePage() {
  pageContent.textContent = "";
  const bookingSection = document.createElement("section");
  const bookingWrapper = document.createElement("div");
  const bookingOptions = document.createElement("div");
  bookingSection.appendChild(bookingWrapper);
  const sectionHeader = document.createElement("h5");
  sectionHeader.textContent = "Table booking";
  const bookingHeader = document.createElement("h2");
  bookingHeader.textContent = "BOOK YOUR TABLE NOW";
  bookingWrapper.appendChild(sectionHeader);
  bookingWrapper.appendChild(bookingHeader);
  bookingWrapper.appendChild(bookingOptions);

  const selectFields = [
    {
      options: [
        {
          tag: "option",
          value: 10,
          text: ["Person", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        },
      ],
      id: "person",
      name: "person",
      CssClass: "",
    },

    {
      options: [
        {
          tag: "option",
          value: 4,
          text: ["Month", "January", "February", "March", "April"],
        },
      ],
      id: "person",
      name: "person",
      CssClass: "",
    },
    {
      options: [
        {
          tag: "option",
          value: 8,
          text: [
            "Day",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
        },
      ],
      id: "person",
      name: "person",
      CssClass: "",
    },
    {
      options: [
        {
          tag: "option",
          value: 3,
          text: ["Time", "09:00-11:00", "12:00-14:00", "18:00-20:00"],
        },
      ],
      id: "time",
      name: "time",
      CssClass: "",
    },
  ];

  selectFields.forEach(({ options, id, name, tag = "select" }) => {
    const selectElement = document.createElement(tag);
    selectElement.setAttribute("id", id);
    selectElement.setAttribute("name", name);

    options.forEach(({ value, text }) => {
      text.forEach((optionText, index) => {
        const optionElement = document.createElement("option");
        optionElement.setAttribute("value", index === 0 ? "" : optionText);
        optionElement.textContent = optionText;
        if (index === 0) {
          optionElement.setAttribute("disabled", true);
          optionElement.setAttribute("selected", true);
        }
        selectElement.appendChild(optionElement);
      });
    });

    bookingOptions.appendChild(selectElement);
  });
  const specialMessage = document.createElement("textarea");
  specialMessage.id = "specialMessage";
  specialMessage.name = "message";
  specialMessage.rows = 5;
  specialMessage.cols = 60;
  specialMessage.placeholder = "Special message";
  specialMessage.classList.add("booking__text-area");
  bookingWrapper.appendChild(specialMessage);

  pageContent.appendChild(bookingSection);
}

{
  /* const topWrapper = document.createElement("div");
const leftWrapper = document.createElement("div");
const leftSideHeader = document.createElement("h1");
leftSideHeader.textContent = "Have a delicious meal with us";
const leftSideParagraph = document.createElement("p");
leftSideParagraph.textContent = " take no arguments, and should return a value of any type. React will
    call your initializer function when initializing the component, and
    store its return value as the initial";
const buttonWrapper = document.createElement("div");
const menuBtn = document.createElement("button");
const reservationBtn = document.createElement("button");
menuBtn.textContent = "Menu";
reservationBtn.textContent = "Reservation";
const rightWrapper = document.createElement("div");

const btnWrapper = document.createElement("div");
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");

/* <div class="main__top-wrapper">
<div class="main__left-side">
  <h1 class="main__left-side-header">Have a delicious meal with us</h1>

  <p class="main__left-side-paragraph">
    take no arguments, and should return a value of any type. React will
    call your initializer function when initializing the component, and
    store its return value as the initial
  </p>

  <div>
    <button class="main__menu-btn">Menu</button>
    <button class="main__reservation-btn">Reservation</button>
  </div>

  <img src="../dist/img/plates.png" alt="" />
</div>

<div class="main__right-side">
  <img src="../dist/img/burger.jpg" alt="tasty-burger" width="300px" />
  <div>
    <button class="main__image-btn"></button
    ><button class="main__image-btn"></button
    ><button class="main__image-btn"></button>
  </div>
</div>
</div> 

  <section class="booking">
<div class="booking__wrapper">
<div class="booking__options">
*/
}
