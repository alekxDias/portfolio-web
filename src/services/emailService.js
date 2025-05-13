import emailjs from '@emailjs/browser';

// Configurações do EmailJS
const SERVICE_ID = 'service_nf5s6lv'
const TEMPLATE_ID = 'template_ip16ldq'
const PUBLIC_KEY = 'yNLYjMJqLTayq5lJY'

/**
 * Envia email usando EmailJS
 * @param {Object} formData - Dados do formulário
 * @returns {Promise} - Promise com resultado do envio
 */
export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      formData,
      PUBLIC_KEY
    );
    return { success: true, data: response };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return { success: false, error };
  }
};

export default { sendEmail }; 