<!-- https://codepen.io/atdrago/pen/yezrBR -->

<script>
  export let clearProjectHover;
  export let projectHover;

</script>

<div class={projectHover && 'enabled'} >
    <div class="macos-bar {projectHover && 'enabled'}">
        <button aria-label="close" disabled="{!projectHover}" class="traffic-light traffic-light-close" on:click={() => clearProjectHover()}></button>
        <button aria-label="minimize" disabled="{!projectHover}" class="traffic-light traffic-light-minimize" id="minimize"></button>
        <button aria-label="maximize" disabled="{!projectHover}" class="traffic-light traffic-light-maximize" id="maximize"></button>
    </div>
</div>

<style lang="scss">
  $close-red: #ff6159;
  $close-red-active: #bf4942;
  $close-red-icon: #4d0000;
  $close-red-icon-active: #190000;

  $minimize-yellow: #ffbd2e;
  $minimize-yellow-active: #bf8e22;
  $minimize-yellow-icon: #995700;
  $minimize-yellow-icon-active: #592800;

  $maximize-green: #28c941;
  $maximize-green-active: #1d9730;
  $maximize-green-icon: #006500;
  $maximize-green-icon-active: #003200;

  $disabled-gray: #ddd;

  .macos-bar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 24px;
    padding: 0 10px;
    //background-color: var(--background-secondary);
    border-radius: 12px 12px 0 0;
    position: absolute; /* Add this to make the macOS bar always hug the top of the screen div */
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden; // Hide overflow to ensure gradient doesn't overflow

    &.enabled:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%; // Width of the gradient effect
      background: linear-gradient(to right, transparent, rgb(96, 88, 71) 50%, transparent); // Gradient color
      animation: gradientMove 5s forwards; // Animation duration
      pointer-events: none; // Disable mouse events on the pseudo-element
    }

    @keyframes gradientMove {
      0% {
        transform: translateX(100%);
        opacity: 1;
      }
      80% {
        transform: translateX(-100%);
        opacity: 0;
      }

      100% {
        transform: translateX(-100%);
        opacity: 1;
      }
    }


    .enabled &, &:hover, &:active {
      > .traffic-light-close {
        background-color: $close-red;
        border: 1px solid rgba(70, 1, 1, 0.66);

        &:active:hover {
          background-color: $close-red-active;
        }
      }

      > .traffic-light-minimize {
        background-color: $minimize-yellow;
        border: 1px solid rgb(110, 85, 3);

        &:active:hover {
          background-color: $minimize-yellow-active;
        }
      }

      > .traffic-light-maximize {
        background-color: $maximize-green;
        border: 1px solid rgba(14, 70, 1, 0.66);

        &:active:hover {
          background-color: $maximize-green-active;
        }
      }
    }

    > .traffic-light {
      &:before, &:after {
        visibility: hidden;
      }
    }

    &:hover, &:active {
      > .traffic-light {
        &:before, &:after {
          visibility: visible;
        }
      }
    }
  }

  .traffic-light {
    border-radius: 100%;
    padding: 0;
    height: 12px;
    width: 12px;
    box-sizing: border-box;
    margin-right: 10px;
    background-color: $disabled-gray;
    position: relative;
    outline: none;

    &:before, &:after {
      content: '';
      position: absolute;
      border-radius: 1px;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }

    &-close {
      &:before, &:after {
        background-color: $close-red-icon;
        width: 8px;
        height: 2px;
      }

      &:before {
        transform: rotate(45deg); // translate(-0.5px, -0.5px);
      }

      &:after {
        transform: rotate(-45deg); // translate(0.5px, -0.5px);
      }

      &:active:hover:before, &:active:hover:after {
        background-color: $close-red-icon-active;
      }
    }

    &-minimize {
      &:before {
        background-color: $minimize-yellow-icon;
        width: 8px;
        height: 2px;
        //transform: translateY(-0.5px);
      }

      &:active:hover:before {
        background-color: $minimize-yellow-icon-active;
      }
    }

    &-maximize {
      &:before {
        background-color: $maximize-green-icon;
        width: 6px;
        height: 6px;
      }

      &:after {
        background-color: $maximize-green;
        width: 10px;
        height: 2px;
        transform: rotate(45deg);
      }

      &:active:hover:before {
        background-color: $maximize-green-icon-active;
      }

      &:active:hover:after {
        background-color: $maximize-green-active;
      }
    }

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
      background: $disabled-gray !important;
      border: solid 1px $disabled-gray  !important;

      &:hover {
        border: solid 1px $disabled-gray  !important;
      }

      &:before,
      &:after {
        visibility: hidden !important;
      }
    }

    &:focus-visible {
      outline-style: dashed;
      outline-offset: 2px;
      outline-color: var(--js-yellow)
    }
  }
</style>