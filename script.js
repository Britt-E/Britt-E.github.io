const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

document.querySelectorAll(".mobile-nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  })
);

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const company = document.getElementById("company");
const email = document.getElementById("email");
const mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Company Name: ${company.value}<br> Email: ${email.value}<br> Message: ${mess.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "brittanyevans188@gmail.com",
    Password: "F375C714039DBADC5275AAAB4E8FD2A3852E",
    To: "brittanyevans188@gmail.com",
    From: "brittanyevans188@gmail.com",
    Subject: "Website Message",
    Body: bodyMessage,
  }).then(message => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  });
}


form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});
