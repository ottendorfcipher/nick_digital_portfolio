const nav = document.getElementById('navbar1');
const footer = document.getElementById('footer');

    nav.innerHTML = `
            <!-- Home Button-->
        <a class="navbar-brand" href="index.html">
            Home
        </a>

            <!-- Responsive Navbar -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <!-- Left Side of Navbar-->
            <ul class="navbar-nav mr-auto">

                    <!-- Latest Projects Dropdown Nav Menu-->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        Latest Projects
                    </a>
                    <!-- Latest Projects Dropdown Nav Menu Items-->
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="https://abeweinerpaintings.com">
                            Abe Weiner Paintings - Elementor WP
                        </a>
                        <a class="dropdown-item" href="https://github.com/signalaero/javascript-fantasy-tools">
                            Fantasy Tools - Vanilla JS
                        </a>
                        <a class="dropdown-item" href="rorak.html">
                            Rorak
                        </a>
                    </div>
                </li>

                    <!-- Experience Dropdown Nav Menu-->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        Experience
                    </a>
                        <!-- Experience Dropdown Nav Menu - Items-->
                    <div class="dropdown-menu">                  
                        <a class="dropdown-item" href="webdev.html">Web Development</a>
                        <a class="dropdown-item" href="edlead.html">Educational Leadership</a>
                        <a class="dropdown-item" href="peformance.html">Music Performance</a>
                        <a class="dropdown-item" href="musiced.html">Music Education</a>
                    </div>
                </li>

                    <!-- Professional Interests Nav Menu-->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        Professional Interests
                    </a>
                        <!-- Professional Interests Nav Menu - Items-->
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="comorch.html">Community Orchestra</a>
                        <a class="dropdown-item" href="cello_lessons.html">Cello Lessons</a>
                    </div>
                </li>
            </ul>

                <!-- Right Side of Nav Bar -->
                <!-- Contact Nav Menu Item-->
            <ul class="navbar-nav mr-right">
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    `;

const year = new Date().getFullYear();

    footer.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col">
                    <p class="nick-profile-footer-p">
                        &copy; ${year} - Nicholas Weiner
                    </p>
                </div>
            </div>
        </div>
    `;