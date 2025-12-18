import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { VALIDATION } from '../constants/validation.constant';

export class CustomValidators {

  // Email validation with custom patterns
  static email(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;

    // Use pattern from VALIDATION constants
    const emailPattern = VALIDATION.EMAIL.PATTERN;
    const isValid = emailPattern.test(control.value);

    return isValid ? null : {
      email: {
        value: control.value,
        message: VALIDATION.EMAIL.MESSAGE.INVALID
      }
    };
  }

  // Strong password validation
  static strongPassword(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;

    const password = control.value;
    const errors: any = {};

    // Use constants from VALIDATION
    if (password.length < VALIDATION.PASSWORD.MIN_LENGTH) {
      errors.minLength = {
        required: VALIDATION.PASSWORD.MIN_LENGTH,
        actual: password.length,
        message: VALIDATION.PASSWORD.MESSAGE.MIN_LENGTH
      };
    }

    if (password.length > VALIDATION.PASSWORD.MAX_LENGTH) {
      errors.maxLength = {
        required: VALIDATION.PASSWORD.MAX_LENGTH,
        actual: password.length,
        message: VALIDATION.PASSWORD.MESSAGE.MAX_LENGTH
      };
    }

    // Use pattern from VALIDATION constants
    if (!VALIDATION.PASSWORD.PATTERN.test(password)) {
      errors.pattern = { message: VALIDATION.PASSWORD.MESSAGE.PATTERN };
    }

    return Object.keys(errors).length > 0 ? { strongPassword: errors } : null;
  }

  // Phone number validation (Thai format)
  static phoneNumber(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;

    // Use pattern from VALIDATION constants (normalize to match pattern)
    const normalizedValue = control.value.replace(/\s/g, '').replace(/^\+66/, '0');
    const phonePattern = VALIDATION.PHONE.PATTERN;
    const isValid = phonePattern.test(normalizedValue);

    return isValid ? null : {
      phoneNumber: {
        value: control.value,
        message: VALIDATION.PHONE.MESSAGE.INVALID
      }
    };
  }

  // Thai ID validation
  static thaiId(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;

    const id = control.value.replace(/-/g, '');

    // Use pattern from VALIDATION constants
    if (!VALIDATION.THAI_ID.PATTERN.test(id)) {
      return { thaiId: { message: VALIDATION.THAI_ID.MESSAGE.INVALID } };
    }

    // Thai ID check digit algorithm
    let sum = 0;
    for (let i = 0; i < 12; i++) {
      sum += parseInt(id[i]) * (13 - i);
    }
    const checkDigit = (11 - (sum % 11)) % 10;

    if (parseInt(id[12]) !== checkDigit) {
      return { thaiId: { message: VALIDATION.THAI_ID.MESSAGE.INVALID } };
    }

    return null;
  }

