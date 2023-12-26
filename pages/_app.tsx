
import type { AppProps } from 'next/app'
import store from "../src/redux/store";
import {Provider} from "react-redux";
import '../src/modules/Common/configs/i18n';
import "simplebar/src/simplebar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/modules/Common/components/Login/Login.css';
import '../src/App.css';
import '../src/commonStyle.css';
import '../src/modules/Users/Supervisor/Occurrence/Occurrence.css';
import '../src/modules/Users/Supervisor/ShiftHoursDef/ShiftHourDef.css';
import '../src/modules/Common/components/AgentSearch/AgentSearch.css';
import '../src/modules/Common/components/Calendar/calendar.css';
import '../src/modules/Common/components/Dashboard/Dashboard.css';
import '../src/modules/Users/Agent/AgentRequestTimeOff/RequestTimeOff.css';
import '../src/modules/Common/components/DateRangeDropdown/DateRangeDropdown.css';
import '../src/modules/Common/components/Dialogs/dialog.css';
import '../src/modules/Common/components/Dispute/dispute.css';
import '../src/modules/Common/components/Dropdown-Selector/DropdownSelector.css';
import '../src/modules/Common/components/Filters/FilterStyle.css';
import '../src/modules/Common/components/FlexReport/FlexReport.css';
import '../src/modules/Common/components/Header/Header.css';
import '../src/modules/Common/components/HoursView/HoursView.css';
import '../src/modules/Common/components/Lists/List.css';
import '../src/modules/Common/components/ScheduleReport/ScheduleReport.css';
import '../src/modules/Common/components/Stats/stats.css';
import '../src/modules/Common/components/View/charts.css';
import '../src/modules/Common/components/react-paginate/react-paginate.css';
import '../src/modules/Users/Agent/AgentDispute/Active/AgentDisputeActive/DisputeAgentActiveListChild.css';
import '../src/modules/Users/Agent/AgentDispute/AgentDispute.css';
import '../src/modules/Users/Agent/AgentFlexTime/AgentFlexTime.css';
import '../src/modules/Users/Supervisor/ShiftHoursDef/NotSameDay/NotSameDay.css';
import '../src/modules/Users/Supervisor/ShiftHoursDef/SameDay/SameDay.css';
import '../src/modules/Users/Supervisor/SupervisorAttendanceSchedule/Attendance-Search/SupervisorAttendanceSearch.css';
import '../src/modules/Users/Supervisor/SupervisorAttendanceSchedule/sticky-table.css';
import '../src/modules/Users/Supervisor/SupervisorDashboard/SupervisorAttendanceOverview.css';
import '../src/modules/Users/Supervisor/SupervisorFlexTime/SupervisorFlexTime.css';
import '../src/modules/Users/Supervisor/SupervisorFlexTime/promotions/SupervisorFlexPromotion.css';
import '../src/modules/Users/Supervisor/SupervisorFlexTime/request/SupervisorFlexRequest.css';
import '../src/modules/Users/Supervisor/SupervisorPayroll/Supervisor-Payroll-Search/SupervisorPayrollSearch.css';
import '../src/modules/Users/WFM/PayrollReport/PayrollReport.css';
import dynamic from "next/dynamic";
const PrivateRoute = dynamic(() => import('../src/modules/Common/components/PrivateRoute'), { ssr: false } );

function MyApp({ Component, pageProps }: AppProps) {
  return(
      <Provider store={store}>
          <PrivateRoute>
              <Component {...pageProps} />
          </PrivateRoute>
      </Provider>
  )
}

export default MyApp

