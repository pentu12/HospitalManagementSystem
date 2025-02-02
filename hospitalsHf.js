// Define hospitals for each metropolitan city
const hospitalsByCity = {
    Mumbai: [
        'Breach Candy Hospital',
        'Hinduja Hospital',
        'Kokilaben Dhirubhai Ambani Hospital',
        'Lilavati Hospital',
        'S L Raheja Hospital',
        'Jaslok Hospital',
        'Fortis Hiranandani Hospital',
        'Tata Memorial Hospital',
        'P.D. Hinduja National Hospital',
        'Bombay Hospital',
        'Surana Sethia Hospital',
        'Wockhardt Hospital',
        'Seven Hills Hospital',
        'Fortis Hospital',
        'Asian Heart Institute'
    ],
    Delhi: [
        'AIIMS',
        'Fortis Escorts Heart Institute',
        'Max Super Speciality Hospital',
        'Apollo Hospital',
        'Medanta The Medicity',
        'BLK Super Speciality Hospital',
        'Moolchand Hospital',
        'Rockland Hospital',
        'Indraprastha Apollo Hospital',
        'Sir Ganga Ram Hospital',
        'Batra Hospital',
        'Sitaram Bhartia Institute of Science and Research',
        'VIMHANS',
        'The Lalit Hospital',
        'Rajiv Gandhi Cancer Institute'
    ],
    Bangalore: [
        'Manipal Hospital',
        'Fortis La Femme',
        'BGS Global Hospital',
        'Narayana Health',
        'Sakra Premium Hospital',
        'M.S. Ramaiah Memorial Hospital',
        'St. John’s Medical College Hospital',
        'Sri Sathya Sai Institute of Higher Medical Sciences',
        'HCG Cancer Centre',
        'Bangalore Baptist Hospital',
        'Columbia Asia Hospital',
        'The Bangalore Hospital',
        'Cloudnine Hospital',
        'Motherhood Hospital',
        'Aster CMI Hospital'
    ],
    Chennai: [
        'Apollo Hospital',
        'Fortis Malar Hospital',
        'MIOT International',
        'Government General Hospital',
        'Sri Ramachandra Medical Centre',
        'Global Health City',
        'Kaveri Hospital',
        'MedIndia Hospital',
        'Sree Balaji Medical College and Hospital',
        'GGH Chennai',
        'Chennai National Hospital',
        'Hindu Mission Hospital',
        'St. Isabel’s Hospital',
        'Sankara Nethralaya',
        'Sree Ramachandra Hospital'
    ],
    Kolkata: [
        'AMRI Hospitals',
        'Belle Vue Clinic',
        'Medica Super Speciality Hospital',
        'Kolkata Medical College and Hospital',
        'Rabindranath Tagore International Institute of Cardiac Sciences',
        'Fortis Hospital',
        'Peerless Hospital',
        'Apollo Gleneagles Hospital',
        'R.N. Tagore International Institute of Cardiac Sciences',
        'Care Clinic',
        'SPS Hospital',
        'KPC Medical College & Hospital',
        'BM Birla Heart Research Centre',
        'Narayana Multispeciality Hospital',
        'Jeevandeep Hospital'
    ],
    Hyderabad: [
        'Care Hospital',
        'KIMS Hospital',
        'Yashoda Hospitals',
        'Global Hospital',
        'Apollo Hospitals',
        'MaxCure Hospitals',
        'Asian Institute of Gastroenterology',
        'Medicover Hospital',
        'Rainbow Children’s Hospital',
        'Shree Vishnu Hospital',
        'Hyderabad Heart Centre',
        'NIMS Hospital',
        'Omni Hospitals',
        'Bela Nari Health Centre',
        'Deccan Hospitals'
    ]
};

// Function to update the hospital dropdown based on selected city
function updateHospitals() {
    const city = document.getElementById('city').value;
    const hospitalDropdown = document.getElementById('hospital');

    // Clear current options
    hospitalDropdown.innerHTML = '<option value="">--Select a hospital--</option>';

    if (city && hospitalsByCity[city]) {
        // Populate hospital options based on the selected city
        hospitalsByCity[city].forEach(hospital => {
            const option = document.createElement('option');
            option.value = hospital;
            option.textContent = hospital;
            hospitalDropdown.appendChild(option);
        });
    }
}
