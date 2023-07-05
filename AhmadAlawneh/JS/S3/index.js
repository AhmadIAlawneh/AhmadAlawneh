async function getUserInfo() {
    const idInput = document.getElementById("user-idInput");
    const name = document.getElementById("name");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const city = document.getElementById("city");
    const street = document.getElementById("street");
    const zipcode = document.getElementById("zipcode");
    const result = document.getElementById("user-result");

    const userId = idInput.value;

    if (!userId) {
        alert("ID is empty!");
        return;
    }

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();

        if (response.ok) {
            name.textContent = data.name;
            username.textContent = data.username;
            email.textContent = data.email;
            city.textContent = data.address.city;
            street.textContent = data.address.street;
            zipcode.textContent = data.address.zipcode;
            result.textContent = "User found";
            result.style.color = "green";
        } else {
            result.textContent = "User Not Found";
            result.style.color = "red";
        }
    } catch (error) {
        result.textContent = "Error";
        result.className = "error";
    }
}

function resetUserFields() {
    document.getElementById("user-idInput").value = "";
    document.getElementById("name").textContent = "";
    document.getElementById("username").textContent = "";
    document.getElementById("email").textContent = "";
    document.getElementById("city").textContent = "";
    document.getElementById("street").textContent = "";
    document.getElementById("zipcode").textContent = "";
    document.getElementById("user-result").textContent = "";
}

async function getImageInfo() {
    const idInput = document.getElementById("image-idInput");
    const albumId = document.getElementById("albumId");
    const image = document.getElementById("image");
    const result = document.getElementById("image-result");

    const imageId = idInput.value;

    if (!imageId) {
        alert("ID is empty!");
        return;
    }

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${imageId}`);
        const data = await response.json();

        if (response.ok) {
            albumId.textContent = data.albumId;
            image.src = data.url;
            image.title=data.title
            result.textContent = "Image found";
            result.className = "success";
        } else {
            result.textContent = "Image Not Found";
            result.className = "error";
        }
    } catch (error) {
        result.textContent = "Error";
        result.className = "error";
    }
}

function resetImageFields() {
    document.getElementById("image-idInput").value = "";
    document.getElementById("albumId").textContent = "";
    document.getElementById("image").src = "";
    document.getElementById("image-result").textContent = "";
}