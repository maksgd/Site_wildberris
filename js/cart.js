const cart = function () {

    const cartBtn = document.querySelector('.button-cart')
    const cart = document.getElementById('modal-cart')
    const closeBtn = cart.querySelector('.modal-close')


    cartBtn.addEventListener('click', function () {
        cart.style.display = 'flex'
    })

    closeBtn.addEventListener('click', function () {
        cart.style.display = ''
    })

    cart.addEventListener('click', (e) => {
        if (!e.target.closest('.modal')) {
            cart.style.display = ''
        }
    })

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            cart.style.display = ''
        }
    })

}

cart()
