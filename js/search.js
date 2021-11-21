const search = function () {

    const input = document.querySelector('.search-block > input')
    const searchBtn = document.querySelector('.search-block > button')


    const renderGoods = (goods) => {
        const goodsContainer = document.querySelector('.long-goods-list')

        goodsContainer.innerHTML = ''

        goods.forEach(good => {
            const goodBlock = document.createElement('div')


            goodBlock.classList.add('col-lg-3')
            goodBlock.classList.add('col-sm-6')

            goodBlock.innerHTML = `
                <div class="goods-card">
                    <span class="label ${good.label ? null : 'd-none'}">${good.label}</span>
                    <img src="db/${good.img}" alt="${good.name}" class="goods-image">
                    <h3 class="goods-title">${good.name}</h3>
                    <p class="goods-description">${good.description}</p>
                    <button class="button goods-card-btn add-to-cart" data-id="${good.id}">
                        <span class="button-price">$${good.price}</span>
                    </button>
                </div>
            `

            goodsContainer.append(goodBlock)
        })
    }

    // https://wildberris-36eed-default-rtdb.firebaseio.com/db.json
    const getData = (value) => {
        fetch('https://wildberris-36eed-default-rtdb.firebaseio.com/db.json')
            .then((res) => res.json())
            .then((data) => {
                const array = data.filter(good => {
                    return good.name.toLowerCase().includes(value.toLowerCase())
                })
                localStorage.setItem('goods', JSON.stringify(array))

                if (window.location.pathname === 'goods.html' || localStorage.getItem('goods')) {
                    renderGoods(array)
                } else {
                    window.location.href = 'goods.html'
                }
            })
    }


    searchBtn.addEventListener('click', () => {
        getData(input.value)
    })
}

search()
