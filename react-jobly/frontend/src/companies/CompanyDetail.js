import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";
import JobCardList from "../jobs/JobCardList";
import LoadingSpinner from "../common/LoadingSpinner";


/** Show limited information about a company
 * - used in CompanyList
 * 
 * Props:
 * - company: { handle, name, description, numEmployees, logoUrl }
 * 
 * State: none
 * 
 * CompanyList -> CompanyCard
 * 
 * Routed as /companies/:handle
 * 
 * CompanyDetail loads data from API on mount and when handle changes.
 * 
 * This is routed at /companies/:handle
 * 
 * Routes -> CompanyDetail -> JobCardList
 * 
 */

function CompanyDetail() {
    const { handle } = useParams();
    console.debug("CompanyDetail", "handle=", handle);

    const [company, setCompany] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(function getCompanyAndJobsForUser() {
        async function getCompany() {
            setCompany(await JoblyApi.getCompany(handle));
            setIsLoading(false);
        }
        getCompany();
    }, [handle]);

    if (isLoading) return <LoadingSpinner />;
    console.debug("CompanyDetail", "company=", company);

   return (
       <div className="CompanyDetail col-md-8 offset-md-2">
           <h4>{company.name}</h4>
           <p>{company.description}</p>
           <JobCardList jobs={company.jobs} />
       </div>
   );
};

export default CompanyDetail;