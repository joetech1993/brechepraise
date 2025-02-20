window.addEventListener("load", ()=>{
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.querySelector(".main-content");

    // simulate loading screen 
    setTimeout(() => {
        loadingScreen.style.opacity = "0";
        loadingScreen.style.transition= "opacity 0.5s";

        // wait for transitioin to complete 
        setTimeout(() => {
            loadingScreen.style.display = "none";
            mainContent.style.display = "flex";
        }, 500);

    }, 4000);  //adjust the delay as needed
})