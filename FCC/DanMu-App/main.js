/**
 * Canvas 实现，而不是 DOM + CSS3
 * 使用 LeanCloud 管理数据
 * 使用 MVC
 */
!function () {

  let View = {
    view: document.querySelector("#barrage"),
    canvas: document.querySelector('.tv-screen')
  }
  
  let Model = {
    // 初始化 LeanCloud
    init: function () {
      let APP_ID = 'raCuWVsRi3o1b8mA8kXCllx3-gzGzoHsz'
      let APP_KEY = 'qxc0fPWjda1fNcVYCsYsM7wv'
      AV.init({ appId: APP_ID, appKey: APP_KEY })
    },

    // 获取数据，返回 Promise 对象
    fetch: function () {
      let query = new AV.Query('Barrages')
      return query.find()
    },

    // 保存弹幕数据，返回 Promise 对象
    save: function (barrage) {
      let Message = AV.Object.extend('Barrages')
      let msg = new Message()
      return msg.save(barrage)
    }
  }

  let Controller = {
    init: function (view, model) {
      this.view = view
      this.model = model

      // raf 用来控制 requestAnimationFrame
      this.raf = true
      this.barrages = []

      this.canvas = view.canvas
      this.context = this.canvas.getContext('2d')
      this.canvas.width = this.canvas.clientWidth
      this.canvas.height = this.canvas.clientHeight

      this.barrageText = view.view.querySelector('.barrage-text')
      this.sendButton = view.view.querySelector('.btn-send')
      this.cleanButton = view.view.querySelector('.btn-clean')

      this.model.init()   // 初始化数据
      this.loadBarrages() // 加载弹幕
      this.bindEvents()   // 绑定发送弹幕、清屏按钮事件
    },
    
    bindEvents: function () {
      this.sendButton.addEventListener('click', e => {
        // 弹幕文字、随机颜色、大小（10 - 24）、随机粗体
        // 随机纵坐标、随机速度、是否是实心字体
        let barrage = {
          'text': this.barrageText.value ? this.barrageText.value.trim() : '',
          'color': '#' + (Math.random() * 0xffffff << 0).toString(16),
          'fontSize': Math.floor(Math.random() * 8) + 20,
          // 'isFill': (Math.random()  > 0.495 ? 1 : 0),
          'opacity': Math.random() * 0.8 + 0.2, 
          'positionY': Math.floor(Math.random() * this.canvas.height),
          'speed': Math.random() * 2.6 + 1.4
        }
        if (!barrage.text) return
        this.sendBarrage(barrage)
      })

      // 监听回车，回车就发送弹幕
      document.onkeydown = function (event) {
        let e = event || window.event
        if (e && e.keyCode === 13) {
          document.querySelector('.btn-send').click()
        }
      }

      this.cleanButton.onclick = () => {
        this.cleanScreen()
      }
    },

    // 将弹幕抽象成类
    Barrage: function (barrage, canvas) {
      let {text, color, opacity, fontSize, positionY, speed} = barrage

      this.context = canvas.getContext('2d')
      this.text = text
      this.fontSize = fontSize
      this.opacity = opacity
      this.color = color
      this.x = canvas.width + Math.random() * this.context.measureText(barrage.text).width
      this.y = positionY
      this.speed = speed

      if (this.y < this.fontSize) {
        this.y = this.fontSize
      } else if (this.y > canvas.height - this.fontSize) {
        this.y = canvas.height - this.fontSize
      }

      this.draw = function () {
        this.context.strokeStyle = this.color
        this.context.fillStyle = 'rgba(255, 255, 255,' + this.opacity + ')'
        this.context.font = 'bold ' + this.fontSize + 'px "microsoft yahei", sans-serif'
        this.context.fillText(this.text, this.x, this.y)
        this.context.strokeText(this.text, this.x, this.y)
      }
    },

    // 将要发送的弹幕存起来
    storeBarrages: function (barrages) {
      this.barrages = []
      this.barrages = barrages.map(barrage => new this.Barrage(barrage, this.canvas))
    },

    // 在 View 视图中渲染弹幕
    render: function () {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.barrages.forEach(barrage => {
        if (barrage.x > -this.context.measureText(barrage.text).width) {
          barrage.x -= barrage.speed
          barrage.draw()
        }
      })
      this.raf = this.barrages.some(barrage => {
        return barrage.x > -this.context.measureText(barrage.text).width
      })
      if (this.raf) {
       requestAnimationFrame(this.render.bind(this))
      }
    },    
    
    // 初始时从 LeanCloud 加载弹幕信息
    loadBarrages: function () {
      this.model.fetch().then(res => {
        let barrages = res.map(item => item.attributes)
        this.storeBarrages(barrages)
        this.render()
      }).catch(error => {
        alert("弹幕加载失败！")
      })
    },

    // 发送弹幕
    sendBarrage: function (barrage) {
      this.model.save(barrage).then(res => {
        this.barrageText.value = ''
        this.barrages.unshift(new this.Barrage(barrage, this.canvas))
      }).catch(error => {
        alert("弹幕发射失败！")
      })
    },

    // 清屏，当 this.barrages 为空时 render 函数会停止
    cleanScreen: function () {
      let emptyBarrage = {
        'text': '',
        'color': 'rgba(255, 255, 255, 0)',
        'fontSize': 0,
        // 'isFill': (Math.random()  > 0.495 ? 1 : 0),
        'opacity': 0, 
        'positionY': 0,
        'speed': 0.1
      }
      setTimeout(() => {
        this.barrages = [new this.Barrage(emptyBarrage, this.canvas)]
      }, 1500)
    }

  }

  Controller.init(View, Model)

}.call()

