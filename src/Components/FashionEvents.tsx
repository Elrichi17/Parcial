
import '../styles/FashionEvents.css';
import { Event } from '../Models/Events'

export const FashionEvents = () => {
    const events: Event[] = [
        { id: 1, name: 'Summer Collection Launch', date: '2024-10-15', location: 'New York, NY', participatingModels: ['Model A', 'Model B'], productsShowcased: ['Lipstick A', 'Foundation B'] },
        { id: 2, name: 'Fall Fashion Gala', date: '2024-11-05', location: 'Los Angeles, CA', participatingModels: ['Model C', 'Model D'], productsShowcased: ['Eye Shadow C', 'Lipstick B'] },
      
      ];
  return (
    <>
    <div className="fashion-events-container">
      <h1>Fashion Events</h1>
      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h2>{event.name}</h2>
            <p className="event-date">{event.date}</p>
            <p className="event-location">{event.location}</p>
            <div className="event-details">
              <div className="event-models">
                <h3>Participating Models</h3>
                <ul>
                  {event.participatingModels.map((model, index) => (
                    <li key={index}>{model}</li>
                  ))}
                </ul>
              </div>
              <div className="event-products">
                <h3>Products Showcased</h3>
                <ul>
                  {event.productsShowcased.map((product, index) => (
                    <li key={index}>{product}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
