//Justis Brown
$("form").submit(function () {
    //declare variables
    let iAssignmentPoints = Number($("#assignments").val());
    let iGpPoints = Number($("#gp").val());
    let iQPoints = Number($("#q").val());
    let iExPoints = Number($("#ex").val());
    let iIntexPoints = Number($("#INTEX").val());
    let dAssignmentValue = 0.5;
    let dGpValue = 0.1;
    let dQValue = 0.1;
    let dExValue = 0.2;
    let dIntexValue = 0.1;
    let iTotalPoints = 2000;
    let sLetterGrade;

    //make sure letter grade and final grade are hidden
    $("#letterGrade")[0].hidden = true;
    $("#finalGrade")[0].hidden = true;

    /*//check to see if values are valid
    if (iAssignmentPoints <= 0 || iAssignmentPoints > 1000 || iGpPoints < 0 || iGpPoints > 200
        || iQPoints < 0 || iQPoints > 200 || iExPoints < 0 || iExPoints > 400 || iIntexPoints < 0 || iIntexPoints > 200) {
        alert("Please enter a valid number");
    }
    //same
    if (Number.isFinite(iAssignmentPoints) == false || Number.isFinite(iGpPoints) == false ||
        Number.isFinite(iQPoints) == false || Number.isFinite(iExPoints) == false || Number.isFinite(iIntexPoints) == false) {
        alert("Please enter a valid number");
    }*/
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
    $("#letterGrade")[0].hidden = false;
    $("#finalGrade")[0].hidden = false;
    $("#letterGrade")[0].innerHTML = "Letter Grade: " + sLetterGrade;
    $("#finalGrade")[0].innerHTML = "Final Grade: " + iTotalGrade * 100 + "%";

    if (iAssignmentPoints <= 0 || iAssignmentPoints > 1000 || iGpPoints < 0 || iGpPoints > 200
        || iQPoints < 0 || iQPoints > 200 || iExPoints < 0 || iExPoints > 400 || iIntexPoints < 0 || iIntexPoints > 200) {

    }
    else {
        alert("Letter Grade: " + sLetterGrade + "\n" + "Final Grade: " + iTotalGrade.toFixed(2) * 100 + "%");
    }
    
});