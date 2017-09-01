var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// 네이버 Papago NMT API 예제
var client_id = '';
var client_secret = '';
// var query = "とりあえず終わる見込みがあり作業工数が発生しているものはStage設定済み（見積もり対象月の設定）。下記レポートはStageなし（見積もり予定がまだ立っていないもの）の一覧ですので共有させていただきます。";
router.get('/translate', function (req, res) {
  console.log(req.query.text);
  var api_url = 'https://openapi.naver.com/v1/language/translate';
  var request = require('request');
  var options = {
    url: api_url,
    form: {'source':'ko', 'target':'ja', 'text':req.query.text},
    headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
  };
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      // console.log(JSON.stringify(body));
      //   res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
      res.end(JSON.stringify(body));
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });
});

module.exports = router;
