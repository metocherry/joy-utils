/**
 * Checks if value is classified as a string primitive
 *
 * @category Lang
 * @param value input value
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 *
 * @example
 * ```typescript
 * check.isString('abc');
 * // => true
 * ```
 *
 * ```typescript
 * check.isString(123);
 * // => false
 * ```
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}
