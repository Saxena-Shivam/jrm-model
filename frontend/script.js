// Sample destination data
const destinations = {
  jaipur: [
    { id: "113990", name: "SURATGRH THERMAL POWER STATION", risk: "" },
    { id: "123143", name: "ARIHANT FILLING & SERVICE STATION", risk: "" },
    { id: "123187", name: "BALAJI FILLING CENTRE", risk: "" },
    { id: "123191", name: "BALVIR KUMAR CHORDIA", risk: "" },
    { id: "123252", name: "CHOUDHARY BROTHERS", risk: "" },
    { id: "123326", name: "HARIOM SHANTI SERVICE STATION", risk: "" },
    { id: "123331", name: "HIGHWAY AUTO SERVICE SIKAR", risk: "" },
    { id: "123351", name: "JAI AMBE FILLING STATION", risk: "" },
    { id: "123379", name: "JYOTI TRADERS", risk: "" },
    { id: "123391", name: "KANDOI OIL COMPANY", risk: "" },
    { id: "123458", name: "MANAK MOTORS", risk: "" },
    { id: "123473", name: "MEENA SERVICE CENTRE", risk: "" },
    { id: "123612", name: "RATHI AND SONS", risk: "" },
    { id: "123659", name: "SHAHEED DAYACHAND HIGHWAY SERV", risk: "" },
    { id: "123660", name: "SHAHEED RAJ KUMAR FLN. STN", risk: "" },
    { id: "123679", name: "SHIV FILLING STATION", risk: "" },
    { id: "123771", name: "TIWARI SERVICE CENTRE", risk: "" },
    { id: "126978", name: "SHAHEED SURENDER SINGH FCENTR", risk: "" },
    { id: "127077", name: "FATEH LAL RATAN LAL GOYAL", risk: "" },
    { id: "127163", name: "BHAWANI SERVICE STATION", risk: "" },
    { id: "131315", name: "Ambey Indian Oil Filling Satation", risk: "" },
    { id: "131450", name: "SH GANPAT SINGH DHAKA FILLING STN", risk: "" },
    { id: "141601", name: "KOMAL INDIANOIL STATION", risk: "" },
    { id: "176136", name: "SHRI GANESH INDIANOIL FILLING", risk: "" },
    { id: "177820", name: "VIJESH INDIAN OIL FILLING STAT", risk: "" },
    { id: "178812", name: "HIGHWAY FILLING STATION", risk: "" },
    { id: "182683", name: "GULAB INDIANOIL", risk: "" },
    { id: "186716", name: "OM BATUK PETROLEUMS", risk: "" },
    { id: "186729", name: "J.K. PETROLEUMS", risk: "" },
    { id: "186735", name: "KANHA HIGHWAY", risk: "" },
    { id: "186762", name: "AMBA FILLING STATION", risk: "" },
    { id: "193225", name: "RAM KARAN AKODIA KISAN SEVA KE", risk: "" },
    { id: "193226", name: "JHILAI KISAN SEVA KENDRA", risk: "" },
    { id: "194107", name: "ADITYA KISSAN SEVA KENDRA", risk: "" },
    { id: "195642", name: "DEVATWAL KISAN SEVA KENDRA", risk: "" },
    { id: "195807", name: "SHREE SHIYSHAKTI KISAN SEWA KE", risk: "" },
    { id: "199106", name: "RATHORE KISAN SEWA KENDRA", risk: "" },
    { id: "205126", name: "Hemendra Indian Oil", risk: "" },
    { id: "208347", name: "MS CHITRAKOOT FILLING STN", risk: "" },
    { id: "208351", name: "MATESWARI KISAN KENDRA", risk: "" },
    { id: "210893", name: "BHAMODIYA KISAN SEWA KENDRA", risk: "" },
    { id: "210924", name: "SHRINGARI J LAL FILLING STN", risk: "" },
    { id: "215798", name: "KAPISH INDIAN OIL", risk: "" },
    { id: "216054", name: "KARGIL FILLING STATION", risk: "" },
    { id: "217081", name: "MADHUR FILLING STATION", risk: "" },
    { id: "230120", name: "SHEIKH FILLING STATION", risk: "" },
    { id: "249663", name: "R D FILLING STATION", risk: "" },
    { id: "251938", name: "SHAKAMBHARI KSK", risk: "" },
    { id: "254396", name: "BHAGWATI FILLING STATION", risk: "" },
    { id: "254750", name: "BHAGWANARAM BOHRA FILLING STN", risk: "" },
    { id: "257380", name: "ASHA KISSAN SEWA KENDRA", risk: "" },
    { id: "258723", name: "KHARBAS BHAKHAR KSK", risk: "" },
    { id: "260205", name: "SHREE CHARBHUJA KSK", risk: "" },
    { id: "269805", name: "MAA DADHEEMATI KSK", risk: "" },
    { id: "269836", name: "DEEPAK KISAN SEWA KENDRA", risk: "" },
    { id: "269930", name: "NITHARWAL FILLING STATION", risk: "" },
    { id: "272280", name: "SURYA KSK", risk: "" },
    { id: "274124", name: "GOVIND GANESH INDIAN OIL", risk: "" },
    { id: "283343", name: "GANPATI FILLING STATION", risk: "" },
    { id: "286156", name: "RADHIKA KISAN SEVA KENDRA", risk: "" },
    { id: "288221", name: "SHRI BALAJI PETROLEUM", risk: "" },
    { id: "291315", name: "SHIV KISAN SEVA KENDRA", risk: "" },
    { id: "294198", name: "JEENMATA FILLING STATION", risk: "" },
    { id: "295249", name: "MS PANCHMUKHI FILLING STATION", risk: "" },
    { id: "297750", name: "HARIOM KRISHANA FILLING STATION", risk: "" },
    { id: "308534", name: "SHREE SALASAR PETROLEUM", risk: "" },
    { id: "311462", name: "JAYA INDIAN OIL", risk: "" },
    { id: "311481", name: "LUNWA FILLING STATION", risk: "" },
    { id: "311992", name: "LAKHRAN FILLING STATION", risk: "" },
    { id: "312312", name: "GOSWAMI KISAN SEWA KENDRA", risk: "" },
    { id: "314068", name: "BALAJI FILLING STATION", risk: "" },
    { id: "315456", name: "VINOD JANGIR FUELMART", risk: "" },
    { id: "319432", name: "KOCHHOR FILLING STATION", risk: "" },
    { id: "320192", name: "PIPALODA FILLING CENTER", risk: "" },
    { id: "320453", name: "YASHROOP PETROLEUM", risk: "" },
    { id: "321207", name: "OM GANPATI FILLING STATION", risk: "" },
    { id: "323727", name: "RAMRAKH PETROLEUM KSK", risk: "" },
    { id: "326544", name: "KHATRI FILLING STATION", risk: "" },
    { id: "327750", name: "BOHRA AUTOMOBILES", risk: "" },
    { id: "330095", name: "MARUDHAR FILLING STATION", risk: "" },
    { id: "331350", name: "SHREE KARNI INDIANOIL", risk: "" },
    { id: "332153", name: "FRIENDS PETROLEUM", risk: "" },
    { id: "332918", name: "Y.M.FILLING STATION", risk: "" },
    { id: "334697", name: "SIDDHI VINAYAK INDIAN OIL", risk: "" },
    { id: "334855", name: "NEELKANTH PETROLEUM KSK", risk: "" },
    { id: "335063", name: "RMD INDIAN OIL", risk: "" },
    { id: "335762", name: "DATA KRIPA KISAN SEVA KENDRA", risk: "" },
    { id: "338889", name: "SETH SHRIRAM INDIAN OIL", risk: "" },
    { id: "339166", name: "ANIL INDIAN OIL PUMP", risk: "" },
    { id: "342123", name: "VUENDRA PETROLEUM", risk: "" },
    { id: "342748", name: "KRISHNA KRUPA FILLING STATION", risk: "" },
    { id: "342835", name: "SHREE JAGDISH INDIAN OIL", risk: "" },
    { id: "343521", name: "MALIK FILLING STATION", risk: "" },
    { id: "345203", name: "NEHALRAJ INDIANOIL - ADHOC", risk: "" },
    { id: "345302", name: "SHIV SHAKTI INDIAN OIL KSK", risk: "" },
    { id: "345346", name: "B M FILLING STATION", risk: "" },
    { id: "345997", name: "BABA SAHAJ BHARTI INDIAN OIL", risk: "" },
    { id: "346429", name: "SHREE AGRASEN FILLING STATION", risk: "" },
    { id: "347620", name: "MAA JWALA INDIAN OIL", risk: "" },
    { id: "347623", name: "BHAGWAN JI INDIAN OIL", risk: "" },
    { id: "351618", name: "DHANOP MAA KSK", risk: "" },
    { id: "351640", name: "SHREE LADDU GOPAL FILLING STATION", risk: "" },
    { id: "352231", name: "ADITYA INDIAN OIL", risk: "" },
    { id: "354561", name: "SHREE DEVNARAYAN FILLING STATION", risk: "" },
    { id: "355664", name: "SHIYAM INDIAN OIL", risk: "" },
    { id: "356378", name: "SHILDEEP INDIAN OIL", risk: "" },
    { id: "501048", name: "RSRTC KOTPUTLI", risk: "" },
    { id: "501050", name: "RSRTC SIKAR", risk: "" },
    { id: "501051", name: "RSRTC JHUNJHUNU", risk: "" },
    { id: "501054", name: "RSRTC SRI MADHOPUR", risk: "" },
    { id: "501866", name: "RSRTC HANUMANGARH", risk: "" },
    { id: "501875", name: "RSRTC DAUSA(6668", risk: "" },
    { id: "501889", name: "RSRTC SARDARSAHAR", risk: "" },
    { id: "505066", name: "RSRTC, TONK", risk: "" },
    { id: "517283", name: "RSRTC DIDWANA", risk: "" },
    { id: "521932", name: "SSERACJP at RDI FL", risk: "" },
    { id: "551311", name: "MS RSRTC KHETRI", risk: "" },
    { id: "551384", name: "RSRTC CHURU", risk: "" },
    { id: "570674", name: "RSRTC Shahpura", risk: "" },
    { id: "ZC6685", name: "COCO PARBATSAR", risk: "" },
  ],
};

