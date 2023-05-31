document.getElementById("enrollment-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var website = document.getElementById("website").value;
    var imageInput = document.getElementById("image");
    var image = imageInput.files[0];
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var skills = [];
    var skillsCheckboxes = document.getElementsByName("skills");
    for (var i = 0; i < skillsCheckboxes.length; i++) {
      if (skillsCheckboxes[i].checked) {
        skills.push(skillsCheckboxes[i].value);
      }
    }
  
    // Display enrollment information
    var table = document.querySelector("#enrollment-info table");
    var newRow = table.insertRow(-1);
    var nameCell = newRow.insertCell(0);
    var emailCell = newRow.insertCell(1);
    var websiteCell = newRow.insertCell(2);
    var imageCell = newRow.insertCell(3);
    var genderCell = newRow.insertCell(4);
    var skillsCell = newRow.insertCell(5);
  
    nameCell.textContent = name;
    emailCell.textContent = email;
    websiteCell.textContent = website;
    
    var imageElement = document.createElement("img");
    imageElement.src = URL.createObjectURL(image);
    imageElement.alt = "Student Image";
    imageElement.classList.add("enrollment-image");
    imageCell.appendChild(imageElement);
    
    genderCell.textContent = gender;
    skillsCell.textContent = skills.join(", ");
  
    // Reset form fields
    document.getElementById("enrollment-form").reset();
  });
  
  document.getElementById("clear-button").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("enrollment-form").reset();
  });
  