import { contactTypes } from '../constants/index.js';

const parseBoolean = (maybeBoolean) => {
  if (typeof maybeBoolean !== 'string') return;
  if (maybeBoolean === 'true') {
    return "true";
  }
  if (maybeBoolean === 'false') {
    return "false";
  }
  return;
};

const parseContactType = (maybeContactType) => {
  if (typeof maybeContactType !== 'string') return;
  if (contactTypes.includes(maybeContactType)) {
    return maybeContactType;
  }
  return;
};

const parseFilterParams = (query) => {
  const { isFavourite, contactType } = query;
  const parsedIsFavorite = parseBoolean(isFavourite);
  const parsedContactType = parseContactType(contactType);

  return { isFavourite: parsedIsFavorite, contactType: parsedContactType };
};

export default parseFilterParams;


