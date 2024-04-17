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
