// # SimpleServer
// A simple chat bot server

var logger = require('morgan');
var http = require('http');
var bodyParser = require('body-parser');
var express = require('express');
var request = require('request');
//var dictionary = require('./dictionary');
var router = express();
var _constants = require('./constants');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
var server = http.createServer(app);
var waitTime1;
var waitTime2;
var waitTime3;


var SetIntervalWaitTime = sendId => {
  if(waitTime1) clearTimeout(waitTime1);
  if(waitTime2) clearTimeout(waitTime2);
  if(waitTime3) clearTimeout(waitTime3);
  // start interval
  waitTime1 = setTimeout(() => {checkSendMessage(sendId, _constants.staticString.TEXT_NOTIFY_REMIND_FIRST_TIME); }, 15000);
  waitTime2 = setTimeout(() => { checkSendMessage(sendId, _constants.staticString.TEXT_NOTIFY_REMIND_SECOND_TIME); },30000);
  waitTime3 = setTimeout(() => { checkSendMessage(sendId, _constants.staticString.TEXT_NOTIFY_END_TIME); }, 40000);
};

var checkSendMessage = (sendId, meassage) => {
  sendTextMessage(sendId,meassage);
};
// greeting 
var greeting = () => {
  request({
    url: "https://graph.facebook.com/v2.6/me/messenger_profile",
    qs: {
      access_token: _constants.staticString.PAGE_ACCESS_TOKEN,
    },
    method: 'POST',
    json: {
      greeting:[
        {
          locale:"default",
          text:"Xin chào {{user_full_name}}, tôi là chatbot của VNM. Rất vui được hỗ trợ bạn"
        }, {
          locale:"en_US",
          text:"Hello {{user_full_name}}, i'm VNM's Chatbot"
        }
      ],
      get_started:{
        payload:"Bắt đầu"
      },
      persistent_menu:[
        {
          locale:"default",
          composer_input_disabled: false,
          call_to_actions:[
          {
            title:"SIM",
            type:"nested",
            call_to_actions:[
              {
                title:"BOM SIM",
                type:"postback",
                payload:"BOM SIM"
              },
              {
                title:"Siêu thánh SIM",
                type:"postback",
                payload:"Siêu thánh SIM"
              },
              {
                title:"THÁNH 2",
                type:"postback",
                payload:"THÁNH 2"
              },
              {
                title:"SIM SV2017",
                type:"postback",
                payload:"SIM SV2017"
              },
              {
                title:"THÁNH SIM",
                type:"postback",
                payload:"THÁNH SIM"
              }
            ]
          },
          {
            title:"Dịch vụ khác",
            type:"nested",
            call_to_actions:[
              {
                title:"VAS",
                type:"postback",
                payload:"VAS"
              },
              {
                title:"Dữ liệu",
                type:"postback",
                payload:"Dữ liệu"
              },
              {
                title:"DV quốc tế",
                type:"postback",
                payload:"DV quốc tế"
              }
            ]
          }
        ]
        }
      ]
    }
  });
};


// Send text message
var sendTextMessage = (senderId, message) => {
  request({
    url: _constants.staticString.PAGE_API_LINK,
    qs: {
      access_token: _constants.staticString.PAGE_ACCESS_TOKEN,
    },
    method: 'POST',
    json: {
      "recipient": {
        "id": senderId
      },
      "message": {
        "text": message
      },
    }
  });
};

// Send list message
var sendListMessage = (senderId, message) => {
  request({
    url: _constants.staticString.PAGE_API_LINK,
    qs: {
      access_token: _constants.staticString.PAGE_ACCESS_TOKEN,
    },
    method: 'POST',
    json: {
      recipient: {
        id: senderId
      },
      message: {
        text: message
      },
    }
  });
};

// Send Button message
var sendButtonMessage = senderId => {
  request({
    url: _constants.staticString.PAGE_API_LINK,
    qs: {
      access_token: _constants.staticString.PAGE_ACCESS_TOKEN,
    },
    method: 'POST',
    json: {
      recipient: {
        id: senderId
      },
      message:{
        attachment:{
          type:"template",
          payload:{
            template_type:"button",
            text:"Bạn cần kết nối tới điệ thoại viên ?",
            buttons:[
              {
                type:"web_url",
                url:"https://www.messenger.com",
                title:"Kết nối ngay",
                webview_height_ratio: "full"
              }
            ]
          }
        }
      }
    }
  });
};


