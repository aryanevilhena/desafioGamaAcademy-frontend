import styled from "styled-components";



export const Header = styled.header`
    display: flex;
    /* justify-content: space-between; */
    /* padding: 10px 20px; */
    background: #8d50ff;  
    background: -webkit-linear-gradient(to left, #3f2b96, #8d50ff);  
    background: linear-gradient(to left, #3f2b96, #8d50ff);    
    /* background-position: top; */
    height: 4rem;
    align-items: center;
    `;

export const HeaderTitle = styled.h1`
    /* display: inline-flex;
     flex-direction: row; */
    /* margin-left: 7rem; */
    color: white;
    font-size: 20px;
    /* align-items: center; */
    /* justify-content: center; */
    text-shadow: 3px 3px 0px #000;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    margin-left: 0;
 `;

export const DivSectionJobs = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;
export const Content = styled.section`
display: inline-flex;
/* flex-wrap: wrap; */
flex-direction: column;
max-width: 50%;
/* display: grid; */
/* flex-direction: column; */
align-items: center;
justify-content: start;
margin-right: 20px;
margin-top: 2rem;
box-shadow: 0.5rem;
`;

export const ContentCadastro = styled.section`
    display: flex;
    /* flex-wrap: wrap; */
    flex-direction: column;
    max-width: 50%;
    /* display: grid; */
    /* flex-direction: column; */
    align-items: center;
    
    justify-content: flex-end;
    margin-right: 60px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    
    box-sizing: content-box;
    text-align: justify;
    box-shadow: 10px;
    border: 1px solid #c5c8cf;

    background-color: #fff;
    border-radius: 0.5rem;
    
`;

export const DadosPessoais = styled.fieldset`
    width: 45vw;
    float: left;
    margin-right: 1em;
    /* border-radius: 0.5rem; */
    /* background-color: #E6E6FA; */
    background-color: #fff;
    border: none;
    
    box-sizing: border-box;
    
`;

export const Documentos = styled.fieldset`
    float: left;
    margin-right: 1em;
    /* margin-top: 10px; */
    width: 45vw;
    /* height: 40vh; */
    /* border-radius: 0.5rem; */
    background-color: #fff;
    border: none;
    
`;

export const FormInput = styled.input`
    padding-left: 5px;
    border: 1.5px solid black;
    border-radius: 0.3rem;
    width: 9rem;
    margin-top: 10px;
    margin-left: 5px;
        &:focus {
            outline: none;
            box-shadow: none;
            border-color: #8c54fb;
            /* background: #ccb7fc; */
        }
`;

export const Select = styled.select`
    width: 9rem;
    border: 1.5px solid black;
    border-radius: 0.3rem;
    margin-top: 10px;
    margin-left: 5px;
    &:focus {
            outline: none;
            box-shadow: none;
            border-color: #8c54fb;
        }
`;

export const Button = styled.button`
    /* margin-top: 15px;
    width: 45vw;
    cursor: pointer; */
    font-size: 1.2em;
    background: #59429D;
    border: 0;
    margin-top: 15px;
    margin-bottom: 3rem;
    height: 40px;
    color: #ffffff;
    box-shadow: 2px, 2px, 2px, rgba(0, 0, 0, 0.2);
    text-shadow: 1px, 1px, 1px rgba(0, 0, 0, 0.2);
    transform: translate(-50%, 50%);
    cursor: pointer;
    width: 23vw;
    border-radius: 0.5rem;
    margin-right: 0;
    
    &:hover {
        background: #ccbbff;
        box-shadow: inset 2px, 2px, 2px, rgba(0, 0, 0, 0.2);
        text-shadow: none;
    }

`;

export const ErrorSpan = styled.span`
  color: red;
  font-family: 'Roboto Mono', monospace;
  font-size: 15px;
  display: ${(props) => props.isError ? 'block' : 'none'};
`;

export const Label = styled.label`
    margin-right: 5px;
    margin-left: 10px;
    font-weight: 600;
    font-size: 13px;
    color: #1d2129;

`;

export const LabelRequired = styled.label`

/* margin-right: 4px; */
margin-left: 8px;
font-weight: 600;
font-size: 13px;
color: #1d2129;

&:after {
        margin-left: 4px;
        font-size: 12px;
        font-weight: bold;
        content: '*';
        color: #E62F5C;
    }
`;

export const LabelTitle = styled.label`
    margin-top: 5px;
    color: #9699a4;
    font-size: 18px;
    font-weight: 700;
    /* background-color: #9c64fc; */
    
`;

export const Div = styled.div`
    padding: 0.5rem;
    display: inline-block;
    margin-inline-start: 0.5rem;
`;

export const Ptexto = styled.p`
    padding: 15px 15px 15px 15px;
    margin: 5px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: justify;
    font-size: 18px;
    font-weight: 600;
    color: #9699a4;

`;

export const ImgJOBSNET = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 100%;
`;

