import { useEffect } from "react";
import Job from "./Job";

function PostedJobs({ jobs }) {
  return (
    <div className="postedJobs">
      {jobs
        ? jobs.map((job) => (
            <Job
              id={job.docId}
              key={job.docId}
              title={job.title.join(" ")}
              work={job.work}
              workplace={job.workplace}
              description={job.description}
              minpay={job.minPay}
              maxpay={job.maxPay}
            />
          ))
        : null}
    </div>
  );
}

export default PostedJobs;
