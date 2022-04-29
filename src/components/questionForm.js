import React from "react";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

class QuestionForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let question = encodeURIComponent(e.target.question.value);
        // console.log(question);

        this.props.submitquestion(question);
    };

    render() {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <h1>Type Your Question and Press 'Enter'</h1>
                </Grid>
                <Grid item xs={8}>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <TextField name="question"
                                id="question"
                                label="Question"
                                variant="outlined" />
                        </div>
                    </form>
                </Grid>
            </Grid>
        );
    };
};

export default QuestionForm;