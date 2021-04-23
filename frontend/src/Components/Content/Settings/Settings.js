import React, {useState } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Tab1 from './Settings Tabs/Tab1'

function Settings() {
    const [key, setKey] = useState('home');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >
            <Tab eventKey="home" title="Home">
                <Tab1 />
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <Tab1 />
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
                <Tab1 />
            </Tab>
        </Tabs>
    );
}


export default Settings;