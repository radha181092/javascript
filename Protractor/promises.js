

var isMomHappy = false;

var willGetNewPhone = new Promise(
    
    function (resolve, reject){
        if (isMomHappy) {
            var phone = {
                brand : 'Apple',
                color : 'golden',
                model : '10x'
            };
            resolve(phone);
            
        } else {
            var reason = new Error('Mom is not happy');
            reject(reason);
            
        }
    }

);