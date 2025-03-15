document.addEventListener("DOMContentLoaded", () => {
    const calendar = document.getElementById("calendar");
    const currentMonth = document.getElementById("current-month");
    const prevMonthBtn = document.getElementById("prev-month");
    const nextMonthBtn = document.getElementById("next-month");
    const eventModal = document.getElementById("event-modal");
    const closeModal = document.querySelector(".close");
    const eventDateInput = document.getElementById("event-date");
    const eventTitleInput = document.getElementById("event-title");
    const saveEventBtn = document.getElementById("save-event");

    let selectedDate;
    let currentDate = new Date();
    let events = JSON.parse(localStorage.getItem("events")) || [];

    function renderCalendar() {
        calendar.innerHTML = "";
        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        currentMonth.textContent = `${currentDate.getFullYear()}年 ${currentDate.getMonth() + 1}月`;

        for (let i = 1; i <= lastDay.getDate(); i++) {
            const dayDiv = document.createElement("div");
            dayDiv.classList.add("day");
            dayDiv.textContent = i;

            const eventList = events.filter(e => e.date === formatDate(currentDate.getFullYear(), currentDate.getMonth() + 1, i));
            eventList.forEach(event => {
                const eventDiv = document.createElement("div");
                eventDiv.classList.add("event");
                eventDiv.textContent = event.title;
                dayDiv.appendChild(eventDiv);
            });

            dayDiv.addEventListener("click", () => openEventModal(i));
            calendar.appendChild(dayDiv);
        }
    }

    function openEventModal(day) {
        selectedDate = formatDate(currentDate.getFullYear(), currentDate.getMonth() + 1, day);
        eventDateInput.value = selectedDate;
        eventTitleInput.value = "";
        eventModal.style.display = "block";
    }

    function saveEvent() {
        const title = eventTitleInput.value.trim();
        if (!title) return;
        events.push({ date: selectedDate, title });
        localStorage.setItem("events", JSON.stringify(events));
        eventModal.style.display = "none";
        renderCalendar();
    }

    function formatDate(year, month, day) {
        return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    }

    prevMonthBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    closeModal.addEventListener("click", () => eventModal.style.display = "none");
    saveEventBtn.addEventListener("click", saveEvent);

    renderCalendar();
});
