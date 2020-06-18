import React  from 'react';

import { Form, Input, InputNumber, Select, Button, Space } from 'antd';
 import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

class Travellers extends React.Component {
    constructor(props){
        super(props);
    }
    
    onFinish = values => {
        console.log('Received values of form:', values);
        localStorage.setItem('Travellers', JSON.stringify(values.users));
    };

    render(){
        const { Option } = Select;
        return(
            <Form name="dynamic_form_nest_item" onFinish={this.onFinish} autoComplete="on">
              <Form.List name="users">
                {(fields, { add, remove }) => {
                  return (
                    <div>
                      {fields.map(field => (
                        <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="start">
                          <Form.Item
                              {...field}
                              name={[field.name, 'name']}
                              fieldKey={[field.fieldKey, 'name']}
                              rules={[{ required: true, message: 'Missing full name' }]}
                              >
                                  <Input placeholder="Name" />
                          </Form.Item>

                          <Form.Item
                              {...field}
                              name={[field.name, 'age']}
                              fieldKey={[field.fieldKey, 'age']}
                              rules={[{ required: true, message: 'Missing age' }]}
                              >
                                  <InputNumber placeholder="Age" min={18} max={80} />
                          </Form.Item>

                          <Form.Item
                              {...field}
                              name={[field.name, 'gender']}
                              fieldKey={[field.fieldKey, 'gender']}
                              rules={[{ required: true, message: 'Missing Gender Type' }]}
                              >
                                  <Select placeholder="Gender Type">
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                    <Option value="lgbtq">LGBTQ</Option>
                                  </Select>
                          </Form.Item>

                          <Form.Item
                              {...field}
                              name={[field.name, 'food']}
                              fieldKey={[field.fieldKey, 'food']}
                              rules={[{ required: true, message: 'Missing Food Choice' }]}
                              >
                                  <Select placeholder="Food Type">
                                    <Option value="veg">Veg</Option>
                                    <Option value="nveg">Non-Veg</Option>
                                    <Option value="nc">No Choice</Option>
                                  </Select>
                          </Form.Item>

                          <MinusCircleOutlined
                            onClick={() => {
                              remove(field.name);
                            }}
                          />
                        </Space>
                      ))}

                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => {
                            add();
                          }}
                          block
                        >
                          <PlusOutlined /> Add field
                        </Button>
                      </Form.Item>
                    </div>
                  );
                }}
              </Form.List>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
        );
    }
    
}

export default Travellers;


        
        



//            <div>
//                <h4>Information about the traveller. Preferences of the traveller.</h4>
//                <a>Name,  Age,  Gender,  Food</a><br/>
//                <a>Add More</a>
//            </div>