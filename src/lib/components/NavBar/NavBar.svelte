<!-- nav bar doesn't need to be in grid, a bit overkill, but helps align with rest of page -->
<div class="header-background--white">
    <header class="header header-home main-grid">
        <div class="header-content">
            <!-- insert logo later, just text for MVP -->
            <a href="/" class="logo-link">Chris W. Logothetis</a>
            
            <button aria-label="Open navigation" class="open-nav">&#9776;</button>

            <nav class="nav">
                <button aria-label="Close navigation" class="close-nav">&times;</button>
                <ul class="nav-list">
                    <li class="nav-item"><a href="/#about" class="nav-link">about me</a></li>
                    <!-- <li class="nav-item"><a href="#projects" class="nav-link">projects</a></li> -->

                    <div class="dropdown nav-item">
                        <li class="nav-link">projects</li>
                        <div class="dropdown-content">
                          <a href="../openai" class="nav-link">OpenAI</a>
                          <a href="../ancient-theatres" class="nav-link">Ancient Theatres</a>  
                        </div>
                    </div>


                    <li class="nav-item"><a href="mailto:cwlogo@pm.me" class="nav-link">cwlogo@pm.me</a></li>
                    <li class="nav-item"><a href="https://www.linkedin.com/in/christopher-logothetis/" class="nav-link"><i class="fab fa-linkedin"></i></a></li>
                    <!-- <li class="nav-item"><a href="https://twitter.com/CW_Logothetis" class="nav-link"><i class="fab fa-twitter"></i></a></li> -->
                    <li class="nav-item"><a href="https://github.com/CW-Logothetis" class="nav-link"><i class="fab fa-github"></i></a></li>
                </ul>
            </nav>
        </div>
    </header>
</div>

<style lang="scss">
    .header-background {
        background: linear-gradient(90.01deg, var(--hero-js) 0.01%, var(--hero-html) 49.17%, var(--hero-css) 99.36%) !important;
    }

    .header-background--theatre {
        background: linear-gradient(90.01deg, var(--theatre-green-5) 0.01%, var(--theatre-green-3) 49.17%, var(--theatre-green-1) 99.36%);
    }

    .header-background--chingu {
        background: linear-gradient(90.01deg, var(--theatre-blue-5) 0.01%, var(--theatre-blue-3) 49.17%, var(--theatre-blue-1) 99.36%);
    }

    .header-background--white {
        background-color: var(--background-main);
    }

    /* commented out parts are for a fixed navbar that re-appears on scroll up. But wasn't centering. Look at it later.
    White navbar for now */

    .header {
        /* background-color: #404040; */
        width: 100%;
        
        /* background: linear-gradient(90.01deg, rgba(234, 205, 55, 0.4) 0.01%, rgba(221, 75, 37, 0.408) 49.17%, rgba(37, 75, 221, 0.408) 99.36%); */
    }

    .header-home {
        /* position: absolute; */
        width: 100%; /*without this the absolute header would stretch 
        the whole screen and not align with the coloumns below*/
    }

    .header-content {
        display: flex;
        grid-column: 2/-2;

        /* position: fixed;
        height: 52px;
        background: blue;
        top: 0;
        width: 100%;
        z-index: 1000;
        transition: all .3s ease;
        box-shadow: 0 1px 25px rgba(0,0,0, .1); */
    }

    /* #header-content.hide {
        top: -53px;
    } */

    .logo-link, .nav-link {
        color: var(--nav-link);
    }

    .logo-link {
        display: flex;
        align-items: center;
        font-size: 1.4rem;
        font-weight: 700;
        text-decoration: none;
        min-width: 10em;
        min-height: 3.5em; 
    }

    .nav {
        position: fixed; /* for mobile, to cover screen when pops out*/
        background: var(--background-main);
        width: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 100%;
        transform: translateX(0);
        transition: transform 250ms; 
        z-index:100;
    }

    .navigation-open { 
        transform: translateX(-100%);
    }

    .nav-list {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        /* 100% height spreads the three links the length of the viewport*/
        height: 100%;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
    }

    .nav-link {
        text-decoration: none;
        font-size: 2rem;
        font-weight: 700;
    }

    .nav-link:hover,
    .nav-link:focus {
        color: var(--hero-css);
        opacity: 0.9;
    }

    .close-nav {
        border: 0;
        background: 0;
        color: var(--js-yellow);
        font-weight: 700;
        font-size: 4.8rem;
        cursor: pointer;
        padding: .8em;
        position: absolute; /*otherwise it pushes the three links down and user needs to scroll*/
    }

    .open-nav {
        border: 0;
        background: 0;
        color: var(--nav-link);
        cursor: pointer;
        padding: 0.6em 0 0.8em 0;
        margin-top: 0.05em;
        margin-left: auto;
        font-size: 2.4em;
    }

    .current {
        border-bottom: 1px solid var(--js-yellow);
    }

    @media (min-width: 720px) {
        .logo-link {
            font-size: 1.6rem;
        }
        
        .open-nav,
        .close-nav {
            display: none;
        }
        
        .nav {
            position: initial; /*display: initial on any element, 
            it will set it to inline, even if it's a block element by default*/
        }

        .nav-list {
            flex-direction: row;
            justify-content: flex-end;
        }
        
        .nav-item {
            margin-left: 3.22em;
        }
        
        .nav-link {
            font-size: 1.6rem;
        }

        .header-home .nav {
            background: transparent;
        } 
    }

    @media (min-width: 900px) {
        .logo-link {
            font-size: 1.8rem;
        }
    }

/* Dropdown Button */

/* The container <div> - needed to position the dropdown content */
.dropdown {
  cursor: pointer;
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  border-radius: 10px;
  font-size: 1.6rem;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
    display: block;
}

</style>