<html>
<head>
	<title>Chatter</title>
</head>
<h1 align="center">Welcome to Chatter</h1>
<div align = "center" >
	<%if(req.getAttribute("error"))%><h2>Auth Error!</h2><%;%>
<form method="POST" action="Login">
	<p>User:</p><input name="username" type="text" /><br />
	<p>Pass:</p><input name="password" type="password" /><br />
	<input type="submit">
</form>
</div>
</html>