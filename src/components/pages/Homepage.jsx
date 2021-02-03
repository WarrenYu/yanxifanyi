import React from "react";
import {Image} from 'antd';
import {EditTwoTone, MessageTwoTone, CustomerServiceTwoTone, ThunderboltTwoTone, AudioTwoTone, ControlOutlined,
    SafetyCertificateOutlined, TeamOutlined, TrophyOutlined, InteractionOutlined, TranslationOutlined} from '@ant-design/icons';

class Homepage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div>
                <Image src = './image/homepage/top.png'  width='101%' preview={false}/>

                {/*what can we do*/}
                <div>
                    <span className='whatCanWeDoTitle'>What can we do?</span>  
                    <h6 style={{color:'grey',padding:'5px'}}>500强合作企业，20年行业领先者！</h6>
                </div>
                <div className='whatCanWeDo'>
                    <div className = 'whatCanWeDoSingleItem'>
                        <EditTwoTone style={{fontSize:'50px'}} twoToneColor='#006699' className='whatCanWeDoSingleItemElement'/>
                        <span className={'whatCanWeDoTxt whatCanWeDoSingleItemElement'}>笔译</span>
                        <p className='whatCanWeDoSingleItemElement'>文件、合同、书籍、资料、说明书，证件等翻译，130多种语种50多个行业，国外翻译，母语校对。准确率行业领先。</p>
                    </div>
                    <div className = 'whatCanWeDoSingleItem'>
                        <MessageTwoTone style={{fontSize:'50px'}} twoToneColor='#006699' className='whatCanWeDoSingleItemElement'/>
                        <span className={'whatCanWeDoTxt whatCanWeDoSingleItemElement'}>口译</span>
                        <p className='whatCanWeDoSingleItemElement'>负责会议翻译、外事接待、与外商联络安排和沟通、展览会现场口译、工程安装现场翻译等口译工作</p>
                    </div>
                    <div className = 'whatCanWeDoSingleItem'>
                        <CustomerServiceTwoTone style={{fontSize:'50px'}} twoToneColor='#006699' className='whatCanWeDoSingleItemElement'/>
                        <span className={'whatCanWeDoTxt whatCanWeDoSingleItemElement'}>同声传译</span>
                        <p className='whatCanWeDoSingleItemElement'>4000名以上资深译员，分部国内各省市和其他国家，每位同声传译翻译老师都拥有AIIC认证证书！</p>
                    </div>
                    <div className = 'whatCanWeDoSingleItem'>
                        <ThunderboltTwoTone style={{fontSize:'50px'}} twoToneColor='#006699' className='whatCanWeDoSingleItemElement'/>
                        <span className={'whatCanWeDoTxt whatCanWeDoSingleItemElement'}>速记</span>
                        <p className='whatCanWeDoSingleItemElement'>专业中文速记，速录师，各类型大小会议，论坛，峰会等现场速记当天交稿。</p>
                    </div>
                    <div className = 'whatCanWeDoSingleItem'>
                        <AudioTwoTone style={{fontSize:'50px'}} twoToneColor='#006699' className='whatCanWeDoSingleItemElement'/>
                        <span className={'whatCanWeDoTxt whatCanWeDoSingleItemElement'}>主持/礼仪</span>
                        <p className='whatCanWeDoSingleItemElement'>会议，主持礼仪安排，有专人带队，省心省力。专业主持，礼仪接受过培训，服务态度好形象佳。</p>
                    </div>
                </div>

                {/*They choose us*/}
                <div>
                    <span className='theyChooseUsTitle'>THEY CHOOSE US</span>
                    <h6 style={{color:'grey',padding:'5px'}}>他们和你一样，选择了我们！</h6>
                </div>
                <div className='theyChooseUs'>
                    <div className='theyChooseUsSingleItem'>
                        <Image src = './image/homepage/1.jpg'  width={300} preview={true}/>
                        <p style={{"padding":"12px"}}>翻译伙伴在私企现场口译任务</p>
                    </div>
                    <div className='theyChooseUsSingleItem'>
                        <Image src = './image/homepage/2.jpg'  width={300} preview={true}/>
                        <p style={{"padding":"12px"}}>丹麦语翻译在丹麦陪同现场</p>
                    </div>
                    <div className='theyChooseUsSingleItem'>
                        <Image src = './image/homepage/3.jpg'  width={300} preview={true}/>
                        <p style={{"padding":"12px"}}>杭州站-论坛交流会英语翻译陪同</p>
                    </div>
                    <div className='theyChooseUsSingleItem'>
                        <Image src = './image/homepage/4.jpg'  width={300} preview={true}/>
                        <p style={{"padding":"12px"}}>虎牙三周年年会会议速记</p>
                    </div>
                </div>
                <div className='theyChooseUs'>
                    <div className='theyChooseUsSingleItem'>
                        <Image src = './image/homepage/5.jpg'  width={300} preview={true}/>
                        <p style={{"padding":"12px"}}>言蹊翻译海外翻译人才合照</p>
                    </div>
                    <div className='theyChooseUsSingleItem'>
                        <Image src = './image/homepage/6.jpg'  width={300} preview={true}/>
                        <p style={{"padding":"12px"}}>旅游投资大会英语同传</p>
                    </div>
                    <div className='theyChooseUsSingleItem'>
                        <Image src = './image/homepage/7.jpg'  width={300} preview={true}/>
                        <p style={{"padding":"12px"}}>中英同传</p>
                    </div>
                    <div className='theyChooseUsSingleItem'>
                        <Image src = './image/homepage/8.jpg'  width={300} preview={true}/>
                        <p style={{"padding":"12px"}}>长沙机械展览开幕式中英同传</p>
                    </div>
                </div>

                {/*PERFECT SERVICE*/}
                <div>
                    <span className='theyChooseUsTitle'>PERFECT SERVICE</span>
                    <h6 style={{color:'grey',padding:'5px'}}>完善的服务流程，只为提供最佳的服务体验</h6>
                </div>
                <div className='perfectService'>
                    <div className='perfectServiceSingleItem'>
                        <ControlOutlined style={{fontSize:'50px'}} />
                        <span style={{fontSize:'20px'}}>国际先进ERP翻译平台</span>
                        <p style={{"padding":"12px 0","textAlign":"left"}}>自主研制开发“ERP管理平台”实现了翻译工作工程化、国际网络化和智能化</p>
                    </div>
                    <div className='perfectServiceSingleItem'>
                        <TrophyOutlined style={{fontSize:'50px'}} />
                        <span style={{fontSize:'20px'}}>制同声服务领先企业</span>
                        <p style={{"padding":"12px 0","textAlign":"left"}}>具备同声传译服务与设备租赁的大型翻译公司，为上万场国际会议提供同声传译和同传设备租赁服</p>
                    </div>
                    <div className='perfectServiceSingleItem'>
                        <TeamOutlined style={{fontSize:'50px'}} />
                        <span style={{fontSize:'20px'}}>专业翻译团队</span>
                        <p style={{"padding":"12px 0","textAlign":"left"}}>2万翻译团队由国家级译审、享受国务院特别津贴的技术专家、留学硕士、外籍顾问构成。</p>
                    </div>
                </div>
                <div className='perfectService'>
                    <div className='perfectServiceSingleItem'>
                        <TranslationOutlined style={{fontSize:'50px'}} />
                        <span style={{fontSize:'20px'}}>本地化服务</span>
                        <p style={{"padding":"12px 0","textAlign":"left"}}>全国各大城市有办事处，译员本地指派，满足本地化业务需求</p>
                    </div>
                    <div className='perfectServiceSingleItem'>
                        <InteractionOutlined style={{fontSize:'50px'}} />
                        <span style={{fontSize:'20px'}}>严格管控流程</span>
                        <p style={{"padding":"12px 0","textAlign":"left"}}>严格的二十六流程工作制，六阶段质量控制体系，与四审审核制度</p>
                    </div>
                    <div className='perfectServiceSingleItem'>
                        <SafetyCertificateOutlined style={{fontSize:'50px'}} />
                        <span style={{fontSize:'20px'}}>实力保障</span>
                        <p style={{"padding":"12px 0","textAlign":"left"}}>丰富的的大型项目合作经验，国际500强合作企业，实力保证，售后无忧。</p>
                    </div>
                </div>

                {/*EVERY INDUSTRY IS INVOLVED*/}
                <div>
                    <span className='theyChooseUsTitle'>EVERY INDUSTRY IS INVOLVED</span>
                    <h6 style={{color:'grey',padding:'5px'}}>业务范围，想您所想</h6>
                </div>
                <div className='theyChooseUs'>
                    <div className='theyChooseUsSingleItem'>
                        <Image src = './image/homepage/9.png'  width={300} preview={false}/>
                        <p style={{"padding":"12px"}}>医学制药</p>
                    </div>
                    <div className='theyChooseUsSingleItem'>
                        <Image src = './image/homepage/10.png'  width={300} preview={false}/>
                        <p style={{"padding":"12px"}}>游戏娱乐</p>
                    </div>
                    <div className='theyChooseUsSingleItem'>
                        <Image src = './image/homepage/11.png'  width={300} preview={false}/>
                        <p style={{"padding":"12px"}}>影视字幕</p>
                    </div>
                    <div className='theyChooseUsSingleItem'>
                        <Image src = './image/homepage/12.png'  width={300} preview={false}/>
                        <p style={{"padding":"12px"}}>图书出版</p>
                    </div>
                </div>
                <div className='theyChooseUs'>
                    <div className='theyChooseUsSingleItem'>
                        <Image src = './image/homepage/13.png'  width={300} preview={false}/>
                        <p style={{"padding":"12px"}}>IT产品</p>
                    </div>
                    <div className='theyChooseUsSingleItem'>
                        <Image src = './image/homepage/14.png'  width={300} preview={false}/>
                        <p style={{"padding":"12px"}}>财务金融</p>
                    </div>
                    <div className='theyChooseUsSingleItem'>
                        <Image src = './image/homepage/15.png'  width={300} preview={false}/>
                        <p style={{"padding":"12px"}}>涉外法律</p>
                    </div>
                    <div className='theyChooseUsSingleItem'>
                        <Image src = './image/homepage/16.png'  width={300} preview={false}/>
                        <p style={{"padding":"12px"}}>石油化工</p>
                    </div>
                </div>

            </div>
            

            
        )
    }
}

export default Homepage;
