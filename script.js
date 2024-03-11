let boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', slideContent)

slideContent();

function slideContent() {

    let triggerPoint = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        let top = box.getBoundingClientRect().top;
        if (top < triggerPoint) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}