import React, { useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'


function QRGenerator() {
    const[inputText, setInputText]= useState('')
  return (
    <div style={{textAlign:'center', padding:'20px'}}>
        <h2>QR CODE GENERATOR</h2>
        <input 
             type='text'
             placeholder='Enter text'
             value={inputText}   
             onChange={(e)=> setInputText(e.target.value)}
             style={{padding:'10px',fontSize:'15px'}}
             
        />

    <div style={{marginTop:'20px'}}>
        {
            inputText&&(
                <QRCodeCanvas
                value={inputText}
                size={256}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                 />
            )
        }
    </div>
    
</div>
  )
}
export default QRGenerator