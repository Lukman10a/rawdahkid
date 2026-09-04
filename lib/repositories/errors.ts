export class DuplicateEmailError extends Error {
  status = 409 as const;
  code = "DUPLICATE_EMAIL" as const;
  constructor(
    message = "Email already registered",
    public readonly email: string = "",
  ) {
    super(message);
    this.name = "DuplicateEmailError";
  }
}

export class ValidationError extends Error {
  status = 400 as const;
  code = "VALIDATION_ERROR" as const;
  constructor(
    message = "Validation failed",
    public readonly details?: unknown,
  ) {
    super(message);
    this.name = "ValidationError";
  }
}

export class DbError extends Error {
  status = 500 as const;
  code = "DB_ERROR" as const;
  constructor(
    message = "Database error",
    public readonly causeDetails?: unknown,
  ) {
    super(message);
    this.name = "DbError";
  }
}
