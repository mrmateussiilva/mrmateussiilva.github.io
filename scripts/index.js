document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });
});

const { createApp } = Vue;

createApp({
  data() {
    return {
      textToType: "Olá, sou Mateus José da Silva ",
      typedText: "",
      typingSpeed: 150, // Velocidade em ms
    };
  },
  mounted() {
    this.typeText();
  },
  methods: {
    typeText() {
      let index = 0;

      const typingInterval = setInterval(() => {
        if (index < this.textToType.length) {
          this.typedText += this.textToType.charAt(index);
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, this.typingSpeed);
    },
  },
}).mount("#app");