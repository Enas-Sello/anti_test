import { FilterFilled, SearchOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import { Option } from 'antd/es/mentions';

const FindMed = () => {
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
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */

  return (
    <Form
      name="horizontal"
      layout="inline"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ margin: '10px', padding: '10px' }}
      >
        <Col className="gutter-row" span={4} style={style}>
          <Form.Item label="بحث في" name="medName">
            <Input placeholder="اسم الدواء" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={4} style={style}>
          <Form.Item label="القيمه " name="price">
            <Input placeholder="" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={4} style={style}>
          <Form.Item
            style={{ marginTop: '30px' }}
            label="القيمه "
            name="select"
            rules={[{ required: true }]}
          >
            <Select placeholder="تبدا ب">
              <Option value="نوع 1 ">نوع 1</Option>
              <Option value="نوع 2 ">نوع 2</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col
          className="gutter-row"
          span={5}
          style={{ marginTop: '38px', marginLeft: '5px' }}
        >
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            <SearchOutlined />
            بحث
          </Button>
        </Col>
        <Col
          className="gutter-row"
          span={5}
          style={{ marginTop: '38px', marginLeft: '5px' }}
        >
          <Button
            danger
            type="primary"
            htmlType="submit"
            style={{ width: '100%' }}
          >
            <FilterFilled /> الغاء البحث
          </Button>
        </Col>
        {/*2Row  */}
        <Col className="gutter-row" span={6} style={style}>
          <Form.Item name={['med', 'order']} label="ترتيب ب :">
            <Input placeholder="اسم الدواء" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6} style={style}>
          <Form.Item name={['user', 'email']} label="ترتيب">
            <Select defaultValue="تصاعدي ">
              <Option value="تصاعدي ">تصاعدي</Option>
              <Option value="تنازلي ">تنازلي</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col
          className="gutter-row"
          span={5}
          style={{ marginTop: '10px', marginLeft: '5px' }}
        >
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            <SearchOutlined />
            الترتيب
          </Button>
        </Col>
        <Col
          className="gutter-row"
          span={5}
          style={{ marginTop: '10px', marginLeft: '5px' }}
        >
          <Button
            danger
            type="primary"
            htmlType="submit"
            style={{ width: '100%' }}
          >
            <FilterFilled /> الغاء الترتيب
          </Button>
        </Col>
        {/*end2Row  */}
      </Row>
    </Form>
  );
};

export default FindMed;
