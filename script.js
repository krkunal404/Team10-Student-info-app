document.getElementById('showBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const regNo = document.getElementById('regNo').value;
    const programme = document.getElementById('programme').value;
    
    const output = document.getElementById('output');
    
    if (name && regNo && programme) {
        output.innerHTML = `
            <div class="card">
                <div class="card-header">
                    <h2>Student Details</h2>
                </div>
                <div class="card-body">
                    <div class="card-item">
                        <span class="label">Name</span>
                        <span class="value">${name}</span>
                    </div>
                    <div class="card-item">
                        <span class="label">Register Number</span>
                        <span class="value">${regNo}</span>
                    </div>
                    <div class="card-item">
                        <span class="label">Programme</span>
                        <span class="value">${programme}</span>
                    </div>
                </div>
            </div>
        `;
        output.classList.add('show');
    } else {
        output.innerHTML = `
            <div class="card error-card">
                <div class="card-header">
                    <h2>Error</h2>
                </div>
                <div class="card-body">
                    <div class="card-item">
                        <span class="label">Please fill in all fields</span>
                    </div>
                </div>
            </div>
        `;
        output.classList.add('show');
    }
});
