
function filterMentors() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const mentorCards = document.getElementsByClassName("mentor-card");

  for (let card of mentorCards) {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(input) ? "block" : "none";
  }
}
function validateLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const savedUser = JSON.parse(localStorage.getItem("userData"));

  if (!savedUser) {
    alert("No account found. Please sign up first.");
    return false;
  }

  if (email === savedUser.email && password === savedUser.password) {
    alert(`Welcome back, ${savedUser.name}!`);
    window.location.href = "mentors.html"; 
  } else {
    alert("Invalid email or password. Please try again.");
  }

  return false;
}

