document.getElementById('submit').addEventListener('click', function(){

    const emailFieldo = document.getElementById('email')
    const emaile = emailFieldo.value;
    
    const passcordo = document.getElementById('pass')
    const passe = passcordo.value;
    
    if(emaile === 'richcat@gmail.com' && passe === 'cat010'){
        console.log('user info valid');
        window.location.href = 'index-3.html';
    }
    else{
        alert('invalid! hey rich kid please put valid info!😎🔪');
    }
    
    })