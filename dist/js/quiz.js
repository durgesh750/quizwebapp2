window.onload=function(){
    show(0);
}
//Question

let questions = [
    {
      id: 1,
      question: "Generally, which component of a computer draws the most power?",
      answer: "Video Card",
      options: [
        "Hard Drive",
        "Video Card",
        "Processor",
        "Power Supply"
      ]
    },
    {
      id: 2,
      question: "Which of these names was an actual codename for a cancelled Microsoft project?",
      answer: "Neptune",
      options: [
        "Enceladus",
        "Pollux",
        "Neptune",
        "Saturn"
      ]
    },
    {
      id: 3,
      question: "In &quot;Hexadecimal&quot;, what color would be displayed from the color code? &quot;#00FF00&quot;",
      answer: "Green",
      options: [
        "Red",
        "Green",
        "blue",
        "None of these"
      ]
    },
    {
      id: 4,
      question: "What is the full form of RAM ?",
      answer: "Random Access Memory",
      options: [
        "Random Access Memory",
        "Randomely Access Memory",
        "Run Aceapt Memory",
        "None of these"
      ]
    },
    {
      id: 5,
      question: "What is the full form of CPU?",
      answer: "Central Processing Unit",
      options: [
        "Central Program Unit",
        "Central Processing Unit",
        "Central Preload Unit",
        "None of these"
      ]
    },
    {
      id: 6,
      question: "What is the full form of E-mail",
      answer: "Electronic Mail",
      options: [
        "Electronic Mail",
        "Electric Mail",
        "Engine Mail",
        "None of these"
      ]
    },
    {
      id: 7,
      question: "Which of the following is the oldest of these computers by release date?",
      answer: "TRS-80",
      options: [
        "Commodore 64",
        "ZX Spectrum",
        "Apple 3",
        "TRS-80"
      ]
    },
    {
      id: 8,
      question: "What was the first Android version specifically optimized for tablets?",
      answer: "Honeycomb",
      options: [
        "Eclair",
        "Honeycomb",
        "Froyo",
        "Marshmellow"
      ]
    },
    {
      id: 9,
      question: "Which RAID array type is associated with data mirroring?",
      answer: "RAID 1",
      options: [
        "RAID 0",
        "RAID 1",
        "RAID 10",
        "RAID 5"
      ]
    },
    {
      id: 10,
      question: "What does the International System of Quantities refer 1024 bytes as?",
      answer: "Kibibyte",
      options: [
        "Kylobyte",
        "Kilobyte",
        "Kibibyte",
        "None of these"
      ]
    }
  ];


  function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;

    //Session player name
    sessionStorage.setItem("name", name);
  
    location.href = "quiz.html";
  }


  let question_count=0;
  let point=0;

function next() {
    let user_answer = document.querySelector("li.option.active").innerHTML;

    //check answer by the user
    if (user_answer == questions[question_count].answer) {
        point += 10;
        sessionStorage.setItem("points", point);
    }

    if (question_count == questions.length - 1) {
        sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
        clearInterval(mytime);
        location.href = "end.html";
        return;
    }



    question_count++;
    show(question_count);
}

function show(count) {
    let question = document.getElementById("questions");

    question.innerHTML = `
    <h2>Q${question_count +1}. ${questions[count].question}</h2>
    <ul class="option_group">
        <li class="option">${questions[count].options[0]}</li>
        <li class="option">${questions[count].options[1]}</li>
        <li class="option">${questions[count].options[2]}</li>
        <li class="option">${questions[count].options[3]}</li>
    </ul>
    
    `;

    toggleActive();
}


function toggleActive() {
    let option = document.querySelectorAll("li.option");

    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let j = 0; j < option.length; j++) {
          if (option[j].classList.contains("active")) {
            option[j].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      }
    }
  }



