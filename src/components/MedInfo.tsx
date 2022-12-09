import React from 'react';
import { Col, Row } from 'antd';
import { Button, Form, Input, InputNumber, Select } from 'antd';
import { Option } from 'antd/es/mentions';
import { SaveOutlined } from '@ant-design/icons';

const MedInfo = () => {
  const style: React.CSSProperties = {
    padding: '8px 0',
    marginBottom: '10px',
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    // types: {
    //   email: '${label} is not a valid email!',
    //   number: '${label} is not a valid number!',
    // },
    number: {
      range: '${label} must be between ${10} and ${100}',
    },
  };
  /* eslint-enable no-template-curly-in-string */

  return (
    <Form
      name="horizontal"
      layout="inline"
      onFinish={onFinish}
      validateMessages={validateMessages}
      // style={{ width: '100%' }}
    >
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ margin: '10px', padding: '10px' }}
      >
        <Col className="gutter-row" span={6} style={style}>
          <Form.Item
            name={['med', 'name']}
            label="اسم الدواء :"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6} style={style}>
          <Form.Item
            name="select"
            label="نوع الوحدة :"
            hasFeedback
            rules={[{ required: true }]}
          >
            <Select placeholder="">
              <Option value="نوع 1 ">نوع 1</Option>
              <Option value="نوع 2 ">نوع 2</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6} style={style}>
          <Form.Item
            name={['med', 'number']}
            label="عدد الوحدات"
            rules={[{ type: 'number', required: true }]}
          >
            <InputNumber />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6} style={style}>
          <Form.Item name={['med', 'latenName']} label="الاسم الاتيني">
            <Input />
          </Form.Item>
        </Col>
        {/*2Row  */}
        <Col className="gutter-row" span={6} style={style}>
          <Form.Item name={['med', 'arName']} label="الاسم العربي :">
            <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6} style={style}>
          <Form.Item name={['med', 'cemicName']} label="الاسم الكميائي :">
            <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6} style={style}>
          <Form.Item
            name={['med', 'localCode']}
            label="الباركود المحلي :"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6} style={style}>
          <Form.Item name={['med', 'wideCode']} label="الباركود الدولي">
            <Input />
          </Form.Item>
        </Col>
        {/*end2Row  */}
        {/*3Row  */}
        <Col className="gutter-row" span={6} style={style}>
          <Form.Item name={['med', 'QR Code']} label="َQR Code">
            <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6} style={style}>
          <Form.Item name="select" label="الشركه :" hasFeedback>
            <Select placeholder="">
              <Option value="نوع 1 ">نوع 1</Option>
              <Option value="نوع 2 ">نوع 2</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6} style={style}>
          <Form.Item
            name="select"
            label="القسم :"
            hasFeedback
            rules={[{ required: true }]}
          >
            <Col span={3}></Col>
            <Select placeholder="">
              <Option value="نوع 1 ">نوع 1</Option>
              <Option value="نوع 2 ">نوع 2</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6} style={style}>
          <Form.Item
            name={['med', 'type']}
            label=" التصنيف :"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        {/*end3Row  */}
        {/*4Row  */}
        <Col className="gutter-row" span={6} style={style}>
          <Form.Item
            name={['med', 'shipe']}
            label="الشكل الدوائي"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6} style={style}>
          <Button type="primary" htmlType="submit">
            <SaveOutlined />
            حفظ
          </Button>
        </Col>
        {/*end4Row  */}
      </Row>
    </Form>
  );
};

export default MedInfo;
