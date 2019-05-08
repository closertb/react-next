// import React from 'react';
import { Input, Form } from 'antd';

const FormItem = Form.Item;

function form(target) {
  return Form.create()(target);
}

@form
export default class Edit extends React.Component {
  constructor(props) {
    super(props);
    const { form } = props;
    console.log('form', form);
    this.state = {};
  }
  render() {
    const { form: { getFieldDecorator } } = this.props;
    return (
      <Form>
        <FormItem label="姓名">
          {getFieldDecorator('name', {
            rules: [{ required: true }]
          })(<Input />)}
        </FormItem>
      </Form>);
  }
}