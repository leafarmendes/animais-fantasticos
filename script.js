const activeClass = 'active';

function initTabMenu() {
  const getAnimalsMenu = document.querySelectorAll('.js-tabmenu li');
  const getAnimalsContent = document.querySelectorAll('.js-tabcontent section');

  if(getAnimalsMenu.length && getAnimalsContent.length) {
    getAnimalsContent[0].classList.add(activeClass);

    function activeTab(index) {
      getAnimalsContent.forEach((item) => {
        item.classList.remove(activeClass)
      })
      getAnimalsContent[index].classList.add(activeClass)
    }

    getAnimalsMenu.forEach((item, index) => {
      item.addEventListener('click', function() {
        activeTab(index);
      })
    })
  }
}

initTabMenu();


function initAccordionList() {
  const getDlAccordionList = document.querySelectorAll('.js-accordionlist dt')

  if(getDlAccordionList.length) {
    getDlAccordionList[0].nextElementSibling.classList.add(activeClass);
    function activeAccordionList() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
  
    getDlAccordionList.forEach((item) => {
      item.addEventListener('click', activeAccordionList)
    })
  }
}

initAccordionList();


