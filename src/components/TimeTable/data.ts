let dataSource = [
    {
      key: '1', 
      t: '上',
      id:'1',
      f1:'',
      f2:'',
      f3:'',
      f4:'',
      f5:'',
      f6:'',
      f7:'',
      s1:'',
      s2:'',
      s3:'',
      s4:'',
      s5:'',
      s6:'',
      s7:'',
    },
    {
        key: '2', 
        t: '上',
        id:'2',
        f1:'',
        f2:'',
        f3:'',
        f4:'',
        f5:'',
        f6:'',
        f7:'',
        s1:'',
        s2:'',
        s3:'',
        s4:'',
        s5:'',
        s6:'',
        s7:'',
    },
    {
        key: '3', 
        t: '上',
        id:'3',
        f1:'',
        f2:'',
        f3:'232',
        f4:'',
        f5:'',
        f6:'',
        f7:'',
        s1:'232',
        s2:'',
        s3:'',
        s4:'232',
        s5:'',
        s6:'',
        s7:'',
    },
    {
        key: '4', 
        t: '上',
        id:'4',
        f1:'',
        f2:'',
        f3:'231',
        f4:'',
        f5:'',
        f6:'',
        f7:'',
        s1:'231',
        s2:'',
        s3:'',
        s4:'231',
        s5:'',
        s6:'',
        s7:'',
    },
    {
        key: '5', 
        t: '下',
        id:'1',
        f1:'232',
        f2:'231',
        f3:'',
        f4:'231',
        f5:'232',
        f6:'231',
        f7:'231',
        s1:'',
        s2:'232',
        s3:'231',
        s4:'',
        s5:'232',
        s6:'231',
        s7:'',
    },
    {
        key: '6', 
        t: '下',
        id:'2',
        f1:'231',
        f2:'232',
        f3:'',
        f4:'232',
        f5:'',
        f6:'232',
        f7:'232',
        s1:'',
        s2:'231',
        s3:'232',
        s4:'',
        s5:'231',
        s6:'232',
        s7:'',
    },
    {
        key: '7', 
        t: '下',
        id:'3',
        f1:'',
        f2:'',
        f3:'',
        f4:'',
        f5:'231',
        f6:'',
        f7:'',
        s1:'',
        s2:'',
        s3:'',
        s4:'',
        s5:'',
        s6:'',
        s7:'',
    },
    {
        key: '8', 
        t: '晚',
        id:'1',
        f1:'232',
        f2:'231',
        f3:'',
        f4:'',
        f5:'232',
        f6:'',
        f7:'231',
        s1:'',
        s2:'',
        s3:'232',
        s4:'',
        s5:'231',
        s6:'',
        s7:'',
    },
    {
        key: '9', 
        t: '晚',
        id:'2',
        f1:'231',
        f2:'232',
        f3:'',
        f4:'',
        f5:'231',
        f6:'',
        f7:'232',
        s1:'',
        s2:'',
        s3:'231',
        s4:'',
        s5:'232',
        s6:'',
        s7:'',
    },
  ];
let columns = [
    {
      title: '课表',
      dataIndex: 't',
      key: 't',
      customCell: (item:any, index:Number) => {
        // 上午合并
        if (item.t === '上' && index === 0) {
          return { rowSpan: 4 };
        }
        if (item.t === '上' ) {
            return { colSpan: 0 };
        }
        // 下午合并
        if ( item.t === '下' && index === 4) {
            return { rowSpan: 3 };
        }
        if ( item.t === '下' ) {
            return { colSpan: 0 };
        }
        // 晚上合并
        if ( item.t === '晚' && index === 7) {
            return { rowSpan: 2 };
        }
        if (item.t === '晚') {
            return { colSpan: 0 };
        }

      },
    },
    {
        title: '节数',
        dataIndex: 'id',
        key: 'id',
      },
    {
      title: '前一',
      dataIndex: 'f1',
      key: 'f1',
    },
    {
      title: '前二',
      dataIndex: 'f2',
      key: 'f2',
    },
    {
        title: '前三',
        dataIndex: 'f3',
        key: 'f3',
      },
      {
        title: '前四',
        dataIndex: 'f4',
        key: 'f4',
      },
      {
        title: '前五',
        dataIndex: 'f5',
        key: 'f5',
      },
      {
        title: '前六',
        dataIndex: 'f6',
        key: 'f6',
      },
      {
        title: '前日',
        dataIndex: 'f7',
        key: 'f7',
      },
      {
        title: '后一',
        dataIndex: 's1',
        key: 's1',
      },
      {
        title: '后二',
        dataIndex: 's2',
        key: 's2',
      },
      {
          title: '后三',
          dataIndex: 's3',
          key: 's3',
        },
        {
          title: '后四',
          dataIndex: 's4',
          key: 's4',
        },
        {
          title: '后五',
          dataIndex: 's5',
          key: 's5',
        },
        {
          title: '后六',
          dataIndex: 's6',
          key: 's6',
        },
        {
          title: '后日',
          dataIndex: 's7',
          key: 's7',
        }
  ]
export {
    dataSource,
    columns
}
