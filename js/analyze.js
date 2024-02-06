// 載入 Google 翻譯 API
function onLoad() {
    gapi.load('client', initTranslate);
}

// 初始化 Google 翻譯 API 客戶端
function initTranslate() {
    gapi.client.init({
        'apiKey': 'AIzaSyDh4AqzXWVVGMbUMLtfC5d6cTjM5YXD6pQ',
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/translate/v2/rest'],
    }).then(function () {
        console.log('Google 翻譯 API 客戶端已初始化');
    });
}

// 翻譯文字
function translateText(text) {
    //const inputText = document.getElementById('inputText').value;

    // 使用 Google 翻譯 API
    gapi.client.language.translations.list({
        q: text,
        source: 'en', // 源語言（這裡使用英文）
        target: 'zh-TW' // 目標語言（這裡使用中文繁體）
    }).then(function (response) {
        const translatedText = response.result.data.translations[0].translatedText;
        //document.getElementById('outputText').innerText = translatedText;
        console.log(translatedText)
        analyze(translatedText);
    }, function (reason) {
        console.error('翻譯失敗：', reason);
    });
}

function analyze(text) {
    _custom_dict = arr_word;
    let happy_score = 0;
    let anger_score = 0;
    let sad_score = 0;
    let fear_score = 0;
    let score = [];
    let score_max;
    call_jieba_cut(text, _custom_dict, function (_result) {
        console.log(_result);
        //console.log(_custom_dict);
        for (let i = 0; i < _result.length; i++) {
            for (let j = 0; j < arr_word.length; j++) {
                if (_result[i] === arr_word[j][0]) {
                    console.log(arr_word[j]);
                    if (arr_word[j][3] === "喜") {
                        if (i != 0) {
                            if (_result[i - 1] === "不" || _result[i - 1] === "沒有") {
                                sad_score += arr_word[j][4];
                            }
                            else {
                                happy_score += arr_word[j][4];
                            }
                        }
                        else {
                            happy_score += arr_word[i][4];
                        }
                    }
                    else if (arr_word[j][3] === "怒") {
                        if (i != 0) {
                            if (_result[i - 1] === "不" || _result[i - 1] === "沒有") {
                                happy_score += arr_word[j][4];
                            }
                            else {
                                anger_score += arr_word[j][4];
                            }
                        }
                        else {
                            anger_score += arr_word[i][4];
                        }
                    }
                    else if (arr_word[j][3] === "哀") {
                        if (i != 0) {
                            if (_result[i - 1] === "不" || _result[i - 1] === "沒有") {
                                happy_score += arr_word[j][4];
                            }
                            else {
                                sad_score += arr_word[j][4];
                            }
                        }
                        else {
                            sad_score += arr_word[j][4];
                        }
                    }
                    else if (arr_word[j][3] === "懼") {
                        if (i != 0) {
                            if (_result[i - 1] === "不" || _result[i - 1] === "沒有") {
                                happy_score += arr_word[j][4];
                            }
                            else {
                                fear_score += arr_word[j][4];
                            }
                        }
                        else {
                            fear_score += arr_word[j][4];
                        }
                    }
                }
            }
        }
        console.log("喜：" + happy_score);
        console.log("怒：" + anger_score);
        console.log("哀：" + sad_score);
        console.log("懼：" + fear_score);
        score[0] = happy_score;
        score[1] = anger_score;
        score[2] = sad_score;
        score[3] = fear_score;
        console.log(score);
        console.log(Math.max(...score));
        score_max = Math.max(...score);
        console.log(score_max);
        for (let i = 0; i < score.length; i++) {
            if (happy_score == 0 && anger_score == 0 && sad_score == 0 && fear_score == 0) {
                $("#videoPlay").attr("src", "video/happy.mp4?" + Math.random());
            }
            else {
                if (score[i] == score_max) {
                    switch (i) {
                        case 0: {
                            console.log('happy');
                            $("#videoPlay").attr("src", "video/happy.mp4?" + Math.random());
                            break;
                        }
                        case 1: {
                            console.log('anger');
                            $("#videoPlay").attr("src", "video/angry.mp4?" + Math.random());
                            break;
                        }
                        case 2: {
                            console.log('sad');
                            $("#videoPlay").attr("src", "video/sad.mp4?" + Math.random());
                            break;
                        }
                        case 3: {
                            console.log('fear');
                            $("#videoPlay").attr("src", "video/horrible.mp4?" + Math.random());
                            break;
                        }
                        default: {
                            $("#videoPlay").attr("src", "video/happy.mp4?" + Math.random());
                        }
                    }
                }
            }
        }
    });
}

// 在窗口載入時初始化 Google 翻譯 API
window.onload = onLoad;

// 创建语音辨識对象
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

// 设置一些辨識选项
recognition.lang = 'en'; // 设置识别语言
recognition.continuous = true; // 设置连续识别

function start() {
    recognition.start();
    console.log("OK");
}
recognition.onstart = function () {
    console.log("start");
}
function end() {
    recognition.stop();
    console.log("endOK");
}
recognition.onend = function () {
    console.log("end");
}

// 监听语音辨識结果
recognition.onresult = (event) => {
    console.log(event.results[0][0].transcript);
    if(event.results[0][0].transcrip === ""){
        console.log('no text')
    }
    else{
        console.log('have text');
        result = event.results[event.results.length - 1][0].transcript;
    console.log(result);
    }
    // result = event.results[event.results.length - 1][0].transcript;
    // console.log(result);
    // if(result === ' '){
    //     console.log('fail');
    //     // alert('record fail')
    //     window.location.reload();
    // }
    //translateText(result);
};

recognition.onnomatch = () => {
    console.log('no text');
}

// 处理错误
recognition.onerror = (event) => {
    console.error('语音识别错误', event.error);
};


