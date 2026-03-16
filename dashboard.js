// Dashboard functionality
let currentUser = null;

// Sign in form submission
document.getElementById('signInForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple validation (in production, this would call a backend)
    if (email && password) {
        currentUser = {
            name: email.split('@')[0],
            email: email,
            phone: '',
            address: '',
            loginTime: new Date()
        };
        
        showDashboard();
        updateDashboardContent();
    }
});

// Sign up form submission
document.getElementById('createAccountForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const newEmail = document.getElementById('newEmail').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    if (fullName && newEmail && newPassword) {
        currentUser = {
            name: fullName,
            email: newEmail,
            phone: '',
            address: '',
            loginTime: new Date()
        };
        
        showDashboard();
        updateDashboardContent();
    }
});

// Toggle between sign in and sign up
function toggleSignUp(e) {
    e.preventDefault();
    document.getElementById('loginForm').style.display = document.getElementById('loginForm').style.display === 'none' ? 'block' : 'none';
    document.getElementById('signUpForm').style.display = document.getElementById('signUpForm').style.display === 'none' ? 'block' : 'none';
}

// Show dashboard
function showDashboard() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'none';
    document.getElementById('dashboardContent').style.display = 'block';
}

// Update dashboard content
function updateDashboardContent() {
    if (!currentUser) return;
    
    document.getElementById('profileName').textContent = currentUser.name;
    document.getElementById('profileEmail').textContent = currentUser.email;
    document.getElementById('memberSince').textContent = new Date().toLocaleDateString();
    
    // Load saved data
    const savedData = localStorage.getItem('userProfile_' + currentUser.email);
    if (savedData) {
        const data = JSON.parse(savedData);
        currentUser.phone = data.phone || '';
        currentUser.address = data.address || '';
        document.getElementById('phoneInput').value = currentUser.phone;
        document.getElementById('addressInput').value = currentUser.address;
    }
}

// Switch tabs
function switchTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab
    const selectedTab = document.getElementById(tabName + 'Tab');
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// Update profile
function updateProfile() {
    if (!currentUser) return;
    
    const phone = document.getElementById('phoneInput').value;
    const address = document.getElementById('addressInput').value;
    
    currentUser.phone = phone;
    currentUser.address = address;
    
    // Save to localStorage
    localStorage.setItem('userProfile_' + currentUser.email, JSON.stringify({
        phone: phone,
        address: address
    }));
    
    alert('Profile updated successfully!');
}

// Change password
function changePassword() {
    const currentPass = document.getElementById('currentPass').value;
    const newPass = document.getElementById('newPass').value;
    const confirmPass = document.getElementById('confirmPass').value;
    
    if (!currentPass || !newPass || !confirmPass) {
        alert('Please fill all password fields');
        return;
    }
    
    if (newPass !== confirmPass) {
        alert('New passwords do not match!');
        return;
    }
    
    if (newPass.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }
    
    alert('Password changed successfully!');
    
    // Clear password fields
    document.getElementById('currentPass').value = '';
    document.getElementById('newPass').value = '';
    document.getElementById('confirmPass').value = '';
}

// Logout
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        currentUser = null;
        document.getElementById('dashboardContent').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('signUpForm').style.display = 'none';
        
        // Reset forms
        document.getElementById('signInForm').reset();
        document.getElementById('createAccountForm').reset();
    }
}