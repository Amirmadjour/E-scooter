let card_number = JSON.parse(localStorage.getItem("card_num"));
let card = document.querySelectorAll('.card-container');

card_number === null && (card_number = 0);  
card[card_number].classList.add("card-container-shadow");

let left_btn = document.querySelector('.testimonials-left-switcher');
let right_btn = document.querySelector('.testimonials-right-switcher');

function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

function manage(c_num) {

    let left_rect = document.getElementById("left-button-rect");
    let left_path = document.getElementById("left-button-path");

    let right_rect = document.getElementById("right-button-rect");
    let right_path = document.getElementById("right-button-path");
    if(c_num === 2) {
        setAttributes(left_rect, {"y": "0","height": "42","width": "42","rx" :"21", "fill": "#42454A"});
        left_rect.removeAttribute("stroke");
        left_path.setAttribute("stroke", "#FAFAFA");

        setAttributes(right_rect, {"x": "0.5","y": "0.5", "width": "41", "height": "41","rx": "20.5","fill": "#FAFAFA","stroke": "#42454A"});
        right_path.setAttribute("stroke", "#42454A");
    }
    else if (c_num === 1) {
        left_rect.setAttribute("x", "66");

        setAttributes(left_rect, {"height": "42", "width": "42", "rx": "21","fill": "#42454A"});
        left_rect.removeAttribute("stroke");
        left_rect.removeAttribute("y");
        left_path.setAttribute("stroke", "#FAFAFA");

        right_rect.removeAttribute("x");
        right_rect.removeAttribute("y");
        setAttributes(right_rect, {"height": "42", "width": "42", "fill": "#42454A"});
        right_rect.removeAttribute("stroke");
        right_path.setAttribute("stroke", "#FAFAFA");
    }
    else {
        setAttributes(left_rect, {"x": "66", "y": "0.5", "width": "41", "height": "41", "rx": "20.5", "stroke": "#42454A"});
        left_rect.removeAttribute("fill", "#FAFAFA");
        left_path.setAttribute("stroke", "#42454A");

        setAttributes(right_rect, {"y": "0", "height": "42", "width": "42", "rx": "21", 'fill': '#42454A'});
        right_rect.removeAttribute("stroke");
        right_path.setAttribute("stroke", "#FAFAFA");
    }
}

manage(card_number);

left_btn.addEventListener("click", () =>
{
    if(card_number > 0){
        card[card_number].classList.remove("card-container-shadow");
        card_number = card_number === 0 ? 2 : card_number - 1;
        card[card_number].classList.add("card-container-shadow");
        localStorage.setItem("card_num", JSON.stringify(card_number));

        manage(card_number);
    }
   
})

right_btn.addEventListener("click", () =>
{
    if(card_number < 2) {
        card[card_number].classList.remove("card-container-shadow");
        card_number = (card_number + 1) % 3;
        card[card_number].classList.add("card-container-shadow");
        localStorage.setItem("card_num", JSON.stringify(card_number));

        manage(card_number);
    }

})