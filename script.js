

  let handletogglebtn=document.getElementById('handletoggle');
  let sidebarToggle=document.querySelector('.sidebar')

  handletogglebtn.addEventListener('click', function() {
    sidebarToggle.style.display = (sidebarToggle.style.display === 'none') ? 'block' : 'none';
  });
  



// Sample array-like object with data
var dataArray = [
  { email: "intern1conqt@gmail.com", firstName: "intern1", lastName: "techcurve", phoneNumber: "7789645632", emailCategory: "ERP", registerDate: "04-27-2022" },
  { email: "intern2conqt@gmail.com", firstName: "intern2", lastName: "techcurve", phoneNumber: "7789645633", emailCategory: "CRM", registerDate: "04-28-2022" },
  { email: "intern3conqt@gmail.com", firstName: "intern3", lastName: "techcurve", phoneNumber: "7789645634", emailCategory: "HRM", registerDate: "04-29-2022" },
  { email: "intern4conqt@gmail.com", firstName: "intern3", lastName: "techcurve", phoneNumber: "7789645634", emailCategory: "HRM", registerDate: "04-29-2022" },
  { email: "intern5conqt@gmail.com", firstName: "intern3", lastName: "techcurve", phoneNumber: "7789645634", emailCategory: "HRM", registerDate: "04-29-2022" },
  { email: "intern6conqt@gmail.com", firstName: "intern3", lastName: "techcurve", phoneNumber: "7789645634", emailCategory: "HRM", registerDate: "04-29-2022" },
  { email: "intern7conqt@gmail.com", firstName: "intern3", lastName: "techcurve", phoneNumber: "7789645634", emailCategory: "HRM", registerDate: "04-29-2022" },
  { email: "intern8conqt@gmail.com", firstName: "intern3", lastName: "techcurve", phoneNumber: "7789645634", emailCategory: "HRM", registerDate: "04-29-2022" },
  { email: "intern9conqt@gmail.com", firstName: "intern3", lastName: "techcurve", phoneNumber: "7789645634", emailCategory: "HRM", registerDate: "04-29-2022" },
  { email: "intern10conqt@gmail.com", firstName: "intern3", lastName: "techcurve", phoneNumber: "7789645634", emailCategory: "HRM", registerDate: "04-29-2022" },
  { email: "intern11conqt@gmail.com", firstName: "intern3", lastName: "techcurve", phoneNumber: "7789645634", emailCategory: "HRM", registerDate: "04-29-2022" },
  // Add more data as needed
];

// Get a reference to the table body
var tableBody = document.querySelector('#dataTable tbody');

// Pagination variables
var currentPage = 1;
var entriesPerPage = 10;
var totalPages = Math.ceil(dataArray.length / entriesPerPage);

// Function to display data for the current page
function displayData() {
  // Clear table body
  tableBody.innerHTML = '';

  // Calculate start and end indices for the current page
  var startIndex = (currentPage - 1) * entriesPerPage;
  var endIndex = Math.min(startIndex + entriesPerPage, dataArray.length);

  // Loop through the data for the current page
  for (var i = startIndex; i < endIndex; i++) {
    var data = dataArray[i];

    // Create a new table row
    var row = document.createElement('tr');

    // Add data to the table row
    row.innerHTML = `
      <td>${data.email}</td>
      <td>${data.firstName}</td>
      <td>${data.lastName}</td>
      <td>${data.phoneNumber}</td>
      <td>${data.emailCategory}</td>
      <td>${data.registerDate}</td>
    `;

    // Append the row to the table body
    tableBody.appendChild(row);

    // Attach event listener to the row for showing popup
    row.addEventListener('click', function() {
      // Show popup with user details
      showPopup(dataArray[i]);
    });
  }

  // Update pagination buttons
  updatePaginationButtons();
}

// Function to update pagination buttons
function updatePaginationButtons() {
  // Clear previous pagination buttons
  paginationButtons.innerHTML = '';

  // Create "Previous" button
  var prevButton = document.createElement('button');
  prevButton.textContent = 'Previous';
  prevButton.addEventListener('click', function() {
    if (currentPage > 1) {
      currentPage--;
      displayData();
    }
  });
  paginationButtons.appendChild(prevButton);

  // Create "Next" button
  var nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.addEventListener('click', function() {
    if (currentPage < totalPages) {
      currentPage++;
      displayData();
    }
  });
  paginationButtons.appendChild(nextButton);
}

// Initial display of data
displayData();


  // Function to show popup with user details
function showPopup(user) {
    var popupContainer = document.getElementById('popupContainer');
    var popupContent = document.getElementById('popupContent');
  
    // Clear previous content
    popupContent.innerHTML = '';
  
    // Create popup content
    var userDetailsHTML = `
      <h2>User Details</h2>
      <p><strong>Email Address:</strong> ${user.email}</p>
      <p><strong>First Name:</strong> ${user.firstName}</p>
      <p><strong>Last Name:</strong> ${user.lastName}</p>
      <p><strong>Phone Number:</strong> ${user.phoneNumber}</p>
      <p><strong>Email Category:</strong> ${user.emailCategory}</p>
      <p><strong>Register Date:</strong> ${user.registerDate}</p>
    `;
  
    // Append content to popup
    popupContent.innerHTML = userDetailsHTML;
  
    // Show popup
    popupContainer.style.display = 'block';
  
    
    var closePopup = document.getElementById('closePopup');
    closePopup.addEventListener('click', function() {
      popupContainer.style.display = 'none';
    });
  }

  