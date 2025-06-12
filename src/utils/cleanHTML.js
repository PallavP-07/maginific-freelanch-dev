// utils/cleanHTML.js
export const cleanHTML = (str) => {
  if (!str) return '';
  return str.replace(/<p>/g, '')
            .replace(/<\/p>/g, '')
            .replace(/&nbsp;/g, '');
};
