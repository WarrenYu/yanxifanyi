import React from "react";
import {Image, Table,} from 'antd';

class QualityEvaluate extends React.Component {
    render () {
        const errorDefinecolumns = [
            {
            title: '严重性级别',
            dataIndex: 'grade',
            key: 'grade',
          },
          {
            title: '代号',
            dataIndex: 'code',
            key: 'code',
          },
          {
            title: '定义',
            dataIndex: 'define',
            key: 'define',
            render: defineItems => (
                defineItems.map(
                    defineItem => {
                        return (<p key={defineItem}>{defineItem}</p>)
                    }
                )
            )
               
          },
          {
            title: '质量扣分',
            dataIndex: 'score',
            key: 'score',
          },
        ];
        const errorDefineData = [
            {
              key: 1,
              grade: '原文错误',
              code: 'S',
              define: ['问题不是来源于翻译本身。如原文存在缺陷，译员有责任及时反映问题，在正确原文基础上完成翻译。'],
              score: '0',
            },
            {
                key: 2,
                grade: '建议性修改',
                code: 'P',
                define: ['译文正确，使译文更完美的修改或建议。'],
                score: '0',
              },
              {
                key: 3,
                grade: '次要错误',
                code: '3',
                define: ['读者可以理解译文，但需要做进一步的改进，包括但不限于过多修饰的长句、译文不够流畅等。'],
                score: '0',
              },
              {
                key: 4,
                grade: '一般错误',
                code: '2',
                define: ['1.译文可读性差，有可能引发导致读者误导其含义。','2.措辞不严谨，逻辑关系不明确，理解困难或容易引起歧义。','3.未能正确反映原文中的细微差别。'],
                score: '-0.5',
              },
              {
                key: 5,
                grade: '严重错误',
                code: '1',
                define: ['1.严重误译，逻辑不通，句意不明，完全逐词照搬的翻译。','2.术语翻译与提供的术语库不一致。','3.未严格按照QA反馈全文修改，或没有按照提问答复及客户要求进行翻译。','4.疏忽导致的错误（错别字、漏译等）。'],
                score: '-1.5',
              },
              {
                key: 6,
                grade: '重大错误',
                code: 0,
                define: ['1.误导用户使用产品和理解内容，存在造成用户损伤或损失的风险。','2.损坏客户名誉的错误，包括但不限于代码错误、关键功能描述错误。','3.出现在显著位置的公司或产品名称拼写错误。','4.产品技术指标数值和度量单位错误。'],
                score: '-2.0',
              },
        ];

        const correctColumns = [
            {
            title: '类别',
            dataIndex: 'kinds',
            key: 'kinds',
            width: '20%',
          },
          {
            title: '描述',
            dataIndex: 'describe',
            key: 'describe',
          },
          {
            title: '质量扣分',
            dataIndex: 'score',
            key: 'score',
            width: '10%',
          },
        ];
        const correctData = [
            {
              key: 1,
              kinds: '错译',
              describe: '译文错误翻译了原文意思。译文未能正确反映原文中的细微差别。',
              score: -1.5,
            },
            {
                key: 2,
                kinds: '冗译',
                describe: '译文中没有完全表达或缺失原文的内容；译文增添了内容；译文中未能删除原文冗长的内容。',
                score: -1.5,
            },
              {
                key: 3,
                kinds: '漏译',
                describe: '译文遗漏关键内容：译文中包含未译的单词、短语、句子或段落。特别要求保留原文的除外，例如人名、通信地址、没有翻译的公司名称或产品名称。遇到这种情况询问客户，以客户答复为准。',
                score: -1.0,
              },
              {
                key: 4,
                kinds: '过译',
                describe: '翻译了无需翻译的内容：例如代码、地址、变量、参数、IP地址、命令行、需要保留原文的产品名称、公司名称、版本号等',
                score: -1.0,
              },
              {
                key: 5,
                kinds: '前后不一致',
                describe: '译文前后存在不一致，译文未与已有翻译及翻译记忆库保持一致。译文中的交叉引用以及其他参考文献未与相关文本保持一致。',
                score: -1.0,
              },
              {
                key: 6,
                kinds: '数据错译',
                describe: '译文中的数据与原文中数据不符。',
                score: -1.5,
              },
              {
                key: 7,
                kinds: '严重错译和误译',
                describe: '存在误导用户使用产品并造成损伤和损失的风险。',
                score: -2.0,
              },
              {
                key: 8,
                kinds: '拼写错误',
                describe: '单词/字拼写错误。',
                score: -1.0,
              },
        ];
        const languageColumns = [
            {
            title: '类别',
            dataIndex: 'kinds',
            key: 'kinds',
            width: '20%',
          },
          {
            title: '描述',
            dataIndex: 'describe',
            key: 'describe',
          },
          {
            title: '质量扣分',
            dataIndex: 'score',
            key: 'score',
            width: '10%',
          },
        ];
        const languageData = [
            {
              key: 1,
              kinds: '语法错误',
              describe: '译文未遵守目标语言有关语法或句法的具体规则以及语言风格。',
              score: '-0.5',
            },
            {
                key: 2,
                kinds: '表达问题',
                describe: '译文未参照原文，导致读者或最终用户难于理解。',
                score: '-0.5',
            },
              {
                key: 3,
                kinds: '文风问题',
                describe: '语言风格或措辞不符合特定行业的风格。',
                score: '-0.5',
              },
              {
                key: 4,
                kinds: '存在歧视',
                describe: '涉及种族、性别、职业、信仰、残疾等内容时措辞不当.',
                score: '-0.5',
              },
              {
                key: 5,
                kinds: '风格指南',
                describe: '没有根据客户或ECI提供的风格指南进行翻译。',
                score: '-0.5',
              },
              {
                key: 6,
                kinds: '约定条款',
                describe: '译文不符合各国家的标准约定（日期格式、货币单位、度量单位等），不符合语言习惯。',
                score: '-1.0',
              },
              
        ];
        const majorColumns = [
            {
            title: '类别',
            dataIndex: 'kinds',
            key: 'kinds',
            width: '20%',
          },
          {
            title: '描述',
            dataIndex: 'describe',
            key: 'describe',
          },
          {
            title: '质量扣分',
            dataIndex: 'score',
            key: 'score',
            width: '10%',
          },
        ];
        const majorData = [
            {
              key: 1,
              kinds: '术语表',
              describe: '未能遵守客户提供的术语表，包括但不限于通用术语表、项目特定术语表、用户界面内容翻译表、缩写表等。',
              score: '-1.0',
            },
            {
                key: 2,
                kinds: '行业标准',
                describe: '术语使用不符合公认的行业标准。',
                score: '-1.0',
            },
              {
                key: 3,
                kinds: '使用不当',
                describe: '术语与上下文不符；对于一词多义的情况错误套用客户提供的术语。',
                score:'-1.0'
              },
              {
                key: 4,
                kinds: '不一致',
                describe: '术语各种形式的内容之间不一致，术语在手册、网站内容以及宣传资料不一致，软件用户界面术语与在线帮助文档或用户手册不一致，造成用户理解困难甚至误导；混用不同项目、产品、平台(Windows, Linux, Mac等)各自适用的术语。',
                score: '-1.0',
              },
              {
                key: 5,
                kinds: '政治宗教敏感性',
                describe: '对政治、法律、文化和宗教等敏感性术语的翻译未遵循客户要求。',
                score: '-1.0',
              },
        ];
        const formatColumns = [
            {
            title: '类别',
            dataIndex: 'kinds',
            key: 'kinds',
            width: '20%',
          },
          {
            title: '描述',
            dataIndex: 'describe',
            key: 'describe',
          },
          {
            title: '质量扣分',
            dataIndex: 'score',
            key: 'score',
            width: '10%',
          },
        ];
        const formatData = [
            {
              key: 1,
              kinds: '格式',
              describe: '不一致的字体、大小、高亮、色彩、换行符。',
              score: '-0.5',
            },
            {
                key: 2,
                kinds: '乱码',
                describe: '译文中的文字符号等内容显示不正确，无法辨认。',
                score: '-1.5',
            },
              {
                key: 3,
                kinds: '标识符',
                describe: '添加/删除标签或标签位置不正确。该项仅适用于使用标记的文件（HTML，XML，FM等）。',
                score: '-0.5'
              },
              {
                key: 4,
                kinds: '空格',
                describe: '未能按照客户要求在中文与单字节字符之间保留或删除空格。',
                score: '-0.5',
              },
              {
                key: 5,
                kinds: '换行',
                describe: '未能遵循原文换行，包括增加不必要的换行和删除了原文中存在的换行。',
                score:' -0.5',
              },
              {
                key: 6,
                kinds: '标点',
                describe: '标点的处理未能遵守客户要求或中文标点符号使用规范，包括中英文标点的使用、标点前后的空格等。',
                score: '-0.5',
              },
              {
                key: 7,
                kinds: '间距',
                describe: '译文使用了错误的行间距或字间距或间距不一致。',
                score: -0.5,
              },
              {
                key: 8,
                kinds: '标注、索引、引用',
                describe: '标注未指向正确的对象，索引和交叉引用不正确等。',
                score:' -0.5',
              },
              {
                key: 9,
                kinds: '数字格式',
                describe: '数字使用（中文和阿拉伯数字）未遵守客户和中文规范。',
                score: '-0.5',
              },
              {
                key: 10,
                kinds: '其它',
                describe: '译文使用了错误的行间距或字间距或间距不一致。',
                score: '-0.5',
              },
        ];
        return (
            <div>
                 <Image src = './image/quality/evaluate/top.png'  width='100%' preview={false}/>
                 <div>
                    <span className='translateLanguage'>翻译质量评估标准</span>
                    <p style = {{'padding':'0 11%',"textAlign":"left"}}> 质量是翻译企业的立业之本。我们严格遵照中国翻译协会权威发布的《本地化翻译和文档排版质量评估规范》评估译文质量和进行译文质量的管控。本规范定义了本地化翻译和排版的错误类别和错误级别，并规定了具体错误类别和错误级别对整体质量影响的权重，以及本地化翻译和文档排版的质量得分和质量等级，为供应商和服务需求方提供了评估翻译和排版质量的框架性规范。</p>
                </div>
                <span style={{"fontSize":"25px"}}>翻译错误的定义及严重性</span>
                <Table columns={errorDefinecolumns} dataSource={errorDefineData} pagination={false} style={{margin:"0 18% 2%"}}/>
                <span style={{"fontSize":"25px"}}>准确性</span>
                <Table columns={correctColumns} dataSource={correctData} pagination={false} style={{margin:"0 18% 2%"}}/>
                <span style={{"fontSize":"25px"}}>语言及风格</span>
                <Table columns={languageColumns} dataSource={languageData} pagination={false} style={{margin:"0 18% 2%"}}/>
                <span style={{"fontSize":"25px"}}>专业术语</span>
                <Table columns={majorColumns} dataSource={majorData} pagination={false} style={{margin:"0 18% 2%"}}/>
                <span style={{"fontSize":"25px"}}>格式（参见排版质量标准，如果没有订购排版业务，不计这类错误）</span>
                <Table columns={formatColumns} dataSource={formatData} pagination={false} style={{margin:"0 18% 2%"}}/>
                
            </div>
        )
    }
}

export default QualityEvaluate;