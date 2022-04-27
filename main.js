const url = "http://localhost:5500/api"

const newUser = {
    name: "Rebecca Morrison",
    avatar: "https://source.unsplash.com/random",
    city: "Valinhos"
}

function getUsers() {
    axios.get(url)
        .then(response => {
            apiResult.textContent = JSON.stringify(response.data)
        })
        .catch(error => console.error(error))    
}

function addNewUser() {
    axios.post(url, newUser)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.error(error))
}

function getUser(id){
    axios.get(`${url}/${id}`)
        .then(response => {
            const data = response.data
            userName.textContent = data.name
            userCity.textContent = data.city
            userID.textContent = data.id
            userAvatar.src = data.avatar
        })
        .catch(error => console.error(error))
}

getUsers()
getUser(3)
//addNewUser(newUser)