import React from "react";
import { useState } from "react";

const Form = (props) => {
    const [buttonText, setButtonText] = useState("Check Answer")
    const [buttonStyle, setButtonStyle] = useState("form-button")
    const [isCorrect, setIsCorrect] = useState(false);
    const [answer, setAnswer] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        if (answer.toLowerCase() == props.expectedAnswer.toLowerCase()) {
            setIsCorrect(true);
            const updatedCorrectStyle = buttonStyle + " " + "correct";
            setButtonStyle(updatedCorrectStyle);
            setButtonText("Correct!");
            setAnswer("");
        } 
        else {
            const updatedIncorrectStyle = buttonStyle + " " + "incorrect";
            setButtonText("Incorrect!");
            setButtonStyle(updatedIncorrectStyle);
            setAnswer("");
        } 
    }

    const handleChange = (event) => {
        setButtonStyle("form-button");
        setButtonText("Check Answer");
        setAnswer(event.target.value)
    }
    return (
        <form onSubmit={handleSubmit} className="form">
        <label className="form-label">
          "Your Answer"
          <input type="text" value={answer} onChange={handleChange} className="form-input"/>
        </label>
            <input type="submit" value={buttonText} className={buttonStyle} />
      </form>
    );
}
export default Form;