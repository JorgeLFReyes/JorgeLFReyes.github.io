/* *****Menu***** */
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".navbar__browse"),
    $l = d.querySelector(".hero-image-title"),
    $p = d.querySelector(".hero-image-p");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
    $l.classList.toggle("o");
    $p.classList.toggle("o");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".navbar__browse a")) return false;
    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
    $l.classList.remove("o");
    $p.classList.remove("o");
  });
})(document);

window.addEventListener("scroll", function () {
  var header = this.document.querySelector(".navbar");
  header.classList.toggle("abajo", window.scrollY > 0);
});

/*****SLIDE*******/
window.addEventListener("load", function () {
  new Glider(document.querySelector(".carousel__lista"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: ".carousel__indicadores",
    arrows: {
      prev: ".carousel__anterior",
      next: ".carousel__siguiente",
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 450,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  });

  new Glider(document.querySelector(".carousel_lista"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: ".carousel_indicador",
    arrows: {
      prev: ".carousel_anterior",
      next: ".carousel_siguiente",
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 450,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  });

  new Glider(document.querySelector(".carousel_listas"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: ".carousel_indicadores",
    arrows: {
      prev: ".carousel_anteriores",
      next: ".carousel_siguientes",
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 450,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  });
});

/*********REPRODUCTOR************/
const playCancion = document.getElementsByClassName("play");
const stopCancion = document.getElementsByClassName("stop");
const volumen = document.querySelector(".volumen");

let audio;

for (elemento of playCancion) {
  elemento.addEventListener("click", function () {
    if (audio != null) audio.pause();
    let cancion = this.getAttribute("id");
    audio = new Audio(`./audios/${cancion}.mp3`);
    audio.play();
  });
}

for (elemento of stopCancion) {
  elemento.addEventListener("click", function () {
    audio.pause();
  });
}

volumen.addEventListener("click", function () {
  audio.volume = this.value;
});
