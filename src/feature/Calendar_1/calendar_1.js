import React, { useState } from 'react';
import { useRef } from 'react';
import './calendar_1.css';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
// import interactionPlugin from '@fullcalendar/interaction';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
export const Calendar_1 = () => {
    const calendarRef = useRef(null);
    const buttonClick = e => {
        e.preventDefault();
        e.stopPropagation();
        console.log(e);
    };
    const renderEventContent = eventInfo => {
        console.log(eventInfo);
        return (React.createElement("div", { className: "mmmmm", onMouseEnter: () => {
                console.log('eeeeeeeeee');
            } },
            React.createElement("b", null, eventInfo.timeText),
            React.createElement("i", null, eventInfo.event.title),
            React.createElement("button", { onClick: buttonClick, className: "xxxx xxxxccc" }, eventInfo.event.title)));
    };
    const renderNowIndicatorContent = (eventInfo, isAxis) => {
        console.log(eventInfo);
        console.log(isAxis);
        return React.createElement("div", { className: "indicator" }, "s");
    };
    return (React.createElement("div", { className: 'calendar-wrapper' },
        React.createElement(CalendarHeader, { calendarRef: calendarRef, employeeNames: ['olo', 'alo'], employeeNameHandler: e => {
                console.log(e);
            }, setisModalOpen: e => {
                console.log(e);
            } }),
        React.createElement(FullCalendar, { schedulerLicenseKey: "CC-Attribution-NonCommercial-NoDerivatives", timeZone: "UTC+2", ref: calendarRef, plugins: [interactionPlugin, resourceTimeGridPlugin], initialView: "resourceTimeGridDay", nowIndicator: true, nowIndicatorContent: renderNowIndicatorContent, nowIndicatorDidMount: a => {
                console.log(a);
            }, viewClassNames: 'viewClassNames', editable: true, datesAboveResources: true, allDaySlot: false, defaultTimedEventDuration: "01:00", 
            // dayHeaders={false}
            // slotMinTime={'07:00:00'}
            // scrollTime={new Date().toTimeString()}
            scrollTime: new Date(Date.now() - 2 * (60 * 60 * 1000)).toTimeString(), dayHeaderDidMount: e => {
                console.log(e);
            }, eventClassNames: ['fffffff', 'fffffffc'], eventContent: renderEventContent, resources: [
                {
                    extendedProps: {
                        eventClick: e => {
                            console.log(e);
                        },
                    },
                    id: 'a',
                    title: 'Room A',
                    // businessHours: {
                    //   startTime: '12:00',
                    //   endTime: '18:00',
                    // },
                },
                { id: 'b', title: 'Room B' },
                { id: 'bd', title: 'Room cd' },
                // { id: 'bs', title: 'Room B' },
                // { id: 'bas', title: 'Room B' },
                // { id: 'bdd', title: 'Room B' },
                // { id: 'bfg', title: 'Room B' },
                // { id: 'bb', title: 'Room B' },
                // { id: 'bbb', title: 'Room B' },
            ], events: [
                {
                    // id: '1',
                    resourceIds: ['a', 'b'],
                    title: 'All Day Event',
                    start: '2024-04-19T10:30:00',
                    allDay: false,
                    eventClassNames: 'ddddd',
                },
                {
                    resourceId: 'b',
                    title: 'Long Event',
                    start: '2024-04-19',
                    // end: '2024-04-20',
                    color: 'purple', // override!
                },
            ], 
            // now={new Date()}
            // customButtons={{
            //   myCustomButton: {
            //     text: 'custom!',
            //     click: function () {
            //       alert('clicked the custom button!');
            //     },
            //   },
            // }}
            headerToolbar: false, 
            // headerToolbar={{
            //   start: 'today prev,next myCustomButton',
            //   center: 'title',
            //   end: 'timeGridDay,timeGridWeek',
            // }}
            height: "90vh", 
            // views={{
            //   dayGridFourWeek: {
            //     type: 'dayGrid',
            //     duration: { weeks: 4 },
            //   },
            // }}
            // datesSet={calllMy}
            dateClick: function (info) {
                //   alert('Clicked on: ' + info.dateStr);
                //   alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
                //   alert('Current view: ' + info.view.type);
                //   // change the day's background color just for fun
                // info.dayEl.style.backgroundColor = 'red';
                //   console.log();
            }, eventLeave: e => {
                console.log(e);
            }, 
            // dateClick: Identity<(arg: DateClickArg) => void>;
            // eventDragStart: Identity<(arg: EventDragStartArg) => void>;
            // eventDragStop: Identity<(arg: EventDragStopArg) => void>;
            // eventDrop: Identity<(arg: EventDropArg) => void>;
            // eventResizeStart: Identity<(arg: EventResizeStartArg) => void>;
            // eventResizeStop: Identity<(arg: EventResizeStopArg) => void>;
            // eventResize: Identity<(arg: EventResizeDoneArg) => void>;
            // drop: Identity<(arg: DropArg) => void>;
            // eventReceive: Identity<(arg: EventReceiveArg) => void>;
            // eventLeave: Identity<(arg: EventLeaveArg) => void>;
            select: e => {
                console.log(e);
            }, eventsSet: e => {
                console.log(e);
            }, eventAdd: e => {
                console.log(e);
            }, eventChange: e => {
                console.log(e);
            }, eventClick: e => {
                console.log(e);
            }, selectable: true, 
            // // selectConstraint="businessHours"
            slotDuration: {
                minute: 10,
            }, slotEventOverlap: false, slotLabelInterval: {
                hour: 0.5,
            } })));
};
// dateClick: function(info) {
//   alert('Clicked on: ' + info.dateStr);
//   alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
//   alert('Current view: ' + info.view.type);
//   // change the day's background color just for fun
//   info.dayEl.style.backgroundColor = 'red';
// }
const CalendarHeader = ({ calendarRef, employeeNames, employeeNameHandler, setisModalOpen }) => {
    const [title, settitle] = useState(new Date().toString());
    const nextHandle = () => {
        calendarRef.current.getApi().next();
        settitle(calendarRef.current.getApi().currentDataManager.data.viewTitle);
    };
    const prevHandle = () => {
        calendarRef.current.getApi().prev();
        settitle(calendarRef.current.getApi().currentDataManager.data.viewTitle);
    };
    const todayHandle = () => {
        calendarRef.current.getApi().today();
        settitle(calendarRef.current.getApi().currentDataManager.data.viewTitle);
    };
    const dayHandle = () => {
        calendarRef.current.getApi().changeView('resourceTimeGridDay');
        // calendarRef.current.getApi().changeView('timeGridDay');
        settitle(calendarRef.current.getApi().currentDataManager.data.viewTitle);
    };
    const weekHandle = () => {
        calendarRef.current.getApi().changeView('resourceTimeGridWeek');
        // calendarRef.current.getApi().changeView('timeGridWeek');
        settitle(calendarRef.current.getApi().currentDataManager.data.viewTitle);
    };
    // const monthHandle = () => {
    //   calendarRef.current.getApi().changeView('timeGridMonth');
    //   settitle(calendarRef.current.getApi().currentDataManager.data.viewTitle);
    // };
    return (React.createElement("div", { className: "", style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' } },
        React.createElement("div", null,
            React.createElement("button", { className: "", onClick: () => prevHandle() }, "Prev"),
            React.createElement("button", { className: "", onClick: () => todayHandle() }, "Today"),
            React.createElement("button", { className: "", onClick: () => nextHandle() }, "Next")),
        React.createElement("div", { className: "" },
            React.createElement("select", { onChange: employeeNameHandler },
                React.createElement("option", { value: "all" }, "All"),
                employeeNames.map((name, idx) => (React.createElement("option", { value: name, key: idx }, name))))),
        React.createElement("div", null,
            React.createElement("h3", { id: "title" }, title)),
        React.createElement("div", { className: "fc-toolbar-chunk" },
            React.createElement("div", null,
                React.createElement("button", { className: "", onClick: () => setisModalOpen(true) }, "Add Appointment"))),
        React.createElement("div", null,
            React.createElement("button", { className: "", onClick: () => dayHandle() }, "Day"),
            React.createElement("button", { className: "", onClick: () => weekHandle() }, "Week"))));
};
