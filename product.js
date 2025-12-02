
    const cartList = document.getElementById('cart-list');
    const totalEl = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkout');

    function parsePrice(card){
      return Number(card.querySelector('.price').textContent.replace(/[^0-9.]/g,''));
    }

    function updateCartTotal(){
      const items = Array.from(cartList.querySelectorAll('li[data-price]'));
      const sum = items.reduce((s,i)=> s + Number(i.dataset.price), 0);
      totalEl.textContent = `EGP ${sum}`;
      checkoutBtn.disabled = items.length === 0;
    }

    document.querySelectorAll('.btn.add').forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.card');
        const title = card.querySelector('.title').textContent;
        const price = parsePrice(card);

        const placeholder = cartList.querySelector('.empty');
        if(placeholder) placeholder.remove();

        const li = document.createElement('li');
        li.dataset.price = price;
        li.textContent = `${title} — EGP ${price}`;
        const remove = document.createElement('button');
        remove.textContent = '×';
        remove.className = 'remove';
        remove.addEventListener('click', () => { li.remove(); updateCartTotal(); if(cartList.children.length===0){ cartList.innerHTML='<li class="empty">No items yet.</li>'; } });
        li.appendChild(remove);
        cartList.appendChild(li);
        updateCartTotal();
      });
    });

// Removed search and sort (unused in current markup)

    checkoutBtn.addEventListener('click', () => {
      alert('Checkout is not implemented in this demo.');
    });