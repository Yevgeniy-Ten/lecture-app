import {useState} from "react";

const App = () => {
    const [texts, setTexts] = useState({
        text1: "",
        text2: ""
    })
    const onChangeText = e => {
        const {name, value} = e.target
        setTexts(prev => ({...prev, [name]: value}))
    }
    return (
        <div className="container">
            <div className="row">
                <textarea value={texts.text1}
                          onChange={onChangeText}
                          className="text"
                          rows="10"
                          name="text1"
                          placeholder="Левая часть"/>
                <textarea value={texts.text2}
                          name="text2"
                          onChange={onChangeText}
                          className="text"
                          rows="10"
                          placeholder="Правая часть"/>
            </div>
            <div className="row">
                <div className="notebook">
                    <pre className="block-1">
                        {texts.text1}
                    </pre>
                    <pre className="block-2">
                       {texts.text2}
                    </pre>
                </div>
            </div>
        </div>
    )
}
export default App;
