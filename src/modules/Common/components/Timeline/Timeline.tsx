import ReactCalendarTimeline from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment';
import { Component } from 'react';
import './Timeline.css'

const groups = [
  { id: 1, title: 'Mar 17, 2021' }, 
  { id: 2, title: 'Mar 16, 2021' }, 
  { id: 3, title: 'Mar 15, 2021' }, 
  { id: 4, title: 'Mar 14, 2021' }, 
  { id: 5, title: 'Mar 13, 2021' }
]

let items = [
  { 
    id: 1, group: 1, title: 'Available', 
    leftTitle: 'Dates', start_time: moment(),
    end_time: moment().add(3, 'hour'),
    canMove: false,
    canResize: false,
    canChangeGroup: false,
  },
  { 
    id: 2, group: 2, title: 'Off Time',
    start_time: moment().add(-0.5, 'hour'), 
    end_time: moment().add(0.5, 'hour')
  },
  { 
    id: 3, group: 1, title: 'Actual Hour',
    start_time: moment().add(2, 'hour'), 
    end_time: moment().add(3, 'hour')
  },
  { 
    id: 4, group: 1, title: 'Actual Hour',
    start_time: moment().add(1, 'hour'), 
    end_time: moment().add(2, 'hour'),
    canMove: false,
    canResize: false,
    canChangeGroup: false,
  }
]
const defaultTimeStart = moment().startOf("day").add("day");
const defaultTimeEnd = moment().endOf("day").add(0, "days");


 class Timeline extends Component {
  render() {
    return (
      <>
      <ReactCalendarTimeline 
        defaultTimeStart={defaultTimeStart}
        defaultTimeEnd={defaultTimeEnd}
        canMove={false}
        canChangeGroup={false}
        groups={groups}
        items={items}
        lineHeight={55}
      ></ReactCalendarTimeline>

        <ul className='filter-list'>
          <li className='actual'><a href='src/modules/Common/components/Timeline/Timeline#'>Actual</a></li>
          <li className='break'><a href='src/modules/Common/components/Timeline/Timeline#'>Break</a></li>
          <li className='occurrencies'><a href='src/modules/Common/components/Timeline/Timeline#'>Occurrences</a></li>
          <li className='flex'><a href='src/modules/Common/components/Timeline/Timeline#'>Flex</a></li>
          <li className='paidtime'><a href='src/modules/Common/components/Timeline/Timeline#'>Paid Time Off</a></li>
          <li className='unpaidtime'><a href='src/modules/Common/components/Timeline/Timeline#'>Unpaid Time Off (Pending Approvals)</a></li>
          <li className='unpaidtimeappr'><a href='src/modules/Common/components/Timeline/Timeline#'>Unpaid Time Off (Approvals)</a></li>
        </ul>
        </>
    );
  }
};
export default Timeline;
