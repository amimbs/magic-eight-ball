const Eightball = (props) => {
    return (
        <div>
            <div className="shadow"></div>

            <div className="epos">
                <div className="eball">
                    <div className="egrad"></div>
                    <div className="ewin"></div>
                    <div className="triangle"></div>
                    <div className="textbox">{props.answer}</div>
                </div>
            </div>
        </div>
    )
};

export default Eightball;