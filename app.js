const slides = document.querySelectorAll('.slide');

for(const slide of slides){
    slide.addEventListener('click', () => {
        clearActiveClasses()

        slide.classList.add('active')

        if(slide.classList.contains('desert')){
            document.body.style.backgroundColor="#5a5833"
        }else if(slide.classList.contains('vulcano')){
            document.body.style.backgroundColor="#2a6974"
        }else if(slide.classList.contains('sea')){
            document.body.style.backgroundColor="#15310d"
        }else if(slide.classList.contains('moutain')){
            document.body.style.backgroundColor="#6093b6"
        }else{
            document.body.style.backgroundColor="#111"
        }
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    }) 
}



