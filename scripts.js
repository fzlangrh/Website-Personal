document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  if (name === '' || email === '') {
    alert('Please fill in all fields');
  } else {
    alert('Thank you for your message, ' + name + '!');
  }
});
