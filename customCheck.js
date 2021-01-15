/* ============> Vanilla Js Section <============ */

/* variables */
const containerCheck = document.querySelector('.woocommerce-checkout-review-order');

/* listeners || Trigger a function when the DOM is ready */
function listener() {

    document.addEventListener('DOMContentLoaded', checkBox);
}
listener();

/* functions || hide checkbox and show the warning */
function checkBox() {

    /* create Node */
    const label = document.createElement('label');
    const check = document.createElement('input');
    const text = document.createElement('span');
    const link = document.createElement('a');


    const notice = document.createElement('div');
    const icon = document.createElement('i');
    const paragraph = document.createElement('p');


    /* Add Class || and atributes */
    label.classList.add('checkbox-contain')
    check.setAttribute('type', 'checkbox');
    check.classList.add('checkbox-terms', 'disabled-check')
    text.classList.add('txt-label', 'disabled-txt')
    link.classList.add('link')
    link.setAttribute('href', 'https://health-elabs.com/terms/')
    link.classList.add('terms-conditions');
    notice.classList.add('notice-read');
    icon.classList.add('fas', 'fa-exclamation-circle')
    paragraph.classList.add('txt');


    /* Add Html */
    text.textContent = ' I have read and agree to Health eLabs ';
    paragraph.textContent = 'You need to read the terms and conditions to continue';
    link.textContent = ' terms and conditions'

    /* Add to DOM */
    label.appendChild(check)
    label.appendChild(text)
    text.appendChild(link)
    notice.appendChild(icon);
    notice.appendChild(paragraph)
    containerCheck.appendChild(label)
    containerCheck.appendChild(notice)

    /* select new node  */
    const CheckDisabled = document.querySelector('.checkbox-terms');
    const noticeActions = document.querySelector('.notice-read');
    const buttonSetOrder = document.querySelector('.woocommerce');


    /* traversing  */
    const butonCheckChild = buttonSetOrder.children[4].children[2].children[1].children[1].children[1].children[2].children[0].children[0]

    /* Disabled check function */
    checkDisabled(CheckDisabled, noticeActions, butonCheckChild);

}

/* Disabled check function */
function checkDisabled(check, notice, checked) {
    if (check.classList.contains('disabled-check')) {
        check.disabled = true;
        notice.classList.add('show-notice');
        termsReaded(check);
    } else {
        notice.classList.add('hide-notice');
        checked.checked = true;
    }
}


function termsReaded() {
    console.log(`se envia correctamente`)
    const scrolling = document.querySelector('.woocommerce-terms-and-conditions');
    window.onscroll = () => {
        console.log("hace el scroll en la seccion")
    }
}