import React from "react";
import {Image} from 'antd';

class Logo extends React.Component {
    render() {
        return (
            <Image src = './image/logo.png'  width={180} preview={false}/>
        )
    }
}

export default Logo;
