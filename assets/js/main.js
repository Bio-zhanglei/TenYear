// 自己定义的一些需要用到的函数
  // Function 1
    // 定义一个具有两个参数的select选择器函数
    // 目的是为了查找特定选择器的一类或一个元素
    // 第一个参数是选择器，第二个参数是判断查找一组还是一个(默认false)
    const select = (selector, flagAll=false) => {
      // selector = selector.trim()
      if (flagAll){
        //query的结果为nodelist，需要转为array才可以使用forEach
        //[...target]是一种快速转为数组的方法，这样则不需要调用array.prototype进行绑定
        return [...document.querySelectorAll(selector)]
      } else {
        return document.querySelector(selector)
      }
    }

  // Function 2
    // 基于select函数，再定义一个具有四个参数的on监听函数
    // 目的是为了对select查找到的元素进行绑定监听函数
    // 第一个参数是监听类型，第二个和第四个参数同select的第一和第二参数，第三个参数是监听函数
    const on = (event, selector, eFun, flagAll=false) => {
      let element = select(selector, flagAll)
      //如果不为空
      if (element) {
        if (flagAll) {
          element.forEach(e => e.addEventListener(event, eFun));
        } else {
          element.addEventListener(event, eFun);
        }
      }
    }

  // Function 3
    // 定义一个scroll函数
    // 根据window的滚动距离number，确定某一元素element的状态status
    const scroll = (number, element, status) => {
      if (window.scrollY > number) {
        element.classList.add(status);
      } else {
        element.classList.remove(status);
      }
    }

// 初始化AOS和gallery
  (function(){
    window.onload = function(){
      AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: false,
          mirror: false
      })
    }

    const galleryLightbox = GLightbox({
      selector: '.gallery-lightbox'
    });
  })();

// 随着window滚动, header背景固定框和back-to-top按钮的出现和消失
// 需要使用Fun1和Fun3
  (function(){
    // header根据window滚动距离，状态的改变(添加新的属性)
    // header-scrolled属性在css内有对应的修饰
    // 这里注意原本的监听函数需要传参，需要在外面再套一个函数funcion(e),e可省略
    let selectHeader = select('#header');
    window.addEventListener('load', function(e){scroll(100, selectHeader, 'header-scrolled')});
    document.addEventListener('scroll', function(e){scroll(100, selectHeader, 'header-scrolled')});

    // 回到顶部的按钮根据window滚动距离，状态的改变(添加新的属性)
    // active属性在css内有对应的修饰
    let BackToTop = select('.back-to-top')
    window.addEventListener('load', function(e){scroll(100, BackToTop, 'active')});
    document.addEventListener('scroll', function(e){scroll(100, BackToTop, 'active')});
  })();

  // 手机端的导航标签
  // 需要用到Fun2
  (function(){
    let selectNav = select('#navbar');

    on('click', '.mobile-nav-toggle', function(e) {
      // 当list展开图标被点击时(打开或关闭)，导航栏会重新赋予或删除navbar-mobile属性
      // navbar-mobile属在css内有对应的修饰
      selectNav.classList.toggle('navbar-mobile')

      // 当list展开图标被点击时，其图标在 “list图标”和“X图标”间进行切换(toggle)
      // 这里的this指代的是点击的对象元素，即图标元素
         // 可以使用select函数进行选择图标标签，但是没有必要
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x-square')
    })

    // 定义手机端二层下拉被点击时被赋予或删除的dropdown-active属性
    // dropdown-active属在css内有对应的修饰
    on('click', '.navbar .dropdown > a', function(e) {
      if (selectNav.classList.contains('navbar-mobile')) {
        // 这里阻止下拉a父标签的默认href行为，不然点一下展开他就会执行跳转
        // 我们只需要其有展开显示子标签的功能
        // 当然我们可以不设置父展开标签的href属性
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-active')
      }
    }, true)
  })();

// 导航滚动定位
// 不能单纯的使用herf定位，因为忽略了固定的header高度
// 因此需要定义函数计算实际的offsetTop
  (function(){
    // 首先定义一个scrollto函数
    const scrollto = (element) => {
      let header = select('#header')
      // 获取导航标签的高度，期望值是70(即滚动导航标签的高度0)
      let offset = header.offsetHeight
      // alert(offset)
      // 由于导航标签的高度存在一个滚动收缩的动画，高度从90变为70
      // 因此从home页面发起时，导航标签高度是90，所以还需要减去20变为70
      // 如果说所有页面高度的header都一致(即滚动时和home页面,header没有高度收缩动画)，则没必要设置这个判定
      if (!header.classList.contains('header-scrolled')) {
        offset -= (90-70)                                      
      }

      // 计算滚动距离
      // 根据所点击的导航标签的href属性值(定位标签)，计算其距离其父元素(这里是body)的高度
      let elementPos = select(element).offsetTop

      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      })
    }

    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        // 这里要阻止a标签的默认事件，否则他还是会执行href定位结果
        e.preventDefault()

        let navbar = select('#navbar')

        // 针对手机端，使出现的导航栏消失
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          let navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x-square')
        }

       // 根据this的href属性进行计算滚动距离，而不是根据默认的href滚动
       scrollto(this.hash)
      }
     }, true)
  })();

  // 导航下划线随着滚动的出现和消失
  (function(){
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    document.addEventListener('scroll', navbarlinksActive);
  })();

//图片滚动效果
(function(){
  let swiper = new Swiper(".sliderFeaturedPosts", {
    spaceBetween: 0,
    speed: 500,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".custom-swiper-button-next",
      prevEl: ".custom-swiper-button-prev",
    },
  });
})();