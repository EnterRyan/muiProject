import DOMPurify from 'dompurify';

const XSSFilter = (targetHTML) => {
  const sanitizedHTTML = DOMPurify.sanitize(targetHTML);
  return sanitizedHTTML;
};

export default XSSFilter;
