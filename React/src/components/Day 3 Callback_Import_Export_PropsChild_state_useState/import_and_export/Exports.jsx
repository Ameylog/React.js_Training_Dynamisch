// export variable
export let str="Welcome back"

// export function/ compoenent
export function Child1() {
    return <p>This is the child 1 </p>
}

export function child2() {
    return <p>This is child 2 </p>
}

export function child3() {
    return <p>This is child 3</p>
}

// export array
export const array = [1, 2, 3, 45, 75];

// export sum function
export function sum(a, b) {
    console.log(a + b);
    return a + b;
}

// export object
export const obj = {
    first: "Amey",
    lastName: "Shende"
}

// other way
// function sum(a, b) {
//     console.log(a + b);
//     return a + b;
// }

// const obj = {
//     first: "Amey",
//     lastName: "Shende"
// }

// export { sum, obj }   // common export 