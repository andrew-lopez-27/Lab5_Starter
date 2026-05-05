// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

const functions = { isPhoneNumber, isEmail, isStrongPassword, isDate, isHexColor };

// TODO - Part 2

// 1. isPhoneNumber
test('Valid phone number returns true 1', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});
test('Valid phone number with parentheses returns true 2', () => {
  expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('Letters in phone number returns false 1', () => {
  expect(functions.isPhoneNumber('abc-def-ghij')).toBe(false);
});
test('Missing digits returns false 2', () => {
  expect(functions.isPhoneNumber('123-456')).toBe(false);
});

// 2. isEmail
test('Valid email returns true 1', () => {
  expect(functions.isEmail('student@ucsd.edu')).toBe(true);
});
test('Valid simple email returns true 2', () => {
  expect(functions.isEmail('testuser@gmail.com')).toBe(true);
});
test('Missing @ symbol returns false 1', () => {
  expect(functions.isEmail('studentucsd.edu')).toBe(false);
});
test('Missing domain extension returns false 2', () => {
  expect(functions.isEmail('student@gmail')).toBe(false);
});

// 3. isStrongPassword
test('Strong password with numbers and underscore returns true 1', () => {
  expect(functions.isStrongPassword('A123_4567')).toBe(true);
});
test('Strong password with mixed case returns true 2', () => {
  expect(functions.isStrongPassword('pAssWord_99')).toBe(true);
});
test('Password too short returns false 1', () => {
  expect(functions.isStrongPassword('Ab1')).toBe(false);
});
test('Password starting with number returns false 2', () => {
  expect(functions.isStrongPassword('1Password')).toBe(false);
});

// 4. isDate
test('Standard date format returns true 1', () => {
  expect(functions.isDate('05/04/2026')).toBe(true);
});
test('Single digit month/day returns true 2', () => {
  expect(functions.isDate('1/1/2000')).toBe(true);
});
test('Date with dashes returns false 1', () => {
  expect(functions.isDate('05-04-2026')).toBe(false);
});
test('Year first format returns false 2', () => {
  expect(functions.isDate('2026/05/04')).toBe(false);
});

// 5. isHexColor
test('Valid 3-character hex returns true 1', () => {
  expect(functions.isHexColor('#FFF')).toBe(true);
});
test('Valid 6-character hex returns true 2', () => {
  expect(functions.isHexColor('#FF0000')).toBe(true);
});
test('Hex color with too many characters returns false 1', () => {
  expect(functions.isHexColor('#FFFFFF123')).toBe(false);
});
test('Invalid hex characters returns false 2', () => {
  expect(functions.isHexColor('#GGGGGG')).toBe(false);
});