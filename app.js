var superagent = require('superagent');
var cheerio = require('cheerio');
var fs = require('fs');
 
var url = 'https://coding.imooc.com/class/326.html?mc_marking=c5a3de541d57c8b0f8adb42c41479892&mc_channel=syb11'
var savePath = '保存文件路径'
 
superagent
    .get(url)
    .end(function(err, res) {
 
    })
 
// 获取视频 url
var getVideoUrl = function() {
 
}
 
// 下载视频
var downloadVideo = function() {
 
}