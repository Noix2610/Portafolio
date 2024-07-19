const header = document.getElementById('header');
const footer = document.getElementById('footer');

function loadHeader(page) {
    const headerContent = {
        index: `
        <nav class="header__menu navbar navbar-expand-md">
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link header__menu__link" href="about.html">Sobre mí</a>
                    </li>
                    <li class="nav-item dropdown header__menu__link">
                        <a class="nav-link header__menu__link" href="proyectos.html">
                            Proyectos
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    `,
        about: `
        <nav class="header__menu navbar navbar-expand-md">
            <a class="navbar-brand header__menu__link" href="index.html">Home</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown header__menu__link">
                        <a class="nav-link header__menu__link" href="proyectos.html">
                            Proyectos
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    `,
        proyectos: `
        <nav class="header__menu navbar navbar-expand-lg">
            <a class="navbar-brand header__menu__link" href="index.html">Home</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link header__menu__link" href="about.html">Sobre mí</a>
                    </li>
                </ul>
            </div>
        </nav>
    `
    };

    header.innerHTML = headerContent[page];
}