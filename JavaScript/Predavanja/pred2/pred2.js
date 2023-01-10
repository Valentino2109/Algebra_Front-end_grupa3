var dobro = "1234567890";
var lose = "1123456";
var nemaDuplih = function (password) {
    if (!password || password.length === 1){
        return true;
    }

    for (var i = 0; i < password.length; i++) {
        var znak = password[i];
        for (var j = i+1; j < password.length; j++) {
            var znakDrugi = password[i];
            if (znak === znakDrugi) {
                return false;
            }
        }
    }

   return true;
  }

 

  nemaDuplih(dobro);  //true
  nemaDuplih(lose);   //false