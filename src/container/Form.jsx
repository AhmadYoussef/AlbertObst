import React from 'react';
import axios from 'axios';
import './Form.scss';
import AlertMessage from './AlertMessage/AlertMessage';

const initialState = {
    firma:{
        value: '',
        validity :{
            require: true,
            regex: /^[a-zA-Z]+/,
            minLength: 2
        },
        isValid: false
    }, 
    address:{
        value: '',
        validity :{
            require: true,
            minLength: 6
        },
        isValid: false
    }, 
    plz:{
        value: '',
        validity :{
            require: true,
            regex: /^\d{4,5}$/
        },
        isValid: false
    }, 
    city:{
        value: '',
        validity :{
            require: true,
            regex: /^[A-Za-z]{3,}$/
        },
        isValid: false
    }, 
    clintMail:{
        value: '',
        validity :{
            require: true,
            regex:  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        },
        isValid: false
    }, 
    telephone:{
        value: '',
        validity :{
            require: true,
            regex: /^\+|[0-9]?()[0-9](\s|\S)(\d[0-9]{2})$/
        },
        isValid: false
    },
    empCount:{
        value: '',
        validity :{
            require: true,
            regex: /^[1-9]\d*$/
        },
        isValid: false
    },
    message:{
        value: '',
        validity :{
            require: false,
            
        },
        isValid: true
    }
}
class Form extends React.Component{
    state={
        formField:{
            ...initialState
        },
        isSubmit: false,
        isSend: false,
        resMessage: {
            sent : true,
            message: 'yaaay!'
        }
    }
    checkValidation = (value, rule)=>{
        let isValid = true;
        if(rule.require){
            isValid = value.trim() !== "" && isValid;
            if(rule.regex){
                isValid = rule.regex.test(value) && isValid;
            }
            if(rule.minLength){
                isValid = rule.minLength < value.length && isValid;
            }
        }
        return isValid;
    }
    updateInputValueHandler = (e,field)=>{
        let formInputs = {...this.state.formField};
        let updateFormInput = {...formInputs[field]};
        updateFormInput.value = e.target.value;
        updateFormInput.isValid = this.checkValidation(updateFormInput.value, updateFormInput.validity);
        formInputs[field] = updateFormInput;
        
        this.setState({formField : formInputs});
    }
    sendMail = (e)=>{
        e.preventDefault();

        this.setState({isSubmit: true});
        let formIsValid = true;
        for(let theKey in this.state.formField){
            formIsValid = this.state.formField[theKey].isValid && formIsValid;
        }
        if(formIsValid){

            let bodyObj ={};
            for(let theKey in this.state.formField){
                bodyObj[theKey] = this.state.formField[theKey].value;
            }
            this.setState({formField : initialState, isSubmit: false})
            axios.post("https://albertobst.com/mytest/index.php", bodyObj)
                .then(res => this.setState({isSend : true , resMessage: {...res.data}},()=>{
                    setTimeout(()=>{ this.closeMessageLoader()}, 6000)
                }));
        }
    }
    closeMessageLoader = ()=>{
        this.setState({isSend: false})
    }
    render(){
    return(
        <>
    <form onSubmit={this.sendMail}>
        <label htmlFor="companyName"> Firma:
            <input 
                className={!this.state.formField['firma'].isValid && this.state.isSubmit ? 'error' : ""}
                name="companyName" 
                type="text" 
                placeholder="Enter your company name..." 
                value={this.state.formField['firma'].value}  
                onChange={(e)=>this.updateInputValueHandler(e,'firma')}/>
        </label>
        <div  className="addPlz">
            <label htmlFor="address">Strasse u. Hausnummer:
                <input 
                    className={!this.state.formField['address'].isValid && this.state.isSubmit ? 'error' : ""}
                    name="address" 
                    type="text" 
                    placeholder="Enter your address with house number" 
                    value={this.state.formField['address'].value} 
                    onChange={(e)=>this.updateInputValueHandler(e,'address')}/>
            </label>
            <label htmlFor="plz"> PLZ:
                <input 
                    className={!this.state.formField['plz'].isValid && this.state.isSubmit ? 'error' : ""}
                    name="plz" 
                    type="text" 
                    placeholder="Enter your postleitzahl" 
                    value={this.state.formField['plz'].value}  
                    onChange={(e)=>this.updateInputValueHandler(e,'plz')}/>
            </label>
        </div>
        <label htmlFor="Ort">Ort :
            <input 
                className={!this.state.formField['city'].isValid && this.state.isSubmit ? 'error' : ""}
                name="Ort" 
                type="text" 
                placeholder="Enter your  city name..." 
                value={this.state.formField['city'].value}  
                onChange={(e)=>this.updateInputValueHandler(e,'city')}/>
        </label>
        <label htmlFor="mail">Email Address :
            <input 
                className={!this.state.formField['clintMail'].isValid && this.state.isSubmit ? 'error' : ""}
                name="mail" 
                type="text" 
                placeholder="Enter your  Email address..." 
                value={this.state.formField['clintMail'].value}  
                onChange={(e)=>this.updateInputValueHandler(e,'clintMail')}/>
        </label>
        <label htmlFor="phone">Telefon :
            <input 
                className={!this.state.formField['telephone'].isValid && this.state.isSubmit ? 'error' : ""}
                name="phone" 
                type="text" 
                placeholder="Enter your  Email address..." 
                value={this.state.formField['telephone'].value}  
                onChange={(e)=>this.updateInputValueHandler(e,'telephone')}/>
        </label>
        <label htmlFor="employee"> Mitarbeiteranzahl :
            <input 
                className={!this.state.formField['empCount'].isValid && this.state.isSubmit ? 'error' : ""}
                name="employee" 
                type="number" 
                placeholder="How many employee do you have..." 
                value={this.state.formField['empCount'].value}  
                onChange={(e)=>this.updateInputValueHandler(e,'empCount')}/>
        </label>
        <label htmlFor="message">Ihre Nachricht an uns :
            <textarea 
                name="message" 
                rows="7" 
                placeholder="Enter your Message..." 
                value={this.state.formField['message'].value}  
                onChange={(e)=>this.updateInputValueHandler(e,'message')}></textarea>
        </label>
        <input type="submit" value="Send" />
    </form>
    {this.state.isSend ? <AlertMessage {...this.state.resMessage} click={this.closeMessageLoader} /> : null}
    </>
    );
}
}
export default Form;