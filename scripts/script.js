function toggleContactsView() {

    function _toggleView() {
        document.getElementById('header-contacts').classList.toggle('_hidden');
    }

    function eventListener() {
        document.getElementById('header-toggle-contacts').addEventListener('click', _toggleView);
    }

    return {
        init: function() {
            eventListener();
        }
    }
};

toggleContactsView().init();

function moveSliderCareer() {

    function _move (left) {
        document.getElementById('content__slider').style.left = left+'px';
    }

    function eventListener() {
        document.getElementById('z1').addEventListener('mouseover', function () { _move(0) });
        document.getElementById('z2').addEventListener('mouseover', function () { _move(-224) });
        document.getElementById('z3').addEventListener('mouseover', function () { _move(-448) });
        document.getElementById('z4').addEventListener('mouseover', function () { _move(-675) });
    }

    return {
        init: function() {
            eventListener();
        }
    }
};

moveSliderCareer().init();
