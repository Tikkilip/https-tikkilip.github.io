import "./style.scss";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/brands'
import Logo from './img/logo_laprensa_panama.svg'
import Image from './img/victim.webp'
import Video from './img/efir1.webm'
import Trust from './img/trust-logo.svg'
import Ico from './img/favicon.ico'
import Spinner from './img/spinner-solid.svg'
import Logo1 from './img/logo1.png'
import Logo2 from './img/logo2.png'
import Logo3 from './img/logo3.png'
import Logo4 from './img/logo4.svg'
import Logo5 from './img/logo5.svg'
import Sprite from './img/sprite_footer.png'

const button = document.querySelector(".order-btn");
const buttonInner = document.querySelector(".order-btn__contents");

if (button && buttonInner) {
    button.addEventListener("click", function() {
        button.disabled = true;
        button.classList.add("disabled");
        buttonInner.innerHTML = "";

        let loading = button.querySelector(".loader");

        if (loading) {
            loading.classList.add("loading");
        }
    })
}

