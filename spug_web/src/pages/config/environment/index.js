/**
 * Copyright (c) OpenSpug Organization. https://github.com/openspug/spug
 * Copyright (c) <spug.dev@gmail.com>
 * Released under the AGPL-3.0 License.
 */
import React from 'react';
import { observer } from 'mobx-react';
import { Input, Button } from 'antd';
import { SearchForm, AuthDiv, AuthCard } from 'components';
import ComTable from './Table';
import store from './store';
import PageWrapper from 'components/PageWrapper';

export default observer(function () {
  return (
    <PageWrapper>
      <AuthCard auth="config.env.view">
        <SearchForm>
          <SearchForm.Item span={8} title="环境名称">
            <Input allowClear value={store.f_name} onChange={e => store.f_name = e.target.value} placeholder="请输入"/>
          </SearchForm.Item>
          <SearchForm.Item span={8}>
            <Button type="primary" icon="sync" onClick={store.fetchRecords}>刷新</Button>
          </SearchForm.Item>
        </SearchForm>
        <AuthDiv auth="config.env.add" style={{marginBottom: 16}}>
          <Button type="primary" icon="plus" onClick={() => store.showForm()}>新建</Button>
        </AuthDiv>
        <ComTable/>
      </AuthCard>
    </PageWrapper>
  )
})
