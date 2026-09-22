/**
 * Security & Sanitization Utilities for XPense Cloud
 * Protects form inputs against XSS, script injections, template literals, and code brackets.
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
  sanitizedValue: string;
}

// Regex to detect forbidden code braces { }
export const FORBIDDEN_BRACES_REGEX = /[{}]/;

// Regex to detect dangerous code/script injection patterns
export const DANGEROUS_INJECTION_REGEX = /<[^>]*>|javascript:|eval\(|onload=|onerror=|document\.|window\.|alert\(|\$\{/i;

/**
 * Strips HTML tags, code backticks, and normalizes spacing.
 */
export function sanitizeText(input: string): string {
  if (!input) return '';
  return input
    .replace(/<[^>]*>/g, '') // Strip HTML tags
    .replace(/[<>\`]/g, '')   // Strip angle brackets and code backticks
    .trim();
}

/**
 * Validates Full Name:
 * - 2 to 60 characters
 * - No braces { }
 * - No script/tag injections
 * - Only standard letters, spaces, hyphens, periods, and apostrophes
 */
export function validateName(name: string): ValidationResult {
  const trimmed = name.trim();

  if (!trimmed) {
    return { isValid: false, error: 'Full name is required', sanitizedValue: '' };
  }

  if (FORBIDDEN_BRACES_REGEX.test(name)) {
    return {
      isValid: false,
      error: 'Security alert: Code braces { } are not permitted in name',
      sanitizedValue: name.replace(/[{}]/g, '').trim(),
    };
  }

  if (DANGEROUS_INJECTION_REGEX.test(name)) {
    return {
      isValid: false,
      error: 'Security alert: Code injection tokens or tags detected',
      sanitizedValue: sanitizeText(name),
    };
  }

  if (trimmed.length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters', sanitizedValue: trimmed };
  }

  if (trimmed.length > 60) {
    return { isValid: false, error: 'Name cannot exceed 60 characters', sanitizedValue: trimmed.slice(0, 60) };
  }

  // Letters (international Latin/accents), spaces, hyphens, periods, apostrophes
  const nameRegex = /^[a-zA-ZÀ-ÿ\s'.-]+$/;
  if (!nameRegex.test(trimmed)) {
    return {
      isValid: false,
      error: 'Name can only contain letters, spaces, hyphens, and apostrophes',
      sanitizedValue: trimmed,
    };
  }

  return { isValid: true, sanitizedValue: trimmed };
}

/**
 * Validates Email:
 * - Standard RFC-compliant format
 * - Strictly NO braces { }, NO angle brackets, NO script patterns
 * - Max 100 characters
 */
export function validateEmail(email: string): ValidationResult {
  const trimmed = email.trim().toLowerCase();

  if (!trimmed) {
    return { isValid: false, error: 'Email address is required', sanitizedValue: '' };
  }

  if (FORBIDDEN_BRACES_REGEX.test(email)) {
    return {
      isValid: false,
      error: 'Security alert: Braces { } are strictly forbidden in email',
      sanitizedValue: email.replace(/[{}]/g, '').trim(),
    };
  }

  if (DANGEROUS_INJECTION_REGEX.test(email)) {
    return {
      isValid: false,
      error: 'Security alert: Code injection tokens detected in email',
      sanitizedValue: sanitizeText(email),
    };
  }

  if (trimmed.length > 100) {
    return { isValid: false, error: 'Email cannot exceed 100 characters', sanitizedValue: trimmed.slice(0, 100) };
  }

  // Strict email regex without braces or code chars
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;
  if (!emailRegex.test(trimmed)) {
    return {
      isValid: false,
      error: 'Please enter a valid email address (e.g. name@company.com)',
      sanitizedValue: trimmed,
    };
  }

  return { isValid: true, sanitizedValue: trimmed };
}

/**
 * Validates Demo Description:
 * - Exactly max 256 characters (enforced)
 * - Strictly NO braces { }
 * - Strictly NO code scripts, tags, or template literals
 * - Minimum 5 characters
 */
export function validateDescription(desc: string): ValidationResult {
  const trimmed = desc.trim();

  if (!trimmed) {
    return { isValid: false, error: 'Please enter a brief description of your demo needs', sanitizedValue: '' };
  }

  if (FORBIDDEN_BRACES_REGEX.test(desc)) {
    return {
      isValid: false,
      error: 'Security alert: Code braces { } are strictly forbidden in description',
      sanitizedValue: desc.replace(/[{}]/g, ''),
    };
  }

  if (DANGEROUS_INJECTION_REGEX.test(desc)) {
    return {
      isValid: false,
      error: 'Security alert: Code injection tokens or HTML tags are not permitted',
      sanitizedValue: sanitizeText(desc),
    };
  }

  if (trimmed.length < 5) {
    return { isValid: false, error: 'Description must be at least 5 characters', sanitizedValue: trimmed };
  }

  if (desc.length > 256) {
    return {
      isValid: false,
      error: `Description exceeds the 256-character limit (${desc.length}/256)`,
      sanitizedValue: desc.slice(0, 256),
    };
  }

  return { isValid: true, sanitizedValue: sanitizeText(trimmed) };
}
