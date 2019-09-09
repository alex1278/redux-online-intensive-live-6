export const required = (value) => value ? void 0 : 'Value is requied';
export const minLength = (value) => value.length < 4 ? 'Value must be at least 4 characters long' : void 0;
export const maxLength = (value) => value.length > 10 ? 'Value is too long' : void 0;