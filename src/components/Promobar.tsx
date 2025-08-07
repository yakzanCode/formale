
export default function PromoBar() {
  return (
    <div id="promoCarousel" className="carousel slide small border-bottom border-dark-subtle py-1" style={{backgroundColor: "#d6d2c4"}} data-bs-ride="carousel">
      <div className="carousel-inner text-center py-2">
        <div className="carousel-item active" data-bs-interval="10000">
           Free shipping on orders over $50!
        </div>
        <div className="carousel-item" data-bs-interval="2000">
           20% OFF on selected items – Today only!
        </div>
        <div className="carousel-item">
           Next-day delivery available in select areas.
        </div>
      </div>
    </div>
  );
}
