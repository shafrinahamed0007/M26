const firstName = "Kamruzzaman";
const lastName = "Shovo";

const aboutMe = `My name is ${firstName} ${lastName}`;
console.log(aboutMe);

const giveMe = `give me money ${(10 + 20) * 2 + 500} TK`;
console.log(giveMe);

function getCardHTML(name = "", description = "", price = 0) {
  const div = `
     <div class = "card">
      <h2>${name.toUpperCase()} Borolox</h2>
      
      <p>$ ${price}</P>
      <p>${description}</p>
     </div>
    `;

  console.log(div);
}

getCardHTML("Iphone-12", "This is the latest iphone model", 999);
