window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items')

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('tabcontent--hide');
            item.classList.remove('tabcontent--show');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item--active')
        });
    }
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('tabcontent--show', 'fade');
        tabsContent[i].classList.remove('tabcontent--hide');
        tabs[i].classList.add('tabheader__item--active');
    } 
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', function (event) {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target === item) {
                    hideTabContent();
                    showTabContent(i); 
                }
            })
        }
    })
});
