import {useState} from "react";

const App = () => {
    const [text, setText] = useState("")
    const onChangeText = e => {
        const {value} = e.target
        setText(value)
    }
    return (
        <div className="container">
            <div className="row">
                <textarea value={text}
                          onChange={onChangeText}
                          className="text"
                          rows="10"
                          name="text1"
                          placeholder="Введи текст"/>

            </div>
            <div className="row">
                <div className="notebook">
                    <pre className="block-1">
                        {text}
                    </pre>
                </div>
            </div>
        </div>
    )
}
export default App;
