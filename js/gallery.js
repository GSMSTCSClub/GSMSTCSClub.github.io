function imageCopy(src){
    var newComponent = document.createElement('div');
    var image = document.createElement('img');
    newComponent.style.position = 'fixed';
    newComponent.style.top='0';
    newComponent.style.left='0';
    newComponent.style.right='0';
    newComponent.style.bottom='0';

    newComponent.style.display='flex';
    newComponent.style.alignItems='center';
    newComponent.style.backgroundColor = 'rgba(0,0,0,0.5)';
    var center = document.createElement('center');

    image.src = src;
    image.style.maxWidth = '75%';
    image.style.maxHeight = '75%';
    center.appendChild(image)
    newComponent.appendChild(center);


    newComponent.addEventListener("click", ()=>{
        newComponent.remove();
    });
    return newComponent;
}
document.addEventListener("DOMContentLoaded", (e) => {
    var images = Array.from(document.querySelectorAll('.gallery-image'));
    images.forEach((element) => {
        element.addEventListener("click" , ()=>{
            document.getElementById("main").appendChild(imageCopy(element.src));
        })
    });
})