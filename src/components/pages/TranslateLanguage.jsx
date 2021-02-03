import React from "react";
import {Image, Card, Tag} from 'antd';

class TranslateLanguage extends React.Component {
    render () {
        return (
            <div>
                 <Image src = './image/translateLanguage/top.png'  width='100%' preview={false}/>
                 <div>
                    <span className='translateLanguage'>世界上使用最广泛的10种语言</span>
                    <p style = {{'padding':'2%'}}>这10种语言中，英语、法语、西班牙语、俄语、葡萄牙语、德语6种语言诞生于欧洲，汉语、阿拉伯语、印地语、日语4种语言诞生于亚洲，
其中英语的影响力继续增大，俄语、德语、日语的影响力已开始下降。</p>
                </div>
                <Image src = './image/translateLanguage/middle.png'  width='85%' preview={false}/>
                <Card style = {{width:600,position:'relative',left:'30%','margin-bottom':'2%','margin-top':'2%'}}>
                    <div>
                    <Tag color="magenta">英语翻译</Tag>
                    <Tag color="red">日语翻译</Tag>
                    <Tag color="volcano">韩语翻译</Tag>
                    <Tag color="orange">德语翻译</Tag>
                    <Tag color="gold">法语翻译</Tag>
                    <Tag color="lime">俄语翻译</Tag>
                    <Tag color="green">泰语翻译</Tag>
                    <Tag color="cyan">藏语翻译</Tag>
                    <Tag color="blue">荷兰语翻译</Tag>
                    <Tag color="geekblue">希腊语翻译</Tag>
                    <Tag color="purple">越南语翻译</Tag>

                    <Tag color="magenta">波兰语翻译</Tag>
                    <Tag color="red">印地语翻译</Tag>
                    <Tag color="volcano">马来语翻译</Tag>
                    <Tag color="orange">缅甸语翻译</Tag>
                    <Tag color="gold">丹麦语翻译</Tag>
                    <Tag color="lime">捷克语翻译</Tag>
                    <Tag color="green">瑞典语翻译</Tag>
                    <Tag color="cyan">挪威语翻译</Tag>
                    <Tag color="blue">波斯语翻译</Tag>
                    <Tag color="geekblue">印尼语翻译</Tag>
                    <Tag color="purple">拉丁语翻译</Tag>

                    <Tag color="magenta">蒙古语翻译</Tag>
                    <Tag color="red">西班牙语翻译</Tag>
                    <Tag color="volcano">意大利语翻译</Tag>
                    <Tag color="orange">阿拉伯语翻译</Tag>
                    <Tag color="gold">葡萄牙语翻译</Tag>
                    <Tag color="lime">菲律宾语翻译</Tag>
                    <Tag color="green">土耳其语翻译</Tag>
                    <Tag color="cyan">乌克兰语翻译</Tag>
                    <Tag color="blue">希伯来语翻译</Tag>
                    <Tag color="geekblue">匈牙利语翻译</Tag>
                    <Tag color="purple">维吾尔语翻译</Tag>

                    <Tag color="magenta">乌兹别克语翻译</Tag>
                    <Tag color="red">罗马尼亚语翻译</Tag>
                    <Tag color="volcano">斯洛伐克语翻译</Tag>
                    <Tag color="orange">克罗地亚语翻译</Tag>
                    <Tag color="gold">斯洛文尼亚语翻译</Tag>
                    </div>
                </Card>
            </div>
        )
    }
}

export default TranslateLanguage;