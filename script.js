function navigateTo(page) {
    window.location.href = page;
  }
  
  function showContent(theme) {
    const contentData = {
      creation: {
        title: "La Création",
        text: "Explorez les récits bibliques de la création du monde."
      },
      foi: {
        title: "La Foi",
        text: "Comprendre la foi à travers les histoires bibliques."
      },
        croyance: {
        title: "Croire en Dieu",
        text: "Croire en Dieu fait de nous enfants de Dieu."
      },
      /*miracles: {
        title: "Les Miracles de Jésus",
        text: "Les miracles accomplis par Jésus et leur signification."
      },*/
        tenter: {
        title: "La tentation",
        text: "Eviter la tentation."
      },
        createur: {
        title: "Le createur",
        text: "Le créateur a fait toute chose"
      },
        parole: {
        title: "La parole",
        text: "La parole est important pour un chrétien"
      }
    };
    
    document.getElementById("content-title").textContent = contentData[theme].title;
    document.getElementById("content-text").textContent = contentData[theme].text;
    document.getElementById("content-section").classList.remove("hidden");
  }
  
  function hideContent() {
    document.getElementById("content-section").classList.add("hidden");
  }
  
  function showAudio(theme) {
    const audioData = {
      creation: "a.MP3",
      croyance: "croire.mp3",
      tenter: "tenter.MP3"
      /*miracles: "c.MP3",
      croyance: "croire.mp3",
      colere: "colère.mp3"*/
    };
    
    document.getElementById("audio-player").src = audioData[theme];
    document.getElementById("audio-section").classList.remove("hidden");
  }
  
  function hideAudio() {
    document.getElementById("audio-section").classList.add("hidden");
  }
  
  function showVideo(theme) {
    const videoData = {
      createur: "Dieu_cre.mp4",
      parole: "Parole_Vivante.mp4"
    };
  
    document.getElementById("video-player").src = videoData[theme];
    document.getElementById("video-section").classList.remove("hidden");
  }
  
  function hideVideo() {
    document.getElementById("video-section").classList.add("hidden");
  }

  
  function navigateTo(page) {
    window.location.href = page;
  }
  

  // Change la couleur de fond et enregistre la préférence
function changeBackgroundColor() {
    const bgColor = document.getElementById("bg-color").value;
    document.body.style.backgroundColor = bgColor;
    localStorage.setItem("bgColor", bgColor);
  }
  
  // Change la couleur du texte et enregistre la préférence
  // Change la couleur du texte et enregistre la préférence
function changeTextColor() {
    const textColor = document.getElementById("text-color").value;
    document.body.style.color = textColor;
    localStorage.setItem("textColor", textColor);
  
    // Applique la couleur à tous les éléments de texte du GridView
    const gridTexts = document.querySelectorAll(".grid-text");
    gridTexts.forEach(element => {
      element.style.color = textColor;
    });
  }
  
  // Applique les préférences de couleur enregistrées, y compris pour les GridView
  function applyPreferences() {
    const savedBgColor = localStorage.getItem("bgColor");
    const savedTextColor = localStorage.getItem("textColor");
  
    if (savedBgColor) {
      document.body.style.backgroundColor = savedBgColor;
    }
    if (savedTextColor) {
      document.body.style.color = savedTextColor;
  
      // Applique la couleur aux éléments de texte du GridView
      const gridTexts = document.querySelectorAll(".grid-text");
      gridTexts.forEach(element => {
        element.style.color = savedTextColor;
      });
    }
  }
  
  // Applique les préférences au chargement de la page
  document.addEventListener("DOMContentLoaded", applyPreferences);
  
  
