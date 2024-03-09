import { LianJiaService } from '@/services/lianjia';
import { ActionType, PageContainer, ProCard, ProColumnType, ProFormInstance, ProTable } from '@ant-design/pro-components';
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import TextHighLighter from "@/components/TextHighlighter"

export type Props = {}

const  ErshouFangPage: React.FC<Props> = (props) => {
  const actionRef = React.useRef<ActionType>();
  const formRef = React.useRef<ProFormInstance>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rawJson, setRawJson] = useState('')
  const columns: ProColumnType<Lianjia.Ershoufang>[] = [
    {
      title: "区",
      dataIndex: "district",
      hideInSearch: false,
      hideInTable: false,
      width: "8%",
    },
    {
      title: "街道",
      dataIndex: "street",
      hideInSearch: true,
      hideInTable: false,
      width: "5%",
    },
    {
      title: "小区",
      dataIndex: "community",
      hideInSearch: true,
      hideInTable: false,
      width: "15%",
    },
    {
      title: "标题",
      dataIndex: "title",
      hideInSearch: true,
      hideInTable: false,
      width: "15%",
    },
    {
      title: "朝向",
      dataIndex: "direction",
      hideInSearch: true,
      hideInTable: false,
      width: '5%'
    },
    {
      title: "楼层",
      dataIndex: "floor",
      hideInSearch: true,
      hideInTable: false,
      valueType: 'text',
      width: '5%'
    },
    {
      title: "总价（万）",
      dataIndex: "totalPrice",
      hideInSearch: true,
      hideInTable: false,
      width: '7%'
    },
    {
      title: "单价（元）",
      dataIndex: "unitPrice",
      hideInSearch: true,
      hideInTable: false,
      width: '7%'
    },
    {
      title: "标签",
      dataIndex: "tags",
      hideInSearch: true,
      hideInTable: false,
      width: '6%'
    },
    {
      title: "链接",
      dataIndex: "jumpUrl",
      hideInSearch: true,
      hideInTable: false,
      width: '6%',
      render: (_, record) => {
        if (!props) return null;
        return <Button
            type={"link"} target={"_blank"} disabled={record.jumpUrl === ''}
            href={record.jumpUrl}>
            原链接
        </Button>
      }
    },
    {
      title: "操作",
      dataIndex: "option",
      width: "20%",
      render: (_, record) => {
          if (!props) return null;
          return <Button
              type={"primary"} target={"_blank"} onClick={
                () => {
                  setIsModalOpen(true)
                  setRawJson(JSON.stringify(record))
                }
              }>
              json
          </Button>
      }
    }
  ]
  return (
    <div>
      <PageContainer>
        <ProCard>
            <ProTable 
            rowKey={'ershoufang'}
            formRef={formRef}
            actionRef={actionRef}
            columns={columns}
            debounceTime={500}
            search={{ defaultCollapsed: false, optionRender: false }}
            form={{
                onValuesChange: () => formRef.current?.submit(),
            }}
            scroll={{ x: 1000 }}
            options={{ density: false, setting: false, fullScreen: false, reload: false }}
            pagination={{
                pageSize: 10
            }}
            request={async (params) => {
                const response = await LianJiaService.listErshoufang({
                    page: params.current !== undefined && params.current > 0 ? params.current : 1,
                    size: params.pageSize !== undefined && params.pageSize > 0 ? params.pageSize : 1,
                });
                return {
                    data: response.data,
                    success: true,
                    total: response.total,
                };
            }}
            >
            </ProTable>
        </ProCard>
    </PageContainer>
    <Modal title="json文本" open={isModalOpen}
      onOk={() => {
        setIsModalOpen(false)
      }}
      onCancel={() => {
        setIsModalOpen(false)
      }}>
      <div style={
        {
          height: window.innerHeight * 0.7, 
          overflowY: 'scroll'
        }}>
        <TextHighLighter codeText={rawJson} lang={'json'}/>
      </div>
      </Modal>
  </div>
  );
}

export default ErshouFangPage