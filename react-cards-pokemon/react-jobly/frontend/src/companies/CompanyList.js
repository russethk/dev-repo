import React, { useEffect, useState } from "react";
import SearchForm from "../common/SearchForm";
import JoblyApi from "../api/api";
import CompanyCard from "./CompanyCard";
import LoadingSpinner from "../common/LoadingSpinner";

/** Show page with list of companies.
 * 
 * On mount, loads companies from API.
 * Re-loads filtered companies on submit from search form.
 * 
 * This is routed at /companies
 * 
 * Routes -> CompanyList -> CompanyCardList
 * 
 * CompanyList loads data from API on mount and when search form submitted.
 * 
 * State:
 * - companies: array of objects like -
 *     [ { handle, name, description, numEmployees, logoUrl }, ...]
 * - isLoading: boolean
 * 
 * CompanyList -> SearchForm
 */

function CompanyList() {
    console.debug("CompanyList");

    const [companies, setCompanies] = useState(null);
    console.debug("CompanyList", "companies=", companies);

    useEffect(function getCompaniesOnMount() {
        console.debug("CompanyList useEffect getCompaniesOnMount");
        search();
    }, []);

    /** Triggered by search form submit; reloads companies. */
    async function search(name) {
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
    }

    if (!companies) return <LoadingSpinner />;

    return (
        <div className="CompanyList col-md-8 offset-md-2">
            <SearchForm searchFor={search} />
            {companies.length
                ? (
                    <div className="CompanyList-list">
                        {companies.map(c => (
                            <CompanyCard
                                key={c.handle}
                                handle={c.handle}
                                name={c.name}
                                description={c.description}
                                logoUrl={c.logoUrl}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="lead">Sorry, no results were found!</p>
                )}
        </div>
    );
}

export default CompanyList;