// adding the effect of elements comming into view
const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el)=> observer.observe(el));

// Function returns the Y position of a section on the page
function calculatePos(name) {
    const targetElement = document.getElementsByClassName(name)[0]; // Select the first element with the given class name
    const targetOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const offset = targetOffset -50;
    return offset;
  }
  
  // Assigning values to sections
  const aboutPos = calculatePos("about");
  const projectsPos = calculatePos("projects");
  const CVPos = calculatePos("CV");
  const contactPos = calculatePos("contact");
  
  // Assigning the taskbar buttons
  const aboutLink = document.getElementsByClassName("aboutLink")[0];
  const projectsLink = document.getElementsByClassName("projectsLink")[0];
  const CVLink = document.getElementsByClassName("CVLink")[0];
  const contactLink = document.getElementsByClassName("contactLink")[0];
  const scrollDown = document.getElementsByClassName("scroll-down")[0];
  
  // Adding click event listeners to buttons
  aboutLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: aboutPos, behavior: 'smooth' });
  });
  scrollDown.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: aboutPos, behavior: 'smooth' });
  });
  projectsLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: projectsPos, behavior: 'smooth' });
  });
  CVLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: CVPos, behavior: 'smooth' });
  });
  contactLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: contactPos, behavior: 'smooth' });
  });


  // assigning the sections on the task bar
  const button1 = document.getElementsByClassName("aboutLink")[0];
  const button2 = document.getElementsByClassName("projectsLink")[0];
  const button3 = document.getElementsByClassName("CVLink")[0];
  const button4 = document.getElementsByClassName("contactLink")[0];
  // underlining the current section on the task bar
  window.addEventListener('scroll', (event)=>{
    const scrollPosition = window.scrollY || window.pageYOffset;
    
    if (scrollPosition >= aboutPos && scrollPosition < projectsPos) {
        button1.setAttribute('id', 'button-activated');
        button2.removeAttribute('id');
        button3.removeAttribute('id');
        button4.removeAttribute('id');
        console.log(button1.className);
      } else if (scrollPosition >= projectsPos && scrollPosition < CVPos) {
        button2.setAttribute('id', 'button-activated');
        button1.removeAttribute('id');
        button3.removeAttribute('id');
        button4.removeAttribute('id');
        console.log("proj");
      } else if (scrollPosition >= CVPos && scrollPosition < contactPos) {
        button3.setAttribute('id', 'button-activated');
        button1.removeAttribute('id');
        button2.removeAttribute('id');
        button4.removeAttribute('id');
      } else if (scrollPosition >= contactPos) {
        button4.setAttribute('id', 'button-activated');
        button1.removeAttribute('id');
        button2.removeAttribute('id');
        button3.removeAttribute('id');
      } else {
        button1.removeAttribute('id');
        button2.removeAttribute('id');
        button3.removeAttribute('id');
        button4.removeAttribute('id');
      }
});

// adding an image viewer for the CV
const CVImage = document.getElementsByClassName("CV-image")[0];
const imgViewer = document.getElementsByClassName("img-viewer")[0];
const close = document.getElementsByClassName("close")[0];

// activate the image view
CVImage.addEventListener('click', (event)=>{
    imgViewer.setAttribute('id', 'img-view-activated');
})
// close the image view
close.addEventListener('click', (event)=>{
    event.preventDefault();
    imgViewer.removeAttribute("id");
})


// making the background color transitions.

window.addEventListener('scroll', (event)=>{
  const viewportHeight = window.innerHeight;
  const middleOfPage = viewportHeight / 2;
  const scrollPosition = window.scrollY + middleOfPage;

    if (scrollPosition < aboutPos) {
      document.body.style.backgroundColor = "black";
    }
    else if (scrollPosition >= aboutPos && scrollPosition < projectsPos) {
      document.body.style.backgroundColor = "#18122B";
    } 
    else if (scrollPosition >= projectsPos && scrollPosition < CVPos) {
      document.body.style.backgroundColor = "#393053";
    } 
    else if (scrollPosition >= CVPos && scrollPosition < contactPos) {
      document.body.style.backgroundColor = "#443C68";
    } 
    else if (scrollPosition >= contactPos) {
      document.body.style.backgroundColor = "#635985";
    } 
    else {
      document.body.style.backgroundColor = "#18122B";
    }
});