import React, {useState} from 'react'

export default function Bmi() {
    const [heightext, setHeightText]= useState("");
    const [weightext, setWeightText]= useState("");
    

    const clickHandlerheight =(event) =>{
        setHeightText(event.target.value)
        
    }
    const clickHandlerweight =(event) =>{
        setWeightText(event.target.value)
        
    }

    const addCalcualte = () =>
    {
        let height = heightext;
        let weight = weightext;
        
        let bmitotal = weight * 703 / Math.pow(height, 2)   ;
        
        if(bmitotal < 18.5)
        {
            return "UnderWeight " + bmitotal;
        }

        if (bmitotal > 18.5 && bmitotal < 25)
        {
            return "Normal Weight " + bmitotal;
        }
        if (bmitotal > 25 && bmitotal < 30)
        {
            return "Over Weight " + bmitotal;
        }
        else{
            return "You Are Over " + bmitotal;
        }
        
    }
  return (
    <div className='container'>
        <h1 className='text-center fw-bold mt-2 mb-2'>BMI Calculator</h1>
        <div className='bmiview'>
            <h6>Weight(pounds)</h6>
            <input type="number" value={weightext} onChange={clickHandlerweight}  placeholder='Enter Weight' className='form-control' />
            <h6>Height(inch)</h6>
            <input type="number" value={heightext} onChange={clickHandlerheight}   placeholder='Enter Height' className='form-control' />

            
            <div className='text-center mt-4'>
            <button onClick={addCalcualte} className='btn btn-info'>Calculate</button>
            </div>
        </div>

        <div>
            <h3>Your Bmi Is : {addCalcualte()} </h3>
        </div>
    </div>
  )
}
