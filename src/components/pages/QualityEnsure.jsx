import React from "react";
import {Image} from 'antd';

class QualityEnsure extends React.Component {
    render () {
        return (
            <div>
                 <Image src = './image/quality/ensure/top.png'  width='100%' preview={false} style={{"margin":"0 0 15px 0"}}/>
                 <div >
                    <Image src = './image/quality/ensure/1.png'  width='3%' preview={false} style={{"padding":"0 9px 15px 0"}}/>
                    <span style={{"fontSize":'30px'}}>专业的翻译资源团队</span>

                    <div className='aboutUsFirstP'>
                        <Image src = './image/quality/ensure/1_1.png'  width='auto' preview={false}/>
                        <div style={{'textAlign':'left','padding':'2% 3%', 'width':'30%'}}>
                            <p>基本译员团队均具有全国翻译专业资格（水平）考试二级以上证书，具备5年以上相关专业背景的翻译工作经验，笔译工作量超过500万字，口译工作量超过50场大中型会议。翻译审校团队由从业10年以上的资深译员和外籍母语专家组成。</p>
                        </div>
                    </div>
                 </div>
                 <div >
                    <Image src = './image/quality/ensure/2.png'  width='3%' preview={false} style={{"padding":"0 9px 15px 0"}}/>
                    <span style={{"fontSize":'30px'}}>根据专业领域选择译员</span>

                    <div className='aboutUsFirstP'>
                    <div style={{'textAlign':'left','padding':'2% 3%', 'width':'30%'}}>
                            <p>根据客户所处的行业及其项目的专业领域，指定具有相同背景或专业知识的翻译人员进行该项目的翻译工作。</p>
                        </div>
                        <Image src = './image/quality/ensure/2_2.png'  width='auto' preview={false}/>
                    </div>
                 </div>
                 <div >
                    <Image src = './image/quality/ensure/3.png'  width='3%' preview={false} style={{"padding":"0 9px 15px 0"}}/>
                    <span style={{"fontSize":'30px'}}>专属客户经理和项目经理全程一对一服务</span>
                    <div >
                        <div style={{'textAlign':'left','padding':'0% 4% 1% 25%', 'width':'82%'}}>
                            <p>每个项目均由指定的客户经理和项目经理全权负责。客户经理负责客户与项目团队间的联系，为最终的服务质量负责；项目经理负责项目的协调和分配，负责组织实施翻译流程中的各个环节，跟进项目进度并反馈相关问题，最大限度的保证翻译质量和交稿时间。</p>
                        </div>
                        <Image src = './image/quality/ensure/3_3.png'  width='58%' preview={false}/>
                    </div>
                 </div>

                 <div style= {{"padding":"1%"}}>
                    <Image src = './image/quality/ensure/4.png'  width='3%' preview={false} style={{"padding":"0 9px 15px 0"}}/>
                    <span style={{"fontSize":'30px'}}>实施科学严谨的翻译质量流程控制</span>
                    <div >
                        <div style={{'textAlign':'left','padding':'0% 4% 1% 25%', 'width':'82%'}}>
                            <p>言蹊翻译公司通过 GB/T 19001-2008/ISO 9001:2008 质量管理体系认证，在译前、译中和译后全过程加强质量管理和监控。</p>
                        </div>
                        <div className='qualityEnsure'>
                            <div className='qualityEnsureSingleItem'>
                                <Image src = './image/quality/ensure/4_1.png' preview={false} />
                                <span style={{fontSize:'20px'}}>译前处理</span>
                                <p style={{"padding":"12px 0","textAlign":"left"}}>详细研究原文和相关背景资料，进行文件转换、术语提取和语料管理。</p>
                            </div>
                            <div className='qualityEnsureSingleItem'>
                                <Image src = './image/quality/ensure/4_2.png' preview={false} />
                                <span style={{fontSize:'20px'}}>译中控制</span>
                                <p style={{"padding":"12px 0","textAlign":"left"}}>进行进度控制、同步审校和反馈、范围变更管理等控制措施。</p>
                            </div>
                            <div className='qualityEnsureSingleItem'>
                                <Image src = './image/quality/ensure/4_3.png' preview={false} />
                                <span style={{fontSize:'20px'}}>译后反馈</span>
                                <p style={{"padding":"12px 0","textAlign":"left"}}>全面的质量检查，基于客户反馈进行必要的译文修订和完善。</p>
                            </div>
                        </div>
                        <Image src = './image/quality/ensure/4_4.png'  width='58%' preview={false}/>
                    </div>
                 </div>

                 <div >
                    <Image src = './image/quality/ensure/5.png'  width='3%' preview={false} style={{"padding":"0 9px 15px 0"}}/>
                    <span style={{"fontSize":'30px'}}>推行和强化全员服务质量意识</span>
                    <div >
                        <div style={{'textAlign':'left','padding':'0% 4% 1% 25%', 'width':'82%'}}>
                            <p>在员工中加强全面质量管理的教育培训，树立质量第一的思想，全面强化服务质量意识。同时建立严格的质量责任制，明确每一流程中相关人员的职责，并切实要求相关人员严格遵循。实行严格的奖惩措施，确保质量策略的真正落实和实施。</p>
                        </div>
                        <Image src = './image/quality/ensure/5_1.png'  width='58%' preview={false}/>
                    </div>
                 </div>

            </div>
        )
    }
}

export default QualityEnsure;