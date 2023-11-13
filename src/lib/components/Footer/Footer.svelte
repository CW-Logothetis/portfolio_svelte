<script>

</script>

<footer class="footer main-grid">        
    <a href="index.html" class="footer-text">Chris W. Logothetis</a>
    <p class="footer-projects"><a href="../#projects" class="footer-projects">projects</a></p>
    <p class="footer-email"><a href="mailto:cwlogo@pm.me" class="footer-email">cwlogo@pm.me</a></p>

    <ul class="social-list">
        <li class="social-item"><a href="https://www.linkedin.com/in/christopher-logothetis/" class="social-link"><i class="fab fa-linkedin"></i></a></li>
        <!-- <li class="social-item"><a href="https://twitter.com/CW_Logothetis" class="social-link"><i class="fab fa-twitter"></i></a></li> -->
        <li class="social-item"><a href="https://github.com/CW-Logothetis" class="social-link"><i class="fab fa-github"></i></a></li>
    </ul>
</footer>

<style lang="scss">

.footer {
    max-width: 100%;
    padding: 4em 0;
    text-align: center;
    background-color: var(--primary);
}

.footer--theatre {
    background: linear-gradient(110deg, var(--theatre-green-5) 20%, var(--theatre-green-4) 60%, var(--theatre-green-3) 100%);
}

.footer--chingu {
    background: linear-gradient(110deg, var(--theatre-blue-5) 20%, var(--theatre-blue-4) 60%, var(--theatre-blue-3) 100%);
}

.footer--snake {
    background-color: var(--background-secondary);
}

.footer-text,
.footer-email,
.footer-projects {
    color: var(--background-main);
    font-weight: 600;
    line-height: 100%;
}

.footer-text {
    grid-column: 2/-2;
    grid-row: 1;
    font-size: var(--step--1);
    margin-bottom: 1em;
    text-decoration: none;
}

.footer-email {
    grid-column: 2/-2;
    grid-row: 2;
    font-size: var(--step--2);
    text-decoration: none;
    margin: 0 0 3em 0;
    padding: 0;
}

.footer-projects {
    grid-column: 2/-2;
    grid-row: 3;
    font-size: var(--step--1);
    text-decoration: none;
    margin: 0 0 3em 0;
    padding: 0;
}

.footer-email:hover, .footer-email:focus, .footer-email:active, 
.footer-projects:hover, .footer-projects:focus, .footer-projects:active,
.footer-text:hover, .footer-text:focus, .footer-text:active {
    color: var(--js-yellow);
    opacity: 0.9;
    cursor: pointer;
}

.social-list {
    grid-column: 2/-2;
    grid-row: 4;
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
}

.social-link {
    color: var(--background-main);
    opacity: .9;
    font-size: var(--step-0);
    margin: 0 .8em;
}

.social-link:hover, .social-link:focus, .social-link:active {
    color: var(--js-yellow);
}

@media (min-width: 900px) {
    .footer {
        align-items: center;
    }

    .footer-text {
        grid-column: 3/5;
        grid-row: 1;
        margin: 0;
        padding: 0;
    }
    
    .footer-projects {
        grid-column: 5/7;
        grid-row: 1;
        margin: 0;
        padding: 0;
    }

    .footer-email {
        grid-column: 7/9;
        grid-row: 1;
        margin: 0;
        padding: 0;
    }

    .social-list {
        grid-column: 9/11;
        grid-row: 1;
        margin: 0;
        padding: 0;
    }
}

</style>