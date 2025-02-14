function addGuestRow() {
    const table = document.getElementById("guest-table");
    const row = table.insertRow();
    
    const cell1 = row.insertCell(0);
    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.name = "guest_names[]";
    inputName.required = true;
    cell1.appendChild(inputName);
    
    const cell2 = row.insertCell(1);
    const selectMeal = document.createElement("select");
    selectMeal.name = "guest_meals[]";
    selectMeal.required = true;
    selectMeal.innerHTML = `
        <option value="standard">Стандартно меню с месо</option>
        <option value="pescetarian">Меню за пескетарианци</option>
        <option value="vegetarian">Вегетарианско меню</option>
        <option value="vegan">Веген меню</option>
        <option value="child">Детско меню</option>
    `;
    cell2.appendChild(selectMeal);
    
    const cell3 = row.insertCell(2);
    const selectStay = document.createElement("select");
    selectStay.name = "guest_stay[]";
    selectStay.required = true;
    selectStay.innerHTML = `
        <option value="yes">Да</option>
        <option value="no">Не</option>
    `;
    cell3.appendChild(selectStay);
}