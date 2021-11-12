/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Work, School, Star } from '@mui/icons-material';

const Timeline: React.FC = () => {
  return (
    <>
      <VerticalTimeline animate={false}>
        {/*-------------------------------------------RSI------------------------------------------------- */}
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='August 2021 - Present'
          contentStyle={{ color: '#f8f8f2', backgroundColor: '#44475a' }}
          iconStyle={{ background: 'hsl(191, 97%, 77%)', color: '#fff' }}
          icon={<Work />}
        >
          <h3 className='vertical-timeline-element-title'>
            Junior Web Consultant
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Rural Sourcing Inc.
          </h4>
          <p>Web Design, UX/UI, Communication </p>
        </VerticalTimelineElement>
        {/*-----------------------------------------DeepDive------------------------------------------------ */}
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='April 2021 - June 2021'
          contentStyle={{ color: '#f8f8f2', backgroundColor: '#44475a' }}
          iconStyle={{ background: 'hsl(0, 100%, 67%)', color: '#fff' }}
          icon={<School />}
        >
          <h3 className='vertical-timeline-element-title'>
            Fullstack Web Development Intern
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Central New Mexico Community College - DeepDive
          </h4>
          <p>Project Management, UX/UI, Responsive Design</p>
        </VerticalTimelineElement>
        {/* -----------------------------------------DoorDash------------------------------------------------ */}
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='January 2021'
          contentStyle={{ color: '#f8f8f2', backgroundColor: '#44475a' }}
          iconStyle={{ background: 'hsl(191, 97%, 77%)', color: '#fff' }}
          icon={<Work />}
        >
          <h3 className='vertical-timeline-element-title'>
            Courier/Delivery Driver
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>DoorDash</h4>
          <p>Customer Service, Communication, Punctuality</p>
        </VerticalTimelineElement>
        {/* ----------------------------------------Marine Corps----------------------------------------------- */}
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='Jan 2017 - Jan 2021'
          contentStyle={{ color: '#f8f8f2', backgroundColor: '#44475a' }}
          iconStyle={{ background: 'hsl(191, 97%, 77%)', color: '#fff' }}
          icon={<Work />}
        >
          <h3 className='vertical-timeline-element-title'>
            Quality Control Specialist
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            United States Marine Corps
          </h4>
          <p>
            Leadership, Attention to Detail, Complex Problem Solving, Team Work
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'hsl(135, 94%, 65%)', color: '#fff' }}
          icon={<Star />}
        />
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
