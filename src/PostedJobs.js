import { useEffect } from "react";
import Job from "./Job";

function PostedJobs() {
  useEffect(() => {
    //get jobs array from backend
  }, []);
  return (
    <div className="postedJobs">
      <Job />
      <Job />
    </div>
  );
}

export default PostedJobs;
