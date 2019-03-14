module.exports = {
  headerMenu: [
    {
      name: 'top-menu1',
      icon: 'md-person',
      title: '导航菜单1'
    },
    {
      name: 'top-menu2',
      icon: 'md-person',
      title: '导航菜单2'
    }
  ],
  siderMenuMap: {
    'top-menu1': [
      {
        name: 'home',
        icon: 'md-person',
        title: '首页'
      },
      {
        name: 'timeseries',
        icon: 'md-person',
        title: '时序图'
      },
      {
        name: 'auth',
        icon: 'md-person',
        title: '授权管理'
      },
      {
        name: 'dataTypeSelector',
        icon: 'md-person',
        title: '选择数据类型'
      },
      {
        name: 'fieldselector',
        icon: 'md-person',
        title: '选择变量'
      }
    ],
    'top-menu2': [
      {
        name: 'pasJob',
        icon: 'md-person',
        title: 'PAS任务'
      },
      {
        icon: 'md-person',
        title: '左侧一级菜单4',
        children: [
          {
            name: 'page4',
            icon: 'md-person',
            title: '左侧二级菜单1'
          },
          {
            name: 'page4',
            icon: 'md-person',
            title: '左侧二级菜单2'
          }
        ]
      }
    ]
  }
}
