
import one from "../assets/images/perfume image.jpg"
import two from "../assets/images/perfume 2.jpeg"
import three from "../assets/images/perfume 3.jpeg"




//products
function Product() {
    return (
      <div className="products">
        <div className="box">
          <img src={one} alt="perfume" height="220" width="220"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis error quibusdam minima illo, veniam repellendus libero autem, quae, sequi harum placeat! Alias perferendis aliquam fuga?</p>
        </div>
  
        <div className="box">
          <img src={two} alt="perfume" height="220" width="220"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis error quibusdam minima illo, veniam repellendus libero autem, quae, sequi harum placeat! Alias perferendis aliquam fuga?</p>
        </div>
  
        <div className="box">
          <img src={three} alt="perfume" height="220" width="220"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis error quibusdam minima illo, veniam repellendus libero autem, quae, sequi harum placeat! Alias perferendis aliquam fuga?</p>
        </div>
  
      </div>
    )
  }

  export default Product