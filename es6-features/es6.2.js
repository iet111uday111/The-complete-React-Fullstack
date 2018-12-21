

document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        var list = document.querySelector('.user_list');

        function addUser(name, lastname) {
            var template = `
            <div class="user">
                <div>${name}</div>
                <div>${lastname}</div>
            </div>
    `;
            list.insertAdjacentHTML('beforeend', template)
        }

        addUser('Uday', 'Singh');
        addUser('Jane', 'Doe');

    }
}