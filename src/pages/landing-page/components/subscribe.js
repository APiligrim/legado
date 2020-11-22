import React from 'react';
import PropTypes from 'prop-types';
import {Form ,Input, Icon, Button} from 'antd';
import {MailOutlined} from '@ant-design/icons';
import './subscribe.css'
import 'antd/dist/antd.css';
import validator from 'validator';


const Subscribe =({email, handleOnChangeEmail, handleSendEmail})=> {
    return(

        <div> 
        <Form layout='inline' className="newsletter-form" action='javascript:void(0);' method='POST'>
            <Form.Item>
                <Input onChange={({target}) => handleOnChangeEmail(target.value)} 
                    prefix={<MailOutlined/>} placeholder="Email" value={email}/> 
            </Form.Item>
            <Form.Item>
                <Button onClick={() => handleSendEmail(email)} 
                htmlType="submit" type="primary" disabled={!validator.isEmail(email)}>Send</Button>
            </Form.Item>
        </Form>
        
        </div>

    );
}


//check the exact data type of the files
Subscribe.propTypes= {
    email: PropTypes.string, 
    handleOnChangeEmail: PropTypes.func, 
    handleSendEmail: PropTypes.func
}

export default Subscribe;
