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

