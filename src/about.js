export { renderAboutSection };

const pageContent = document.getElementById("content");

function renderAboutSection() {
  pageContent.textContent = "";
  const contentData = [
    {
      header: "About Us",
      info: [
        "Welcome to our burger restaurant, where we strive to deliver the ultimate burger experience to our customers. Our journey began over a decade ago, with a passion for crafting mouthwatering burgers that are both delicious and satisfying.",
        "At our restaurant, quality is our top priority. We source the finest ingredients, from locally-sourced beef to fresh produce and artisanal bread, ensuring that every bite is a taste sensation. Our burgers are made to order, grilled to perfection, and served with a side of passion.",
        "But our commitment to excellence doesn't stop there. We understand that dietary preferences vary, which is why we offer a diverse menu that caters to everyone. From classic cheeseburgers to veggie options and gourmet creations, there's something for every palate.",
        "Here at our restaurant, we believe that dining out should be an experience to remember. That's why we strive to create a warm and welcoming atmosphere where families and friends can come together to enjoy great food and good company. Our friendly staff is dedicated to providing top-notch service, ensuring that your visit is nothing short of exceptional.",
        "Thank you for choosing our burger restaurant. We're honored to be a part of your dining experience and look forward to serving you soon.",
      ],
    },
  ];

  const aboutSection = document.createElement("section");
  aboutSection.classList.add("main__about-section");
  const aboutWrapper = document.createElement("div");
  aboutWrapper.classList.add("main__about-wrapper");
  pageContent.appendChild(aboutSection);
  aboutSection.appendChild(aboutWrapper);

  const header = document.createElement("h2");
  header.classList.add("main__about-header");
  header.textContent = contentData[0].header;
  aboutWrapper.appendChild(header);

  contentData[0].info.forEach((infoText) => {
    const infoParagraph = document.createElement("p");
    infoParagraph.classList.add("main__about-info");
    infoParagraph.textContent = infoText;
    aboutWrapper.appendChild(infoParagraph);
  });
}
