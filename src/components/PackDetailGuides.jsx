import React from 'react';
import useGuide from '../hooks/useGuide';
import GuideCard from './GuideCard';
import Title from '../shared components/Title';
import { Link } from 'react-router-dom';

function PackDetailGuides(props) {
    const [guides, isPending] = useGuide()

    return (
        <section className='space-y-10'>

            <Title heading={'Our Capable Guides'} subHeading={"chose your guide"}></Title>

            <div className='flex flex-wrap gap-5  lg:gap-10 justify-center'>
                {
            guides ? guides?.slice(0,3).map(item => <GuideCard key={item._id} item={item}></GuideCard>) : ''
                }
            </div>

                    {/* ---------- all guides button ------------ */}
        <div className="flex justify-center">
          <Link
            to="/all-guides"
            className="section-btn ">
            see All guides
          </Link>
        </div>

        </section>
    );
}

export default PackDetailGuides;