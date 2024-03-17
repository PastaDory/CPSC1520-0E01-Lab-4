(function () {
    let newUsersList = document.querySelector('.new-users-list');
    let newUserForm = document.querySelector('.new-user-form');

    
    newUserForm.addEventListener('submit', function(event) {
        
        event.preventDefault();
        
        
        const usernameElement = event.target.elements.username;
        const cityElement = event.target.elements.city;
        const provinceElement = event.target.elements.province;

    
        const username = usernameElement.value;
        const city = cityElement.value;
        const province = provinceElement.value;

        console.log('Username:', username);
        console.log('City:', city);
        console.log('Province:', province);

      
        if (isValueNotEmpty(username) && !hasWhiteSpace(username)) {
            
            usernameElement.classList.remove('is-invalid');
        } else {
         
            isFormValid = false;
            
            usernameElement.classList.add('is-invalid');
        }

        
        if (isValueNotEmpty(city)) {
            
            cityElement.classList.remove('is-invalid');
        } else {
            
            isFormValid = false;
         
            cityElement.classList.add('is-invalid');
        }

        
        if (isValueNotEmpty(province)) {
         
            provinceElement.classList.remove('is-invalid');
        } else {
         
            isFormValid = false;
        
            provinceElement.classList.add('is-invalid');
        }

       
        if (isFormValid) {
            addUser(username, city, province);
        }
    });

 
    function isValueNotEmpty(value) {
        if (value !== '') {
            return true;
        }
        return false;
    }

  
    function hasWhiteSpace(s) {
        return (/\s/).test(s);
    }

    function addUser(username, city, province) {
        let newUser = `<li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${username}</div>
                ${city}, ${province}
            </div>
            </li>`;
        newUsersList.innerHTML = newUsersList.innerHTML + newUser;
    }
})();