// Populate destinations dropdown
function populateDestinations(terminal) {
  const select = document.getElementById("destinationSelect");
  select.innerHTML = '<option value="">Select Destination...</option>';

  if (destinations[terminal]) {
    destinations[terminal].forEach((dest) => {
      const option = document.createElement("option");
      option.value = dest.id;
      option.textContent = `${dest.id} - ${dest.name}`;
      option.dataset.risk = dest.risk;
      option.dataset.name = dest.name;
      select.appendChild(option);
    });

    document.getElementById("totalStations").textContent =
      destinations[terminal].length;
  }
}

// Show destination page
function showDestination() {
  const terminal = document.getElementById("terminalSelect").value;
  const destinationSelect = document.getElementById("destinationSelect");
  const selectedOption =
    destinationSelect.options[destinationSelect.selectedIndex];

  if (!terminal || !selectedOption.value) {
    // alert('Please select both terminal and destination');
    showCustomAlert("Please select both terminal and destination");
    return;
  }

  const destinationId = selectedOption.value;
  const destinationName = selectedOption.dataset.name;
  const riskLevel = selectedOption.dataset.risk;
  const terminalName =
    terminal.charAt(0).toUpperCase() + terminal.slice(1) + " Terminal";

  // Update route breadcrumb
  document.getElementById("startPoint").textContent = terminalName;
  document.getElementById("endPoint").textContent = destinationName;
  document.getElementById("routeBreadcrumb").style.display = "block";

  // Update stats
  document.getElementById("selectedRoute").textContent = destinationId;
  document.getElementById("destinationStatus").textContent = "Active";
  document.getElementById("riskLevel").textContent = riskLevel;

  // Load destination HTML page
  const destinationViewer = document.getElementById("destinationViewer");
  const htmlPath = `destinations/${destinationId}.html`;

  destinationViewer.innerHTML = `
                <iframe 
                    class="destination-iframe" 
                    src="${htmlPath}"
                    onload="handleIframeLoad(this)"
                    onerror="handleIframeError(this, '${destinationId}', '${destinationName}')"
                    title="Destination ${destinationId} - ${destinationName}">
                </iframe>
            `;
}

