const container = document.querySelector('.container');
const btns = document.querySelectorAll('.buttons__btn');
const contents = document.querySelectorAll('.contents');

container.addEventListener('click', function(e){
    const target = e.target.dataset.id;
    if(target){
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        })

        contents.forEach(function(content){
            content.classList.remove('active')
        })
        const grabId = document.getElementById(target);
        grabId.classList.add('active');
    }
})