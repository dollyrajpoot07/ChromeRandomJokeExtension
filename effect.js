const btn = document.querySelector(".btn");
if(btn) {
    btn.addEventListener("click", (e) => {
        console.log(e.target.offsetHeight, e.target.offsetWidth);
        for(let i = 0; i < 50; i++) {
            setTimeout( () => {
                const circle = document.createElement("div");
                circle.classList.add("circle");
                btn.appendChild(circle);
                if(Math.random() < 0.2) {
                    circle.classList.add("circleBorder");
                }
                if(Math.random() < 0.6) {
                    circle.classList.add("circleBorders");
                }
                
                setTimeout( () => {
                    circle.style.top = `${Math.random()*e.target.offsetHeight}px`;
                    circle.style.left = `${Math.random()*e.target.offsetWidth}px`;
                    circle.style.transform = `translate(${150-Math.random()*300}px,${150-Math.random()*300}px) scale(${0.3+Math.random()*0.5})`;
                    circle.style.opacity = 1;
                }, 150);
                setTimeout( () => {
                    circle.style.opacity = 0.1;
                }, 150);
                setTimeout( () => {
                    circle.remove;
                }, 2000);
            }, i*10);
        }
    })
}
