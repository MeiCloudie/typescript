console.log("Hello World!")

//Boolean
console.log("Boolean")

let isTrue: boolean = true
let isFalse: boolean = false

console.log("isTrue: " + isTrue)
console.log("isFalse: " + isFalse)

//Number
console.log("Number")

let intValue: number = 42
let floatValue: number = 3.14

console.log("intValue: " + intValue)
console.log("floatValue: " + floatValue)

//String
console.log("String")

let fullname: string = "John Doe"

console.log("fullname: " + fullname)

//Void
console.log("Void")

// Kiểu trả về được suy luận là void
function noop() {
  return
}

//Undefined và Null
console.log("Undefined và Null")

// Ví dụ về sử dụng kiểu dữ liệu undefined
let age: number | undefined
console.log("age: " + age) // Kết quả sẽ là undefined

// Ví dụ về sử dụng kiểu dữ liệu null
let username: string | null = null
console.log("username: " + username) // Kết quả sẽ là null

//-----------------

//Objects và Arrays
console.log("Objects và Arrays")

// Định nghĩa kiểu dữ liệu cho một đối tượng
console.log("Objects")
function inToaDo(toaDo: { x: number; y: number }) {
  console.log("Giá trị x của tọa độ là " + toaDo.x)
  console.log("Giá trị y của tọa độ là " + toaDo.y)
}

inToaDo({ x: 3, y: 7 })

// Định nghĩa kiểu dữ liệu cho một mảng
console.log("Arrays")
const soNguyen: number[] = [1, 2, 3]
console.log(soNguyen)

//-----------------

//Functions
console.log("Functions")

// Function declaration
function square(x: number): number {
  const result = x * x
  console.log("Bình phương của", x, "là", result)
  return result
}

square(5) // Kết quả: Bình phương của 5 là 25

// Arrow function
const squareArrow = (x: number): number => {
  const result = x * x
  console.log("Bình phương của", x, "là", result)
  return result
}

squareArrow(7) // Kết quả: Bình phương của 7 là 49

// Function type
let calculate: (x: number, y: number) => number
calculate = (x: number, y: number): number => {
  const result = x + y
  console.log("Tổng của", x, "và", y, "là", result)
  return result
}

calculate(3, 4) // Kết quả: Tổng của 3 và 4 là 7

//-----------------

//Type Aliases
console.log("Type Aliases")

type Name = string
type Age = number
type User = { name: Name; age: Age }

const user: User = { name: "John", age: 30 }

console.log("Thông tin người dùng:", user)

//-----------------

//Interface
console.log("Interface")

interface Person {
  name: string
  age: number
}

function greet(person: Person) {
  console.log(`Hello, ${person.name}! You are ${person.age} years old.`)
}

const john: Person = { name: "John", age: 30 }
greet(john)

//-----------------

//Tuples và Enums
console.log("Tuples")

// Khai báo một tuple
let employee: [string, number]

// Khởi tạo giá trị cho tuple
employee = ["John", 30]

// Truy cập các phần tử của tuple
console.log(`Tên nhân viên: ${employee[0]}, Tuổi: ${employee[1]}`)

console.log("Enums")
// Khai báo một enum
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// Sử dụng enum
let playerDirection: Direction = Direction.Up
console.log(`Hướng di chuyển của người chơi: ${playerDirection}`)

//-----------------

//Type Guards
console.log("Type Guards")

// Type guard function for checking if a value is a string
function isString(value: any): value is string {
  return typeof value === "string"
}

// Type guard function for checking if a value is a number
function isNumber(value: any): value is number {
  return typeof value === "number"
}

// Sử dụng Type Guards
let x: any = 10

if (isString(x)) {
  console.log(`${x} là một chuỗi.`)
} else if (isNumber(x)) {
  console.log(`${x} là một số.`)
} else {
  console.log("Không xác định được loại của x.")
}
