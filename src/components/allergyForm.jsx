import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

class allergyForm extends Component {
    constructor(props) {
        super(props);

        this.allergen = [];

        this.state = {
            allergens: [],
            checkbox: {
                milk: false,
                egg: false,
                fish: false,
                shellfish: false,
                treeNuts: false,
                peanuts: false,
                wheat: false,
                soy: false,
                corns: false}
        }
    }

    updateAllergy = e => {
        this.allergen.push(e.target.value)
        // this.setState({
        //     allergy: this.allergen
        // });
        this.setState({allergens: this.allergen})
        this.setState({checkbox: {[e.target.name]: true}});
        alert(this.state.allergens, this.state.checkbox);
    }

    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Checkbox
                        name="milk"
                        label="Milk"
                        value="milk"
                        checked={this.state.checkbox.milk}
                        onChange={this.updateAllergy}
                    />
                    <Checkbox
                        name="egg"
                        label="Egg"
                        value="egg"
                        checked={this.state.checkbox.egg}
                        onChange={this.updateAllergy}
                    />
                    <Checkbox
                        name="fish"
                        label="Fish"
                        value="fish"
                        checked={this.state.checkbox.fish}
                        onChange={this.updateAllergy}
                    />
                </Grid>
            </Grid>
        );
    }
}

export default allergyForm;