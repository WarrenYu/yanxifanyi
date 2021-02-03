import React from "react";
import './footer.css';
import {Image} from 'antd';

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className='text'>
                    <Image src = './image/QRcode.png'  width={162} preview={false}/>
                    <div style={{"padding":"0 70px"}}>
                        <p>咨询热线：</p>
                        <p>020-31604924</p>
                        <p>15322380944</p>

                        <p>工作时间：</p>
                        <p>周一到周日9:00到18:00</p>
                    </div>
                </div>

                <p>©Copy Right @2019 广州言蹊翻译有限公司 All Rights Reserved</p>
            </div>
        )
    }
}

export default Footer;
