import '../styles/PhotoScales.css';
import { Photo } from '../Models/Photos';
import { useState } from 'react';
import photo1 from '../Images/PhotoVenta1.jpg';
import photo2 from '../Images/PhotoVenta2.jpg';
import photo3 from '../Images/PhotoVenta3.jpeg';
export const PhotoSales = () => {

const photos: Photo[] = [
    { id: 1, title: 'Photo 1', image:  photo1, price: 15 },
    { id: 2, title: 'Photo 2', image:  photo2, price: 20 },
    { id: 3, title: 'Photo 3', image:  photo3, price: 25 },
    
  ];
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [purchaseType, setPurchaseType] = useState<string>('digital');

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const handlePurchaseTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPurchaseType(e.target.value);
  };
  return (
    <>
 <div className="photo-sales-container">
      <h1>Photo Sales</h1>
      <div className="photos-gallery">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-card" onClick={() => handlePhotoClick(photo)}>
            <img src={photo.image} alt={photo.title} className="photo-image" />
            <h2>{photo.title}</h2>
            <p className="photo-price">${photo.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      {selectedPhoto && (
        <div className="purchase-section">
          <h2>Purchase {selectedPhoto.title}</h2>
          <img src={selectedPhoto.image} alt={selectedPhoto.title} className="selected-photo" />
          <p className="selected-photo-price">${selectedPhoto.price.toFixed(2)}</p>
          <div className="purchase-options">
            <label htmlFor="purchase-type">Select Purchase Type:</label>
            <select
              id="purchase-type"
              value={purchaseType}
              onChange={handlePurchaseTypeChange}
              className="purchase-select"
            >
              <option value="digital">Digital Download</option>
              <option value="physical">Physical Print</option>
            </select>
          </div>
          <button className="purchase-button">Proceed to Checkout</button>
        </div>
      )}
    </div>
    </>
  )
}
