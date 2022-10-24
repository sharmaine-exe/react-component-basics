function ProductCard({description, imagePath, productName, price, children, ...props}){

    //js
    console.log(props)

    return (
        <section>
            <img src={imagePath} alt={productName}/>
            <h3>{productName}</h3>
            <p>{price}</p>
            <div></div>
            <p>{description}</p>
            {children}
        </section>
    )
    
}

export default ProductCard