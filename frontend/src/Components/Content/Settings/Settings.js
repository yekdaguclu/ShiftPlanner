import React, { useState } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import WorkingHoursTab from './Settings Tabs/WorkingHoursTab'
import NightShiftTab from './Settings Tabs/NightShiftTab';
import PlanningTab from './Settings Tabs/PlanningTab';
import BreakTab from './Settings Tabs/BreakTab';

function Settings() {
    const [key, setKey] = useState('WorkingHours');

    return (
        <Tabs
            id="controlled-tab-example"
            defaultActiveKey={"WorkingHours"}
            activeKey={key}
            onSelect={(k) => setKey(k)}
            
        >
            <Tab eventKey="WorkingHours" title="Working Hours">
                <WorkingHoursTab />
            </Tab>
            <Tab eventKey="NightShift" title="Night Shift">
                <NightShiftTab />
            </Tab>
            <Tab eventKey="Break" title="Break Limits">
                <BreakTab />
            </Tab>
            <Tab eventKey="Planning" title="Planning">
                <PlanningTab />
            </Tab>
        </Tabs>
    );
}

export default Settings;