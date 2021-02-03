import React from "react";
import {Image, Card} from "antd";
class ConnectUs extends React.Component {
    render() {
        return (
            <div>
                <Image src = "./image/connectUs/top.png"  width='100%' preview={false}/>
                <span style = {{'padding':'3%','fontSize':'17px'}}>感谢您对言蹊翻译公司的关注！如果您有任何翻译和本地化方面的需求，请通过在线质询报价，也可以通过下列方式与我们的客户经理直接联系翻译事宜。</span>
                <div>
                  <span className='connectUs'>需要可靠的翻译与本地化服务？</span>  
                   <h2 style={{'padding':'20px 5px 2px'}}>广州言蹊翻译有限公司</h2>
                   <div className='translateItem'>
                       <div className='translateItemElement'>
                           <div>电子邮件：1039265975@qq.com</div>
                           <div>微信：yz1039265975</div>
                           <div>网址：www.yanxifanyi.com</div>
                       </div>
                       <div className='translateItemElement'>
                           <div>QQ：1039265975</div>
                           <div>电话：020-31604924 / 15322380944</div>
                           <div>地址：广州市天河区祥圃街汇城商务大厦4楼</div>
                       </div>
                   </div>
                   <Card style={{width:'50%',position:'relative',left:'25%'}} title='招贤纳士'>
                       <div style={{textAlign:'left'}}>
                        <p style={{'font-weight':'bold'}}>岗位职责</p>
                        <p>无论你是初出茅庐，还是多年资深的翻译，这里都有你展现的机会，欢迎来撩人事小姐姐~</p>
                        <p>英语：笔译，专八证书，各行业翻译类型都可以，请带简历和样稿或者作品咨询~</p>
                        <p>英语：口译，口语译员英专或非英专都可以，擅长某一个行业的专业术语，英语六级以上，请带简历和个人照片英文介绍视频等咨询投递~</p>
                        <p>英语同传：我司同传会议比较多，同传专业或者资深同传译员欢迎投简历。</p>
                        <p>日语翻译：要求N1水平以上，其它语种的水平要求类似，笔译和口译是分开的请备注好语种所在城市，招聘不分地区，我们多个城市设点，莫斯科，东京，首尔，关岛，迪拜，都有当地翻译员。</p>
                        <p>韩语，西班牙语，葡萄牙语，德语，法语，阿拉伯语，泰语，印尼语，越南语，俄语，丹麦语，乌尔都语，藏语等  应聘要求以此类推，感兴趣的请咨询人事小姐姐！</p>
                        
                       </div>
                       
                   </Card>
                </div>
            </div>
        )
    }
}

export default ConnectUs;