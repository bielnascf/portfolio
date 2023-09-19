const techs = document.querySelectorAll("[data-techs]");  
const arrayTechs = Array.from(techs)

arrayTechs.map((tech) => {       
    tech.parentElement.addEventListener("mouseover", () => {         
        const techName = tech.dataset.techs;         
        tech.innerHTML = techName;       
        console.log(techName)
    });        
        tech.parentElement.addEventListener("mouseout", () => {         
            tech.innerHTML = "";       
        });     
    });