document.addEventListener("DOMContentLoaded", () => {
    let images = document.getElementsByClassName(" transform-in");
    for (let i = 0; i < images.length; i++) {
        let image = images.item(i);
        image.addEventListener("mouseout", () => {
            let substr = " transform-in";
            let str = image.className;
            if (str.includes(substr)) {
                image.className = str.replace(substr, " transform-out");
            }
        });
        image.addEventListener("mouseover", () => {
            let substr = " transform-out";
            let str = image.className;
            if (str.includes(substr)) {
                image.className = str.replace(substr, " transform-in");
            }
        });
    }
});
