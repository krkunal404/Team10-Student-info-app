document.getElementById('showBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const regNo = document.getElementById('regNo').value;
    const programme = document.getElementById('programme').value;
    
    const output = document.getElementById('output');
    
    if (name && regNo && programme) {
        output.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Register Number:</strong> ${regNo}</p>
            <p><strong>Programme:</strong> ${programme}</p>
        `;
        output.classList.add('show');
    } else {
        output.innerHTML = '<p>Please fill in all fields</p>';
        output.classList.add('show');
    }
});
