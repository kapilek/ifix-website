
document.getElementById('year').textContent = new Date().getFullYear();

const services = [
  'Laptop Repair & Motherboard Service',
  'PC & Printer Repair',
  'Epson Original Ink Refill',
  'SSD Upgrades & Performance Tune-up'
];

const serviceList = document.getElementById('service-list');
services.forEach(service => {
  const li = document.createElement('li');
  li.textContent = service;
  serviceList.appendChild(li);
});

const form = document.getElementById('request-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('customer-name').value;
  const issue = document.getElementById('issue-description').value;
  const messageDiv = document.getElementById('form-message');

  if (name && issue) {
    messageDiv.textContent = `Thank you, ${name}! Your request has been received. We'll contact you soon.`;
    form.reset();
  } else {
    messageDiv.textContent = 'Please fill out all fields.';
  }
});