// Handle iframe load success
function handleIframeLoad(iframe) {
  console.log("Destination page loaded successfully");

  // Try to access iframe content to check if it loaded properly
  try {
    iframe.contentDocument.title;
  } catch (e) {
    // If we can't access the content, it might be a cross-origin issue
    // but the page might still be loading correctly
    console.log(
      "Iframe loaded but content access restricted (normal for cross-origin)"
    );
  }
}

// Handle iframe load error
function handleIframeError(iframe, destinationId, destinationName) {
  console.error(`Failed to load destination page: ${destinationId}`);

  const destinationViewer = document.getElementById("destinationViewer");
  destinationViewer.innerHTML = `
                <div class="error-message">
                    <div class="error-icon">
                        <i class="fas fa-exclamation-triangle"></i>
                    </div>
                    <h4>Page Not Found</h4>
                    <p>The HTML page for destination <strong>${destinationId}</strong> could not be loaded.</p>
                    <p>Expected path: <code>destinations/${destinationId}.html</code></p>
                    <div class="station-info mt-4">
                        <h6 class="text-primary">Destination Information</h6>
                        <p><strong>Station ID:</strong> ${destinationId}</p>
                        <p><strong>Station Name:</strong> ${destinationName}</p>
                        <p><strong>Status:</strong> HTML page missing</p>
                    </div>
                </div>
            `;
}

