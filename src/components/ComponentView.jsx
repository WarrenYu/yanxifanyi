import React from 'react';
import Logo from './widgets/Logo';
import Footer from './widgets/Footer';
import { Menu } from 'antd';
import{ Link,BrowserRouter,Route,Redirect} from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import ServiceItem from "./pages/ServiceItem";
import TranslateLanguage from "./pages/TranslateLanguage";
import QualityEnsure from "./pages/QualityEnsure";
import QualityEvaluate from "./pages/QualityEvaluate";
import Cooperation from "./pages/Cooperation";
import ConnectUs from "./pages/ConnectUs"

import './ComponentView.css';

const { SubMenu } = Menu;

class ComponentView extends React.Component {
    state = {
        current: 'mail',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };

    render() {
        const { current } = this.state;
        return (
            <div>
                 <BrowserRouter>
                    <div className='menu'>
                        <Logo className='logo'/>
                        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                            <Menu.Item key="homePage">
                                <Link to = '/homepage'>首页</Link>
                            </Menu.Item>
                            <Menu.Item key="about">
                                <Link to = '/about'>关于我们</Link>
                            </Menu.Item>
                            <Menu.Item key="serviceItem">
                                <Link to = '/serviceItem'>服务项目</Link>
                            </Menu.Item>
                            <Menu.Item key="translateLanguage">
                                <Link to = '/translateLanguage'>翻译语种</Link>
                            </Menu.Item>
                            <SubMenu key="quality" title="质量">
                                <Menu.Item key="qualityEnsure">
                                    <Link to = '/qualityEnsure'>质量保证</Link>
                                </Menu.Item>
                                {/* <Menu.Item key="qualityControl">
                                    <Link to = '/qualityControl'>质量控制</Link>
                                </Menu.Item> */}
                                <Menu.Item key="qualityEvaluate">
                                    <Link to = '/qualityEvaluate'>质量评估</Link>
                                </Menu.Item>
                            </SubMenu>
                            
                            <Menu.Item key="cooperation">
                                <Link to = '/cooperation'>合作案例</Link>
                            </Menu.Item>
                            {/* <Menu.Item key="price">
                                在线报价
                            </Menu.Item> */}
                            <Menu.Item key="contact">
                                <Link to = '/contact'>联系我们</Link>
                            </Menu.Item>
                        </Menu>
                    </div>

                    <div style={{'padding':'60px 0 0 0'}}>
                        <Route exact key = {'homepage'} path='/homepage' component = {Homepage} />
                        <Route key = {'about'} path='/about' component = {About} />
                        <Route key = {'serviceItem'} path='/serviceItem' component = {ServiceItem} />
                        <Route key = {'translateLanguage'} path='/translateLanguage' component = {TranslateLanguage} />
                        <Route key = {'qualityEnsure'} path='/qualityEnsure' component = {QualityEnsure} />
                        <Route key = {'qualityEvaluate'} path='/qualityEvaluate' component = {QualityEvaluate} />
                        <Route key = {'cooperation'} path='/cooperation' component = {Cooperation} />
                        <Route key = {'contact'} path='/contact' component = {ConnectUs} />
                        <Redirect path='/' to = '/homepage' component = {Homepage} />
                    </div>
                     <Footer />
                </BrowserRouter>
            </div>
            
        )
    }
}

export default ComponentView;
