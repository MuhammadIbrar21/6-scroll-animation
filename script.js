let boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', slideContent)

slideContent();

function slideContent() {

    let triggerPoint = window.innerHeight / 5 * 4;
    console.log(triggerPoint)

    boxes.forEach((box, index) => {

        let top = box.getBoundingClientRect().top;

        if (index == 1) {
            console.log(top)
        }

        if (top < triggerPoint) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}