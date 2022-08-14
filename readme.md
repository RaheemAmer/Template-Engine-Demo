# Template Engine Introduction

Building a simple template engine demo using ejs and express.js

## Introduction

Template engines are used when you want to rapidly build web applications that are split into different components. Templates also enable fast rendering of the server-side data that needs to be passed to the application.

For example, you might want to have components such as body, navigation, footer, dashboard, etc.

### Popular template engines

Template engines are mostly used for server-side applications that are run on only one server and are not built as APIs. The popular ones include Ejs, Jade, Pug, Mustache, HandlebarsJS, Jinja2, and Blade.

#### How template engines work

When you build a server-side application with a template engine, the template engine replaces the variables in a template file with actual values, and displays this value to the client. This makes it easier to quickly build our application.

##### Example with expressJS and ejs template engine

- Step 1: Install express and the ejs template engine
<pre>npm install express ejs</pre>
- Step 2: Set up the view engine
<pre>
const express = require("express")
const app = express();

// Set the View Engine or Template Engine
app.set('view engine', 'ejs');

app.listen(3000)
</pre>
- Step 3: Set up the view folder
<pre>
index.js
>view
   index.ejs
   user.ejs
</pre>
- Step 4: Set up the routes
<pre>
app.get('/', function (req, res) {
  res.render("index");
})
 
app.get("/user", function(req,res){
  const user = {
    name: "Raheem Amer",
    stack: "MERN",
    email: "example@gmail.com",
    hubby: ["Music", "Football", "Reading", "Programming"]
  }
  res.render("user", {user});
})
</pre>
- Step 5: Templating the view files
Now that we have passed user data from server-side, we need to display it right away on our frontend or webpage.