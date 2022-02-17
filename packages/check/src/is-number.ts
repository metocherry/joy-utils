/**
 * Checks if value is classified as a number primitive
 *
 * @category Lang
 * @param value input value
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 *
 * @example
 * ```typescript
 * check.isNumber(123);
 * // => true
 * ```
 *
 * ```typescript
 * check.isNumber('abc');
 * // => false
 * ```
 */
export function isNumber(value: unknown): value is number{
  return typeof value === 'number';
}
