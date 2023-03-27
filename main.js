let tabsLis = document.querySelectorAll('.tabs li'),
    boxes = document.querySelectorAll('.content .box'),
    search = document.querySelector('#search'),
    searchBox = document.querySelector('#search-box'),
    exit = document.querySelector('#exit'),
    settings = document.querySelector('#settings'),
    settingsBox = document.querySelector('#settings-box'),
    back = document.querySelector('#back'),
    chatBox = document.querySelector('#chat-box'),
    open = document.querySelector('.open');

tabsLis.forEach((tab) => {
    //Add click for each li
    tab.addEventListener("click", function (e) {
        tabsLis.forEach((tab) => {
            //On click remove class Active from all Li
            tab.classList.remove("active");
        });
        //Add Class Active On the li 
        e.currentTarget.classList.add("active");
        boxes.forEach((box) => {
            //Display None for all content Divs on click
            box.classList.remove('active');
            //Select the div the contain the class of data-whatsapp and make it display flex
            document.querySelector('.' + e.currentTarget.dataset.whatsapp).classList.add('active');
        });
    });
});

search.addEventListener('click', () => {
    searchBox.classList.add('show');
});

exit.addEventListener('click', () => {
    searchBox.classList.remove('show');
});

settings.addEventListener('click', () => {
    settingsBox.classList.add('show');
});

(document.body || document.documentElement).addEventListener('click', function (event) {
    // If the element on which the click event occurs is not the setting box or setting btn, then hide it
    if ((event.target !== settingsBox) && (event.target !== settings))
        settingsBox.classList.remove('show');
}, false);

back.addEventListener('click', () => {
    chatBox.classList.add('hide');
});

open.addEventListener('click', () => {
    chatBox.classList.remove('hide');
});