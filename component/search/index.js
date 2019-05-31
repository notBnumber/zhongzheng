Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    optionState: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function(){},
    toResult() {
      this.triggerEvent('myevent', {
        optionState: '李四'
      })      
    },
    

    
  },
  onLoad() {
    
  }
})
