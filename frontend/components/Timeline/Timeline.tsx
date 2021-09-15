import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  line: {
    color: '#000',
  },

}));

const Timeline = () => {
  const classes = useStyles();
  return (
    <>
      <VerticalTimeline className={classes.line}>
        {/* RSI */}
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='August 2021 - Present'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Junior Web Consultant
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Rural Sourcing Inc.
          </h4>
          <p>Web Design, UX/UI, Communication </p>
        </VerticalTimelineElement>
        {/* DeepDive */}
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='April 2021 - June 2021'
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
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
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
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
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
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
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
