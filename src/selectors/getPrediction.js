import axios from 'axios';

export const getPrediction = async (names, country = '') => {
  try {
    const stringNames = names.reduce((prev, elem) => `${prev}name[]=${elem.trim()}&`, '');
    const stringCountry = country !== '' ? `country_id=${country}` : '';

    const res = await axios.get(`https://api.agify.io/?${stringNames + stringCountry}`);
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
