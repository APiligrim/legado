import React from 'react';
import {Form ,Input, Icon, Button} from 'antd';
import {MailOutlined} from '@ant-design/icons';
import './subscribe.css'
import 'antd/dist/antd.css';
const Subscribe =({email, handleOnChangeEmail})=> {
    return(

        <div> 
        <Form layout='inline' className="newsletter-form" action='javascript:void(0);' method='POST'>
            <Form.Item>
                <Input onChange={({target}) => handleOnChangeEmail(target.value)} 
                    prefix={<MailOutlined/>} placeholder="Email" value={email}/> 
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" type="primary">Send</Button>
            </Form.Item>
        </Form>
        
        
        
        </div>

    );
};

export default Subscribe;
