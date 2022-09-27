import React, { useEffect } from 'react';
import 'antd/dist/antd.less';
import '../../global.less';
import Header from './Header'

interface IProps {
    children: React.ReactNode;
}

const Index: React.FC<IProps> = ({
    children,
}) => {

    useEffect(() => {
        !localStorage.getItem("serverTitle") && localStorage.setItem("serverTitle", '专汽视觉质检系统运行数据展示');
        !localStorage.getItem("ipUrl-ym") && localStorage.setItem("ipUrl-ym", 'http://localhost:8000/#/dataStatistics?iframe');
        !localStorage.getItem("ipUrl-xd") && localStorage.setItem("ipUrl-xd", 'http://localhost:8000/#/dataStatistics?iframe');
        !localStorage.getItem("ipUrl-jbt") && localStorage.setItem("ipUrl-jbt", 'http://localhost:8000/#/dataStatistics?iframe');
        !localStorage.getItem("ipUrl-tbg") && localStorage.setItem("ipUrl-tbg", 'http://localhost:8000/#/dataStatistics?iframe');
    }, []);

    return (
        <div id="app">
            <Header />
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default Index;
