function imageCopy(src){
    var newComponent = document.createElement('div');
    var image = document.createElement('img');
    newComponent.style.position = 'absolute';
    newComponent.width='100%';
    newComponent.height='100%';

    image.src = src;

    image.style.maxWidth = '100%';
    image.style.maxHeight = '75%';
    newComponent.appendChild(image);


    return newComponent;
}
document.addEventListener("DOMContentLoaded", (e) => {
    var images = Array.from(document.querySelectorAll('.gallery-image'));
    images.forEach((element) => {
        element.addEventListener("click" , ()=>{
            console.log("Hi");
            document.getElementById("main").appendChild(imageCopy(element.src));
        })
    });
})