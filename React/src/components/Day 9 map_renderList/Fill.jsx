export default function Example() {
    return (
        <div >
            <h3>Fill</h3>
            {Array(4)         // define size 4
                .fill()       // defined poation
                .map((item, index) => (
                    <Post key={index} />
                ))}

        </div>
    );
}
function Post() {
    return <div>I'm a post</div>;
}


// fill(value)
// fill(value, start)
// fill(value, start, end)

// In this Example create Array of 4 size with fill
// fill() => filled space with element that are passed
// iterate appling map

// Parameter of fill()
// const array1=[1,2,3,4]

// 3 parameter  Fill with 0 from position 2 until position 4
// console.log(array1.fill(0,2,4));
// Expected output: Array [1, 2, 0, 0]

// 2 parmater (Fill with 5 from position 1)
// console.log(array1.fill(5, 2));
// Expected output: Array [1, 2, 5, 5]

// 1 paramter (Fill with all paramer with 6)
// console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]

// 0 paramter (fill with undefined)
// console.log(array1.fill());
// Expected output: Array [undefined, undefined, undefined, undefined]