import React, { useState } from 'react'

function OnInputEvent() {

    const [text, setText] = useState("")
    // const [count, setCount] = useState(0)

    const [msg, setMsg] = useState("")

    const hanldeInput = (e) => {
        e.target.style.color = "red"
        setText(e.target.value)
    }

    const onScrolled = (e) => {
        // console.log(e);
        const { scrollTop, scrollHeight, clientHeight } = e.target;

        const position = Math.ceil(
            (scrollTop / (scrollHeight - clientHeight)) * 100
        );

        if (position === 101) {
            setMsg("Reaching maximum height!")
        } else {
            setMsg("")
        }
        // setCount(count + 1)

    }
    return (
        <div>
            <h3>OnInput Events</h3>

            <p>Input :- {text}</p>

            text <input type="text" onChange={hanldeInput} />
            <br /><br />

            number <input type="number" onChange={hanldeInput} />
            <br /><br />

            date <input type="date" onChange={hanldeInput} />
            <br /><br />

            email <input type="email" onChange={hanldeInput} />
            <br /><br />

            checkbox <input type="checkbox" onChange={hanldeInput} />
            <br /><br />

            password <input type="password" onFocus={(e) => e.target.style.outlineColor = "red"} />
            <br /><br />

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>

                <div style={{ width: "300px", height: "400px", border: "1px solid black", overflow: "scroll", textAlign: "justify" }} onScroll={onScrolled}>
                    <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto placeat laborum nemo doloribus. Vero, nulla reprehenderit quaerat perferendis sunt natus et molestias saepe non neque? Commodi necessitatibus facilis quod recusandae.
                        Blanditiis, numquam, rem expedita molestiae eaque esse animi quos dolorum quia, provident facere cum ab dolores iusto aperiam. Excepturi quos molestiae, nisi quisquam dolor illo modi reiciendis doloribus repellat quo!
                        Necessitatibus hic maxime molestias facilis deserunt dicta quos ullam modi sit ut rerum, animi excepturi ipsam officiis voluptate impedit enim! Quisquam numquam, nemo iusto quas repellendus reprehenderit veniam aut quaerat?
                        Illum, repellat maxime eaque ipsa molestias dicta ipsam voluptatem ipsum non corporis soluta sunt alias, sint quaerat repellendus minima? Et labore nihil laborum dignissimos, molestiae similique accusantium est. Quod, vel.
                        Voluptas ut quam dolorem. Incidunt voluptatum earum voluptatibus nobis consequatur maiores aliquid quam sapiente sunt tenetur! Minus a explicabo quidem placeat veritatis enim, quam laboriosam nam ipsa similique quibusdam libero?
                        Alias consequuntur pariatur possimus minima, corrupti aspernatur assumenda hic, vitae distinctio reiciendis error fuga saepe natus unde accusantium! Rem reiciendis similique minus recusandae quasi quia libero quam mollitia quibusdam voluptas?
                        Asperiores eos dicta magni excepturi hic iste ut quibusdam possimus nam autem blanditiis, ipsum alias consectetur accusantium illo enim sunt, ex facere a doloremque. Rem qui rerum minima quis. Aspernatur!

                    </p>

                </div>
            </div>
            <p>{msg}</p>
            {/* <p>Scroll Time:- {count}</p> */}


        </div>
    )
}

export default OnInputEvent
