function locMain() {
    // hide hidden fields from screen reader
    const matches = document.querySelectorAll('input.sidebar-toggle, label.overlay');
    matches.forEach((el) => {
        el.setAttribute('aria-hidden', 'true');
    });

    // get header/footer contents
    const locFooter = document.querySelector('footer.loc-footer');
    const footerContent = locFooter ? locFooter.innerHTML : '';
    const locHeader = document.querySelector('header.loc-header');
    const headerContent = locHeader ? locHeader.innerHTML : '';

    // remove redundant footer
    const redundantFooter = document.querySelector('footer.bd-footer-content');
    if (redundantFooter) redundantFooter.remove();

    // change prev-next footer to a div
    const prevNextFooter = document.querySelector('footer.prev-next-footer');
    if (prevNextFooter) {
        const prevNextDiv = document.createElement('div');
        prevNextDiv.classList.add('prev-next-footer');
        prevNextDiv.innerHTML = prevNextFooter.innerHTML;
        prevNextFooter.replaceWith(prevNextDiv);
    }
    
    // put footer contents into main footer
    const mainFooter = document.querySelector('footer.bd-footer');
    if (mainFooter) {
        mainFooter.classList.add('loc-footer');
        mainFooter.innerHTML = footerContent;
    } else {
        const newFooter = document.createElement('footer');
        newFooter.classList.add('loc-footer');
        newFooter.innerHTML = footerContent;
        document.body.appendChild(newFooter);
    }

    // put header contents into header
    const newHeader = document.createElement('header');
    newHeader.classList.add('loc-header');
    newHeader.innerHTML = headerContent;
    document.body.prepend(newHeader);
}

document.addEventListener('DOMContentLoaded', (event) => {
    locMain();
});