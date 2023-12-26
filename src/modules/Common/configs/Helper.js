import Highcharts from "highcharts";
import React from "react";
import {
    Calendar,
    Category,
    Clock,
    CommandSquare,
    KeySquare,
    MessageProgramming,
    Receipt,
    Ticket,
    WalletRemove
} from "iconsax-react";
import ScheduleReport from "../components/ScheduleReport/ScheduleReport";
import RequestList from "../components/Dialogs/RequestList";
import Dashboard from "../components/Dashboard/Dashboard";
import FlexTime from "../components/FlexTime/FlexTime";
import Dispute from "../components/Dispute/Dispute";
import Payroll from "../components/Payroll/Payroll";
import Attendance from "../components/Attendance/Attendance";
import Occurence from "../../Users/Supervisor/Occurrence/Occurrence";
import ShiftHourDef from "../../Users/Supervisor/ShiftHoursDef/ShiftHourDef";

export const TASK_STATUS_COLOR = {
    "Actual": "#46B0E6",
    "Break": "#6DBEE7",
    "Occurrences":"#EF7373",
    "Flex":"#EF9829",
    "PaidTimeOff":"#03C04A",
    "UnpaidTimeoffPending":"#EE4723",
    "UnpaidTimeoffApproved":"#9B89FF"
}

export const ZONES = {
    "ActualHours": {
        color: "#39B7E9",
        fillColor: {
            linearGradient: [0, 0, 0, 150],
            stops: [
                [0, '#39B7E9'],
                [1, Highcharts.color('#ffffff').setOpacity(0.1).get('rgba')]
            ]
        },
    },
    "Leaves": {
        color: "#EE4723",
        fillColor: {
            linearGradient: [0, 0, 0, 150],
            stops: [
                [0, '#EE4723'],
                [10, Highcharts.color('#ffffff').setOpacity(0.1).get('rgba')]
            ]
        },
    },
    "OffDays": {
        color: "#666666",
        fillColor: {
            linearGradient: [0, 0, 0, 150],
            stops: [
                [0, '#666666'],
                [1, Highcharts.color('#ffffff').setOpacity(0.1).get('rgba')]
            ]
        },
    }
}
export const MENUS = {
    "agent-dashboard": {
        "menuIcon" : <Category/>,
        "component" : <Dashboard/>
    },
    "attendance": {
        "menuIcon" : <Calendar/>,
        "component" : <Attendance/>
    },
    "schedule-time": {
        "menuIcon" : <Clock/>,
        "component" : <ScheduleReport/>
    },
    "request-time-off": {
        "menuIcon" : <KeySquare/>,
        "component" : <RequestList/>
    },
    "flextime": {
        "menuIcon" : <Receipt/>,
        "component" : <FlexTime/>
    },
    "my-disputes": {
        "menuIcon" : <Ticket/>,
        "component" : <Dispute/>
    },
    "payroll": {
        "menuIcon" : <WalletRemove/>,
        "component" : <Payroll/>
    },
    "occurrence -rules": {
        "menuIcon" : <CommandSquare/>,
        "component" : <Occurence/>
    },
    "shift-hour-def": {
        "menuIcon" : <MessageProgramming/>,
        "component" : <ShiftHourDef/>
    }
}

export const convertToGridDate = (date, identifier) => {
    if(date === "0"){
        return;
    }
    const dateArr = date.split("-");
    const startDate = dateArr[0];
    const endDate = dateArr[1];
    const startDateHour = Number(startDate.split(":")[0]);
    const startDateMin = Number(startDate.split(":")[1].split(" ")[0]);
    const endDateHour = Number(endDate.split(":")[0]);
    const endDateMin = Number(endDate.split(":")[1].split(" ")[0]);
    let convertedEndDateHour = endDateHour;
    if(endDate.includes("PM")) {
        convertedEndDateHour+=12;
    }
    let minDiff = endDateMin - startDateMin + 60;
    if(minDiff !== 0) {
        convertedEndDateHour--;
    }
    if(minDiff === 60) {
        convertedEndDateHour++;
        minDiff = 0;
    }
    if(identifier==="S"){
        const popupScheduleDate = `Scheduled: ${convertedEndDateHour - startDateHour}h ${minDiff!==0 ? minDiff +"m " : "" }(${date})`;
        const gridScheduleDate = `${convertedEndDateHour - startDateHour + ":" +  minDiff }`;
        const graphScheduleDate = `${convertedEndDateHour - startDateHour}${minDiff!==0 ? "." + (minDiff/60).toFixed(1).split(".")[1] : "" }`;
        return {popupScheduleDate,gridScheduleDate,graphScheduleDate};
    } else{
        const popupAvailableDate = `Available: ${convertedEndDateHour - startDateHour}h ${minDiff!==0 ? minDiff +"m " : "" }(${date})`;
        const gridAvailableDate = `${convertedEndDateHour - startDateHour + ":" +  minDiff }`;
        const graphAvailableDate = `${convertedEndDateHour - startDateHour}${minDiff!==0 ? "." + (minDiff/60).toFixed(1).split(".")[1] : "" }`;
        return {popupAvailableDate,gridAvailableDate,graphAvailableDate};
    }

}

export const convertData = (dayData, tabVal) => {
    let attendanceTbl = [];
    dayData.map(data => {
        const taskDetails = [];
        let maxBarLength = 0;
        let maxBarLengthIndex = 0;
        data.taskDetails.map((task, index) =>{
            let diff = Number(task.end) - Number(task.start);
            if(diff > maxBarLength){
                maxBarLengthIndex = index;
                maxBarLength = diff;
            }
        });
        data.taskDetails.map((task, index) => {
            let taskObj = {};
            if(tabVal === "requests"){
                taskObj = {
                    start: Number(task.start),
                    end: Number(task.end),
                    color: TASK_STATUS_COLOR[task.status],
                    id: 'task',
                    text : task.totalTime
                }
            }
            else{
                taskObj = {
                    start: Number(task.start),
                    end: Number(task.end),
                    color: TASK_STATUS_COLOR[task.status],
                    id: 'task',
                    text : maxBarLengthIndex === index?("Scheduled "+data.timeDetails.scheduledTime):null
                }
            }
            taskDetails.push(taskObj);
        });
        const scheduledTime = data.timeDetails.scheduledTime;
        const availableTime = data.timeDetails.availableTime;
        attendanceTbl.push({
            timeDetails: {...data.timeDetails, date: data.timeDetails.date, ...convertToGridDate(scheduledTime, "S"), ...convertToGridDate(availableTime, "A")},
            taskDetails: taskDetails
        });
    });
    return attendanceTbl;
}

export const convertHoursData = (hoursDataList) =>{

    const data = [];
    const categories = [];
    const zones = [];

    hoursDataList.map((hoursData, index)=>{
        data.push(Number(hoursData.hours));
        categories.push(hoursData.date);
        zones.push({...ZONES[hoursData.status], value:index+1});
    });
    return {data, categories, zones};
}

export const convertMenus = (menuList)=>{
    const menus = [];
    menuList.map((menu)=>{
        menus.push({
            menuId: menu.menuId,
            name: menu.name,
            route: "/"+menu.menuId,
            ...MENUS[menu.menuId]
        });
    });
    return menus;
}

