function imageCopy(src){
    var newComponent = document.createElement('img');
    newComponent.src = src;
    newComponent.style.width = '100%';
    return newComponent;
}
document.addEventListener("load", (e) => {
    var images = Array.from(document.querySelectorAll('.gallery-image'));
    images.forEach((element) => {
        console.log(element.src);
        element.addEventListener("click" , ()=>{
            console.log("Hi");
            // document.getElementById("main").appendChild(imageCopy(element.src));
        })
    });
})