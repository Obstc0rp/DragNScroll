/**
 * Created by wolf.scholle on 13.01.2016.
 */

$().ready(function(){

    var innerDiv = document.getElementById('mainSection');

    mainSection.style.height = window.innerHeight + 'px';
    console.log(window.innerHeight);
    console.log(mainSection.style.height);
    mainSection.style.width = window.innerWidth;
    dragAndScroll(mainSection);
});