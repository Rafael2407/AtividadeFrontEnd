const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const icon = darkModeToggle.querySelector('i');

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('bi-moon-fill', 'bi-sun-fill');
        darkModeToggle.classList.replace('btn-outline-dark', 'btn-outline-light');
    } else {
        icon.classList.replace('bi-sun-fill', 'bi-moon-fill');
        darkModeToggle.classList.replace('btn-outline-light', 'btn-outline-dark');
    }
});

async function carregarProdutos() {
    try {
        const response = await fetch('https://fakestoreapi.com/products/category/electronics?limit=4');
        let produtos = await response.json();
        
        if (!produtos || produtos.length < 4) {
            produtos = [
                { title: 'Notebook Pro X 16"', price: 4500.00, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=60' },
                { title: 'Monitor Gamer Ultrawide 144Hz', price: 1200.00, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=60' },
                { title: 'Teclado Mecânico RGB Switch Blue', price: 350.00, image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=500&q=60' },
                { title: 'Mouse Gamer 10000 DPI Óptico', price: 200.00, image: 'https://images.unsplash.com/photo-1527814050087-179f376dd62d?auto=format&fit=crop&w=500&q=60' }
            ];
        }

        const container = document.getElementById('produtos-container');
        container.innerHTML = '';

        produtos.forEach((produto, index) => {
            const activeClass = index === 0 ? 'active' : '';
            const html = `
                <div class="carousel-item ${activeClass}">
                    <div class="d-flex justify-content-center">
                        <div class="card" style="width: 18rem;">
                            <img src="${produto.image}" class="card-img-top product-img" alt="${produto.title}">
                            <div class="card-body text-center">
                                <h5 class="card-title text-truncate" title="${produto.title}">${produto.title}</h5>
                                <p class="card-text fs-4 fw-bold">R$ ${Number(produto.price).toFixed(2)}</p>
                                <button class="btn btn-success w-100">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += html;
        });
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
}

document.addEventListener('DOMContentLoaded', carregarProdutos);