//FETCH
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('register').addEventListener("submit", function(evt) {
        evt.preventDefault();
        //Capture data of the form
        Data('/login', {userGithub: document.getElementById('user-github').value,email : document.getElementById('passcode').value})
            .then(result => { 
                const tbody = document.querySelector('tbody');
                const hidden = document.querySelector('div.row');
                tbody.innerHTML = '';
                for(let user of result){
                    tbody.innerHTML +=`
                    <tr>
                      <td class="text-center">${user.userGithub}</td>
                      <td class="text-center">${user.email}</td>
                    </tr>`
                }
                hidden.classList.remove("hidden");
            }).catch((err) => {
                console.log(err)
            })
            document.getElementById('user-github').value = '';
            document.getElementById('passcode').value = '';
        
        //Function to send the data to API 
        async function Data(url = '', data = {}) {
            const response = await fetch(url, {
                method: 'POST', 
                mode: 'cors', 
                cache: 'no-cache', 
                credentials: 'same-origin', 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data) 
            });
            return response.json();
        }
    });
});