// Send Quick Reply
var sendQuickReplyMessage = senderId => {
  request({
    url: _constants.staticString.PAGE_API_LINK,
    qs: {
      access_token: _constants.staticString.PAGE_ACCESS_TOKEN,
    },
    method: 'POST',
    json: {
      recipient: {
        id: senderId
      },
      message:{
        text: "Here is a quick reply!",
        quick_replies:[
          {
            content_type:"text",
            title:"Search",
            payload:"<POSTBACK_PAYLOAD>"
          },
           {
            content_type:"text",
            title:"Câu hỏi thường gặp 1",
            payload:"<POSTBACK_PAYLOAD>"
          },
           {
            content_type:"text",
            title:"Câu hỏi thường gặp 2",
            payload:"<POSTBACK_PAYLOAD>"
          }
        ]
      }
        
    }
  });
};


//Send typing

var sendTypingMessage = senderId => {
  request({
    url: _constants.staticString.PAGE_API_LINK,
    qs: {
      access_token: _constants.staticString.PAGE_ACCESS_TOKEN,
    },
    method: 'POST',
    json: {
      recipient: {
        id: senderId
      },
      sender_action:"typing_on"
    }
  });
};


// send list template
var sendListTemplate = (senderId,listQA) => {
  request({
    url: _constants.staticString.PAGE_API_LINK,
    qs: {
      access_token: _constants.staticString.PAGE_ACCESS_TOKEN,
    },
    method: 'POST',
    json: {
      "recipient":{
        "id":senderId
      }, 
      "message":{
        "attachment":{
          "type":"template",
          "payload":{
            "template_type":"generic",
            "image_aspect_ratio": "horizontal",
            "elements": listQA
          }
        }
      }
    }
  },(error, response, body) => {
    if (error) {
        console.log('Error sending messages: ', error);
    } else if (response.body.error) {
        console.log('Error: ', response.body.error);
    }
  });
};

var getRandomQuestionArry = (arr, qty) => {
  let _arr = [], _rs = [];
  while(_arr.length < qty){
    let _ran = Math.floor(Math.random()*arr.length);
    if(!_arr.includes(_ran)){
      _arr.push(_ran);
      _rs.push(arr[_ran]);
    }
  }
  return _rs;
};



app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || _constants.PORT);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || process.env.IP || _constants.IP);

server.listen(app.get('port'), app.get('ip'), function() {
  console.log("Chat bot server listening at %s:%d ", app.get('ip'), app.get('port'));
});

app.get('/', (req, res) => {
  res.send("Home page. Server running okay.");
});

app.get('/webhook', function(req, res) {
  if (req.query['hub.verify_token'] === 'chatbot_vnm_ghd') {
    res.send(req.query['hub.challenge']);
  }
  res.send('Error, wrong validation token');
});

// Setup getting for fanpage
greeting();

