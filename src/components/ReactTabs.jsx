import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const ReactTabs = () => {

  const [jobs,setJobs] = useState([]);

  useEffect(()=>{
    const getData=async()=>{
     const {data} = await axios('http://localhost:5000/jobs');
    //  console.log(data)
    //  setJobs(Array.isArray(data) ? data : []);
    setJobs(data)
    }
    getData();
  },[])
  // console.log(jobs)

  return (
    <div className="flex  justify-center items-center">
      <Tabs>
        <TabList>
          <Tab>Web Development</Tab>
          <Tab>Digital Marketting</Tab>
          <Tab>Graphics Design</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 ">
            {jobs
              .filter((j) => j.category === "Web Development")
              .map((job) => (
                <JobCard job={job} key={job._id}></JobCard>
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 ">
            {jobs
              .filter((jd) => jd.category === "Digital Marketing")
              .map((job) => (
                <JobCard job={job} key={job._id}></JobCard>
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 ">
            {jobs
              .filter((jd) => jd.category === "Graphics Design")
              .map((job) => (
                <JobCard job={job} key={job._id}></JobCard>
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReactTabs;
