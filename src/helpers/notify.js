import React from 'react';
import {Button, notification} from 'antd';

const notify = (type, msg, desc)=>{
    //every time send button is clicked no notifaction pops up 
    notification.destroy();
    notification[type]({
        message: msg,
        description: desc
    });
}

export default notify;