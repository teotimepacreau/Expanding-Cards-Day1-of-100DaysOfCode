console.log('connecté !');

const imgBlock = document.querySelectorAll('.card');
console.log(imgBlock);


imgBlock.forEach((item)=> {
    item.addEventListener('click', function() {
        console.log('item cliqué');
        removeActiveClasses();
        console.log("classe supprimée");
        item.classList.add('cardonclick');
        let pic = item.firstElementChild;
        console.log(pic);
        let altDesc = pic.getAttribute('alt');
        console.log(altDesc);
        const imgDesc = document.createElement('p');
        console.log(imgDesc);
        item.appendChild(imgDesc);
        imgDesc.innerHTML =`
         ${altDesc}`
    });
});


function removeActiveClasses() {
    imgBlock.forEach((item) => {
        item.classList.remove('cardonclick');
    });
};
