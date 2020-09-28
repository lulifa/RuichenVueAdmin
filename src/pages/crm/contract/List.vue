<template>
    <div>
        <a-card :bordered="false">
            <a-table
                :columns="table.columns"
                :data-source="table.list"
                :pagination="table.pagination"
                :rowKey="(item) => item.id"
                @change="changeTable"
                size="middle"
            ></a-table>
        </a-card>
    </div>
</template>
<script>
import { getPagedContracts } from '@/services/crm/contract';

const columns = [
    {
        dataIndex: 'name',
        title: '合同名称',
    },
    {
        title: '合同金额',
        dataIndex: 'amount',
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
    },
    {
        title: '状态',
        dataIndex: 'state',
    },
];

export default {
    components: {},
    data() {
        return {
            table: {
                columns: columns,
                list: [],
                pagination: {
                    current: 1,
                    pageSize: 10,
                    total: 0,
                },
            },
        };
    },
    computed: {},
    beforeMount() {},
    mounted() {
        this.getList();
    },
    methods: {
        getList() {
            const params = {};
            getPagedContracts(params).then((response) => {
                if (response.code == 200) {
                    this.table.list = response.data.rows;
                    this.table.pagination.total = response.data.total;
                }
            });
        },
        changeTable(pagination) {
            this.table.pagination = pagination;
            this.getList();
        },
    },
};
</script>
