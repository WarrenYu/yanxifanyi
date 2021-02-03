import React from "react";
import {Image} from 'antd';
import {AudioTwoTone, CustomerServiceTwoTone, EditTwoTone, MessageTwoTone, ThunderboltTwoTone} from "@ant-design/icons";

class About extends React.Component {
    render() {
        return (
            <div>
                <Image src = './image/about/top.png'  width='100%' preview={false}/>
                {/*关于我们*/}
                <div>
                    <span className='aboutUs'>关于我们</span>
                    <h6 style={{color:'grey',padding:'5px'}}>ABOUT US</h6>
                </div>
                <div className='aboutUsFirstP'>
                    <Image src = './image/about/firstP.png'  width='auto' preview={false}/>
                    <div style={{'textAlign':'left','padding':'0 45px', 'width':'50%'}}>
                        <p>广州言蹊翻译有限公司是一家正规的纯人工涉外翻译机构，我们凭借多学科、多语种、强大的资深翻译团队，严格按照ISO9001质量体系标准和GB/T19682-2005国家标准要求，始终秉承“更高质量、更高效率、更贴心服务” 的经营理念，为客户提供更好的行业翻译解决方案。截止2019年已为1100余家大型企事业单位、各国驻华使领馆、国际组织及国外机构、世界500强跨国公司、国家部委提供超过近8000万字的专业笔译服务及200余场优质口译服务，并得到高度认可。</p>
                        <br/>
                        <p>公司在全球各地拥有专业语言翻译服务人才3562人、产值达亿元的规模型、专业型综合语言信息服务企业。为1100余家大型企事业单位、省市政府机构、外国使领馆、世界500强企业、设计院、投资银行及出版社等提供了超过数百亿字的专业笔译服务和数千场同声传译及现场口译服务。</p>
                        <br/>
                        <p>言蹊翻译公司在翻译服务过程中实行严格的二十六流程工作制、六阶段质量控制体系与四级审核管理系统，突出「三严」（流程控制严、技术标准严和质量控制严）特点，凭借雄厚的专业实力为您的所有国际项目提供有成本效益的解决方案，从而让您透过传达准确和清晰的讯息，在当今竞争激烈的全球市场中尽占商机。</p>
                        <br/>
                        <p>我们一直孜孜以求，不断改进和提升翻译质量和服务质量，以“缔造一流品质，助推企业全球化，实现价值增值”作为我们的神圣使命和追求，努力建设和打造一支强有力的客户管理团队、项目管理团队、翻译和审校团队、技术支持团队和语言资产管理团队，致力于为全球客户提供专业的语言解决方案。</p>
                    </div>
                </div>

                {/*Bring you a first-class security experience*/}
                <div>
                    <span className='aboutUs'>Bring you a first-class security experience</span>
                    <h6 style={{color:'grey',padding:'5px'}}>领先业界的技术优势带给您一流的可靠体验</h6>
                </div>
                <div className='securityExperience'>
                    <div className = 'securityExperienceSingleItem'>
                        <EditTwoTone style={{fontSize:'50px'}} twoToneColor='#006699' className='whatCanWeDoSingleItemElement'/>
                        <span style={{'textAlign': 'left','fontSize': '30px','padding':'10px'}}>译员选拨优势</span>
                        <p className='whatCanWeDoSingleItemElement'>言蹊翻译的招聘标准极为严格，专业领域的分类也相当精细，除此之外，我们还建立了一套后续审稿与评分机制。目前在国内外拥有大批擅长各种语言、具备不同专长的优秀译员。</p>
                    </div>
                    <div className = 'securityExperienceSingleItem'>
                        <MessageTwoTone style={{fontSize:'50px'}} twoToneColor='#006699' className='whatCanWeDoSingleItemElement'/>
                        <span style={{'textAlign': 'left','fontSize': '30px','padding':'10px'}}>口译/同传优势</span>
                        <p className='whatCanWeDoSingleItemElement'>客户向业务人员提出口译或同传的各项需求后，业务人员会立即从数据库中筛选出几位各项条件符合客户要求的专业口译人员，并将简历交给客户，由客户决定终的口译人员。言蹊翻译的口译人员除具备良好的专业素养之外，还必须了解各种国际礼仪，行为举止得当，谈吐文雅，不仅能有助于您拓展业务，还能够提升您的公司形象。</p>
                    </div>
                    <div className = 'securityExperienceSingleItem'>
                        <CustomerServiceTwoTone style={{fontSize:'50px'}} twoToneColor='#006699' className='whatCanWeDoSingleItemElement'/>
                        <span style={{'textAlign': 'left','fontSize': '30px','padding':'10px'}}>稿件分配优势</span>
                        <p className='whatCanWeDoSingleItemElement'>严慎重选择译员是保证质量的一项重要工作。言蹊的项目经理根据译员的专业领域和经验表现，为您安排适合的翻译师。只让他们做自己擅长的事情，绝不跨领域分派稿件。</p>
                    </div>
                    <div className = 'securityExperienceSingleItem'>
                        <ThunderboltTwoTone style={{fontSize:'50px'}} twoToneColor='#006699' className='whatCanWeDoSingleItemElement'/>
                        <span style={{'textAlign': 'left','fontSize': '30px','padding':'10px'}}>专职团队优势</span>
                        <p className='whatCanWeDoSingleItemElement'>拥有大规模的专职翻译团队、阵容强大的审稿团队和技术卓越的美编团队，人员固定，稿件日处理量大，稳定高效，能应对紧急的大项目。</p>
                    </div>
                    <div className = 'securityExperienceSingleItem'>
                        <AudioTwoTone style={{fontSize:'50px'}} twoToneColor='#006699' className='whatCanWeDoSingleItemElement'/>
                        <span style={{'textAlign': 'left','fontSize': '30px','padding':'10px'}}>售后服务优势</span>
                        <p className='whatCanWeDoSingleItemElement'>终身质保，无后顾之忧。客户无论何时对译文有异议或原文有小改动，都可随时得到专业解释和帮助。我们还通过自主研发的客户关系管理系统追踪和收集每一位客户的后续意见及反馈。此外，我们定期对每一个已完成项目进行分析和检讨，不断提高质量，突破完美，超越专业。</p>
                    </div>
                </div>
            <Image src = './image/about/strongTeam.png'  width='80%' preview={false}/>
            </div>
        )
    }
}

export default About;
