const donations = [];
const requests = [];

// Handle donate form submission
document.getElementById('donateForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('donorName').value;
    const email = document.getElementById('donorEmail').value;
    const phone = document.getElementById('donorPhone').value;
    const bloodType = document.getElementById('donorBloodType').value;
    const address = document.getElementById('donorAddress').value;

    donations.push({ name, email, phone, bloodType, address });

    populateTable('donationsTable', donations);
    alert('Thank you for donating blood!');
    this.reset();
});

// Handle request form submission
document.getElementById('requestForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('requesterName').value;
    const email = document.getElementById('requesterEmail').value;
    const phone = document.getElementById('requesterPhone').value;
    const bloodType = document.getElementById('requesterBloodType').value;
    const details = document.getElementById('requestDetails').value;

    requests.push({ name, email, phone, bloodType, details });

    populateTable('requestsTable', requests);
    alert(`Your request for blood (${bloodType}) has been submitted!`);
    this.reset();

    // Match blood requests to donations
    const matches = donations.filter(donor => donor.bloodType === bloodType);
    if (matches.length > 0) {
        alert(`Matching donors found: ${matches.map(d => `${d.name} (${d.bloodType})`).join(', ')}`);
    } else {
        alert('No matching donors found.');
    }
});

// Populate a table
function populateTable(tableId, data) {
    const tableBody = document.getElementById(tableId).querySelector('tbody');
    tableBody.innerHTML = '';

    data.forEach(item => {
        const row = document.createElement('tr');
        for (const key in item) {
            const cell = document.createElement('td');
            cell.textContent = item[key];
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    });
}
