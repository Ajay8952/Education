window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)
})

// hide question and answer

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq =>{
    faq.addEventListener('click',() => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq_icon');
        if(icon.innerHTML == '+'){
            icon.innerHTML = '-'
        }else{
            icon.innerHTML='+'
        }
    })
})


//Code to filter the courses according to the search
function searchCourses() {
    var searchInput = document.getElementById("courseSearchInput").value.toLowerCase();
    var courses = document.getElementsByClassName("course");
    for (var i = 0; i < courses.length; i++) {
        var courseTitle = courses[i].getElementsByClassName("course_info")[0].getElementsByTagName("h4")[0].innerText.toLowerCase();
        var courseDescription = courses[i].getElementsByClassName("course_info")[0].getElementsByTagName("p")[0].innerText.toLowerCase();

        if (courseTitle.includes(searchInput) || courseDescription.includes(searchInput)) {
            courses[i].style.display = "block"; // Show the course
        } else {
            courses[i].style.display = "none"; // Hide the course
        }
    }
}



// course_details.js

document.addEventListener("DOMContentLoaded", function () {
    // Get the course ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get("id");

    // Fetch course details using an API or dummy data
    // Replace this with your actual API endpoint
    const apiUrl = `https://api.example.com/courses/${courseId}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(courseData => {
            // Update the course details on the page
            document.getElementById("courseTitle").innerText = courseData.title;
            document.getElementById("courseDescription").innerHTML = courseData.description;
            // Update additional course details if needed
        })
        .catch(error => console.error("Error fetching course details:", error));
});