// Clear viewer
function clearViewer() {
  const destinationViewer = document.getElementById("destinationViewer");
  destinationViewer.innerHTML = `
                <div class="welcome-message">
                    <div class="welcome-icon">
                        <i class="fas fa-map-marked-alt"></i>
                    </div>
                    <h4>Welcome to JRM Route Viewer</h4>
                    <p>Please select a terminal and destination to view detailed information</p>
                </div>
            `;

  // Reset selections
  document.getElementById("destinationSelect").selectedIndex = 0;
  document.getElementById("routeBreadcrumb").style.display = "none";

  // Reset stats
  document.getElementById("selectedRoute").textContent = "-";
  document.getElementById("destinationStatus").textContent = "-";
  document.getElementById("riskLevel").textContent = "-";
}

// Event listeners
document
  .getElementById("terminalSelect")
  .addEventListener("change", function () {
    const selectedTerminal = this.value;
    if (selectedTerminal) {
      populateDestinations(selectedTerminal);
      clearViewer();
    }
  });

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  populateDestinations("jaipur"); // Default to Jaipur
});

// Add keyboard shortcuts
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "Enter") {
    showDestination();
  } else if (event.key === "Escape") {
    clearViewer();
  }
});

// Enhanced error handling for iframe loading
window.addEventListener("message", function (event) {
  // Handle messages from iframe if needed
  if (event.data && event.data.type === "destinationLoaded") {
    console.log("Destination page loaded:", event.data);
  }
});

function toggleLegends() {
  const legends = document.getElementById("keyLegends");
  if (legends.style.display === "none") {
    legends.style.display = "block";
  } else {
    legends.style.display = "none";
  }
}

function showCustomAlert(message) {
  const modal = document.getElementById("customAlert");
  modal.querySelector("p").textContent = message;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("customAlert").style.display = "none";
}
