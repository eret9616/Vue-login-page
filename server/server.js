const http = require('http')
const querystring = require('querystring')


//使用的假数据
const mock = {
    username: 13718286685,
    password: 135246
}

const server = http.createServer((req, res) => {

    if (req.url == '/login') {


        //#region
        //Node.js中Post请求以流来处理
        var data = "";

        req.on('data', (chunk) => {
            data += chunk;
        });

        req.on('end', (chunk) => {
            data = data.toString();
            var dataObj = querystring.parse(data, null, null)

            // console.log(dataObj);

            res.writeHead(200, { 'Content-type': 'text/html;charset=UTF-8' })

            if (dataObj.username === mock.username && dataObj.password === mock.password) {
                res.end(`<h1>登陆成功</h1>`)
            }
            else {
                res.end(`<h1>登录失败</h1>`)
            }


        })

        //#endregion

    }
})


server.listen(3000, () => { console.log('server is running at port 3000') })