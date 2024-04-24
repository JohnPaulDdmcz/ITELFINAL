document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('rating');
  
    function handleStarClick(event) {
      const starValue = parseInt(event.target.dataset.value);
      ratingInput.value = starValue;
  
      stars.forEach((star, index) => {
        if (index < starValue) {
          star.classList.add('active');
        } else {
          star.classList.remove('active');
        }
      });
    }
  
    stars.forEach(star => {
      star.addEventListener('click', handleStarClick);
    });
  
    document.getElementById('feedbackForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      // Get feedback values
      var roomFeedback = document.getElementById('roomFeedback').value;
      var amenitiesFeedback = document.getElementById('amenitiesFeedback').value;
      var overallFeedback = document.getElementById('overallFeedback').value;
      // You can customize this part to send feedback to your server or perform any other action
      console.log("Room Feedback:", roomFeedback);
      console.log("Amenities Feedback:", amenitiesFeedback);
      console.log("Overall Feedback:", overallFeedback);
      alert("Thank you for your feedback!");
      // Reset form after submission
      document.getElementById('feedbackForm').reset();
      // Reset star ratings
      stars.forEach(star => {
        star.classList.remove('active');
      });
      ratingInput.value = 0; // Reset hidden input value
    });
  });
  