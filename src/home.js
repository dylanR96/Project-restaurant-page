export { renderHomePage };

const pageContent = document.getElementById("content");

function renderHomePage() {
  pageContent.textContent = "";

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
          value: 7,
          text: ["Time", "09:00-11:00", "12:00-14:00", "18:00-20:00"],
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
          text: [
            {
              option0: "Time",
              option1: "09:00-11:00",
              option2: "12:00-14:00",
              option3: "18:00-20:00",
            },
          ],
        },
      ],
      id: "person",
      name: "person",
      CssClass: "",
    },
    {
      tag: "textarea",
      id: "specialMessage",
      name: "message",
      rows: "5",
      cols: "60",
      placeholder: "Special message",
      CssClass: "booking__text-area",
    },
  ];

  selectFields.forEach(
    ({ options, id, name, rows, cols, placeholder, tag = "select" }) => {
      const selectElement = document.createElement(tag);
      selectElement.setAttribute("id", id);
      selectElement.setAttribute("name", name);
      if (rows) {
        selectElement.setAttribute("rows", rows);
        selectElement.setAttribute("cols", cols);
        selectElement.setAttribute("placeholder", placeholder);
      }

      options.forEach(({ value, text }, index) => {
        const optionElement = document.createElement("option");
        optionElement.setAttribute("value", value);
        optionElement.textContent = text;
        if (index === 0) {
          optionElement.setAttribute("disabled", true);
          optionElement.setAttribute("selected", true);
        }
        selectElement.appendChild(optionElement);
      });

      pageContent.appendChild(selectElement);
    }
  );
}

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
  <h5>Table booking</h5>

  <h2>BOOK YOUR TABLE NOW</h2>

  <div class="booking__options">
    <select name="person" id="person">
      <option value="person" disabled selected>Person</option>

      <option value="one">1</option>

      <option value="two">2</option>

      <option value="three">3</option>

      <option value="four">4</option>

      <option value="five">5</option>

      <option value="six">6</option>

      <option value="seven">7</option>

      <option value="eight">8</option>

      <option value="nine">9</option>

      <option value="ten">10</option>
    </select>

    <select name="month" id="month">
      <option value="month" disabled selected>Month</option>

      <option value="jan">January</option>

      <option value="feb">February</option>

      <option value="mar">March</option>

      <option value="apr">April</option>
    </select>

    <select name="day" id="day">
      <option value="day" disabled selected>Day</option>

      <option value="monday">Monday</option>

      <option value="tuesday">Tuesday</option>

      <option value="wednesday">Wednesday</option>

      <option value="thursday">Thursday</option>

      <option value="friday">Friday</option>

      <option value="saturday">Saturday</option>

      <option value="sunday">Sunday</option>
    </select>

    <select name="time" id="time">
      <option value="time" disabled selected>Time</option>

      <option value="morning">09:00-11:00</option>

      <option value="afternoon">12:00-14:00</option>

      <option value="evening">18:00-20:00</option>
    </select>
  </div>
  <textarea
    name=""
    id=""
    cols="60"
    rows="5"
    class="booking__text-area"
    placeholder="Special message"
  ></textarea>
  <button>Confirm</button>
</div>
</section> */
