// 1.每次调用$.get(),$.post(),$.ajax()的时候，会先调用ajaxPrefilter()这个函数
// 这个函数可以拿到我们给ajax配置的对象

$.ajaxPrefilter(function (options) {
    // console.log(options.url)
    options.url = 'http://www.liulongbin.top:3007' + options.url
})