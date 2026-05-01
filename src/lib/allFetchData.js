const getProductsData = async() => {
    const res = await fetch('https://sun-cart-chi.vercel.app/data.json');
    const data = await res.json();
    return data;
}

export {getProductsData};