function PageHeading({title, tagline, children, ...props}){

    //js
    console.log(props)

    return (
        <section>
            <h1>{title}</h1>
            <p>{tagline}</p>
            {children}
        </section>
    )
    
}

export default PageHeading