<template>
<body>
    <div class="background-container">
        <div class="white-container"></div>
        <img class="background-image" src="ctubg.png" alt="">
        <div class="login-container">
            <p class="header-login">LOGIN</p>
            <p class="header-register">Not yet registered?</p>
            <a href="#" class="header-register2">Create an account now</a>
            <a href="#" class="header-forgot">Forgot password?</a>
            <img src="email.png" class="email-icon">
            <img src="password.png" class="password-icon">
         <div class="username-container">
                <label for="inputEmail" class="form-labeluser">Email</label>
                <input id="inputEmail" class="form-control" type="email">
            </div>
            <div class="password-container">
               <label for="inputPassword" class="form-labelpass">Password</label>
              <input id="inputPassword" class="form-control" type="password">
          </div>
          <div class="checkboxremember-container">
             <input id="checkboxRemember" class="form-check-input"  type="checkbox">
              <label for="checkboxRemember" class="form-label">Remember me</label>
          </div>
          <div class="buttonlogin-container">
            <NuxtLink to="/Home">
                <button type="submit" class="button-login">LOGIN</button>
            </NuxtLink>
          </div>
     </div>
    </div>
</body>
</template>

<script>
export default {
    name: 'DefaultPage',
}
</script>

<style>
    .body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        border: 0;
    }

    .header-login {
        font-size: 25px;
        position: fixed;
        font-weight: bold;
        margin-left: 200px;
        margin-top: 20px;
        opacity: 0.9;
    }

    .header-register {
        font-size: 13px;
        position: fixed;
        margin-left: 110px;
        margin-top: 310px;
        opacity: 0.5;
    }

    .header-register2 {
        font-size: 13px;
        position: fixed;
        margin-left: 223px;
        margin-top: 310px;
        opacity: 0.5;
        text-decoration: underline;
    }

    .header-forgot {
        font-size: 13px;
        position: fixed;
        margin-left: 300px;
        margin-top: 180px;
        opacity: 0.5;
        text-decoration: underline;
    }

    .email-icon {
        position: fixed;
        margin-top: 90px;
        margin-left: 43px;
        height: 22px;
        width: 27px;
        opacity: 0.5;
    }

    .password-icon {
        position: fixed;
        margin-top: 135px;
        margin-left: 43px;
        height: 22px;
        width: 27px;
        opacity: 0.4;
    }

    .white-container {
        height: 100%;
        width: 40%;
        background-color: #F5F5F5;
        z-index: 3;
        position: fixed;
    }

    .background-image {
        background-size: cover;
        position: fixed;
        margin-left: -260px;
        margin-top: -280px;
        opacity: 0.6;
        transform: scale(1);
        transition: all .6s ease-in-out;
        filter: brightness(60%);
    }

    .background-image:hover {
        opacity: 0.6;
        transform: scale(1.1);
    }

    .form-labeluser {
        margin-top: 10px;
        position: fixed;
        margin-left: -140px;
    }

    .form-labelpass {
        position: fixed;
        margin-top: 10px;
        margin-left: -140px;
    }

    .form-label {
        font-weight: bold;
        color: #ACACAC;
    }

    .form-control {
        border: 0;
        background-color: #DFDFDF; 
    }

    .login-container {
        margin-left: 45px;
        margin-top: 180px;
        height: 350px;
        width: 450px;
        background-color: white; 
        transition: all .1s ease-in-out;
        opacity: 0.9;
        overflow: hidden;
        position: fixed;
        z-index: 3;
        box-shadow: 5px 5px 5px rgb(0 0 0 / 30%);
    }

    .username-container {
        margin-left: auto;
        margin-right: auto;
        width: 400px;
        text-align: center;
        margin-top: 80px;
        font-size: 15px;
        font-weight: bold;
        color: #ACACAC;
        background-color: #DFDFDF;
    }

    .password-container {
        margin-left: auto;
        margin-right: auto;
        width: 400px;
        text-align: center;
        margin-top: 10px;
        font-size: 15px;
        font-weight: bold;
        color: #ACACAC;
        background-color: #DFDFDF;
    }

    .checkboxremember-container {
        margin-left: 50px;
        margin-top: 15px;
        font-family: 'Times New Roman', Times, serif;
        color: black;
        border: 0;
        font-size: 13px;
        text-align: left;
    }

    .form-check-input {
        height: 20px;
        width: 15px;
        margin-top: -1px;
    }

    .buttonlogin-container {
        margin-left: auto;
        margin-right: auto;
        width: 400px;
        text-align: center;
    }

    .button-login {
        text-align: center;
        border: 0;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        width: 400px;
        height: 45px;
        transition: all .1s ease-in-out;
        font-weight: bold;
        color: white;
        background-color: #FF8300;
    }

    .button-login:hover {
        opacity: 0.8;
        background-color: #FF8300;
    }

</style>
