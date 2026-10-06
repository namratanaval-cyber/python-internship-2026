const internships = [
    {
        title: "Frontend Developer Intern",
        company: "Tech Solutions",
        domain: "Web Development",
        location: "Remote"
    },
    {
        title: "Data Analyst Intern",
        company: "DataWorks",
        domain: "Data Science",
        location: "Remote"
    },
    {
        title: "Java Developer Intern",
        company: "Code Academy",
        domain: "Java",
        location: "Pune"
    },
    {
        title: "Python Developer Intern",
        company: "SoftTech",
        domain: "Python",
        location: "Remote"
    },
    {
        title: "Web Developer Intern",
        company: "Digital Labs",
        domain: "Web Development",
        location: "Mumbai"
    },
    {
        title: "Python Data Intern",
        company: "Analytics Hub",
        domain: "Python",
        location: "Remote"
    }
];

const list = document.getElementById("internship-list");
const search = document.getElementById("search");
const domain = document.getElementById("domain");
const emptyMessage = document.getElementById("empty-message");

function displayInternships() {
    const searchText = search.value.toLowerCase();
    const selectedDomain = domain.value;

    const filtered = internships.filter((internship) => {
        const matchesSearch =
            internship.title.toLowerCase().includes(searchText) ||
            internship.company.toLowerCase().includes(searchText);

        const matchesDomain =
            selectedDomain === "all" ||
            internship.domain === selectedDomain;

        return matchesSearch && matchesDomain;
    });

    list.innerHTML = "";

    if (filtered.length === 0) {
        emptyMessage.hidden = false;
        return;
    }

    emptyMessage.hidden = true;

    filtered.forEach((internship) => {
        const card = document.createElement("article");

        card.className = "card";

        card.innerHTML = `
            <h2>${internship.title}</h2>
            <p><strong>Company:</strong> ${internship.company}</p>
            <p class="domain">Domain: ${internship.domain}</p>
            <p><strong>Location:</strong> ${internship.location}</p>
        `;

        list.appendChild(card);
    });
}

search.addEventListener("input", displayInternships);
domain.addEventListener("change", displayInternships);

displayInternships();