
function dragAndScroll(element){

    var scrollable;

    if(typeof(element) === 'string'){
        scrollable = document.getElementById(element);
    } else {
        scrollable = element;
    }

    scrollable.draggable = true;

    var oldX;
    var oldY;

    scrollable.addEventListener(
        'drag',
        function(){

            var e = window.event;

            var posX = e.clientX;
            var posY = e.clientY;

            if((oldX && oldY) && (posX != 0 && posY != 0)){
                scrollable.scrollLeft += (oldX - posX);
                scrollable.scrollTop += (oldY - posY);
            }

            oldX = posX;
            oldY = posY;
        },
        false
    );

    scrollable.addEventListener(
        'dragstart',
        function handleDragStart(e) {
            var dragIcon = document.createElement('p');
            e.dataTransfer.setDragImage(dragIcon, 0, 0);
        },
        false
    );
}