// Xử lý khi có người nhắn tin cho bot
app.post('/webhook', function(req, res) {
  //set current time
  let _hasMsg = false;
  
  if(req.body.entry && req.body.entry.length > 0){
    req.body.entry.forEach(obj => {
      if(obj.messaging && obj.messaging.length > 0 && obj.messaging[0].message && obj.messaging[0].message.text){
        let _msg = obj.messaging[0];
        _hasMsg = true;
        // start counting wait time
        SetIntervalWaitTime(_msg.sender.id);
        //check nếu input user nhập nằm trong các từ khóa (AI dictionary)
        //let _rsMatch = _constants.dictionaryAI.filter(x => x.keyword.includes(_msg.message.text.trim()));
        let _questions = _constants.dictionaryAI.filter(x => x.keyword.includes(_msg.message.text.trim().toLocaleLowerCase()));
        if(_questions && _questions.length > 0){
          let _quesTitles = _questions.map(o => {return o.question});
          let _rs = _constants.questions.filter(x => _quesTitles.includes(x.title));
          if(_rs && _rs.length > 0){
            //send typing on
            sendTypingMessage(_msg.sender.id);
            //excute reply after 2s
            setTimeout(() => {
              sendTextMessage(_msg.sender.id,_constants.staticString.TEXT_SUGGESTION);
              sendListTemplate(_msg.sender.id,_rs);
            }, 2000);
          } 
        } else {
          sendTypingMessage(_msg.sender.id);
          //excute reply after 2s
          setTimeout(() => {
            sendTextMessage(_msg.sender.id,_constants.staticString.TEXT_INPUT_ERROR);
            sendListTemplate(_msg.sender.id,getRandomQuestionArry(_constants.questions,9));
            sendButtonMessage(_msg.sender.id);
          }, 2000);

        }
        
      }
    });
  }

  if(!_hasMsg && req.body.entry && req.body.entry[0] 
  && req.body.entry[0].messaging && req.body.entry[0].messaging.length > 0 && req.body.entry[0].messaging[0] 
  && req.body.entry[0].messaging[0].postback){
    //check cos question_id trong payload không
    //question_id trong payload dùng để phân biệt giữ payload của việc xem chi tiết câu hoi (có question_id) và việc chọn từ persistend menu (không có question_id)
    
    if(req.body.entry[0].messaging[0].postback.payload.includes("question_id")){
      // start counting wait time
      SetIntervalWaitTime(req.body.entry[0].messaging[0].sender.id);
      let _payload = JSON.parse(req.body.entry[0].messaging[0].postback.payload);
      if(_payload && _payload.question_id){
        let _rsMatch = _constants.dictionaryAI.filter(x => x.question_id == _payload.question_id);
        
        if(_rsMatch && _rsMatch.length > 0){
          //send typing on
          sendTypingMessage(req.body.entry[0].messaging[0].sender.id);
          //excute reply after 2s
          setTimeout(() => {
            sendTextMessage(req.body.entry[0].messaging[0].sender.id,_rsMatch[0].answer);
          }, 2000);
        } 
     
      }
    } else {
      let _payload = req.body.entry[0].messaging[0].postback.payload;
      
      if(_payload ==="Bắt đầu"){
        //Get started
        //send typing on
        sendTypingMessage(req.body.entry[0].messaging[0].sender.id);
        //excute reply after 2s
        //send welcome
        setTimeout(() => {
          sendTextMessage(req.body.entry[0].messaging[0].sender.id,_constants.staticString.TEXT_WELCOME);
        }, 1000);
        //send list cau hoi thuong gap
        setTimeout(() => {
          sendListTemplate(req.body.entry[0].messaging[0].sender.id,getRandomQuestionArry(_constants.questions,9));
          //sendListTemplate(req.body.entry[0].messaging[0].sender.id, _constants.questions);
        }, 2000);
      } else {
        // start counting wait time
        SetIntervalWaitTime(req.body.entry[0].messaging[0].sender.id);
        //payload từ persistent menu
        //send typing on
        sendTypingMessage(req.body.entry[0].messaging[0].sender.id);
        //lay ra danh sach những câu hỏi liên qua tới menu vừa chọn từ dictionaryAI
        
        let _dicts = _constants.dictionaryAI.filter(x => x.sim_type == _payload.trim());
        
        if(_dicts && _dicts.length > 0){
          let _dictTitles = _dicts.map(o => {return o.question});
          let _questions = _constants.questions.filter(x => _dictTitles.includes(x.title));
          if(_questions){
            sendListTemplate(req.body.entry[0].messaging[0].sender.id, _questions);
          }
        }
      }
      
      
      
    }
    
    
    
    
    // switch(_payload){
    //   case 'Bắt đầu':
    //     console.log("Tình đầu ở đây");
    //     sendTextMessage(req.body.entry[0].messaging[0].sender.id, _constants.dictionaryAI[0].answer);
    //     setTimeout(() => {
    //       sendListTemplate(req.body.entry[0].messaging[0].sender.id, _constants.questions);
    //     }, 2000);  
    //     break;
    //     default:
    //     //check nếu input user nhập nằm trong các từ khóa (AI dictionary)
    //     let _rsMatch = _constants.dictionaryAI.filter(x => x.keyword.question_id = _payload.trim());
    //     if(_rsMatch && _rsMatch.length > 0){
    //       //send typing on
    //       sendTypingMessage(req.body.entry[0].messaging[0].sender.id);
    //       //excute reply after 2s
    //       setTimeout(() => {
    //         sendTextMessage(req.body.entry[0].messaging[0].sender.id,_rsMatch[0].answer);
    //       }, 2000);
    //     } 
    //     break;
      
    // }
    
  }


  res.status(200).send("OK");
});