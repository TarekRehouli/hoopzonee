import React from 'react'
import './Contact.css'

const translations = {
  en: {
    yourName: 'Your Name:*',
    enterYourName: 'Enter your name',
    yourEmail: 'Your Email:*',
    enterYourEmail: 'Enter your email',
    yourNumber: 'Your Number:*',
    enterYourNumber: 'Enter your number',
    request: 'Request:*',
    selectRegistration: 'Select your registration',
    professionalClub: 'Professional Club Registration',
    team5: 'Team - 5 Players',
    team4: 'Team - 4 Players',
    team3: 'Team - 3 Players',
    solo: 'Solo - 1 Player',
    schoolClub: 'School Club Registration',
    other: 'Other',
    chooseCourts: 'Choose Courts:*',
    selectFacility: 'Select a facility',
    interiorCourt: 'HoopZone Arena - Interior Court',
    exteriorCourt: 'HoopZone Park - Exterior Court',
    interiorGym: 'HoopZone Gym - Interior Gym',
    joinTeam: 'Join a team:(optional)',
    selectTeam: 'Select a team',
    na: "N/A",
    julienLeblanc: 'Julien Leblanc',
    charlesHugot: 'Charles Hugot',
    emmaDupuis: 'Emma Dupuis',
    bookingDate: 'Booking Date:*',
    submit: 'Submit',
    confirmationMessage: 'Thank you for your submission!'
  },
  fr: {
    yourName: 'Votre Nom:*',
    enterYourName: 'Entrez votre nom',
    yourEmail: 'Votre Email:*',
    enterYourEmail: 'Entrez votre email',
    yourNumber: 'Votre Numéro:*',
    enterYourNumber: 'Entrez votre numéro',
    request: 'Demande:*',
    selectRegistration: 'Sélectionnez votre inscription',
    professionalClub: 'Inscription au Club Professionnel',
    team5: 'Équipe - 5 Joueurs',
    team4: 'Équipe - 4 Joueurs',
    team3: 'Équipe - 3 Joueurs',
    solo: 'Solo - 1 Joueur',
    schoolClub: 'Inscription au Club Scolaire',
    other: 'Autre',
    chooseCourts: 'Choisissez les Terrains:*',
    selectFacility: 'Sélectionnez une installation',
    interiorCourt: 'HoopZone Arena - Court Intérieur',
    exteriorCourt: 'HoopZone Park - Court Extérieur',
    interiorGym: 'HoopZone Gym - Gym Intérieur',
    joinTeam: 'Rejoindre une équipe:(optionnel)',
    selectTeam: 'Sélectionnez une équipe',
    na: "N/A",
    julienLeblanc: 'Julien Leblanc',
    charlesHugot: 'Charles Hugot',
    emmaDupuis: 'Emma Dupuis',
    bookingDate: 'Date de Réservation:*',
    submit: 'Soumettre',
    confirmationMessage: 'Merci pour votre soumission !'
  }
};

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    service: '',
    court: '',
    team: '',
    date: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Display confirmation message
    alert(translations[language].confirmationMessage);
    // Reset form
    setFormData({
      name: '',
      email: '',
      number: '',
      service: '',
      court: '',
      team: '',
      date: ''
    });
  };

  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <span>{translations[language].yourName}</span>
        <input
          className="box"
          type="text"
          name="name"
          placeholder={translations[language].yourName}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <span>{translations[language].yourEmail}</span>
        <input
          type="email"
          name="email"
          placeholder={translations[language].yourEmail}
          className="box"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <span>{translations[language].yourNumber}</span>
        <input
          type="number"
          name="number"
          placeholder={translations[language].yourNumber}
          className="box"
          value={formData.number}
          onChange={handleChange}
          required
        />
        <span>{translations[language].request}</span>
        <select
          name="service"
          className="box"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            {translations[language].request}
          </option>
          <option value="schedule-appointment">Professional Club Registration</option>
          <option value="question-services">Team - 5 Players</option>
          <option value="question-services">Team - 4 Players</option>
          <option value="question-services">Team - 3 Players</option>
          <option value="question-services">Solo - 1 Player</option>
          <option value="question-services">School Club Registration</option>
          <option value="other">Other</option>
        </select>
        <span>{translations[language].chooseCourts}</span>
        <select
          name="court"
          className="box"
          value={formData.court}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            {translations[language].chooseCourts}
          </option>
          <option value="general_dentistry">HoopZone Arena - Interior Court</option>
          <option value="dental-radiography">HoopZone Park - Exterior Court</option>
          <option value="implantology">HoopZone Gym - Interior Gym</option>
        </select>
        <span>{translations[language].joinTeam}</span>
        <select
          name="team"
          className="box"
          value={formData.team}
          onChange={handleChange}
        >
          <option value="" disabled>
            {translations[language].joinTeam}
          </option>
          <option value="general_dentistry">Julien Leblanc</option>
          <option value="dental-radiography">Charles Hugot</option>
          <option value="implantology">Emma Dupuis</option>
        </select>
        <span>{translations[language].bookingDate}</span>
        <input
          type="datetime-local"
          name="date"
          className="box"
          value={formData.date}
          onChange={handleChange}
        />
        <button type="submit" className="btn dark-btn">
          {translations[language].submit}
        </button>
      </form>
    </div>
  );
};

export default Contact;
