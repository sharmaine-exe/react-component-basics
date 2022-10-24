
import PageHeading from "../components/PageHeading"
import ProductCard from "../components/ProductCard"

/* 
  <PageHeading title="functional components" tagline="things you should know" />

  <PageHeading title="2nd title" tagline="par 2">
    <img src="shoes.jpg" alt="shoes"/>
    <button>Buy Now</button>
  </PageHeading> 
*/

function HomePage() {   
    return  (
      <>
        <PageHeading title="React functional components" tagline="Introduction to components" />

        <ProductCard imagePath="shoes.jpg" productName="Nike Sneakers" price="$89.99" description="Running shoes">
          <button>BUY NOW</button>
        </ProductCard> 

      </>
    )
}




export default HomePage
