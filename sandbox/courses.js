// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {sectionNum: 1, roomNum: "STC 353", enrolled: 26, days:"TTh", instructor: "Bro T"},
        {sectionNum: 2, roomNum: "STC 347", enrolled: 28, days:"TTh", instructor: "Sis A"},
    ],
    updateStudentEnrollment(action, sectionNumber) {
        let sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNumber);
        if(sectionIndex != -1){
            if (action == "enrollStudent"){
                this.sections[sectionIndex].enrolled++;
            }
            else if (action == "dropStudent"){
                this.sections[sectionIndex].enrolled--
            }
            populateSections(this.sections);
        }
    }
}

function setCourseInfo(course) {
    document.getElementById("courseName").innerHTML = course.name;
    document.getElementById("courseCode").innerHTML = course.code;
}
  
function populateSections(sections) {
    document.getElementById("sections").innerHTML = 
    `<tr>
    <td>${sections[0].sectionNum}</td>
    <td>${sections[0].roomNum}</td>
    <td>${sections[0].enrolled}</td>
    <td>${sections[0].days}</td>
    <td>${sections[0].instructor}</td>
    </tr>
    <tr>
    <td>${sections[1].sectionNum}</td>
    <td>${sections[1].roomNum}</td>
    <td>${sections[1].enrolled}</td>
    <td>${sections[1].days}</td>
    <td>${sections[1].instructor}</td>
    </tr>`;
}
  
document.getElementById("enrollStudent").addEventListener("click", () => {
    let sectionNumber = document.getElementById("sectionNumber").value;
    aCourse.updateStudentEnrollment("enrollStudent", sectionNumber);});

document.getElementById("dropStudent").addEventListener("click", () => {
    let sectionNumber = document.getElementById("sectionNumber").value;
    aCourse.updateStudentEnrollment("dropStudent", sectionNumber);});

setCourseInfo(aCourse);
populateSections(aCourse.sections);