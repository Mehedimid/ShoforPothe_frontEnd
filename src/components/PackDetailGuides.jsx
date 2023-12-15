import React from 'react';
import useGuide from '../hooks/useGuide';
import GuideCard from './GuideCard';
import Title from '../shared components/Title';
import { Link } from 'react-router-dom';

function PackDetailGuides(props) {
    const [guides, isPending] = useGuide()

    return (
        <section className='space-y-10'>

            <Title heading={'Our Capable Guides'}></Title>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {
            guides ? guides?.slice(0,4).map(item => <GuideCard key={item._id} item={item}></GuideCard>) : ''
                }
            </div>

                    {/* ---------- all guides button ------------ */}
        <div className="w-full md:w-1/2 my-7 mx-auto">
          <Link
            to="/all-guides"
            className="btn-grad btn-grad:hover ">
            see All guides
          </Link>
        </div>

        </section>
    );
}

export default PackDetailGuides;