if (localStorage.getItem("dataPasswords") == null) {
    localStorage.setItem("dataPasswords", JSON.stringify({data: []}))
}

var dataPasswords = JSON.parse(localStorage.getItem("dataPasswords"))
var lastIdUsed = dataPasswords.data.length

const siteToAdd = document.getElementById("siteToAdd-input")
const passwordToAdd = document.getElementById("passwordToAdd-input")

const addButton = document.getElementById("addPassword-button")
const placeToAddPasswords = document.getElementById("placeToAddPasswords-tbody")

const buttonRemoveAll = document.getElementById("removePasswords")

// reloading the previous passwords
dataPasswords.data.forEach(elem => {
    placeToAddPasswords.innerHTML += `
    <tr id="password${elem.id}-tr">
    <td style="vertical-align:middle;">${elem.site}</td>
    <td style="vertical-align:middle;">${elem.password}</td>
    <td></td>
    </tr>  
    `
    /*
    <td style="text-align:center;">
        <button class="btn" style="background-color:rgb(255, 0, 0); color: white; padding: 3px; opacity: 50%;" id="removePasswordid${elem.id}-button">Borrar</button>
    </td>
    */

    /*
    console.log("b", document.getElementById(`removePasswordid${elem.id}-button`))

    document.getElementById(`removePasswordid${elem.id}-button`).addEventListener("click", () => {
        
        document.log("a")

        document.getElementById(`password${elem.id}-tr`).display="none"
        let _dataPasswords = JSON.parse(localStorage.getItem("dataPasswords"))
        _dataPasswords.data = _dataPasswords.data.filter(
           _elem => _elem.id != elem.id
        )
    })
    */
});


addButton.addEventListener("click", () => {

    placeToAddPasswords.innerHTML += `
    <tr>
    <td style="vertical-align:middle;">${siteToAdd.value}</td>
    <td style="vertical-align:middle;">${passwordToAdd.value}</td>
    <td></td>
    </tr>    
    `

    /*
    placeToAddPasswords.innerHTML += `
    <tr>
    <td style="vertical-align:middle;">${siteToAdd.value}</td>
    <td style="vertical-align:middle;">${passwordToAdd.value}</td>
    <td style="text-align:center;">
        <button class="btn" style="background-color:rgb(255, 0, 0); color: white; padding: 3px; opacity: 50%;" id="removePasswordid${lastIdUsed}-button">Borrar</button>
    </td>
    </tr>    
    `
    */

    let newPassword = {
        id:lastIdUsed, site:siteToAdd.value, password:passwordToAdd.value
    }
    dataPasswords.data[lastIdUsed] = newPassword

    lastIdUsed++; 

    localStorage.setItem("lastIdPasswordsSaved", `${lastIdUsed}`)    
    localStorage.setItem("dataPasswords", JSON.stringify(dataPasswords))

    siteToAdd.value = ""
    passwordToAdd.value = ""
})

buttonRemoveAll.addEventListener("click", () => {

    placeToAddPasswords.innerHTML = ""
    localStorage.setItem("dataPasswords", JSON.stringify({data: []}))

    siteToAdd.value = ""
    passwordToAdd.value = ""
})