  // Credit card validation (Luhn algorithm)
  static creditCard(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;

    const cardNumber = control.value.replace(/\s/g, '');
    if (!/^\d{13,19}$/.test(cardNumber)) {
      return { creditCard: { message: 'Invalid credit card format' } };
    }

    // Luhn algorithm
    let sum = 0;
    let isEven = false;

    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber[i]);

      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      isEven = !isEven;
    }

    return (sum % 10) === 0 ? null : { creditCard: { message: 'Invalid credit card number' } };
  }

  // URL validation
  static url(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;

    try {
      new URL(control.value);
      return null;
    } catch {
      return { url: { value: control.value, message: 'Invalid URL format' } };
    }
  }

  // Date range validation
  static dateRange(startDateField: string, endDateField: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      if (!(formGroup instanceof FormGroup)) return null;

      const startDate = formGroup.get(startDateField)?.value;
      const endDate = formGroup.get(endDateField)?.value;

      if (!startDate || !endDate) return null;

      const start = new Date(startDate);
      const end = new Date(endDate);

      if (start >= end) {
        return {
          dateRange: {
            message: 'End date must be after start date',
            startDate,
            endDate
          }
        };
      }

      return null;
    };
  }

  // Password confirmation validation
  static passwordMatch(passwordField: string, confirmPasswordField: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      if (!(formGroup instanceof FormGroup)) return null;

      const password = formGroup.get(passwordField)?.value;
      const confirmPassword = formGroup.get(confirmPasswordField)?.value;

      if (!password || !confirmPassword) return null;

      if (password !== confirmPassword) {
        return {
          passwordMatch: {
            message: 'Passwords do not match',
            passwordField,
            confirmPasswordField
          }
        };
      }

      return null;
    };
  }

  // File size validation
  static fileSize(maxSizeInMB?: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;

      const file = control.value;
      if (file instanceof File) {
        // Use max size from VALIDATION constants if not provided
        const maxSize = maxSizeInMB || (VALIDATION.FILE.MAX_SIZE / 1024 / 1024);
        const maxSizeInBytes = maxSize * 1024 * 1024;

        if (file.size > maxSizeInBytes) {
          return {
            fileSize: {
              message: VALIDATION.FILE.MESSAGE.MAX_SIZE,
              maxSize: maxSize,
              actualSize: (file.size / (1024 * 1024)).toFixed(2)
            }
          };
        }
      }

      return null;
    };
  }

  // File type validation
  static fileType(allowedTypes?: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;

      const file = control.value;
      if (file instanceof File) {
        // Use allowed types from VALIDATION constants if not provided
        const types = allowedTypes || VALIDATION.FILE.ALLOWED_TYPES;
        const fileType = file.type;
        const isValidType = types.some(type => fileType.startsWith(type));

        if (!isValidType) {
          return {
            fileType: {
              message: VALIDATION.FILE.MESSAGE.INVALID_TYPE,
              allowedTypes: types,
              actualType: fileType
            }
          };
        }
      }

      return null;
    };
  }

  // Age validation
  static minAge(minAge: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;

      const birthDate = new Date(control.value);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      const actualAge = monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ? age - 1
        : age;

      if (actualAge < minAge) {
        return {
          minAge: {
            message: `Age must be at least ${minAge} years`,
            required: minAge,
            actual: actualAge
          }
        };
      }

      return null;
    };
  }

  // Username validation (alphanumeric + underscore)
  static username(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;

    const usernamePattern = /^[a-zA-Z0-9_]{3,20}$/;
    const isValid = usernamePattern.test(control.value);

    return isValid ? null : {
      username: {
        value: control.value,
        message: 'Username must be 3-20 characters, alphanumeric and underscore only'
      }
    };
  }

  // IP address validation
  static ipAddress(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;

    const ipPattern = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const isValid = ipPattern.test(control.value);

    return isValid ? null : {
      ipAddress: {
        value: control.value,
        message: 'Invalid IP address format'
      }
    };
  }

  // MAC address validation
  static macAddress(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;

    const macPattern = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
    const isValid = macPattern.test(control.value);

    return isValid ? null : {
      macAddress: {
        value: control.value,
        message: 'Invalid MAC address format'
      }
    };
  }

  // Custom regex validation
  static pattern(pattern: RegExp, errorMessage: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;

      const isValid = pattern.test(control.value);
      return isValid ? null : {
        pattern: {
          value: control.value,
          message: errorMessage,
          pattern: pattern.toString()
        }
      };
    };
  }

  // Conditional validation
  static conditional(condition: (control: AbstractControl) => boolean, validator: ValidatorFn): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!condition(control)) return null;
      return validator(control);
    };
  }

  // Async validation (for API calls) - with debounce for performance
  static asyncValidator(
    validatorFn: (value: any) => Promise<boolean>,
    errorMessage: string,
    debounceTimeMs: number = 300
  ): ValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> | Promise<ValidationErrors | null> => {
      if (!control.value) {
        return Promise.resolve(null);
      }

      // Use Observable with debounce for better performance
      return of(control.value).pipe(
        debounceTime(debounceTimeMs),
        distinctUntilChanged(),
        switchMap(value =>
          validatorFn(value).then(isValid => {
            return isValid ? null : {
              async: {
                value: control.value,
                message: errorMessage
              }
            };
          })
        ),
        catchError(() => {
          // On error, don't fail validation (let user continue)
          return of(null);
        })
      );
    };
  }
}

