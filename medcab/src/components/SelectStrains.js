// import React, {useState} from 'react';
// import { Button, ButtonGroup } from 'reactstrap';
// import '../App.css';

// const SelectStrains = (props) => { 
//     const [type, setType] = useState(null);
//     const [effect, setEffect] = useState([]);
//     const [flavor, setFlavor] = useState([]);

//     // const onCheckboxBtnClick= (selected) => {
//     //     const index = type.indexOf(selected);
//     //     if (index < 0) {
//     //         type.push(selected);
//     //     } else {
//     //         type.splice(index, 1);
//     //     }
//     //     setType([...type]);
//     // }

//     const onCheckboxBtnClick1 = (selected) => {
//         const effectIndex = effect.indexOf(selected);
//         if (effectIndex < 0) {
//             effect.push(selected);
//         } else {
//             effect.splice(effectIndex, 1);
//         }
//         setEffect([...effect]);
//     }

//     const onCheckboxBtnClick2 = (selected) => {
//         const flavorIndex = flavor.indexOf(selected);
//         if (flavorIndex < 0) {
//             flavor.push(selected);
//         } else  {
//             flavor.splice(flavorIndex, 1);
//         }
//         setFlavor([...flavor]);
//     }

//     return (
//         <div className='strain-form'>
//             <h2>Strains</h2>
//                 <ButtonGroup>
//                     <h3>Select Type</h3>
//                         <Button onClick={() => setType(1)} active={type === 1}>1: Indica</Button>
//                         <Button onClick={() => setType(2)} active={type === 2}>2: Sativa</Button>
//                         <Button onClick={() => setType(3)} active={type === 3}>3: Hybrid</Button>   
//                 </ButtonGroup>
//                 <p>Selected Type: {type}</p>

//                 <ButtonGroup className='selected-effects'>
//                     <h3>Select Desired Effect</h3>
//                         <Button onClick={() => onCheckboxBtnClick1(1)} active={effect.includes(1)}>1: Creative</Button>
//                         <Button onClick={() => onCheckboxBtnClick1(2)} active={effect.includes(2)}>2: Energetic</Button>
//                         <Button onClick={() => onCheckboxBtnClick1(3)} active={effect.includes(3)}>3: Tingly</Button>
//                         <Button onClick={() => onCheckboxBtnClick1(4)} active={effect.includes(4)}>4: Euphoric</Button>
//                         <Button onClick={() => onCheckboxBtnClick1(5)} active={effect.includes(5)}>5: Relaxed</Button>
//                         <Button onClick={() => onCheckboxBtnClick1(6)} active={effect.includes(6)}>6: Aroused</Button>
//                         <Button onClick={() => onCheckboxBtnClick1(7)} active={effect.includes(7)}>7: Happy</Button>
//                         <Button onClick={() => onCheckboxBtnClick1(8)} active={effect.includes(8)}>8: Uplifted</Button>
//                         <Button onClick={() => onCheckboxBtnClick1(9)} active={effect.includes(9)}>9: Hungry</Button>
//                         <Button onClick={() => onCheckboxBtnClick1(10)} active={effect.includes(10)}>10: Talkative</Button>
//                         <Button onClick={() => onCheckboxBtnClick1(11)} active={effect.includes(11)}>11: Giggly</Button>
//                         <Button onClick={() => onCheckboxBtnClick1(12)} active={effect.includes(12)}>12: Focused</Button>
//                         <Button onClick={() => onCheckboxBtnClick1(13)} active={effect.includes(13)}>13: Sleepy</Button>
//                         <Button onClick={() => onCheckboxBtnClick1(14)} active={effect.includes(14)}>14: Dry Mouth</Button>
//                 </ButtonGroup>
//             <p>Selected Effect: {JSON.stringify(effect)}</p>

//                 <ButtonGroup className='selected-flavors'>
//                     <h3>Select Flavor/Smell</h3>
//                         <Button onClick={() => onCheckboxBtnClick2(1)} active={flavor.includes(1)}>1: Earthy</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(2)} active={flavor.includes(2)}>2: Sweet</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(3)} active={flavor.includes(3)}>3: Citrus</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(4)} active={flavor.includes(4)}>4: Flowery</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(5)} active={flavor.includes(5)}>5: Violet</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(6)} active={flavor.includes(6)}>6: Diesel</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(7)} active={flavor.includes(7)}>7: Spicy/Herbal</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(8)} active={flavor.includes(8)}>8: Sage</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(9)} active={flavor.includes(9)}>9: Woody</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(10)} active={flavor.includes(10)}>10: Apricot</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(11)} active={flavor.includes(11)}>11: Grapefruit</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(12)} active={flavor.includes(12)}>12: Orange</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(13)} active={flavor.includes(13)}>13: Pungent</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(14)} active={flavor.includes(14)}>14: Grape</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(15)} active={flavor.includes(15)}>15: Pine</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(16)} active={flavor.includes(16)}>16: Skunk</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(17)} active={flavor.includes(17)}>17: Berry</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(18)} active={flavor.includes(18)}>18: Pepper</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(19)} active={flavor.includes(19)}>19: Menthol</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(20)} active={flavor.includes(20)}>20: Blue Cheese</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(21)} active={flavor.includes(21)}>21: Chemical</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(22)} active={flavor.includes(22)}>22: Mango</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(23)} active={flavor.includes(23)}>23: Lemon</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(24)} active={flavor.includes(24)}>24: Peach</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(25)} active={flavor.includes(25)}>25: Vanilla</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(26)} active={flavor.includes(26)}>26: Nutty</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(27)} active={flavor.includes(27)}>27: Chestnut</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(28)} active={flavor.includes(28)}>28: Tea</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(29)} active={flavor.includes(29)}>29: Tobacco</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(30)} active={flavor.includes(30)}>30: Tropical</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(31)} active={flavor.includes(31)}>31: Strawberry</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(32)} active={flavor.includes(32)}>32: Blueberry</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(33)} active={flavor.includes(33)}>33: Mint</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(34)} active={flavor.includes(34)}>34: Apple</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(35)} active={flavor.includes(35)}>35: Honey</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(36)} active={flavor.includes(36)}>36: Lavender</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(37)} active={flavor.includes(37)}>37: Lime</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(38)} active={flavor.includes(38)}>38: Coffee</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(39)} active={flavor.includes(39)}>39: Ammonia</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(40)} active={flavor.includes(40)}>40: Minty</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(41)} active={flavor.includes(41)}>41: Tree</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(42)} active={flavor.includes(42)}>42: Fruit</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(43)} active={flavor.includes(43)}>43: Butter</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(44)} active={flavor.includes(44)}>44: Pineapple</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(45)} active={flavor.includes(45)}>45: Tar</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(46)} active={flavor.includes(46)}>46: Rose</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(47)} active={flavor.includes(47)}>47: Plum</Button>
//                         <Button onClick={() => onCheckboxBtnClick2(48)} active={flavor.includes(48)}>48: Pear</Button>
//                 </ButtonGroup>
//             <p>Selected Flavors/Smells: {JSON.stringify(flavor)}</p>
//         </div>
//     );
// };
// export default SelectStrains;
