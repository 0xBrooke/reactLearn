import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';
class MyRedux extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Input type="text" placeholder='dd'/>
            </div>
           
        )
    }
}


export default MyRedux