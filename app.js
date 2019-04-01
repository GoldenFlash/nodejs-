var superagent = require('superagent');
var cheerio = require('cheerio');
var fs = require('fs');
var path = require("path")
var url = 'http://m.iqiyi.com/v_19rsiezzrg.html'
var savePath = '保存文件路径'
 
superagent
    .get(url)
    .end(function(err, res) {
        // var path = path.join(__dirname,)
        console.log("res",res.data)
        var reg = /(\n|\r)/g
        var data = res.text.replace(reg, "").replace(/\\/g,"")
        // const $ = cheerio.load('<h1 class="aaa"><p>123</p><h1>')
        const $ = cheerio.load(data)
        var src = $('.c-openVip').text()
        console.log("src",src)
        fs.writeFile('html.txt', JSON.stringify(data), (err) => {
            if (err) throw err;
            console.log('文件已被保存');
        });
    })
 
// 获取视频 url
var getVideoUrl = function() {
 
}
 
// 下载视频
var downloadVideo = function() {
 
}