import React from 'react';
import fetch from 'isomorphic-unfetch'
import qs from 'qs';
import bind from 'bind-decorator';
import { Button, Popconfirm, Table } from 'antd';
import { EnhanceTable } from 'antd-doddle';
import server from '../configs/server';
import { fields } from '../configs/fields';

const log = (target, name, descriptor) => {
  var oldValue = descriptor.value;
  descriptor.value = function() {
    const newVlaue =  oldValue.apply(this, arguments);
    return newVlaue;
  };
  return descriptor;
}

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  @bind
  handleChange(param) {
    const { search } = this.props;
    console.log('param:', param);
    const nextSearch = { ...search, ...param };
    window.location.href = `/user?${qs.stringify(nextSearch)}`;
  }
  @bind
  handleAction() {
    this.setState({ visible: true });
  }
  @log
  testLog(a= 10, b = 20) {
    return a + b;
  }
  getExtraFields() {
    const { actions: { onDelete } } = this.props;
    return [
      {
        key: 'operate',
        name: '操作',
        width: 120,
        fixed: 'right',
        render: (text, detail) => (
          <div>
            <a onClick={this.handleOperate('update', detail)}>修改</a>
            <Popconfirm title="确认删除？" onConfirm={() => { onDelete({ id: detail.id }); }}>
              <a className="ml-10">删除</a>
            </Popconfirm>
          </div>)
      }
    ];
  }
  render() {
    const { loading, datas, total, search, fields } = this.props;
    const { visible } = this.state;
    const tableProps = {
      search,
      datas,
      fields,
      loading,
      pageName: 'pn',
      onSearch: this.handleChange,
      total
    };
    return (
    <React.Fragment>
      {visible && <Button type="primary" title="确认删除？" onClick={() => { this.testLog(20, 30) }}>
        删除
      </Button>}
      <Button type="primary" title="确认删除？" onClick={this.handleAction}>
        show
      </Button>
      <EnhanceTable {...tableProps} />
    </React.Fragment>
  );
}
}

Detail.getInitialProps = async function (props) {
  const { query = {} } = props;
  const { pn = 1, ps = 10 } = query;
  // console.log('query', query);
  const res = await fetch(`${server.admin}/api/user/getList?pn=${pn}&ps=${ps}`, { method: 'GET' });
  const { content: { total = 0, list = [] } } =await res.json();
  return {
      search: {
        pn: +pn,
        ps: +ps,
      },
      fields: fields.map(item => ({ title: item.name, dataIndex: item.key, ...item })),
      loading: {},
      total,
      datas: list,
  }
}
export default Detail