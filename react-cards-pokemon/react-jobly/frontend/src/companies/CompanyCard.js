import React from 'react';
import { Link } from 'react-router-dom';
import './CompanyCard.css';

/** Show limited information about a company
 *  - used in CompanyList
 * 
 * Props:
 * - company: { handle, name, description, numEmployees, logoUrl }
 * 
 * State: none
 * 
 * CompanyList -> CompanyCard
 */

function CompanyCard({ name, description, logoUrl, handle}) {
    console.debug("CompanyCard", name, description, logoUrl, handle);
    
    return (
        <Link className="CompanyCard card" to={`/companies/${handle}`}>
        <div className="card-body">
            <h6 className="card-title">{name}</h6>
            {description && <p><small>{description}</small></p>}
            {logoUrl && <img src={logoUrl}
            alt={name}
            className="float-right ml-5 img-fluid" />}
        </div>
        </Link>
    );
   
}

export default CompanyCard;