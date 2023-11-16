<section class="next-steps">
    <div class="main-grid">
        <h2 class="process--heading">Next Steps</h2>

        <div class="border-grid">
            <div class="empty-box empty-box1 color-theatre"></div>
            <div class="empty-box empty-box3 color-theatre"></div>
            <div class="step-number color-theatre">Idea 1</div>
            <div class="empty-box empty-box5 color-theatre"></div>
            <div class="empty-box empty-box7 color-theatre"></div>
        </div>

        <div class="process--step process--grid">
            <div class="step-bubble-l bubble-white">
                <p class="process--para">I have a map of the region and I intend to place clickable links on the names of the theatres.</p>
                <p class="process--para">The map allows people to get a sense of each theatre’s location in relation to the others, and also see which one is close to an aiport or place they may be visiting.</p>
            </div>
            <div class="step-bubble-r bubble-5-green">
                <img src="/theatres-map-idea.png" class="process--image" alt="">
            </div>
        </div>

        <div class="border-grid">
            <div class="empty-box empty-box1 color-theatre"></div>
            <div class="empty-box empty-box3 color-theatre"></div>
            <div class="step-number color-theatre">Idea 2</div>
            <div class="empty-box empty-box5 color-theatre"></div>
            <div class="empty-box empty-box7 color-theatre"></div>
        </div>
        
        <div class="process--step process--grid">
            <div class="step-bubble-l bubble-4-green">
                <img src="/theatres-mapbox.png" class="process--image" alt="">
            </div>
            <div class="step-bubble-r bubble-white">
                <p class="process--para">I’ve used MapBox before to design maps, but not its API. </p>
                <p class="process--para">Customising map colours and labels, plus enabling users to plan a trip by car would be a great addition.</p>
            </div>
        </div>
    </div>
    </section>  

    <style lang="scss">


.next-steps {
    padding: 10em 0;
    background: linear-gradient(180deg, rgba(223, 223, 221, 0.3) 0%, rgba(62, 63, 62, 0.3) 25%, rgba(208, 209, 208, 0.3) 100%);
}


@media (min-width: 700px) {
    .next-steps {
        background: linear-gradient(180deg, rgba(223, 223, 221, 0.3) 0%, rgba(62, 63, 62, 0.3) 25%, rgba(208, 209, 208, 0.3) 100%);
        padding-bottom: 15em;
    }
}

@media (min-width: 1000px) {
    .next-steps {
        padding-bottom: 20em;
    }
}

@media (min-width: 750px) {
    .p-req p, .process--para p, .stretch--para p, .bugs--para p, .ul-18px {
        font-size: 1.8rem !important;
    }
}

@media (min-width: 1050px) {
    .p-req p, .process--para p, .stretch--para p, .bugs--para p, .ul-18px {
        font-size: 2rem !important;
    }
}


p {
    font-size: var(--step-0);
}

.process {
    //margin: 5em 0 0em 0;
    padding-bottom: 10em;
    background: linear-gradient(180deg, rgba(223, 223, 221, 0.3) 0%, rgba(62, 63, 62, 0.3) 25%, rgba(208, 209, 208, 0.3) 100%);
}

.process--heading {
    grid-column: 2 / -2;
    text-shadow: none;
    text-align: center;
}

.process--step {
    grid-column: 2 / -2;
    display: flex;
    flex-direction: column;
}

/* grid in grid instead of flexbox? */
/* .process--grid {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    max-width: 1200px;
    margin: 0 auto;
    align-items: stretch;
    justify-items: start;
    justify-content: end;
    align-content: space-evenly;
} */

.step-bubble-l {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 25em;
    padding: 0.75em;
    background-color: var(--background-main);
    border-radius: 20px 20px 0 0;
}

.step-bubble-r {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    min-height: 25em;
    padding: 1em;
    background-color: var(--background-main);
    border-radius: 0 0 20px 20px;
}

.bubble-5-green {
    background-color: var(--theatre-green-5)
}

.bubble-4-green {
    background-color: var(--theatre-green-4)
}

.bubble-3-green {
    background-color: var(--theatre-green-3)
}

.bubble-2-green {
    background-color: var(--theatre-green-2)
}

.bubble-1-green {
    background-color: var(--theatre-green-1)
}

.bubble-5-blue {
    background-color: var(--theatre-blue-5)
}

.bubble-4-blue {
    background-color: var(--theatre-blue-4)
}

.bubble-3-blue {
    background-color: var(--theatre-blue-3)
}

.bubble-2-blue {
    background-color: var(--theatre-blue-2)
}

.bubble-1-blue {
    background-color: var(--theatre-blue-1)
}

.bubble-yellow {
    background-color: var(--js-yellow);
}

.bubble-orange {
    background-color: #DD4B25;
}

.bubble-blue {
    background-color: #254BDD;
}

.bubble-pink {
    background-color: #ba7dc5;
}

.process--para {
    margin: 0 2em;
    padding: 1em 0;
}

.process--image {
    width: 75%;
    margin: 4em auto;
    border-radius: 7px;
    box-shadow: 6.7px 13.4px 13.4px hsl(0deg 0% 0% / 0.29);
    transition: transform .4s;
}

.process--image:hover {
    -ms-transform: scale(2); /* IE 9 */
    -webkit-transform: scale(2); /* Safari 3-8 */
    transform: scale(2);
}

.enlarge-image {
    width: 100% !important;
}

.no-zoom:hover {
    -ms-transform: scale(1); /* IE 9 */
    -webkit-transform: scale(1); /* Safari 3-8 */
    transform: scale(1);
}

.border-grid {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(5, 1fr);
}

/* -------------------    EMPTY BOXES for dotted border lines between process steps ------------------------ */

.empty-box {
    height: 3em;
    margin-top: 0.2em;
}

.empty-box1 {
    grid-column: 1/4;
    grid-row: 1;
    border-right: dashed 1px;
}

.empty-box3 {
    grid-column: 1/4;
    grid-row: 2;
    border-right: dashed 1px;
}

.step-number {
    grid-column: 3/5;
    grid-row: 3;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 7em;

    font-weight: 600;

    border: 2px solid;
    border-radius: 20px;
}

.empty-box5 {
    grid-column: 1/4;
    grid-row: 4;
    border-right: dashed 1px;
}

.empty-box7 {
    grid-column: 1/4;
    grid-row: 5;
    border-right: dashed 1px;
}

.color-theatre, .color-theatre {
    border-color: var(--theatre-green-3);
    color: var(--theatre-green-3);
}

.color-chingu, .color-chingu {
    border-color: var(--theatre-blue-3);
    color: var(--theatre-blue-3);
}


@media (min-width: 700px) {

    .process {
        padding-bottom: 20em;
        background: linear-gradient(180deg, rgba(250, 250, 249, 0.1) 0%, rgba(41, 54, 34, 0.2) 50%, rgba(15, 23, 11, 0.2) 100%);
    }

    .process--step {
        flex-direction: row;
    }

    .step-bubble-l {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        min-height: 0;
        padding: 2em;
        border-radius: 20px 0 0 20px;
    }

    .step-bubble-r {
        grid-column: 7/13;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        width: 50%;
        min-height: 0;
        padding: 2em;
        border-radius: 0 20px 20px 0;
    }



    .empty-box {
        height: 3.5em;
    }

}

@media (min-width: 1050px) {

    .step-bubble-r {
        padding-top: 4em;
        padding-bottom: 4em;
    }

    .step-bubble-l {
        padding-top: 4em;
        padding-bottom: 4em;
    }

    .process--image {
        width: 85%;
    }

    .empty-box {
        height: 5em;
    }

}

    </style>