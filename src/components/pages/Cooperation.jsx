import React from "react";
import {Image} from 'antd';

class Cooperation extends React.Component {
    render() {
        return (
            <div>
                <Image src = './image/cooperation/top.png'  width='100%' preview={false}/>
                {/*关于我们*/}
                <div>
                    <span className='aboutUs'>同声传译</span>
                    <h6 style={{color:'grey',padding:'5px'}}>SIMULTANEOUS</h6>
                </div>
                <div className='aboutUsFirstP'>
                    <Image src = './image/cooperation/p1.png'  width='auto' preview={false}/>
                    <div style={{'textAlign':'left','padding':'0 45px', 'width':'50%'}}>
                        <p>同声传译（Simultaneous interpretation），简称"同传"，又称"同声翻译"、 "同步口译"，是指译员在不打断讲话者讲话的情况下，不间断地将内容口译给听众的一种翻译方式， 同声传译员通过专用的设备提供即时的翻译，这种方式适用于大型的研讨会和国际会议， 通常由两名到三名译员轮换进行。</p>
                        <br/>
                        <p>同声传译作为一种翻译方式，其最大特点在于效率高，原文与译文翻译的平均间隔时间是三至四秒，最多达到十多秒，因此可以保证讲话者作连贯发言，而不会影响或中断讲话者的思路，有利于听众对发言全文的通篇理解，因此，"同传"成为当今世界普遍流行的翻译方式，世界上95%的国际会议采用的都是同声传译。同时，同声传译具有很强的学术性和专业性，通常用于正式的国际会议，因此对译员素质要求比较高。</p>
                        <br/>
                        <p>言蹊翻译公司的经营和积累，翻译团队越来越庞大，汇聚口译、笔译、同声传译等人才。我们公司的翻译人员大多数具有数十年以上的工作经验及知识积累，不管是哪个方面的哪个领域的翻译都做到非常优秀的翻译水平，得到所有客户的认可。</p>
                    </div>
                </div>

                {/*pictures*/}
                <div>
                    <div className='cooperationPicsItem'>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/1.jpg'  width={200} preview={false}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>阿里与星巴克合作会议主持翻译现场</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/2.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>阿斯利康南方肺癌高峰论坛同传翻译</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/3.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>博世同传设备东莞同传项目</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/4.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>第十三届国际油脂油料大会阿拉伯语同传</p>
                        </div>
                    </div>

                    <div className='cooperationPicsItem'>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/5.jpg'  width={200} preview={false}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>东盟妇女创业论坛中中文英文泰语越南语柬埔寨语老挝语缅甸语7语同传</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/6.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>非洲当地义工翻译实习</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/7.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>广西自由贸易试验区全球合作投资洽谈会</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/8.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>广州翻译陪同逛展翻译</p>
                        </div>
                    </div>

                    <div className='cooperationPicsItem'>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/9.jpg'  width={200} preview={false}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>广州设计之都国际招商会中英德三语同传</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/10.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>韩语翻译陪同与客人合照</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/11.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>会议翻译陪同英语交传</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/12.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>会议交流韩语翻译</p>
                        </div>
                    </div>

                    <div className='cooperationPicsItem'>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/13.jpg'  width={200} preview={false}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>教育厅培训班同传项目</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/14.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>美国当地陪同看病翻译</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/15.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>美康国际一千套同传设备中英同传</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/16.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>莫斯科展会俄语翻译项目结束合照</p>
                        </div>
                    </div>

                    <div className='cooperationPicsItem'>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/17.jpg'  width={200} preview={false}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>某企业展会现场摊位接待翻译</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/18.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>日本东京展会日语翻译接待</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/19.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>日本广东经济促进会中日同传会议</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/20.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>上海-人工智能治理论坛中英同传</p>
                        </div>
                    </div>


                    <div className='cooperationPicsItem'>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/21.jpg'  width={200} preview={false}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>上海展会翻译接待现场</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/22.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>深圳大棚区美康国际论坛开幕式英语同传</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/23.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>同声传译现场派发接收器</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/24.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>学士交流翻译接待陪同与客人合照</p>
                        </div>
                    </div>


                    <div className='cooperationPicsItem'>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/25.jpg'  width={200} preview={false}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>宴会晚会翻译接待</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/26.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>展会现场翻译与客人合照</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/27.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>政府外交翻译陪同交传</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/28.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>致美-美容整形行业中韩同传</p>
                        </div>
                    </div>


                    <div className='cooperationPicsItem'>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/29.jpg'  width={200} preview={false}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>中国-东盟商界领袖论坛英语同传</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/30.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>中国海事司法与仲裁高峰论坛英语同传</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/31.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>中韩同传-广州站</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/32.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>中华医学学术年会英语同传</p>
                        </div>
                    </div>


                    <div className='cooperationPicsItem'>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/33.jpg'  width={200} preview={false}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>中印尼经贸合作峰会</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/34.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>中英同传设备租赁-广西站</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/22.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>深圳大棚区美康国际论坛开幕式英语同传</p>
                        </div>
                        <div className='cooperationPicsSingleItem'>
                            <Image src = './image/cooperation/23.jpg'  width={200} preview={true}/>
                            <p style={{"padding":"12px 0 0 5px","fontSize":"15px"}}>同声传译现场派发接收器</p>
                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default Cooperation;
