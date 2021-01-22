//Justis Brown
$("Submit").click(function () {
    //declare variables
    let iAssignmentPoints = Number($("assignments").value);
    let iGpPoints = Number($("gp").value);
    let iQPoints = Number($("q").value);
    let iExPoints = Number($("ex").value);
    let iIntexPoints = Number($("INTEX").value);
    let dAssignmentValue = 0.5;
    let dGpValue = 0.1;
    let dQValue = 0.1;
    let dExValue = 0.2;
    let dIntexValue = 0.1;
    let iTotalPoints = 2000;
    let sLetterGrade;

    //make sure letter grade and final grade are hidden
    $("letterGrade").hidden = true;
    $("finalGrade").hidden = true;

    //check to see if values are valid
    if (iAssignmentPoints <= 0 || iAssignmentPoints > 1000 || iGpPoints < 0 || iGpPoints > 200
        || iQPoints < 0 || iQPoints > 200 || iExPoints < 0 || iExPoints > 400 || iIntexPoints < 0 || iIntexPoints > 200) {
        alert("Please enter a valid number");
    }
    //same
    if (Number.isFinite(iAssignmentPoints) == false || Number.isFinite(iGpPoints) == false ||
        Number.isFinite(iQPoints) == false || Number.isFinite(iExPoints) == false || Number.isFinite(iIntexPoints) == false) {
        alert("Please enter a valid number");
    }
    //calc grade
    iTotalGrade = ((iAssignmentPoints) + (iGpPoints) + (iQPoints) + (iExPoints) + (iIntexPoints)) / iTotalPoints;

    //find letter grade
    if (iTotalGrade >= 0.94) {
        sLetterGrade = 'A';
    }
    else if (iTotalGrade >= 0.9) {
        sLetterGrade = 'A-'
    }
    else if (iTotalGrade >= 0.87) {
        sLetterGrade = 'B+'
    }
    else if (iTotalGrade >= 0.84) {
        sLetterGrade = 'B'
    }
    else if (iTotalGrade >= 0.8) {
        sLetterGrade = 'B-'
    }
    else if (iTotalGrade >= 0.77) {
        sLetterGrade = 'C+'
    }
    else if (iTotalGrade >= 0.74) {
        sLetterGrade = 'C'
    }
    else if (iTotalGrade >= 0.7) {
        sLetterGrade = 'C-'
    }
    else if (iTotalGrade >= 0.67) {
        sLetterGrade = 'D+'
    }
    else if (iTotalGrade >= 0.64) {
        sLetterGrade = 'D'
    }
    else if (iTotalGrade >= 0.6) {
        sLetterGrade = 'D-'
    }
    else {
        sLetterGrade = 'E'
    }

    //display grades
    $("letterGrade").hidden = false;
    $("finalGrade").hidden = false;
    $("letterGrade").innerHTML = "Letter Grade: " + sLetterGrade;
    $("finalGrade").innerHTML = "Final Grade: " + iTotalGrade;
});