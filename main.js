/*=============== SHOW MENU ===============*/
const headerToggle = document.getElementById('header-toggle'),
      main = document.getElementById('main'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(headerToggle){
    headerToggle.addEventListener('click', () =>{
        main.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        main.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const main = document.getElementById('main')
    // When we click on each nav__link, we remove the show-menu class
    main.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

const chatbotBody = document.getElementById('chatbot-body');
            const questionDropdown = document.getElementById('question-dropdown');

            function addMessage(message, sender) {
                const messageElement = document.createElement('div');
                messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';
                messageElement.textContent = message;
                chatbotBody.appendChild(messageElement);
            }

            function sendMessage() {
                const selectedQuestion = questionDropdown.value;
                if (selectedQuestion) {
                    addMessage(selectedQuestion, 'user');

                    // Process the user's selected question and get the bot's response
                    const botResponse = getBotResponse(selectedQuestion);

                    addMessage(botResponse, 'bot');
                }
            }

            function getBotResponse(userQuestion) {
                const responses = {
                    'what is the origin of sciastra': 'SciAstra started in March 2021 from a hostel room and a small YouTube channel',
        'how many mentors does sciastra currently have, and from which institutes?': 'SciAstra has over 60 mentors from premier research institutes worldwide, including Harvard, Oxford, Max Planck, IISc, and IISERs.',
        'what is sciastra is focus in education?':'SciAstra aims to move beyond rote memorization for exam qualifications and foster critical thinking in students, guiding them to think like scientists.',
        'which prestigious institutes does sciastra provide guidance for?':'SciAstra offers comprehensive guidance for institutes such as IISERS, NISER, IISc Bangalore, ISI, CMI, and others.',
        'what research entrance exams does sciastra assist students in preparing for?':'SciAstra supports students in preparing for exams like IAT, NEST, ISI, CMI, IACS, and more.',
        'how has sciastra grown since its inception?':'SciAstra has evolved from a small YouTube channel to a platform with global mentors and a focus on holistic education.',
        'what role do mentors from renowned institutes play in sciastra?':'Mentors from institutes like Harvard, Oxford, Max Planck, IISc, and IISERs contribute expertise to enhance the educational experience at SciAstra.',
        'what is sciastra is philosophy regarding competitive exams?':'SciAstra believes education should go beyond cracking competitive exams, emphasizing critical thinking over exam qualifications',
        'name a few services provided by sciastra.':'SciAstra offers services like guidance for prestigious institutes, research entrance exam preparation, and fostering a scientific thinking mindset.',
        'what is sciastra is vision for the future?':'SciAstra aspires to continue contributing to education by guiding students and fostering critical thinking, aiming to make a positive impact in the coming years.',
        'how did sciastra start its journey':'SciAstra started in March 2021 from a hostel room and a small YouTube channel. ',
        'what is sciastra approach to education?':'SciAstra believes in moving beyond rote memorization for exams, focusing on fostering critical thinking in students',
        'which research entrance exams does sciastra assist students in preparing for?':'SciAstra assists students in preparing for exams like IAT, NEST, ISI, CMI, IACS, and more.',
        'what distinguishes sciastra is mentors, and where are they from?':'SciAstra has over 60 mentors from premier research institutes worldwide, including Harvard, Oxford, Max Planck, IISc, and IISERs.',
        'can you name a few institutes for which sciastra provides comprehensive guidance?':'SciAstra provides guidance for institutes such as IISERS, NISER, IISc Bangalore, ISI, CMI, and others.'
      
                    // Add more responses as needed
                };

                const lowerCaseUserQuestion = userQuestion.toLowerCase();
                return responses[lowerCaseUserQuestion] || 'I am sorry, I did not understand that. Can you please ask another question?';
            }