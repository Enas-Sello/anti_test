import React, { useState } from 'react';
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import { DeleteFilled, EditOutlined } from '@ant-design/icons';

interface Item {
  key: string;
  name: string;
  section: string;
  type: string;
  shipe: string;
  code: number;
}
interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: Item;
  index: number;
  children: React.ReactNode;
}
// data
const originData: Item[] = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: 'medcien',
    section: 'قسم جديد',
    type: 'تصنيف جديد',
    shipe: 'اقراص',
    code: 562,
  });
}

// edit cells render component
const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const Tables = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  // data comims
  const columns = [
    {
      key: '1',
      title: 'اسم الدواء',
      dataIndex: 'name',
      editable: true,
    },
    {
      key: '2',

      title: 'الباركود المحلي',
      dataIndex: 'code',
      editable: true,
    },
    {
      key: '3',

      title: 'القسم',
      dataIndex: 'section',
      editable: true,
    },
    {
      key: '4',

      title: 'التصنيف',
      dataIndex: 'type',
      editable: true,
    },
    {
      key: '5',

      title: 'الشكل الدوائي',
      dataIndex: 'shipe',
      editable: true,
    },
    {
      title: 'التحكم',
      dataIndex: 'operation',
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <div style={{ display: 'flex', gap: '20px' }}>
            <Typography.Link
              disabled={editingKey !== ''}
              onClick={() => edit(record)}
              style={{
                color: '#16b9ff',
                display: 'flex',
                gap: '5px',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <EditOutlined />
              <p> تعديل</p>{' '}
            </Typography.Link>

            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(record.key)}
            >
              <div
                style={{
                  color: 'red',
                  display: 'flex',
                  gap: '5px',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <DeleteFilled />
                <p> حذف</p>
              </div>
            </Popconfirm>
          </div>
        );
      },
    },
  ];
  //end data comims

  // edit cells func
  const isEditing = (record: Item) => record.key === editingKey;
  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({ name: '', age: '', address: '', ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as Item;

      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };
  //end edit cells func

  // delete func
  const handleDelete = (key: React.Key) => {
    const newData = data.filter((item) => item.key !== key);
    console.log(newData);
  };
  //end delete func

  //  editable config
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex === 'code' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
          position: ['topCenter'],
        }}
      />
    </Form>
  );
};

export default Tables;
