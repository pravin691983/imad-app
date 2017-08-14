var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title : 'First article | Pravin Tawade',
    heading : 'First article',
    date : '4th Aug 2017',
    content : `
        <p>
            This is first page content ...!!!
        </p>
        `
};

function createHtmlTemplate(data) {
    
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlContent = `
    <html>
    	<head>
    		<title>${title}</title>
    	</head>
    	<body>
    		<div class='Container'>
    		    <div>
    		        <a href="/">Home</a>
                </div>
                <hr/>
            
    	        <div>
    			    <h1>${heading}</h1>
                </div>
                
                <div>
    			    <p>${date}</p>
                </div>
                
                <div>
    			    <p>${content}</p>
                </div>
                
            </div>
            
    	</body>
    </html>
    `
    ;
    
    return htmlContent;
}

app.get('/article-one', function(req, res) {
    res.send(createHtmlTemplate(articleOne))
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
