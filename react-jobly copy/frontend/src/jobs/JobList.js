import React, { useState, useEffect } from 'react';
import JoblyApi from '../api/api';
import JobCardList from './JobCardList';
import LoadingSpinner from '../common/LoadingSpinner';
import SearchForm from '../common/SearchForm';

/** Show page with list of jobs.
 * 
 * On mount, loads jobs from API.
 * Re-loads filtered jobs on submit from search form.
 * 
 * JobList -> JobCardList -> JobCard
 */

function JobList() {
    console.debug("JobList");

    const [jobs, setJobs] = useState(null);

    useEffect(function getAllJobsOnMount() {
        console.debug("JobList useEffect getAllJobsOnMount");
        search();
    }, []);

    /* Triggered by search form submit; reloads jobs. */

    async function search(title) {
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
    }

    if (!jobs) return <LoadingSpinner />;

    return (
        <div className="JobList col-md-8 offset-md-2">
            <SearchForm searchFor={search} />
            {jobs.length
                ? <JobCardList jobs={jobs}/>
                : <p className="lead">Sorry, no results were found!</p>}
        </div>
    );
}

export default JobList;