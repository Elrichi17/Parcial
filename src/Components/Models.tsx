import { useState } from 'react';
import '../styles/Models.css';
import { Model } from '../Models/Model';
import adrianaLima from '../Images/Adriana_Lima.jpg';
import kendal from '../Images/Kendall Jenner.jpg';
export const Models = () => {
  // Para añadir y eliminar modleos hay que hacer una verificacion de que eres admin (Credenciales en backend) 
  const [models, setModels] = useState<Model[]>([
    {
      id: 1,
      name: 'Adriana Lima',
      photo: adrianaLima,
      portfolio: 'Adriana has modeled for top brands worldwide.',
      bookingInfo: 'Contact: adriana@lacarecortada.com',
    },
    {
      id: 2,
      name: 'Kendal Jenner',
      photo: kendal,
      portfolio: 'Kendal is known for her work in high fashion and runway shows.',
      bookingInfo: 'Contact: kendal@lacarecortada.com',
    },
   
  ]);

  const handleAddModel = () => {
   
    const newModel: Model = {
      id: models.length + 1,
      name: 'New Model',
      photo: '/images/default.jpg',
      portfolio: 'New model portfolio description.',
      bookingInfo: 'Contact: newmodel@lacarecortada.com',
    };
    setModels([...models, newModel]);
  };

  const handleUpdateModel = (id: number) => {

    const updatedModels = models.map((model) =>
      model.id === id ? { ...model, name: 'Updated Model' } : model
    );
    setModels(updatedModels);
  };

  const handleRemoveModel = (id: number) => {
   
    const updatedModels = models.filter((model) => model.id !== id);
    setModels(updatedModels);
  };
  return (
    <> 
    <div className="models-container">
      <h2>Our Models</h2>
      <div className="models-grid">
        {models.map((model) => (
          <div key={model.id} className="model-card">
            <img src={model.photo} alt={model.name} className="model-photo" />
            <h3>{model.name}</h3>
            <p>{model.portfolio}</p>
            <p>{model.bookingInfo}</p>
          {/*   <button onClick={() => handleUpdateModel(model.id)}>Update</button>
            <button onClick={() => handleRemoveModel(model.id)}>Remove</button> */}
          </div>
        ))}
      </div>
      {/* <button onClick={handleAddModel} className="add-model-button">
        Add New Model
      </button> */}
    </div>
    </>
  );
}
