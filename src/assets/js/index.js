function submit(){
				if(check()){
					var url = "https://openapi.xiaobaoxiu.cn/mock/api/v1/login";
					login(url,document.getElementsByName("username")[0].value,document.getElementsByName("password")[0].value);
				}
				
			}
			
			function login(url,username,pwd){
				var obj = new Object();
				obj.name = username;
				obj.password = pwd;
				 fetch(url,{
					method:'POST',
					body:JSON.stringify(obj),
					headers:{
						'Content-type':'application/json'
					}
				}).then(function(response){
					return response.json();
				})
				.then(function(data){
					var obj = data;
					if(obj.success == true){
						document.getElementsByClassName("content-body-right-title")[0].innerHTML = "欢迎你，"+obj.user.name;
						document.getElementById("content-form").style.cssText = "display:none";
					}else{ 
						document.getElementsByName("passwordError")[0].innerHTML = "用户名或密码错误";
					}
				}) 			
			}
			function check(){
				var username = document.getElementsByName("username")[0].value;
				var password = document.getElementsByName("password")[0].value;
				var flag = true;
				if(username.length < 1 ){
					 document.getElementsByName("username")[0].style.cssText = "border-bottom: 1px solid red;";
					 document.getElementsByName("usernameError")[0].innerHTML = "用户名不能为空"
					 flag  = false;
				}else{
					document.getElementsByName("username")[0].style.cssText = "border-bottom: 1px solid #CCC;";
					document.getElementsByName("usernameError")[0].innerHTML = ""
				}
				if(password.length < 1 ){
					 document.getElementsByName("password")[0].style.cssText = "border-bottom: 1px solid red;";
					 document.getElementsByName("passwordError")[0].innerHTML = "密码不能为空";
					 flag = false;
				}else{
					document.getElementsByName("password")[0].style.cssText = "border-bottom: 1px solid #CCC;";
					document.getElementsByName("passwordError")[0].innerHTML = ""
				}
				return flag;
			}