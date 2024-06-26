const filterElement = document.querySelector("header input")

const contacts = document.querySelectorAll(".list-wrapper")

filterElement.addEventListener("input", filterContacts)

function filterContacts() {
  if (filterElement.value != "") {
    for (let contact of contacts) {
      let title = contact.querySelector("h3")
      title = title.textContent.toLowerCase()
      let filterText = filterElement.value.toLowerCase()
      if (!title.includes(filterText)) {
        contact.style.display = "none"
      } else {
        contact.style.display = "flex"
      }
    }
  } else {
    for (let contact of contacts) {
      contact.style.display = "flex"
    }
  }
}
