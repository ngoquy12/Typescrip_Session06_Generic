// Viết một hàm nhận vào tham số có kiểu dữ liệu bất kì và khi gọi hàm thì có thể truyền được nhiều
// kiểu dữ liệu khác nhau
// const anyFuc = (anyType: any): any => {
//   return anyType;
// };

// const anyFuc1 = anyFuc(1);
// const anyFuc2 = anyFuc(1);

// Cú pháp của Generic
function identity<T>(anyType: T): T {
  return anyType;
}

// Type alias
interface Pair<T, U> {
  first: T;
  last: U;
}

const indentity1 = identity(2);
const indentity2 = identity(true);
const indentity3 = identity("Hello");

function createPair<T, U>(first: T, last: U): Pair<T, U> {
  return { first: first, last: last };
}

// const pari1 = createPair(1, "A");
// console.log("pari1", pari1);
class Box<T> {
  value: T;

  constructor(value: T) {
    this.value = value; // Từ khóa this sẽ trỏ đến đối tươngj mà nó đang đứng
  }

  getValue(): T {
    return this.value;
  }
}

// Khởi tạo đối tượng
const box1 = new Box(1);
const box2 = new Box("Box 2");
// Gọi hàm getValue()
// console.log(box1.getValue());
// console.log(box2.getValue());

function merge<T extends object, U extends object>(objA: T, objB: U) {
  // Gộp hay gắn hai đối tượng thành 1 đối tượng duy nhất
  return Object.assign(objA, objB);
  // objB sẽ đè lên objA
}

const obj1 = { name: "A", age: 21 };
const obj2 = { address: "Hà Nội", email: "a@gmail.com", name: "B" };

const resultMerge = merge(obj1, obj2);

// console.log("result merge=>", resultMerge);

// Xây dụng hàm myMap()
function myMap<T, U>(array: T[], callbackFunc: (item: T) => U): U[] {
  // Khai báo một mảng rỗng để nhận vào các giá trị từ mảng cũ
  let result: U[] = [];
  for (const itemArr of array) {
    result.push(callbackFunc(itemArr)); // Cứ mỗi lần lặp thì sẽ push từng phần tử vào trong mảng mới
  }
  return result;
}

const myArray = [1, 2, 3, 4, 5, 6];

const result = myMap(myArray, (t) => t * 2);

// console.log("result", result);

// Hàm myFilter
function myFilter<T>(array: T[], callbackFunc: (item: T) => boolean): T[] {
  // Khai báo một mảng rỗng để nhận các giá trị thỏa mãn điều kiện dựa trên các phần tử của mảng cũ
  const results: T[] = [];

  // Lặp qua mảng
  // for (const arrElement of array) {
  //   if(callbackFunc(arrElement)){
  //     results.push(arrElement)
  //   }
  // }
  for (let i = 0; i < array.length; i++) {
    if (callbackFunc(array[i])) results.push(array[i]);
  }

  return results;
}

const myArray2 = [1, 2, 3, 4, 5, 6];

const result2 = myFilter(myArray2, (item) => item > 2);

console.log("result2", result2);
