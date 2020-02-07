import React from 'react';
import {Form, Field, withFormik} from 'formik';
import axios from 'axios';
import '../App.css'

const StrainForm = () => {
    return (
        <Form className='strain-search'>
            <h1>Strain Search</h1>

                <div className='type-options'>
                    <h3>Select Type</h3>
                    <Field component='select' name='type'>
                        <option value='select'>Click Here</option>
                            <option value='Indica'>Indica</option>
                            <option value='Sativa'>Sativa</option>
                            <option value='Hybrid'>Hybrid</option>
                    </Field>
                </div>

                <div className='effect-options'>
                    <h3>Select Effect</h3>
                    <Field component='select' name='effect'>
                        <option value='select'>Click Here</option>
                            <option value='Creative'>Creative</option>
                            <option value='Energetic'>Energetic</option>
                            <option value='Tingly'>Tingly</option>
                            <option value='Euphoric'>Euphoric</option>
                            <option value='Relaxed'>Relaxed</option>
                            <option value='Aroused'>Aroused</option>
                            <option value='Happy'>Happy</option>
                            <option value='Uplifted'>Uplifted</option>
                            <option value='Hungry'>Hungry</option>
                            <option value='Talkative'>Talkative</option>
                            <option value='Giggly'>Giggly</option>
                            <option value='Focused'>Focused</option>
                            <option value='Sleepy'>Sleepy</option>
                            <option value='Dry-Mouth'>Dry Mouth</option>
                    </Field>
                </div>

               <div className='flavor-options'>
                   <h3>Select Flavor/Smell</h3>
                    <Field component='select' name='flavor'>
                        <option value='select'>Click Here</option>
                            <option value='Earthy'>Earthy</option>
                            <option value='Sweet'>Sweet</option>
                            <option value='Citrus'>Citrus</option>
                            <option value='Flowery'>Flowery</option>
                            <option value='Violet'>Violet</option>
                            <option value='Diesel'>Diesel</option>
                            <option value='Spicy-Herbal'>Spicy/Herbal</option>
                            <option value='Sage'>Sage</option>
                            <option value='Woody'>Woody</option>
                            <option value='Apricot'>Apricot</option>
                            <option value='Grapefruit'>Grapefruit</option>
                            <option value='Orange'>Orange</option>
                            <option value='Pungent'>Pungent</option>
                            <option value='Grape'>Grape</option>
                            <option value='Pine'>Pine</option>
                            <option value='Skunk'>Skunk</option>
                            <option value='Berry'>Berry</option>
                            <option value='Pepper'>Pepper</option>
                            <option value='Menthol'>Menthol</option>
                            <option value='Blue-Cheese'>Blue Cheese</option>
                            <option value='Chemical'>Chemical</option>
                            <option value='Mango'>Mango</option>
                            <option value='Lemon'>Lemon</option>
                            <option value='Peach'>Peach</option>
                            <option value='Vanilla'>Vanilla</option>
                            <option value='Nutty'>Nutty</option>
                            <option value='Chestnut'>Chestnut</option>
                            <option value='Tea'>Tea</option>
                            <option value='Tobacco'>Tobacco</option>
                            <option value='Tropical'>Tropical</option>
                            <option value='Strawberry'>Strawberry</option>
                            <option value='Blueberry'>Blueberry</option>
                            <option value='Mint'>Mint</option>
                            <option value='Apple'>Apple</option>
                            <option value='Honey'>Honey</option>
                            <option value='Lavender'>Lavender</option>
                            <option value='Lime'>Lime</option>
                            <option value='Coffee'>Coffee</option>
                            <option value='Ammonia'>Ammonia</option>
                            <option value='Minty'>Minty</option>
                            <option value='Tree'>Tree</option>
                            <option value='Fruit'>Fruit</option>
                            <option value='Butter'>Butter</option>
                            <option value='Pineapple'>Pineapple</option>
                            <option value='Tar'>Tar</option>
                            <option value='Rose'>Rose</option>
                            <option value='Plum'>Plum</option>
                            <option value='Pear'>Pear</option>
                    </Field>
                        <button type='submit'>Submit</button>
                </div>
        </Form>
    );
};

const FormikStrains = withFormik({
    mapPropsToValues({ type, effect, flavor }) {
        return {
            type: type || '',
            effect: effect || '',
            flavor: flavor || ''
        } 
    }, 
    
    handleSubmit(values, {setStatus}) {
        axios 
            .get('https://dashboard.heroku.com/apps/med-cabinet-1/predict', values)
            .then(res => {
                setStatus(res.data);
                console.log(res);
            })
            .catch(err => console.log(err.response));
    }
})(StrainForm);

export default FormikStrains;