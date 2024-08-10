import { useLoaderData } from 'react-router-dom';
import ReactTabs from './../components/ReactTabs';

const Home = () => {
    const jobs = useLoaderData();
    console.log(jobs)
    return (
        <div>
            <ReactTabs jobs={jobs} />
        </div>
    );
};

export default Home;