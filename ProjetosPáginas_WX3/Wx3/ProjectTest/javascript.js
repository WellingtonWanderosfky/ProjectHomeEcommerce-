//POP-UP

function mostrarPop(PopId) {
  if (localStorage.fecharpop_up !== PopId) {
    const popup = document.getElementById(PopId);
    if (PopId) {
      popup.classList.add("mostrar_pop_up");
      popup.addEventListener("click", (e) => {
        if (e.target.id == PopId || e.target.className == "fecharbotao") {
          popup.classList.remove("mostrar_pop_up");
          localStorage.fecharpop_up = PopId;
        }
      });
    }
  }
}



/* Caso eu queira ativar o pop-up com o scroll, importante: Ativar o localstore para evitar reacionamento da função*/
document.addEventListener('scroll' , () => {
  if(window.pageYOffset >800)
  {
    mostrarPop("pop-up")
  }
})


//Teste

document.addEventListener('scroll' , () => {
  let tagdesconto = document.getElementById("tag_desconto");
  if(window.pageYOffset >1)
  {
    tagdesconto.style.display ="none"
  }

  else
  {
    tagdesconto.style.display ="flex"
  }
  
})



$(".carousel1").owlCarousel({
  margin: 10,
  loop: false,
  autoplay: false,
  autoplayTimeout: 1000,
  items: 3,
  dots: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2,
    },

    600: {
      items: 2,
    },

    1000: {
      items: 4,
    },
  },
});

$("#carousel_beneficios").owlCarousel({
  margin: 10,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  items: 3,
  dots: false,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1,
    },

    600: {
      items: 2,
    },

    1000: {
      items: 4,
      loop: false,
      autoplay: false,
    },
  },
});

$("#feedback_carrosel").owlCarousel({
  margin: 10,
  loop: false,
  autoplay: false,
  autoplayTimeout: 2000,
  items: 3,
  dots: true,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1,
      loop: true,
      autoplay: true,
    },

    700: {
      items: 2,
    },

    1000: {
      items: 3,
    },
  },
});

$("#carousel3").owlCarousel({
  margin: 10,
  loop: false,
  autoplay: false,
  autoplayTimeout: 1000,
  items: 3,
  dots: false,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },

    800: {
      items: 3,
    },

    1400: {
      items: 4,
    },
  },
});

$("#carousel2").owlCarousel({
  margin: 10,
  loop: false,
  autoplay: false,
  autoplayTimeout: 1000,
  items: 3,
  dots: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },

    600: {
      items: 2,
    },

    1000: {
      items: 3,
    },
  },
});

const btnMobile = document.getElementById("btn-mobile");

function mostrarmenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", mostrarmenu);

setTimeout(TimeOutCarrosel, 2000);
function TimeOutCarrosel() {
  let bannerPrincipal = document.getElementById("banner_principal");
  let bolinha01 = document.getElementById("bolinha01");
  let bolinha02 = document.getElementById("bolinha02");
  let bolinha03 = document.getElementById("bolinha03");

  var url = window
    .getComputedStyle(bannerPrincipal)
    .getPropertyValue("background-image");
  var bannerAtual = url.split("_")[2].split(".")[0];
  console.log(bannerAtual); //imagem atual do carrosel

  switch (bannerAtual) {
    case "01":
      bannerPrincipal.style.backgroundImage =
        "url(./imgs/banner_principal_02.png)";
      bolinha01.classList.add("bolinha");
      bolinha01.classList.remove("bolinhaativa");
      bolinha02.classList.add("bolinhaativa");
      bolinha02.classList.remove("bolinha");
      break;
    case "02":
      bannerPrincipal.style.backgroundImage =
        "url(./imgs/banner_principal_03.png)";
      bolinha02.classList.add("bolinha");
      bolinha02.classList.remove("bolinhaativa");
      bolinha03.classList.add("bolinhaativa");
      bolinha03.classList.remove("bolinha");
      break;
    case "03":
      bannerPrincipal.style.backgroundImage =
        "url(./imgs/banner_principal_01.png)";
      bolinha03.classList.add("bolinha");
      bolinha03.classList.remove("bolinhaativa");
      bolinha01.classList.add("bolinhaativa");
      bolinha01.classList.remove("bolinha");
      break;
  }
  clearTimeout(TimeOutCarrosel);
  setTimeout(TimeOutCarrosel, 2000);
}

clearTimeout(TimeOutCarrosel);

function rodarCarrosel() {
  let bannerPrincipal = document.getElementById("banner_principal");
  var bolinha01 = document.getElementById("bolinha01");
  var bolinha02 = document.getElementById("bolinha02");
  var bolinha03 = document.getElementById("bolinha03");
  bolinha01.addEventListener("click", () => {
    bannerPrincipal.style.backgroundImage =
      "url(./imgs/banner_principal_01.png)";
    clearTimeout(TimeOutCarrosel);
  });

  bolinha02.addEventListener("click", () => {
    bannerPrincipal.style.backgroundImage =
      "url(./imgs/banner_principal_02.png)";

      
    clearTimeout(TimeOutCarrosel);

    clearInterval(TimeOutCarrosel);
  });

  bolinha03.addEventListener("click", () => {
    bannerPrincipal.style.backgroundImage =
      "url(./imgs/banner_principal_03.png)";
    clearTimeout(TimeOutCarrosel);
    clearInterval(TimeOutCarrosel);
  });
}

rodarCarrosel();
