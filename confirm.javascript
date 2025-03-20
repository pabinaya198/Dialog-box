<html>
<head><title>message</title>
<script type="text/JavaScript">
function display()
{
 var r=confirm("press a button");
 if(r==true)
{
 document. Write("you pressed OK");
}
else
{
 document. Write("you pressed cancel");
}
}
</script>
<body>
<input type="button" onclick="display()" value="display a confirm box">
</body>
</html>

