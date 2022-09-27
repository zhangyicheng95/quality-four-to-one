import './index.less'
import react, { useState, useEffect, Fragment } from 'react';
import { Modal, message, Form, Input } from 'antd';
import usePolling from '@/hooks/usePolling'
import moment from 'moment'
import { useLocation, history } from 'umi';
import classNames from 'classnames';

const Header: React.FC = () => {
    const [dateTimeStr, setDateTimeStr] = useState<string>('')
    const { pathname } = useLocation();
    const [form] = Form.useForm();
    const { validateFields, resetFields, getFieldsValue, setFieldsValue } = form;
    const [settingVisible, setSettingVisible] = useState(false);

    usePolling(() => {
        const now = moment()
        setDateTimeStr(now.format('yyyy年MMMDo dddd HH:mm:ss'))
    }, 500)

    return (
        <div className="page-home-header">
            <div className="left">
                <div className="date-time">{dateTimeStr}</div>
            </div>
            <div className="middle" onClick={() => setSettingVisible(true)}>
                <span>{localStorage.getItem("serverTitle") || '专汽视觉质检系统运行数据展示'}</span>
            </div>
            <div className="right">

            </div>
            {settingVisible ? (
                <Modal
                    className="canvas-toolbar-setting-modal"
                    visible={settingVisible}
                    title="修改服务端端口地址"
                    onOk={() => {
                        validateFields()
                            .then((values) => {
                                localStorage.setItem("serverTitle", values['serverTitle']);
                                localStorage.setItem("ipUrl-ym", values['ipUrl-ym']);
                                localStorage.setItem("ipUrl-xd", values['ipUrl-xd']);
                                localStorage.setItem("ipUrl-jbt", values['ipUrl-jbt']);
                                localStorage.setItem("ipUrl-tbg", values['ipUrl-tbg']);
                                window.location.reload();
                            })
                            .catch((err) => {
                                const { errorFields } = err;
                                message.error(`${errorFields[0].errors[0]} 是必填项`);
                            });
                    }}
                    onCancel={() => {
                        setSettingVisible(false);
                    }}
                    okText="确认"
                >
                    <div className="canvas-toolbar-setting-modal-body">
                        <Form
                            form={form}
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 14 }}
                            // layout={'vertical'}
                            scrollToFirstError
                        >
                            <Form.Item
                                name="serverTitle"
                                label="项目名称"
                                initialValue={localStorage.getItem("serverTitle") || undefined}
                                rules={[{ required: true, message: "项目名称" }]}
                            >
                                <Input placeholder="专汽视觉质检系统运行数据展示" />
                            </Form.Item>
                            <Form.Item
                                name="ipUrl-ym"
                                label="压铆项目地址"
                                initialValue={localStorage.getItem("ipUrl-ym") || undefined}
                                rules={[{ required: true, message: "压铆项目地址" }]}
                            >
                                <Input placeholder="http://localhost:8000/#/dataStatistics?iframe" />
                            </Form.Item>
                            <Form.Item
                                name="ipUrl-xd"
                                label="箱底焊缝项目地址"
                                initialValue={localStorage.getItem("ipUrl-xd") || undefined}
                                rules={[{ required: true, message: "箱底焊缝项目地址" }]}
                            >
                                <Input placeholder="http://localhost:8000/#/dataStatistics?iframe" />
                            </Form.Item>
                            <Form.Item
                                name="ipUrl-jbt"
                                label="搅拌桶项目地址"
                                initialValue={localStorage.getItem("ipUrl-jbt") || undefined}
                                rules={[{ required: true, message: "搅拌桶项目地址" }]}
                            >
                                <Input placeholder="http://localhost:8000/#/dataStatistics?iframe" />
                            </Form.Item>
                            <Form.Item
                                name="ipUrl-tbg"
                                label="拖泵管项目地址"
                                initialValue={localStorage.getItem("ipUrl-tbg") || undefined}
                                rules={[{ required: true, message: "拖泵管项目地址" }]}
                            >
                                <Input placeholder="http://localhost:8000/#/dataStatistics?iframe" />
                            </Form.Item>
                        </Form>
                    </div>
                </Modal>
            ) : null}
        </div>
    )
}

export default Header
