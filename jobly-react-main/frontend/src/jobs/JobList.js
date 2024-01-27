import React, { useState, useEffect } from 'react';

import JoblyApi from '../common/api';
import SearchBar from '../forms/SearchBar';
import JobCardList from './JobCardList';
import LoadingSpinner from '../common/LoadingSpinner';

/** Show list of all jobs.
 *
 * On mount, loads jobs from API.
 * Re-loads filtered jobs on submit from search form.
 *
 * JobList -> JobCardList -> JobCard
 *
 * Routed at /jobs
 */

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.debug('JobList useEffect getJobsOnMount');
    search();
  }, []);

  /** Triggered by search form submit; reloads jobs. */
  async function search(title) {
    let result = await JoblyApi.getJobs(title);
    setJobs(result);
    setIsLoading(false);
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="JobList col-md-8 offset-md-2">
      <SearchBar searchFor={search} />
      {jobs.length ? (
        <JobCardList jobs={jobs} />
      ) : (
        <p className="message">
          There are no openings at this time. Please check back later!
        </p>
      )}
    </div>
  );
};

export default JobList;
