const container = document.querySelector('.container');
const btns = document.querySelectorAll('.buttons__btn');
const articles = document.querySelectorAll('.contents');

container.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    // console.log(id);
    if(id){
        //remove active from other buttons
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        });

        //hide other articles
        articles.forEach(function(article){
            article.classList.remove('active')
        })
        const element = document.getElementById(id);
        element.classList.add('active');
    }
});
