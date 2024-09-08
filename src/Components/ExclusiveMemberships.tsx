import { useState } from 'react';
import '../styles/ExclusiveMembership.css';
import { Membership } from '../Models/Menberships';


export const ExclusiveMenberships = () => {
    const memberships: Membership[] = [
        { id: 1, tier: 'Silver', benefits: ['Access to behind-the-scenes content', 'Special discounts on products'], price: 10 },
        { id: 2, tier: 'Gold', benefits: ['All Silver benefits', 'Exclusive invitations to VIP events'], price: 20 },
        { id: 3, tier: 'Platinum', benefits: ['All Gold benefits', 'Personalized consultations'], price: 30 },
        
      ];
        const [selectedMembership, setSelectedMembership] = useState<Membership | null>(null);
      
        const handleMembershipClick = (membership: Membership) => {
          setSelectedMembership(membership);
        };
      
  return (
    <>
    <div className="exclusive-membership-container">
    <h1>Exclusive Memberships</h1>
    <div className="memberships-list">
      {memberships.map((membership) => (
        <div key={membership.id} className="membership-card" onClick={() => handleMembershipClick(membership)}>
          <h2>{membership.tier}</h2>
          <p className="membership-price">${membership.price.toFixed(2)} per month</p>
          <ul className="membership-benefits">
            {membership.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    {selectedMembership && (
      <div className="membership-details">
        <h2>Details for {selectedMembership.tier} Membership</h2>
        <p className="membership-price-details">${selectedMembership.price.toFixed(2)} per month</p>
        <h3>Benefits:</h3>
        <ul className="membership-benefits-details">
          {selectedMembership.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
        <button className="signup-button">Sign Up</button>
      </div>
    )}
  </div>
  </>
  );
}
