import React from "react";
import {Image} from 'antd';
import {CheckOutlined} from '@ant-design/icons';
class ServiceItem extends React.Component {
    render() {
        return (
            <div>
                <Image src = './image/serviceItem/top.png'  width='100%' preview={false}/>
                <div>
                    <div className='serviceItem'>
                        <div className='serviceItemSingleItem'>
                            <Image src = './image/serviceItem/1.png'  width={300} preview={false}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"20px"}}>出国考察</p>
                            <p style={{"padding":"0 10px 10px 12px","textAlign":"left"}}>为国际所有企业事业单位在全世界各地区合法经营项目现场提供语言（笔译及口译等翻译服务）</p>
                        </div>
                        <div className='serviceItemSingleItem'>
                            <Image src = './image/serviceItem/2.png'  width={300} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"20px"}}>同声传译</p>
                            <p style={{"padding":"0 10px 10px 12px","textAlign":"left"}}>会议、活动等现场同声传译，支持三百多个语种，五十多个行业。5000名以上资深译员，分部国内各省市和其他国家，每位同声传译和交传译员都拥有AIIC认证证书！</p>
                        </div>
                        <div className='serviceItemSingleItem'>
                            <Image src = './image/serviceItem/3.png'  width={300} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"20px"}}>礼仪/主持</p>
                            <p style={{"padding":"0 10px 10px 12px","textAlign":"left"}}>会议，主持礼仪安排，有专人带队，省心省力。专业主持，礼仪接受过培训，服务态度好形象佳。</p>
                        </div>
                    </div>
                    <div className='serviceItem'>
                        <div className='serviceItemSingleItem'>
                            <Image src = './image/serviceItem/4.png'  width={300} preview={false}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"20px"}}>文件笔译</p>
                            <p style={{"padding":"0 10px 10px 12px","textAlign":"left"}}>招投标方案翻译、合同、研究性报告、文学书籍、企业简介、说明书、技术文件、财务报表、网站本地化等翻译服务</p>
                        </div>
                        <div className='serviceItemSingleItem'>
                            <Image src = './image/serviceItem/5.png'  width={300} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"20px"}}>证件翻译盖章</p>
                            <p style={{"padding":"0 10px 10px 12px","textAlign":"left"}}>适用出入境办理、资质证明、身份证明、公证、法庭使用等场所，经工商总局和公正处所认定资格</p>
                        </div>
                        <div className='serviceItemSingleItem'>
                            <Image src = './image/serviceItem/6.png'  width={300} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"20px"}}>口译陪同</p>
                            <p style={{"padding":"0 10px 10px 12px","textAlign":"left"}}>负责外事接待、与外商联络安排和沟通、工程安装现场口译，外事联络口译，旅游陪同口译，电话口译，交替口译展览会现场口译、工程安装现场翻译等口译工作陪同翻译</p>
                        </div>
                    </div>
                    <div className='serviceItem'>
                        <div className='serviceItemSingleItem'>
                            <Image src = './image/serviceItem/7.png'  width={300} preview={false}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"20px"}}>会议速记录入</p>
                            <p style={{"padding":"0 10px 10px 12px","textAlign":"left"}}>专业中文速记，速录师，各类型大小会议，论坛，峰会等现场速记当天交稿。</p>
                        </div>
                        <div className='serviceItemSingleItem'>
                            <Image src = './image/serviceItem/8.png'  width={300} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"20px"}}>多语种导游服务</p>
                            <p style={{"padding":"0 10px 10px 12px","textAlign":"left"}}>国内外当地翻译导游，地接，可以出差，均有国际导游证。</p>
                        </div>
                        <div className='serviceItemSingleItem'>
                            <Image src = './image/serviceItem/9.png'  width={300} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"20px"}}>交替翻译</p>
                            <p style={{"padding":"0 10px 10px 12px","textAlign":"left"}}>大型会议，圆桌式会议，三方沟通以上属于交替传译，比较正式的见面或者接待活动需要安排交替传译。</p>
                        </div>
                    </div>
                    <p style={{'padding':'1% 11%','textAlign':'left'}}>
                        在全球化、信息化时代，翻译正朝向现代语言服务广阔的领域不断延伸，随着信息技术、大数据和云计算技术的发展，翻译呈现出全球化、信息化、技术化、本地化、职业化以及项目化等时代特征，由此导致翻译的诸多层面都发生了巨大变化。现代意义的翻译，是融合了翻译技术的翻译，是在翻译技术支撑下的翻译，翻译技术已经成为翻译领域不容忽视甚至难以分割的重要组成部分。翻译技术是语言服务的原动力和核心竞争力，在翻译技术的应用和实践方面，言蹊翻译公司一直走在行业前列。
                    </p>
                </div>

                {/*关于我们*/}
                <span className='translate'>翻译技术的组成</span>
                <div className='translateItem'>
                    <div className='translateItemElement'>
                        <div><CheckOutlined />翻译记忆工具 (TM) 和计算机辅助翻译 (CAT)</div>
                        <div><CheckOutlined />写作系统 (Authoring System)</div>
                        <div><CheckOutlined />文字处理软件 (Word processing software)</div>
                        <div><CheckOutlined />项目管理软件 (Project Management Software)</div>
                        <div><CheckOutlined />质量保证工具 (QA)</div>
                        <div><CheckOutlined />翻译管理系统 (TMS)</div>
                    </div>
                    <div className='translateItemElement'>
                        <div><CheckOutlined />自然语言处理技术 (NLP)</div>
                        <div><CheckOutlined />语音文字识别软件 (Speech-to-text recognition software)</div>
                        <div><CheckOutlined />术语管理系统 (Terminology Management)</div>
                        <div><CheckOutlined />编辑校对工具 (Editing and proofreading tools)</div>
                        <div><CheckOutlined />本地化工具 (Localization tools)</div>
                        <div><CheckOutlined />内容管理系统 (CMS)</div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ServiceItem;