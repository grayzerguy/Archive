let notesStore = JSON.parse(localStorage.getItem("memory"));

let index = 0;
let allNotes = [];

if (notesStore != null) {
  // מגדיר אינדקסים
  index = notesStore.length;
  allNotes = notesStore;
  console.log(index);
  for (let id = 0; id < notesStore.length; id++) {
    //יוצר id
    createStore(id);
  }
}

function create() {
  // יוצר הודעה
  let notesrow = document.getElementById("noterow");
  let notenameout = document.getElementById("formNoteName").value;
  let notedateout = document.getElementById("formNoteDate").value;
  let notetimeout = document.getElementById("formNoteTime").value;

  let noteO = {
    notenum: index,
    notename: notenameout,
    notedate: notedateout,
    notetime: notetimeout,
  };

  let note = document.createElement("div"); // יוצר דיב להודעה
  note.setAttribute("class", "note w3-animate-opacity"); // מעביר לו קלאס
  note.setAttribute("id", index); //מעביר לו אינדקס
  notesrow.appendChild(note); //מוסיף אותו לדיב של כל ההודעות

  let deletebtn = document.createElement("img");
  deletebtn.setAttribute("class", "close"); // יש צורך לתקן את המחיקה לתת לא הוא נעלם עד ששיש הובר על הדיב של הנוט
  deletebtn.setAttribute("aria-label", "Close");
  deletebtn.setAttribute("src", "/img/x-square.svg"); //תמונה של כפתור המחיקה
  deletebtn.setAttribute("onclick", "deleteNote(  " + index + "  )"); // מוחק הודעה
  note.appendChild(deletebtn);

  let notename1 = document.createElement("span");
  notename1.setAttribute("class", "noteText");
  notename1.setAttribute("id", index);
  notename1.innerHTML = noteO.notename;
  note.appendChild(notename1);

  let notedate1 = document.createElement("span");
  notedate1.setAttribute("class", "noteDate");
  notedate1.setAttribute("id", index);
  notedate1.innerHTML = noteO.notedate;
  note.appendChild(notedate1);

  let notetime1 = document.createElement("span");
  notetime1.setAttribute("class", "noteTime");
  notetime1.setAttribute("id", index);
  notetime1.innerHTML = noteO.notetime;
  note.appendChild(notetime1);

  allNotes.push(noteO);

  localStorage.setItem("memory", JSON.stringify(allNotes));

  index++;
}

function deleteNote(x) {
  location.reload();
  notesStore.splice(x, 1);
  allNotes = notesStore;
  localStorage.setItem("memory", JSON.stringify(allNotes));

  let note = document.getElementById(x);
  let notesrow = document.getElementById("noterow");

  notesrow.removeChild(note);
}

function clearForm() {
  document.getElementById("formNoteName").value = "";
  document.getElementById("formNoteDate").value = "";
  document.getElementById("formNoteTime").value = "";
  alert("clear");
}

function createStore(x) {
  let notesrow = document.getElementById("noterow");

  let getnote = notesStore[x];
  let noteO = getnote;

  let note = document.createElement("div");
  note.setAttribute("class", "note w3-animate-opacity");
  note.setAttribute("id", x);
  notesrow.appendChild(note);

  let deletebtn = document.createElement("img");
  deletebtn.setAttribute("class", "hide");
  deletebtn.setAttribute("src", "/img/x-square.svg");
  deletebtn.setAttribute("onclick", "deleteNote(  " + x + "  )");
  note.appendChild(deletebtn);

  let notename1 = document.createElement("span");
  notename1.setAttribute("class", "noteText");
  notename1.setAttribute("id", x);
  notename1.innerHTML = noteO.notename;
  note.appendChild(notename1);

  let notedate1 = document.createElement("span");
  notedate1.setAttribute("class", "noteDate");
  notedate1.setAttribute("id", x);
  notedate1.innerHTML = noteO.notedate;
  note.appendChild(notedate1);

  let notetime1 = document.createElement("span");
  notetime1.setAttribute("class", "noteTime");
  notetime1.setAttribute("id", x);
  notetime1.innerHTML = noteO.notetime;
  note.appendChild(notetime1);
}
