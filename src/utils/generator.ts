/**
 * Message Generator.
 */
export default function generator<T>(statements: T[]): T {
  // Math.random() 會回傳介於 0 和 1 之間的
  // 正整數。我會將 Math.random() 乘以 slogans
  // 的長度，這樣數字就放大到 0~slogans 的最大長度。
  // 但是陣列不接受浮點數，所以我再套了一個 Math.round
  // 讓他變成正整數。
  return (
    statements[Math.round(Math.random() * (statements.length - 1))] ||
    statements[0]
  );
}
