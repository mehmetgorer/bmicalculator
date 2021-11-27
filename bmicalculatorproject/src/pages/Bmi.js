import React, { useEffect, useState} from 'react';
import dataResult from "../data/dataResult"
import dataDiet from "../data/dataDiet"
import ShowDiet from '../components/ShowDiet';

function Bmi() {

    const [bmiResult, setBmiResult] = useState(null);
    const [status,setStatus] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [, ] =useState(dataResult);
    const [dietItems,setDietItems]= useState(dataDiet)
    const [id, setId] =useState(0);
    const [color,setColor] = useState("");

   
    const [values,setValues] = useState({
        name: "",
        height: "",
        weight: "",
    });

    const handleHeightInputChange = (event) => {
        setValues({...values, height: event.target.value})
    }

    const handleWeightInputChange = (event) => {
        setValues({...values, weight: event.target.value})
    }

    const handleNameInputChange = (event) => {
        setValues({...values, name: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let bmi = Number(values.weight / (values.height / 100) ** 2).toFixed(2);
        setBmiResult(bmi);
        let bmiStatus = getStatus(bmi);
        setStatus(bmiStatus);
        setSubmitted(true);
        var today = new Date();  
        var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
        let formData = JSON.parse(localStorage.getItem('formData')) || [];
        formData.push({
            DaTe : date,
            resultBmi: bmi,
            Name: values.name
        });
        localStorage.setItem('formData', JSON.stringify(formData));
    }

    function getStatus(bmi) {
         if(bmi<18.5 && bmi>0) return [dataResult[0].text, setId(0), setColor("red") ]
        else if(bmi>=18.5 && bmi <=24.9) return [dataResult[1].text , setId(1), setColor("green") ]
        else if(bmi>24.9 && bmi <=29.9) return [dataResult[2].text, setId(2), setColor("red") ]
        else if(bmi>29.9) return [dataResult[3].text, setId(3), setColor("red") ]
    }

    useEffect(()=>{
        const dietItems =  dataDiet[id];
        setDietItems(dietItems);
    },[id,status])

    return (
       <main className="calc-container">     
           <form className="bmi-form" onSubmit={handleSubmit} >
               <h2>Calculate Your BMI</h2>
               <input 
               placeholder="Name"
               value={values.name}
               onChange={handleNameInputChange} />
               {submitted && !values.name && <span>Please enter a name</span>} 
               <input 
               name="weight" 
               placeholder="Weight (kg)" 
               type="number"  
               value={values.weight} 
               onChange={handleWeightInputChange} />
               {submitted && !values.weight && <span>Please enter weight</span>}
               <input 
               name="height" 
               placeholder="Height (cm)" 
               type="number"   
               value={values.height} 
               onChange={handleHeightInputChange} />
               {submitted && !values.height && <span>Please enter height</span> }
               <button type="submit" className="btn">Calculate</button>
                <section>
                       {!isNaN(bmiResult) && isFinite(bmiResult) && submitted && (
                           <>
                           <div className="text" >
                               <ShowDiet items = {dietItems} />
                            </div>
                               <aside className="result">
                                <h3 style={{
                                    backgroundColor: color,
                                    borderRadius: "5px",
                                    color:"white",
                                    height:"2rem",
                                    padding:"10px"
                                    }} >Your BMI is: {bmiResult}</h3>
                               <p className="status" >You are currently: {status} </p>
                               </aside>
                           </>
                       )}
                </section>
           </form>
       </main>
    )
}
export default Bmi
