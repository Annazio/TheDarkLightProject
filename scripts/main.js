function includeHTML(file, container) {
    fetch(`./components/${file}.html`)
        .then(response => response.text())
        .then(html => {
            document.querySelector(container).innerHTML = html;
        })
        .catch(error => console.error('Error fetching the file:', error));
}

function loadPage(pageName) {
    includeHTML(pageName, 'main');
}

includeHTML('header', 'header');
includeHTML('home', 'main');
includeHTML('footer', 'footer');