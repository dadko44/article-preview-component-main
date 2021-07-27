let mobileSharePanel = document.getElementById('mobile-share-panel');
let desktopSharePanel = document.getElementById('desktop-share-panel');
let shareIcon = document.getElementById('share-icon');
let shareBttn = document.getElementById('share-bttn');

let showSharePanel = function(){
    shareIcon.classList.add('active-share-icon');
    shareBttn.classList.add('active-share-bttn');
    mobileSharePanel.classList.add('share-panel-add-height');
    desktopSharePanel.classList.add('share-panel-add-height');
}
let hideSharePanel = function(){
    shareIcon.classList.remove('active-share-icon');
    shareBttn.classList.remove('active-share-bttn');
    mobileSharePanel.classList.remove('share-panel-add-height');
    desktopSharePanel.classList.remove('share-panel-add-height')
}